- [« MessageFormatter::getLocale](messageformatter.getlocale.md)
- [MessageFormatter::parseMessage
»](messageformatter.parsemessage.md)

- [PHP Manual](index.md)
- [MessageFormatter](class.messageformatter.md)
- Повертає шаблон, який використовується засобом форматування

# MessageFormatter::getPattern

#msgfmt_get_pattern

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

MessageFormatter::getPattern -- msgfmt_get_pattern — Повертає шаблон,
використовуваний засобом форматування

### Опис

Об'єктно-орієнтований стиль

public **MessageFormatter::getPattern**(): string\|false

Процедурний стиль

**msgfmt_get_pattern**([MessageFormatter](class.messageformatter.md)
`$formatter`): string\|false

Повертає шаблон, який використовується засобом форматування.

### Список параметрів

`formatter`
Об'єкт [MessageFormatter](class.messageformatter.md)

### Значення, що повертаються

Рядок (string) шаблону для даного засобу форматування повідомлення
або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **msgfmt_get_pattern()****

` <?php$fmt u003d msgfmt_create( "en_US", "{0, number} monkeys on {1, number} trees" );echo "Default pattern: '" . msgfmt_get_pattern($fmt). "'
";echo "Formatting result: " . msgfmt_format( $fmt, array(123, 456) ) . "
";msgfmt_set_pattern( $fmt, "{0, number} trees hosting {1, number} monkeys" );echo "New pattern: '" . msgfmt_get_pattern( $f.
";echo "Formatted number: " . msgfmt_format( $fmt, array(123, 456) ) . "
";?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new MessageFormatter( "en_US", "{0, number} monkeys on {1, number} trees" );echo "Default pattern: '" . $fmt->getPattern() . "'
";echo "Formatting result: " . $fmt->format(array(123, 456)) . "
$fmt->setPattern("{0, number} trees hosting {1, number} monkeys" );echo "New pattern: '" . $fmt->getPattern() . "''
";echo "Formatted number: " . $fmt->format(array(123, 456)) . "
";?> `

Результат виконання цього прикладу:

Default pattern: '{0,number} monkeys on {1,number} trees'
Формат результату: 123 monkeys on 456 trees
New pattern: '{0,number} trees hosting {1,number} monkeys'
Formatted number: 123 trees hosting 456 monkeys

### Дивіться також

- [msgfmt_create()](messageformatter.create.md) - Створює засіб
форматування повідомлень
- [msgfmt_set_pattern()](messageformatter.setpattern.md) -
Встановлює шаблон, який використовує засіб форматування
