- [«odbc_connect](function.odbc-connect.md)
- [odbc_data_source »](function.odbc-data-source.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає ім'я курсору

#odbc_cursor

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_cursor — Повертає ім'я курсору

### Опис

**odbc_cursor**(resource `$statement`): string\|false

Повертає ім'я курсору для даного result_id.

### Список параметрів

`statement`
Ідентифікатор результату.

### Значення, що повертаються

Повертає ім'я курсора у вигляді рядка або **`false`** у разі
виникнення помилки.
