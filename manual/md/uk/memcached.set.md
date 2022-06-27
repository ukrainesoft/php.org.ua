- [« Memcached::resetServerList](memcached.resetserverlist.md)
- [Memcached::setByKey »](memcached.setbykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Зберігає запис

# Memcached::set

(PECL memcached \>u003d 0.1.0)

Memcached::set — Зберігає запис

### Опис

public **Memcached::set**(string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$expiration` u003d ?): bool

**Memcached::set()** зберігає значення `value` на memcache сервері під
вказаним ключем `key`. Параметр `expiration` може бути використаний для
контролю, коли термін дії значення вважається минулим.

Значення може бути будь-яким доступним у PHP типом, крім ресурсу, тому
що цей тип може бути представлений у серіалізованому вигляді. Якщо
встановлено параметр **`Memcached::OPT_COMPRESSION`**, то серіалізоване
значення буде також стиснуто перед збереженням.

### Список параметрів

`key`
Ключ, під яким зберігається значення.

`value`
Значення, що зберігається.

`expiration`
Час зберігання об'єкта за промовчанням дорівнює 0. Для більш докладної
інформації дивіться [Час зберігання об'єкта](memcached.expiration.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Використовуйте за необхідності
[Memcached::getResultCode()](memcached.getresultcode.md).

### Приклади

**Приклад #1 Приклад використання **Memcached::set()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$m->set('int', 99);$m->set('string', 'a simple string '); stdclass, time() + 300);var_dump($m->get('int'));var_dump($m->get('string'));var_dump($m->get('array')) ;var_dump($m->get('object'));?> `

Результатом виконання цього прикладу буде щось подібне:

int(99)
string(15) "a simple string"
array(2) {
[0]u003d>
int(11)
[1]u003d>
int(12)
}
object(stdClass)#1 (0) {
}

### Дивіться також

- [Memcached::setByKey()](memcached.setbykey.md) - Зберігає запис
на вказаному сервері
- [Memcached::add()](memcached.add.md) - Додає елемент із новим
ключем
- [Memcached::replace()](memcached.replace.md) - Замінює
існуючий запис із зазначеним ключем
