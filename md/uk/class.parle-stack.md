- [« Parle\RParser::validate](parle-rparser.validate.md)
- [Parle\Stack::pop »](parle-stack.pop.md)

- [PHP Manual](index.md)
- [Parle](book.parle.md)
- Клас Parle\Stack

# Клас Parle\Stack

(PECL parle \>u003d 0.7.0)

## Вступ

**Parle\Stack** - це стек LIFO. Елементи додаються та видаляються тільки
з одного кінця.

## Огляд класів

class **Parle\Stack** {

/\* Властивості \*/

public bool `$empty` u003d **`true`**;

public int `$size` u003d 0;

public
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$top`;

/\* Методи \*/

public [pop](parle-stack.pop.md)(): void

public
[push](parle-stack.push.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$item`): void

}

## Властивості

`empty`
Чи є стек порожнім, лише читання.

`size`
Розмір стека, тільки читання.

`top`
Елемент на початку стеку.

## Зміст

- [Parle\Stack::pop](parle-stack.pop.md) — Витягує предмет з
стеку
- [Parle\Stack::push](parle-stack.push.md) — Поміщає елемент у стек
