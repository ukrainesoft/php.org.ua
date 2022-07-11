- [«odbc_field_scale](function.odbc-field-scale.md)
- [odbc_foreignkeys »](function.odbc-foreignkeys.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає тип даних поля

#odbc_field_type

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_field_type — Повертає тип даних поля

### Опис

**odbc_field_type**(resource `$statement`, int `$field`): string\|false

Отримує SQL-тип поля, на яке посилається число у заданому
ідентифікатор результату.

### Список параметрів

`statement`
Ідентифікатор результату.

`field`
Номер поля. Нумерація полів починається з першого.

### Значення, що повертаються

Повертає тип поля у вигляді рядка або **`false`** у разі виникнення
помилки.
