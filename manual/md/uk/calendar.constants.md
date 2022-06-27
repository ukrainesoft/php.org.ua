- [« Типи ресурсів](calendar.resources.md)
- [Календарь]](ref.calendar.md)

- [PHP Manual](index.md)
- [Календарь](book.calendar.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`CAL_EASTER_DEFAULT`** (int)
Для [easter_days()](function.easter-days.md): обчислювати Великдень для років
до 1753 року за юліанським календарем, а в наступні роки за
григоріанським календарем.

**`CAL_EASTER_ROMAN`** (int)
Для [easter_days()](function.easter-days.md): обчислювати Великдень для років
до 1583 року за юліанським календарем, а в наступні роки за
григоріанським календарем.

**`CAL_EASTER_ALWAYS_GREGORIAN`** (int)
Для [easter_days()](function.easter-days.md): обчислювати Великдень у
відповідно до пролептичного григоріанського календаря.

**`CAL_EASTER_ALWAYS_JULIAN`** (int)
Для [easter_days()](function.easter-days.md): обчислювати Великдень у
відповідно до юліанського календаря.

**`CAL_GREGORIAN`** (int)
Для [cal_days_in_month()](function.cal-days-in-month.md),
[cal_from_jd()](function.cal-from-jd.md),
[cal_info()](function.cal-info.md) та
[cal_to_jd()](function.cal-to-jd.md): використовувати пролептичний
григоріанський календар.

**`CAL_JULIAN`** (int)
Для [cal_days_in_month()](function.cal-days-in-month.md),
[cal_from_jd()](function.cal-from-jd.md),
[cal_info()](function.cal-info.md) та
[cal_to_jd()](function.cal-to-jd.md): використовувати юліанську
календаря.

**`CAL_JEWISH`** (int)
Для [cal_days_in_month()](function.cal-days-in-month.md),
[cal_from_jd()](function.cal-from-jd.md),
[cal_info()](function.cal-info.md) та
[cal_to_jd()](function.cal-to-jd.md): використовувати єврейську
календаря.

**`CAL_FRENCH`** (int)
Для [cal_days_in_month()](function.cal-days-in-month.md),
[cal_from_jd()](function.cal-from-jd.md),
[cal_info()](function.cal-info.md) та
[cal_to_jd()](function.cal-to-jd.md): використовувати французьку
республіканський календар.

**`CAL_NUM_CALS`** (int)
Кількість календарів доступних.

**`CAL_JEWISH_ADD_ALAFIM_GERESH`** (int)
Для [jdtojewish()](function.jdtojewish.md): додає знак горіш
(geresh), що нагадує одинарну лапку як роздільник тисяч
для кількох років.

**`CAL_JEWISH_ADD_ALAFIM`** (int)
Для [jdtojewish()](function.jdtojewish.md): додає слово alafim до
як роздільник тисяч для кількості років.

**`CAL_JEWISH_ADD_GERESHAYIM`** (int)
For [jdtojewish()](function.jdtojewish.md): додати символ гершаїм
(gershayim), що нагадує подвійну лапку перед останньою літерою дня та
числом років

**`CAL_DOW_DAYNO`** (int)
Для [jddayofweek()](function.jddayofweek.md): день тижня у вигляді
цілого числа (int), де `0` означає неділю, а `6` означає
суботу.

**`CAL_DOW_SHORT`** (int)
Для [jddayofweek()](function.jddayofweek.md): скорочене англійське
назва дня тижня.

**`CAL_DOW_LONG`** (int)
Для [jddayofweek()](function.jddayofweek.md): англійська назва дня
тижня.

**`CAL_MONTH_GREGORIAN_SHORT`** (int)
Для [jdmonthname()](function.jdmonthname.md): скорочено
григоріанську назву місяця.

**`CAL_MONTH_GREGORIAN_LONG`** (int)
Для [jdmonthname()](function.jdmonthname.md): григоріанська назва
місяця.

**`CAL_MONTH_JULIAN_SHORT`** (int)
Для [jdmonthname()](function.jdmonthname.md): скорочене юліанське
назва місяця.

**`CAL_MONTH_JULIAN_LONG`** (int)
Для [jdmonthname()](function.jdmonthname.md): юліанська назва
місяця.

**`CAL_MONTH_JEWISH`** (int)
Для [jdmonthname()](function.jdmonthname.md): єврейська назва
місяця.

**`CAL_MONTH_FRENCH`** (int)
Для [jdmonthname()](function.jdmonthname.md): французька
республіканська назва місяця.
