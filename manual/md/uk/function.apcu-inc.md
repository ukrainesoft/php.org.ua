- [«apcu_fetch](function.apcu-fetch.md)
- [apcu_key_info »](function.apcu-key-info.md)

- [PHP Manual](index.md)
- [Функції APCu](ref.apcu.md)
- Збільшити збережене число

#apcu_inc

(PECL apcu \>u003d 4.0.0)

apcu_inc — Збільшити збережене число

### Опис

**apcu_inc**(
string `$key`,
int `$step` u003d 1,
bool `&$success` u003d ?,
int `$ttl` u003d 0
): int\|false

Збільшує збережене число.

### Список параметрів

`key`
Ключ значення, яке треба збільшити.

`step`
Величина, яку необхідно збільшити.

`success`
Необов'язковий параметр. Якщо заданий, то до нього буде записано логічне
значення **`true`** або **`false`** залежно від успішності операції
збільшення.

`ttl`
TTL (час життя), використовуваний якщо операція вставляє нове значення (а
не збільшує існуюче).

### Значення, що повертаються

Повертає поточне значення `key` у разі успішного виконання або
**`false`** у разі виникнення помилки

### Приклади

**Приклад #1 Приклад використання **apcu_inc()****

`<?phpecho "Зробимо щось без|помилки", PHP_EOL;apcu_store('anumber', 42);echo apcu_fetch('anumber'), PHP_EOL;echo apcu_inc('anum'' , 10), PHP_EOL;echo apcu_inc('anumber', 10, $success), PHP_EOL;var_dump($success);echo "А тепер з помилкою", PHP_EOL, PHP_E''' $ret u003d apcu_inc('astring', 1, $fail);var_dump($ret);var_dump($fail);?> `

Результатом виконання цього прикладу буде щось подібне:

Зробимо щось без помилок
42
43
53
63
bool(true)
А тепер помилково

bool(false)
bool(false)

### Дивіться також

- [apcu_dec()](function.apcu-dec.md) - Зменшити збережене число
