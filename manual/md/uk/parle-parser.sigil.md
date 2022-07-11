- [« Parle\Parser::right](parle-parser.right.md)
- [Parle\Parser::token »](parle-parser.token.md)

- [PHP Manual](index.md)
- [Parle\Parser](class.parle-parser.md)
- Витягує частину збігу за правилом

# Parle\Parser::sigil

(PECL parle \>u003d 0.5.1)

Parle\Parser::sigil — Витягує частину збігу за правилом

### Опис

public **Parle\Parser::sigil**(int `$idx`): string

Повертає частину збігу за правилом. Метод еквівалентний
функціональність псевдозмінних в Bison.

### Список параметрів

`idx`
Індекс збігу, що відраховується від нуля.

### Значення, що повертаються

Повертає рядок (string) з частиною, що збігається.
