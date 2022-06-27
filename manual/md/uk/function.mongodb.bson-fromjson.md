- [« Функції](ref.bson.functions.md)
- [MongoDB\BSON romPHP »](function.mongodb.bson-fromphp.md)

- [PHP Manual](index.md)
- [Функції](ref.bson.functions.md)
- Повертає уявлення BSON значення JSON

# MongoDB\BSON romJSON

(mongodb \>u003d1.0.0)

MongoDB\BSON romJSON — Повертає уявлення BSON значення JSON

### Опис

**MongoDB\BSON romJSON**(string `$json`): string

Перетворює рядок [» Extended
JSON](https://www.mongodb.com/docs/manual/reference/mongodb-extended-json/)
у її уявлення BSON.

### Список параметрів

`json` (string)
Значення JSON для перетворення.

### Значення, що повертаються

Серіалізований документ BSON як двійковий рядок.

### Помилки

- Видає
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md),
якщо значення JSON не може бути перетворено на BSON (наприклад,
через синтаксичну помилку).

### Приклади

**Приклад #1 Приклад використання **MongoDB\BSON romJSON()****

` <?php$json u003d '{ "_id": { "$oid": "563143b280d2387c91807965" } }';$bson u003d MongoDB\BSON romJSON($json);$ue var_dump($value);?> `

Результат виконання цього прикладу:

object(stdClass)#2 (1) {
["_id"]u003d>
object(MongoDB\BSON\ObjectId)#1 (1) {
["oid"]u003d>
string(24) "563143b280d2387c91807965"
}
}

### Дивіться також

- [MongoDB\BSON oJSON()](function.mongodb.bson-tojson.md) -
Повертає Legacy Extended JSON подання значення BSON
- [» MongoDB Extended
JSON](https://www.mongodb.com/docs/manual/reference/mongodb-extended-json/)
- [» MongoDB
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
