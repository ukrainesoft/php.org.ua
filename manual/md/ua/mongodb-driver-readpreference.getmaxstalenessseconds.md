- [«
MongoDB\Driver\ReadPreference::getHedge](mongodb-driver-readpreference.gethedge.md)
- [MongoDB\Driver\ReadPreference::getMode
»](mongodb-driver-readpreference.getmode.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- Повертає параметр "maxStalenessSeconds" ReadPreference

# MongoDB\Driver\ReadPreference::getMaxStalenessSeconds

(mongodb \>u003d1.2.0)

MongoDB\Driver\ReadPreference::getMaxStalenessSeconds - Повертає
параметр "maxStalenessSeconds" ReadPreference

### Опис

final public
**MongoDB\Driver\ReadPreference::getMaxStalenessSeconds**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає параметр "maxStalenessSeconds" ReadPreference. Якщо не
вказана максимальна staleness, повертається
**`MongoDB\Driver\ReadPreference::NO_MAX_STALENESS`**.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\ReadPreference::getMaxStalenessSeconds()****

` <?php$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::RP_SECONDARY);var_dump($rp->getMaxStalenessSeconds());$rp u003d new MongoDB\Driver\ReadPreference ::RP_SECONDARY, null, [   'maxStalenessSeconds' u003d> MongoDB\Driver\ReadPreference::NO_MAX_STALENESS,]);var_dump($rp->getMaxStalenessSeconds());$rp M ::RP_SECONDARY, null, [   'maxStalenessSeconds' u003d> MongoDB\Driver\ReadPreference::SMALLEST_MAX_STALENESS_SECONDS,]);var_dump($rp->getMaxStalenessSeconds()\Read ::RP_SECONDARY, null, [    'maxStalenessSeconds' u003d> 1000,]);var_dump($rp->getMaxStalenessSeconds());?> `

Результат виконання цього прикладу:

int(-1)
int(-1)
int(90)
int(1000)

### Дивіться також

- [»Керівництво за перевагою
читання](https://www.mongodb.com/docs/manual/core/read-preference/)
