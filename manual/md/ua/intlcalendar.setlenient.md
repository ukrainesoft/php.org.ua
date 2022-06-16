- [«
IntlCalendar::setFirstDayOfWeek](intlcalendar.setfirstdayofweek.md)
- [IntlCalendar::setMinimalDaysInFirstWeek
»](intlcalendar.setminimaldaysinfirstweek.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Встановлює, чи інтерпретація дати/часу повинна бути м'якою.

# IntlCalendar::setLenient

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::setLenient — Встановлює, чи потрібна інтерпретація
дати/часу бути м'якою

### Опис

Об'єктно-орієнтований стиль

public **IntlCalendar::setLenient**(bool `$lenient`): bool

Процедурний стиль

**intlcal_set_lenient**([IntlCalendar](class.intlcalendar.md)
`$calendar`, bool `$lenient`): bool

Визначає, чи є календар м'яким режимом. У такому режимі
приймаються деякі із значень, що виходять за кордони для деяких
полів, поведінка аналогічна поведінці
[IntlCalendar::add()](intlcalendar.add.md) (тобто значення переноситься
щоразу на більш важливі поля). Якщо м'який режим вимкнено, такі
значення викликатимуть помилку.

### Список параметрів

`calendar`
Примірник [IntlCalendar](class.intlcalendar.md).

`lenient`
Використовуйте **`true`** для активації м'якого режиму; **`false`** для
вимикання.

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Приклади

Дивіться приклад в описі методу
[IntlCalendar::isLenient()](intlcalendar.islenient.md).
