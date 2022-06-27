- [« Parle\Lexer::insertMacro](parle-lexer.insertmacro.md)
- [Parle\Lexer::reset »](parle-lexer.reset.md)

- [PHP Manual](index.md)
- [Parle\Lexer](class.parle-lexer.md)
- Додає правило лексера

# Parle\Lexer::push

(PECL parle \>u003d 0.5.1)

Parle\Lexer::push — Додає правило лексера

### Опис

public **Parle\Lexer::push**(string `$regex`, int `$id`): void

Висуває шаблон для розпізнавання лексеми.

### Список параметрів

`regex`
Регулярне вираз, використовуване зіставлення токенів.

`id`
Ідентифікатор токена. Якщо екземпляр лексера призначений для
автономного використання може бути довільним числом. Якщо
екземпляр лексера буде переданий синтаксичному аналізатору, повинен бути
ідентифікатор, який повертається
[Parle\Parser::tokenid()](parle-parser.tokenid.md).

### Значення, що повертаються

Функція не повертає значення після виконання.
