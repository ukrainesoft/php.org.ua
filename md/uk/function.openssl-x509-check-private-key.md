- [«openssl_verify](function.openssl-verify.md)
- [openssl_x509_checkpurpose
»](function.openssl-x509-checkpurpose.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Перевірити, чи є секретний ключ до сертифіката

# openssl_x509_check_private_key

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_x509_check_private_key — Перевірити, чи належить секретний ключ
до сертифікату

### Опис

**openssl_x509_check_private_key**([OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`): bool

Перевіряє, що заданий `private_key` є секретним ключем,
відповідним сертифікатом `certificate`.

**Увага**

Функція не перевіряє, чи є private_key секретним ключем або
ні. Він просто порівнює відкриті дані (наприклад, експоненту та модуль
ключа RSA) та/або параметри ключа (наприклад, параметри EC для EC-ключа)
пари ключів.

Тобто якщо помістити в `private_key` відповідний відкритий ключ,
то функція може повернути **`true`**.

### Список параметрів

`certificate`
Сертифікат

`private_key`
Ключ.

### Значення, що повертаються

Повертає **`true`**, якщо `private_key` є ключем
відповідним сертифікату `certificate`, або **`false`** у протилежному
випадку.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------|
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509. |
| 8.0.0 | `private_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509`. |
