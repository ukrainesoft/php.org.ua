- [«odbc_close_all](function.odbc-close-all.md)
- [odbc_columnprivileges »](function.odbc-columnprivileges.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Закриває з'єднання ODBC

#odbc_close

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_close — Закриває з'єднання ODBC

### Опис

**odbc_close**(resource `$odbc`): void

Закриває з'єднання із сервером бази даних.

### Список параметрів

`odbc`
Ідентифікатор з'єднання ODBC, за подробицями звертайтесь до
[odbc_connect()](function.odbc-connect.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Примітки

> **Примітка**:
>
> Ця функція не спрацює, якщо з'єднання має відкриті транзакції.
> У цьому випадку з'єднання залишиться відкритим.
