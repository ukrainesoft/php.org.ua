- [« mysqli::get_connection_stats](mysqli.get-connection-stats.md)
- [mysqli::$protocol_version »](mysqli.get-proto-info.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає рядок, що містить тип використовуваного з'єднання

# mysqli::$host_info

# mysqli_get_host_info

(PHP 5, PHP 7, PHP 8)

mysqli::$host_info -- mysqli_get_host_info — Повертає рядок,
містить тип використовуваного з'єднання

### Опис

Об'єктно-орієнтований стиль

string `$mysqli->host_info`;

Процедурний стиль

**mysqli_get_host_info**([mysqli](class.mysqli.md) `$mysql`): string

Повертає рядок, що описує з'єднання, яке позначено в
параметрі `mysql` (включно з ім'ям хоста сервера).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Символьний рядок, що містить ім'я сервера хоста і тип підключення.

### Приклади

**Приклад #1 Приклад використання `$mysqli->host_info`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {     printf("не
", mysqli_connect_error());  exit();}/* виведення інформації про хосте */printf("Інформація про хосте: %s
", $mysqli->host_info);/* закриття з'єднання */$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {    printf("Подключення|
", mysqli_connect_error());  exit();}/* виведення інформації про хосте */printf("Інформація про хосте: %s
", mysqli_get_host_info($link));/* закриття з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

Інформація про хост: Localhost via UNIX socket

### Дивіться також

- [mysqli_get_proto_info()](mysqli.get-proto-info.md) - Повертає
версію використовуваного MySQL протоколу
