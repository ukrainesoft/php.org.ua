- [« PhpToken::isIgnorable](phptoken.isignorable.md)
- [PhpToken::tokenize »](phptoken.tokenize.md)

- [PHP Manual](index.md)
- [PhpToken](class.phptoken.md)
- Повертає текстовий вміст токена

# PhpToken::\_\_toString

(PHP 8)

PhpToken::\_\_toString — Повертає текстовий вміст токена

### Опис

public **PhpToken::\_\_toString**(): string

Повертає текстовий вміст токена.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Текстове вміст токена.

### Приклади

**Приклад #1 Приклад використання **PhpToken::\_\_toString()****

` <?php$token u003d new PhpToken(T_ECHO, 'echo');echo $token; `

Результат виконання даних прикладів:

echo

### Дивіться також

- [token_name()](function.token-name.md) - Отримати символьне ім'я
для переданої PHP-лексеми
