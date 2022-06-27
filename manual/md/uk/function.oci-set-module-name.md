- [«oci_set_edition](function.oci-set-edition.md)
- [oci_set_prefetch_lob »](function.oci-set-prefetch-lob.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Вказує ім'я модуля

#oci_set_module_name

(PHP 5 u003d 5.3.2, PHP 7, PHP 8, PECL OCI8 u003d 1.4.0)

oci_set_module_name — Вказує ім'я модуля

### Опис

**oci_set_module_name**(resource `$connection`, string `$name`): bool

Вказує ім'я модуля для трасування Oracle.

Ім'я модуля реєструється у базі даних під час чергового запиту від
PHP, наприклад, коли запускається SQL вираз.

Ім'я може бути витягнуте з адміністративних уявлень (view)
даних, таких як V$SESSION. Воно може використовуватися для трасування
та моніторингу так само, як `V$SQLAREA` and
`DBMS_MONITOR.SERV_MOD_ACT_STAT_ENABLE`.

Значення можна встановлювати через постійні з'єднання.

### Список параметрів

`connection`
Ідентифікатор з'єднання Oracle, що повертається
[oci_connect()](function.oci-connect.md),
[oci_pconnect()](function.oci-pconnect.md), або
[oci_new_connect()](function.oci-new-connect.md).

`name`
Заданий користувачем рядок string завдовжки до 48 байт.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Встановлення імені модуля**

` <?php$c u003d oci_connect('hr', 'welcome', 'localhost/XE');// Запис модуляoci_set_module_name($c, 'Home Page');// Код, здійснює запрос к $s u003d oci_parse($c, 'select * from dual');oci_execute($s);oci_fetch_all($s, $res);sleep(30);?> `

// Поки скрипт виконується, адміністратор може побачити, які модулі
// використовуються:

sqlplus system/welcome
SQL> select module from v$session;

### Примітки

> **Примітка**: **Вимога версії Oracle**
>
> Ця функція доступна, якщо PHP злінковано з бібліотеками Oracle
> Database з версії 10*g* і вище.

**Підказка**

# Продуктивність

У старих версіях OCI8 або бази даних Oracle можна було встановити
інформацію про клієнта за допомогою пакета `DBMS_APPLICATION_INFO`. Для цієї
мети ефективніше використання функції
[oci_set_client_info()](function.oci-set-client-info.md).

**Застереження**

# Порада щодо повного сканування таблиці (roundtrip)

Деякі, але не всі функції OCI8 викликають повне сканування таблиці
(Roundtrip). Повне сканування таблиць не відбувається для тих запитів,
у яких включено кешування результатів у базі даних.

### Дивіться також

- [oci_set_action()](function.oci-set-action.md) - Задає ім'я
дії
- [oci_set_client_info()](function.oci-set-client-info.md) - Задає
інформацію про клієнта
- [oci_set_client_identifier()](function.oci-set-client-identifier.md) -
Задає ідентифікатор клієнта
- [oci_set_db_operation()](function.oci-set-db-operation.md) -
Задає операцію бази даних
