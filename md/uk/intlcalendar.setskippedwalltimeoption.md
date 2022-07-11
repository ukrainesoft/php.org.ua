- [«
IntlCalendar::setRepeatedWallTimeOption](intlcalendar.setrepeatedwalltimeoption.md)
- [IntlCalendar::setTime »](intlcalendar.settime.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Встановлює поведінку для обробки пропущеного часу
процесора при позитивних переходах усунення часового поясу

# IntlCalendar::setSkippedWallTimeOption

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::setSkippedWallTimeOption — Встановлює поведінку для
обробки пропущеного часу процесора при позитивних переходах
зміщення часового поясу

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::setSkippedWallTimeOption**(int `$option`): bool

Процедурний стиль

**intlcal_set_skipped_wall_time_option**([IntlCalendar](class.intlcalendar.md)
`$calendar`, int `$option`): bool

Встановлює поточну стратегію для роботи з часом процесора,
яке пропускається щоразу, коли годинник переводиться на літній час.
Значення за промовчанням - **`IntlCalendar::WALLTIME_LAST`** (момент, коли
час процесора на годину більше). Альтернативні значення:
**`IntlCalendar::WALLTIME_FIRST`** (момент, коли час процесора на
одну годину менше) і **`IntlCalendar::WALLTIME_NEXT_VALID`** (момент,
коли починається літній час).

Впливає лише на момент, поданий календарем (як повідомляє
[IntlCalendar::getTime()](intlcalendar.gettime.md)), значення поля не
будуть переписані відповідним чином.

Щоб ця опція мала будь-який ефект, календар має бути в
[м'якому](intlcalendar.setlenient.md) режимі, інакше
спроба встановити неіснуючий час викликає помилку. error.

Для цієї функції потрібний ICU 4.9 або новіший.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`option`
Одна з констант: **`IntlCalendar::WALLTIME_FIRST`**,
**`IntlCalendar::WALLTIME_LAST`** або
**`IntlCalendar::WALLTIME_NEXT_VALID`**.

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Приклади

Дивіться приклади у описі функції
[IntlCalendar::getSkippedWallTimeOption()](intlcalendar.getskippedwalltimeoption.md).

### Дивіться також

- [intlCalendar::getSkippedWallTimeOption()](intlcalendar.getskippedwalltimeoption.md) -
Отримує поведінку для обробки пропущеного часу процесора
- [intlCalendar::setRepeatedWallTimeOption()](intlcalendar.setrepeatedwalltimeoption.md) -
Встановлює поведінку для обробки часу, що повторюється
процесора при негативних переходах усунення часового поясу
- [intlCalendar::getRepeatedWallTimeOption()](intlcalendar.getrepeatedwalltimeoption.md) -
Отримує поведінку для обробки повторюваного часу процесора
