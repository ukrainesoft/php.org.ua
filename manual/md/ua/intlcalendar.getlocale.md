- [« IntlCalendar::getLeastMaximum](intlcalendar.getleastmaximum.md)
- [IntlCalendar::getMaximum »](intlcalendar.getmaximum.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- отримує мовний стандарт, пов'язаний з об'єктом

# IntlCalendar::getLocale

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getLocale — Отримує мовний стандарт, пов'язаний з
об'єктом

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getLocale**(int `$type`): string\|false

Процедурний стиль

**intlcal_get_locale**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$type`): string\|false

Повертає мовний стандарт, пов'язаний із об'єктом.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`type`
Чи слід отримувати фактичний мовний стандарт (мовний стандарт,
якого відбуваються дані календаря, за допомогою
**`Locale::ACTUAL_LOCALE`**) або дійсний мовний стандарт, т.я.
найбільш конкретний мовний стандарт, що підтримується ICU щодо
запитаного мовного стандарту - дивіться **`Locale::VALID_LOCALE`**.
Від найзагальніших до найчастіших, мовні стандарти відсортовані
наступним чином: фактичний мовний стандарт, допустимий мовний
стандарт, запитаний мовний стандарт.

### Значення, що повертаються

Мовний стандарт у вигляді рядка або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::getLocale()****

` ; `

Результат виконання цього прикладу:

string(2) "en"
string(5) "en_US"
