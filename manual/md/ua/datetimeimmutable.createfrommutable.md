- [«
DateTimeImmutable::createFromInterface](datetimeimmutable.createfrominterface.md)
- [DateTimeImmutable::getLastErrors
»](datetimeimmutable.getlasterrors.md)

- [PHP Manual](index.md)
- [DateTimeImmutable](class.datetimeimmutable.md)
- Повертає новий об'єкт DateTimeImmutable, що містить заданий
об'єкт DateTime

# DateTimeImmutable::createFromMutable

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

DateTimeImmutable::createFromMutable — Повертає новий об'єкт
DateTimeImmutable, що містить заданий об'єкт DateTime

### Опис

public static
**DateTimeImmutable::createFromMutable**([DateTime](class.datetime.md)
`$object`): [DateTimeImmutable](class.datetimeimmutable.md)

### Список параметрів

`object`
Об'єкт, що змінюється [DateTime](class.datetime.md), який ви хочете
перетворити на незмінну версію. Цей об'єкт не змінюється, але
натомість створюється новий об'єкт
[DateTimeImmutable](class.datetimeimmutable.md), що містить ту саму
саму інформацію.

### Значення, що повертаються

Повертає новий екземпляр
[DateTimeImmutable](class.datetimeimmutable.md).

### Приклади

**Приклад #1 Створення незмінного об'єкта дати/часу**

` <?php$date u003d new DateTime("2014-06-20 11:45 Europe/London");$immutable u003d DateTimeImmutable::createFromMutable( $date );?> `
