- [« apcu_clear_cache](function.apcu-clear-cache.md)
- [apcu_delete »] (function.apcu-delete.md)

- [PHP Manual](index.md)
- [Функції APCu](ref.apcu.md)
- Зменшити збережене число

#apcu_dec

(PECL apcu \>u003d 4.0.0)

apcu_dec — Зменшити збережене число

### Опис

**apcu_dec**(
string `$key`,
int `$step` u003d 1,
bool `&$success` u003d ?,
int `$ttl` u003d 0
): int\|false

Зменшує збережене число.

### Список параметрів

`key`
Ключ значення, яке треба зменшити.

`step`
Величина, яку необхідно зменшити.

`success`
Необов'язковий параметр. Якщо заданий, то до нього буде записано логічне
значення **`true`** або **`false`** залежно від успішності операції
зменшення.

`ttl`
TTL (час життя), використовуваний якщо операція вставляє нове значення (а
не зменшує існуюче).

### Значення, що повертаються

Повертає поточне значення `key` у разі успішного виконання або
**`false`** у разі виникнення помилки

### Приклади

**Приклад #1 Приклад використання **apcu_dec()****

`<?phpecho "Зробимо щось без|помилки", PHP_EOL;apcu_store('anumber', 42);echo apcu_fetch('anumber'), PHP_EOL;echo apcu_dec('anum'' , 10), PHP_EOL;echo apcu_dec('anumber', 10, $success), PHP_EOL;var_dump($success);echo "А тепер з помилкою", PHP_EOL, PHP_E'''; $ret u003d apcu_dec('astring', 1, $fail);var_dump($ret);var_dump($fail);?> `

Результатом виконання цього прикладу буде щось подібне:

Зробимо щось без помилок
42
41
31
21
bool(true)
А тепер помилково

bool(false)
bool(false)

### Дивіться також

- [apcu_inc()](function.apcu-inc.md) - Збільшити збережене число
