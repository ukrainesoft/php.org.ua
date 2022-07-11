- [« Приклад використання парсера](parle.examples.parser.md)
- [Parle\Lexer::advance »](parle-lexer.advance.md)

- [PHP Manual](index.md)
- [Parle](book.parle.md)
- Клас Parle\Lexer

# Клас Parle\Lexer

(PECL parle \>u003d 0.5.1)

## Вступ

Клас лексера з одним станом. Лексеми можна визначати на льоту. Якщо
конкретний екземпляр лексера призначений для використання з
[Parle\Parser](class.parle-parser.md), ідентифікатори токенів повинні
бути взяті звідти. В іншому випадку можуть бути надані
довільні ідентифікатори токенів. Лексер може дати певне
перевага у продуктивності в порівнянні з
[Parle\RLexer](class.parle-rlexer.md), якщо не потрібно кілька
станів. Зверніть увагу, що
[Parle\RParser](class.parle-rparser.md) несумісний із цим лексером.

## Огляд класів

class **Parle\Lexer** {

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

public [advance](parle-lexer.advance.md)(): void

public [build](parle-lexer.build.md)(): void

public [callout](parle-lexer.callout.md)(int `$id`,
[callable](language.types.callable.md) `$callback`): void

public [consume](parle-lexer.consume.md)(string `$data`): void

public [dump](parle-lexer.dump.md)(): void

public [getToken](parle-lexer.gettoken.md)():
[Parle\Token](class.parle-token.md)

public [insertMacro](parle-lexer.insertmacro.md)(string `$name`,
string `$regex`): void

public [push](parle-lexer.push.md)(string `$regex`, int `$id`): void

public [reset](parle-lexer.reset.md)(int `$pos`): void

}

## Зумовлені константи

**`Parle\Lexer::ICASE`**

**`Parle\Lexer::DOT_NOT_LF`**

**`Parle\Lexer::DOT_NOT_CRLF`**

**`Parle\Lexer::SKIP_WS`**

**`Parle\Lexer::MATCH_ZERO_LEN`**

## Властивості

`bol`
Прапор початку введення.

`flags`
Прапори лексера.

`state`
Поточний стан лексера доступний тільки для читання.

`marker`
Позиція останнього збігу токена доступна тільки для читання.

`cursor`
Поточне зміщення введення доступне тільки для читання.

## Зміст

- [Parle\Lexer::advance](parle-lexer.advance.md) - Обробляє
наступне правило лексера
- [Parle\Lexer::build](parle-lexer.build.md) — Завершує набір
правил лексера
- [Parle\Lexer::callout](parle-lexer.callout.md) - Визначає
callback-функцію токена
- [Parle\Lexer::consume](parle-lexer.consume.md) — Передає дані
на обробку
- [Parle\Lexer::dump](parle-lexer.dump.md) — Виводить стан
пристрої
- [Parle\Lexer::getToken](parle-lexer.gettoken.md) — Отримує
поточний токен
- [Parle\Lexer::insertMacro](parle-lexer.insertmacro.md) — Вставляє
макрос регулярного вираження
- [Parle\Lexer::push](parle-lexer.push.md) - Додає правило
лексера
- [Parle\Lexer::reset](parle-lexer.reset.md) - Скидає лексер
