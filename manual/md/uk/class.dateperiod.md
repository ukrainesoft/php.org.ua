- [« DateInterval::format](dateinterval.format.md)
- [DatePeriod::\_\_construct »](dateperiod.construct.md)

- [PHP Manual](index.md)
- [Дата/час](book.datetime.md)
- Клас DatePeriod

# Клас DatePeriod

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Представляє тимчасовий період.

Дозволяє переміщатися в заданому часовому інтервалі на рівні
проміжки часу.

## Огляд класів

class **DatePeriod** implements
[IteratorAggregate](class.iteratoraggregate.md) {

/\* Константи \*/

const int `EXCLUDE_START_DATE` u003d 1;

/\* Властивості \*/

public int `$recurrences`;

public bool `$include_start_date`;

public [DateTimeInterface](class.datetimeinterface.md) `$start`;

public [DateTimeInterface](class.datetimeinterface.md) `$current`;

public [DateTimeInterface](class.datetimeinterface.md) `$end`;

public [DateInterval](class.dateinterval.md) `$interval`;

/\* Методи \*/

public [\_\_construct](dateperiod.construct.md)(
[DateTimeInterface](class.datetimeinterface.md) `$start`,
[DateInterval](class.dateinterval.md) `$interval`,
int `$recurrences`,
int `$options` u003d 0
)

public [\_\_construct](dateperiod.construct.md)(
[DateTimeInterface](class.datetimeinterface.md) `$start`,
[DateInterval](class.dateinterval.md) `$interval`,
[DateTimeInterface](class.datetimeinterface.md) `$end`,
int `$options` u003d 0
)

public [\_\_construct](dateperiod.construct.md)(string `$isostr`, int
`$options` u003d 0)

public [getDateInterval](dateperiod.getdateinterval.md)():
[DateInterval](class.dateinterval.md)

public [getEndDate](dateperiod.getenddate.md)():
?[DateTimeInterface](class.datetimeinterface.md)

public [getRecurrences](dateperiod.getrecurrences.md)(): ?int

public [getStartDate](dateperiod.getstartdate.md)():
[DateTimeInterface](class.datetimeinterface.md)

}

## Зумовлені константи

**`DatePeriod::EXCLUDE_START_DATE`**
Виключає початкову дату, використовується в
[DatePeriod::\_\_construct()](dateperiod.construct.md).

## Властивості

`recurrences`
Число повторів, якщо об'єкт **DatePeriod** створювався з явною вказівкою
`$recurrences`. Дивіться
[DatePeriod::getRecurrences()](dateperiod.getrecurrences.md).

`include_start_date`
Включати початкову дату в набір дат чи ні.

`start`
Дата початку періоду.

`current`
У процесі ітерації міститиме поточну дату періоду.

`end`
Кінцева дата періоду.

`interval`
Специфікація інтервалу, що повторюється, згідно ISO 8601.

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------|
| 8.0.0 | Клас **DatePeriod** тепер реалізує інтерфейс [IteratorAggregate](class.iteratoraggregate.md). Раніше натомість було реалізовано інтерфейс [Traversable](class.traversable.md). |

## Зміст

- [DatePeriod::\_\_construct](dateperiod.construct.md) - Створює
новий об'єкт DatePeriod
- [DatePeriod::getDateInterval](dateperiod.getdateinterval.md) -
Повертає інтервал
- [DatePeriod::getEndDate](dateperiod.getenddate.md) - Повертає
кінцеву дату періоду
- [DatePeriod::getRecurrences](dateperiod.getrecurrences.md) -
Отримує кількість повторів
- [DatePeriod::getStartDate](dateperiod.getstartdate.md) -
Повертає початкову дату періоду
