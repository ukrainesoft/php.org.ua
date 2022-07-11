- [« DatePeriod::getRecurrences](dateperiod.getrecurrences.md)
- [Функції дати та часу »](ref.datetime.md)

- [PHP Manual](index.md)
- [DatePeriod](class.dateperiod.md)
- Повертає початкову дату періоду

# DatePeriod::getStartDate

(PHP 5 \>u003d 5.6.5, PHP 7, PHP 8)

DatePeriod::getStartDate — Повертає початкову дату періоду

### Опис

Об'єктно-орієнтований стиль

public **DatePeriod::getStartDate**():
[DateTimeInterface](class.datetimeinterface.md)

Повертає початкову дату періоду.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт [DateTimeImmutable](class.datetimeimmutable.md),
коли [DatePeriod](class.dateperiod.md) ініціалізований об'єктом
[DateTimeImmutable](class.datetimeimmutable.md) як параметр
`start`.

Інакше повертає об'єкт [DateTime](class.datetime.md).

### Приклади

**Приклад #1 Приклад використання **DatePeriod::getStartDate()****

` <?php$period u003d new DatePeriod('R7/2016-05-16T00:00:00Z/P1D');$start u003d $period->getStartDate();echo $start->format(DateTime::ISO8601) ;?> `

Результат виконання цього прикладу:

2016-05-16T00:00:00+0000

### Дивіться також

- [DatePeriod::getEndDate()](dateperiod.getenddate.md) - Повертає
кінцеву дату періоду
- [DatePeriod::getDateInterval()](dateperiod.getdateinterval.md) -
Повертає інтервал
