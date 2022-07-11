- [« mysqli::change_user](mysqli.change-user.md)
- [mysqli::close »](mysqli.close.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає поточне кодування, встановлене для з'єднання з БД

# mysqli::character_set_name

# mysqli_character_set_name

(PHP 5, PHP 7, PHP 8)

mysqli::character_set_name -- mysqli_character_set_name -- Повертає
поточне кодування, встановлене для з'єднання з БД

### Опис

Об'єктно-орієнтований стиль

public **mysqli::character_set_name**(): string

Процедурний стиль

**mysqli_character_set_name**([mysqli](class.mysqli.md) `$mysql`):
string

Повертає поточне кодування, встановлене для з'єднання з БД.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Поточне кодування, встановлене для підключення

### Приклади

**Приклад #1 Приклад використання **mysqli::character_set_name()****

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* Установка );/* Висновок поточного кодування */$charset u003d $mysqli->character_set_name();printf("Поточне кодування - %s
", $charset);?> `

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR || MYSQLI_REPORT_STRICT);$mysqli u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* Установка кодування| /* Висновок поточного кодування */$charset u003d mysqli_character_set_name($mysqli);printf("Поточне кодування - %s
", $charset); `

Результат виконання даних прикладів:

Поточне кодування - utf8mb4

### Дивіться також

- [mysqli_set_charset()](mysqli.set-charset.md) - Задає набір
символів
- [mysqli_real_escape_string()](mysqli.real-escape-string.md) -
Екранує спеціальні символи в рядку для використання в
SQL-вираз, використовуючи поточний набір символів з'єднання
