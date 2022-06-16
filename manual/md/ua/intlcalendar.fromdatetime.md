- [« IntlCalendar::fieldDifference](intlcalendar.fielddifference.md)
- [IntlCalendar::get »](intlcalendar.get.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Створює IntlCalendar з об'єкта чи рядка DateTime

# IntlCalendar::fromDateTime

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a2)

IntlCalendar::fromDateTime — Створює IntlCalendar з об'єкта або рядка
DateTime

### Опис

Об'єктно-орієнтований стиль

public static
**IntlCalendar::fromDateTime**([DateTime](class.datetime.md)\|string
`$datetime`, ?string `$locale` u003d **`null`**):
?[IntlCalendar](class.intlcalendar.md)

Процедурний стиль

**intlcal_from_date_time**([DateTime](class.datetime.md)\|string
`$datetime`, ?string `$locale` u003d **`null`**):
?[IntlCalendar](class.intlcalendar.md)

Створює об'єкт [IntlCalendar](class.intlcalendar.md) або об'єкт
[DateTime](class.datetime.md), або з рядка, з якого може бути
ініціалізований об'єкт [DateTime](class.datetime.md).

Новий календар представлятиме не тільки той самий момент, що й
заданий [DateTime](class.datetime.md) (з урахуванням втрати точності для
дат у дуже далекому у минулому чи майбутньому), але й той самий часовий пояс (з
застереженням, що якщо будуть використовуватись різні бази даних вартових
поясів, то результати можуть відрізнятись).

### Список параметрів

`datetime`
Об'єкт [DateTime](class.datetime.md) або рядок (string, який може
бути передана в [DateTime::\_\_construct()](datetime.construct.md).

### Значення, що повертаються

Створений об'єкт [IntlCalendar](class.intlcalendar.md) або **`null`**
у разі виникнення помилки. Якщо передається рядок (string),
викидається будь-який виняток, що виникає всередині конструктора
[DateTime](class.datetime.md).

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::fromDateTime()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');// то ж, і IntlCalendar::fromDateTime(new DateTime(...))$cal1 u003d IntlCalendar::fromDateTime('20 -28 00:01:02 Europe/Berlin');// Зверніть увага, що годинний пояс - Europe/Berlin, а не Europe/Lisbon за умовчаннямecho IntlDateFormat VVVV', 'de_DE'), "
";

Результат виконання цього прикладу:

2013 Februar 28 00:01:02 Deutschland Zeit
