- [« IntlCalendar::\_\_construct](intlcalendar.construct.md)
- [IntlCalendar::equals »](intlcalendar.equals.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Створює новий об'єкт IntlCalendar

# IntlCalendar::createInstance

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::createInstance — Створює новий об'єкт IntlCalendar

### Опис

Об'єктно-орієнтований стиль

public static
**IntlCalendar::createInstance**([IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone` u003d **`null`**, ?string `$locale` u003d **`null`**):
?[IntlCalendar](class.intlcalendar.md)

Процедурний стиль

**intlcal_create_instance**([IntlTimeZone](class.intltimezone.md)\|[DateTimeZone](class.datetimezone.md)\|string\|null
`$timezone` u003d **`null`**, ?string `$locale` u003d **`null`**):
?[IntlCalendar](class.intlcalendar.md)

Враховуючи часовий пояс та мовний стандарт, метод створює об'єкт
[IntlCalendar](class.intlcalendar.md). Цей фабричний метод може
повертати дочірній клас [IntlCalendar](class.intlcalendar.md).

Створений календар представлятиме момент часу, коли він був
створено на основі системного часу. Усі поля можна очистити, викликавши
**IntCalendar::clear()** без аргументів. Дивіться також
[IntlGregorianCalendar::\_\_construct()](intlgregoriancalendar.construct.md).

### Список параметрів

`timezone`
Часовий пояс для використання.

- Якщо **`null`**, то буде використаний часовий пояс за замовчуванням,
задана в ini-налаштування
[date.timezone](datetime.configuration.md#ini.date.timezone) або
за допомогою функції
[date_default_timezone_set()](function.date-default-timezone-set.md)
та повернена функцією
[date_default_timezone_get()](function.date-default-timezone-get.md).

- Об'єкт класу [IntlTimeZone](class.intltimezone.md).

- Об'єкт класу [DateTimeZone](class.datetimezone.md). Його
ідентифікатор буде вилучено і на його основі буде створено об'єкт
часового поясу ICU; часовий пояс буде збережено в базі даних ICU, а
не PHP.

- Рядок, що є коректним ідентифікатором часового поясу ICU.
Дивіться
[IntlTimeZone::createTimeZoneIDEnumeration()](intltimezone.createtimezoneidenumeration.md).
"Сирі" зсуви типу "GMT+08:30" також підтримуються.

`locale`
Використання мовного стандарту або значення **`null`** для використання
[мовного стандарту за
замовчуванням](intl.configuration.md#ini.intl.default-locale).

### Значення, що повертаються

Створений екземпляр [IntlCalendar](class.intlcalendar.md) або
**`null`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::createInstance()****

` <?phpini_set('intl.default_locale', 'es_ES');ini_set('date.timezone', 'Europe/Madrid');$cal u003d IntlCalendar::createInstance();echo "Без аргументів
";var_dump(get_class($cal),         IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL));echo "
";echo "Явна вказівка годинного поясу
";$cal u003dIntlCalendar::createInstance(IntlTimeZone::getGMT());var_dump(get_class($cal),        IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL));
";echo "Явна вказівка мовного стандарту (з календарем)
";$cal u003d IntlCalendar::createInstance(NULL, 'es_ES@calendaru003dpersian');var_dump(get_class($cal),        IntlDateFormatter::formatObject($cal, IntlDateFormatter::

Результат виконання цього прикладу:

Без аргументів
string(21) "IntlGregorianCalendar"
string(68) "martes 18 de junio de 2013 14:11:02 Hora de verano de Europa Central"

Явна вказівка часового поясу
string(21) "IntlGregorianCalendar"
string(45) "martes 18 de junio de 2013 12:11:02 GMT+00:00"

Явна вказівка мовного стандарту (з календарем)
string(12) "IntlCalendar"
string(70) "martes 28 de Khordad de 1392 14:11:02 Hora de verano de Europa Central"

### Дивіться також

- [IntlGregorianCalendar::\_\_construct()](intlgregoriancalendar.construct.md) -
Конструктор класу григоріанського календаря
