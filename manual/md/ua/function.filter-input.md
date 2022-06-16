- [«filter_input_array](function.filter-input-array.md)
- [filter_list »](function.filter-list.md)

- [PHP Manual](index.md)
- [Функції фільтрації даних](ref.filter.md)
- приймає змінну ззовні PHP і, при необхідності, фільтрує її

#filter_input

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

filter_input — Приймає змінну ззовні PHP і, за необхідності,
фільтрує її

### Опис

**filter_input**(
int `$type`,
string `$var_name`,
int `$filter` u003d **`FILTER_DEFAULT`**,
array\|int `$options` u003d 0
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

### Список параметрів

`type`
Одна з констант **`INPUT_GET`**, **`INPUT_POST`**, **`INPUT_COOKIE`**,
**`INPUT_SERVER`** або **`INPUT_ENV`**.

`var_name`
Ім'я змінної, що отримується.

`filter`
Ідентифікатор (ID) фільтра. На сторінці [Типи
фільтрів](filter.filters.md) наведено список доступних фільтрів.

Якщо не вказано, то використовується **`FILTER_DEFAULT`**, який
рівнозначний [**`FILTER_UNSAFE_RAW`**](filter.filters.sanitize.md). Це
означає, що за умовчанням не застосовується фільтр.

`options`
Асоціативний масив параметрів або логічне АБО прапорів. Якщо фільтр
приймає параметри, прапори можуть бути вказані в елементі масиву
"flags".

### Значення, що повертаються

Значення запитуваної змінної у разі успішного виконання,
**`false`**, якщо фільтрація завершилася невдачею, або **`null`**, якщо
змінна `var_name` не визначена. Якщо встановлено прапор
**`FILTER_NULL_ON_FAILURE`**, функція повертає **`false`**, якщо
змінна не визначена і **`null`**, якщо фільтрація завершилася
невдачею.

### Приклади

**Приклад #1 Приклад використання **filter_input()****

` <?php$search_html u003d filter_input(INPUT_GET, 'search', FILTER_SANITIZE_SPECIAL_CHARS);$search_url u003d filter_input(INPUT_GET, 'search', FILTER_SANITIZE_ENCODED)|
";echo "<a hrefu003d'?searchu003d$search_url'>Шукати знову.</a>";?> `

Результатом виконання цього прикладу буде щось подібне:

Ви шукали Me & Son.
<a hrefu003d'?searchu003dMe%20%26%20son'>Шукати знову.</a>

### Дивіться також

- [filter_var()](function.filter-var.md) - Фільтрує змінну з
допомогою певного фільтра
- [filter_input_array()](function.filter-input-array.md) - Отримує
кілька змінних ззовні PHP і, за необхідності, фільтрує їх
- [filter_var_array()](function.filter-var-array.md) - Приймає
кілька змінних і, при необхідності, фільтрує їх
- [Типи фільтрів](filter.filters.md)
