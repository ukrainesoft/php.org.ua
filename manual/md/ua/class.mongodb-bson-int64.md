- [«
MongoDB\BSON\DBPointer::unserialize](mongodb-bson-dbpointer.unserialize.md)
- [MongoDB\BSON\Int64::\_\_construct
»](mongodb-bson-int64.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\Int64

# Клас MongoDB\BSON\Int64

(mongodb \>u003d1.5.0)

## Вступ

Тип BSON для 64-розрядного цілого числа. Цей клас не може бути створений
і створюється тільки під час декодування BSON, коли 64-розрядне ціле
не може бути представлено, як ціле число PHP на 32-розрядному
платформи. Версії драйвера до 1.5.0 викличуть виняток при спробі
декодування 64-розрядного цілого числа на 32-розрядній платформі

Під час кодування BSON об'єкти цього класу будуть перетворені
назад у 64-бітний цілий тип. Це дозволяє використовувати
64-розрядні цілі числа в 32-розрядному середовищі PHP без втрати точності. Метод
[\_\_toString()](language.oop5.magic.md#object.tostring) дозволяє
отримати доступ до 64-бітного цілого значення у вигляді рядка.

> **Примітка**: Цей клас існує виключно для 32-розрядних
> платформ. Програми на 64-бітових платформах (тобто.
> [**`PHP_INT_SIZE`**](reserved.constants.md#constant.php-int-size)
> рівне 8) ніколи не повинні стикатися з цим класом під час
> нормальної роботи.

## Огляд класів

final class **MongoDB\BSON\Int64** implements
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md),
[Stringable](class.stringable.md) {

/\* Методи \*/

final private [\_\_construct](mongodb-bson-int64.construct.md)()

final public [jsonSerialize](mongodb-bson-int64.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-int64.serialize.md)(): string

final public [\_\_toString](mongodb-bson-int64.tostring.md)(): string

final public [unserialize](mongodb-bson-int64.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|---------------------|--------------------------- --------------------------------------------|
| PECL mongodb 1.12.0 | Реалізує інтерфейс [Stringable](class.stringable.md) для PHP 8.0+. |

## Зміст

- [MongoDB\BSON\Int64::\_\_construct](mongodb-bson-int64.construct.md)
— Створює новий Int64 (не використовується)
- [MongoDB\BSON\Int64::jsonSerialize](mongodb-bson-int64.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\Int64::serialize](mongodb-bson-int64.serialize.md) -
Серіалізує Int64
- [MongoDB\BSON\Int64::\_\_toString](mongodb-bson-int64.tostring.md)
— Повертає рядкову виставу Int64
- [MongoDB\BSON\Int64::unserialize](mongodb-bson-int64.unserialize.md)
- Десеріалізує Int64
