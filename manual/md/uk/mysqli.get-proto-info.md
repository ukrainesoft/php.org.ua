- [« mysqli::$host_info](mysqli.get-host-info.md)
- [mysqli::$server_info »](mysqli.get-server-info.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає версію використовуваного MySQL протоколу

# mysqli::$protocol_version

# mysqli_get_proto_info

(PHP 5, PHP 7, PHP 8)

mysqli::$protocol_version -- mysqli_get_proto_info — Повертає версію
використовуваного MySQL протоколу

### Опис

Об'єктно-орієнтований стиль

int `$mysqli->protocol_version`;

Процедурний стиль

**mysqli_get_proto_info**([mysqli](class.mysqli.md) `$mysql`): int

Повертає ціле число, що є версією протоколу MySQL,
використовуваного для з'єднання, переданого `mysql`.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертає цілу кількість, що представляє версію протоколу.

### Приклади

**Приклад #1 Приклад використання `$mysqli->protocol_version`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password");/* Перевірити з'єднання */if (mysqli_connect_errno()) {    printf("Подключення |
", mysqli_connect_error());  exit();}/* Вивести версію протоколу */printf("Версія протоколу: %d
", $mysqli->protocol_version);/* Закрити з'єднання*/$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password");/* Перевірити з'єднання */if (mysqli_connect_errno()) {    printf("Підключення не 
", mysqli_connect_error());  exit();}/* Вивести версію протоколу */printf("Версія протоколу: %d
", mysqli_get_proto_info($link));/* Закрити з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

Protocol version: 10

### Дивіться також

- [mysqli_get_host_info()](mysqli.get-host-info.md) - Повертає
рядок, що містить тип використовуваного з'єднання
