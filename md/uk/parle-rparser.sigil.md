- [« Parle\RParser::right](parle-rparser.right.md)
- [Parle\RParser::token »](parle-rparser.token.md)

- [PHP Manual](index.md)
- [Parle\RParser](class.parle-rparser.md)
- Витягує збігаючу частину за правилом

# Parle\RParser::sigil

(PECL parle \>u003d 0.7.0)

Parle\RParser::sigil — Витягує збіговуся частину за правилом

### Опис

public **Parle\RParser::sigil**(int `$idx` u003d ?): string

Повертає частину збігу за правилом. Метод еквівалентний
функціональність псевдозмінних в Bison.

### Список параметрів

`idx`
Індекс збігу, що відраховується від нуля.

### Значення, що повертаються

Повертає рядок (string) з частиною, що збігається.
