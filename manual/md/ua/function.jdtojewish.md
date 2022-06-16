- [«jdtogregorian](function.jdtogregorian.md)
- [jdtojulian »](function.jdtojulian.md)

- [PHP Manual](index.md)
- [Календарь](ref.calendar.md)
- Переказує кількість днів з юліанського календаря на дату по
єврейському календарю

#jdtojewish

(PHP 4, PHP 5, PHP 7, PHP 8)

jdtojewish — Переказує кількість днів з юліанського календаря на дату по
єврейському календарю

### Опис

**jdtojewish**(int `$julian_day`, bool `$hebrew` u003d **`false`**, int
$flags u003d 0): string

Переказує кількість днів з юліанського календаря в дату єврейського
календарем.

### Список параметрів

`julianday`
Номер дня у юліанському літочисленні у вигляді цілого числа

`hebrew`
Якщо аргумент `hebrew` встановлений у **`true`**, дата буде повернена в
вигляді закодованого рядка ISO-8859-8 у єврейському форматі, заданому
аргументом `flags`.

`flags`
Бітова маска може складатися з: **`CAL_JEWISH_ADD_ALAFIM_GERESH`**,
**`CAL_JEWISH_ADD_ALAFIM`** та **`CAL_JEWISH_ADD_GERESHAYIM`**.

### Значення, що повертаються

Єврейська дата у вигляді рядка формату "місяць/день/рік" або закодована
рядок ISO-8859-8 дати на івриті відповідно до параметра `hebrew`.

### Приклади

**Приклад #1 Приклад використання **jdtojewish()****

` <?php$jd u003d gregoriantojd(10, 8, 2002);echo jdtojewish($jd, true), PHP_EOL,     jdtojewish($jd, true, CAL_JEWISH_ADD_GERESHAYIM), PHP_EOL,     jdtojewish($jd, true, CAL_JEWISH_ADD_ALAFIM), PHP_EOL ,    jdtojewish($jd, true,CAL_JEWISH_ADD_ALAFIM_GERESH), PHP_EOL;?> `

Результат виконання цього прикладу:

ב חשון התשסג
ב' חשון התשס"ג
ב חשון ה אלפים תשסג
ב חשון ה'תשסג

### Дивіться також

- [jewishtojd()](function.jewishtojd.md) - Перекладає дату за
єврейському календарю в число днів у юліанському літочисленні
- [cal_from_jd()](function.cal-from-jd.md) - Перетворює дату,
задану в юліанському календарі, в дату вказаного календаря
