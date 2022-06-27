- [«odbc_field_precision](function.odbc-field-precision.md)
- [odbc_field_type »](function.odbc-field-type.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає масштаб поля

#odbc_field_scale

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_field_scale — Повертає масштаб поля

### Опис

**odbc_field_scale**(resource `$statement`, int `$field`): int\|false

Повертає масштаб поля, на яке посилається число у заданому
ідентифікатор результату.

### Список параметрів

`statement`
Ідентифікатор результату.

`field`
Номер поля. Нумерація полів починається з першого.

### Значення, що повертаються

Повертає масштаб поля у вигляді цілого числа або **`false`** у разі
виникнення помилки.
