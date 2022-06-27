- [«
MongoDB\BSON\ObjectIdInterface::\_\_toString](mongodb-bson-objectidinterface.tostring.md)
- [MongoDB\BSON\RegexInterface::getFlags
»](mongodb-bson-regexinterface.getflags.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Інтерфейс MongoDB\BSON\RegexInterface

# Інтерфейс MongoDB\BSON\RegexInterface

(mongodb \>u003d1.3.0)

## Вступ

Цей інтерфейс реалізовано
[MongoDB\BSON\Regex](class.mongodb-bson-regex.md), як
параметра, значення, що повертається, або типу властивості в класах
користувальницького простору.

## Огляд класів

class **MongoDB\BSON\RegexInterface** {

/\* Методи \*/

abstract public [getFlags](mongodb-bson-regexinterface.getflags.md)():
string

abstract public
[getPattern](mongodb-bson-regexinterface.getpattern.md)(): string

abstract public
[\_\_toString](mongodb-bson-regexinterface.tostring.md)(): string

}

## Зміст

- [MongoDB\BSON\RegexInterface::getFlags](mongodb-bson-regexinterface.getflags.md)
— Повертає прапори RegexInterface
- [MongoDB\BSON\RegexInterface::getPattern](mongodb-bson-regexinterface.getpattern.md)
— Повертає шаблон RegexInterface
- [MongoDB\BSON\RegexInterface::\_\_toString](mongodb-bson-regexinterface.tostring.md)
— Повертає рядкову виставу RegexInterface
