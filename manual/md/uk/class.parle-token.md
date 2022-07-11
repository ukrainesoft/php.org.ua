- [« Parle\Stack::push](parle-stack.push.md)
- [Parle\ErrorInfo »](class.parle-errorinfo.md)

- [PHP Manual](index.md)
- [Parle](book.parle.md)
- Клас Parle\Token

# Клас Parle\Token

(PECL parle \>u003d 0.5.2)

## Вступ

Клас є токен. Лексер повертає екземпляри цього класу.

## Огляд класів

class **Parle\Token** {

/\* Constants \*/

const int `EOI` u003d 0;

const int `UNKNOWN` u003d -1;

const int `SKIP` u003d -2;

/\* Властивості \*/

public int `$id`;

public string `$value`;

/\* Методи \*/

}

## Властивості

`id`
Ідентифікатор токена.

`value`
Значення токена.

## Зумовлені константи

**`Parle\Token::EOI`**
Кінець вхідного ідентифікатора токена.

**`Parle\Token::UNKNOWN`**
Невідомий ідентифікатор токену.

**`Parle\Token::SKIP`**
Пропустіть ідентифікатор токена.
