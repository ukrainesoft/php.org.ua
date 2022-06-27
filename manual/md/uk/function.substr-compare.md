- [«strtr](function.strtr.md)
- [substr_count »](function.substr-count.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Бінарно-безпечне порівняння 2 рядків зі зміщенням, з урахуванням або без
обліку регістру

# substr_compare

(PHP 5, PHP 7, PHP 8)

substr_compare - Бінарно-безпечне порівняння 2 рядків зі зміщенням, з
обліком або без обліку регістру

### Опис

**substr_compare**(
string `$haystack`,
string `$needle`,
int `$offset`,
?int `$length` u003d **`null`**,
bool `$case_insensitive` u003d **`false`**
): int

**substr_compare()** порівнює рядок `haystack` (починаючи з позиції
`offset`) з рядком `needle`. У порівнянні беруть участь максимум `length`
символів.

### Список параметрів

`haystack`
Основний рядок, що порівнюється.

`needle`
Наступний рядок, що порівнюється.

`offset`
Стартова позиція порівняння. Якщо негативна, то позначає зміщення з
кінця рядка.

`length`
Довжина порівняння. За замовчуванням використовується максимальна довжина `needle`
і `haystack` мінус `offset`.

`case_insensitivity`
Якщо `case_insensitivity` має значення **`true`**, порівняння
виконується без урахування регістру.

### Значення, що повертаються

Повертає негативне число, якщо рядок `haystack` (починаючи з
символу `offset`) менше, ніж `needle`; позитивне число, якщо вона
більше `needle`; 0 якщо рядки рівні. Якщо `offset` більше (до PHP
7.2.18, 7.3.5) або дорівнює довжині `haystack` або `length` переданий і менше
0, **substr_compare()** виводить попередження та повертає **`false`**.

### Список змін

| Версія | Опис |
|---------------|--------------------------------- --------------|
| 8.0.0 | `length` тепер припускає значення null. |
| 7.2.18, 7.3.5 | `offset` тепер може бути рівним `haystack`. |

### Приклади

**Приклад #1 Приклад використання **substr_compare()****

`<?phpecho substr_compare("abcde", "bc", 1, 2); // 0echo substr_compare("abcde", "de", -2, 2); // 0echo substr_compare("abcde", "bcg", 1, 2); // 0echo substr_compare("abcde", "BC", 1, 2, true); // 0echo substr_compare("abcde", "bc", 1, 3); // 1echo substr_compare("abcde", "cd", 1, 2); // -1echo substr_compare("abcde", "abc", 5, 1); // попередження?> `

### Дивіться також

- [strncmp()](function.strncmp.md) - Бінарно-безпечне порівняння
перших n символів рядків
