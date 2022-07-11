- [« openssl_pkey_export](function.openssl-pkey-export.md)
- [openssl_pkey_get_details »](function.openssl-pkey-get-details.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Визволяє ресурс закритого ключа

# openssl_pkey_free

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_pkey_free — Визволяє ресурс закритого ключа

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

**openssl_pkey_free**([OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)
`$key`): void

> **Примітка**:
>
> Використання функції не має сенсу. До PHP 8.0.0 вона
> використовувалася закриття ресурсу.

Функція вивільняє ресурс закритого ключа, створений
[openssl_pkey_new()](function.openssl-pkey-new.md).

### Список параметрів

`key`
Ресурс, який містить ключ.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------|
| 8.0.0 | Функція застаріла, оскільки не має сенсу. |
| 8.0.0 | `key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL key. |
