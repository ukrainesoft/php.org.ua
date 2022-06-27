- [«
MongoDB\Driver\ReadPreference::getMode](mongodb-driver-readpreference.getmode.md)
- [MongoDB\Driver\ReadPreference::getTagSets
»](mongodb-driver-readpreference.gettagsets.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- Повертає опцію "mode" об'єкта ReadPreference у вигляді рядка

# MongoDB\Driver\ReadPreference::getModeString

(mongodb \>u003d1.7.0)

MongoDB\Driver\ReadPreference::getModeString — Повертає опцію "mode"
об'єкта ReadPreference у вигляді рядка

### Опис

final public **MongoDB\Driver\ReadPreference::getModeString**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає опцію "mode" об'єкта ReadPreference у вигляді рядка.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 **Приклад використання
MongoDB\Driver\ReadPreference::getModeString()****

` <?php$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::PRIMARY);var_dump($rp->getModeString());$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\Read ::PRIMARY_PREFERRED);var_dump($rp->getModeString());$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY);var_dump($rp->getModeString());$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY_PREFERRED);var_dump($rp->getModeString());$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::AR $rp->getModeString());?> `

Результат виконання цього прикладу:

string(7) "primary"
string(16) "primaryPreferred"
string(9) "secondary"
string(18) "secondaryPreferred"
string(7) "nearest"

### Дивіться також

- [MongoDB\Driver\ReadPreference::getMode()](mongodb-driver-readpreference.getmode.md) -
Повертає параметр "mode" ReadPreference
- [» Документація з Read
Preference](https://www.mongodb.com/docs/manual/core/read-preference/)
