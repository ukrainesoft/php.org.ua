- [«
MongoDB\Driver\ReadPreference::getModeString](mongodb-driver-readpreference.getmodestring.md)
- [MongoDB\Driver\ReadPreference::serialize
»](mongodb-driver-readpreference.serialize.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- Повертає параметр "tagSets" ReadPreference

# MongoDB\Driver\ReadPreference::getTagSets

(mongodb \>u003d1.0.0)

MongoDB\Driver\ReadPreference::getTagSets — Повертає параметр
"tagSets" ReadPreference

### Опис

final public **MongoDB\Driver\ReadPreference::getTagSets**(): array

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає параметр "tagSets" ReadPreference.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\ReadPreference::getTagSets()****

` <?php$mode u003dMongoDB\Driver\ReadPreference::RP_SECONDARY_PREFERRED;/* Як і null, так і порожній масив, позначають, що не будуть встановлені теги */$rp u003d new MongoDB\Driver\ReadPreference($mode, null);var_dump($rp->getTagSets());$rp u003d new MongoDB\Driver\ReadPreference($mode, []);var_dump($rp ->getTagSets());/* Вибрати вузол в Нью-Йорку, але повернутись до любому доступному резервному вузлу. */$rp u003d new MongoDB\Driver\ReadPreference($mode, [['dc' u003d> 'ny']]);var_dump($rp->getTagSets());/* Вибрати вузол в Нью-Йорку, за яким|слід| */$rp u003d new MongoDB\Driver\ReadPreference($mode, [ ['dc' u003d> 'ny'], ['dc' u003d> 'sf', 'use' u003d> 'reporting'],  [] ]);var_dump($rp->getTagSets());?> `

Результат виконання цього прикладу:

array(0) {
}
array(0) {
}
array(2) {
[0]u003d>
array(1) {
["dc"]u003d>
string(2) "ny"
}
[1]u003d>
array(0) {
}
}
array(3) {
[0]u003d>
array(1) {
["dc"]u003d>
string(2) "ny"
}
[1]u003d>
array(2) {
["dc"]u003d>
string(2) "sf"
["use"]u003d>
string(9) "reporting"
}
[2]u003d>
array(0) {
}
}

### Дивіться також

- [» Довідкова інформація за перевагою
читання](https://www.mongodb.com/docs/manual/core/read-preference/)
