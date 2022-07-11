- [« IntlCalendar::inDaylightTime](intlcalendar.indaylighttime.md)
- [IntlCalendar::isLenient »](intlcalendar.islenient.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Визначає, чи дорівнює інший календар, але для іншого часу

# IntlCalendar::isEquivalentTo

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::isEquivalentTo — Визначає, чи дорівнює інший календар, але
для іншого часу

### Опис

Об'єктно-орієнтований стиль

public
**IntlCalendar::isEquivalentTo**([IntlCalendar](class.intlcalendar.md)
`$other`): bool

Процедурний стиль

**intlcal_is_equivalent_to**([IntlCalendar](class.intlcalendar.md)
`$calendar`, [IntlCalendar](class.intlcalendar.md) `$other`): bool

Повертає, чи рівні цей та даний об'єкт для всіх цілей, крім
встановлений час. Мовні стандарти можуть не співпадати, якщо
через таку невідповідність не відбувається жодних змін у поведінці.
Сюди входить [часовий пояс](intlcalendar.gettimezone.md), чи встановлено
[м'який режим](intlcalendar.islenient.md),
[повторювані](intlcalendar.getrepeatedwalltimeoption.md) та
[пропущені](intlcalendar.getskippedwalltimeoption.md) налаштування
часу процесора, [дні тижні, коли вихідні починаються та
закінчуються](intlcalendar.getdayofweektype.md) та [час, коли
відбуваються такі переходи](intlcalendar.getweekendtransition.md).
Також може містити інші установки, специфічні для календаря,
наприклад, момент переходу між григоріанським та юліанським календарем.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`other`
Інший календар, з яким буде проводитись порівняння.

### Значення, що повертаються

За відсутності помилок аргумент повертає **`true`**, якщо календарі
рівні, крім, можливо, встановленого часу.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::isEquivalentTo()****

` <?php$cal1 u003d IntlCalendar::createInstance('Europe/Lisbon', 'pt_PT');$cal2 u003d IntlCalendar::createInstance('Europe/Lisbon', 'es_ES');$cal2->clear(); var_dump($cal1->isEquivalentTo($cal2)); // true$cal3 u003d IntlCalendar::createInstance('Europe/Lisbon', 'en_US');var_dump($cal1->isEquivalentTo($cal3)); //falsevar_dump($cal1->getFirstDayOfWeek(),    // 2 (Понеділок)$cal3->getFirstDayOfWeek()); // 1 (Неділя) `

Результат виконання цього прикладу:

bool(true)
bool(false)
int(2)
int(1)

### Дивіться також

- [IntlCalendar::equals()](intlcalendar.equals.md) - Порівнює
час двох об'єктів IntlCalendar щодо рівності
