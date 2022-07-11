- [«
DateTimeImmutable::createFromFormat](datetimeimmutable.createfromformat.md)
- [DateTimeImmutable::createFromMutable
»](datetimeimmutable.createfrommutable.md)

- [PHP Manual](index.md)
- [DateTimeImmutable](class.datetimeimmutable.md)
- Повертає новий об'єкт DateTimeImmutable, створений із переданого
об'єкта, що реалізує інтерфейс DateTimeInterface

# DateTimeImmutable::createFromInterface

(PHP 8)

DateTimeImmutable::createFromInterface — Повертає новий об'єкт
DateTimeImmutable, створений з переданого об'єкта, що реалізує
інтерфейс DateTimeInterface

### Опис

public static
**DateTimeImmutable::createFromInterface**([DateTimeInterface](class.datetimeinterface.md)
`$object`): [DateTimeImmutable](class.datetimeimmutable.md)

### Список параметрів

`object`
Об'єкт, що реалізує інтерфейс
[DateTimeInterface](class.datetimeinterface.md), який необхідно
конвертувати в іммутабельну версію. Сам об'єкт не змінюється. Замість
цього повертається новий об'єкт
[DateTimeImmutable](class.datetimeimmutable.md) з тими ж значеннями
дати, часу та часового поясу.

### Значення, що повертаються

Повертає новий об'єкт
[DateTimeImmutable](class.datetimeimmutable.md).

### Приклади

**Приклад #1 Створення іммутабельного об'єкта дати та часу**

` <?php$date u003d new DateTime("2014-06-20 11:45 Europe/London");$immutable u003d DateTimeImmutable::createFromInterface($date);$date u003d new DateTimeI 0 :45 Europe/London");$also_immutable u003d DateTimeImmutable::createFromInterface($date);?> `
