- [« Memcached::getServerList](memcached.getserverlist.md)
- [Memcached::getVersion »](memcached.getversion.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Отримує статистику про сервери в пулі

# Memcached::getStats

(PECL memcached \>u003d 0.1.0)

Memcached::getStats — Отримує статистику про сервери в пулі

### Опис

public **Memcached::getStats**(): array\|false

**Memcached::getStats()** повертає масив, що містить статистику всіх
доступні memcache сервери. Ознайомтеся також із специфікацією
[» memcache
протоколу](https://github.com/memcached/memcached/blob/master/doc/protocol.txt)
для отримання повної інформації про цю статистику.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Список масивів зі статистикою по кожному серверу, де кожен елемент -
окремий сервер або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcached::getStats()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);print_r($m->getStats());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[localhost:11211] u003d> Array
(
[pid] u003d> 4933
[uptime] u003d> 786123
[threads] u003d> 1
[time] u003d> 1233868010
[pointer_size] u003d> 32
[rusage_user_seconds] u003d> 0
[rusage_user_microseconds] u003d> 140000
[rusage_system_seconds] u003d> 23
[rusage_system_microseconds] u003d> 210000
[curr_items] u003d> 145
[total_items] u003d> 2374
[limit_maxbytes] u003d> 67108864
[curr_connections] u003d> 2
[total_connections] u003d> 151
[connection_structures] u003d> 3
[bytes] u003d> 20345
[cmd_get] u003d> 213343
[cmd_set] u003d> 2381
[get_hits] u003d> 204223
[get_misses] u003d> 9120
[evictions] u003d> 0
[bytes_read] u003d> 9092476
[bytes_written] u003d> 15420512
[version] u003d> 1.2.6
)

)
