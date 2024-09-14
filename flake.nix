{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    rust-overlay.url = "github:oxalica/rust-overlay";
    flake-utils.url = "github:numtide/flake-utils";
    android-nixpkgs = {
      url = "github:tadfisher/android-nixpkgs/stable";
    };
  };

  outputs = { nixpkgs, rust-overlay, flake-utils, android-nixpkgs, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ (import rust-overlay) ];
        pkgs = import nixpkgs { inherit system overlays; };
        androidSdk = android-nixpkgs.packages.${system};  # Access Android SDK packages
      in {
        devShells.default = pkgs.mkShell {
          nativeBuildInputs = [ pkgs.pkg-config ];
          buildInputs = [
            (pkgs.rust-bin.fromRustupToolchain {
              channel = "stable";
              components = [ "rustfmt" "rust-src" ];
              targets = [ "wasm32-unknown-unknown" ];
              profile = "minimal";
            })
            pkgs.pkg-config
            pkgs.atk
            pkgs.pango
            pkgs.libsoup_3
            pkgs.webkitgtk_4_1
            pkgs.openssl
            pkgs.cargo-tauri
            pkgs.trunk
            pkgs.systemdLibs
            androidSdk.cmdline-tools-latest
            androidSdk.build-tools-34-0-0
            androidSdk.platform-tools
            androidSdk.platforms-android-34
            androidSdk.emulator
          ];

          # Use platform-tools as a base for ANDROID_HOME
          shellHook = ''
            export ANDROID_HOME=${androidSdk.platform-tools}/..  # Navigate up from platform-tools to set ANDROID_HOME
            export PATH=$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH
          '';
        };
      }
    );
}
