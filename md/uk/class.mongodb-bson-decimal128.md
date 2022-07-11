- [«
MongoDB\BSON\Binary::unserialize](mongodb-bson-binary.unserialize.md)
- [MongoDB\BSON\Decimal128::\_\_construct
»](mongodb-bson-decimal128.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\Decimal128

# Клас MongoDB\BSON\Decimal128

(mongodb \>u003d1.2.0)

## Вступ

Тип BSON для [» Decimal128 формату з плаваючою
точкою](https://en.wikipedia.org/wiki/Decimal128_floating-point_format),
який підтримує числа до 34 десяткових знаків (тобто значних
цифр) та діапазон експонентів від -6143 до +6144.

На відміну від типу double BSON (тобто float у PHP), який зберігає
тільки приблизні значення десяткових значень, тип даних decimal
зберігає точне значення. Наприклад, `MongoDB\BSON\Decimal128('9.99')`
має точне значення 9-99, де подвійне значення 9-99 буде мати
приблизне значення 9.990000000000002131628.

> **Примітка**: **MongoDB\BSON\Decimal128** сумісний лише з MongoDB
>3.4+. При спробі використовувати тип BSON з попередніми версіями
> призведе до помилки.

## Огляд класів

final class **MongoDB\BSON\Decimal128** implements
[MongoDB\BSON\Decimal128Interface](class.mongodb-bson-decimal128interface.md),
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md),
[Stringable](class.stringable.md) {

/\* Методи \*/

final public
[\_\_construct](mongodb-bson-decimal128.construct.md)(string `$value`
u003d?)

final public
[jsonSerialize](mongodb-bson-decimal128.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-decimal128.serialize.md)():
string

final public [\_\_toString](mongodb-bson-decimal128.tostring.md)():
string

final public
[unserialize](mongodb-bson-decimal128.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|---------------------|---------------------------- -------------------------------------------------- ------------------------------------|
| PECL mongodb 1.12.0 | Реалізує інтерфейс [Stringable](class.stringable.md) для PHP 8.0+. |
| PECL mongodb 1.3.0 | Реалізує інтерфейс [MongoDB\BSON\Decimal128Interface](class.mongodb-bson-decimal128interface.md). |
| PECL mongodb 1.2.0 Реалізує інтерфейси [Serializable](class.serializable.md) та [JsonSerializable](class.jsonserializable.md). |

## Зміст

- [MongoDB\BSON\Decimal128::\_\_construct](mongodb-bson-decimal128.construct.md)
- Створює новий Decimal128
- [MongoDB\BSON\Decimal128::jsonSerialize](mongodb-bson-decimal128.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\Decimal128::serialize](mongodb-bson-decimal128.serialize.md)
- Серіалізує Decimal128
- [MongoDB\BSON\Decimal128::\_\_toString](mongodb-bson-decimal128.tostring.md)
— Повертає рядкову виставу Decimal128
- [MongoDB\BSON\Decimal128::unserialize](mongodb-bson-decimal128.unserialize.md)
- Десеріалізує Decimal128
