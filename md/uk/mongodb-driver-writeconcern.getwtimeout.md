- [«
MongoDB\Driver\WriteConcern::getW](mongodb-driver-writeconcern.getw.md)
- [MongoDB\Driver\WriteConcern::isDefault
»](mongodb-driver-writeconcern.isdefault.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- Повертає опцію "wtimeout" WriteConcern

# MongoDB\Driver\WriteConcern::getWtimeout

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteConcern::getWtimeout — Повертає опцію "wtimeout"
WriteConcern

### Опис

final public **MongoDB\Driver\WriteConcern::getWtimeout**():
int\|[MongoDB\BSON\Int64](class.mongodb-bson-int64.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає опцію "wtimeout" WriteConcern.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------|
| PECL mongodb 1.7.0 | У 32-розрядних системах цей метод повертатиме екземпляр [MongoDB\BSON\Int64](class.mongodb-bson-int64.md), якщо об'єкт WriteConcern був створений з `wTimeout`, що перевищує 32-розрядний діапазон. У 64-розрядних системах цей метод завжди повертає ціле значення. |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteConcern::getWtimeout()****

` <?php$wc u003d new MongoDB\Driver\WriteConcern(1);var_dump($wc->getWtimeout());$wc u003d new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern:;MA var_dump($wc->getWtimeout());?> `

Результат виконання цього прикладу:

int(0)
int(3000)

### Дивіться також

- [»Керівництво по гарантії
запису](https://www.mongodb.com/docs/manual/reference/write-concern/)
