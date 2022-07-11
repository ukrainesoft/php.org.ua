- [« Нові функції](migration72.new-functions.md)
- [Зміни, що ламають зворотну сумісність
»](migration72.incompatible.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.1.x на PHP 7.2.x](migration72.md)
- Нові глобальні константи

## Нові глобальні константи

### Ядро PHP

-
[**`PHP_FLOAT_DIG`**](reserved.constants.md#constant.php-float-dig)
-
[**`PHP_FLOAT_EPSILON`**](reserved.constants.md#constant.php-float-epsilon)
-
[**`PHP_FLOAT_MIN`**](reserved.constants.md#constant.php-float-min)
-
[**`PHP_FLOAT_MAX`**](reserved.constants.md#constant.php-float-max)
-
[**`PHP_OS_FAMILY`**](reserved.constants.md#constant.php-os-family)

### [Інформація про файл](book.fileinfo.md)

-
[**`FILEINFO_EXTENSION`**](fileinfo.constants.md#constant.fileinfo-extension)

### [JSON](book.json.md)

- **`JSON_INVALID_UTF8_IGNORE`**
- **`JSON_INVALID_UTF8_SUBSTITUTE`**

### [GD](book.image.md)

-
[**`IMG_EFFECT_MULTIPLY`**](image.constants.md#constant.img-effect-multiply)
- [**`IMG_BMP`**](image.constants.md#constant.img-bmp)

### [LDAP](book.ldap.md)

-
[**`LDAP_EXOP_START_TLS`**](ldap.constants.md#constant.ldap-exop-start-tls)
-
[**`LDAP_EXOP_MODIFY_PASSWD`**](ldap.constants.md#constant.ldap-exop-modify-passwd)
-
[**`LDAP_EXOP_REFRESH`**](ldap.constants.md#constant.ldap-exop-refresh)
-
[**`LDAP_EXOP_WHO_AM_I`**](ldap.constants.md#constant.ldap-exop-who-am-i)
- [**`LDAP_EXOP_TURN`**](ldap.constants.md#constant.ldap-exop-turn)

### [Хешування пароля](book.password.md)

-
[**`PASSWORD_ARGON2I`**](password.constants.md#constant.password-argon2i)
-
[**`PASSWORD_ARGON2_DEFAULT_MEMORY_COST`**](password.constants.md#constant.password-argon2-default-memory-cost)
-
[**`PASSWORD_ARGON2_DEFAULT_TIME_COST`**](password.constants.md#constant.password-argon2-default-time-cost)
-
[**`PASSWORD_ARGON2_DEFAULT_THREADS`**](password.constants.md#constant.password-argon2-default-threads)

### [PCRE](book.pcre.md)

- **`PREG_UNMATCHED_AS_NULL`**

### [PDO](book.pdo.md)

-
[**`PDO::PARAM_STR_NATL`**](pdo.constants.md#pdo.constants.param-str-natl)
-
[**`PDO::PARAM_STR_CHAR`**](pdo.constants.md#pdo.constants.param-str-char)
-
[**`PDO::ATTR_DEFAULT_STR_PARAM`**](pdo.constants.md#pdo.constants.attr-default-str-param)

### [Sodium](book.sodium.md)

-
[**`SODIUM_LIBRARY_VERSION`**](sodium.constants.md#constant.sodium-library-version)
-
[**`SODIUM_LIBRARY_MAJOR_VERSION`**](sodium.constants.md#constant.sodium-library-major-version)
-
[**`SODIUM_LIBRARY_MINOR_VERSION`**](sodium.constants.md#constant.sodium-library-minor-version)
-
[**`SODIUM_CRYPTO_AEAD_AES256GCM_KEYBYTES`**](sodium.constants.md#constant.sodium-crypto-aead-aes256gcm-keybytes)
-
[**`SODIUM_CRYPTO_AEAD_AES256GCM_NSECBYTES`**](sodium.constants.md#constant.sodium-crypto-aead-aes256gcm-nsecbytes)
-
[**`SODIUM_CRYPTO_AEAD_AES256GCM_NPUBBYTES`**](sodium.constants.md#constant.sodium-crypto-aead-aes256gcm-npubbytes)
-
[**`SODIUM_CRYPTO_AEAD_AES256GCM_ABYTES`**](sodium.constants.md#constant.sodium-crypto-aead-aes256gcm-abytes)
-
[**`SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_KEYBYTES`**](sodium.constants.md#constant.sodium-crypto-aead-chacha20poly1305-keybytes)
-
[**`SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_NSECBYTES`**](sodium.constants.md#constant.sodium-crypto-aead-chacha20poly1305-nsecbytes)
-
[**`SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_NPUBBYTES`**](sodium.constants.md#constant.sodium-crypto-aead-chacha20poly1305-npubbytes)
-
[**`SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_ABYTES`**](sodium.constants.md#constant.sodium-crypto-aead-chacha20poly1305-abytes)
-
[**`SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_IETF_KEYBYTES`**](sodium.constants.md#constant.sodium-crypto-aead-chacha20poly1305-ietf-keybytes)
-
[**`SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_IETF_NSECBYTES`**](sodium.constants.md#constant.sodium-crypto-aead-chacha20poly1305-ietf-nsecbytes)
-
[**`SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_IETF_NPUBBYTES`**](sodium.constants.md#constant.sodium-crypto-aead-chacha20poly1305-ietf-npubbytes)
-
[**`SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_IETF_ABYTES`**](sodium.constants.md#constant.sodium-crypto-aead-chacha20poly1305-ietf-abytes)
-
[**`SODIUM_CRYPTO_AUTH_BYTES`**](sodium.constants.md#constant.sodium-crypto-auth-bytes)
-
[**`SODIUM_CRYPTO_AUTH_KEYBYTES`**](sodium.constants.md#constant.sodium-crypto-auth-keybytes)
-
[**`SODIUM_CRYPTO_BOX_SEALBYTES`**](sodium.constants.md#constant.sodium-crypto-box-sealbytes)
-
[**`SODIUM_CRYPTO_BOX_SECRETKEYBYTES`**](sodium.constants.md#constant.sodium-crypto-box-secretkeybytes)
-
[**`SODIUM_CRYPTO_BOX_PUBLICKEYBYTES`**](sodium.constants.md#constant.sodium-crypto-box-publickeybytes)
-
[**`SODIUM_CRYPTO_BOX_KEYPAIRBYTES`**](sodium.constants.md#constant.sodium-crypto-box-keypairbytes)
-
[**`SODIUM_CRYPTO_BOX_MACBYTES`**](sodium.constants.md#constant.sodium-crypto-box-macbytes)
-
[**`SODIUM_CRYPTO_BOX_NONCEBYTES`**](sodium.constants.md#constant.sodium-crypto-box-noncebytes)
-
[**`SODIUM_CRYPTO_BOX_SEEDBYTES`**](sodium.constants.md#constant.sodium-crypto-box-seedbytes)
-
[**`SODIUM_CRYPTO_KDF_BYTES_MIN`**](sodium.constants.md#constant.sodium-crypto-kdf-bytes-min)
-
[**`SODIUM_CRYPTO_KDF_BYTES_MAX`**](sodium.constants.md#constant.sodium-crypto-kdf-bytes-max)
-
[**`SODIUM_CRYPTO_KDF_CONTEXTBYTES`**](sodium.constants.md#constant.sodium-crypto-kdf-contextbytes)
-
[**`SODIUM_CRYPTO_KDF_KEYBYTES`**](sodium.constants.md#constant.sodium-crypto-kdf-keybytes)
-
[**`SODIUM_CRYPTO_KX_SEEDBYTES`**](sodium.constants.md#constant.sodium-crypto-kx-seedbytes)
-
[**`SODIUM_CRYPTO_KX_SESSIONKEYBYTES`**](sodium.constants.md#constant.sodium-crypto-kx-sessionkeybytes)
-
[**`SODIUM_CRYPTO_KX_PUBLICKEYBYTES`**](sodium.constants.md#constant.sodium-crypto-kx-publickeybytes)
-
[**`SODIUM_CRYPTO_KX_SECRETKEYBYTES`**](sodium.constants.md#constant.sodium-crypto-kx-secretkeybytes)
-
[**`SODIUM_CRYPTO_KX_KEYPAIRBYTES`**](sodium.constants.md#constant.sodium-crypto-kx-keypairbytes)
-
[**`SODIUM_CRYPTO_GENERICHASH_BYTES`**](sodium.constants.md#constant.sodium-crypto-generichash-bytes)
-
[**`SODIUM_CRYPTO_GENERICHASH_BYTES_MIN`**](sodium.constants.md#constant.sodium-crypto-generichash-bytes-min)
-
[**`SODIUM_CRYPTO_GENERICHASH_BYTES_MAX`**](sodium.constants.md#constant.sodium-crypto-generichash-bytes-max)
-
[**`SODIUM_CRYPTO_GENERICHASH_KEYBYTES`**](sodium.constants.md#constant.sodium-crypto-generichash-keybytes)
-
[**`SODIUM_CRYPTO_GENERICHASH_KEYBYTES_MIN`**](sodium.constants.md#constant.sodium-crypto-generichash-keybytes-min)
-
[**`SODIUM_CRYPTO_GENERICHASH_KEYBYTES_MAX`**](sodium.constants.md#constant.sodium-crypto-generichash-keybytes-max)
-
[**`SODIUM_CRYPTO_PWHASH_ALG_ARGON2I13`**](sodium.constants.md#constant.sodium-crypto-pwhash-alg-argon2i13)
-
[**`SODIUM_CRYPTO_PWHASH_ALG_DEFAULT`**](sodium.constants.md#constant.sodium-crypto-pwhash-alg-default)
-
[**`SODIUM_CRYPTO_PWHASH_SALTBYTES`**](sodium.constants.md#constant.sodium-crypto-pwhash-saltbytes)
-
[**`SODIUM_CRYPTO_PWHASH_STRPREFIX`**](sodium.constants.md#constant.sodium-crypto-pwhash-strprefix)
-
[**`SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE`**](sodium.constants.md#constant.sodium-crypto-pwhash-opslimit-interactive)
-
[**`SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE`**](sodium.constants.md#constant.sodium-crypto-pwhash-memlimit-interactive)
-
[**`SODIUM_CRYPTO_PWHASH_OPSLIMIT_MODERATE`**](sodium.constants.md#constant.sodium-crypto-pwhash-opslimit-moderate)
-
[**`SODIUM_CRYPTO_PWHASH_MEMLIMIT_MODERATE`**](sodium.constants.md#constant.sodium-crypto-pwhash-memlimit-moderate)
-
[**`SODIUM_CRYPTO_PWHASH_OPSLIMIT_SENSITIVE`**](sodium.constants.md#constant.sodium-crypto-pwhash-opslimit-sensitive)
-
[**`SODIUM_CRYPTO_PWHASH_MEMLIMIT_SENSITIVE`**](sodium.constants.md#constant.sodium-crypto-pwhash-memlimit-sensitive)
-
[**`SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_SALTBYTES`**](sodium.constants.md#constant.sodium-crypto-pwhash-scryptsalsa208sha256-saltbytes)
-
[**`SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_STRPREFIX`**](sodium.constants.md#constant.sodium-crypto-pwhash-scryptsalsa208sha256-strprefix)
-
[**`SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_OPSLIMIT_INTERACTIVE`**](sodium.constants.md#constant.sodium-crypto-pwhash-scryptsalsa208sha256-opslimit-interactive)
-
[**`SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_MEMLIMIT_INTERACTIVE`**](sodium.constants.md#constant.sodium-crypto-pwhash-scryptsalsa208sha256-memlimit-interactive)
-
[**`SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_OPSLIMIT_SENSITIVE`**](sodium.constants.md#constant.sodium-crypto-pwhash-scryptsalsa208sha256-opslimit-sensitive)
-
[**`SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_MEMLIMIT_SENSITIVE`**](sodium.constants.md#constant.sodium-crypto-pwhash-scryptsalsa208sha256-memlimit-sensitive)
-
[**`SODIUM_CRYPTO_SCALARMULT_BYTES`**](sodium.constants.md#constant.sodium-crypto-scalarmult-bytes)
-
[**`SODIUM_CRYPTO_SCALARMULT_SCALARBYTES`**](sodium.constants.md#constant.sodium-crypto-scalarmult-scalarbytes)
-
[**`SODIUM_CRYPTO_SHORTHASH_BYTES`**](sodium.constants.md#constant.sodium-crypto-shorthash-bytes)
-
[**`SODIUM_CRYPTO_SHORTHASH_KEYBYTES`**](sodium.constants.md#constant.sodium-crypto-shorthash-keybytes)
-
[**`SODIUM_CRYPTO_SECRETBOX_KEYBYTES`**](sodium.constants.md#constant.sodium-crypto-secretbox-keybytes)
-
[**`SODIUM_CRYPTO_SECRETBOX_MACBYTES`**](sodium.constants.md#constant.sodium-crypto-secretbox-macbytes)
-
[**`SODIUM_CRYPTO_SECRETBOX_NONCEBYTES`**](sodium.constants.md#constant.sodium-crypto-secretbox-noncebytes)
-
[**`SODIUM_CRYPTO_SIGN_BYTES`**](sodium.constants.md#constant.sodium-crypto-sign-bytes)
-
[**`SODIUM_CRYPTO_SIGN_SEEDBYTES`**](sodium.constants.md#constant.sodium-crypto-sign-seedbytes)
-
[**`SODIUM_CRYPTO_SIGN_PUBLICKEYBYTES`**](sodium.constants.md#constant.sodium-crypto-sign-publickeybytes)
-
[**`SODIUM_CRYPTO_SIGN_SECRETKEYBYTES`**](sodium.constants.md#constant.sodium-crypto-sign-secretkeybytes)
-
[**`SODIUM_CRYPTO_SIGN_KEYPAIRBYTES`**](sodium.constants.md#constant.sodium-crypto-sign-keypairbytes)
-
[**`SODIUM_CRYPTO_STREAM_NONCEBYTES`**](sodium.constants.md#constant.sodium-crypto-stream-noncebytes)
-
[**`SODIUM_CRYPTO_STREAM_KEYBYTES`**](sodium.constants.md#constant.sodium-crypto-stream-keybytes)

### [Zip](book.zip.md)

-
[**`ZipArchive::EM_NONE`**](zip.constants.md#ziparchive.constants.em-none)
-
[**`ZipArchive::EM_AES_128`**](zip.constants.md#ziparchive.constants.em-aez-128)
-
[**`ZipArchive::EM_AES_192`**](zip.constants.md#ziparchive.constants.em-aez-192)
-
[**`ZipArchive::EM_AES_256`**](zip.constants.md#ziparchive.constants.em-aes256)
