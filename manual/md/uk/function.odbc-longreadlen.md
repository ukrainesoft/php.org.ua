- [«odbc_gettypeinfo](function.odbc-gettypeinfo.md)
- [odbc_next_result »](function.odbc-next-result.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Обробляє стовпці LONG

#odbc_longreadlen

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_longreadlen — Обробляє стовпці LONG

### Опис

**odbc_longreadlen**(resource `$statement`, int `$length`): bool

Керує обробкою стовпців `LONG`, `LONGVARCHAR` та `LONGVARBINARY`.
Довжина за замовчуванням може бути встановлена директивою `php.ini`
[uodbc.defaultlrl](odbc.configuration.md#ini.uodbc.defaultlrl).

### Список параметрів

`statement`
Ідентифікатор результату.

`length`
Кількість байтів, які повертаються PHP, контролюється довжиною параметра.
Якщо встановлено значення `0`, дані стовпця LONG передаються клієнту
(тобто друкуються) при отриманні за допомогою
[odbc_result()](function.odbc-result.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> На обробку стовпців `LONGVARBINARY` також впливає
> [odbc_binmode()](function.odbc-binmode.md).
