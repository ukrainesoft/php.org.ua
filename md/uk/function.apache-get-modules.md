- [«apache_child_terminate](function.apache-child-terminate.md)
- [apache_get_version »](function.apache-get-version.md)

- [PHP Manual](index.md)
- [Функції Apache](ref.apache.md)
- Повертає список завантажених модулів сервера Apache

#apache_get_modules

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

apache_get_modules — Повертає список завантажених модулів сервера
Apache

### Опис

**apache_get_modules**(): array

Повертає список завантажених модулів сервера Apache.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array) завантажених модулів сервера Apache.

### Приклади

**Приклад #1 Приклад використання **apache_get_modules()****

` <?phpprint_r(apache_get_modules());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> core
[1] u003d> http_core
[2] u003d> mod_so
[3] u003d> sapi_apache2
[4] u003d> mod_mime
[5] u003d> mod_rewrite
)
