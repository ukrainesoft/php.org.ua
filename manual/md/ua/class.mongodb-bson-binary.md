- [«
MongoDB\BSON oRelaxedExtendedJSON](function.mongodb.bson-torelaxedextendedjson.md)
- [MongoDB\BSON\Binary::\_\_construct
»](mongodb-bson-binary.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\Binary

# Клас MongoDB\BSON\Binary

(mongodb \>u003d1.0.0)

## Вступ

Тип BSON для бінарних даних (тобто масиву байт). Бінарні значення
також мають підтип, що означає, який тип даних міститься в масиві
байт. Підтипи з нуля до 127 визначені або зарезервовані. Підтипи
з 128-255 задаються користувачем.

## Огляд класів

final class **MongoDB\BSON\Binary** implements
[MongoDB\BSON\BinaryInterface](class.mongodb-bson-binaryinterface.md),
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md),
[Stringable](class.stringable.md) {

/\* Константи \*/

const int `TYPE_GENERIC` u003d 0;

const int `TYPE_FUNCTION` u003d 1;

const int `TYPE_OLD_BINARY` u003d 2;

const int `TYPE_OLD_UUID` u003d 3;

const int `TYPE_UUID` u003d 4;

const int `TYPE_MD5` u003d 5;

const int `TYPE_ENCRYPTED` u003d 6;

const int `TYPE_COLUMN` u003d 7;

const int `TYPE_USER_DEFINED` u003d 128;

/\* Методи \*/

final public [\_\_construct](mongodb-bson-binary.construct.md)(string
`$data`, int `$type`)

final public [getData](mongodb-bson-binary.getdata.md)(): string

final public [getType](mongodb-bson-binary.gettype.md)(): int

final public [jsonSerialize](mongodb-bson-binary.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-binary.serialize.md)(): string

final public [\_\_toString](mongodb-bson-binary.tostring.md)(): string

final public [unserialize](mongodb-bson-binary.unserialize.md)(string
`$serialized`): void

}

## Зумовлені константи

**`MongoDB\BSON\Binary::TYPE_GENERIC`**
Бінарні дані

**`MongoDB\BSON\Binary::TYPE_FUNCTION`**
Функція

**`MongoDB\BSON\Binary::TYPE_OLD_BINARY`**
Бінарні дані (оголошена застарілою, використовуйте
**`MongoDB\BSON\Binary::TYPE_GENERIC`**)

**`MongoDB\BSON\Binary::TYPE_OLD_UUID`**
Універсальний унікальний ідентифікатор (оголошено застарілою).
Використовуйте **`MongoDB\BSON\Binary::TYPE_UUID`**). При використанні
цього типу, бінарні дані мають бути довжиною 16 байт.

Історично інші значення кодовані цими типами, але іншими
драйверами, що базуються на інших конвенціях (наприклад, різний тип
порядку байт), що робить його нестерпним. Драйвер PHP не застосовує
будь-яких обробок для даних цього типу.

**`MongoDB\BSON\Binary::TYPE_UUID`**
Універсальний унікальний ідентифікатор. При використанні цього типу
бінарні дані мають бути завдовжки 16 байт [» RFC
4122](http://www.faqs.org/rfcs/rfc4122).

**`MongoDB\BSON\Binary::TYPE_MD5`**
Хеш MD5. При використанні цього типу, бінарні дані мають бути
довжиною 16 байт.

**`MongoDB\BSON\Binary::TYPE_ENCRYPTED`**
Зашифроване значення. Цей підтип використовується для шифрування на
стороні клієнта.

**`MongoDB\BSON\Binary::TYPE_COLUMN`**
Дані стовпця. Підтип використовується для колекцій часових рядів.

**`MongoDB\BSON\Binary::TYPE_USER_DEFINED`**
Користувальницький тип. У той час як типи з 0 по 127 визначені,
або зарезервовані, типи з 128 по 255 можуть використовуватися для чого
завгодно.

## Список змін

[TABLE]

## Зміст

- [MongoDB\BSON\Binary::\_\_construct](mongodb-bson-binary.construct.md)
- Створює новий Binary
- [MongoDB\BSON\Binary::getData](mongodb-bson-binary.getdata.md) -
Повертає дані Binary
- [MongoDB\BSON\Binary::getType](mongodb-bson-binary.gettype.md) -
Повертає тип Binary
- [MongoDB\BSON\Binary::jsonSerialize](mongodb-bson-binary.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\Binary::serialize](mongodb-bson-binary.serialize.md)
- Серіалізує Binary
- [MongoDB\BSON\Binary::\_\_toString](mongodb-bson-binary.tostring.md)
- Повертає дані Binary
- [MongoDB\BSON\Binary::unserialize](mongodb-bson-binary.unserialize.md)
- Десеріалізує Binary
