- [«filter_list](function.filter-list.md)
- [filter_var »](function.filter-var.md)

- [PHP Manual](index.md)
- [Функції фільтрації даних](ref.filter.md)
- приймає кілька змінних і, при необхідності, фільтрує їх

#filter_var_array

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

filter_var_array — Приймає кілька змінних і, за необхідності,
фільтрує їх

### Опис

**filter_var_array**(array `$array`, array\|int `$options` u003d
**`FILTER_DEFAULT`**, bool `$add_empty` u003d **`true`**):
array\|false\|null

Ця функція корисна для отримання множини змінних без багаторазового
виклик функції [filter_var()](function.filter-var.md).

### Список параметрів

`array`
Масив із рядковими ключами, що містить дані для фільтрації.

`options`
Масив, що визначає параметри. Допустимий ключ - рядок string,
містить ім'я змінної, а допустиме значення - [тип
фільтра](filter.filters.md), або масив (array), за необхідності
визначальний фільтр, прапори та параметри. Якщо значення є масивом,
допустимими ключами є `filter`, який визначає [тип
фільтра](filter.filters.md), `flags`, який визначає будь-які прапори,
застосовувані до фільтра, і `options`, який визначає будь-які параметри,
застосовувані до фільтру. Дивіться приклад нижче для кращого розуміння.

Цей параметр також може бути цілим числом, що містить
[визначену константу фільтра](filter.constants.md). Потім усі
значення у вхідному масиві фільтруються цим фільтром.

`add_empty`
Додає результат відсутні ключі зі значенням **`null`**.

### Значення, що повертаються

Масив, що містить значення запитаних змінних у разі успішного
виконання, або **`false`** у разі виникнення помилки. Значення
масиву буде **`false`**, якщо фільтрація завершилася невдачею, або
**`null`**, якщо змінна не визначена.

### Приклади

**Приклад #1 Приклад використання **filter_var_array()****

` <?php$data u003d array(    'product_id'    u003d> 'libgd<script>',    'component'     u003d> '10',    'versions'      u003d> '2.0.33',    'testscalar'    u003d> array('2 ', '23', '10', '12'),   'testarray'    u003d> '2',);$args u003d array(    'product_id'             ¦ FILTER_VALIDATE_INT,                            'flags'     u003d> FILTER_FORCE_ARRAY,                            'options'   u003d> array('min_range' u003d> 1, 'max_range' u003d> 10)                           ),    'versions'     u003d> FILTER_SANITIZE_ENCODED,    'doesnotexist' u003d> FILTER_VALIDATE_INT,    'testscalar'   u003d > array(                            'filter' u003d> FILTER_VALIDATE_INT,                            'flags'  u003d> FILTER_REQUIRE_SCALAR,                           ),    'testarray'    u003d> array(                            'filter' u003d> FILTER_VALIDATE_INT,                            'flags'  u003d> FILTER_FORCE_ARRAY,                           ));$myinputs u003d filter_var_array($data , $args);var_dump($myi nputs);echo "
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
["versions"]u003d>
string(6) "2.0.33"
["doesnotexist"]u003d>
NULL
["testscalar"]u003d>
bool(false)
["testarray"]u003d>
array(1) {
[0]u003d>
int(2)
}
}

### Дивіться також

- [filter_input_array()](function.filter-input-array.md) - Отримує
кілька змінних ззовні PHP і, за необхідності, фільтрує їх
- [filter_var()](function.filter-var.md) - Фільтрує змінну з
допомогою певного фільтра
- [filter_input()](function.filter-input.md) - Приймає змінну
ззовні PHP і, при необхідності, фільтрує її
- [Типи фільтрів](filter.filters.md)
