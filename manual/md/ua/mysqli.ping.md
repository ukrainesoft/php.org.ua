- [« mysqli::options](mysqli.options.md)
- [mysqli::poll »](mysqli.poll.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Перевіряє працездатність з'єднання чи намагається
перепідключитися, якщо з'єднання розірвано

# mysqli::ping

# mysqli_ping

(PHP 5, PHP 7, PHP 8)

mysqli::ping -- mysqli_ping — Перевіряє працездатність з'єднання або
намагається перепідключитися, якщо з'єднання розірвано

### Опис

Об'єктно-орієнтований стиль

public **mysqli::ping**(): bool

Процедурний стиль

**mysqli_ping**([mysqli](class.mysqli.md) `$mysql`): bool

Перевіряє працездатність з'єднання із сервером. Якщо з'єднання
розірвано, а глобальне налаштування
[mysqli.reconnect](mysqli.configuration.md#ini.mysqli.reconnect)
увімкнено, PHP спробує автоматично перепідключитися.

> **Примітка**: Налаштування `php.ini` mysqli.reconnect ігнорується
> драйвером "mysqlnd", так що автоматичного переключення не
> відбудеться.

Ця функція може використовуватися клієнтами, які простоюють без діла
довгий час, щоб перевірити, що сервер їх не відключив, та
перепідключитися у разі потреби.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::ping()****

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if ($mysqli->connect_errno) {   підключитися| s
", $mysqli->connect_error);   exit();}/* перевіримо, жив ли сервер */if ($mysqli->ping()) {    printf ("Сполука впорядку!"
");} else {    printf ("Помилка: %s
", $mysqli->error);}/* закриваємо з'єднання*/$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {    printf("Не 
", mysqli_connect_error());
");} else {    printf ("Помилка: %s
", mysqli_error($link));}/* закриваємо з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

Our connection is ok!
