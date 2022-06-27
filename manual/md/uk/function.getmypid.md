- [«getmyinode](function.getmyinode.md)
- [getmyuid »] (function.getmyuid.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Отримання ID процесу PHP

# getmypid

(PHP 4, PHP 5, PHP 7, PHP 8)

getmypid - Отримання ID процесу PHP

### Опис

**getmypid**(): int\|false

Отримує ідентифікатор PHP.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор процесу PHP або **`false`** у разі
виникнення помилки.

### Примітки

**Увага**

Ідентифікатори процесів у системі не унікальні, тому слабкі
джерелом ентропії. Ми не рекомендуємо покладатися на pid у контекстах,
що впливають на безпеку.

### Дивіться також

- [getmygid()](function.getmygid.md) - Отримати GID власника
скрипта PHP
- [getmyuid()](function.getmyuid.md) - Отримання UID власника
скрипта PHP
- [get_current_user()](function.get-current-user.md) - Отримує ім'я
власника поточного скрипту PHP
- [getmyinode()](function.getmyinode.md) - Отримує значення inode
поточного скрипту
- [getlastmod()](function.getlastmod.md) - Отримує час останнього
модифікації сторінки
