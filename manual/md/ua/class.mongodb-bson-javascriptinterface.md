- [«
MongoDB\BSON\Decimal128Interface::\_\_toString](mongodb-bson-decimal128interface.tostring.md)
- [MongoDB\BSON\JavascriptInterface::getCode
»](mongodb-bson-javascriptinterface.getcode.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Інтерфейс MongoDB\BSON\JavascriptInterface

# Інтерфейс MongoDB\BSON\JavascriptInterface

(mongodb \>u003d1.3.0)

## Вступ

Цей інтерфейс реалізовано
[MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md), але також
може використовуватися як параметр, що повертається значення або
типу якості у класах користувальницького простору.

## Огляд класів

class **MongoDB\BSON\JavascriptInterface** {

/\* Методи \*/

abstract public
[getCode](mongodb-bson-javascriptinterface.getcode.md)(): string

abstract public
[getScope](mongodb-bson-javascriptinterface.getscope.md)(): ?object

abstract public
[\_\_toString](mongodb-bson-javascriptinterface.tostring.md)(): string

}

## Зміст

- [MongoDB\BSON\JavascriptInterface::getCode](mongodb-bson-javascriptinterface.getcode.md)
— Повертає код JavascriptInterface
- [MongoDB\BSON\JavascriptInterface::getScope](mongodb-bson-javascriptinterface.getscope.md)
— Повертає область видимості документа JavascriptInterface
- [MongoDB\BSON\JavascriptInterface::\_\_toString](mongodb-bson-javascriptinterface.tostring.md)
— Повертає код JavascriptInterface
