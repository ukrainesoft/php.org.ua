- [«
MongoDB\Driver\CursorId::unserialize](mongodb-driver-cursorid.unserialize.md)
- [MongoDB\Driver\CursorInterface::getId
»](mongodb-driver-cursorinterface.getid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Інтерфейс MongoDB\Driver\CursorInterface

# Інтерфейс MongoDB\Driver\CursorInterface

(mongodb \>u003d1.6.0)

## Вступ

Інтерфейс, реалізований
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md), але також
може використовуватися як параметр, що повертається значення або
типу якості у класах користувальницького простору.

## Огляд класів

class **MongoDB\Driver\CursorInterface** implements
[Traversable](class.traversable.md) {

/\* Методи \*/

abstract public [getId](mongodb-driver-cursorinterface.getid.md)():
[MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md)

abstract public
[getServer](mongodb-driver-cursorinterface.getserver.md)():
[MongoDB\Driver\Server](class.mongodb-driver-server.md)

abstract public [isDead](mongodb-driver-cursorinterface.isdead.md)():
bool

abstract public
[setTypeMap](mongodb-driver-cursorinterface.settypemap.md)(array
`$typemap`): void

abstract public
[toArray](mongodb-driver-cursorinterface.toarray.md)(): array

}

## Зміст

- [MongoDB\Driver\CursorInterface::getId](mongodb-driver-cursorinterface.getid.md)
- Повертає ідентифікатор курсору
- [MongoDB\Driver\CursorInterface::getServer](mongodb-driver-cursorinterface.getserver.md)
— Повертає сервер, з яким пов'язаний курсор
- [MongoDB\Driver\CursorInterface::isDead](mongodb-driver-cursorinterface.isdead.md)
— Перевірити, чи можна ще отримати з курсору результати
- [MongoDB\Driver\CursorInterface::setTypeMap](mongodb-driver-cursorinterface.settypemap.md)
— Задати порівняння типів десеріалізації BSON
- [MongoDB\Driver\CursorInterface::toArray](mongodb-driver-cursorinterface.toarray.md)
— Повернути всі результати для цього курсору у вигляді масиву
