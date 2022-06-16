- [« Функції JSON](ref.json.md)
- [json_encode »](function.json-encode.md)

- [PHP Manual](index.md)
- [Функції JSON](ref.json.md)
- Декодує рядок JSON

#json_decode

(PHP 5 u003d 5.2.0, PHP 7, PHP 8, PECL json u003d 1.2.0)

json_decode — Декодує рядок JSON

### Опис

**json_decode**(
string `$json`,
?bool `$associative` u003d **`null`**,
int `$depth` u003d 512,
int `$flags` u003d 0
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Приймає закодований у JSON рядок і перетворює його на змінний
PHP.

### Список параметрів

`json`
Рядок (string) `json` для декодування.

Ця функція працює тільки з рядками кодування UTF-8.

> **Примітка**:
>
> PHP реалізує надмножина JSON, який описаний у початковому
> [» RFC 7159](http://www.faqs.org/rfcs/rfc7159).

`associative`
Якщо **`true`**, об'єкти JSON будуть повернені як асоціативні масиви
(Array); якщо **`false`**, об'єкти JSON будуть повернуті як об'єкти
(object). Якщо **`null`**, об'єкти JSON будуть повернуті як
асоціативні масиви (array) чи об'єкти (object) залежно від
того, чи встановлена **`JSON_OBJECT_AS_ARRAY`** в `flags`.

`depth`
Максимальна глибина вкладеності структури, на яку буде
проводитися декодування.

`flags`
Бітова маска із констант **`JSON_BIGINT_AS_STRING`**,
**`JSON_INVALID_UTF8_IGNORE`**, **`JSON_INVALID_UTF8_SUBSTITUTE`**,
**`JSON_OBJECT_AS_ARRAY`**, **`JSON_THROW_ON_ERROR`**. Поведінка цих
констант описано на сторінці [JSON-констант](json.constants.md).

### Значення, що повертаються

Повертає дані `json`, перетворені на відповідні типи PHP.
Значення `true`, `false` та `null` повертаються як **`true`**,
**`false`** та **`null`** відповідно. **`null`** також повертається,
якщо `json` не може бути перетворений або закодовані дані
містять вкладених рівнів більше, ніж зазначена межа вкладеності.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------|
| 7.3.0 | Додано константу **`JSON_THROW_ON_ERROR`** для параметра `flags`. |
| 7.2.0 | `associative` тепер nullable. |
| 7.2.0 | Додані константи **`JSON_INVALID_UTF8_IGNORE`** та **`JSON_INVALID_UTF8_SUBSTITUTE`** для параметра `flags`. |
| 7.1.0 | Порожній ключ JSON ("") буде перетворено на порожню властивість об'єкта, а не на властивість зі значенням `_empty_`. |

### Приклади

**Приклад #1 Приклади використання **json_decode()****

` <?php$json u003d '{"a":1,"b":2,"c":3,"d":4,"e":5}';var_dump(json_decode($json)); var_dump(json_decode($json, true));?> `

Результат виконання цього прикладу:

object(stdClass)#1 (5) {
["a"] u003d> int(1)
["b"] u003d> int(2)
["c"] u003d> int(3)
["d"] u003d> int(4)
["e"] u003d> int(5)
}

array(5) {
["a"] u003d> int(1)
["b"] u003d> int(2)
["c"] u003d> int(3)
["d"] u003d> int(4)
["e"] u003d> int(5)
}

**Приклад #2 Доступ до властивостей об'єктів із неправильними іменами**

Доступ до елементів об'єкта, які містять символи, неприпустимі
відповідно до угоди про імена PHP (тобто дефіс), може бути
виконаний шляхом обрамлення імені елемента фігурними дужками та
апострофами.

` <?php$json u003d '{"foo-bar": 12345}';$obj u003d json_decode($json);print $obj->{'foo-bar'}; // 12345?> `

**Приклад #3 Поширена помилка під час використання
**json_decode()****

`<?php// Наступні рядки являються валідним кодом JavaScript, но не валідними JSON-даними// Ім'я і значення мають поміщатися в     | json_decode($bad_json); // null// Ім'я має обрамлятися в подвійні лапки$bad_json u003d '{ bar: "baz" }';json_decode($bad_json); // null// Не повинно бути завершальною комою(без наступного елемента)$bad_json u003d '{ bar: "baz", }';json_decode($bad_json); // null?> `

**Приклад #4 Помилки з глибиною вкладених об'єктів (`depth`)**

` <?php// Закодируем данные с глубиной вложенности 4 (array -> array -> array -> string).$json u003d json_encode(    array(        1 u003d> array(            'English' u003d> array(                'One',                'January '            ),            'French' u003d> array(                'Une',                'Janvier'            )        )    ));// Напечатаем ошибки для разных глубин.var_dump(json_decode($json, true, 4));echo 'Последняя ошибка: ', json_last_error_msg(), PHP_EOL, PHP_EOL;var_dump(json_decode($json, true, 3));echo 'Остання помилка: ', json_last_error_msg(), PHP_E>

Результат виконання цього прикладу:

array(1) {
[1]u003d>
array(2) {
["English"]u003d>
array(2) {
[0]u003d>
string(3) "One"
[1]u003d>
string(7) "January"
}
["French"]u003d>
array(2) {
[0]u003d>
string(3) "Une"
[1]u003d>
string(7) "Janvier"
}
}
}
Остання помилка: No error

NULL
Остання помилка: Maximum stack depth exceeded

**Приклад #5 **json_decode()** з великими цілими числами**

` <?php$json u003d '{"number": 12345678901234567890}';var_dump(json_decode($json));var_dump(json_decode($json, false, 512, JSON_B>

Результат виконання цього прикладу:

object(stdClass)#1 (1) {
["number"]u003d>
float(1.2345678901235E+19)
}
object(stdClass)#1 (1) {
["number"]u003d>
string(20) "12345678901234567890"
}

### Примітки

> **Примітка**:
>
> Специфікація JSON - це не JavaScript, а його підмножина.

> **Примітка**:
>
> У разі помилки декодування можна використовувати
> [json_last_error()](function.json-last-error.md) для визначення її
> причини.

### Дивіться також

- [json_encode()](function.json-encode.md) - Повертає
JSON-подання даних
- [json_last_error()](function.json-last-error.md) - Повертає
останню помилку
