- [«wincache_fcache_meminfo](function.wincache-fcache-meminfo.md)
- [wincache_ocache_fileinfo »](function.wincache-ocache-fileinfo.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Отримує ексклюзивне блокування для цього ключа

#wincache_lock

(PECL wincache \>u003d 1.1.0)

wincache_lock — Отримує ексклюзивне блокування для цього ключа

### Опис

**wincache_lock**(string `$key`, bool `$isglobal` u003d **`false`**): bool

Отримує ексклюзивне блокування для цього ключа. Виконання поточного
скрипта буде заблоковано доти, доки блокування не буде
отримано. Після отримання блокування інші сценарії, які намагаються
запитувати блокування за допомогою того ж ключа, будуть заблоковані до тих
доки поточний скрипт не зніме блокування за допомогою
[wincache_unlock()](function.wincache-unlock.md).

**Увага**

Використання **wincache_lock()** та
[wincache_unlock()](function.wincache-unlock.md) може викликати
взаємне блокування при виконанні скриптів PHP у багатопроцесорній
середовище, таке як FastCGI. Не використовуйте ці функції, якщо ви не
впевнені, що це вам потрібно. Для більшості операцій з користувальницьким
кешем ці функції використовувати необов'язково.

### Список параметрів

`key`
Ім'я ключа в кеші для блокування.

`isglobal`
Визначає, чи область блокування загальносистемної або локальної.
Локальні блокування відносяться до пулу програм у випадку IIS FastCGI
або до всіх процесів PHP, які мають один і той самий ідентифікатор
батьківського процесу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **wincache_lock()****

` <?php$fp u003d fopen("/tmp/lock.txt", "r+");if (wincache_lock(“lock_txt_lock”)) { // отримати ексклюзивне блокування    ftruncate($fp, 0 // обрізати файл    fwrite($fp, "Напишіть що-небудь тут
");   wincache_unlock(“lock_txt_lock”); // зняти блокування} else {    echo "Не удалося отримати блокування!";}fclose($fp);?> `

### Дивіться також

- [wincache_unlock()](function.wincache-unlock.md) - Знімає
ексклюзивне блокування даного ключа
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
