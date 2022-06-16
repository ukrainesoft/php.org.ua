- [«odbc_num_rows](function.odbc-num-rows.md)
- [odbc_prepare »](function.odbc-prepare.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- Відкриває постійне з'єднання з базою даних

#odbc_pconnect

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_pconnect — Відкриває постійне з'єднання з базою даних

### Опис

**odbc_pconnect**(
string `$dsn`,
string `$user`,
string `$password`,
int `$cursor_option` u003d **`SQL_CUR_USE_DRIVER`**
): resource \ | false

Відкриває постійне підключення до бази даних.

Функція дуже схожа на [odbc_connect()](function.odbc-connect.md), за
виключенням того, що з'єднання насправді не закривається після
завершення роботи скрипта. Наступні запити на з'єднання з тією ж
комбінацією `dsn`, `user` та `password` (за допомогою
[odbc_connect()](function.odbc-connect.md) та **odbc_pconnect()**)
можуть повторно використовувати постійне з'єднання.

### Список параметрів

Для більш детальної інформації варто звернутись до опису
[odbc_connect()](function.odbc-connect.md).

### Значення, що повертаються

Повертає з'єднання ODBC або **`false`** у разі виникнення
помилки.

### Примітки

> **Примітка**: Постійні з'єднання не діють, якщо PHP
> використовується як CGI.

### Дивіться також

- [odbc_connect()](function.odbc-connect.md) - З'єднує з
джерелом даних
- [Постійні з'єднання з базами
даних](features.persistent-connections.md)
