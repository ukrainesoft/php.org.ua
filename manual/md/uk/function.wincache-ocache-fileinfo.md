- [«wincache_lock](function.wincache-lock.md)
- [wincache_ocache_meminfo »](function.wincache-ocache-meminfo.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Отримує інформацію про файли, закешовані в кеші опкодів

#wincache_ocache_fileinfo

(PECL wincache \>u003d 1.0.0)

wincache_ocache_fileinfo — Отримує інформацію про файли, закешовані
у кеші опкодів

### Опис

**wincache_ocache_fileinfo**(bool `$summaryonly` u003d **`false`**):
array\|false

Отримує інформацію про вміст кешу опкодів та його використання.

**Увага**

Ця функція *Видалена* в PHP 7.0.0.

### Список параметрів

`summaryonly`
Визначає, чи буде масив, що повертається, містити інформацію про
окремих записах кеша разом із зведенням кеша опкодів.

### Значення, що повертаються

Масив метаданих про кеш опкодів або **`false`** у разі виникнення
помилки.

Масив, що повертається цією функцією, містить такі елементи:

- `total_cache_uptime` - загальний час у секундах, протягом якого
кеш опкода був активним.

- `total_file_count` - загальна кількість файлів, які в даний час
час знаходяться у кеші опкодів.

- `total_hit_count` - кількість разів, коли скомпільований опкод
був використаний з кеша.

- `total_miss_count` - кількість разів, коли скомпільований опкод
не було знайдено у кеші.

- `is_local_cache` - true, якщо метадані кеша призначені для
екземпляра локального кеша, false, якщо метадані призначені для
глобального кешу.

- `file_entries` - масив, що містить інформацію про всіх
закешованих файлах:

- `file_name` - абсолютне ім'я закешованого файлу.
- `add_time` - час у секундах з моменту додавання файлу до кешу
опкодів.
- `use_time` - час у секундах з моменту звернення до файлу
кеше опкодів.
- `last_check` - час у секундах з моменту перевірки файлу на
наявність модифікацій.
- `hit_count` - кількість разів, коли файл був використаний з
кеша.
- `function_count` – кількість функцій у закешованому файлі.
- `class_count` – кількість класів у закешованому файлі.

### Приклади

**Приклад #1 Приклад використання **wincache_ocache_fileinfo()****

` <pre><?phpprint_r(wincache_ocache_fileinfo());?></pre>`

Результат виконання цього прикладу:

Array
(
[total_cache_uptime] u003d> 17357
[total_file_count] u003d> 121
[total_hit_count] u003d> 36562
[total_miss_count] u003d> 201
[file_entries] u003d> Array
(
[1] u003d> Array
(
[file_name] u003d> c:\inetpub\wwwroo
[add_time] u003d> 17356
[use_time] u003d> 7
[last_check] u003d> 10
[hit_count] u003d> 454
[function_count] u003d> 0
[class_count] u003d> 1
)
[2] u003d> Array (...iterates for each cached file)
)
)

### Дивіться також

- [wincache_fcache_fileinfo()](function.wincache-fcache-fileinfo.md) -
Отримує інформацію про файли, закешовані у файловому кеші
- [wincache_fcache_meminfo()](function.wincache-fcache-meminfo.md) -
Отримує інформацію про використання пам'яті файлового кешу
- [wincache_ocache_meminfo()](function.wincache-ocache-meminfo.md) -
Отримує інформацію про використання кеш-пам'яті опкодів
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
