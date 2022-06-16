- [« Memcached::deleteMultiByKey](memcached.deletemultibykey.md)
- [Memcached::fetchAll »](memcached.fetchall.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Витягує наступний результат

# Memcached::fetch

(PECL memcached \>u003d 0.1.0)

Memcached::fetch — Отримує наступний результат

### Опис

public **Memcached::fetch**(): array

**Memcached::fetch()** отримує наступний результат останнього запиту.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає наступний результат запиту або **`false`** у протилежному
випадку. Метод [Memcached::getResultCode()](memcached.getresultcode.md)
повертає **`Memcached::RES_END`** якщо результуюча вибірка
закінчилася.

### Приклади

**Приклад #1 Приклад використання **Memcached::fetch()****

` <?php$m u003d new Memcached();$m->addServer('localhost', 11211);$m->set('int', 99);$m->set('string', 'a simple string');$m->set('array', array(11, 12));$m->getDelayed(array('int', 'array'), true);while($result u003d $m ->fetch()) {    var_dump($result);}?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
["key"]u003d>
string(3) "int"
"value"]u003d>
int(99)
["cas"]u003d>
float(2363)
}
array(3) {
["key"]u003d>
string(5) "array"
["value"]u003d>
array(2) {
[0]u003d>
int(11)
[1]u003d>
int(12)
}
["cas"]u003d>
float(2365)
}

### Дивіться також

- [Memcached::fetchAll()](memcached.fetchall.md) - Витягує все
отримані записи
- [Memcached::getDelayed()](memcached.getdelayed.md) - Запитує
кілька записів
