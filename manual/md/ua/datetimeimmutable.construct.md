- [« DateTimeImmutable::add](datetimeimmutable.add.md)
- [DateTimeImmutable::createFromFormat
»](datetimeimmutable.createfromformat.md)

- [PHP Manual](index.md)
- [DateTimeImmutable](class.datetimeimmutable.md)
- Повертає новий об'єкт DateTimeImmutable

# DateTimeImmutable::\_\_construct

#date_create_immutable

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::\_\_construct -- date_create_immutable - Повертає
новий об'єкт DateTimeImmutable

### Опис

Об'єктно-орієнтований стиль

public **DateTimeImmutable::\_\_construct**(string `$datetime` u003d "now",
?[DateTimeZone](class.datetimezone.md) `$timezone` u003d **`null`**)

Процедурний стиль

[date_create_immutable](function.date-create-immutable.md)(string
`$datetime` u003d "now", ?[DateTimeZone](class.datetimezone.md)
`$timezone` u003d **`null`**):
[DateTimeImmutable](class.datetimeimmutable.md)\|false

Повертає новий об'єкт DateTimeImmutable.

### Список параметрів

`datetime`
Рядок дати/часу. Пояснення коректних форматів наведено в розділі
[Формати дати та часу](datetime.formats.md).

Вкажіть ``now'` для отримання поточного часу під час використання
параметра `timezone`.

`timezone`
Об'єкт [DateTimeZone](class.datetimezone.md), що представляє вартовий
пояс параметра 'datetime'.

Якщо параметр `timezone` опущений або дорівнює **`null`**, буде
використовувати поточний часовий пояс.

> **Примітка**:
>
> Параметр `timezone` та поточний часовий пояс ігноруються, якщо параметр
> `datetime` або є тимчасовою міткою UNIX (наприклад,
> `@946684800`), або вказано часовий пояс (наприклад,
> `2010-01-28T15:00:00+02:00`).

### Значення, що повертаються

Повертає новий екземпляр DateTimeImmutable. Процедурний стиль
повертає **`false`** у разі виникнення помилки.

### Помилки

Викидає [Exception](class.exception.md) у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----------------------------|
| 7.1.0 | Відтепер мікросекунди заповнюються фактичним значенням. Чи не '00000'. |

### Приклади

**Приклад #1 Приклад використання
**DateTimeImmutable::\_\_construct()****

Об'єктно-орієнтований стиль

` <?phptry {    $date u003d new DateTimeImmutable('2000-01-01');} catch (Exception $e) {    echo $e->getMessage(); exit(1);}echo$date->format('Y-m-d');?> `

Процедурний стиль

` <?php$date u003d date_create('2000-01-01');if (!$date) {    $e u003d date_get_last_errors(); foreach ($e['errors'] as $error) {       echo "$error
";    }    exit(1);}echo date_format($date, 'Y-m-d');?> `

Результат виконання даних прикладів:

2000-01-01

**Приклад #2 Тонкості **DateTimeImmutable::\_\_construct()****

` <?php// Вказана дата/час в годинному поясі вашого комп'ютера.$date u003d new DateTimeImmutable('2000-01-01');echo $date->format('Y-m-d| "
";// Зазначена дата/час в вказаному годинному поясі.$date u003d new DateTimeImmutable('2000-01-01', neu DateTimeImmutableZone('Pacific/Nauru')'); :sP') . "
";// Поточна дата/час в годинному поясі вашого комп'ютера.$date u003d new DateTimeImmutable();echo $date->format('Y-m-d H:i:sP') .
";// Поточна дата/час в вказаному годинному поясі.$date u003d new DateTimeImmutable(null, new DateTimeZone('Pacific/Nauru'));echo $date->format|'     |
";// Використання тимчасової мітки UNIX. Зверніть увагу, результат в годинному поясі UTC.$date u003d new DateTimeImmutable('@946684800')|
";// Неіснуючі значення перевертаються.$date u003d new DateTimeImmutable('2000-02-30');echo $date->format('Y-m-d H:i:sP') . ."
";?> `

Результатом виконання цього прикладу буде щось подібне:

2000-01-01 00:00:00-05:00
2000-01-01 00:00:00+12:00
2010-04-24 10:24:16-04:00
2010-04-25 02:24:16+12:00
2000-01-01 00:00:00+00:00
2000-03-01 00:00:00-05:00
