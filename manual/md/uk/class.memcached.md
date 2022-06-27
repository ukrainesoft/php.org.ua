- [«Підтримка сесій](memcached.sessions.md)
- [Memcached::add »](memcached.add.md)

- [PHP Manual](index.md)
- [Memcached](book.memcached.md)
- Клас Memcached

# Клас Memcached

(PECL memcached \>u003d 0.1.0)

## Вступ

Представляє підключення до набору серверів memcached.

## Огляд класів

class **Memcached** {

public [\_\_construct](memcached.construct.md)(string `$persistent_id`
u003d?)

public [add](memcached.add.md)(string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$expiration` u003d ?): bool

public [addByKey](memcached.addbykey.md)(
string `$server_key`,
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
int `$expiration` u003d ?
): bool

public [addServer](memcached.addserver.md)(string `$host`, int
`$port`, int `$weight` u003d 0): bool

public [addServers](memcached.addservers.md)(array `$servers`): bool

public [append](memcached.append.md)(string `$key`, string `$value`):
bool

public [appendByKey](memcached.appendbykey.md)(string `$server_key`,
string `$key`, string `$value`): bool

public [cas](memcached.cas.md)(
float `$cas_token`,
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
int `$expiration` u003d ?
): bool

public [casByKey](memcached.casbykey.md)(
float `$cas_token`,
string `$server_key`,
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
int `$expiration` u003d ?
): bool

public [decrement](memcached.decrement.md)(
string `$key`,
int `$offset` u003d 1,
int `$initial_value` u003d 0,
int `$expiry` u003d 0
): int\|false

public [decrementByKey](memcached.decrementbykey.md)(
string `$server_key`,
string `$key`,
int `$offset` u003d 1,
int `$initial_value` u003d 0,
int `$expiry` u003d 0
): int\|false

public [delete](memcached.delete.md)(string `$key`, int `$time` u003d 0):
bool

public [deleteByKey](memcached.deletebykey.md)(string `$server_key`,
string `$key`, int `$time` u003d 0): bool

public [deleteMulti](memcached.deletemulti.md)(array `$keys`, int
`$time` u003d 0): array

public [deleteMultiByKey](memcached.deletemultibykey.md)(string
`$server_key`, array `$keys`, int `$time` u003d 0): bool

public [fetch](memcached.fetch.md)(): array

public [fetchAll](memcached.fetchall.md)(): array\|false

public [flush](memcached.flush.md)(int `$delay` u003d 0): bool

public [get](memcached.get.md)(string `$key`,
[callable](language.types.callable.md) `$cache_cb` u003d ?, int `$flags` u003d
?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getAllKeys](memcached.getallkeys.md)(): array\|false

public [getByKey](memcached.getbykey.md)(
string `$server_key`,
string `$key`,
[callable](language.types.callable.md) `$cache_cb` u003d ?,
int `$flags` u003d ?
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getDelayed](memcached.getdelayed.md)(array `$keys`, bool
`$with_cas` u003d ?, [callable](language.types.callable.md) `$value_cb` u003d
?): bool

public [getDelayedByKey](memcached.getdelayedbykey.md)(
string `$server_key`,
array `$keys`,
bool `$with_cas` u003d ?,
[callable](language.types.callable.md) `$value_cb` u003d ?
): bool

public [getMulti](memcached.getmulti.md)(array `$keys`, int `$flags` u003d
?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getMultiByKey](memcached.getmultibykey.md)(string
`$server_key`, array `$keys`, int `$flags` u003d ?): array\|false

public [getOption](memcached.getoption.md)(int `$option`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getResultCode](memcached.getresultcode.md)(): int

public [getResultMessage](memcached.getresultmessage.md)(): string

public [getServerByKey](memcached.getserverbykey.md)(string
`$server_key`): array

public [getServerList](memcached.getserverlist.md)(): array

public [getStats](memcached.getstats.md)(): array\|false

public [getVersion](memcached.getversion.md)(): array

public [increment](memcached.increment.md)(
string `$key`,
int `$offset` u003d 1,
int `$initial_value` u003d 0,
int `$expiry` u003d 0
): int\|false

public [incrementByKey](memcached.incrementbykey.md)(
string `$server_key`,
string `$key`,
int `$offset` u003d 1,
int `$initial_value` u003d 0,
int `$expiry` u003d 0
): int\|false

public [isPersistent](memcached.ispersistent.md)(): bool

public [isPristine](memcached.ispristine.md)(): bool

public [prepend](memcached.prepend.md)(string `$key`, string
`$value`): bool

public [prependByKey](memcached.prependbykey.md)(string `$server_key`,
string `$key`, string `$value`): bool

public [quit](memcached.quit.md)(): bool

public [replace](memcached.replace.md)(string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$expiration` u003d ?): bool

public [replaceByKey](memcached.replacebykey.md)(
string `$server_key`,
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
int `$expiration` u003d ?
): bool

public [resetServerList](memcached.resetserverlist.md)(): bool

public [set](memcached.set.md)(string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$expiration` u003d ?): bool

public [setByKey](memcached.setbykey.md)(
string `$server_key`,
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
int `$expiration` u003d ?
): bool

public [setMulti](memcached.setmulti.md)(array `$items`, int
`$expiration` u003d ?): bool

public [setMultiByKey](memcached.setmultibykey.md)(string
`$server_key`, array `$items`, int `$expiration` u003d ?): bool

public [setOption](memcached.setoption.md)(int `$option`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

public [setOptions](memcached.setoptions.md)(array `$options`): bool

public [setSaslAuthData](memcached.setsaslauthdata.md)(string
`$username`, string `$password`): void

public [touch](memcached.touch.md)(string `$key`, int `$expiration`):
bool

public [touchByKey](memcached.touchbykey.md)(string `$server_key`,
string `$key`, int `$expiration`): bool

}

## Зміст

- [Memcached::add](memcached.add.md) — Додає елемент із новим
ключем
- [Memcached::addByKey](memcached.addbykey.md) — Додає новий
елемент на заданий сервер
- [Memcached::addServer](memcached.addserver.md) — Додає сервер
в пул
- [Memcached::addServers](memcached.addservers.md) — Додає
кілька серверів у пул
- [Memcached::append](memcached.append.md) — Додає дані до
існуючого запису
- [Memcached::appendByKey](memcached.appendbykey.md) — Додає
дані до існуючого запису на заданому сервері
- [Memcached::cas](memcached.cas.md) — Порівнює та встановлює
значення для запису
- [Memcached::casByKey](memcached.casbykey.md) — Порівнює та
встановлює значення для запису на конкретному сервері
- [Memcached::\_\_construct](memcached.construct.md) - Створює
екземпляр класу Memcached
- [Memcached::decrement](memcached.decrement.md) — Зменшує
числове значення запису
- [Memcached::decrementByKey](memcached.decrementbykey.md) -
Зменшує числове значення запису, що зберігається на певному
сервері
- [Memcached::delete](memcached.delete.md) — Видалення запису
- [Memcached::deleteByKey](memcached.deletebykey.md) — Видаляє
запис із зазначеного сервера
- [Memcached::deleteMulti](memcached.deletemulti.md) — Видаляє
кілька записів
- [Memcached::deleteMultiByKey](memcached.deletemultibykey.md) -
Видаляє кілька записів із вказаного сервера
- [Memcached::fetch](memcached.fetch.md) — Витягує наступний
результат
- [Memcached::fetchAll](memcached.fetchall.md) — Витягує все
отримані записи
- [Memcached::flush](memcached.flush.md) — Анулює всі записи в
кеші
- [Memcached::get](memcached.get.md) — Отримання запису
- [Memcached::getAllKeys](memcached.getallkeys.md) — Отримує все
ключі, що зберігаються на серверах
- [Memcached::getByKey](memcached.getbykey.md) — Отримує запис з
певного сервера
- [Memcached::getDelayed](memcached.getdelayed.md) — Запитує
кілька записів
- [Memcached::getDelayedByKey](memcached.getdelayedbykey.md) -
Запитує кілька записів із вказаного сервера
- [Memcached::getMulti](memcached.getmulti.md) — Отримує декілька
записів
- [Memcached::getMultiByKey](memcached.getmultibykey.md) — Отримує
кілька записів із вказаного сервера
- [Memcached::getOption](memcached.getoption.md) — Отримує значення
Memcached параметр
- [Memcached::getResultCode](memcached.getresultcode.md)
Повертає результуючий код останньої виконаної операції
- [Memcached::getResultMessage](memcached.getresultmessage.md) -
Повертає повідомлення, що описує результат виконання останньої
операції
- [Memcached::getServerByKey](memcached.getserverbykey.md) -
Отримує інформацію про сервер по ключу
- [Memcached::getServerList](memcached.getserverlist.md) — Отримує
список серверів у пулі
- [Memcached::getStats](memcached.getstats.md) — Отримує статистику
про сервери в пулі
- [Memcached::getVersion](memcached.getversion.md) — Отримує
інформацію про версію серверів у пулі
- [Memcached::increment](memcached.increment.md) — Збільшує
числове значення запису
- [Memcached::incrementByKey](memcached.incrementbykey.md) -
Збільшує числове значення запису, що зберігається на вказаному сервері
- [Memcached::isPersistent](memcached.ispersistent.md) — Перевіряє
чи використовується стійке з'єднання з сервером memcache
- [Memcached::isPristine](memcached.ispristine.md) — Перевіряє
чи вже створено екземпляр класу Memcached
- [Memcached::prepend](memcached.prepend.md) — Додає дані до
початок існуючого запису
- [Memcached::prependByKey](memcached.prependbykey.md) — Додає
дані на початок існуючого запису на вказаному сервері
- [Memcached::quit](memcached.quit.md) — Закриває всі відкриті
з'єднання
- [Memcached::replace](memcached.replace.md) — Замінює наявну
запис із зазначеним ключем
- [Memcached::replaceByKey](memcached.replacebykey.md) — Замінює
існуючий запис із заданим ключем на вказаному сервері
- [Memcached::resetServerList](memcached.resetserverlist.md)
Очищає список серверів
- [Memcached::set](memcached.set.md) — Зберігає запис
- [Memcached::setByKey](memcached.setbykey.md) — Зберігає запис на
вказаному сервері
- [Memcached::setMulti](memcached.setmulti.md) — Зберігає кілька
записів
- [Memcached::setMultiByKey](memcached.setmultibykey.md) — Зберігає
кілька записів на вказаному сервері
- [Memcached::setOption](memcached.setoption.md) — Встановлює
значення параметра для Memcached
- [Memcached::setOptions](memcached.setoptions.md) — Встановлює
кілька Memcached параметрів
- [Memcached::setSaslAuthData](memcached.setsaslauthdata.md)
Встановлює облікові дані для автентифікації
- [Memcached::touch](memcached.touch.md) — Встановлює новий термін
зберігання для запису
- [Memcached::touchByKey](memcached.touchbykey.md) — Встановлює
новий термін зберігання для запису на вказаному сервері
