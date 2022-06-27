- [« Приклади](tokenizer.examples.md)
- [PhpToken::\_\_construct »](phptoken.construct.md)

- [PHP Manual](index.md)
- [Лексер (Tokenizer)] (book.tokenizer.md)
- Клас PhpToken

# Клас PhpToken

(PHP 8)

## Вступ

Цей клас надає альтернативу функції
[token_get_all()](function.token-get-all.md). Тоді як функція
повертає токени або у вигляді односимвольного рядка, або у вигляді масиву
з ідентифікатором токена, його текстом та номером рядка,
[PhpToken::tokenize()](phptoken.tokenize.md) нормалізує всі токени в
об'єкти PhpToken, що дозволяє набагато зручніше працювати з
токенами.

## Огляд класів

class **PhpToken** implements [Stringable](class.stringable.md) {

/\* Властивості \*/

public int `$id`;

public string `$text`;

public int `$line`;

public int `$pos`;

/\* Методи \*/

final public [\_\_construct](phptoken.construct.md)(
int `$id`,
string `$text`,
int `$line` u003d -1,
int `$pos` u003d -1
)

public [getTokenName](phptoken.gettokenname.md)(): ?string

public [is](phptoken.is.md)(int\|string\|array `$kind`): bool

public [isIgnorable](phptoken.isignorable.md)(): bool

public [\_\_toString](phptoken.tostring.md)(): string

public static [tokenize](phptoken.tokenize.md)(string `$code`, int
`$flags` u003d 0): array

}

## Властивості

`id`
Одна з констант T\_\*, або символ ASCII, що є односимвольним
токен.

`text`
Текстове вміст токена.

`line`
Номер рядка (починаючи з 1), з якого починається токен.

`pos`
Початкова позиція (починаючи з 0) токена у рядку.

## Зміст

- [PhpToken::\_\_construct](phptoken.construct.md) — Створює об'єкт
PhpToken
- [PhpToken::getTokenName](phptoken.gettokenname.md) — Повертає
ім'я токена
- [PhpToken::is](phptoken.is.md) — Перевіряє, чи відповідає токен
зазначеного типу
- [PhpToken::isIgnorable](phptoken.isignorable.md) — Повідомляє, буде
чи токен ігноруватися парсером PHP
- [PhpToken::\_\_toString](phptoken.tostring.md) - Повертає
текстовий вміст токена
- [PhpToken::tokenize](phptoken.tokenize.md) - Розбирає задану
рядок, що містить програму на PHP, на масив об'єктів PhpToken
