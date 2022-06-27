- [« Parle\RParser::trace](parle-rparser.trace.md)
- [Parle\Stack »](class.parle-stack.md)

- [PHP Manual](index.md)
- [Parle\RParser](class.parle-rparser.md)
- Перевіряє вхідні дані

# Parle\RParser::validate

(PECL parle \>u003d 0.7.0)

Parle\RParser::validate — Перевірка вхідних даних

### Опис

public **Parle\RParser::validate**(string `$data`,
[Parle\RLexer](class.parle-rlexer.md) `$lexer`): bool

Перевіряє вхідний рядок. Рядок аналізується внутрішнім механізмом,
тому метод корисний швидкої перевірки вхідних даних.

### Список параметрів

`data`
Рядок для перевірки.

`lexer`
Об'єкт лексера, що містить правила лексування, підготовлені для
конкретної граматики.

### Значення, що повертаються

Повертає логічне значення (bool) визначальне, чи відповідають
вхідні дані заданим правилам чи ні.
