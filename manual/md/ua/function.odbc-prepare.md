- [«odbc_pconnect](function.odbc-pconnect.md)
- [odbc_primarykeys »](function.odbc-primarykeys.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- готує запит до виконання

#odbc_prepare

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_prepare — Підготовка запиту до виконання

### Опис

**odbc_prepare**(resource `$odbc`, string `$query`): resource\|false

Підготовка запиту до виконання. Ідентифікатор результату може бути
використаний пізніше для виконання запиту за допомогою
[odbc_execute()](function.odbc-execute.md).

Деякі бази даних (наприклад, IBM DB2, MS SQL Server та Oracle)
підтримують процедури, що зберігаються, які приймають параметри типу IN,
INOUT та OUT, як визначено у специфікації ODBC. Проте драйвер Unified
ODBC в даний час підтримує лише параметри типу IN для
процедур, що зберігаються.

### Список параметрів

`odbc`
Ідентифікатор з'єднання ODBC, за подробицями звертайтесь до
[odbc_connect()](function.odbc-connect.md).

`query`
Підготовка запиту у вигляді рядка.

### Значення, що повертаються

Повертає ідентифікатор результату ODBC, якщо SQL-команда була успішною
підготовлено. У разі виникнення помилки повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання
[odbc_execute()](function.odbc-execute.md) та **odbc_prepare()****

У даному коді значення `$success` дорівнюватиме **`true`**, тільки якщо
всі три параметри myproc є параметрами IN:

` <?php$a u003d 1;$b u003d 2;$c u003d 3;$stmt    u003d odbc_prepare($conn, 'CALL myproc(?,?,?)');$success u003d odbc_execute($stmt $a, $b, $c));?> `

Якщо потрібно викликати збережену процедуру з використанням параметрів INOUT
або OUT, рекомендується використовувати власний модуль для вашої бази
даних (наприклад, [oci8](ref.oci8.md) для Oracle).

### Дивіться також

- [odbc_execute()](function.odbc-execute.md) - Виконує запит
