- [«oci_set_call_timeout](function.oci-set-call-timout.md)
- [oci_set_client_info »](function.oci-set-client-info.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Вказує ідентифікатор клієнта

#oci_set_client_identifier

(PHP 5 u003d 5.3.2, PHP 7, PHP 8, PECL OCI8 u003d 1.4.0)

oci_set_client_identifier — Визначає ідентифікатор клієнта

### Опис

**oci_set_client_identifier**(resource `$connection`, string
`$client_id`): bool

Встановлює ідентифікатор клієнта, який використовується різними
компонентами бази даних для ідентифікації різних користувачів
тонких клієнтів, які авторизуються в базі даних як один
Користувач.

Ідентифікатор клієнта реєструється у базі даних під час чергового
запиту від PHP, наприклад, коли запускається SQL вираз.

Ідентифікатор може бути вилучений, наприклад, за допомогою
`SELECT SYS_CONTEXT('USERENV','CLIENT_IDENTIFIER') FROM DUAL`.
Адміністративне представлення бази даних, таке як `V$SESSION`, також
містить це значення. Його можна використовувати спільно з
`DBMS_MONITOR.CLIENT_ID_TRACE_ENABLE` для трасування та аудиту.

Значення може зберігатись між запитами сторінок, які використовують
те саме постійне з'єднання.

### Список параметрів

`connection`
Ідентифікатор з'єднання Oracle, що повертається
[oci_connect()](function.oci-connect.md),
[oci_pconnect()](function.oci-pconnect.md), або
[oci_new_connect()](function.oci-new-connect.md).

`client_id`
Заданий користувачем рядок до 64 байт.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Встановлення ідентифікатора клієнта для користувача**

` <?php// Знайдемо логін користувачаsession_start();$un u003d my_validate_session($_SESSION['username']);$c u003d oci_connect('myschema', 'welcome', 'localhost/XE'); базі данихoci_set_client_identifier($c, $un);// Наступний запит к БД заодно встановить ідентифікатор$s u003d oci_parse($c, 'select mydata from mytable')>;

### Примітки

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
- [oci_set_client_info()](function.oci-set-client-info.md) - Задає
інформацію про клієнта
- [oci_set_db_operation()](function.oci-set-db-operation.md) -
Задає операцію бази даних
