- [«json_decode](function.json-decode.md)
- [json_last_error_msg »](function.json-last-error-msg.md)

- [PHP Manual](index.md)
- [Функції JSON](ref.json.md)
- Повертає JSON-подання даних

#json_encode

(PHP 5 u003d 5.2.0, PHP 7, PHP 8, PECL json u003d 1.2.0)

json_encode — Повертає JSON-подання даних

### Опис

**json_encode**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$flags` u003d 0, int `$depth` u003d 512): string\|false

Повертає рядок, що містить JSON-подання для зазначеного `value`.

На кодування впливає параметр `flags` і, крім того, кодування
значень типу float залежить від значення
[serialize_precision](ini.core.md#ini.serialize-precision).

### Список параметрів

`value`
`value` – значення, яке буде закодовано. Можливо будь-якого типу,
крім [resource](language.types.resource.md).

Функція працює лише з кодуванням UTF-8.

> **Примітка**:
>
> PHP реалізує надмножина JSON, який описаний у початковому
> [» RFC 7159](http://www.faqs.org/rfcs/rfc7159).

`flags`
Бітова маска, що складається із значень **`JSON_FORCE_OBJECT`**,
**`JSON_HEX_QUOT`**, **`JSON_HEX_TAG`**, **`JSON_HEX_AMP`**,
**`JSON_HEX_APOS`**, **`JSON_INVALID_UTF8_IGNORE`**,
**`JSON_INVALID_UTF8_SUBSTITUTE`**, **`JSON_NUMERIC_CHECK`**,
**`JSON_PARTIAL_OUTPUT_ON_ERROR`**, **`JSON_PRESERVE_ZERO_FRACTION`**,
**`JSON_PRETTY_PRINT`**, **`JSON_UNESCAPED_LINE_TERMINATORS`**,
**`JSON_UNESCAPED_SLASHES`**, **`JSON_UNESCAPED_UNICODE`**,
**`JSON_THROW_ON_ERROR`**. Сенс цих констант пояснюється на [сторінці
JSON-констант] (json.constants.md).

`depth`
Встановлює максимальну глибину. Має бути більше нуля.

### Значення, що повертаються

Повертає рядок (string), закодований JSON або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------|
| 7.3.0 | Додано константу **`JSON_THROW_ON_ERROR`** для параметра `flags`. |
| 7.2.0 | Додані константи **`JSON_INVALID_UTF8_IGNORE`** та **`JSON_INVALID_UTF8_SUBSTITUTE`** для параметра `flags`. |
| 7.1.0 | Додано константу **`JSON_UNESCAPED_LINE_TERMINATORS`** для параметра `flags`. |
| 7.1.0 | При кодуванні чисел з плаваючою точкою використовується [serialize_precision](ini.core.md#ini.serialize-precision) замість [precision](ini.core.md#ini.precision). |

### Приклади

**Приклад #1 Приклад використання **json_encode()****

` <?php$arr u003d array('a' u003d> 1, 'b' u003d> 2, 'c' u003d> 3, 'd' u003d> 4, 'e' u003d> 5);echo json_encode($arr );?> `

Результат виконання цього прикладу:

{"a":1,"b":2,"c":3,"d":4,"e":5}

**Приклад #2 Приклад використання **json_encode()** з опціями**

` <?php$a u003d array('<foo>',"'bar'",'"baz"','&blong&', "\xc3\xa9");echo "Зазвичай: ",    json_encode($a) , "
";echo "Теги: ",       json_encode($a, JSON_HEX_TAG), "
";echo "Апострофи: ", json_encode($a, JSON_HEX_APOS), "
";echo "Кички: ",    json_encode($a, JSON_HEX_QUOT), "
";echo "Амперсанди: ", json_encode($a, JSON_HEX_AMP), "
";echo "Юнікод: ",     json_encode($a, JSON_UNESCAPED_UNICODE), "
";echo "Всі: ",        json_encode($a, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UN

";$b u003d array();echo "Відображення пустого масиву як масиву: ", json_encode($b), "
";echo "Відображення неасоціативного масиву як об'єкта: ", json_encode($b, JSON_FORCE_OBJECT), "

";$c u003d array(array(1,2,3));echo "Відображення неасоціативного масиву як масиву: ", json_encode($c), "
";echo "Відображення неасоціативного масиву як об'єкта: ", json_encode($c, JSON_FORCE_OBJECT), "

";$d u003d array('foo' u003d> 'bar', 'baz' u003d> 'long');echo "Асоціативний масив завжди відображається як об'єкт: ", json_encode($d), 
";echo "Асоціативний масив завжди відображається як об'єкт: ", json_encode($d, JSON_FORCE_OBJECT), "

";?> `

Результат виконання цього прикладу:

Зазвичай: ["<foo>","'bar'","baz","&blong&","\u00e9"]
Мітки: ["Cfoo", "'bar'", ""baz"","&blong&","\u00e9"]
Апострофи: ["<foo>","Bar","baz","blong&","u9"
Лапки: ["<foo>","'bar'","baz","blong&","u9]
Амперсанди: ["<foo>","'bar'","baz","long\u0026","\u00e9"]
Юнікод: ["<foo>","'bar'","baz","blong&","é"]
Все: ["Cfoo", "Bar", "baz", "blong", "é"]

Відображення порожнього масиву як масиву: []
Відображення неасоціативного масиву як об'єкта: {}

Відображення неасоціативного масиву як масиву: [[1,2,3]]
Відображення неасоціативного масиву як об'єкта: {"0":{"0":1,"1":2,"2":3}}

Асоціативний масив завжди відображається як об'єкт: {"foo":"bar","baz":"long"}
Асоціативний масив завжди відображається як об'єкт: {"foo":"bar","baz":"long"}

**Приклад #3 Приклад використання опції JSON_NUMERIC_CHECK**

`<?phpecho "Рядки, містять числа перетворюються в числа". , JSON_NUMERIC_CHECK));echo "Рядки, містять некоректно задані числа".

Результатом виконання цього прикладу буде щось подібне:

Рядки, що містять числа перетворюються на числа
array(4) {
[0]u003d>
string(7) "+123123"
[1]u003d>
string(7) "-123123"
[2]u003d>
string(5) "1.2e3"
[3]u003d>
string(7) "0.00001"
}
string(28) "[123123,-123123,1200,1.0e-5]"
Рядки, що містять некоректно задані числа
array(2) {
[0]u003d>
string(13) "+a33123456789"
[1]u003d>
string(4) "a123"
}
string(24) "["+a33123456789","a123"]"

**Приклад #4 Приклад з послідовними індексами, що починаються з нуля,
та непослідовними індексами масивів**

`<?phpecho "Послідовний масив".PHP_EOL;$sequential u003d array("foo", "bar", "baz", "blong");var_dump( $sequential, json_encode($sequential)) масив".PHP_EOL;$nonsequential u003d array(1u003d>"foo", 2u003d>"bar", 3u003d>baz", 4u003d>"blong"); ;echo PHP_EOL."Послідовний масив з одним віддаленим індексом".PHP_EOL;unset($sequential[1]);var_dump( $sequential, json_encode($sequential));?> `

Результат виконання цього прикладу:

Послідовний масив
array(4) {
[0]u003d>
string(3) "foo"
[1]u003d>
string(3) "bar"
[2]u003d>
string(3) "baz"
[3]u003d>
string(5) "blong"
}
string(27) "["foo","bar","baz","blong"]"

Непослідовний масив
array(4) {
[1]u003d>
string(3) "foo"
[2]u003d>
string(3) "bar"
[3]u003d>
string(3) "baz"
[4]u003d>
string(5) "blong"
}
string(43) "{"1":"foo","2":"bar","3":"baz","4":"blong"}"

Послідовний масив з одним віддаленим індексом
array(3) {
[0]u003d>
string(3) "foo"
[2]u003d>
string(3) "baz"
[3]u003d>
string(5) "blong"
}
string(33) "{"0":"foo","2":"baz","3":"blong"}"

**Приклад #5 Приклад використання опції
**`JSON_PRESERVE_ZERO_FRACTION`****

` <?phpvar_dump(json_encode(12.0, JSON_PRESERVE_ZERO_FRACTION));var_dump(json_encode(12.0));?> `

Результат виконання цього прикладу:

string(4) "12.0"
string(2) "12"

### Примітки

> **Примітка**:
>
> у разі помилки кодування можна використовувати
> [json_last_error()](function.json-last-error.md) для визначення
> точні помилки.

> **Примітка**:
>
> При кодуванні масиву у випадку, якщо його індекси не є
> послідовними числами від нуля, всі індекси кодуються в
> рядкові ключі кожної пари індекс-значення.

> **Примітка**:
>
> Як і еталонний кодувальник JSON, **json_encode()** буде створювати
> JSON у вигляді простого значення (тобто не об'єкт і не масив), якщо
> йому передані типи string, int, float або bool як вхідний
> значення `value`. Більшість декодерів сприймають ці значення як
> правильний JSON, але деякі ні, тому що специфікація
> неоднозначна щодо цього.
>
> Завжди перевіряйте, що ваш декодер JSON може правильно обробляти
> дані, які ви створюєте за допомогою **json_encode()**.

### Дивіться також

- [JsonSerializable](class.jsonserializable.md)
- [json_decode()](function.json-decode.md) - Декодує рядок JSON
- [json_last_error()](function.json-last-error.md) - Повертає
останню помилку
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
