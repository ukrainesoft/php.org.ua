- [«token_get_all](function.token-get-all.md)
- [URL »](book.url.md)

- [PHP Manual](index.md)
- [Функції PHP-лексера (tokenizer)] (ref.tokenizer.md)
- Отримати символьне ім'я для переданої PHP-лексеми

# token_name

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

token_name — Отримати символьне ім'я для переданої PHP-лексеми

### Опис

**token_name**(int `$id`): string

Функція **token_name()** отримує символьне ім'я для значення
PHP-лексеми `id`.

### Список параметрів

`id`
Значення лексеми.

### Значення, що повертаються

Символьне значення для переданої лексеми `id`.

### Приклади

**Приклад #1 Приклад використання **token_name()****

`<?php// 260 - значення для лексеми T_EVALecho token_name(260); // -> "T_EVAL"// Константа лексеми порівняна з|із| // -> "T_FUNCTION"?> `

### Дивіться також

- [Список лексем](tokens.md)
- [PhpToken::getTokenName()](phptoken.gettokenname.md) - Повертає
ім'я токена
