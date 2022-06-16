- [«
Swoole\Coroutine::call_user_func_array](swoole-coroutine.call-user-func-array.md)
- [Swoole\Coroutine::cli_wait »](swoole-coroutine.cli-wait.md)

- [PHP Manual](index.md)
- [Swoole\Coroutine](class.swoole-coroutine.md)
- Викликає callback-функцію, задану першим параметром

# Swoole\Coroutine::call_user_func

(PECL swoole \>u003d 2.0.0)

Swoole\Coroutine::call_user_func — Викликає callback-функцію, задану
першим параметром

### Опис

public static
**Swoole\Coroutine::call_user_func**([callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Викликає callback-функцію, задану першим параметром і передає
параметри, що залишилися, як аргументи.

### Список параметрів

`callback`
Функція [callable](language.types.callable.md) для дзвінка.

`args`
Нуль або більше параметрів для передачі в callback-функцію.

### Значення, що повертаються
