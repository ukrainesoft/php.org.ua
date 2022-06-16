- [« openssl_x509_fingerprint](function.openssl-x509-fingerprint.md)
- [openssl_x509_parse »](function.openssl-x509-parse.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Вивільняє ресурс сертифіката

# openssl_x509_free

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_x509_free — Вивільняє ресурс сертифіката

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

**openssl_x509_free**([OpenSSLCertificate](class.opensslcertificate.md)
`$certificate`): void

> **Примітка**:
>
> Використання функції не має сенсу. До PHP 8.0.0 вона
> використовувалася закриття ресурсу.

**openssl_x509_free()** видаляє сертифікат з ідентифікатором
`certificate` із пам'яті.

### Список параметрів

`certificate`

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------------|
| 8.0.0 | Функція застаріла, оскільки не має сенсу. |
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509. |
