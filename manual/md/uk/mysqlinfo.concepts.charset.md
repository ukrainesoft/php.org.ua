- [« Буферизовані та небуферизовані
запити](mysqlinfo.concepts.buffering.md)
- [MySQLi »](book.mysqli.md)

- [PHP Manual](index.md)
- [Основні поняття](mysqlinfo.concepts.md)
- Кодування символів

## Кодування символів

В ідеальному випадку кодування символів має встановлюватися на рівні
сервера і робити це згідно з описом у розділі [»Конфігурація
кодування
символів](http://dev.mysql.com/doc/mysql/en/charset-configuration.md)
документації сервера MySQL Як альтернатива кожен MySQL API
пропонує метод встановлення кодування символів під час виконання.

**Застереження**

# Кодування символів та екранування символів

Кодування символів має бути чітко визначено, оскільки впливає на
кожна дія, у тому числі на дії з наслідками для
безпеки. Наприклад, механізми екранування (такі як
[mysqli_real_escape_string()](mysqli.real-escape-string.md) для mysqli
і [PDO::quote()](pdo.quote.md) для PDO_MySQL) залежать від цих
налаштувань. Важливо розуміти, що ці функції не використовують кодування
символів, визначених у запиті, наприклад, такі запити не
впливатимуть на поведінку цих функцій:

**Приклад #1 Проблеми встановлення кодування символів за допомогою SQL**

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world"); SET NAMES utf8mb4");// І этот не впливає на $mysqli->real_escape_string();$mysqli->query("SET CHARACTER SET utf8mb4");// но вот на );$mysqli->set_charset('utf8mb4');// а це НЕ вплине, потому не можна використовувати "-"$mysqli->set_charset('UTF-8'); // (utf8mb4, а не UTF-8)?> `

Приклади нижче демонструють, як правильно змінювати кодування символів
час виконання за допомогою кожного з API.

> **Примітка**: **Можлива плутанина з UTF-8**
>
> Оскільки імена кодувань символів у MySQL не містять тире/дефіс,
> рядок "utf8" застосовується в MySQL для встановлення кодування UTF-8 (до 3
> байт у кодуванні Unicode (UTF-8). Рядок "UTF-8" неприйнятний і викине
> помилку під час встановлення кодування символів.

**Приклад #2 Приклад установки кодування символів: mysqli**

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");echo 'Початкове кодування: ' . $mysqli->character_set_name() . "
";if (!$mysqli->set_charset('utf8mb4')) {    printf("Помилка завантаження кодування utf8mb4: %s
", $mysqli->error);   exit;}echo 'Ваше поточне кодування: ' . $mysqli->character_set_name() . "
";?> `

**Приклад #3 Приклад установки кодування символів:
[pdo_mysql](ref.pdo-mysql.connection.md)**

` <?php$pdo u003d new PDO("mysql:hostu003dlocalhost;dbnameu003dworld;charsetu003dutf8mb4", 'my_user', 'my_pass');?> `
