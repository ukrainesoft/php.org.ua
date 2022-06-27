- [« Memcached::addServer](memcached.addserver.md)
- [Memcached::append »](memcached.append.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Додає кілька серверів у пул

# Memcached::addServers

(PECL memcached \>u003d 0.1.1)

Memcached::addServers — Додає кілька серверів у пул

### Опис

public **Memcached::addServers**(array `$servers`): bool

**Memcached::addServers()** додає сервери, вказані в масиві
`servers`, до загального пулу. Кожен елемент масиву `servers` представляє
собою масив, що містить ім'я хоста, порт і, необов'язково, ваговий
коефіцієнт сервера З'єднання з серверами не встановлюється.

Один і той самий сервер може зустрічатися в пулі кілька разів, тому що
жодних перевірок на дублювання входжень немає. Але це не є доцільним;
натомість потрібно використовувати параметр `weight` для підвищення
пріоритету сервера.

### Список параметрів

`array`
Масив із серверами для додавання в пул.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Memcached::addServers()****

` <?php$m u003d new Memcached();$serversu003du003darray(    array('mem1.domain.com', 11211, 33),    array('mem2.domain.com', 117) ->addServers($servers);?> `

### Дивіться також

- [Memcached::addServer()](memcached.addserver.md) - Додає
сервер у пул
- [Memcached::resetServerList()](memcached.resetserverlist.md) -
Очищає список серверів
