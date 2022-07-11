- [« IntlCalendar::getNow](intlcalendar.getnow.md)
- [IntlCalendar::getSkippedWallTimeOption
»](intlcalendar.getskippedwalltimeoption.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує поведінку для обробки повторюваного часу процесора

# IntlCalendar::getRepeatedWallTimeOption

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getRepeatedWallTimeOption — Отримує поведінку для
обробки повторюваного часу процесора

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getRepeatedWallTimeOption**(): int

Процедурний стиль

**intlcal_get_repeated_wall_time_option**([IntlCalendar](class.intlcalendar.md)
`$calendar`): int

Отримує поточну стратегію роботи з часом процесора, яка
повторюється щоразу, коли годинник переводиться назад під час переходів
на літній час. Значення за замовчуванням -
**`IntlCalendar::WALLTIME_LAST`**.

Для цієї функції потрібний ICU 4.9 або новіший.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

### Значення, що повертаються

Одна з констант: **`IntlCalendar::WALLTIME_FIRST`** або
**`IntlCalendar::WALLTIME_LAST`**.

### Приклади

**Приклад #1 Приклад використання
**IntlCalendar::getRepeatedWallTimeOption()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'en_US');ini_set('intl.error_level', E_WARNING);// 27 жовтня в 0 години перекладаються на 1 годину назад с GMT+01 на GMT+00. // 0 WALLTIME_LAST$formatter u003d IntlDateFormatter::create(   NULL,    IntlDateFormatter::FULL,   IntlDateFormatter::FULL,    'UTC'$$;) $cal->setRepeatedWalltimeOption(IntlCalendar::WALLTIME_FIRST);var_dump($cal->getRepeatedWalltimeOption()); // 1 WALLTIME_FIRST$cal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 1);var_dump($formatter->format($cal->getTime() / 1000.)); `

Результат виконання цього прикладу:

int(0)
string(42) "Sunday, October 27, 2013 at 1:30:00 AM GMT"
int(1)
string(43) "Sunday, October 27, 2013 at 12:30:00 AM GMT"

### Дивіться також

- [IntlCalendar::getSkippedWallTimeOption()](intlcalendar.getskippedwalltimeoption.md) -
Отримує поведінку для обробки пропущеного часу процесора
- [IntlCalendar::setSkippedWallTimeOption()](intlcalendar.setskippedwalltimeoption.md) -
Встановлює поведінку для обробки пропущеного часу
процесора при позитивних переходах усунення часового поясу
- [IntlCalendar::setRepeatedWallTimeOption()](intlcalendar.setrepeatedwalltimeoption.md) -
Встановлює поведінку для обробки часу, що повторюється
процесора при негативних переходах усунення часового поясу
