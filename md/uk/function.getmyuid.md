- [«getmypid](function.getmypid.md)
- [getopt »] (function.getopt.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Отримання UID власника скрипта PHP

#getmyuid

(PHP 4, PHP 5, PHP 7, PHP 8)

getmyuid — Отримання UID власника PHP скрипта

### Опис

**getmyuid**(): int\|false

Отримує ідентифікатор користувача поточного сценарію.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор користувача поточного скрипта або **`false`**
у разі помилки.

### Дивіться також

- [getmygid()](function.getmygid.md) - Отримати GID власника
скрипта PHP
- [getmypid()](function.getmypid.md) - Отримання ID процесу PHP
- [get_current_user()](function.get-current-user.md) - Отримує ім'я
власника поточного скрипту PHP
- [getmyinode()](function.getmyinode.md) - Отримує значення inode
поточного скрипту
- [getlastmod()](function.getlastmod.md) - Отримує час останнього
модифікації сторінки
