- [« Memcached::appendByKey](memcached.appendbykey.md)
- [Memcached::casByKey »](memcached.casbykey.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Порівнює та встановлює значення для запису

# Memcached::cas

(PECL memcached \>u003d 0.1.0)

Memcached::cas — Порівнює та встановлює значення для запису

### Опис

public **Memcached::cas**(
float `$cas_token`,
string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
int `$expiration` u003d ?
): bool

**Memcached::cas()** здійснює перевірку та встановлення значення запису,
нове значення буде збережено, тільки якщо інші клієнти не оновили
його від часу останнього звернення цим клієнтом. Ця перевірка
здійснюється за допомогою параметра `cas_token`, який представляє
собою 64-бітне значення присвоєне існуючому запису сервером
memcache. Зверніться до документації методу **Memcached::get\*()**,
який використовується для одержання цього токена. Зверніть увагу, що
токен представлений у вигляді числа подвійної точності через обмеження
діапазону значень цілого типу в PHP.

### Список параметрів

`cas_token`
Унікальне значення, пов'язане з наявним записом. Генерується
сервером memcache.

`key`
Ключ, під яким зберігається значення.

`value`
Значення, що зберігається.

`expiration`
Час зберігання об'єкта за промовчанням дорівнює 0. Для більш докладної
інформації дивіться [Час зберігання об'єкта](memcached.expiration.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Метод
[Memcached::getResultCode()](memcached.getresultcode.md) повертає
**`Memcached::RES_DATA_EXISTS`** якщо запис який ви намагаєтесь
зберегти було змінено з моменту останнього звернення.

### Приклади

**Приклад #1 Приклад використання **Memcached::cas()****

`<?php$m u003d new Memcached();$m->addServer('localhost', 11211);do {    /* fetch IP list and its token */     $ip null, $cas); /* if list doesn't exist yet, create it and do       an atomic add which will fail if someone else already added it */    if ($m->getResultCode() u003du003d Memcached::RES_NOTFOUND) {        $ips u003d array( $_SERVER['REMOTE_ADDR']); $m->add('ip_block', $ips); /* otherwise, add IP to the list and store via compare-and-swap       with the token, which will fail if someone else updated the list */    } else {        $ips[] u003d $_SERVER['REMOTE_ADDR']; $m->cas($cas, 'ip_block', $ips); }} while ($m->getResultCode() !u003d Memcached::RES_SUCCESS);?> `

### Дивіться також

- [Memcached::casByKey()](memcached.casbykey.md) - Порівнює та
встановлює значення для запису на конкретному сервері
