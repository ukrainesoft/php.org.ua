- [« IntlCalendar::getMinimum](intlcalendar.getminimum.md)
- [IntlCalendar::getRepeatedWallTimeOption
»](intlcalendar.getrepeatedwalltimeoption.md)

- [PHP Manual](index.md)
- [IntlCalendar](class.intlcalendar.md)
- Отримує число, яке представляє поточний час

# IntlCalendar::getNow

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

IntlCalendar::getNow — Отримує число, яке представляє поточний час

### Опис

Об'єктно-орієнтований стиль

public static **IntlCalendar::getNow**(): float

Процедурний стиль

**intlcal_get_now**(): float

Кількість мілісекунд, що минули від початку епохи Unix. Число
визначається системним часом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Число з плаваючою точкою (float), що представляє кількість мілісекунд
з початку епохи Unix, крім додаткових секунд.

### Приклади

**Приклад #1 Приклад використання **IntlCalendar::getNow()****

'<? $formatter->format(IntlCalendar::getNow() / 1000.), "
";

Результат виконання цього прикладу:

float(1371425814666)
lunes, 17 de junio de 2013 01:36:54 Hora de verano de Europa central
