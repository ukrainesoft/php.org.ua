- [« DatePeriod::getDateInterval](dateperiod.getdateinterval.md)
- [DatePeriod::getRecurrences »](dateperiod.getrecurrences.md)

- [PHP Manual](index.md)
- [DatePeriod](class.dateperiod.md)
- Повертає кінцеву дату періоду

# DatePeriod::getEndDate

(PHP 5 \>u003d 5.6.5, PHP 7, PHP 8)

DatePeriod::getEndDate — Повертає кінцеву дату періоду

### Опис

Об'єктно-орієнтований стиль

public **DatePeriod::getEndDate**():
?[DateTimeInterface](class.datetimeinterface.md)

Повертає кінцеву дату періоду.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`null`**, якщо [DatePeriod](class.dateperiod.md) не
містить кінцеву дату. Наприклад, при ініціалізації з параметром
`recurrences` або `isostr` без зазначення кінцевої дати.

Повертає об'єкт [DateTimeImmutable](class.datetimeimmutable.md),
коли [DatePeriod](class.dateperiod.md) ініціалізований з об'єктом
[DateTimeImmutable](class.datetimeimmutable.md) як параметр
`end`.

Інакше повертає клонований об'єкт (object)
[DateTime](class.datetime.md), який представляє дату закінчення.

### Приклади

**Приклад #1 Приклад використання **DatePeriod::getEndDate()****

` <?php$period u003d new DatePeriod(    new DateTime('2016-05-16T00:00:00Z'),    new DateInterval('P1D'),    new 0:0 ;$start u003d $period->getEndDate();echo $start->format(DateTime::ISO8601);?> `

Результат виконання даних прикладів:

2016-05-20T00:00:00+0000

**Приклад #2 Приклад використання **DatePeriod::getEndDate()** без дати
закінчення**

`<?php$period u003d new DatePeriod(    new DateTime('2016-05-16T00:00:00Z'),    new DateInterval('P1D'),     7);_var> `

Результат виконання цього прикладу:

NULL

### Дивіться також

- [DatePeriod::getStartDate()](dateperiod.getstartdate.md) -
Повертає початкову дату періоду
- [DatePeriod::getDateInterval()](dateperiod.getdateinterval.md) -
Повертає інтервал
