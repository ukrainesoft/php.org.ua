- [« Функції WinCache](ref.wincache.md)
- [wincache_fcache_meminfo »](function.wincache-fcache-meminfo.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Отримує інформацію про файли, закешовані у файловому кеші

#wincache_fcache_fileinfo

(PECL wincache \>u003d 1.0.0)

wincache_fcache_fileinfo — Отримує інформацію про файли, закешовані
у файловому кеші

### Опис

**wincache_fcache_fileinfo**(bool `$summaryonly` u003d **`false`**):
array\|false

Отримує інформацію про вміст файлового кеша та його використання.

### Список параметрів

`summaryonly`
Визначає, чи буде масив, що повертається, містити інформацію про
окремих записах кеша разом із зведенням файлового кешу.

### Значення, що повертаються

Масив метаданих про файловий кеш або **`false`** у разі виникнення
помилки.

Масив, що повертається цією функцією, містить такі елементи:

- `total_cache_uptime` - загальний час у секундах, протягом якого
файловий кеш був активний

- `total_file_count` - загальна кількість файлів, які в даний
момент знаходяться у файловому кеші

- `total_hit_count` - кількість разів, коли файли обслуговувалися з
файлового кешу

- `total_miss_count` - кількість разів, коли файли не були знайдені в
файловому кеші

- `file_entries` - масив, що містить інформацію про всіх
закешованих файлах:

- `file_name` - абсолютне ім'я закешованого файлу
- `add_time` - час у секундах з моменту додавання файлу до кешу
- `use_time` - час у секундах з моменту звернення до файлу
кеші
- `last_check` - час у секундах з моменту перевірки файлу на
наявність модифікацій
- `hit_count` - кількість разів, коли файл був оброблений із кешу
- `file_size` - розмір файлу, що кешується, в байтах

### Приклади

**Приклад #1 Приклад використання **wincache_fcache_fileinfo()****

` <pre><?phpprint_r(wincache_fcache_fileinfo());?></pre>`

Результат виконання цього прикладу:

Array
([total_cache_uptime] u003d> 3234
[total_file_count] u003d> 5
[total_hit_count] u003d> 0
[total_miss_count] u003d> 1
[file_entries] u003d> Array
(
[1] u003d> Array
(
[file_name] u003d> c:\inetpub\wwwroo
[add_time] u003d> 1
[use_time] u003d> 0
[last_check] u003d> 1
[hit_count] u003d> 1
[file_size] u003d> 2435
)
[2] u003d> Array (...iterates for each cached file)
)
)

### Дивіться також

- [wincache_fcache_meminfo()](function.wincache-fcache-meminfo.md) -
Отримує інформацію про використання пам'яті файлового кешу
- [wincache_ocache_fileinfo()](function.wincache-ocache-fileinfo.md) -
Отримує інформацію про файли, закешовані в кеші опкодів
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
