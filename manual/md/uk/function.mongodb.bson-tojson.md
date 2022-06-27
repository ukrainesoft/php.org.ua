- [«
MongoDB\BSON oCanonicalExtendedJSON](function.mongodb.bson-tocanonicalextendedjson.md)
- [MongoDB\BSON oPHP »](function.mongodb.bson-tophp.md)

- [PHP Manual](index.md)
- [Функції](ref.bson.functions.md)
- Повертає Legacy Extended JSON подання значення BSON

# MongoDB\BSON oJSON

(mongodb \>u003d1.0.0)

MongoDB\BSON oJSON — Повертає Legacy Extended JSON представлення
значення BSON

### Опис

**MongoDB\BSON oJSON**(string `$bson`): string

Перетворює рядок BSON на його [» Legacy Extended
JSON](https://www.mongodb.com/docs/manual/reference/mongodb-extended-json/)
уявлення.

> **Примітка**: Існує кілька форматів JSON для представлення
> BSON. Ця функція реалізує "суворий режим", визначений у [» MongoDB
> Extended
> JSON](https://www.mongodb.com/docs/manual/reference/mongodb-extended-json/),
> який був замінений канонічними та спрощеними форматами,
> визначеними в [» Специфікації Extended
> JSON](https://github.com/mongodb/specifications/blob/master/source/extended-json.rst)
> та реалізованими
> [MongoDB\BSON oCanonicalExtendedJSON()](function.mongodb.bson-tocanonicalextendedjson.md)
> і
> [MongoDB\BSON oRelaxedExtendedJSON()](function.mongodb.bson-torelaxedextendedjson.md)
> відповідно.

**Увага**

[»JSON](http://www.json.org/) не підтримує
[**`NAN`**](language.types.float.md#language.types.float.nan) та
[**`INF`**](function.is-infinite.md), а формат Legacy Extended JSON
MongoDB не визначає альтернативне уявлення для цих значень
([»libbson](https://github.com/mongodb/mongo-c-driver/tree/master/src/libbson)
буде виводити літерали `nan` та `inf`, які можуть не розпізнатися,
як коректний JSON). Якщо ви працюєте з BSON, який може містити
нескінченні числа, використовуйте
[MongoDB\BSON oCanonicalExtendedJSON()](function.mongodb.bson-tocanonicalextendedjson.md)
або
[MongoDB\BSON oRelaxedExtendedJSON()](function.mongodb.bson-torelaxedextendedjson.md).

### Список параметрів

`bson` (string)
Значення BSON для перетворення.

### Значення, що повертаються

Перетворене значення JSON.

### Помилки

- Виняток
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md)
викидається, якщо вхідні дані не є рівно одним
документом BSON. Можливі причини включають, але не обмежені
некоректним BSON, зайвими даними або несподіваною помилкою
[» libbson](https://github.com/mongodb/mongo-c-driver/tree/master/src/libbson).

### Приклади

**Приклад #1 Приклад використання **MongoDB\BSON oJSON()****

`<?php$documents u003d [    [ 'null' u003d> null ],   [ 'boolean' u003d> true ],    [ 'string' u003d> 'foo'   u003d> 4294967295 ],    [ 'double' u003d> 1.0, ],    [ 'nan' u003d> NAN ],    [ 'pos_inf' u003d> INF ],    [ 'neg_inf' u003d> -INF ],    [ 'array' u003d> [ 'foo', 'bar' ]],    [ 'document' u003d> [ 'foo' u003d> 'bar' ]],   [ 'oid' u003d> new MongoDB\BSON\ObjectId('   c| ' u003d> new MongoDB\BSON\Decimal128('1234.5678') ],   [ 'binary' u003d> new MongoDB\BSON\Binary('foo', MongoDB\BSON\'   new MongoDB\BSON\UTCDateTime(1445990400000) ],   [ 'timestamp' u003d> new MongoDB\BSON\Timestamp(1234, 5678) ] '' ) ],    [ 'code' u003d> new MongoDB\BSON\Javascript('function() { return 1; }') ],    [ 'code_ws' u003d> new }', ['a' u003d> 1]) ],   [ 'minkey' u003d> new MongoDB\BSON\MinKey ],   [ 'maxkey' u003d> new MongoDB\BSON$$$ do cument) {   $bson u003d MongoDB\BSON romPHP($document); echo MongoDB\BSON oJSON($bson), "
";}?> `

Результат виконання цього прикладу:

{ "null" : null }
{ "boolean" : true }
{ "string" : "foo" }
{ "int32" : 123 }
{ "int64" : 4294967295 }
{ "double" : 1.0 }
{ "nan" : nan }
{ "pos_inf" : inf }
{ "neg_inf" : -inf }
{ "array" : [ "foo", "bar" ] }
{ "document" : { "foo" : "bar" } }
{ "oid" : { "$oid" : "56315a7c6118fd1b920270b1" } }
{ "dec128" : { "$numberDecimal" : "1234.5678" } }
{ "binary" : { "$binary" : "Zm9v", "$type" : "00" } }
{ "date" : { "$date" : 1445990400000 } }
{ "timestamp" : { "$timestamp" : { "t" : 5678, "i" : 1234 } } }
{ "regex" : { "$regex" : "pattern", "$options" : "i" } }
{ "code" : { "$code" : "function() { return 1; }" } }
{ "code_ws" : { "$code" : "function() { return a; }", "$scope" : { "a" : 1 } } }
{ "minkey" : { "$minKey" : 1 } }
{ "maxkey" : { "$maxKey" : 1 } }

### Дивіться також

- [MongoDB\BSON romJSON()](function.mongodb.bson-fromjson.md) -
Повертає уявлення BSON значення JSON
- [MongoDB\BSON oCanonicalExtendedJSON()](function.mongodb.bson-tocanonicalextendedjson.md) -
Повертає Canonical Extended JSON подання для значення BSON
- [MongoDB\BSON oRelaxedExtendedJSON()](function.mongodb.bson-torelaxedextendedjson.md) -
Повертає Relaxed Extended JSON уявлення значення BSON
- [» MongoDB Extended
JSON](https://www.mongodb.com/docs/manual/reference/mongodb-extended-json/)
- [» MongoDB
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
