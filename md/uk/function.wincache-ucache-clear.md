- [«wincache_ucache_cas](function.wincache-ucache-cas.md)
- [wincache_ucache_dec »](function.wincache-ucache-dec.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Видаляє весь вміст кешу користувача.

#wincache_ucache_clear

(PECL wincache \>u003d 1.1.0)

wincache_ucache_clear — Видаляє весь вміст кешу користувача.

### Опис

**wincache_ucache_clear**(): bool

Очищає/видаляє всі значення, що зберігаються в кеші користувача.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **wincache_ucache_clear()****

` <?phpwincache_ucache_set('green', 1);wincache_ucache_set('red', 2);wincache_ucache_set('orange', 4);wincache_ucache_set('blue', 8);wincache_ucache_set('1') u003d array('green', 'red', 'orange', 'blue', 'cyan');var_dump(wincache_ucache_get($array1));var_dump(wincache_ucache_clear());var_dump(wincache_ucache_get($arra) > `

Результат виконання цього прикладу:

array(5) { ["green"]u003d> int(1)
["red"]u003d> int(2)
["orange"]u003d> int(4)
["blue"]u003d> int(8)
["cyan"]u003d> int(16) }
bool(true)
bool(false)

### Дивіться також

- [wincache_ucache_set()](function.wincache-ucache-set.md) -
Додає змінну в кеш користувача і перезаписує
змінну, якщо вона вже існує у кеші
- [wincache_ucache_add()](function.wincache-ucache-add.md) -
Додає змінну в кеш користувача, тільки якщо змінна
ще не існує в кеші
- [wincache_ucache_delete()](function.wincache-ucache-delete.md) -
Видаляє змінні з кешу користувача.
- [wincache_ucache_get()](function.wincache-ucache-get.md) -
Отримує змінну, що зберігається в кеші користувача
- [wincache_ucache_exists()](function.wincache-ucache-exists.md) -
Перевіряє, чи існує змінна в кеші користувача
- [wincache_ucache_meminfo()](function.wincache-ucache-meminfo.md) -
Отримує інформацію про використання пам'яті кешу користувача
- [wincache_ucache_info()](function.wincache-ucache-info.md) -
Отримує інформацію про дані, що зберігаються в кеші користувача
