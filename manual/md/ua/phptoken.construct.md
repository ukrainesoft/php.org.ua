- [«PhpToken](class.phptoken.md)
- [PhpToken::getTokenName »](phptoken.gettokenname.md)

- [PHP Manual](index.md)
- [PhpToken](class.phptoken.md)
- Створює об'єкт PhpToken

# PhpToken::\_\_construct

(PHP 8)

PhpToken::\_\_construct — Створює об'єкт PhpToken

### Опис

final public **PhpToken::\_\_construct**(
int `$id`,
string `$text`,
int `$line` u003d -1,
int `$pos` u003d -1
)

Повертає новий об'єкт PhpToken.

### Список параметрів

`id`
Одна з констант T\_\* (дивіться [Список тегів (tokens)
парсера](tokens.md)), або символ ASCII, що представляє односимвольний
токен.

`text`
Текстове вміст токена.

`line`
Номер рядка (починаючи з 1), з якого починається токен.

`pos`
Початкова позиція (починаючи з 0) токена у рядку.

### Дивіться також

- [PhpToken::tokenize()](phptoken.tokenize.md) - Розбирає задану
рядок, що містить програму на PHP, на масив об'єктів PhpToken
