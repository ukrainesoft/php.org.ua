- [«mysql_query](function.mysql-query.md)
- [mysql_result »](function.mysql-result.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Екранує спеціальні символи в рядках для використання в
виразах SQL

# mysql_real_escape_string

(PHP 4 u003d 4.3.0, PHP 5)

mysql_real_escape_string — Екранує спеціальні символи у рядках для
використання у виразах SQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_real_escape_string()](mysqli.real-escape-string.md)
- [PDO::quote()](pdo.quote.md)

### Опис

**mysql_real_escape_string**(string `$unescaped_string`, resource
`$link_identifier` u003d NULL): string

Екранує спеціальні символи на `unescaped_string`, приймаючи в
увагу кодування з'єднання, таким чином, що результат можна
безпечно використовувати в SQL-запиті функції
[mysql_query()](function.mysql-query.md). Якщо вставляються бінарні
дані, то до них також необхідно застосовувати цю функцію.

**mysql_real_escape_string()** викликає бібліотечну функцію MySQL
mysql_real_escape_string, яка додає зворотну косу межу до
наступним символам: `\x00`, `
`,``, `\`, ```, ```` і `\x1a`.

Ця функція повинна завжди (за кількома винятками) використовуватись
для того, щоб убезпечити дані, що вставляються в запит перед відправкою
його у MySQL.

**Застереження**

# Безпека: кодування символів за промовчанням

Кодування символів має встановлюватися як на сервері, так і на
за допомогою функції [mysql_set_charset()](function.mysql-set-charset.md),
щоб впливати на поведінку mysql_real_escape_string()**. Докладніше
описано в розділі [кодування символів](mysqlinfo.concepts.charset.md).

### Список параметрів

`unescaped_string`
Рядок, що екранується.

`link_identifier`
З'єднання MySQL. Якщо ідентифікатор з'єднання не було вказано,
використовується останнє з'єднання, відкрите
[mysql_connect()](function.mysql-connect.md). Якщо таке з'єднання не
було знайдено, функція спробує створити таке, якби
[mysql_connect()](function.mysql-connect.md) була викликана без
параметрів. Якщо з'єднання не було знайдено і не змогло бути створено,
генерується помилка рівня **`E_WARNING`**.

### Значення, що повертаються

Повертає рядок, де екрановані всі необхідні символи, або
**`false`** у разі виникнення помилки.

### Помилки

Запуск цієї функції без існуючого з'єднання з MySQL викликає помилку
рівня **`E_WARNING`**. Цю функцію можна запускати лише якщо є
з'єднання з MySQL.

### Приклади

**Приклад #1 Простий приклад використання
**mysql_real_escape_string()****

` <?php// З'єднання$link u003d mysql_connect('mysql_host', 'mysql_user', 'mysql_password')    OR die(mysql_error());// Запит$query u003d sprintf("SELECT *  s' AND passwordu003d'%s'",             mysql_real_escape_string($user),            mysql_real_escape_string($password));?> `

**Приклад #2 Приклад використання **mysql_real_escape_string()** без
наявності з'єднання**

Цей приклад показує, що станеться, якщо викликати цю функцію без
наявності з'єднання з MySQL.

` <?php// Коннекту к MySQL немає$lastname u003du003d "O'Reilly";$_lastname u003d mysql_real_escape_string($lastname);$query u003d "SELECT **FROM actors WHE$| ;var_dump($query);?> `

Результатом виконання цього прикладу буде щось подібне:

Warning: mysql_real_escape_string(): Немає такого файлу або directory в /this/test/script.php on line 5
Warning: mysql_real_escape_string(): На link to the server could not established in /this/test/script.php on line 5

bool(false)
string(41) "SELECT * FROM actors WHERE last_name u003d ''"

**Приклад #3 Приклад злому з використанням SQL-ін'єкції**

` <?php// Ми ні не перевірили змінну $_POST['password'],// а вона може містити зовсім не то, що ми очікали. Наприклад:$_POST['username'] u003d 'aidan';$_POST['password'] u003d "' OR ''u003d'";// посилаємо запит, щоб перевірити ім'я і пароль користувача$query u003d " WHERE useru003d'{$_POST['username']}' AND passwordu003d'{$_POST['password']}'";mysql_query($query); ;?> `

Запит, який буде надіслано MySQL:

SELECT * FROM users WHERE useru003d'aidan' AND passwordu003d'' OR ''u003d''

Це дозволить будь-кому увійти в систему без пароля.

### Примітки

> **Примітка**:
>
> Функцію **mysql_real_escape_string()** можна використовувати лише після
> того, як встановлено з'єднання з MySQL. Інакше виникне
> помилка рівня **`E_WARNING`**, а функція поверне **`false`**. Якщо
> `link_identifier` не вказано, використовується останнє відкрите
> з'єднання.

> **Примітка**:
>
> Якщо [magic_quotes_gpc](info.configuration.md#ini.magic-quotes-gpc)
> включені, спочатку дані слід обробити функцією
> [stripslashes()](function.stripslashes.md). Якщо цю функцію
> застосувати до вже проекранованих даних, дані будуть
> двічі проекрановані.

> **Примітка**:
>
> Якщо не користуватися цією функцією, запит стає вразливим для
> [злому за допомогою SQL-ін'єкцій](security.database.sql-injection.md).

> **Примітка**: **mysql_real_escape_string()** не екранує символи
> `%` та `_`. Ці знаки є масками груп символів в операторах.
> MySQL `LIKE`, `GRANT` та `REVOKE`.

### Дивіться також

- [mysql_set_charset()](function.mysql-set-charset.md) -
Встановлює кодування клієнта
- [mysql_client_encoding()](function.mysql-client-encoding.md) -
Повертає кодування з'єднання
- [addslashes()](function.addslashes.md) - Екранує рядок з
допомогою слішів
- [stripslashes()](function.stripslashes.md) - Видаляє екранування
символів
- Директива
[magic_quotes_gpc](info.configuration.md#ini.magic-quotes-gpc)
- Директива
[magic_quotes_runtime](info.configuration.md#ini.magic-quotes-runtime)
