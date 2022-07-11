- [«getlastmod](function.getlastmod.md)
- [getmyinode »](function.getmyinode.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Отримати GID власника скрипта PHP

# getmygid

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

getmygid — Отримати GID власника скрипта PHP

### Опис

**getmygid**(): int\|false

Отримує ідентифікатор групи поточного сценарію.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає груповий ідентифікатор поточного скрипту або **`false`**
у разі виникнення помилки.

### Дивіться також

- [getmyuid()](function.getmyuid.md) - Отримання UID власника
скрипта PHP
- [getmypid()](function.getmypid.md) - Отримання ID процесу PHP
- [get_current_user()](function.get-current-user.md) - Отримує ім'я
власника поточного скрипту PHP
- [getmyinode()](function.getmyinode.md) - Отримує значення inode
поточного скрипту
- [getlastmod()](function.getlastmod.md) - Отримує час останнього
модифікації сторінки
