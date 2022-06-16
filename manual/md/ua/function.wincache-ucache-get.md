- [«wincache_ucache_exists](function.wincache-ucache-exists.md)
- [wincache_ucache_inc »](function.wincache-ucache-inc.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Отримує змінну, що зберігається в кеші користувача

#wincache_ucache_get

(PECL wincache \>u003d 1.1.0)

wincache_ucache_get — Отримує змінну, що зберігається в користувальницькому
кеші

### Опис

**wincache_ucache_get**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`, bool `&$success` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримує змінну, що зберігається в кеші користувача.

### Список параметрів

`key`
Параметр `key`, який використовувався для зберігання змінної у кеші.
`key` чутливий до регістру. `key` може бути масивом ключів. В цьому
у разі повертається значення буде масивом значень кожного елемента в
масиві `key`. Якщо повертається об'єкт або масив, що містить об'єкти,
то об'єкти будуть десеріалізовані. Докладніше про десеріалізацію об'єктів
дивіться [\_\_wakeup()](language.oop5.magic.md#object.wakeup).

`success`
Буде встановлено значення **`true`** у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Значення, що повертаються

Якщо параметр `key` є рядком, функція повертає значення
змінної, що зберігається із цим ключем. Для параметра `success` буде
встановлено значення **`true`** у разі успішного виконання або
**`false`** у разі виникнення помилки.

Якщо параметр `key` - це масив, параметр `success` завжди матиме
значення **`true`**. Повернутий масив (пари ім'я u003d\> значення) буде
містити тільки ті пари ім'я u003d\> значення, для яких операція
отримання в кеші користувача була успішною. Якщо жоден із ключів
в масиві ключів не знаходить збігу в користувальницькому кеші, буде
повернутий порожній масив.

### Приклади

**Приклад #1 **wincache_ucache_get()** з `key` у вигляді рядка**

` <?phpwincache_ucache_add('color', 'blue');var_dump(wincache_ucache_get('color', $success));var_dump($success);?> `

Результат виконання цього прикладу:

string(4) "blue"
bool(true)

**Приклад #2 **wincache_ucache_get()** з `key` у вигляді масиву**

` <?php$array1 u003d array('green' u003d> '5', 'Blue' u003d> '6', 'yellow' u003d> '7', 'cyan' u003d> '8');wincache_ucache_set($array1 );$array2 u003d array('green', 'Blue', 'yellow', 'cyan');var_dump(wincache_ucache_get($array2, $success));var_dump($success);?> `

Результат виконання цього прикладу:

array(4) { ["green"]u003d> string(1) "5"
["Blue"]u003d> string(1) "6"
["yellow"]u003d> string(1) "7"
["cyan"]u003d> string(1) "8" }
bool(true)

### Дивіться також

- [wincache_ucache_add()](function.wincache-ucache-add.md) -
Додає змінну в кеш користувача, тільки якщо змінна
ще не існує в кеші
- [wincache_ucache_set()](function.wincache-ucache-set.md) -
Додає змінну в кеш користувача і перезаписує
змінну, якщо вона вже існує у кеші
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
- [\_\_wakeup()](language.oop5.magic.md#object.wakeup)
