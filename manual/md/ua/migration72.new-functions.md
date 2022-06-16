- [« Нові можливості](migration72.new-features.md)
- [Нові глобальні константи »](migration72.constants.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.1.x на PHP 7.2.x](migration72.md)
- Нові функції

## Нові функції

### Ядро PHP

- [stream_isatty()](function.stream-isatty.md)
-
[sapi_windows_vt100_support()](function.sapi-windows-vt100-support.md)

### [SPL](book.spl.md)

- [spl_object_id()](function.spl-object-id.md)

### [DOM](book.dom.md)

- [DomNodeList::count()](domnodelist.count.md)
- [DOMNamedNodeMap::count()](domnamednodemap.count.md)

### [FTP](book.ftp.md)

- [ftp_append()](function.ftp-append.md)

### [GD](book.image.md)

- [imagesetclip()](function.imagesetclip.md)
- [imagegetclip()](function.imagegetclip.md)
- [imageopenpolygon()](function.imageopenpolygon.md)
- [imageresolution()](function.imageresolution.md)
- [imagecreatefrombmp()](function.imagecreatefrombmp.md)
- [imagebmp()](function.imagebmp.md)

### [Hash](book.hash.md)

- [hash_hmac_algos()](function.hash-hmac-algos.md)

### [LDAP](book.ldap.md)

- [ldap_parse_exop()](function.ldap-parse-exop.md)
- [ldap_exop()](function.ldap-exop.md)
- [ldap_exop_passwd()](function.ldap-exop-passwd.md)
- [ldap_exop_whoami()](function.ldap-exop-whoami.md)

### [Багатобайтні рядки](book.mbstring.md)

- [mb_chr()](function.mb-chr.md)
- [mb_ord()](function.mb-ord.md)
- [mb_scrub()](function.mb-scrub.md)

### [Oracle OCI8](book.oci8.md)

-
[oci_register_taf_callback()](function.oci-register-taf-callback.md)
-
[oci_unregister_taf_callback()](function.oci-unregister-taf-callback.md)

### [Сокети](book.sockets.md)

- [socket_addrinfo_lookup()](function.socket-addrinfo-lookup.md)
- [socket_addrinfo_connect()](function.socket-addrinfo-connect.md)
- [socket_addrinfo_bind()](function.socket-addrinfo-bind.md)
- [socket_addrinfo_explain()](function.socket-addrinfo-explain.md)

### [Sodium](book.sodium.md)

- [sodium_add()](function.sodium-add.md)
- [sodium_bin2hex()](function.sodium-bin2hex.md)
- [sodium_compare()](function.sodium-compare.md)
-
[sodium_crypto_aead_aes256gcm_decrypt()](function.sodium-crypto-aead-aes256gcm-decrypt.md)
-
[sodium_crypto_aead_aes256gcm_encrypt()](function.sodium-crypto-aead-aes256gcm-encrypt.md)
-
[sodium_crypto_aead_aes256gcm_is_available()](function.sodium-crypto-aead-aes256gcm-is-available.md)
-
[sodium_crypto_aead_aes256gcm_keygen()](function.sodium-crypto-aead-aes256gcm-keygen.md)
-
[sodium_crypto_aead_chacha20poly1305_decrypt()](function.sodium-crypto-aead-chacha20poly1305-decrypt.md)
-
[sodium_crypto_aead_chacha20poly1305_encrypt()](function.sodium-crypto-aead-chacha20poly1305-encrypt.md)
-
[sodium_crypto_aead_chacha20poly1305_ietf_decrypt()](function.sodium-crypto-aead-chacha20poly1305-ietf-decrypt.md)
-
[sodium_crypto_aead_chacha20poly1305_ietf_encrypt()](function.sodium-crypto-aead-chacha20poly1305-ietf-encrypt.md)
-
[sodium_crypto_aead_chacha20poly1305_ietf_keygen()](function.sodium-crypto-aead-chacha20poly1305-ietf-keygen.md)
-
[sodium_crypto_aead_chacha20poly1305_keygen()](function.sodium-crypto-aead-chacha20poly1305-keygen.md)
-
[sodium_crypto_auth_keygen()](function.sodium-crypto-auth-keygen.md)
-
[sodium_crypto_auth_verify()](function.sodium-crypto-auth-verify.md)
- [sodium_crypto_auth()](function.sodium-crypto-auth.md)
-
[sodium_crypto_box_keypair_from_secretkey_and_publickey()](function.sodium-crypto-box-keypair-from-secretkey-and-publickey.md)
-
[sodium_crypto_box_keypair()](function.sodium-crypto-box-keypair.md)
- [sodium_crypto_box_open()](function.sodium-crypto-box-open.md)
-
[sodium_crypto_box_publickey_from_secretkey()](function.sodium-crypto-box-publickey-from-secretkey.md)
-
[sodium_crypto_box_publickey()](function.sodium-crypto-box-publickey.md)
-
[sodium_crypto_box_seal_open()](function.sodium-crypto-box-seal-open.md)
- [sodium_crypto_box_seal()](function.sodium-crypto-box-seal.md)
-
[sodium_crypto_box_secretkey()](function.sodium-crypto-box-secretkey.md)
-
[sodium_crypto_box_seed_keypair()](function.sodium-crypto-box-seed-keypair.md)
- [sodium_crypto_box()](function.sodium-crypto-box.md)
-
[sodium_crypto_generichash_final()](function.sodium-crypto-generichash-final.md)
-
[sodium_crypto_generichash_init()](function.sodium-crypto-generichash-init.md)
-
[sodium_crypto_generichash_keygen()](function.sodium-crypto-generichash-keygen.md)
-
[sodium_crypto_generichash_update()](function.sodium-crypto-generichash-update.md)
-
[sodium_crypto_generichash()](function.sodium-crypto-generichash.md)
-
[sodium_crypto_kdf_derive_from_key()](function.sodium-crypto-kdf-derive-from-key.md)
-
[sodium_crypto_kdf_keygen()](function.sodium-crypto-kdf-keygen.md)
-
[sodium_crypto_kx_client_session_keys()](function.sodium-crypto-kx-client-session-keys.md)
-
[sodium_crypto_kx_keypair()](function.sodium-crypto-kx-keypair.md)
-
[sodium_crypto_kx_publickey()](function.sodium-crypto-kx-publickey.md)
-
[sodium_crypto_kx_secretkey()](function.sodium-crypto-kx-secretkey.md)
-
[sodium_crypto_kx_seed_keypair()](function.sodium-crypto-kx-seed-keypair.md)
-
[sodium_crypto_kx_server_session_keys()](function.sodium-crypto-kx-server-session-keys.md)
-
[sodium_crypto_pwhash_scryptsalsa208sha256_str_verify()](function.sodium-crypto-pwhash-scryptsalsa208sha256-str-verify.md)
-
[sodium_crypto_pwhash_scryptsalsa208sha256_str()](function.sodium-crypto-pwhash-scryptsalsa208sha256-str.md)
-
[sodium_crypto_pwhash_scryptsalsa208sha256()](function.sodium-crypto-pwhash-scryptsalsa208sha256.md)
-
[sodium_crypto_pwhash_str_verify()](function.sodium-crypto-pwhash-str-verify.md)
-
[sodium_crypto_pwhash_str()](function.sodium-crypto-pwhash-str.md)
- [sodium_crypto_pwhash()](function.sodium-crypto-pwhash.md)
-
[sodium_crypto_scalarmult_base()](function.sodium-crypto-scalarmult-base.md)
-
[sodium_crypto_scalarmult()](function.sodium-crypto-scalarmult.md)
-
[sodium_crypto_secretbox_keygen()](function.sodium-crypto-secretbox-keygen.md)
-
[sodium_crypto_secretbox_open()](function.sodium-crypto-secretbox-open.md)
- [sodium_crypto_secretbox()](function.sodium-crypto-secretbox.md)
-
[sodium_crypto_shorthash_keygen()](function.sodium-crypto-shorthash-keygen.md)
- [sodium_crypto_shorthash()](function.sodium-crypto-shorthash.md)
-
[sodium_crypto_sign_detached()](function.sodium-crypto-sign-detached.md)
-
[sodium_crypto_sign_ed25519_pk_to_curve25519()](function.sodium-crypto-sign-ed25519-pk-to-curve25519.md)
-
[sodium_crypto_sign_ed25519_sk_to_curve25519()](function.sodium-crypto-sign-ed25519-sk-to-curve25519.md)
-
[sodium_crypto_sign_keypair_from_secretkey_and_publickey()](function.sodium-crypto-sign-keypair-from-secretkey-and-publickey.md)
-
[sodium_crypto_sign_keypair()](function.sodium-crypto-sign-keypair.md)
- [sodium_crypto_sign_open()](function.sodium-crypto-sign-open.md)
-
[sodium_crypto_sign_publickey_from_secretkey()](function.sodium-crypto-sign-publickey-from-secretkey.md)
-
[sodium_crypto_sign_publickey()](function.sodium-crypto-sign-publickey.md)
-
[sodium_crypto_sign_secretkey()](function.sodium-crypto-sign-secretkey.md)
-
[sodium_crypto_sign_seed_keypair()](function.sodium-crypto-sign-seed-keypair.md)
-
[sodium_crypto_sign_verify_detached()](function.sodium-crypto-sign-verify-detached.md)
- [sodium_crypto_sign()](function.sodium-crypto-sign.md)
-
[sodium_crypto_stream_keygen()](function.sodium-crypto-stream-keygen.md)
-
[sodium_crypto_stream_xor()](function.sodium-crypto-stream-xor.md)
- [sodium_crypto_stream()](function.sodium-crypto-stream.md)
- [sodium_hex2bin()](function.sodium-hex2bin.md)
- [sodium_increment()](function.sodium-increment.md)
- [sodium_memcmp()](function.sodium-memcmp.md)
- [sodium_memzero()](function.sodium-memzero.md)
- [sodium_pad()](function.sodium-pad.md)
- [sodium_unpad()](function.sodium-unpad.md)

### [ZIP](book.zip.md)

- [ZipArchive::count()](ziparchive.count.md)
-
[ZipArchive::setEncryptionName()](ziparchive.setencryptionname.md)
-
[ZipArchive::SetEncryptionIndex()](ziparchive.setencryptionindex.md)
