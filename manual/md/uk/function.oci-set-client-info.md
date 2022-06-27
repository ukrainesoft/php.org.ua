- [«
oci_set_client_identifier](function.oci-set-client-identifier.md)
- [oci_set_db_operation »](function.oci-set-db-operation.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Задає інформацію про клієнта

#oci_set_client_info

(PHP 5 u003d 5.3.2, PHP 7, PHP 8, PECL OCI8 u003d 1.4.0)

oci_set_client_info — Задає інформацію про клієнта

### Опис

**oci_set_client_info**(resource `$connection`, string `$client_info`):
bool

Зачепить інформацію про клієнта для трасування Oracle.

Інформація про клієнта реєструється у базі даних під час чергового
запиту від PHP, наприклад, коли запускається SQL вираз.

Клієнтська інформація може бути вилучена з адміністративних
уявлень (view) бази даних, таких як V $ SESSION.

Значення можна встановлювати через постійні з'єднання.

### Список параметрів

`connection`
Ідентифікатор з'єднання Oracle, що повертається
[oci_connect()](function.oci-connect.md),
[oci_pconnect()](function.oci-pconnect.md), або
[oci_new_connect()](function.oci-new-connect.md).

`client_info`
Заданий користувачем рядок до 64 байт.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Встановлення клієнтської інформації**

` <?php$c u003d oci_connect('hr', 'welcome', 'localhost/XE');// Запис інформації про клієнтеoci_set_client_info($c, 'My Application Version 2');// Код, , наприклад вибірка:$s u003d oci_parse($c, 'select * from dual');oci_execute($s);oci_fetch_all($s, $res);sleep(30);?> `

// Поки скрипт виконується, адміністратор може побачити клієнтську
// інформацію:

sqlplus system/welcome
SQL> select client_info from v$session;

### Примітки

> **Примітка**: **Вимога версії Oracle**
>
> Ця функція доступна, якщо PHP злінковано з бібліотеками Oracle
> Database з версії 10*g* і вище.

**Підказка**

# Продуктивність

У старих версіях OCI8 або бази даних Oracle можна було встановити
інформацію про клієнта за допомогою пакета `DBMS_APPLICATION_INFO`. Для цієї
мети ефективніше використання функції **oci_set_client_info()**.

**Застереження**

# Порада щодо повного сканування таблиці (roundtrip)

Деякі, але не всі функції OCI8 викликають повне сканування таблиці
(Roundtrip). Повне сканування таблиць не відбувається для тих запитів,
у яких включено кешування результатів у базі даних.

### Дивіться також

- [oci_set_module_name()](function.oci-set-module-name.md) - Задає
ім'я модулю
- [oci_set_action()](function.oci-set-action.md) - Задає ім'я
дії
- [oci_set_client_identifier()](function.oci-set-client-identifier.md) -
Задає ідентифікатор клієнта
- [oci_set_db_operation()](function.oci-set-db-operation.md) -
Задає операцію бази даних
