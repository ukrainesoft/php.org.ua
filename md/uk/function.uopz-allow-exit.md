- [«uopz_add_function](function.uopz-add-function.md)
- [uopz_backup »] (function.uopz-backup.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Дозволяє керувати вимкненим опкодом exit

#uopz_allow_exit

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_allow_exit — Дозволяє керувати вимкненим опкодом exit

### Опис

**uopz_allow_exit**(bool `$allow`): void

За промовчанням uopz відключає опкод exit, тому виклики
[exit()](function.exit.md) практично ігноруються.
**uopz_allow_exit()** дозволяє контролювати цю поведінку.

### Список параметрів

`allow`
Дозволити виконання опкодів exit чи ні.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **uopz_allow_exit()****

`<?phpexit(1);echo 1;uopz_allow_exit(true);exit(2);echo 2;?> `

Результат виконання цього прикладу:

1

### Примітки

**Застереження**

[OPcache](book.opcache.md) оптимізує мертвий код після безумовного
завершення.

### Дивіться також

- [uopz_get_exit_status()](function.uopz-get-exit-status.md) -
Отримати останній встановлений статус виходу
