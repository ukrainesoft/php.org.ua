- [« IntlDateFormatter::setLenient](intldateformatter.setlenient.md)
- [IntlDateFormatter::setTimeZone
»](intldateformatter.settimezone.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Встановлює шаблон, який використовується IntlDateFormatter

# IntlDateFormatter::setPattern

# datefmt_set_pattern

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::setPattern -- datefmt_set_pattern -- Встановлює
шаблон, який використовується IntlDateFormatter

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::setPattern**(string `$pattern`): bool

Процедурний стиль

**datefmt_set_pattern**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`, string `$pattern`): bool

Встановлює шаблон, який використовується IntlDateFormatter.

### Список параметрів

`formatter`
Ресурс засобу форматування.

`pattern`
Новий рядок шаблон для використання. Можливі шаблони можна
подивитися на
[»https://unicode-org.github.io/icu/userguide/format_parse/datetime/](https://unicode-org.github.io/icu/userguide/format_parse/datetime/).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Зазвичай причиною помилки є погано
відформатовані рядки.

### Приклади

**Приклад #1 Приклад використання **datefmt_set_pattern()****

` <?php$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    'MM/dd/yyyy');echo 'Шаблон средства форматирования : ' , datefmt_get_pattern($fmt), PHP_EOL;echo 'Перший відформатований висновок : ', datefmt_format($fmt, 0), PHP_EOL;datefmt_set_pattern($fmt, s: ', datefmt_get_pattern($fmt), PHP_EOL;echo 'Другий відформатований висновок : ', datefmt_format($fmt, 0), PHP_EOL;?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    'MM/dd/yyyy');echo 'Шаблон средства форматирования : ', $fmt->getPattern(), PHP_EOL;echo 'Перший відформатований висновок : ', $fmt->format(0), PHP_EOL;$fmt->setPattern('yyyyMMdd h'' h| Тепер шаблон засоби форматування : ', $fmt->getPattern(), PHP_EOL;echo 'Другий відформатований висновок : ', $fmt->format(0), PHP_EOL;?> `

Результат виконання цього прикладу:

Шаблон засобу форматування: MM/dd/yyyy
Перший відформатований висновок: 12/31/1969
Тепер шаблон засобу форматування: yyyyMMdd hh:mm:ss z
Другий відформатований висновок: 19691231 04:00:00 PST

### Дивіться також

- [datefmt_get_pattern()](intldateformatter.getpattern.md) -
Отримує шаблон, який використовується IntlDateFormatter
- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
