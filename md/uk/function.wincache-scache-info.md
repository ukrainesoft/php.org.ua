- [«wincache_rplist_meminfo](function.wincache-rplist-meminfo.md)
- [wincache_scache_meminfo »](function.wincache-scache-meminfo.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Отримує інформацію про файли, закешовані в кеші сесії

#wincache_scache_info

(PECL wincache \>u003d 1.1.0)

wincache_scache_info — Отримує інформацію про файли, закешовані в
кеші сесії

### Опис

**wincache_scache_info**(bool `$summaryonly` u003d **`false`**):
array\|false

Отримує інформацію про вміст кешу сесії та його використання.

### Список параметрів

`summaryonly`
Визначає, чи буде масив, що повертається, містити інформацію про
окремих записах кешу разом із зведенням кешу сесії.

### Значення, що повертаються

Масив метаданих про кеш сесії або **`false`** у разі виникнення
помилки.

Масив, що повертається цією функцією, містить такі елементи:

- `total_cache_uptime` - загальний час у секундах, протягом якого
кеш сесії був активним.

- `total_item_count` - загальна кількість елементів, які в
Нині перебувають у кеші сесії.

- `is_local_cache` - true, якщо метадані кеша призначені для
екземпляра локального кеша, false, якщо метадані призначені для
глобального кешу.

- `total_hit_count` - кількість разів, коли дані були оброблені з
кеша.

- `total_miss_count` - кількість разів, коли дані не були знайдені в
кеші.

- `scache_entries` - масив, що містить інформацію про всіх
закешованих елементах:

- `key_name` - ім'я ключа, який використовується для зберігання
даних.
- `value_type` - тип значення, що зберігається ключем.
- `use_time` - час у секундах з моменту звернення до файлу
кеше опкодів.
- `last_check` - час у секундах з моменту перевірки файлу на
наявність модифікацій.
- `ttl_seconds` - час, що залишився для даних, щоб залишатися
у кеші, 0 означає нескінченність.
- `age_seconds` - час, що минув з моменту додавання даних у
кеш.
- `hitcount` - кількість разів, коли дані були отримані з
кеша.

### Приклади

**Приклад #1 Приклад використання **wincache_scache_info()****

` <pre><?phpprint_r(wincache_scache_info());?></pre>`

Результат виконання цього прикладу:

Array
(
[total_cache_uptime] u003d> 17357
[total_file_count] u003d> 121
[total_hit_count] u003d> 36562
[total_miss_count] u003d> 201
[scache_entries] u003d> Array
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
- [wincache_scache_meminfo()](function.wincache-scache-meminfo.md) -
Отримує інформацію про використання кеш-пам'яті сесії
