- [« Parle\RParser::precedence](parle-rparser.precedence.md)
- [Parle\RParser::reset »](parle-rparser.reset.md)

- [PHP Manual](index.md)
- [Parle\RParser](class.parle-rparser.md)
- Додає граматичне правило

# Parle\RParser::push

(PECL parle \>u003d 0.7.0)

Parle\RParser::push — Додає граматичне правило

### Опис

public **Parle\RParser::push**(string `$name`, string `$rule`): int

Додає граматичне правило. Повернутий ідентифікатор може бути
використаний пізніше в процесі синтаксичного аналізу, щоб
ідентифікувати відповідність до правила.

### Список параметрів

`name`
Ім'я правила.

`rule`
Правило, яке буде додано. Синтаксис сумісний із Bison.

### Значення, що повертаються

Повертає ціле число (int), що представляє індекс правила.
