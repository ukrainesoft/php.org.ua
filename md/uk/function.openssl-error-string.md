- [« openssl_encrypt](function.openssl-encrypt.md)
- [openssl_free_key »](function.openssl-free-key.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Повертає повідомлення про помилку openSSL

#openssl_error_string

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_error_string — Повертає повідомлення про помилку openSSL

### Опис

**openssl_error_string**(): string\|false

**openssl_error_string()** повертає повідомлення останньої події
помилки бібліотеки OpenSSL. Повідомлення про помилки перебувають у черзі, так
що цю функцію можна викликати кілька разів для отримання всієї
інформації. При цьому останнє повідомлення найсвіжіше.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок з повідомленням про помилку або **`false`**, якщо повідомлення
більше немає.

### Приклади

**Приклад #1 Приклад використання **openssl_error_string()****

`<?php// Припустимо, що ви викликали функцію openssl, завершилася невдачеюwhile ($msg u003d openssl_error_string())    echo $msg . "<br />
";?> `
