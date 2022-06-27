- [«MongoDB\Driver\Cursor::valid](mongodb-driver-cursor.valid.md)
- [MongoDB\Driver\CursorId::\_\_construct
»](mongodb-driver-cursorid.construct.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\CursorId

# Клас MongoDB\Driver\CursorId

(mongodb \>u003d1.0.0)

## Вступ

Клас **MongoDB\Driver\CursorID** - об'єкт значення, який
представляє ідентифікатор курсору. Примірники цього класу повертаються
[MongoDB\Driver\Cursor::getId()](mongodb-driver-cursor.getid.md).

## Огляд класів

final class **MongoDB\Driver\CursorId** implements
[Serializable](class.serializable.md),
[Stringable](class.stringable.md) {

/\* Методи \*/

final private [\_\_construct](mongodb-driver-cursorid.construct.md)()

final public [serialize](mongodb-driver-cursorid.serialize.md)():
string

final public [\_\_toString](mongodb-driver-cursorid.tostring.md)():
string

final public
[unserialize](mongodb-driver-cursorid.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|---------------------|--------------------------- --------------------------------------------|
| PECL mongodb 1.12.0 | Реалізує інтерфейс [Stringable](class.stringable.md) для PHP 8.0+. |
| PECL mongodb 1.7.0 | Реалізує [Serializable](class.serializable.md). |

## Зміст

- [MongoDB\Driver\CursorId::\_\_construct](mongodb-driver-cursorid.construct.md)
- Створює новий об'єкт CursorId (не використовується)
- [MongoDB\Driver\CursorId::serialize](mongodb-driver-cursorid.serialize.md)
- Серіалізація CursorId
- [MongoDB\Driver\CursorId::\_\_toString](mongodb-driver-cursorid.tostring.md)
— Строкове представлення ідентифікатора курсору
- [MongoDB\Driver\CursorId::unserialize](mongodb-driver-cursorid.unserialize.md)
- Десеріалізація CursorId
