- [«odbc_field_len](function.odbc-field-len.md)
- [odbc_field_num »](function.odbc-field-num.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає ім'я стовпця

#odbc_field_name

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_field_name — Повертає ім'я стовпця

### Опис

**odbc_field_name**(resource `$statement`, int `$field`): string\|false

Повертає ім'я поля, що займає заданий номер стовпця у заданому
ідентифікатор результату.

### Список параметрів

`statement`
Ідентифікатор результату.

`field`
Номер поля. Нумерація полів починається з першого.

### Значення, що повертаються

Повертає ім'я поля у вигляді рядка або **`false`** у разі виникнення
помилки.
