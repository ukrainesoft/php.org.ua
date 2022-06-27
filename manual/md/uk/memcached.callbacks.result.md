- [« Функції зворотного дзвінка](memcached.callbacks.md)
- [Функції зворотного виклику наскрізного читання кеша
»](memcached.callbacks.read-through.md)

- [PHP Manual](index.md)
- [Функції зворотного дзвінка](memcached.callbacks.md)
- Функції зворотного дзвінка для результуючого набору

## Функції зворотного виклику для результуючого набору

[callable](language.types.callable.md) для результуючого набору
викликаються методами [Memcached::getDelayed()](memcached.getdelayed.md)
або [Memcached::getDelayedBykey()](memcached.getdelayedbykey.md) для
кожного елемента із результуючого набору. Функція зворотного виклику
передаються об'єкт Memcached та масив з інформацією про елемент. Ці
функції нічого не повинні повертати.

**Приклад #1 Приклад функції зворотного дзвінка**

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$items u003d array(    'key1' u003d> 'value1',    'key'  ' u003d> 'value3');$m->setMulti($items);$m->getDelayed(array('key1', 'key3'), true, 'result_cb');function result_cb($memc, $item ){   var_dump($item);}?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
["key"]u003d>
string(4) "key1"
["value"]u003d>
string(6) "value1"
["cas"]u003d>
float(49)
}
array(3) {
["key"]u003d>
string(4) "key3"
["value"]u003d>
string(6) "value3"
["cas"]u003d>
float(50)
}
