- [« openssl_x509_parse](function.openssl-x509-parse.md)
- [openssl_x509_verify »](function.openssl-x509-verify.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Розібрати сертифікат X.509 та повернути для нього об'єкт

# openssl_x509_read

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_x509_read — Розібрати сертифікат X.509 та повернути для нього об'єкт

### Опис

**openssl_x509_read**([OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`):
[OpenSSLCertificate](class.opensslcertificate.md)\|false

**openssl_x509_read()** отримує сертифікат з `certificate` та
повертає об'єкт [OpenSSLCertificate](class.opensslcertificate.md)
для нього.

### Список параметрів

`certificate`
Сертифікат X509 Список коректних значень дивіться на сторінці
[Параметри ключів та сертифікатів](openssl.certparams.md).

### Значення, що повертаються

Повертає об'єкт [OpenSSLCertificate](class.opensslcertificate.md) у
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----|
| 8.0.0 | У разі успішного виконання повертає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше повертався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509. |
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509. |
