- [«wincache_ucache_inc](function.wincache-ucache-inc.md)
- [wincache_ucache_meminfo »](function.wincache-ucache-meminfo.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Отримує інформацію про дані, що зберігаються в кеші користувача

#wincache_ucache_info

(PECL wincache \>u003d 1.1.0)

wincache_ucache_info — Отримує інформацію про дані, що зберігаються в
користувальницькому кеші

### Опис

**wincache_ucache_info**(bool `$summaryonly` u003d **`false`**, string
`$key` u003d NULL): array\|false

Отримує інформацію про дані, що зберігаються в кеші користувача.

### Список параметрів

`summaryonly`
Визначає, чи буде масив, що повертається, містити інформацію про
окремих записах кеша разом із зведенням користувача кеша.

`key`
Ключ запису в кеші користувача. Якщо зазначено, то повертається
масив міститиме інформацію тільки про цей запис кеша. Якщо не
вказано і для `summaryonly` встановлено значення **`false`**, тоді
масив, що повертається, міститиме інформацію про всі записи кеша.

### Значення, що повертаються

Масив метаданих про використання кешу або
**`false`** у разі виникнення помилки

Масив, що повертається цією функцією, містить такі елементи:

- `total_cache_uptime` - загальний час у секундах, протягом якого
кеш користувача був активний.

- `total_item_count` - загальна кількість елементів, які в даний
момент знаходяться в кеші користувача.

- `is_local_cache` - true - метадані кеша призначені для
екземпляра локального кеша, false, якщо метадані призначені для
глобального кешу.

- `total_hit_count` - кількість разів, коли дані були отримані з
кеша.

- `total_miss_count` - кількість разів, коли дані не були знайдені в
кеші.

- `ucache_entries` - масив, що містить інформацію про всіх
кешованих елементах:

- `key_name` - ім'я ключа, який використовується для зберігання
даних.
- `value_type` - тип значення, що зберігається ключем.
- `use_time` - час у секундах з моменту звернення до файлу
кеше опкодів.
- `last_check` - час у секундах з моменту перевірки файлу на
наявність модифікацій.
- `is_session` - вказує, чи є дані змінної сесії.
- `ttl_seconds` - час, що залишився для даних, щоб перебувати
у кеші, 0 означає нескінченність.
- `age_seconds` - час, що минув з моменту додавання даних у
кеш.
- `hitcount` - кількість разів, коли дані були отримані з
кеша.

### Приклади

**Приклад #1 Приклад використання **wincache_ucache_info()****

` <?phpwincache_ucache_get('green');wincache_ucache_set('green', 2922);wincache_ucache_get('green');wincache_ucache_get('green');wincache_ucache_get('green');print_r(winca

Результат виконання цього прикладу:

Array
( ["total_cache_uptime"] u003d> int(0)
["is_local_cache"] u003d> bool(false)
["total_item_count"] u003d> int(1)
["total_hit_count"] u003d> int(3)
["total_miss_count"] u003d> int(1)
["ucache_entries"] u003d> Array(1)
( [1] u003d> Array(6)
(
["key_name"] u003d> string(5) "green"
["value_type"] u003d> string(4) "long"
["is_session"] u003d> int(0)
["ttl_seconds"] u003d> int(0)
["age_seconds"] u003d> int(0)
["hitcount"] u003d> int(3)
)
)
)

### Дивіться також

- [wincache_fcache_meminfo()](function.wincache-fcache-meminfo.md) -
Отримує інформацію про використання пам'яті файлового кешу
- [wincache_ocache_fileinfo()](function.wincache-ocache-fileinfo.md) -
Отримує інформацію про файли, закешовані в кеші опкодів
- [wincache_ocache_meminfo()](function.wincache-ocache-meminfo.md) -
Отримує інформацію про використання кеш-пам'яті опкодів
- [wincache_rplist_meminfo()](function.wincache-rplist-meminfo.md) -
Отримує інформацію про використання пам'яті за допомогою кеша шляху
файлу дозволу
- [wincache_rplist_fileinfo()](function.wincache-rplist-fileinfo.md) -
Отримує інформацію про роздільну здатність кеша шляху до файлу роздільної здатності
- [wincache_refresh_if_changed()](function.wincache-refresh-if-changed.md) -
Оновлює записи кеша для закешованих файлів
- [wincache_ucache_meminfo()](function.wincache-ucache-meminfo.md) -
Отримує інформацію про використання пам'яті кешу користувача
- [wincache_scache_info()](function.wincache-scache-info.md) -
Отримує інформацію про файли, закешовані в кеші сесії
- [wincache_scache_meminfo()](function.wincache-scache-meminfo.md) -
Отримує інформацію про використання кеш-пам'яті сесії
