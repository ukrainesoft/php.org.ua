- [«
wincache_refresh_if_changed](function.wincache-refresh-if-changed.md)
- [wincache_rplist_meminfo »](function.wincache-rplist-meminfo.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Отримує інформацію про дозвіл кеша шляхи до файлу дозволу

#wincache_rplist_fileinfo

(PECL wincache \>u003d 1.0.0)

wincache_rplist_fileinfo — Отримує інформацію про дозвіл кеша шляху до
файлу дозволу

### Опис

**wincache_rplist_fileinfo**(bool `$summaryonly` u003d **`false`**):
array\|false

Отримує інформацію про закешовані зіставлення між відносними
шляхами до файлів та відповідними абсолютними шляхами до файлів.

### Список параметрів

`summaryonly`

### Значення, що повертаються

Масив метаданих про кеш шляху до файлу дозволу або **`false`** в
у разі виникнення помилки.

Масив, що повертається цією функцією, містить такі елементи:

- `total_file_count` - загальна кількість зіставлень шляху до файлу,
що зберігаються в кеші.

- `rplist_entries` - масив, що містить інформацію про всі шляхи
закешованих файлів:

- `resolve_path` - шлях до файлу.
- `subkey_data` – відповідний абсолютний шлях до файлу.

### Приклади

**Приклад #1 Приклад використання **wincache_rplist_fileinfo()****

` <pre><?phpprint_r(wincache_rplist_fileinfo());?></pre>`

Результат виконання цього прикладу:

Array
(
[total_file_count] u003d> 5
[rplist_entries] u003d> Array
(
[1] u003d> Array
(
[resolve_path] u003d> checkcache.php
[subkey_data] u003d> c:\inetpub\wwwroot|c:\inetpub\wwwroo
)

[2] u003d> Array (...iterates for each cached file)
)
)

### Дивіться також

- [wincache_fcache_meminfo()](function.wincache-fcache-meminfo.md) -
Отримує інформацію про використання пам'яті файлового кешу
- [wincache_fcache_fileinfo()](function.wincache-fcache-fileinfo.md) -
Отримує інформацію про файли, закешовані у файловому кеші
- [wincache_ocache_fileinfo()](function.wincache-ocache-fileinfo.md) -
Отримує інформацію про файли, закешовані в кеші опкодів
- [wincache_ocache_meminfo()](function.wincache-ocache-meminfo.md) -
Отримує інформацію про використання кеш-пам'яті опкодів
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
