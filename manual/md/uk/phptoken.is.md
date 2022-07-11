- [« PhpToken::getTokenName](phptoken.gettokenname.md)
- [PhpToken::isIgnorable »](phptoken.isignorable.md)

- [PHP Manual](index.md)
- [PhpToken](class.phptoken.md)
- Перевіряє, чи відповідає токен зазначеному типу

# PhpToken::is

(PHP 8)

PhpToken::is — Перевіряє, чи відповідає токен зазначеному типу

### Опис

public **PhpToken::is**(int\|string\|array `$kind`): bool

Перевіряє, чи відповідає токен зазначеному типу `kind`.

### Список параметрів

`kind`
Значення для порівняння з ідентифікатором токена або його текстовим
уявленням, чи масив таких значень.

### Значення, що повертаються

Логічне значення, **`true`** або **`false`**.

### Приклади

**Приклад #1 Приклад використання **PhpToken::is()****

`<?php$token u003d new PhpToken(T_ECHO, 'echo');var_dump($token->is(T_ECHO)); // -> bool(true)var_dump($token->is('echo')); // -> bool(true)var_dump($token->is(T_FOREACH)); // -> bool(false)var_dump($token->is('foreach')); // -> bool(false) `

**Приклад #2 Використання з масивом**

`<?phpfunction isClassType(PhpToken $token): bool {    return $token->is([T_CLASS, T_INTERFACE, T_TRAIT]); ); // -> bool(true)$function u003d new PhpToken(T_FUNCTION, 'function');var_dump(isClassType($function)); // -> bool(false) `

### Дивіться також

- [token_name()](function.token-name.md) - Отримати символьне ім'я
для переданої PHP-лексеми
