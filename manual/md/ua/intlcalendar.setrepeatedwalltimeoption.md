- [«
IntlCalendar::setMinimalDaysInFirstWeek](intlcalendar.setminimaldaysinfirstweek.md)
- [IntlCalendar::setSkippedWallTimeOption
»](intlcalendar.setskippedwalltimeoption.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Встановлює поведінку для обробки часу, що повторюється
процесора при негативних переходах усунення часового поясу

# IntlCalendar::setRepeatedWallTimeOption

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::setRepeatedWallTimeOption — Встановлює поведінку для
обробки повторюваного часу процесора при негативних переходах
зміщення часового поясу

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::setRepeatedWallTimeOption**(int `$option`): bool

Процедурний стиль

**intlcal_set_repeated_wall_time_option**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$option`): bool

Встановлює поточну стратегію роботи з часом процесора
повторюється щоразу, коли годинник переводиться назад під час переходу
на літній час. Значення за замовчуванням -
**`IntlCalendar::WALLTIME_LAST`** (момент після переходу на літнє
час). Інше можливе значення - **`IntlCalendar::WALLTIME_FIRST`**
(Момент, який настає під час переходу на літню пору).

Для цієї функції потрібний ICU 4.9 або новіший.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`option`
Одна з констант: **`IntlCalendar::WALLTIME_FIRST`** або
**`IntlCalendar::WALLTIME_LAST`**.

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Приклади

Дивіться приклади у описі функції
[IntlCalendar::getRepeatedWallTimeOption()](intlcalendar.getrepeatedwalltimeoption.md).

### Дивіться також

- [intlCalendar::getRepeatedWallTimeOption()](intlcalendar.getrepeatedwalltimeoption.md) -
Отримує поведінку для обробки повторюваного часу процесора
- [intlCalendar::setSkippedWallTimeOption()](intlcalendar.setskippedwalltimeoption.md) -
Встановлює поведінку для обробки пропущеного часу
процесора при позитивних переходах усунення часового поясу
- [intlCalendar::getSkippedWallTimeOption()](intlcalendar.getskippedwalltimeoption.md) -
Отримує поведінку для обробки пропущеного часу процесора
