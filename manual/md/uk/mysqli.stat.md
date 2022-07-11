- [« mysqli::ssl_set](mysqli.ssl-set.md)
- [mysqli::stmt_init »](mysqli.stmt-init.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- отримання інформації про поточний стан системи

# mysqli::stat

# mysqli_stat

(PHP 5, PHP 7, PHP 8)

mysqli::stat -- mysqli_stat — Отримання інформації про поточний стан
системи

### Опис

Об'єктно-орієнтований стиль

public **mysqli::stat**(): string\|false

Процедурний стиль

**mysqli_stat**([mysqli](class.mysqli.md) `$mysql`): string\|false

**mysqli_stat()** повертає рядок з інформацією, схожою на ту, що
надає команду 'mysqladmin status'. Сюди включається час роботи
з моменту завантаження в секундах, кількість запущених процесів,
запитів, перезавантажень та відкритих таблиць.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Рядок з інформацією про стан системи. **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::stat()****

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {   ключ|
"mysqli_connect_error());  exit();}printf ("Стан системи: %s
", $mysqli->stat());$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {    printf("Не 
"mysqli_connect_error());  exit();}printf("Стан системи: %s
", mysqli_stat($link)); mysqli_close($link);?> `

Результат виконання даних прикладів:

Стан системи: Uptime: 272 Threads: 1 Questions: 5340 Slow queries: 0
Opens: 13 Flush tables: 1 Open tables: 0 Queries per second avg: 19.632
Memory in use: 8496K Max memory used: 8560K

### Дивіться також

- [mysqli_get_server_info()](mysqli.get-server-info.md) - Повертає
версію MySQL сервера
