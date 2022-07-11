- [« DateTime::createFromFormat](datetime.createfromformat.md)
- [DateTime::createFromInterface »](datetime.createfrominterface.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Повертає об'єкт DateTime інкапсулюючий заданий об'єкт
DateTimeImmutable

# DateTime::createFromImmutable

(PHP 7 \>u003d 7.3.0, PHP 8)

DateTime::createFromImmutable — Повертає об'єкт DateTime
інкапсулюючий заданий об'єкт DateTimeImmutable

### Опис

public static
**DateTime::createFromImmutable**([DateTimeImmutable](class.datetimeimmutable.md)
`$object`): [DateTime](class.datetime.md)

### Список параметрів

`object`
Незмінний об'єкт [DateTimeImmutable](class.datetimeimmutable.md),
який потребує перетворення на форму, що змінюється. Сам об'єкт не
змінюється, а натомість створюється новий об'єкт класу
[DateTime](class.datetime.md), що містить ті ж дані: дату, час та
часовий пояс.

### Значення, що повертаються

Повертає новий об'єкт класу [DateTime](class.datetime.md).

### Приклади

**Приклад #1 Створення об'єкта, що змінюється**

` <?php$date u003d new DateTimeImmutable("2014-06-20 11:45 Europe/London");$mutable u003d DateTime::createFromImmutable( $date );?> `
