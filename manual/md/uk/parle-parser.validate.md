- [« Parle\Parser::trace](parle-parser.trace.md)
- [Parle\RParser »](class.parle-rparser.md)

- [PHP Manual](index.md)
- [Parle\Parser](class.parle-parser.md)
- Перевіряє вхідні дані

# Parle\Parser::validate

(PECL parle \>u003d 0.5.1)

Parle\Parser::validate — Перевірка вхідних даних

### Опис

public **Parle\Parser::validate**(string `$data`,
[Parle\Lexer](class.parle-lexer.md) `$lexer`): bool

Перевіряє вхідний рядок. Рядок аналізується всередині, тому метод
корисний для швидкої перевірки введення.

### Список параметрів

`data`
Рядок для перевірки.

`lexer`
Об'єкт лексера, що містить правила лексування, підготовлені для
конкретної граматики.

### Значення, що повертаються

Повертає логічне значення (bool) залежно від того,
чи відповідають вхідні дані заданим правилам чи ні.
