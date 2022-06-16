- [« mysql_client_encoding](function.mysql-client-encoding.md)
- [mysql_connect »](function.mysql-connect.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Закриває з'єднання із сервером MySQL

# mysql_close

(PHP 4, PHP 5)

mysql_close — Закриває з'єднання із сервером MySQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_close()](mysqli.close.md)
- PDO: Присвоїти значення **`null`** об'єкту PDO

### Опис

**mysql_close**(resource `$link_identifier` u003d NULL): bool

**mysql_close()** закриває непостійне з'єднання з базою даних
MySQL, яке вказує переданий дескриптор. Якщо параметр
`link_identifier` не вказано, закривається останнє відкрите (поточне)
з'єднання.

Відкриті непостійні з'єднання MySQL та результуючі набори
автоматично видаляються одразу після закінчення роботи PHP-скрипта.
Отже, закривати з'єднання та очищати результуючі набори не
обов'язково, але рекомендується, тому що це одразу ж звільнить ресурси
бази даних та пам'ять, що займається результатами вибірки, що може
Позитивно позначитися на продуктивності. Більше інформації можна
почерпнути у розділі [Звільнення
ресурсов](language.types.resource.md#language.types.resource.self-destruct)

### Список параметрів

`link_identifier`
З'єднання MySQL. Якщо не вказано, використовується останнє з'єднання,
відкрите [mysql_connect()](function.mysql-connect.md). Якщо з'єднання
не знайдено або не встановлено, то буде згенеровано помилку рівня
**`E_WARNING`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_close()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Помилка з'єднання: ' . mysql_error());}echo ' ($link);?> `

Результат виконання цього прикладу:

Успішно з'єдналися

### Примітки

> **Примітка**:
>
> **mysql_close()** не закриває постійні з'єднання, створені
> функцією [mysql_pconnect()](function.mysql-pconnect.md). Для
> додаткову інформацію дивіться посібник з [постійним
> з'єднань](features.persistent-connections.md).

### Дивіться також

- [mysql_connect()](function.mysql-connect.md) - Відкриває
з'єднання з сервером MySQL
- [mysql_free_result()](function.mysql-free-result.md) - Звільняє
пам'ять від результату запиту
