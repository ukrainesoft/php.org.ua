- [«odbc_field_name](function.odbc-field-name.md)
- [odbc_field_precision »](function.odbc-field-precision.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає номер стовпця

#odbc_field_num

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_field_num — Повертає номер стовпця

### Опис

**odbc_field_num**(resource `$statement`, string `$field`): int\|false

Отримує номер слота стовпця, який відповідає названому полю
заданому ідентифікаторі результату.

### Список параметрів

`statement`
Ідентифікатор результату.

`field`
Назва поля.

### Значення, що повертаються

Повертає номер поля у вигляді цілого числа або **`false`** у разі
виникнення помилки. Нумерація полів починається з першого.
