- [« openssl_private_decrypt](function.openssl-private-decrypt.md)
- [openssl_public_decrypt »](function.openssl-public-decrypt.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Шифрує дані секретним ключем

#openssl_private_encrypt

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_private_encrypt — Шифрує дані секретним ключем

### Опис

**openssl_private_encrypt**(
string `$data`,
string `&$encrypted_data`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`,
int `$padding` u003d **`OPENSSL_PKCS1_PADDING`**
): bool

**openssl_private_encrypt()** шифрує `data` за допомогою секретного ключа
`private_key` і зберігає результат у `encrypted_data`. Потім дані
можна розшифрувати за допомогою
[openssl_public_decrypt()](function.openssl-public-decrypt.md).

Ця функція використовується, наприклад, для підпису даних. Щоб була
впевненість у тому, хто саме надіслав повідомлення.

### Список параметрів

`data`

`encrypted_data`

`private_key`

`padding`
`padding` може бути однією з констант: **`OPENSSL_PKCS1_PADDING`**,
**`OPENSSL_NO_PADDING`**.

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
