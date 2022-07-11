- [« Memcached::getDelayedByKey](memcached.getdelayedbykey.md)
- [Memcached::getMultiByKey »](memcached.getmultibykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Отримує кілька записів

# Memcached::getMulti

(PECL memcached \>u003d 0.1.0)

Memcached::getMulti — Отримує кілька записів

### Опис

public **Memcached::getMulti**(array `$keys`, int `$flags` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**Memcached::getMulti()** працює аналогічно методу
[Memcached::get()](memcached.get.md), але замість одного запису отримує
кілька, ключі яких були передані в масиві `keys`.

> **Примітка**:
>
> До версії 3.0 використовувався другий аргумент `&cas_tokens`. Він
> заповнювався значеннями токена CAS для знайдених записів. Параметр
> `&cas_tokens` було видалено у версії 3.0. Він був замінений на новий прапор.
> **`Memcached::GET_EXTENDED`**, який вказується у параметрі
> `flags`.

Параметр `flags` може використовуватись для вказівки додаткових
налаштувань для методу **Memcached::getMulti()**. На даний момент
підтримуються лише наступні настройки:
**`Memcached::GET_PRESERVE_ORDER`** гарантує що записи будуть
повернені в тому ж порядку, що були запрошені.
**`Memcached::GET_EXTENDED`** веде до того, що також будуть вилучені
токени CAS.

### Список параметрів

`keys`
Масив ключів для запиту.

`flags`
Прапори для отримання записів.

### Значення, що повертаються

Повертає масив знайдених записів або **`false`** у разі
виникнення помилки. Використовуйте за необхідності
[Memcached::getResultCode()](memcached.getresultcode.md).

### Список змін

| Версія | Опис |
|----------------------|-------------------------- -------------------------------------------------- --------------------------------|
| PECL memcached 3.0.0 | Видалено параметр `&cas_tokens`. Додано константу **`Memcached::GET_EXTENDED`** для повернення токенів CAS. |

### Приклади

**Приклад #1 Приклад використання **Memcached::getMulti()** версії 3**

`<?php// Працює з версією модуля 3$m u003d new Memcached();$m->addServer('localhost', 11211);$items u003d array( val>           > 'value2',   'key3' u003d> 'value3');$m->setMulti($items);$result u003d $m->getMulti(array('key1', 'key3', 'badkey')); var_dump($result);?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
["key1"]u003d>
string(6) "value1"
["key3"]u003d>
string(6) "value3"
}

**Приклад #2 Приклад використання **Memcached::getMulti()** версій 1 та
2**

`<?php// Працює з версіями модуля 1 і 2$m u003d new Memcached();$m->addServer('localhost', 11211);$items u003d1 array(     ' u003d> 'value2',   'key3' u003d> 'value3');$m->setMulti($items);$result u003d $m->getMulti(array('key1', 'key3', 'badkey') , $cas);var_dump($result, $cas);?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
["key1"]u003d>
string(6) "value1"
["key3"]u003d>
string(6) "value3"
}
array(2) {
["key1"]u003d>
float(2360)
["key3"]u003d>
float(2362)
}

**Приклад #3 Приклад використання **`Memcached::GET_PRESERVE_ORDER`** з
версією 3**

`<?php// Працює з версією модуля 3$m u003d new Memcached();$m->addServer('localhost', 11211);$data u003d array(  - ta ' u003d> 'bar-data',   'baz' u003d> 'baz-data',   'lol' u003d> 'lol-data',   'kek' u003d> 'kek-data',);$m-set $data, 3600);$keys u003d array_keys($data);$keys[] u003d 'zoo';$got u003d $m->getMulti($keys, Memcached::GET_PRESERVE_ORDER);foreach ($got > $v) {   echo "$k $v
";}?> `

Результатом виконання цього прикладу буде щось подібне:

foo foo-data
bar bar-data
baz baz-data
lol lol-data
kek kek-data
zoo

**Приклад #4 Приклад використання **`Memcached::GET_PRESERVE_ORDER`** з
версією 1 та 2**

` <?php// Працює з версіями модуля 1 і 2$m u003d new Memcached();$m->addServer('localhost', 11211);$data u003d array(  o'' 'bar' u003d> 'bar-data',    'baz' u003d> 'baz-data',   'lol' u003d> 'lol-data',   ''ekek' u003d> 'kek-data',); setMulti($data, 3600);$null u003d null;$keys u003d array_keys($data);$keys[] u003d 'zoo';$got u003d $m->getMulti($keys, $null, Memcached::E );foreach ($got as $k u003d> $v) {    echo "$k $v
";}?> `

Результатом виконання цього прикладу буде щось подібне:

foo foo-data
bar bar-data
baz baz-data
lol lol-data
kek kek-data
zoo

### Дивіться також

- [Memcached::getMultiByKey()](memcached.getmultibykey.md) -
Отримує кілька записів із вказаного сервера
- [Memcached::get()](memcached.get.md) - Отримання запису
- [Memcached::getDelayed()](memcached.getdelayed.md) - Запитує
кілька записів
