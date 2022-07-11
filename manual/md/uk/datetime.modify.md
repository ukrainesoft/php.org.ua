- [« DateTime::getLastErrors](datetime.getlasterrors.md)
- [DateTime::\_\_set_state »](datetime.set-state.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Зміна тимчасової мітки

# DateTime::modify

#date_modify

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DateTime::modify -- date_modify — Зміна тимчасової мітки

### Опис

Об'єктно-орієнтований стиль

public **DateTime::modify**(string `$modifier`):
[DateTime](class.datetime.md)\|false

Процедурний стиль

[date_modify](function.date-modify.md)([DateTime](class.datetime.md)
`$object`, string `$modifier`): [DateTime](class.datetime.md)\|false

Змінює позначку часу об'єкта DateTime шляхом додавання або віднімання
часу у форматі, прийнятому для функції
[DateTimeImmutable::\_\_construct()](datetimeimmutable.construct.md).

### Список параметрів

`object`
Тільки для процедурного стилю: об'єкт [DateTime](class.datetime.md),
повертається [date_create()](function.date-create.md). Функція
змінює цей об'єкт.

`modifier`
Рядок дати/часу. Пояснення коректних форматів наведено в розділі
[Формати дати та часу](datetime.formats.md).

### Значення, що повертаються

Повертає об'єкт [DateTime](class.datetime.md) для застосування в ланцюзі
методів або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **DateTime::modify()****

Об'єктно-орієнтований стиль

` <?php$date u003d new DateTime('2006-12-12');$date->modify('+1 day');echo $date->format('Y-m-d');?> `

Процедурний стиль

` <?php$date u003d date_create('2006-12-12');date_modify($date, '+1 day');echo date_format($date, 'Y-m-d');?> `

Результат виконання даних прикладів:

2006-12-13

**Приклад #2 Будьте обережні при додаванні та відніманні місяців**

` <?php$date u003d new DateTime('2000-12-31');$date->modify('+1 month');echo $date->format('Y-m-d') . "
";$date->modify('+1 month');echo $date->format('Y-m-d') . "
";?> `

Результат виконання цього прикладу:

2001-01-31
2001-03-03

### Дивіться також

- [strtotime()](function.strtotime.md) - Перетворює текстове
подання дати англійською мовою у мітку часу Unix
- [DateTimeImmutable::modify()](datetimeimmutable.modify.md) -
Створює новий об'єкт із зміненою тимчасовою міткою
- [DateTime::add()](datetime.add.md) - Змінює об'єкт DateTime,
додаючи кількість днів, місяців, років, годин, хвилин та секунд
- [DateTime::sub()](datetime.sub.md) - Віднімає задану кількість
днів, місяців, років, годин, хвилин та секунд з часу об'єкту
DateTime
- [DateTime::setDate()](datetime.setdate.md) - Встановлює дату
- [DateTime::setISODate()](datetime.setisodate.md) - Встановлює
дату у форматі ISO
- [DateTime::setTime()](datetime.settime.md) - Встановлює час
- [DateTime::setTimestamp()](datetime.settimestamp.md) -
Встановлює дату та час на основі мітки часу Unix
