- [Levenshtein](function.levenshtein.md)
- [ltrim »](function.ltrim.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Повертає інформацію про форматування чисел

#localeconv

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

localeconv — Повертає інформацію про форматування чисел

### Опис

**localeconv**(): array

Повертає асоціативний масив з інформацією про числові та грошові
форматах у поточній локалі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**localeconv()** повертає дані, засновані на поточній локалі,
встановленою функцією [setlocale()](function.setlocale.md).
Повертається масив містить такі елементи:

[TABLE]

`p_sign_posn` та `n_sign_posn` містять рядок з опціями форматування.
Кожне число є однією з перерахованих вище умов.

Елементи угруповання містять масиви, які описують спосіб
угруповання цифр. Наприклад, поле угруповання грошових величин у локалі
nl_NL (у режимі UTF-8 зі знаком євро) містить масив із двох елементів
зі значеннями 3 та 3. Більший індекс масиву відповідає угрупованню
цифр, розташованих ліворуч. Якщо елемент масиву дорівнює **`CHAR_MAX`**,
наступні цифри не групуються. Якщо елемент масиву дорівнює 0,
використовується значення попереднього елемента.

### Приклади

**Приклад #1 Приклад використання **localeconv()****

` <?phpif (false !u003du003d setlocale(LC_ALL, 'ru_RU.UTF-8')) {   $locale_info u003d localeconv(); print_r($locale_info);}?> `

Результат виконання цього прикладу:

Array
(
[decimal_point] u003d> ,
[thousands_sep] u003d>
[int_curr_symbol] u003d> RUB
[currency_symbol] u003d> руб
[mon_decimal_point] u003d>.
[mon_thousands_sep] u003d>
[positive_sign] u003d>
[negative_sign] u003d> -
[int_frac_digits] u003d> 2
[frac_digits] u003d> 2
[p_cs_precedes] u003d> 0
[p_sep_by_space] u003d> 1
[n_cs_precedes] u003d> 0
[n_sep_by_space] u003d> 1
[p_sign_posn] u003d> 1
[n_sign_posn] u003d> 1
[grouping] u003d> Array
(
[0] u003d> 3
[1] u003d> 3
)

[mon_grouping] u003d> Array
(
[0] u003d> 3
[1] u003d> 3
)

)

### Дивіться також

- [setlocale()](function.setlocale.md) - Встановлює налаштування
локалі
