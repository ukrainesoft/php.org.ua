- [«odbc_next_result](function.odbc-next-result.md)
- [odbc_num_rows »](function.odbc-num-rows.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає кількість стовпців у результаті

#odbc_num_fields

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_num_fields — Повертає кількість стовпців у результаті

### Опис

**odbc_num_fields**(resource `$statement`): int

Повертає кількість полів (стовпців) у результаті ODBC.

### Список параметрів

`statement`
Ідентифікатор результату, що повертається
[odbc_exec()](function.odbc-exec.md).

### Значення, що повертаються

Повертає кількість полів або -1 у разі помилки.
