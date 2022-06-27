- [« Memcached::setByKey](memcached.setbykey.md)
- [Memcached::setMultiByKey »](memcached.setmultibykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Зберігає кілька записів

# Memcached::setMulti

(PECL memcached \>u003d 0.1.0)

Memcached::setMulti — Зберігає кілька записів

### Опис

public **Memcached::setMulti**(array `$items`, int `$expiration` u003d ?):
bool

**Memcached::setMulti()** схожий на метод
[Memcached::set()](memcached.set.md), але замість однієї пари
ключ/значення, працює з декількома записами, переданими в `items`
вигляді масиву. Параметр `expiration`, що встановлює термін зберігання
запису, застосовується до всіх записів.

### Список параметрів

`items`
Масив пар ключів/значень, що зберігається.

`expiration`
Час зберігання об'єкта за промовчанням дорівнює 0. Для більш докладної
інформації дивіться [Час зберігання об'єкта](memcached.expiration.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Використовуйте за необхідності
[Memcached::getResultCode()](memcached.getresultcode.md).

### Приклади

**Приклад #1 Приклад використання **Memcached::setMulti()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$items u003d array(    'key1' u003d> 'value1',    'key'  ' u003d> 'value3');$m->setMulti($items, time() + 300);?> `

### Дивіться також

- [Memcached::setMultiByKey()](memcached.setmultibykey.md) -
Зберігає кілька записів на вказаному сервері
- [Memcached::set()](memcached.set.md) - Зберігає запис
