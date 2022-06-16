- [«wincache_ocache_fileinfo](function.wincache-ocache-fileinfo.md)
- [wincache_refresh_if_changed
»](function.wincache-refresh-if-changed.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Отримує інформацію про використання кеш-пам'яті опкодів

#wincache_ocache_meminfo

(PECL wincache \>u003d 1.0.0)

wincache_ocache_meminfo — Отримує інформацію про використання
кеш-пам'яті опкодів

### Опис

**wincache_ocache_meminfo**(): array\|false

Отримує інформацію про використання кеш-пам'яті опкодів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив метаданих про використання кеш-пам'яті опкодів або **`false`**
у разі виникнення помилки.

Масив, що повертається цією функцією, містить такі елементи:

- `memory_total` - об'єм пам'яті в байтах, виділений для кешу
опкодів.
- `memory_free` - обсяг вільної пам'яті в байтах, доступної для кеша
опкодів.
- `num_used_blks` - кількість блоків пам'яті, що використовуються кешем
опкодів.
- `num_free_blks` - кількість вільних блоків пам'яті, доступних для
кешу опкодів.
- `memory_overhead` - обсяг пам'яті в байтах, що використовується для
внутрішніх структур кеша опкодів.

**Увага**

Ця функція *Видалена* в PHP 7.0.0.

### Приклади

**Приклад #1 Приклад використання **wincache_ocache_meminfo()****

` <pre><?phpprint_r(wincache_ocache_meminfo());?></pre>`

Результат виконання цього прикладу:

Array
(
[memory_total] u003d> 134217728
[memory_free] u003d> 112106972
[num_used_blks] u003d> 15469
[num_free_blks] u003d> 4
[memory_overhead] u003d> 247600
)

### Дивіться також

- [wincache_fcache_fileinfo()](function.wincache-fcache-fileinfo.md) -
Отримує інформацію про файли, закешовані у файловому кеші
- [wincache_fcache_meminfo()](function.wincache-fcache-meminfo.md) -
Отримує інформацію про використання пам'яті файлового кешу
- [wincache_ocache_fileinfo()](function.wincache-ocache-fileinfo.md) -
Отримує інформацію про файли, закешовані в кеші опкодів
- [wincache_rplist_fileinfo()](function.wincache-rplist-fileinfo.md) -
Отримує інформацію про роздільну здатність кеша шляху до файлу роздільної здатності
- [wincache_rplist_meminfo()](function.wincache-rplist-meminfo.md) -
Отримує інформацію про використання пам'яті за допомогою кеша шляху
файлу дозволу
- [wincache_refresh_if_changed()](function.wincache-refresh-if-changed.md) -
Оновлює записи кеша для закешованих файлів
- [wincache_ucache_meminfo()](function.wincache-ucache-meminfo.md) -
Отримує інформацію про використання пам'яті кешу користувача
- [wincache_ucache_info()](function.wincache-ucache-info.md) -
Отримує інформацію про дані, що зберігаються в кеші користувача
- [wincache_scache_info()](function.wincache-scache-info.md) -
Отримує інформацію про файли, закешовані в кеші сесії
- [wincache_scache_meminfo()](function.wincache-scache-meminfo.md) -
Отримує інформацію про використання кеш-пам'яті сесії
