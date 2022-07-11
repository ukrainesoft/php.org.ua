- [« Parle\Lexer::reset](parle-lexer.reset.md)
- [Parle\RLexer::advance »](parle-rlexer.advance.md)

- [PHP Manual](index.md)
- [Parle](book.parle.md)
- Клас Parle\RLexer

# Клас Parle\RLexer

(PECL parle \>u003d 0.5.1)

## Вступ

Клас лексера з кількома станами. Лексеми можна визначати на
літа. Якщо конкретний екземпляр лексера призначений для використання з
[Parle\RParser](class.parle-rparser.md), ідентифікатори токенів повинні
бути взяті звідти. В іншому випадку можуть бути надані
довільні ідентифікатори токенів. Зверніть увагу, що
[Parle\Parser](class.parle-parser.md) несумісний із цим лексером.

## Огляд класів

class **Parle\RLexer** {

/\* Константи \*/

const int `ICASE` u003d 1;

const int `DOT_NOT_LF` u003d 2;

const int `DOT_NOT_CRLF` u003d 4;

const int `SKIP_WS` u003d 8;

const int `MATCH_ZERO_LEN` u003d 16;

/\* Властивості \*/

public bool `$bol` u003d **`false`**;

public int `$flags` u003d 0;

public int `$state` u003d 0;

public int `$marker` u003d 0;

public int `$cursor` u003d 0;

/\* Методи \*/

public [advance](parle-rlexer.advance.md)(): void

public [build](parle-rlexer.build.md)(): void

public [callout](parle-rlexer.callout.md)(int `$id`,
[callable](language.types.callable.md) `$callback`): void

public [consume](parle-rlexer.consume.md)(string `$data`): void

public [dump](parle-rlexer.dump.md)(): void

public [getToken](parle-rlexer.gettoken.md)():
[Parle\Token](class.parle-token.md)

public [insertMacro](parle-rlexer.insertmacro.md)(string `$name`,
string `$regex`): void

public [push](parle-rlexer.push.md)(string `$regex`, int `$id`): void

public [push](parle-rlexer.push.md)(
string `$state`,
string `$regex`,
int `$id`,
string `$newState`
): void

public [push](parle-rlexer.push.md)(string `$state`, string `$regex`,
string `$newState`): void

public [pushState](parle-rlexer.pushstate.md)(string `$state`): int

public [reset](parle-rlexer.reset.md)(int `$pos`): void

}

## Зумовлені константи

**`Parle\RLexer::ICASE`**

**`Parle\RLexer::DOT_NOT_LF`**

**`Parle\RLexer::DOT_NOT_CRLF`**

**`Parle\RLexer::SKIP_WS`**

**`Parle\RLexer::MATCH_ZERO_LEN`**

## Властивості

`bol`
Прапор початку введення.

`flags`
Прапори лексера.

`state`
Поточний стан лексера, лише читання.

`marker`
Позиція останнього збігу токена, лише читання.

`cursor`
Поточне усунення введення, тільки для читання.

## Зміст

- [Parle\RLexer::advance](parle-rlexer.advance.md) — Обробка
наступного правила лексера
- [Parle\RLexer::build](parle-rlexer.build.md) — Завершує набір
правил лексера
- [Parle\RLexer::callout](parle-rlexer.callout.md) — Визначає
callback-функцію токена
- [Parle\RLexer::consume](parle-rlexer.consume.md) — Передає дані
для обробки
- [Parle\RLexer::dump](parle-rlexer.dump.md) — Вивантажує стан
пристрої
- [Parle\RLexer::getToken](parle-rlexer.gettoken.md) - v
- [Parle\RLexer::insertMacro](parle-rlexer.insertmacro.md) -
Вставляє макрос регулярного виразу
- [Parle\RLexer::push](parle-rlexer.push.md) — Додає правило
лексера
- [Parle\RLexer::pushState](parle-rlexer.pushstate.md) - Просуває
новий початковий стан
- [Parle\RLexer::reset](parle-rlexer.reset.md) - Скидає лексер
