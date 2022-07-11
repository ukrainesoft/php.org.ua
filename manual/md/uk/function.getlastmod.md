- [«getenv](function.getenv.md)
- [getmygid »] (function.getmygid.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Отримує час останньої модифікації сторінки

# getlastmod

(PHP 4, PHP 5, PHP 7, PHP 8)

getlastmod — Отримує час останньої модифікації сторінки

### Опис

**getlastmod**(): int\|false

Отримує час останньої модифікації запущеного сценарію.

Якщо потрібно отримати час модифікації довільного файлу,
використовуйте функцію [filemtime()](function.filemtime.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає час останньої зміни поточної сторінки. Значення
є міткою часу Unix, що підходить для функції
[date()](function.date.md). Функція поверне **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **getlastmod()****

` <?php// Виводить щось на зразок 'Остання зміна: March 04 1998 20:43:59.'echo "Остання зміна: " . date("F|d|Y|H:i:s.",|getlastmod());?> `

### Дивіться також

- [date()](function.date.md) - Форматує тимчасову мітку Unix
- [getmyuid()](function.getmyuid.md) - Отримання UID власника
скрипта PHP
- [getmygid()](function.getmygid.md) - Отримати GID власника
скрипта PHP
- [get_current_user()](function.get-current-user.md) - Отримує ім'я
власника поточного скрипту PHP
- [getmyinode()](function.getmyinode.md) - Отримує значення inode
поточного скрипту
- [getmypid()](function.getmypid.md) - Отримання ID процесу PHP
- [filemtime()](function.filemtime.md) - Повертає час останнього
зміни файлу
