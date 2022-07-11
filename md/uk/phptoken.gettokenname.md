- [« PhpToken::\_\_construct](phptoken.construct.md)
- [PhpToken::is »](phptoken.is.md)

- [PHP Manual](index.md)
- [PhpToken](class.phptoken.md)
- Повертає ім'я токена

# PhpToken::getTokenName

(PHP 8)

PhpToken::getTokenName — Повертає ім'я токена

### Опис

public **PhpToken::getTokenName**(): ?string

Повертає ім'я токена.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Символ ASCII для односимвольних токенів або ім'я однієї з констант
T\_\* (дивіться [Список тегів (tokens) парсера](tokens.md)), або
**`null`**, для невідомих токенів.

### Приклади

**Приклад #1 Приклад використання **PhpToken::getTokenName()****

`<?php// стандартний токен$token u003d new PhpToken(T_ECHO, echo');var_dump($token->getTokenName()); // -> string(6) "T_ECHO"// відносимвольний токен$token u003d new PhpToken(ord(';'), ';');var_dump($token->getTokenName()); // -> string(1) ";"// невідомий токен$token u003d new PhpToken(10000 , " ");var_dump($token->getTokenName()); // -> NULL `

### Дивіться також

- [PhpToken::tokenize()](phptoken.tokenize.md) - Розбирає задану
рядок, що містить програму на PHP, на масив об'єктів PhpToken
- [token_name()](function.token-name.md) - Отримати символьне ім'я
для переданої PHP-лексеми
