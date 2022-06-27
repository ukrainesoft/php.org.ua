- [« DateTimeZone::listIdentifiers](datetimezone.listidentifiers.md)
- [DateInterval::\_\_construct »](dateinterval.construct.md)

- [PHP Manual](index.md)
- [Дата/час](book.datetime.md)
- Клас DateInterval

# Клас DateInterval

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Подає інтервали дат.

Інтервал дат зберігає або певний фіксований час (у роках,
місяцях, днях, годинах тощо) або відносний рядок часу у форматі,
підтримуваний конструктором
[DateTimeImmutable](class.datetimeimmutable.md) та
[DateTime](class.datetime.md).

Більш конкретно, інформація в об'єкті класу **DateInterval** є
інструкцією для переходу від однієї дати/часу до іншої дати/часу.
Цей процес не завжди оборотний.

Поширеним способом створення об'єкта **DateInterval** є
обчислення різниці між двома об'єктами дати/часу за допомогою
[DateTimeInterface::diff()](datetime.diff.md).

Оскільки не існує чітко визначеного способу порівняння інтервалів
дат, екземпляри **DateInterval** є
[незрівнянними](language.operators.comparison.md#language.operators.comparison.incomparable).

## Огляд класів

class **DateInterval** {

/\* Властивості \*/

public int `$y`;

public int `$m`;

public int `$d`;

public int `$h`;

public int `$i`;

public int `$s`;

public float `$f`;

public int `$invert`;

public
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$days`;

public bool `$from_string`;

public string `$date_string`;

/\* Методи \*/

public [\_\_construct](dateinterval.construct.md)(string `$duration`)

public static
[createFromDateString](dateinterval.createfromdatestring.md)(string
`$datetime`): [DateInterval](class.dateinterval.md)\|false

public [format](dateinterval.format.md)(string `$format`): string

}

## Властивості

`y`
Кількість років.

`m`
Кількість місяців.

`d`
Кількість днів.

`h`
Кількість годин.

`i`
Кількість хвилин.

`s`
Кількість секунд.

`f`
Кількість мікросекунд у вигляді часток секунди.

`invert`
Приймає `1`, якщо інтервал представляє негативний період часу та
`0` інакше. Дивіться
[DateInterval::format()](dateinterval.format.md).

`days`
Якщо об'єкт DateInterval створено методом
[DateTimeImmutable::diff()](datetime.diff.md) або
[DateTime::diff()](datetime.diff.md), то це сумарне число днів
між початковою та кінцевою датами. Інакше `days` прийме
значення **`false`**.

`from_string`
Якщо об'єкт DateInterval був створений методом
[DateInterval::createFromDateString()](dateinterval.createfromdatestring.md),
то значення властивості буде **`true`** і властивість `date_string` буде
заповнено. Інакше значення властивості буде **`false`** та
властивості від `y` до `f`, `invert` та `days` будуть заповнені.

`date_string`
Рядок, що використовується як аргумент методу
[DateInterval::createFromDateString()](dateinterval.createfromdatestring.md).

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------|
| 8.2.0 | Додані властивості `from_string` та `date_string` для екземплярів **DateInterval**, які були створені за допомогою методу [DateInterval::createFromDateString()](dateinterval.createfromdatestring.md). |
| 7.4.0 | Примірники **DateInterval** тепер незрівнянні; раніше всі екземпляри **DateInterval** вважалися рівними. |
| 7.1.0 | Додано властивість `f`. |

## Зміст

- [DateInterval::\_\_construct](dateinterval.construct.md) - Створює
новий об'єкт DateInterval
- [DateInterval::createFromDateString](dateinterval.createfromdatestring.md)
— Створює об'єкт класу DateInterval із дати у відносному форматі
- [DateInterval::format](dateinterval.format.md) - Форматує
інтервал
