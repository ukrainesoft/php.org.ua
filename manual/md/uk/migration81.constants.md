- [« Нові функції](migration81.new-functions.md)
- [Зміни, що ламають зворотну сумісність
»](migration81.incompatible.md)

- [PHP Manual](index.md)
- [Міграція з PHP 8.0.x на PHP 8.1.x](migration81.md)
- Нові глобальні константи

## Нові глобальні константи

### CURL

- **`CURLOPT_DOH_URL`**
- **`CURLOPT_ISSUERCERT_BLOB`**
- **`CURLOPT_PROXY_ISSUERCERT`**
- **`CURLOPT_PROXY_ISSUERCERT_BLOB`**
- **`CURLOPT_PROXY_SSLCERT_BLOB`**
- **`CURLOPT_PROXY_SSLKEY_BLOB`**
- **`CURLOPT_SSLCERT_BLOB`**
- **`CURLOPT_SSLKEY_BLOB`**

### GD

- **`IMG_AVIF`**
- **`IMG_WEBP_LOSSLESS`**

### MySQLi

- **`MYSQLI_REFRESH_REPLICA`**

Ця нова константа була додана для заміни
**`MYSQLI_REFRESH_SLAVE`** відповідно до політики самого MySQL,
відмовився від використання слова "slave". Стара константа
як і раніше доступна для зворотної сумісності, але може бути
оголошена застарілою/віддалена у майбутньому.

### POSIX

- **`POSIX_RLIMIT_KQUEUES`**
- **`POSIX_RLIMIT_NPTS`**

### Сокети

Доступні такі параметри сокету за умови, що вони підтримуються
в системі:

- **`SO_ACCEPTFILTER`**
- **`SO_DONTTRUNC`**
- **`SO_WANTMORE`**
- **`SO_MARK`**
- **`TCP_DEFER_ACCEPT`**

### Sodium

- **`SODIUM_CRYPTO_STREAM_XCHACHA20_NONCEBYTES`**
- **`SODIUM_CRYPTO_STREAM_XCHACHA20_KEYBYTES`**
- **`SODIUM_CRYPTO_SCALARMULT_RISTRETTO255_BYTES`**
- **`SODIUM_CRYPTO_SCALARMULT_RISTRETTO255_SCALARBYTES`**
- **`SODIUM_CRYPTO_CORE_RISTRETTO255_BYTES`**
- **`SODIUM_CRYPTO_CORE_RISTRETTO255_HASHBYTES`**
- **`SODIUM_CRYPTO_CORE_RISTRETTO255_SCALARBYTES`**
- **`SODIUM_CRYPTO_CORE_RISTRETTO255_NONREDUCEDSCALARBYTES`**

### Лексер (Tokenizer)

- **`T_READONLY`**
