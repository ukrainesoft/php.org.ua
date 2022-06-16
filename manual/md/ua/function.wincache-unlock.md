- [«wincache_ucache_set](function.wincache-ucache-set.md)
- [Складання для Windows »](wincache.win32build.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Знімає ексклюзивне блокування даного ключа

#wincache_unlock

(PECL wincache \>u003d 1.1.0)

wincache_unlock — Знімає ексклюзивне блокування цього ключа

### Опис

**wincache_unlock**(string `$key`): bool

Знімає виняткове блокування, яке було отримано для даного
ключа за допомогою [wincache_lock()](function.wincache-lock.md). Якщо
будь-який інший процес був заблокований в очікуванні блокування цього
ключа, цей процес зможе отримати блокування.

**Увага**

Використання [wincache_lock()](function.wincache-lock.md) та
**wincache_unlock()** може викликати взаємне блокування під час виконання
скриптів PHP у багатопроцесорному середовищі, такому як FastCGI. Не
використовуйте ці функції, якщо ви не впевнені, що це потрібно. Для
більшості операцій з користувальницьким кешем ці функції використовувати
не обов'язково.

### Список параметрів

`key`
Ім'я ключа у кеші для зняття блокування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **wincache_unlock()****

` <?php$fp u003d fopen("/tmp/lock.txt", "r+");if (wincache_lock(“lock_txt_lock”)) { // отримати ексклюзивне блокування    ftruncate($fp, 0 // обрізати файл    fwrite($fp, "Напишіть що-небудь тут
");   wincache_unlock(“lock_txt_lock”); // зняти блокування} else {    echo "Не удалося отримати блокування!";}fclose($fp);?> `

### Дивіться також

- [wincache_lock()](function.wincache-lock.md) - Отримує
ексклюзивне блокування для даного ключа
- [wincache_ucache_set()](function.wincache-ucache-set.md) -
Додає змінну в кеш користувача і перезаписує
змінну, якщо вона вже існує у кеші
- [wincache_ucache_get()](function.wincache-ucache-get.md) -
Отримує змінну, що зберігається в кеші користувача
- [wincache_ucache_delete()](function.wincache-ucache-delete.md) -
Видаляє змінні з кешу користувача.
- [wincache_ucache_clear()](function.wincache-ucache-clear.md) -
Видаляє весь вміст кешу користувача.
- [wincache_ucache_exists()](function.wincache-ucache-exists.md) -
Перевіряє, чи існує змінна в кеші користувача
- [wincache_ucache_meminfo()](function.wincache-ucache-meminfo.md) -
Отримує інформацію про використання пам'яті кешу користувача
- [wincache_ucache_info()](function.wincache-ucache-info.md) -
Отримує інформацію про дані, що зберігаються в кеші користувача
- [wincache_scache_info()](function.wincache-scache-info.md) -
Отримує інформацію про файли, закешовані в кеші сесії
