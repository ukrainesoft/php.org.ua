- [«cal_from_jd](function.cal-from-jd.md)
- [cal_to_jd »](function.cal-to-jd.md)

- [PHP Manual](index.md)
- [Календарь](ref.calendar.md)
- Повертає інформацію про заданий календар

#cal_info

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

cal_info — Повертає інформацію про заданий календар

### Опис

**cal_info**(int `$calendar` u003d -1): array

**cal_info()** повертає інформацію про заданий календар `calendar`.

Інформація про календар повертається у вигляді масиву з елементами
`calname`, `calsymbol`, `month`, `abbrevmonth` та `maxdaysinmonth`
як `calendar` можуть бути використані наступні назви
календарів:

- 0 or **`CAL_GREGORIAN`** - Григоріанський календар
- 1 or **`CAL_JULIAN`** - Юліанський календар
- 2 or **`CAL_JEWISH`** - Єврейський календар
- 3 or **`CAL_FRENCH`** - Календар з дня Французької революції

Якщо параметр calendar не заданий, повертається інформація про всіх
підтримуваних календарів як масиву.

### Список параметрів

`calendar`
Календар, про який буде повернено інформацію. Якщо параметр не
заданий, повертається інформація про всі календарі.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад **cal_info()****

` <?php$info u003d cal_info(0);print_r($info);?> `

Результат виконання цього прикладу:

Array
(
[months] u003d> Array
(
[1] u003d> January
[2] u003d> February
[3] u003d> March
[4] u003d> April
[5] u003d> May
[6] u003d> June
[7] u003d> July
[8] u003d> August
[9] u003d> September
[10] u003d> жовтень
[11] u003d> Листопад
[12] u003d> December
)

[abbrevmonths] u003d> Array
(
[1] u003d> Jan
[2] u003d> Feb
[3] u003d> Mar
[4] u003d> Apr
[5] u003d> May
[6] u003d> Jun
[7] u003d> Jul
[8] u003d> Aug
[9] u003d> Sep
[10] u003d> Oct
[11] u003d> Nov
[12] u003d> Dec
)

[maxdaysinmonth] u003d> 31
[calname] u003d> Gregorian
[calsymbol] u003d> CAL_GREGORIAN
)
