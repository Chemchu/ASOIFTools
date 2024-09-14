{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    rust-overlay.url = "github:oxalica/rust-overlay";
    flake-utils.url = "github:numtide/flake-utils";
    android-nixpkgs = {
      url = "github:tadfisher/android-nixpkgs/stable";  # Usa la rama estable del SDK Android
    };
  };

  outputs = { nixpkgs, rust-overlay, flake-utils, android-nixpkgs, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ (import rust-overlay) ];
        pkgs = import nixpkgs { inherit system overlays; };
      in {
        # Define el devShell principal para Rust
        devShells.default = pkgs.mkShell {
          nativeBuildInputs = [ pkgs.pkg-config ];
          buildInputs = [
            (pkgs.rust-bin.fromRustupToolchain {
              channel = "stable"; # Puedes cambiar el canal
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
          ];
        };

        # Añade la configuración del SDK de Android
        packages.android-sdk = android-nixpkgs.sdk (sdkPkgs: with sdkPkgs; [
          cmdline-tools-latest
          build-tools-34-0-0
          platform-tools
          platforms-android-34
          emulator
        ]);
      }
    );
}
