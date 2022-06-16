- [«odbc_num_fields](function.odbc-num-fields.md)
- [odbc_pconnect »](function.odbc-pconnect.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Повертає кількість рядків у результаті

#odbc_num_rows

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_num_rows — Повертає кількість рядків у результаті

### Опис

**odbc_num_rows**(resource `$statement`): int

Повертає кількість рядків у результаті. Для операторів INSERT, UPDATE
та DELETE **odbc_num_rows()** повертає кількість порушених рядків. Для
пропозиції SELECT це `може` бути кількість доступних рядків.

### Список параметрів

`statement`
Ідентифікатор результату, що повертається
[odbc_exec()](function.odbc-exec.md).

### Значення, що повертаються

Повертає кількість рядків у результаті ODBC. Функція поверне -1
у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Використання **odbc_num_rows()** для визначення кількості рядків,
> доступні після виконання SELECT, поверне -1 для багатьох драйверів.
