- [«
MongoDB\BSON\Int64::\_\_construct](mongodb-bson-int64.construct.md)
- [MongoDB\BSON\Int64::serialize »](mongodb-bson-int64.serialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Int64](class.mongodb-bson-int64.md)
- Повертає уявлення, яке можна перетворити на JSON

# MongoDB\BSON\Int64::jsonSerialize

(mongodb \>u003d1.5.0)

MongoDB\BSON\Int64::jsonSerialize — Повертає уявлення, яке
можна перетворити на JSON

### Опис

final public **MongoDB\BSON\Int64::jsonSerialize**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає дані, які можуть бути серіалізовані за допомогою
[json_encode()](function.json-encode.md) для створення розширеного
JSON-представлення [MongoDB\BSON\Int64](class.mongodb-bson-int64.md).

> **Примітка**: Висновок відповідає функції
> [MongoDB\BSON oCanonicalExtendedJSON()](function.mongodb.bson-tocanonicalextendedjson.md),
> яка використовує
> [» канонічний](https://github.com/mongodb/specifications/blob/master/source/extended-json.rst#canonical-extended-json-example)
> Розширений формат JSON. Це відрізняється від інших класів BSON,
> які використовують застарілий розширений формат JSON для конкретного
> драйвера ([MongoDB\BSON oJSON()](function.mongodb.bson-tojson.md)),
> щоб забезпечити правильне представлення 64-розрядного цілісного
> значення на 32-розрядних платформах.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [JsonSerializable::jsonSerialize()](jsonserializable.jsonserialize.md) -
Задає дані, які мають бути серіалізовані у JSON
- [json_encode()](function.json-encode.md) - Повертає
JSON-подання даних
- [MongoDB\BSON oCanonicalExtendedJSON()](function.mongodb.bson-tocanonicalextendedjson.md) -
Повертає Canonical Extended JSON подання для значення BSON
- [MongoDB\BSON oRelaxedExtendedJSON()](function.mongodb.bson-torelaxedextendedjson.md) -
Повертає Relaxed Extended JSON уявлення значення BSON
- [» MongoDB Extended
JSON](https://www.mongodb.com/docs/manual/reference/mongodb-extended-json/)
