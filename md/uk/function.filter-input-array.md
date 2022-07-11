- [«filter_id](function.filter-id.md)
- [filter_input »](function.filter-input.md)

- [PHP Manual](index.md)
- [Функції фільтрації даних](ref.filter.md)
- Отримує кілька змінних ззовні PHP і, за необхідності,
фільтрує їх

#filter_input_array

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

filter_input_array - Отримує кілька змінних ззовні PHP і, при
необхідності, фільтрує їх

### Опис

**filter_input_array**(int `$type`, array\|int `$options` u003d
**`FILTER_DEFAULT`**, bool `$add_empty` u003d **`true`**):
array\|false\|null

Ця функція корисна для отримання множини змінних без багаторазового
виклик функції [filter_input()](function.filter-input.md).

### Список параметрів

`type`
Одна з констант **`INPUT_GET`**, **`INPUT_POST`**, **`INPUT_COOKIE`**,
**`INPUT_SERVER`** або **`INPUT_ENV`**.

`options`
Масив, який визначає аргументи. Допустимий ключ - рядок (string),
містить ім'я змінної, а допустиме значення - або тип
[фільтра](filter.filters.md), або масив (array), за необхідності
визначальний фільтр, прапори та параметри. Якщо значення є масивом,
допустимими ключами є `filter`, який визначає ([тип
фільтра](filter.filters.md) ), `flags`, який визначає будь-які
прапори, що застосовуються до фільтру та `options`, який визначає будь-які
параметри, які застосовуються до фільтру. Дивіться приклад нижче для кращого
розуміння.

Цей параметр також може бути цілим числом, що містить
[передбачену фільтрову константу](filter.constants.md). Потім
Усі значення у вхідному масиві фільтруються цим фільтром.

`add_empty`
Додає результат відсутні ключі зі значенням **`null`**.

### Значення, що повертаються

Масив, що містить значення запитаних змінних у разі успішного
виконання. Якщо вхідний масив, який визначається параметром `type`, не
заповнений, то функція поверне **`null`**, якщо прапор
**`FILTER_NULL_ON_FAILURE`** не заданий, **`false`** в іншому випадку.
Для інших невдалих виконань повертається **`false`**

Значення масиву буде **`false`**, якщо фільтрація завершилася
невдачею, чи **`null`**, якщо змінна не визначена. Або, якщо
встановлено прапор **`FILTER_NULL_ON_FAILURE`**, повертається **`false`**,
якщо змінна не визначена і **`null`**, якщо фільтрація завершилася
невдачею. Якщо параметр `add_empty` дорівнює **`false`**, елемент масиву
не буде додано для віддалених змінних.

### Приклади

**Приклад #1 Приклад використання **filter_input_array()****

` <?php/* дані, отримані методом POST$_POST u003d array(   'product_id' u003d> 'libgd<script>',   'component'  u003d> array('10'),               ,  'testarray' u003d> array('2', '23', '10', '12'),    'testscalar' u003d> '2',);*/$args u003d array( | 'component'    u003d> array('filter'    u003d> FILTER_VALIDATE_INT,                            'flags'     u003d> FILTER_REQUIRE_ARRAY,                            'options'   u003d> array('min_range' u003d> 1, 'max_range' u003d> 10)                           ),    'version'      u003d> FILTER_SANITIZE_ENCODED ,    'doesnotexist' u003d> FILTER_VALIDATE_INT,    'testscalar'   u003d> array(                            'filter' u003d> FILTER_VALIDATE_INT,                            'flags'  u003d> FILTER_REQUIRE_SCALAR,                           ),    'testarray'    u003d> array(                            'filter' u003d> FILTER_VALIDATE_INT,                            'flags'  u003d> FILTER_REQUIRE_ARRAY,                             ));$myinputs u003d filter_inpu t_array(INPUT_POST, $args);var_dump($myinputs);echo "
";?> `

Результат виконання цього прикладу:

array(6) {
["product_id"]u003d>
string(17) "libgd%3Cscript%3E"
["component"]u003d>
array(1) {
[0]u003d>
int(10)
}
["version"]u003d>
string(6) "2.0.33"
["doesnotexist"]u003d>
NULL
["testscalar"]u003d>
int(2)
["testarray"]u003d>
array(4) {
[0]u003d>
int(2)
[1]u003d>
int(23)
[2]u003d>
int(10)
[3]u003d>
int(12)
}
}

### Примітки

> **Примітка**:
>
> У масиві **`INPUT_SERVER`** немає ключа `REQUEST_TIME`, тому що він
> пізніше в $_SERVER.

### Дивіться також

- [filter_input()](function.filter-input.md) - Приймає змінну
ззовні PHP і, при необхідності, фільтрує її
- [filter_var_array()](function.filter-var-array.md) - Приймає
кілька змінних і, при необхідності, фільтрує їх
- [Типи фільтрів](filter.filters.md)
