- [« Parle\Parser::validate](parle-parser.validate.md)
- [Parle\RParser::advance »](parle-rparser.advance.md)

- [PHP Manual](index.md)
- [Parle](book.parle.md)
- Клас Parle\RParser

# Клас Parle\RParser

(PECL parle \>u003d 0.7.0)

## Вступ

Клас парсеру. Правила можуть бути визначені на льоту. Після завершення
необхідно створити екземпляр [Parle\RLexer](class.parle-rlexer.md) для
доставки потоку токенів.

## Огляд класів

class **Parle\RParser** {

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

public [advance](parle-rparser.advance.md)(): void

public [build](parle-rparser.build.md)(): void

public [consume](parle-rparser.consume.md)(string `$data`,
[Parle\RLexer](class.parle-rlexer.md) `$rlexer`): void

public [dump](parle-rparser.dump.md)(): void

public [errorInfo](parle-rparser.errorinfo.md)():
[Parle\ErrorInfo](class.parle-errorinfo.md)

public [left](parle-rparser.left.md)(string `$tok`): void

public [nonassoc](parle-rparser.nonassoc.md)(string `$tok`): void

public [precedence](parle-rparser.precedence.md)(string `$tok`): void

public [push](parle-rparser.push.md)(string `$name`, string `$rule`):
int

public [reset](parle-rparser.reset.md)(int `$tokenId` u003d ?): void

public [right](parle-rparser.right.md)(string `$tok`): void

public [sigil](parle-rparser.sigil.md)(int `$idx` u003d ?): string

public [token](parle-rparser.token.md)(string `$tok`): void

public [tokenId](parle-rparser.tokenid.md)(string `$tok`): int

public [trace](parle-rparser.trace.md)(): string

public [validate](parle-rparser.validate.md)(string `$data`,
[Parle\RLexer](class.parle-rlexer.md) `$lexer`): bool

}

## Зумовлені константи

**`Parle\RParser::ACTION_ERROR`**

**`Parle\RParser::ACTION_SHIFT`**

**`Parle\RParser::ACTION_REDUCE`**

**`Parle\RParser::ACTION_GOTO`**

**`Parle\RParser::ACTION_ACCEPT`**

**`Parle\RParser::ERROR_SYNTAX`**

**`Parle\RParser::ERROR_NON_ASSOCIATIVE`**

**`Parle\RParser::ERROR_UNKNOWN_TOKEN`**

## Властивості

`action`
Поточна дія парсера, яка відповідає одній із констант класу
дії, лише читання.

`reduceId`
Ідентифікатор правила граматики, щойно оброблений у дії
скорочення. Значення відповідає токену або виробничому
ідентифікатору. Тільки читання.

## Зміст

- [Parle\RParser::advance](parle-rparser.advance.md) — Обробка
наступного правила парсера
- [Parle\RParser::build](parle-rparser.build.md) - Завершує
граматичні правила
- [Parle\RParser::consume](parle-rparser.consume.md) — Використовувати
дані для обробки
- [Parle\RParser::dump](parle-rparser.dump.md) - Виводить граматику
- [Parle\RParser::errorInfo](parle-rparser.errorinfo.md) — Отримує
інформацію про помилку
- [Parle\RParser::left](parle-rparser.left.md) — Оголошує токен з
лівою асоціативністю
- [Parle\RParser::nonassoc](parle-rparser.nonassoc.md) - Оголошує
токен без асоціативності
- [Parle\RParser::precedence](parle-rparser.precedence.md) -
Оголошує правило пріоритету
- [Parle\RParser::push](parle-rparser.push.md) - Додає
граматичне правило
- [Parle\RParser::reset](parle-rparser.reset.md) - Скидає
стан парсера
- [Parle\RParser::right](parle-rparser.right.md) — Оголошує токен з
правою асоціативністю
- [Parle\RParser::sigil](parle-rparser.sigil.md) - Витягує
збігається частина за правилом
- [Parle\RParser::token](parle-rparser.token.md) — Оголошує токен
- [Parle\RParser::tokenId](parle-rparser.tokenid.md) - Отримує
ідентифікатор токена
- [Parle\RParser::trace](parle-rparser.trace.md) - Слідкує за роботою
парсера
- [Parle\RParser::validate](parle-rparser.validate.md) — Перевіряє
вхідні дані
