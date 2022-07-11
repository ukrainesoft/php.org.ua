- [«MongoDB\BSON romPHP](function.mongodb.bson-fromphp.md)
- [MongoDB\BSON oJSON »](function.mongodb.bson-tojson.md)

- [PHP Manual](index.md)
- [Функції](ref.bson.functions.md)
- Повертає Canonical Extended JSON подання для значення BSON

# MongoDB\BSON oCanonicalExtendedJSON

(mongodb \>u003d1.3.0)

MongoDB\BSON oCanonicalExtendedJSON — Повертає Canonical Extended
JSON подання для значення BSON

### Опис

**MongoDB\BSON oCanonicalExtendedJSON**(string `$bson`): string

Перетворює рядок BSON на його [» Canonical Extended
JSON](https://github.com/mongodb/specifications/blob/master/source/extended-json.rst#canonical-extended-json-example)
уявлення. Канонічний формат віддає перевагу точності типів за рахунок
короткого виведення та найбільш підходить для створення вихідних даних,
які можуть бути перетворені назад в BSON без будь-якої втрати
інформації про тип (наприклад, числові типи залишаться
диференційованими).

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
**MongoDB\BSON oCanonicalExtendedJSON()****

`<?php$documents u003d [    [ 'null' u003d> null ],   [ 'boolean' u003d> true ],    [ 'string' u003d> 'foo'   u003d> 4294967295 ],    [ 'double' u003d> 1.0, ],    [ 'nan' u003d> NAN ],    [ 'pos_inf' u003d> INF ],    [ 'neg_inf' u003d> -INF ],    [ 'array' u003d> [ 'foo', 'bar' ]],    [ 'document' u003d> [ 'foo' u003d> 'bar' ]],   [ 'oid' u003d> new MongoDB\BSON\ObjectId('   c| ' u003d> new MongoDB\BSON\Decimal128('1234.5678') ],   [ 'binary' u003d> new MongoDB\BSON\Binary('foo', MongoDB\BSON\'   new MongoDB\BSON\UTCDateTime(1445990400000) ],   [ 'timestamp' u003d> new MongoDB\BSON\Timestamp(1234, 5678) ] '' ) ],    [ 'code' u003d> new MongoDB\BSON\Javascript('function() { return 1; }') ],    [ 'code_ws' u003d> new }', ['a' u003d> 1]) ],   [ 'minkey' u003d> new MongoDB\BSON\MinKey ],   [ 'maxkey' u003d> new MongoDB\BSON$$$ do cument) {   $bson u003d MongoDB\BSON romPHP($document); echo MongoDB\BSON oCanonicalExtendedJSON($bson), "
";}?> `

Результат виконання цього прикладу:

{ "null" : null }
{ "boolean" : true }
{ "string" : "foo" }
{ "int32" : { "$numberInt" : "123" } }
{ "int64" : { "$numberLong" : "4294967295"} }
{ "double" : { "$numberDouble" : "1.0" } }
{ "nan" : { "$numberDouble" : "NaN" } }
{ "pos_inf" : { "$numberDouble" : "Infinity" } }
{ "neg_inf" : { "$numberDouble" : "-Infinity" } }
{ "array" : [ "foo", "bar" ] }
{ "document" : { "foo" : "bar" } }
{ "oid" : { "$oid" : "56315a7c6118fd1b920270b1" } }
{ "dec128" : { "$numberDecimal" : "1234.5678" } }
{ "binary" : { "$binary" : { "base64": "Zm9v", "subType" : "00" } } }
{ "date" : { "$date" : { "$numberLong" : "1445990400000" } } }
{ "timestamp" : { "$timestamp" : { "t" : 5678, "i" : 1234 } } }
{ "regex" : { "$regularExpression" : { "pattern" : "pattern", "options" : "i" } } }
{ "code" : { "$code" : "function() { return 1; }" } }
{ "code_ws" : { "$code" : "function() { return a; }", "$scope" : { "a" : { "$numberInt" : "1" } } } }
{ "minkey" : { "$minKey" : 1 } }
{ "maxkey" : { "$maxKey" : 1 } }

### Дивіться також

- [MongoDB\BSON romJSON()](function.mongodb.bson-fromjson.md) -
Повертає уявлення BSON значення JSON
- [MongoDB\BSON oRelaxedExtendedJSON()](function.mongodb.bson-torelaxedextendedjson.md) -
Повертає Relaxed Extended JSON уявлення значення BSON
- [» Специфікація Extended
JSON](https://github.com/mongodb/specifications/blob/master/source/extended-json.rst)
- [» MongoDB
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
