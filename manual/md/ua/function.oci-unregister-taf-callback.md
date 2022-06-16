- [«oci_statement_type](function.oci-statement-type.md)
- [OCICollection »](class.ocicollection.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Видалити реєстрацію користувача callback-функції для Oracle
Database TAF

#oci_unregister_taf_callback

(PHP 7.0 \>u003d 7.0.23, PHP 8, PHP 7 \>u003d 7.1.9, PHP 8, PECL OCI8 \>u003d 2.1.7)

oci_unregister_taf_callback — Видалити реєстрацію користувача
callback-функції для Oracle Database TAF

### Опис

**oci_unregister_taf_callback**(resource `$connection`): bool

Видаляє реєстрацію користувача callback-функції,
зареєстровану для з'єднання `connection` за допомогою
[oci_register_taf_callback()](function.oci-register-taf-callback.md).
Докладніше читайте [OCI8 Transparent Application Failover (TAF)
Support](oci8.taf.md) .

### Список параметрів

`connection`
Ідентифікатор з'єднання Oracle.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [oci_register_taf_callback()](function.oci-register-taf-callback.md) -
Реєструє функцію зворотного виклику для Oracle
Database TAF
