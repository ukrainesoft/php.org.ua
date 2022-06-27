- [« openssl_pkey_get_private](function.openssl-pkey-get-private.md)
- [openssl_pkey_new »](function.openssl-pkey-new.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Витягує відкритий ключ із сертифікату та готує його до
використанню

# openssl_pkey_get_public

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_pkey_get_public — Витягує відкритий ключ із сертифіката та
готує його до використання

### Опис

**openssl_pkey_get_public**([OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$public_key`):
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|false

**openssl_pkey_get_public()** витягує відкритий ключ з `public_key` і
готує його для використання в інших функціях.

### Список параметрів

`public_key`
`public_key` може бути одним з:

1. екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)
2. рядок виду `file://path/to/file.pem`. Файл має містити
кодований у PEM сертифікат/публічний ключ (може містити і те, і
інше).
3. Відкритий ключ у форматі PEM.

### Значення, що повертаються

Повертає екземпляр
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------|
| 8.0.0 | У разі успішного виконання функція повертає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md); раніше повертався ресурс ([resource](language.types.resource.md)) типу OpenSSL key. |
| 8.0.0 | `public_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509`. |
