- [« DateTime::createFromImmutable](datetime.createfromimmutable.md)
- [DateTime::getLastErrors »](datetime.getlasterrors.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Повертає новий об'єкт DateTime, створений із переданого об'єкту,
реалізує інтерфейс DateTimeInterface

# DateTime::createFromInterface

(PHP 8)

DateTime::createFromInterface — Повертає новий об'єкт DateTime,
створений із переданого об'єкта, що реалізує інтерфейс
DateTimeInterface

### Опис

public static
**DateTime::createFromInterface**([DateTimeInterface](class.datetimeinterface.md)
`$object`): [DateTime](class.datetime.md)

### Список параметрів

`object`
Об'єкт, що реалізує інтерфейс
[DateTimeInterface](class.datetimeinterface.md), з якого треба
отримати версію, що змінюється. Сам об'єкт не модифікується. На його основі
створюється новий об'єкт [DateTime](class.datetime.md), що містить ту саму
інформацію про дату, час та часовий пояс.

### Значення, що повертаються

Повертає новий об'єкт [DateTime](class.datetime.md).

### Приклади

**Приклад #1 Приклад використання**

` <?php$date u003d new DateTimeImmutable("2014-06-20 11:45 Europe/London");$mutable u003d DateTime::createFromInterface($date);$date u003d new DateTime("2 :45 Europe/London");$also_mutable u003d DateTime::createFromInterface($date);?> `
