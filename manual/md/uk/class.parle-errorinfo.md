- [«Parle\Token](class.parle-token.md)
- [Parle\LexerException »](class.parle-lexerexception.md)

- [PHP Manual](index.md)
- [Parle](book.parle.md)
- Клас Parle\ErrorInfo

# Клас Parle\ErrorInfo

(PECL parle \>u003d 0.5.2)

## Вступ

Клас представляє докладну інформацію про помилку, надану
[Parle\Parser::errorInfo()](parle-parser.errorinfo.md)

## Огляд класів

class **Parle\ErrorInfo** {

/\* Властивості \*/

public int `$id`;

public int `$position`;

public
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$token`;

/\* Методи \*/

}

## Властивості

`id`
Ідентифікатор помилки.

`position`
Позиція, де сталася помилка.

`token`
Якщо застосовно - [Parle\Token](class.parle-token.md), пов'язаний з
помилкою, інакше **`null`**.
