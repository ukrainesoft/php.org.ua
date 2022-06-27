- [«odbc_columns](function.odbc-columns.md)
- [odbc_connect »](function.odbc-connect.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Фіксує транзакцію ODBC

#odbc_commit

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_commit - Фіксує транзакцію ODBC

### Опис

**odbc_commit**(resource `$odbc`): bool

Фіксує всі незавершені транзакції з'єднання.

### Список параметрів

`odbc`
Ідентифікатор з'єднання ODBC, за подробицями звертайтесь до
[odbc_connect()](function.odbc-connect.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
