- [« Swoole\Coroutine](class.swoole-coroutine.md)
- [Swoole\Coroutine::call_user_func
»](swoole-coroutine.call-user-func.md)

- [PHP Manual](index.md)
- [Swoole\Coroutine](class.swoole-coroutine.md)
- Викликає callback-функцію з масивом параметрів

# Swoole\Coroutine::call_user_func_array

(PECL swoole \>u003d 2.0.0)

Swoole\Coroutine::call_user_func_array — Викликає callback-функцію з
масивом параметрів

### Опис

public static
**Swoole\Coroutine::call_user_func_array**([callable](language.types.callable.md)
`$callback`, array `$param_array`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Викликає callback-функцію, задану першим параметром з параметрами
param_array.

### Список параметрів

`callback`
Функція [callable](language.types.callable.md) для дзвінка.

`param_array`
Нуль або більше параметрів для передачі в callback-функцію.

### Значення, що повертаються
