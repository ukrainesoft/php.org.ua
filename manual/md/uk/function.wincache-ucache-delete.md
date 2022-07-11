- [«wincache_ucache_dec](function.wincache-ucache-dec.md)
- [wincache_ucache_exists »](function.wincache-ucache-exists.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Видаляє змінні з кешу користувача.

#wincache_ucache_delete

(PECL wincache \>u003d 1.1.0)

wincache_ucache_delete — Видаляє змінні з кешу користувача.

### Опис

**wincache_ucache_delete**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): bool

Видаляє елементи з кешу користувача, на які вказує
параметр `key`.

### Список параметрів

`key`
Параметр `key`, який використовувався для зберігання змінної у кеші.
`key` чутливий до регістру. `key` може бути масивом ключів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

Якщо параметр `key` є масивом, функція повертає **`false`**,
якщо не вдається видалити кожен елемент масиву з користувача
кеша, інакше повертається масив, що складається з усіх
віддалених ключів.

### Приклади

**Приклад #1 Приклад використання **wincache_ucache_delete()** з `key` в
вигляді рядка**

` <?phpwincache_ucache_set('foo', 'bar');var_dump(wincache_ucache_delete('foo'));var_dump(wincache_ucache_exists('foo'));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)

**Приклад #2 Приклад використання **wincache_ucache_delete()** з `key` в
вигляді масиву**

` <?php$array1 u003d array('green' u003d> '5', 'blue' u003d> '6', 'yellow' u003d> '7', 'cyan' u003d> '8');wincache_ucache_set($array1 );$array2 u003d array('green', 'blue', 'yellow', 'cyan');var_dump(wincache_ucache_delete($array2));?> `

Результат виконання цього прикладу:

array(4) { [0]u003d> string(5) "green"
[1]u003d> string(4) "Blue"
[2]u003d> string(6) "yellow"
[3]u003d> string(4) "cyan" }

**Приклад #3 Приклад використання **wincache_ucache_delete()** з `key` в
у вигляді масиву, з якого не можна видалити деякі елементи**

` <?php$array1 u003d array('green' u003d> '5', 'blue' u003d> '6', 'yellow' u003d> '7', 'cyan' u003d> '8');wincache_ucache_set($array1 );$array2 u003d array('orange', 'red', 'yellow', 'cyan');var_dump(wincache_ucache_delete($array2));?> `

Результат виконання цього прикладу:

array(2) { [0]u003d> string(6) "yellow"
[1]u003d> string(4) "cyan" }

### Дивіться також

- [wincache_ucache_set()](function.wincache-ucache-set.md) -
Додає змінну в кеш користувача і перезаписує
змінну, якщо вона вже існує у кеші
- [wincache_ucache_add()](function.wincache-ucache-add.md) -
Додає змінну в кеш користувача, тільки якщо змінна
ще не існує в кеші
- [wincache_ucache_get()](function.wincache-ucache-get.md) -
Отримує змінну, що зберігається в кеші користувача
- [wincache_ucache_clear()](function.wincache-ucache-clear.md) -
Видаляє весь вміст кешу користувача.
- [wincache_ucache_exists()](function.wincache-ucache-exists.md) -
Перевіряє, чи існує змінна в кеші користувача
- [wincache_ucache_meminfo()](function.wincache-ucache-meminfo.md) -
Отримує інформацію про використання пам'яті кешу користувача
- [wincache_ucache_info()](function.wincache-ucache-info.md) -
Отримує інформацію про дані, що зберігаються в кеші користувача
