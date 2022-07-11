- [«odbc_fetch_row](function.odbc-fetch-row.md)
- [odbc_field_name »](function.odbc-field-name.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає довжину (точність) поля

#odbc_field_len

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_field_len — Повертає довжину (точність) поля

### Опис

**odbc_field_len**(resource `$statement`, int `$field`): int\|false

Повертає довжину поля, на яке посилається число у заданому
ідентифікатор результату.

### Список параметрів

`statement`
Ідентифікатор результату.

`field`
Номер поля. Нумерація полів починається з першого.

### Значення, що повертаються

Повертає довжину поля або **`false`** у разі виникнення помилки.

### Дивіться також

- [odbc_field_scale()](function.odbc-field-scale.md) - Повертає
масштаб поля для отримання масштабу числа з плаваючою точкою
