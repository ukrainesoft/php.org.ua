- [« openssl_error_string](function.openssl-error-string.md)
- [openssl_get_cert_locations
»](function.openssl-get-cert-locations.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Вивільнення ресурсу ключа

# openssl_free_key

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

openssl_free_key — Вивільнення ресурсу ключа

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

**openssl_free_key**([OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)
`$key`): void

**openssl_free_key()** видаляє ключ, пов'язаний із заданим
ідентифікатором `key` із пам'яті.

### Список параметрів

`key`

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------------|
| 8.0.0 | Функція застаріла, оскільки не має сенсу. |
| 8.0.0 | `key` тепер приймає [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md); раніше приймала ресурс ([resource](language.types.resource.md)) типу OpenSSL key. |
