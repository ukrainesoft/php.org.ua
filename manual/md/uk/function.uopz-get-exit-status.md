- [«uopz_function](function.uopz-function.md)
- [uopz_get_hook »](function.uopz-get-hook.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- отримати останній встановлений статус виходу

#uopz_get_exit_status

(PECL uopz 5, PECL uopz , PECL uopz 7)

uopz_get_exit_status — Отримати останній встановлений статус виходу

### Опис

**uopz_get_exit_status**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримує останній встановлений статус виходу, тобто значення,
передане до [exit()](function.exit.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ця функція повертає останній статус виходу або **`null`**, якщо
[exit()](function.exit.md) не було викликано.

### Приклади

**Приклад #1 Приклад використання **uopz_get_exit_status()****

` <?phpexit(123);echo uopz_get_exit_status();?> `

Результат виконання цього прикладу:

123

### Примітки

**Застереження**

[OPcache](book.opcache.md) оптимізує мертвий код після безумовного
завершення.

### Дивіться також

- [uopz_allow_exit()](function.uopz-allow-exit.md) - Дозволяє
керувати вимкненим опкодом exit
