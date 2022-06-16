- [«
MongoDB\Driver\ReadPreference::getMaxStalenessSeconds](mongodb-driver-readpreference.getmaxstalenessseconds.md)
- [MongoDB\Driver\ReadPreference::getModeString
»](mongodb-driver-readpreference.getmodestring.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- Повертає параметр "mode" ReadPreference

# MongoDB\Driver\ReadPreference::getMode

(mongodb \>u003d1.0.0)

MongoDB\Driver\ReadPreference::getMode — Повертає параметр "mode"
ReadPreference

### Опис

final public **MongoDB\Driver\ReadPreference::getMode**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає параметр "mode" ReadPreference

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\ReadPreference::getMode()****

` <?php$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::RP_PRIMARY);var_dump($rp->getMode());$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ ::RP_PRIMARY_PREFERRED);var_dump($rp->getMode());$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::RP_SECONDARY);var_dump($rp->getMode());$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::RP_SECONDARY_PREFERRED);var_dump($rp->getMode());$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference:;RP $rp->getMode());?> `

Результат виконання цього прикладу:

int(1)
int(5)
int(2)
int(6)
int(10)

### Дивіться також

- [MongoDB\Driver\ReadPreference::getModeString()](mongodb-driver-readpreference.getmodestring.md) -
Повертає опцію "mode" об'єкта ReadPreference у вигляді рядка
- [»Керівництво за перевагою
читання](https://www.mongodb.com/docs/manual/core/read-preference/)
