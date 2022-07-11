- [«json_encode](function.json-encode.md)
- [json_last_error »](function.json-last-error.md)

- [PHP Manual](index.md)
- [Функції JSON](ref.json.md)
- Повертає рядок із повідомленням про помилку останнього виклику
json_encode() або json_decode()

#json_last_error_msg

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

json_last_error_msg — Повертає рядок із повідомленням про помилку
останнього виклику json_encode() або json_decode()

### Опис

**json_last_error_msg**(): string

Повертає текстовий опис останньої помилки, що сталася при
виконанні [json_encode()](function.json-encode.md) або
[json_decode()](function.json-decode.md) без прапора
**`JSON_THROW_ON_ERROR`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає повідомлення про помилку у разі успішного виконання або
``No error'`, якщо помилки не сталося.

### Дивіться також

- [json_last_error()](function.json-last-error.md) - Повертає
останню помилку
