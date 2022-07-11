- [«
MessageFormatter::parseMessage](messageformatter.parsemessage.md)
- [MessageFormatter::setPattern »](messageformatter.setpattern.md)

- [PHP Manual](index.md)
- [MessageFormatter](class.messageformatter.md)
- Розбирає рядок згідно з шаблоном

# MessageFormatter::parse

#msgfmt_parse

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

MessageFormatter::parse -- msgfmt_parse — Розбирає рядок згідно
шаблоном

### Опис

Об'єктно-орієнтований стиль

public **MessageFormatter::parse**(string `$string`): array\|false

Процедурний стиль

**msgfmt_parse**([MessageFormatter](class.messageformatter.md)
`$formatter`, string `$string`): array\|false

Розбирає вхідний рядок (string) і повертає всі вилучені елементи
як масиву (array).

### Список параметрів

`formatter`
Об'єкт [MessageFormatter](class.messageformatter.md).

`string`
Рядок (string) для розбору.

### Значення, що повертаються

Масив (array), що містить вилучені елементи або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **msgfmt_parse()****

` <?php$fmt u003d msgfmt_create('en_US', "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree");$res , "4,560 monkeys on 123 trees make 37.073 monkeys per tree");var_export($res);$fmt u003d msgfmt_create('de', "{0,number,inte { 2,number} Affen pro Baum");$res u003d msgfmt_parse($fmt, "4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum");

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new MessageFormatter('en_US', "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree")$; >parse("4,560 monkeys on 123 trees make 37.073 monkeys per tree");var_export($res);$fmt u003d new MessageFormatter('de', "{0,num| Bäumen sind {2,number} Affen pro Baum");$res u003d $fmt->parse("4.560 Affen auf 123 Bäumen sind 37,073 Affen pro ;

Результат виконання цього прикладу:

array (
0 u003d> 4560,
1 u003d> 123,
2 u003d> 37.073,
)
array (
0 u003d> 4560,
1 u003d> 123,
2 u003d> 37.073,
)

### Дивіться також

- [msgfmt_create()](messageformatter.create.md) - Створює засіб
форматування повідомлень
- [msgfmt_format()](messageformatter.format.md) - Форматує
повідомлення
- [msgfmt_parse_message()](messageformatter.parsemessage.md) -
Швидко розбирає вхідний рядок
