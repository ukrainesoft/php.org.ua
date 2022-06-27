- [«odbc_result](function.odbc-result.md)
- [odbc_setoption »](function.odbc-setoption.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Відкочує транзакцію

#odbc_rollback

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_rollback - Відкочує транзакцію

### Опис

**odbc_rollback**(resource `$odbc`): bool

Відкочує всі незавершені операції у з'єднанні.

### Список параметрів

`odbc`
Ідентифікатор з'єднання ODBC, за подробицями звертайтесь до
[odbc_connect()](function.odbc-connect.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
