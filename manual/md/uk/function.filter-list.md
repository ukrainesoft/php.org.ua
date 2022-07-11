- [«filter_input](function.filter-input.md)
- [filter_var_array »](function.filter-var-array.md)

- [PHP Manual](index.md)
- [Функції фільтрації даних](ref.filter.md)
- Повертає список усіх підтримуваних фільтрів

#filter_list

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

filter_list — Повертає список усіх підтримуваних фільтрів

### Опис

**filter_list**(): array

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив імен усіх підтримуваних фільтрів, порожній масив, якщо
таких фільтрів немає. Ідентифікатори (ID) фільтрів не є
ключами цього масиву вони можуть бути отримані за допомогою функції
[filter_id()](function.filter-id.md) на ім'я фільтра.

### Приклади

**Приклад #1 Приклад використання **filter_list()****

` <?phpprint_r(filter_list());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> int
[1] u003d> boolean
[2] u003d> float
[3] u003d> validate_regexp
[4] u003d> validate_url
[5] u003d> validate_email
[6] u003d> validate_ip
[7] u003d> string
[8] u003d> stripped
[9] u003d> encoded
[10] u003d> special_chars
[11] u003d> unsafe_raw
[12] u003d> email
[13] u003d> url
[14] u003d> number_int
[15] u003d> number_float
[16] u003d> magic_quotes
[17] u003d> callback
)
