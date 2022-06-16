- [«wincache_ocache_meminfo](function.wincache-ocache-meminfo.md)
- [wincache_rplist_fileinfo »](function.wincache-rplist-fileinfo.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Оновлює записи кеша для закешованих файлів

#wincache_refresh_if_changed

(PECL wincache \>u003d 1.0.0)

wincache_refresh_if_changed — Оновлює записи кеша для закешованих
файлів

### Опис

**wincache_refresh_if_changed**(array `$files` u003d NULL): bool

Оновлює записи кеша для файлів, імена яких були передані у вхідному
аргумент. Якщо аргумент не вказано, всі записи в кеші оновлюються.

### Список параметрів

`files`
Масив імен файлів, які потрібно оновити. Можуть використовуватися
абсолютні чи відносні шляхи до файлів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

WinCache виконує регулярні перевірки закешованих файлів, щоб
гарантувати, що якщо будь-який файл було змінено, то відповідна
запис у кеші буде оновлено. За промовчанням ця перевірка виконується
кожні 30 секунд. Якщо, наприклад, PHP-скрипт оновлює інший
PHP-скрипт, в якому зберігаються параметри конфігурації програми,
може статися так, що після збереження параметрів конфігурації у файл
програма як і раніше буде використовувати старі параметри протягом
деякого часу, доки не буде оновлено кеш. У таких випадках може
бути краще оновити кеш відразу після зміни файлу. В
На наступному прикладі показано, як це можна зробити.

**Приклад #1 Приклад використання **wincache_refresh_if_changed()****

` <?php$filename u003d 'C:\inetpub\wwwroo

### Дивіться також

- [wincache_fcache_fileinfo()](function.wincache-fcache-fileinfo.md) -
Отримує інформацію про файли, закешовані у файловому кеші
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
- [wincache_ucache_meminfo()](function.wincache-ucache-meminfo.md) -
Отримує інформацію про використання пам'яті кешу користувача
- [wincache_ucache_info()](function.wincache-ucache-info.md) -
Отримує інформацію про дані, що зберігаються в кеші користувача
