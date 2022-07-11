- [« Parle\RLexer::reset](parle-rlexer.reset.md)
- [Parle\Parser::advance »](parle-parser.advance.md)

- [PHP Manual](index.md)
- [Parle](book.parle.md)
- Клас Parle\Parser

# Клас Parle\Parser

(PECL parle \>u003d 0.5.1)

## Вступ

Клас парсеру. Правила можна визначати на льоту. Після завершення
потрібен екземпляр [Parle\Lexer](class.parle-lexer.md) для доставки
потоку токенів.

## Огляд класів

class **Parle\Parser** {

/\* Константи \*/

const int `ACTION_ERROR` u003d 0;

const int `ACTION_SHIFT` u003d 1;

const int `ACTION_REDUCE` u003d 2;

const int `ACTION_GOTO` u003d 3;

const int `ACTION_ACCEPT` u003d 4;

const int `ERROR_SYNTAX` u003d 0;

const int `ERROR_NON_ASSOCIATIVE` u003d 1;

const int `ERROR_UNKNOWN_TOKEN` u003d 2;

/\* Властивості \*/

public int `$action` u003d 0;

public int `$reduceId` u003d 0;

/\* Методи \*/

public [advance](parle-parser.advance.md)(): void

public [build](parle-parser.build.md)(): void

public [consume](parle-parser.consume.md)(string `$data`,
[Parle\Lexer](class.parle-lexer.md) `$lexer`): void

public [dump](parle-parser.dump.md)(): void

public [errorInfo](parle-parser.errorinfo.md)():
[Parle\ErrorInfo](class.parle-errorinfo.md)

public [left](parle-parser.left.md)(string `$tok`): void

public [nonassoc](parle-parser.nonassoc.md)(string `$tok`): void

public [precedence](parle-parser.precedence.md)(string `$tok`): void

public [push](parle-parser.push.md)(string `$name`, string `$rule`):
int

public [reset](parle-parser.reset.md)(int `$tokenId` u003d ?): void

public [right](parle-parser.right.md)(string `$tok`): void

public [sigil](parle-parser.sigil.md)(int `$idx`): string

public [token](parle-parser.token.md)(string `$tok`): void

public [tokenId](parle-parser.tokenid.md)(string `$tok`): int

public [trace](parle-parser.trace.md)(): string

public [validate](parle-parser.validate.md)(string `$data`,
[Parle\Lexer](class.parle-lexer.md) `$lexer`): bool

}

## Зумовлені константи

**`Parle\Parser::ACTION_ERROR`**

**`Parle\Parser::ACTION_SHIFT`**

**`Parle\Parser::ACTION_REDUCE`**

**`Parle\Parser::ACTION_GOTO`**

**`Parle\Parser::ACTION_ACCEPT`**

**`Parle\Parser::ERROR_SYNTAX`**

**`Parle\Parser::ERROR_NON_ASSOCIATIVE`**

**`Parle\Parser::ERROR_UNKNOWN_TOKEN`**

## Властивості

`action`
Поточна дія синтаксичного аналізатора, що відповідає
однією з констант класу дії, лише читання.

`reduceId`
Ідентифікатор правила граматики, щойно оброблений у дії
скорочення. Значення відповідає токену або виробничому
ідентифікатору. Тільки читання.

## Зміст

- [Parle\Parser::advance](parle-parser.advance.md) - Обробляє
наступне правило парсера
- [Parle\Parser::build](parle-parser.build.md) - Завершує
граматичні правила
- [Parle\Parser::consume](parle-parser.consume.md) — Споживає
дані для обробки
- [Parle\Parser::dump](parle-parser.dump.md) - Виводить граматику
- [Parle\Parser::errorInfo](parle-parser.errorinfo.md) — Отримує
інформацію про помилку
- [Parle\Parser::left](parle-parser.left.md) — Оголошує токен з
лівою асоціативністю
- [Parle\Parser::nonassoc](parle-parser.nonassoc.md) — Оголошує
токен без асоціативності
- [Parle\Parser::precedence](parle-parser.precedence.md) — Оголошує
правило пріоритету
- [Parle\Parser::push](parle-parser.push.md) - Додає
граматичне правило
- [Parle\Parser::reset](parle-parser.reset.md) — Скидає
стан парсера
- [Parle\Parser::right](parle-parser.right.md) — Оголошує токен з
правою асоціативністю
- [Parle\Parser::sigil](parle-parser.sigil.md) — Витягує частину
збіги за правилом
- [Parle\Parser::token](parle-parser.token.md) — Оголошує токен
- [Parle\Parser::tokenId](parle-parser.tokenid.md) — Отримує
ідентифікатор токена
- [Parle\Parser::trace](parle-parser.trace.md) — Слідкує за роботою
парсера
- [Parle\Parser::validate](parle-parser.validate.md) — Перевіряє
вхідні дані
