- [« Parle\Parser::precedence](parle-parser.precedence.md)
- [Parle\Parser::reset »](parle-parser.reset.md)

- [PHP Manual](index.md)
- [Parle\Parser](class.parle-parser.md)
- Додає граматичне правило

# Parle\Parser::push

(PECL parle \>u003d 0.5.1)

Parle\Parser::push — Додає граматичне правило

### Опис

public **Parle\Parser::push**(string `$name`, string `$rule`): int

Додає граматичне правило. Повернутий виробничий
ідентифікатор може бути використаний пізніше в процесі синтаксичного
аналізу, щоб ідентифікувати відповідність до правила.

### Список параметрів

`name`
Ім'я правила.

`rule`
Правило, яке буде додано. Синтаксис сумісний із Bison.

### Значення, що повертаються

Повертає ціле число (int), що представляє індекс правила.
