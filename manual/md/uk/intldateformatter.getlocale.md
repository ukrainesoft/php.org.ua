- [«
IntlDateFormatter::getErrorMessage](intldateformatter.geterrormessage.md)
- [IntlDateFormatter::getPattern »](intldateformatter.getpattern.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- отримує мовний стандарт, що використовується засобом форматування

# IntlDateFormatter::getLocale

#datefmt_get_locale

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::getLocale -- datefmt_get_locale — Отримує мовний
стандарт, використовуваний засобом форматування

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::getLocale**(int `$type` u003d
**`ULOC_ACTUAL_LOCALE`**): string\|false

Процедурний стиль

**datefmt_get_locale**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`, int `$type` u003d **`ULOC_ACTUAL_LOCALE`**): string\|false

Отримує мовний стандарт, який використовується засобом форматування.

### Список параметрів

`formatter`
Ресурс засобу форматування.

`type`
Ви можете вибирати між коректним та поточним мовним стандартом
(**`Locale::VALID_LOCALE`** та **`Locale::ACTUAL_LOCALE`**,
відповідно). За промовчанням використовується поточний стандарт.

### Значення, що повертаються

Мовний стандарт засобу форматування або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **datefmt_get_locale()****

` <?php$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Языковой стандарт средства форматирования : ' . datefmt_get_locale($fmt);echo 'Перший відформатований висновок ' . datefmt_format($fmt, 0);$fmt u003d datefmt_create(    'de-DE',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Языковой стандарт средства форматирования : ' . datefmt_get_locale($fmt);echo 'Другий відформатований висновок ' . datefmt_format($fmt, 0);?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Языковой стандарт средства форматирования : ' . $fmt->getLocale();echo 'Перший відформатований висновок ' . $fmt->format(0);$fmt u003d new IntlDateFormatter(    'de-DE',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);echo 'Языковой стандарт средства форматирования : ' . $fmt->getLocale();echo 'Другий відформатований висновок ' . $fmt->format(0);?> `

Результат виконання цього прикладу:

Мовний стандарт засобу форматування: en
Перший відформатований висновок Wednesday, December 31, 1969 4:00:00 PM PT
Мовний стандарт засобу форматування: de
Другий відформатований висновок Mittwoch, 31. Dezember 1969 16:00 Uhr GMT-08:00

### Дивіться також

- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
