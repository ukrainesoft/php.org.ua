- [« mysqli::init](mysqli.init.md)
- [mysqli::kill »](mysqli.kill.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає значення, створене для стовпця AUTO_INCREMENT останнім
запитом

# mysqli::$insert_id

# mysqli_insert_id

(PHP 5, PHP 7, PHP 8)

mysqli::$insert_id -- mysqli_insert_id — Повертає значення, створене
для колонки AUTO_INCREMENT останнім запитом

### Опис

Об'єктно-орієнтований стиль

int\|string `$mysqli->insert_id`;

Процедурний стиль

**mysqli_insert_id**([mysqli](class.mysqli.md) `$mysql`): int\|string

Повертає ідентифікатор, згенерований запитом `INSERT` або `UPDATE`
для таблиці зі стовпцем, що має атрибут `AUTO_INCREMENT`. В разі
багаторядкового оператора `INSERT` він повертає перше автоматично
згенероване значення, яке було успішно додано.

Виконання запиту `INSERT` або `UPDATE` з використанням MySQL-функції
`LAST_INSERT_ID()` також змінить значення, що повертається
**mysqli_insert_id()**. Якщо `LAST_INSERT_ID(expr)` використовувався для
генерації значення `AUTO_INCREMENT`, він повертає значення останнього
`expr` замість згенерованого значення `AUTO_INCREMENT`.

Повертає `0`, якщо попередній оператор не змінив значення
`AUTO_INCREMENT`. **mysqli_insert_id()** повинен викликатися відразу після
запиту, що згенерував значення.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Значення поля `AUTO_INCREMENT`, яке було порушено попереднім
запитом. Повертає нуль, якщо попередній запит не торкнувся таблиці,
містять поле `AUTO_INCREMENT`.

Тільки запити, видані за допомогою поточного з'єднання, впливають на
значення, що повертається. На значення не впливають запити, видані з
використанням інших підключень чи клієнтів.

> **Примітка**:
>
> Якщо число більше за максимальне значення цілого числа, функція поверне
> Рядок.

### Приклади

**Приклад #1 Приклад функції `$mysqli->insert_id`**

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$mysqli->query("C| u003d "INSERT INTO myCity VALUES (NULL, 'Stuttgart', 'DEU', 'Stuttgart', 617000)";$mysqli->query($query);printf("ID нового запису: %d.
", $mysqli->insert_id);/* видалення таблиці */$mysqli->query("DROP TABLE myCity"); `

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");mysqli_query($link, C INSERT INTO myCity VALUES (NULL, 'Stuttgart', 'DEU', 'Stuttgart', 617000)";mysqli_query($link, $query);printf("ID нового запису: %d.
", mysqli_insert_id($link));/* видалення таблиці */mysqli_query($link, "DROP TABLE myCity");

Результат виконання даних прикладів:

ID нового запису: 1.
