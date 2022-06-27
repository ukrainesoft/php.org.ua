- [« PDOStatement::fetchColumn](pdostatement.fetchcolumn.md)
- [PDOStatement::getAttribute »](pdostatement.getattribute.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Витягує наступний рядок і повертає його у вигляді об'єкта

# PDOStatement::fetchObject

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.2.4)

PDOStatement::fetchObject — Витягує наступний рядок і повертає його до
вигляді об'єкта

### Опис

public **PDOStatement::fetchObject**(?string `$class` u003d "stdClass",
array `$constructorArgs` u003d \[\]): object\|false

Витягує наступний рядок і повертає його у вигляді об'єкта. Цей метод
є альтернативою виклику
[PDOStatement::fetch()](pdostatement.fetch.md) з параметром
**`PDO::FETCH_CLASS`** або **`PDO::FETCH_OBJ`**.

Коли об'єкт вилучено, його властивості наповнюються значеннями
відповідних стовпців, і після цього викликається його конструктор.

### Список параметрів

`class`
Ім'я класу об'єкта, що створюється.

`constructorArgs`
Елементи цього масиву будуть передані конструктор класу.

### Значення, що повертаються

Повертає новий об'єкт зазначеного класу, імена властивостей якого
відповідають іменам стовпців результуючого набору або **`false`**
у разі виникнення помилки.

### Дивіться також

- [PDOStatement::fetch()](pdostatement.fetch.md) - Вилучення
наступного рядка з результуючого набору
