- [« openssl_private_encrypt](function.openssl-private-encrypt.md)
- [openssl_public_encrypt »](function.openssl-public-encrypt.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Розшифровка даних за допомогою відкритого ключа

#openssl_public_decrypt

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_public_decrypt — Розшифровування даних за допомогою відкритого ключа

### Опис

**openssl_public_decrypt**(
string `$data`,
string `&$decrypted_data`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$public_key`,
int `$padding` u003d **`OPENSSL_PKCS1_PADDING`**
): bool

**openssl_public_decrypt()** розшифровує дані `data`, які раніше
були зашифровані за допомогою
[openssl_private_encrypt()](function.openssl-private-encrypt.md) та
зберігає результат у `decrypted_data`.

Ви можете використовувати цю функцію, наприклад, щоб перевірити, чи було
повідомлення написане власником закритого ключа.

### Список параметрів

`data`

`decrypted_data`

`public_key`
`public_key` має містити відповідний відкритий ключ.

`padding`
`padding` може бути однією з констант: **`OPENSSL_PKCS1_PADDING`**,
**`OPENSSL_NO_PADDING`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------|
| 8.0.0 | `public_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509`. |

### Дивіться також

- [openssl_private_encrypt()](function.openssl-private-encrypt.md) -
Шифрує дані секретним ключем
- [openssl_private_decrypt()](function.openssl-private-decrypt.md) -
Розшифровує дані за допомогою закритого ключа
