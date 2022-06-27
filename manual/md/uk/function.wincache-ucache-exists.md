- [«wincache_ucache_delete](function.wincache-ucache-delete.md)
- [wincache_ucache_get »](function.wincache-ucache-get.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Перевіряє, чи існує змінна в кеші користувача

#wincache_ucache_exists

(PECL wincache \>u003d 1.1.0)

wincache_ucache_exists — Перевіряє, чи існує змінна в
користувальницькому кеші

### Опис

**wincache_ucache_exists**(string `$key`): bool

Перевіряє, чи існує змінна `key` в кеші користувача або
ні.

### Список параметрів

`key`
Параметр `key`, який використовувався для зберігання змінної у кеші.
`key` чутливий до регістру.

### Значення, що повертаються

Повертає **`true`**, якщо змінна з `key` існує, інакше
у разі повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **wincache_ucache_exists()****

` <?phpif (!wincache_ucache_exists('green'))   wincache_ucache_set('green', 1);var_dump(wincache_ucache_exists('green'));?> `

Результат виконання цього прикладу:

bool(true)

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
- [wincache_ucache_delete()](function.wincache-ucache-delete.md) -
Видаляє змінні з кешу користувача.
- [wincache_ucache_meminfo()](function.wincache-ucache-meminfo.md) -
Отримує інформацію про використання пам'яті кешу користувача
- [wincache_ucache_info()](function.wincache-ucache-info.md) -
Отримує інформацію про дані, що зберігаються в кеші користувача
