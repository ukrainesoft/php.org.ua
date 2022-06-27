- [«
MongoDB\BSON\Javascript::getScope](mongodb-bson-javascript.getscope.md)
- [MongoDB\BSON\Javascript::serialize
»](mongodb-bson-javascript.serialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md)
- Повертає уявлення, яке може бути перетворено на JSON

# MongoDB\BSON\Javascript::jsonSerialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\Javascript::jsonSerialize — Повертає виставу,
яке може бути перетворено на JSON

### Опис

final public **MongoDB\BSON\Javascript::jsonSerialize**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає дані, які можуть бути серіалізовані
[json_encode()](function.json-encode.md) для створення
JSON-вистави
[MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md).

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
- [» Розширений JSON
MongoDB](https://www.mongodb.com/docs/manual/reference/mongodb-extended-json/)
