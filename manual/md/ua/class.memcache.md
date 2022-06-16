- [« Базове використання](memcache.examples-overview.md)
- [Memcache::add »](memcache.add.md)

- [PHP Manual](index.md)
- [Memcache](book.memcache.md)
- Клас Memcache

# Клас Memcache

(PECL memcache \>u003d 0.2.0)

## Вступ

Надає підключення до набору серверів memcache.

## Огляд класів

class **Memcache** {

[add](memcache.add.md)(
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$var`,
int `$flag` u003d ?,
int `$expire` u003d ?
): bool

[addServer](memcache.addserver.md)(
string `$host`,
int `$port` u003d 11211,
bool `$persistent` u003d ?,
int `$weight` u003d ?,
int `$timeout` u003d ?,
int `$retry_interval` u003d ?,
bool `$status` u003d ?,
[callable](language.types.callable.md) `$failure_callback` u003d ?,
int `$timeoutms` u003d ?
): bool

[close](memcache.close.md)(): bool

[connect](memcache.connect.md)(string `$host`, int `$port` u003d ?, int
`$timeout` u003d ?): bool

[decrement](memcache.decrement.md)(string `$key`, int `$value` u003d 1):
int\|false

[delete](memcache.delete.md)(string `$key`, int `$timeout` u003d 0): bool

[flush](memcache.flush.md)(): bool

[get](memcache.get.md)(string `$key`, int `&$flags` u003d ?): string

[getExtendedStats](memcache.getextendedstats.md)(string `$type` u003d ?,
int `$slabid` u003d ?, int `$limit` u003d 100): array

[getServerStatus](memcache.getserverstatus.md)(string `$host`, int
`$port` u003d 11211): int

[getStats](memcache.getstats.md)(string `$type` u003d ?, int `$slabid` u003d
?, int `$limit` u003d 100): array\|false

[getVersion](memcache.getversion.md)(): string\|false

[increment](memcache.increment.md)(string `$key`, int `$value` u003d 1):
int\|false

[pconnect](memcache.pconnect.md)(string `$host`, int `$port` u003d ?, int
$timeout u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

[replace](memcache.replace.md)(
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$var`,
int `$flag` u003d ?,
int `$expire` u003d ?
): bool

[set](memcache.set.md)(
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$var`,
int `$flag` u003d ?,
int `$expire` u003d ?
): bool

[setCompressThreshold](memcache.setcompressthreshold.md)(int
`$threshold`, float `$min_savings` u003d ?): bool

[setServerParams](memcache.setserverparams.md)(
string `$host`,
int `$port` u003d 11211,
int `$timeout` u003d ?,
int `$retry_interval` u003d **`false`**,
bool `$status` u003d ?,
[callable](language.types.callable.md) `$failure_callback` u003d ?
): bool

}

## Зміст

- [Memcache::add](memcache.add.md) — Додати елемент із зазначеним
ключем
- [Memcache::addServer](memcache.addserver.md) — Додає сервер
memcached в пул з'єднань
- [Memcache::close](memcache.close.md) — Закрити з'єднання з
сервером memcached
- [Memcache::connect](memcache.connect.md) — Відкриває з'єднання з
сервером memcached
- [Memcache::decrement](memcache.decrement.md) — Декрементувати
значення елемента
- [Memcache::delete](memcache.delete.md) — Видалити елемент із сервера
- [Memcache::flush](memcache.flush.md) — Скинути всі існуючі
елементи на сервері
- [Memcache::get](memcache.get.md) — Вийняти елемент із сервера
- [Memcache::getExtendedStats](memcache.getextendedstats.md) -
Отримати статистику з усіх серверів у пулі
- [Memcache::getServerStatus](memcache.getserverstatus.md) -
Повертає статус сервера
- [Memcache::getStats](memcache.getstats.md) — Отримати статистику
сервера
- [Memcache::getVersion](memcache.getversion.md) — Повернути версію
сервера
- [Memcache::increment](memcache.increment.md) — Збільшити значення
елемента
- [Memcache::pconnect](memcache.pconnect.md) — Відкриває постійне
з'єднання з сервером memcached
- [Memcache::replace](memcache.replace.md) — Замінити значення
існуючого елемента
- [Memcache::set](memcache.set.md) — Зберегти дані на сервері
- [Memcache::setCompressThreshold](memcache.setcompressthreshold.md)
— Увімкнути автоматичний стиск для великих значень
- [Memcache::setServerParams](memcache.setserverparams.md) -
Змінює параметри сервера та статус під час виконання
