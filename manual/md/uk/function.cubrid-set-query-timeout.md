- [«cubrid_set_drop](function.cubrid-set-drop.md)
- [cubrid_version »](function.cubrid-version.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Встановлює час очікування на виконання запиту

#cubrid_set_query_timeout

(PECL CUBRID u003d 8.4.1)

cubrid_set_query_timeout — Встановлює час очікування виконання
запиту

### Опис

**cubrid_set_query_timeout**(resource `$req_identifier`, int
`$timeout`): bool

Функція **cubrid_set_query_timeout()** використовується для встановлення
часу очікування на виконання запиту.

### Список параметрів

`req_identifier`
Request identifier.

`timeout`
Час очікування в мілісекундах.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [cubrid_get_query_timeout()](function.cubrid-get-query-timeout.md) -
Отримує значення часу очікування запиту
