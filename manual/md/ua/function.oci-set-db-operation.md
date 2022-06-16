- [«oci_set_client_info](function.oci-set-client-info.md)
- [oci_set_edition »](function.oci-set-edition.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Задає операцію бази даних

#oci_set_db_operation

(PHP 7 \>u003d 7.2.14, PHP 8, PHP 7 \>u003d 7.3.1, PHP 8, PECL OCI8 \>u003d 2.2.0)

oci_set_db_operation — Задає операцію бази даних

### Опис

**oci_set_db_operation**(resource `$connection`, string `$action`): bool

Встановлює DBOP для трасування Oracle.

Ім'я операції бази даних реєструється у базі даних за наступного
"циклічному шляху" (round-trip) з PHP до бази даних, як правило, при
виконання виразу SQL.

Операція бази даних може згодом вимагатися з уявлень
адміністрування бази даних, таких як V$SQL_MONITOR.

Функція **oci_set_db_operation()** доступна, якщо oci8 використовує
клієнтські бібліотеки Oracle версії 12 (або новіші) та базу даних Oracle
12 (або новіше).

### Список параметрів

`connection`
Ідентифікатор з'єднання Oracle, що повертається
[oci_connect()](function.oci-connect.md),
[oci_pconnect()](function.oci-pconnect.md), або
[oci_new_connect()](function.oci-new-connect.md).

`action`
Користувальницький рядок.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Встановлення DBOP**

` <?php$c u003d oci_connect('hr', 'welcome', 'localhost/XE');// Записати операціюoci_set_db_operation($c, 'main query');// Код, викликаючий циклічний шлях, s u003d oci_parse($c, 'select * from dual');oci_execute($s);oci_fetch_all($s, $res);sleep(30);?> `

// Під час виконання скрипта адміністратор може бачити виконувані операції
/ / З базою даних.

sqlplus system/welcome
SQL> select dbop_name from v$sql_monitor;

### Примітки

**Застереження**

# Порада щодо повного сканування таблиці (roundtrip)

Деякі, але не всі функції OCI8 викликають повне сканування таблиці
(Roundtrip). Повне сканування таблиць не відбувається для тих запитів,
у яких включено кешування результатів у базі даних.

### Дивіться також

- [oci_set_action()](function.oci-set-action.md) - Задає ім'я
дії
- [oci_set_module_name()](function.oci-set-module-name.md) - Задає
ім'я модулю
- [oci_set_client_info()](function.oci-set-client-info.md) - Задає
інформацію про клієнта
- [oci_set_client_identifier()](function.oci-set-client-identifier.md) -
Задає ідентифікатор клієнта
