- [« DatePeriod::\_\_construct](dateperiod.construct.md)
- [DatePeriod::getEndDate »](dateperiod.getenddate.md)

- [PHP Manual](index.md)
- [DatePeriod](class.dateperiod.md)
- Повертає інтервал

# DatePeriod::getDateInterval

(PHP 5 \>u003d 5.6.5, PHP 7, PHP 8)

DatePeriod::getDateInterval — Повертає інтервал

### Опис

Об'єктно-орієнтований стиль

public **DatePeriod::getDateInterval**():
[DateInterval](class.dateinterval.md)

Повертає об'єкт [DateInterval](class.dateinterval.md),
інтервал, що представляє, використаний для створення періоду.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт [DateInterval](class.dateinterval.md)

### Приклади

**Приклад #1 Приклад використання **DatePeriod::getDateInterval()****

` <?php$period u003d new DatePeriod('R7/2016-05-16T00:00:00Z/P1D');$interval u003d $period->getDateInterval();echo $interval->format('%d day' );?> `

Результат виконання цього прикладу:

1 день

### Дивіться також

- [DatePeriod::getStartDate()](dateperiod.getstartdate.md) -
Повертає початкову дату періоду
- [DatePeriod::getEndDate()](dateperiod.getenddate.md) - Повертає
кінцеву дату періоду
