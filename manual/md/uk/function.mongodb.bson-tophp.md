- [«MongoDB\BSON oJSON](function.mongodb.bson-tojson.md)
- [MongoDB\BSON oRelaxedExtendedJSON
»](function.mongodb.bson-torelaxedextendedjson.md)

- [PHP Manual](index.md)
- [Функції](ref.bson.functions.md)
- Повертає PHP подання значення BSON

# MongoDB\BSON oPHP

(mongodb \>u003d1.0.0)

MongoDB\BSON oPHP — Повертає PHP уявлення значення BSON

### Опис

**MongoDB\BSON oPHP**(string `$bson`, array `$typeMap` u003d array()):
array\|object

Десеріалізує документ BSON (тобто двійковий рядок) у його подання
PHP. Параметр `typeMap` може використовуватись для керування типами PHP,
використовуваними для перетворення масивів та документів BSON (як
кореневих, так і вбудованих).

**Увага**

Документи BSON технічно можуть містити ключі, що повторюються, оскільки
документи зберігаються у вигляді списку пар ключ-значення; однак додаткам
слід утримуватися від створення документів із дублікатами ключів,
оскільки поведінка сервера та драйвера може бути невизначеною.
Оскільки об'єкти і масиви PHP не можуть мати ключів, що повторюються,
дані також можуть бути втрачені при декодуванні документа BSON з
ключами, що повторюються.

### Список параметрів

`bson` (string)
Значення BSON для десеріалізації.

`typeMap` (array)
[Конфігурація картки
типів](mongodb.persistence.deserialization.md#mongodb.persistence.typemaps).

### Значення, що повертаються

Десеріалізоване значення PHP.

### Помилки

- Видає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо клас у карті типів не може бути створений або не реалізує
[MongoDB\BSON\Unserializable](class.mongodb-bson-unserializable.md).
- Виняток
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md)
викидається, якщо вхідні дані не є рівно одним
документом BSON. Можливі причини включають, але не обмежені
некоректним BSON, зайвими даними або несподіваною помилкою
[» libbson](https://github.com/mongodb/mongo-c-driver/tree/master/src/libbson).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------|
| PECL mongodb 1.4.0 | Якщо вхідні дані містять непідтримуваний застарілий тип BSON, драйвер більше не буде записувати попередження в журнал налагодження, а натомість створить об'єкт, який представляє цей тип. |
| PECL mongodb 1.3.2 | [MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md) більше не видається, якщо вхідні дані містять непідтримуваний, застарілий тип BSON. Такі типи будуть ігноруватися (як вони були у версіях до 1.3.0), хоча драйвер тепер записуватиме попередження в журнал налагодження (дивіться: [mongodb.debug](mongodb.configuration.md#ini.mongodb.debug)). |
| PECL mongodb 1.3.0 | [MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md) видається, якщо вхідні дані містять непідтримуваний, застарілий тип BSON. Раніше такі типи ігнорувалися. |

### Приклади

**Приклад #1 Приклад використання **MongoDB\BSON oPHP()****

` <?php$bsonu003du003dhex2bin('0e00000010666f6f000100000000');$valueu003du003dMongoDB\BSON oPHP($bson);var_dump($value);?> `

Результат виконання цього прикладу:

object(stdClass)#1 (1) {
["foo"]u003d>
int(1)
}

### Дивіться також

- [MongoDB\BSON romPHP()](function.mongodb.bson-fromphp.md) -
Повертає уявлення BSON значення PHP
- [» MongoDB
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
- [Постійні дані](mongodb.persistence.md)
