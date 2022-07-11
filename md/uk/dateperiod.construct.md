- [« DatePeriod](class.dateperiod.md)
- [DatePeriod::getDateInterval »](dateperiod.getdateinterval.md)

- [PHP Manual](index.md)
- [DatePeriod](class.dateperiod.md)
- Створює новий об'єкт DatePeriod

# DatePeriod::\_\_construct

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DatePeriod::\_\_construct — Створює новий об'єкт DatePeriod

### Опис

public **DatePeriod::\_\_construct**(
[DateTimeInterface](class.datetimeinterface.md) `$start`,
[DateInterval](class.dateinterval.md) `$interval`,
int `$recurrences`,
int `$options` u003d 0
)

public **DatePeriod::\_\_construct**(
[DateTimeInterface](class.datetimeinterface.md) `$start`,
[DateInterval](class.dateinterval.md) `$interval`,
[DateTimeInterface](class.datetimeinterface.md) `$end`,
int `$options` u003d 0
)

public **DatePeriod::\_\_construct**(string `$isostr`, int `$options` u003d
0)

Створює новий об'єкт DatePeriod.

### Список параметрів

`start`
Початкова дата.

`interval`
Інтервал.

`recurrences`
Кількість повторень. Має бути більше `0`.

`end`
Кінцева дата.

`isostr`
Рядок, що містить інтервал згідно [спеціфікації ISO
8601](http://en.wikipedia.org/wiki/Iso8601#Repeating_intervals). Нульові
входження (`R0/`) не підтримуються.

`options`
Можливе значення **`DatePeriod::EXCLUDE_START_DATE`** для
виняток початкової дати з періоду.

### Список змін

| Версія | Опис |
|----------------------|-------------------------- -------------|
| 7.2.19, 7.3.6, 7.4.0 | `recurrences` має бути більше `0`. |

### Приклади

**Приклад #1 Приклад використання DatePeriod**

` <?php$start u003d new DateTime('2012-07-01');$interval u003d new DateInterval('P7D');$end u003d new DateTime('2012-07-31');$recurrences u003d $iso u003d 'R4/2012-07-01T00:00:00Z/P7D';// Ці періоди еквівалентні.$period u003d new DatePeriod($start, $interval, $recurrences);$period u003d $interval, $end);$period u003d new DatePeriod($iso);// При переборі примірника DatePeriod в циклі будуть відображені всі відібрані дати// періоду. 'Y-m-d')."
";}?> `

Результат виконання цього прикладу:

2012-07-01
2012-07-08
2012-07-15
2012-07-22
2012-07-29

**Приклад #2 Приклад використання DatePeriod з
**`DatePeriod::EXCLUDE_START_DATE`****

` <?php$start u003d new DateTime('2012-07-01');$interval u003d new DateInterval('P7D');$end u003d new DateTime('2012-07-31');$period u003d ne ($start, $interval, $end,                         DatePeriod::EXCLUDE_START_DATE);// При переборе экземпляра DatePeriod в цикле будут отображены все отобранные даты// периода.// Однако в этом случае 2012-07-01 не будет отображена.foreach ( $period as $date) {   echo $date->format('Y-m-d')."
";}?> `

Результат виконання цього прикладу:

2012-07-08
2012-07-15
2012-07-22
2012-07-29

### Примітки

Нескладне кількість повторень, визначених у розділі 4.5 ISO 8601
"Recurring time interval", не підтримується, тобто ні передача
`"R/..."' в `isostr`, ні **`null`** в `end`, не працюватимуть.
