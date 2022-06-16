- [« Parle\RLexer::push](parle-rlexer.push.md)
- [Parle\RLexer::reset »](parle-rlexer.reset.md)

- [PHP Manual](index.md)
- [Parle\RLexer](class.parle-rlexer.md)
- Просуває новий початковий стан

# Parle\RLexer::pushState

(PECL parle \>u003d 0.5.1)

Parle\RLexer::pushState — Просуває новий початковий стан

### Опис

public **Parle\RLexer::pushState**(string `$state`): int

Цей тип лексера може мати більше одного стану пристрою. Це
дозволяє вам використовувати різні токени в залежності від контексту, що
дозволяє виконувати простий синтаксичний аналіз. Після відправки
стану його можна використовувати з відповідним варіантом сигнатури
[Parle\RLexer::push()](parle-rlexer.push.md).

### Список параметрів

`state`
Назва стану

### Значення, що повертаються
