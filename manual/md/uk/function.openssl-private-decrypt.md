- [« openssl_pkey_new](function.openssl-pkey-new.md)
- [openssl_private_encrypt »](function.openssl-private-encrypt.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Розшифровує дані за допомогою закритого ключа

#openssl_private_decrypt

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_private_decrypt — Розшифровує дані за допомогою закритого
ключа

### Опис

**openssl_private_decrypt**(
string `$data`,
string `&$decrypted_data`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`,
int `$padding` u003d **`OPENSSL_PKCS1_PADDING`**
): bool

**openssl_private_decrypt()** розшифровує дані `data`, які
раніше були зашифровані за допомогою
[openssl_public_encrypt()](function.openssl-public-encrypt.md) та
зберігає результат у `decrypted_data`.

Ви можете використовувати цю функцію, наприклад, для розшифровки даних,
які мають бути доступні тільки вам та нікому більше.

### Список параметрів

`data`

`decrypted_data`

`private_key`
`private_key` має бути секретним ключем, що відповідає тому, чим ми
шифрували дані.

`padding`
`padding` може набувати одне з наступних значень:
**`OPENSSL_PKCS1_PADDING`**, **`OPENSSL_SSLV23_PADDING`**,
**`OPENSSL_PKCS1_OAEP_PADDING`**, **`OPENSSL_NO_PADDING`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------|
| 8.0.0 | `private_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509`. |

### Дивіться також

- [openssl_public_encrypt()](function.openssl-public-encrypt.md) -
Шифрування даних відкритим ключем
- [openssl_public_decrypt()](function.openssl-public-decrypt.md) -
Розшифровка даних за допомогою відкритого ключа
