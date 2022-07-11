- [«
IntlCalendar::getRepeatedWallTimeOption](intlcalendar.getrepeatedwalltimeoption.md)
- [IntlCalendar::getTime »](intlcalendar.gettime.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- отримує поведінку для обробки пропущеного часу процесора

# IntlCalendar::getSkippedWallTimeOption

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getSkippedWallTimeOption — Отримує поведінку для
обробки пропущеного часу процесора

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::getSkippedWallTimeOption**(): int

Процедурний стиль

**intlcal_get_skipped_wall_time_option**([IntlCalendar](class.intlcalendar.md)
`$calendar`): int

Отримує поточну стратегію для роботи з часом процесора
пропускається щоразу, коли годинник переводиться під час переходів
на літній час. Значення за замовчуванням -
**`IntlCalendar::WALLTIME_LAST`**.

Щоб ця опція мала будь-який ефект, календар має бути в
[м'якому](intlcalendar.setlenient.md) режимі, інакше
спроба встановити неіснуючий час викликає помилку.

Для цієї функції потрібний ICU 4.9 або новіший.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

### Значення, що повертаються

Одна з констант: **`IntlCalendar::WALLTIME_FIRST`**,
**`IntlCalendar::WALLTIME_LAST`** або
**`IntlCalendar::WALLTIME_NEXT_VALID`**.

### Приклади

**Приклад #1 Приклад використання
**IntlCalendar::getSkippedWallTimeOption()****

` <?phpini_set('date.timezone', 'Europe/Lisbon');ini_set('intl.default_locale', 'en_US');ini_set('intl.error_level', E_WARNING);// 31 березень в 01:0 часы переводятся на 1 час вперёд и с GMT+00 на GMT+01.$cal u003d new IntlGregorianCalendar(2013, 2 /* March */, 31, 1, 30);var_dump(    $cal->isLenient(),               // true    $cal->getSkippedWalltimeOption() // 0 WALLTIME_LAST);$formatter u003d IntlDateFormatter::create(   NULL,              ¦         Formatter::FULL,| >getTime() / 1000));$cal->setSkippedWallTimeOption(IntlCalendar::WALLTIME_FIRST);var_dump($cal->getSkippedWalltimeOption()); // 1 WALLTIME_FIRST$cal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 1);var_dump($formatter->format($cal->getTime() / 1000));$cal->setSkippedWallTimeOption(IntlCale: var_dump($cal->getSkippedWalltimeOption()); // 2 WALLTIME_NEXT_VALID$cal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 1);var_dump($formatter->format($cal->getTime() / 1000)); `

Результат виконання цього прикладу:

bool(true)
int(0)
string(40) "Sunday, March 31, 2013 at 1:30:00 AM GMT"
int(1)
string(41) "Sunday, March 31, 2013 at 12:30:00 AM GMT"
int(2)
string(40) "Sunday, March 31, 2013 at 1:00:00 AM GMT"

### Дивіться також

- [IntlCalendar::getRepeatedWallTimeOption()](intlcalendar.getrepeatedwalltimeoption.md) -
Отримує поведінку для обробки повторюваного часу процесора
- [IntlCalendar::setSkippedWallTimeOption()](intlcalendar.setskippedwalltimeoption.md) -
Встановлює поведінку для обробки пропущеного часу
процесора при позитивних переходах усунення часового поясу
- [IntlCalendar::setRepeatedWallTimeOption()](intlcalendar.setrepeatedwalltimeoption.md) -
Встановлює поведінку для обробки часу, що повторюється
процесора при негативних переходах усунення часового поясу
