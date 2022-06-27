- [«json_last_error_msg](function.json-last-error-msg.md)
- [Lua »](book.lua.md)

- [PHP Manual](index.md)
- [Функції JSON](ref.json.md)
- Повертає останню помилку

#json_last_error

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

json_last_error — Повертає останню помилку

### Опис

**json_last_error**(): int

Повертає останню помилку (якщо вона є), що сталася під час
останнього кодування/декодування JSON якщо під час виклику не
використовувався прапор **`JSON_THROW_ON_ERROR`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ціле значення, яке може бути однією з наступних
констант:

| Константа Значення | Доступність |
|----------------------------------------|-------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- |-------------|
| **`JSON_ERROR_NONE`** | Помилок нема | |
| **`JSON_ERROR_DEPTH`** | Досягнуто максимальної глибини стека | |
| **`JSON_ERROR_STATE_MISMATCH`** | Невірний чи некоректний JSON | |
| **`JSON_ERROR_CTRL_CHAR`** | Помилка керуючого символу, можливе неправильне кодування |
| **`JSON_ERROR_SYNTAX`** | Синтаксична помилка |
| **`JSON_ERROR_UTF8`** | Некоректні символи UTF-8, можливе неправильне кодування |
| **`JSON_ERROR_RECURSION`** | Одна або кілька зациклених посилань у значенні, що кодується | |
| **`JSON_ERROR_INF_OR_NAN`** | Один або кілька значень [**`NAN`**](language.types.float.md#language.types.float.nan) або [**`INF`**](function.is-infinite.md) в кодованому значенні | |
| **`JSON_ERROR_UNSUPPORTED_TYPE`** | Передано значення з типом, що не підтримується | |
| **`JSON_ERROR_INVALID_PROPERTY_NAME`** | Ім'я якості може бути закодовано | |
| **`JSON_ERROR_UTF16`** | Некоректний символ UTF-16, можливо, некоректно закодований | |

**Коди помилок JSON**

### Приклади

**Приклад #1 Приклад використання **json_last_error()****

`<?php//Вірна json-рядок$json[] u003d '{"Organization": "PHP Documentation Team"}';// Невірна json-рядок, викличе синтаксичну помибку,   замість "$json[] u003d "{'Organization': 'PHP Documentation Team'}";foreach ($json as $string) {   echo 'Декодуємо: ' . $string;      | ) {        case JSON_ERROR_NONE:            echo ' - Ошибок нет';        break;        case JSON_ERROR_DEPTH:            echo ' - Достигнута максимальная глубина стека';        break;        case JSON_ERROR_STATE_MISMATCH:            echo ' - Некорректные разряды или несоответствие режимов';        break;        case JSON_ERROR_CTRL_CHAR:            echo ' - Некорректный управляющий символ';        break;        case JSON_ERROR_SYNTAX:            echo ' - Синтаксическая ошибка, некорректный JSON';        break;        case JSON_ERROR_UTF8:            echo ' - Некорректные символы UTF-8, возможно неверно закодирован';       break; default:            echo ' - Невідома помилка'; break; }   echo PHP_EOL;}?> `

Результат виконання цього прикладу:

Декодуємо: {"Organization": "PHP Documentation Team"} - Помилок немає
Декодуємо: {'Organization': 'PHP Documentation Team'} - Синтаксична помилка, некоректний JSON

**Приклад #2 Спільне використання **json_last_error()** та
[json_encode()](function.json-encode.md)**

` <?php// Некоректна послідовність UTF8$text u003d "\xB1\x31";$json  u003d json_encode($text);$error u003d json_last_error();var_dump($json, $error u003du003d; `

Результат виконання цього прикладу:

string(4) "null"
bool(true)

**Приклад #3 **json_last_error()** та **`JSON_THROW_ON_ERROR`****

` <?php// Некорректная последовательность UTF8, вызывающая JSON_ERROR_UTF8json_encode("\xB1\x31");// Не вызовет ошибки JSONjson_encode('okay', JSON_THROW_ON_ERROR);// Глобальное состояние не будет изменено json_encode()var_dump(json_last_error() u003du003du003d JSON_ERROR_UTF8);?> `

Результат виконання цього прикладу:

bool(true)

### Дивіться також

- [json_last_error_msg()](function.json-last-error-msg.md) -
Повертає рядок із повідомленням про помилку останнього виклику
json_encode() або json_decode()
- [json_decode()](function.json-decode.md) - Декодує рядок JSON
- [json_encode()](function.json-encode.md) - Повертає
JSON-подання даних
