- [« MessageFormatter::parse](messageformatter.parse.md)
- [IntlCalendar »](class.intlcalendar.md)

- [PHP Manual](index.md)
- [MessageFormatter](class.messageformatter.md)
- Встановлює шаблон, який використовується засобом форматування

# MessageFormatter::setPattern

#msgfmt_set_pattern

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

MessageFormatter::setPattern -- msgfmt_set_pattern — Встановлює
шаблон, який використовується засобом форматування

### Опис

Об'єктно-орієнтований стиль

public **MessageFormatter::setPattern**(string `$pattern`): bool

Процедурний стиль

**msgfmt_set_pattern**([MessageFormatter](class.messageformatter.md)
`$formatter`, string `$pattern`): bool

Встановлює шаблон, який використовує засіб форматування.

### Список параметрів

`formatter`
Об'єкт [MessageFormatter](class.messageformatter.md)

`pattern`
Рядок (string) шаблону для використання у цьому засобі форматування
повідомлення. У шаблоні використовується "дружній до апострофів"
синтаксис; перед інтерпретацією він проходить через
[»umsg_autoQuoteApostrophe](http://www.icu-project.org/apiref/icu4c/umsg_8h.md#9da796210146ff51d395affe4928f0b7).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **msgfmt_set_pattern()****

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
- [msgfmt_get_pattern()](messageformatter.getpattern.md) -
Повертає шаблон, який використовується засобом форматування
