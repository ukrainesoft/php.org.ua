- [« openssl_pkey_get_details](function.openssl-pkey-get-details.md)
- [openssl_pkey_get_public »](function.openssl-pkey-get-public.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Отримати закритий ключ

# openssl_pkey_get_private

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_pkey_get_private — Отримати закритий ключ

### Опис

**openssl_pkey_get_private**([OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`, ?string `$passphrase` u003d **`null`**):
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|false

**openssl_pkey_get_private()** розбирає `private_key` та готує
його для використання в інших функціях.

### Список параметрів

`private_key`
`private_key` може бути заданий таким чином:

1. рядок виду `file://path/to/file.pem`. Файл має містити
кодований в PEM сертифікат/закритий ключ (може містити і те, і
інше).
2. Секретний ключ у форматі PEM.

`passphrase`
Якщо ключ захищений паролем, його треба вказати в параметрі `passphrase`.

### Значення, що повертаються

Повертає екземпляр
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------|
| 8.0.0 | У разі успішного виконання функція повертає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md); раніше повертався ресурс ([resource](language.types.resource.md)) типу OpenSSL key. |
| 8.0.0 | `private_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509`. |
| 8.0.0 | `passphrase` тепер допускає значення null. |
