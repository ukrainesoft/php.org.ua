- [«MongoDB\BSON oPHP](function.mongodb.bson-tophp.md)
- [MongoDB\BSON\Binary »](class.mongodb-bson-binary.md)

- [PHP Manual](index.md)
- [Функції](ref.bson.functions.md)
- Повертає Relaxed Extended JSON подання значення BSON

# MongoDB\BSON oRelaxedExtendedJSON

(mongodb \>u003d1.3.0)

MongoDB\BSON oRelaxedExtendedJSON — Повертає Relaxed Extended JSON
представлення значення BSON

### Опис

**MongoDB\BSON oRelaxedExtendedJSON**(string `$bson`): string

Перетворює рядок BSON на її уявлення [»Relaxed Extended
JSON](https://github.com/mongodb/specifications/blob/master/source/extended-json.rst#relaxed-extended-json-example).
Розслаблений формат віддає перевагу використанню примітивів типу JSON за
рахунок точності типів і найбільше підходить для отримання вихідних даних,
які можуть бути легко використані веб-API та людьми.

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

**Приклад #1 Приклад використання
**MongoDB\BSON oRelaxedExtendedJSON()****

`<?php$documents u003d [    [ 'null' u003d> null ],   [ 'boolean' u003d> true ],    [ 'string' u003d> 'foo'   u003d> 4294967295 ],    [ 'double' u003d> 1.0, ],    [ 'nan' u003d> NAN ],    [ 'pos_inf' u003d> INF ],    [ 'neg_inf' u003d> -INF ],    [ 'array' u003d> [ 'foo', 'bar' ]],    [ 'document' u003d> [ 'foo' u003d> 'bar' ]],   [ 'oid' u003d> new MongoDB\BSON\ObjectId('   c| ' u003d> new MongoDB\BSON\Decimal128('1234.5678') ],   [ 'binary' u003d> new MongoDB\BSON\Binary('foo', MongoDB\BSON\'   new MongoDB\BSON\UTCDateTime(1445990400000) ],   [ 'timestamp' u003d> new MongoDB\BSON\Timestamp(1234, 5678) ] '' ) ],    [ 'code' u003d> new MongoDB\BSON\Javascript('function() { return 1; }') ],    [ 'code_ws' u003d> new }', ['a' u003d> 1]) ],   [ 'minkey' u003d> new MongoDB\BSON\MinKey ],   [ 'maxkey' u003d> new MongoDB\BSON$$$ do cument) {   $bson u003d MongoDB\BSON romPHP($document); echo MongoDB\BSON oRelaxedExtendedJSON($bson), "
";}?> `

Результат виконання цього прикладу:

{ "null" : null }
{ "boolean" : true }
{ "string" : "foo" }
{ "int32" : 123 }
{ "int64" : 4294967295 }
{ "double" : 1.0 }
{ "nan" : { "$numberDouble" : "NaN" } }
{ "pos_inf" : { "$numberDouble" : "Infinity" } }
{ "neg_inf" : { "$numberDouble" : "-Infinity" } }
{ "array" : [ "foo", "bar" ] }
{ "document" : { "foo" : "bar" } }
{ "oid" : { "$oid" : "56315a7c6118fd1b920270b1" } }
{ "dec128" : { "$numberDecimal" : "1234.5678" } }
{ "binary" : { "$binary" : { "base64": "Zm9v", "subType" : "00" } } }
{ "date" : { "$date" : "2015-10-28T00:00:00Z" } }
{ "timestamp" : { "$timestamp" : { "t" : 5678, "i" : 1234 } } }
{ "regex" : { "$regularExpression" : { "pattern" : "pattern", "options" : "i" } } }
{ "code" : { "$code" : "function() { return 1; }" } }
{ "code_ws" : { "$code" : "function() { return a; }", "$scope" : { "a" : 1 } } }
{ "minkey" : { "$minKey" : 1 } }
{ "maxkey" : { "$maxKey" : 1 } }

### Дивіться також

- [MongoDB\BSON romJSON()](function.mongodb.bson-fromjson.md) -
Повертає уявлення BSON значення JSON
- [MongoDB\BSON oCanonicalExtendedJSON()](function.mongodb.bson-tocanonicalextendedjson.md) -
Повертає Canonical Extended JSON подання для значення BSON
- [» Extended
JSON](https://github.com/mongodb/specifications/blob/master/source/extended-json.rst)
- [» MongoDB
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
