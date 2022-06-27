- [«
DateInterval::createFromDateString](dateinterval.createfromdatestring.md)
- [DatePeriod »](class.dateperiod.md)

- [PHP Manual](index.md)
- [DateInterval](class.dateinterval.md)
- Форматує інтервал

# DateInterval::format

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DateInterval::format — Форматує інтервал

### Опис

public **DateInterval::format**(string `$format`): string

Форматує інтервал.

### Список параметрів

`format`
**У рядку `format` розпізнаються такі символи. Кожному такому
символу повинен передувати знак відсотка (`%`).**

Символ у рядку `format`

### Значення, що повертаються

Повертає відформатований інтервал.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 7.1.0 | Додані форматуючі символи `F` та `f`. |

### Приклади

**Приклад #1 Приклад використання
[DateInterval](class.dateinterval.md)**

` <?php$interval u003d new DateInterval('P2Y4DT6H8M');echo $interval->format('%d days');?> `

Результат виконання цього прикладу:

4 дні

**Приклад #2 [DateInterval](class.dateinterval.md) та перенесення одиниць**

` <?php$interval u003d new DateInterval('P32D');echo $interval->format('%d days');?> `

Результат виконання цього прикладу:

32 дні

**Приклад #3 [DateInterval](class.dateinterval.md) та
[DateTime::diff()](datetime.diff.md) з модифікаторами %a та %d**

` <?php$january u003d new DateTime('2010-01-01');$february u003d new DateTime('2010-02-01');$interval u003d $february->diff($january);// % a виведе загальну кількість днів.echo $interval->format('%a total days')."
";// У то час як %d виведе тільки число днів, не покритих місяцемecho $interval->format('%m month, %d days');?> `

Результат виконання цього прикладу:

31 total days
1 місяць, 0 днів

### Примітки

> **Примітка**:
>
> Метод **DateInterval::format()** не робить перерахунку та перенесення одиниць
> час при переповненні значень дат. Це очікувана поведінка,
> оскільки неможливо реалізувати перенесення при значеннях, наприклад,
> ``32 дні'`, які можуть інтерпретуватися по-різному, починаючи
> `"1 місяць і 4 дні"` та закінчуючи `"1 місяць та 1 день"`.

### Дивіться також

- [DateTime::diff()](datetime.diff.md) - Повертає різницю між
двома об'єктами DateTime
