- [«cal_days_in_month](function.cal-days-in-month.md)
- [cal_info »](function.cal-info.md)

- [PHP Manual](index.md)
- [Календарь](ref.calendar.md)
- Перетворює дату, задану в юліанському календарі, на дату вказаного
календаря

#cal_from_jd

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

cal_from_jd — Перетворює дату, задану в юліанському календарі, на дату
зазначеного календаря

### Опис

**cal_from_jd**(int `$julian_day`, int `$calendar`): array

**cal_from_jd()** перетворює дату юліанського календаря, задану в
`julian_day`, в дату вказаного календаря `calendar`. Підтримувані
значення `calendar`: **`CAL_GREGORIAN`**, **`CAL_JULIAN`**,
**`CAL_JEWISH`** та **`CAL_FRENCH`**.

### Список параметрів

`julian_day`
День юліанського календаря як ціле число

`calendar`
Календар, на який потрібно перетворити дату

### Значення, що повертаються

Повертає масив, що містить інформацію про дату, таку як місяць, день,
рік, день тижня (`dow`), скорочена та повна назва дня тижня,
місяця та дату у формі "місяць/день/рік". День тижня варіюється від `0`
(Неділя) to `6` (субота).

### Приклади

**Приклад #1 Приклад використання **cal_from_jd()****

` <?php$today u003d unixtojd(mktime(0, 0, 0, 8, 16, 2003));print_r(cal_from_jd($today, CAL_GREGORIAN));?> `

Результат виконання цього прикладу:

Array
(
[date] u003d> 8/16/2003
[month] u003d> 8
[Day] u003d> 16
[year] u003d> 2003
[dow] u003d> 6
[abbrevdayname] u003d> Sat
[dayname] u003d> Saturday
[abbrevmonth] u003d> Aug
[monthname] u003d> August
)

### Дивіться також

- [cal_to_jd()](function.cal-to-jd.md) - Перетворює задану дату на
юліанську
- [jdtofrench()](function.jdtofrench.md) - Перекладає число днів у
юліанському літочисленні в дату по французькому республіканському
календарем
- [jdtogregorian()](function.jdtogregorian.md) - Перекладає число
днів у юліанському літочисленні в дату за Григоріанським календарем
- [jdtojewish()](function.jdtojewish.md) - Переказує кількість днів
з юліанського календаря у дату за єврейським календарем
- [jdtojulian()](function.jdtojulian.md) - Перекладає число днів на
юліанському літочисленні в дату за юліанським календарем
- [jdtounix()](function.jdtounix.md) - Переклад число днів у
юліанському літочисленні у мітку часу Unix
