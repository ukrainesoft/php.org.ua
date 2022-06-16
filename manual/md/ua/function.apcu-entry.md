- [«apcu_enabled](function.apcu-enabled.md)
- [apcu_exists »](function.apcu-exists.md)

- [PHP Manual](index.md)
- [Функції APCu](ref.apcu.md)
- Автоматичне вилучення або створення запису в кеші

#apcu_entry

(PECL apcu u003d> 5.1.0)

apcu_entry — Автоматичне вилучення або створення запису в кеші

### Опис

**apcu_entry**(string `$key`, [callable](language.types.callable.md)
`$generator`, int `$ttl` u003d 0):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Автоматично намагається знайти запис із заданим ключем `key`. Якщо не
може, викликається генератор `generator` і йому передається ключ `key`
як єдиний аргумент. Згенероване значення заноситься в кеш з
зазначеним `ttl` і повертається.

> **Примітка**: Коли контроль передається **apcu_entry()**,
> проводиться ексклюзивне блокування кеша, яке знімається після
> завершення роботи **apcu_entry()**: це призводить до того, що тіло
> генератора `generator` міститься у критичну секцію, забороняючи двом
> процесам запустити виконання однакового коду конкурентно. До того
> це призводить до заборони конкурентного запуску будь-яких інших функцій
> APCu, оскільки вони виставлятимуть ту ж блокування.

**Увага**

Єдина функція APCu, яку можна безпечно викликати у генераторі
`generator` - це apcu_entry()**.

### Список параметрів

`key`
Ідентифікатор запису

`generator`
Callback-функція, що приймає один параметр `key` і повертає
значення для кешування.

`ttl`
Час життя; змінна `var` зберігатиметься протягом `ttl` секунд.
Як тільки `ttl` секунд пройдуть, змінна буде видалена з кеша (при
наступний запит). Якщо параметр `ttl` не заданий (або `ttl` заданий як
`0`), значення буде зберігатися доки не буде видалено явно, або по
технічній причині (очищення кешу, перезапуск тощо)

### Значення, що повертаються

Повертає закешоване значення

### Приклади

**Приклад #1 Приклад використання **apcu_entry()****

`<?php$config u003d apcu_entry("config", function($key) { return [  "fruit" u003d> apcu_entry("config.fruit", function($key){                 ;   }),   "people" u003d> apcu_entry("config.people", function($key){     return [      "bob",      "joe",      "niki"     ];   }) ];});var_dump($config) ;?> `

Результат виконання цього прикладу:

array(2) {
["fruit"]u003d>
array(2) {
[0]u003d>
string(6) "apples"
[1]u003d>
string(5) "pears"
}
["people"]u003d>
array(3) {
[0]u003d>
string(3) "bob"
[1]u003d>
string(3) "joe"
[2]u003d>
string(4) "niki"
}
}

### Дивіться також

- [apcu_store()](function.apcu-store.md) - Кешує змінну
- [apcu_fetch()](function.apcu-fetch.md) - Витягує з кеша
збережену змінну
- [apcu_delete()](function.apcu-delete.md) - Видаляє збережене
значення з кешу
