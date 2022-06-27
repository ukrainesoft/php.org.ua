- [« IntlDateFormatter::localtime](intldateformatter.localtime.md)
- [IntlDateFormatter::setCalendar
»](intldateformatter.setcalendar.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Перетворює рядок на значення позначки часу

# IntlDateFormatter::parse

# datefmt_parse

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::parse -- datefmt_parse — Перетворює рядок на
значення позначки часу

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::parse**(string `$string`, int `&$offset` u003d
**`null`**): int\|float\|false

Процедурний стиль

**datefmt_parse**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`, string `$string`, int `&$offset` u003d **`null`**):
int\|float\|false

Перетворює `string` на інкрементне значення часу, починаючи з `offset`
і використовуючи якомога більшу частину вхідного значення.

### Список параметрів

`formatter`
Ресурс засобу форматування.

`string`
Рядок для перетворення під час.

`offset`
Позиція, з якої слід розпочати синтаксичний аналіз у `string`
(починаючи з нуля). Якщо до використання `string` помилки не виникає,
`offset` міститиме -1, інакше він міститиме
позицію, в якій закінчився синтаксичний аналіз (і відбулася
помилка). Ця змінна міститиме кінцеву позицію, якщо при
синтаксичному аналізі виникла помилка. Якщо `offset` \>
`strlen($string)`, аналіз негайно завершується помилкою.

### Значення, що повертаються

Позначка часу перетвореного значення або **`false`**, якщо значення
не може бути перетворено.

### Приклади

**Приклад #1 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Первый преобразованный вывод: ' . $fmt->parse('Wednesday, December 20, 1989 4:00:00 PM PT');$fmt u003d new IntlDateFormatter(  ::Form: ,   IntlDateFormatter::GREGORIAN);?> `

**Приклад #2 Приклад використання **datefmt_parse()****

`<?php$fmt u003d datefmt_create(   'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles'; datefmt_parse($fmt, 'Wednesday, December 20, 1989 4:00:00 PM PT');$fmt u003d datefmt_create(    'de-DE',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter ::GREGORIAN);echo 'Другий перетворений висновок: ' . datefmt_parse($fmt, 'Mittwoch, 20. Dezember 1989 16:00 Uhr GMT-08:00');? `

Результат виконання цього прикладу:

Перший перетворений висновок: 630201600
Другий перетворений висновок: 630201600

### Дивіться також

- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
- [datefmt_format()](intldateformatter.format.md) - Форматує
значення дати/часу у вигляді рядка
- [datefmt_localtime()](intldateformatter.localtime.md) -
Перетворює рядок на значення часу на основі поля
- [datefmt_get_error_code()](intldateformatter.geterrorcode.md) -
Отримує код помилки останньої операції
- [datefmt_get_error_message()](intldateformatter.geterrormessage.md) -
Отримує текст помилки останньої операції
