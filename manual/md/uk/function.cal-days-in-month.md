- [«Календарь](ref.calendar.md)
- [cal_from_jd »](function.cal-from-jd.md)

- [PHP Manual](index.md)
- [Календарь](ref.calendar.md)
- Повертає кількість днів на місяць для заданого року та календаря

#cal_days_in_month

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

cal_days_in_month — Повертає кількість днів на місяць для заданого
року та календаря

### Опис

**cal_days_in_month**(int `$calendar`, int `$month`, int `$year`): int

Ця функція повертає кількість днів на місяць `month` року `year` для
заданого календаря `calendar`.

### Список параметрів

`calendar`
Календар для обчислення

`month`
Місяць у вибраному календарі

`year`
Рік у вибраному календарі

### Значення, що повертаються

Кількість днів у конкретному місяці вибраного календаря

### Приклади

**Приклад #1 Приклад використання **cal_days_in_month()****

`<?php$number u003d cal_days_in_month(CAL_GREGORIAN, 8, 2003); // 31echo "Усього {$number} днів в Серпні 2003 року";?> `
