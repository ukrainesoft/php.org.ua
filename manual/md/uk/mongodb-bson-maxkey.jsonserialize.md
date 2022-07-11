- [«
MongoDB\BSON\MaxKey::\_\_construct](mongodb-bson-maxkey.construct.md)
- [MongoDB\BSON\MaxKey::serialize
»](mongodb-bson-maxkey.serialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\MaxKey](class.mongodb-bson-maxkey.md)
- Повертає уявлення, яке можна перетворити на JSON

# MongoDB\BSON\MaxKey::jsonSerialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\MaxKey::jsonSerialize — Повертає уявлення, яке
можна перетворити на JSON

### Опис

final public **MongoDB\BSON\MaxKey::jsonSerialize**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає дані, які можуть бути серіалізовані за допомогою
[json_encode()](function.json-encode.md) для створення розширеного
JSON-вистави
[MongoDB\BSON\MaxKey](class.mongodb-bson-maxkey.md).

> **Примітка**: Висновок відповідає висновку функції
> [MongoDB\BSON oJSON()](function.mongodb.bson-tojson.md), яка
> використовує успадкований, специфічний для драйвера, розширений
> формат JSON. Він не обов'язково буде підходити під
> [» relaxed](https://github.com/mongodb/specifications/blob/master/source/extended-json.rst#relaxed-extended-json-example)
> або
> [» canonical](https://github.com/mongodb/specifications/blob/master/source/extended-json.rst#canonical-extended-json-example)
> уявлення розширеного JSON, що використовуються в
> [MongoDB\BSON oRelaxedExtendedJSON()](function.mongodb.bson-torelaxedextendedjson.md)
> і
> [MongoDB\BSON oCanonicalExtendedJSON()](function.mongodb.bson-tocanonicalextendedjson.md),
> відповідно.

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
