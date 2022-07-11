- [« openssl_public_decrypt](function.openssl-public-decrypt.md)
- [openssl_random_pseudo_bytes
»](function.openssl-random-pseudo-bytes.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Шифрування даних відкритим ключем

#openssl_public_encrypt

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_public_encrypt — Шифрування даних відкритим ключем

### Опис

**openssl_public_encrypt**(
string `$data`,
string `&$encrypted_data`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$public_key`,
int `$padding` u003d **`OPENSSL_PKCS1_PADDING`**
): bool

**openssl_public_encrypt()** шифрує `data` відкритим ключем `public_key`
і зберігає в `encrypted_data`. Згодом розшифрувати їх можна
функцією
[openssl_private_decrypt()](function.openssl-private-decrypt.md).

Ця функція використовується, наприклад, для надсилання повідомлень, які
зможе прочитати тільки власник закритого ключа та ніхто більше. Також
її можна використовуватиме шифрування інформації у базі даних.

### Список параметрів

`data`

`encrypted_data`
Міститиме результат шифрування.

`public_key`
Відкритий ключ.

`padding`
`padding` може бути однією з констант: **`OPENSSL_PKCS1_PADDING`**,
**`OPENSSL_SSLV23_PADDING`**, **`OPENSSL_PKCS1_OAEP_PADDING`**,
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
