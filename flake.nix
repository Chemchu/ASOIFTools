{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    rust-overlay.url = "github:oxalica/rust-overlay";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, rust-overlay, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ (import rust-overlay) ];
        pkgs = import nixpkgs { inherit system overlays; config.allowUnfree = true; config.android_sdk.accept_license = true; };
        androidComposition = (pkgs.androidenv.composeAndroidPackages { includeNDK = true; });
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
            androidComposition.androidsdk
            pkgs.pkg-config
            pkgs.atk
            pkgs.pango
            pkgs.libsoup_3
            pkgs.webkitgtk_4_1
            pkgs.openssl
            pkgs.cargo-tauri
            pkgs.trunk
            pkgs.systemdLibs
          ];

          packages = [
            pkgs.rustup
          ];

          # Use platform-tools as a base for ANDROID_HOME
          shellHook = ''
            export ANDROID_HOME=${androidComposition.androidsdk}/libexec/android-sdk
            export NDK_HOME=$(ls -d $ANDROID_HOME/ndk/* | head -n 1)
          '';
        };
      }
    );
}
