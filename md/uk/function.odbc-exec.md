- [«odbc_errormsg](function.odbc-errormsg.md)
- [odbc_execute »](function.odbc-execute.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Виконує інструкцію SQL безпосередньо

#odbc_exec

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_exec — Виконує інструкцію SQL безпосередньо

### Опис

**odbc_exec**(resource `$odbc`, string `$query`): resource\|false

Надсилає інструкцію SQL на сервер бази даних.

### Список параметрів

`odbc`
Ідентифікатор з'єднання ODBC, за подробицями звертайтесь до
[odbc_connect()](function.odbc-connect.md).

`query`
Інструкція SQL.

### Значення, що повертаються

Повертає ідентифікатор результату ODBC, якщо команда SQL була
виконано успішно, або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|------------------------------|
| 8.0.0 | Параметр `flags` був вилучений. |

### Дивіться також

- [odbc_prepare()](function.odbc-prepare.md) - Підготовка запиту
до виконання
- [odbc_execute()](function.odbc-execute.md) - Виконує запит
