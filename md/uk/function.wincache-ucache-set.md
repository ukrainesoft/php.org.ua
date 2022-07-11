- [«wincache_ucache_meminfo](function.wincache-ucache-meminfo.md)
- [wincache_unlock »] (function.wincache-unlock.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Додає змінну в кеш користувача і перезаписує
змінну, якщо вона вже існує у кеші

#wincache_ucache_set

(PECL wincache \>u003d 1.1.0)

wincache_ucache_set — Додає змінну в кеш користувача і
перезаписує змінну, якщо вона вже існує у кеші

### Опис

**wincache_ucache_set**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$ttl` u003d 0): bool

**wincache_ucache_set**(array `$values`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$unused` u003d NULL, int `$ttl` u003d 0): bool

Додає змінну в кеш користувача. Замінює змінну, якщо
вона вже існує у кеші. Додана або оновлена змінна
залишається в кеші користувача, поки не закінчиться термін її дії або
вона не буде видалена за допомогою функцій
[wincache_ucache_delete()](function.wincache-ucache-delete.md) або
[wincache_ucache_clear()](function.wincache-ucache-clear.md).

### Список параметрів

`key`
Зберігає змінну з використанням цього імені key. Якщо змінна
з таким же `key` вже існує, функція перезапише попереднє значення
новим. `key` чутливий до регістру. `key` також може приймати масив
пар ім'я u003d\> значення, де імена будуть використовуватися як ключі.
Це можна використовувати для додавання кількох значень у кеш за одну
операцію, що дає змогу уникнути стану гонки.

`value`
Значення змінної, яку потрібно зберегти. `Value` підтримує
всі типи даних крім ресурсів, таких як дескриптори файлів. Параметр
ігнорується, якщо першим аргументом є масив. Загальне
керівництво - передати **`null`** як `value` при використанні
масиву `key`. Якщо `value` є об'єктом або масивом, що містить
об'єкти, то об'єкти будуть серіалізовані. Докладніше про серіалізацію
об'єктів дивіться в описі
[\_\_sleep()](language.oop5.magic.md#object.sleep).

`values`
Асоціативний масив ключів та значень.

`ttl`
Час, протягом якого змінна знаходиться у кеші, за секунди. Після
того, як значення, вказане в `ttl` буде передано, збережена
змінну буде видалено з кеша. Параметр набуває значення за
замовчуванням `0`, що означає, що змінна залишиться в кеші, поки вона
не буде явно видалено за допомогою функцій
[wincache_ucache_delete()](function.wincache-ucache-delete.md) або
[wincache_ucache_clear()](function.wincache-ucache-clear.md).

### Значення, що повертаються

Якщо `key` є рядком, функція повертає **`true`** у разі
успішного виконання та **`false`** у разі виникнення помилки.

Якщо `key` є масивом, функція повертає:

- Якщо всі пари ім'я u003d\> значення в масиві можуть бути встановлені,
функція повертає порожній масив;
- Якщо всі пари ім'я u003d\> значення в масиві не можуть бути встановлені,
функція повертає **`false`**;
- Якщо деякі з них можуть бути встановлені, а інші – ні,
функція повертає масив з парами name u003d\> value, які не
вдалося додати до користувача кеш.

### Приклади

**Приклад #1 Приклад використання **wincache_ucache_set()** з `key` в
вигляді рядка**

` <?php$bar u003d 'BAR';var_dump(wincache_ucache_set('foo', $bar));var_dump(wincache_ucache_get('foo'));$bar1 u003d 'BAR1';var_dump(wincache_ucache_set('fo bar1));var_dump(wincache_ucache_get('foo'));?> `

Результат виконання цього прикладу:

bool(true)
string(3) "BAR"
bool(true)
string(3) "BAR1"

**Приклад #2 Приклад використання **wincache_ucache_set()** з `key` в
вигляді масиву**

` <?php$colors_array u003d array('green' u003d> '5', 'Blue' u003d> '6', 'yellow' u003d> '7', 'cyan' u003d> '8');var_dump(wincache_ucache_set( $colors_array));var_dump(wincache_ucache_set($colors_array));var_dump(wincache_ucache_get('Blue'));?> `

Результат виконання цього прикладу:

array(0) {}
array(0) {}
string(1) "6"

### Дивіться також

- [wincache_ucache_add()](function.wincache-ucache-add.md) -
Додає змінну в кеш користувача, тільки якщо змінна
ще не існує в кеші
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
- [\_\_sleep()](language.oop5.magic.md#object.sleep)
