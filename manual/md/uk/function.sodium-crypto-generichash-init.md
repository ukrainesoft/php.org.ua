- [«
sodium_crypto_generichash_final](function.sodium-crypto-generichash-final.md)
- [sodium_crypto_generichash_keygen
»](function.sodium-crypto-generichash-keygen.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Ініціалізує хеш для потокової передачі

# sodium_crypto_generichash_init

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_generichash_init — Ініціалізує хеш для потокової
передачі

### Опис

**sodium_crypto_generichash_init**(string `$key` u003d "", int `$length` u003d
**`SODIUM_CRYPTO_GENERICHASH_BYTES`**): string

Метод ініціалізації для потокового API-інтерфейсу generichash.

### Список параметрів

`key`
Ключ generichash.

`length`
Очікувана довжина виведення хеш-функції.

### Значення, що повертаються

Повертає стан хеша, серіалізований як необроблена двійкова
рядок.

### Приклади

**Приклад #1 Приклад використання **sodium_crypto_generichash_init()****

`<?php$messages u003d [random_bytes(32), random_bytes(32), random_bytes(16)];$state u003d sodium_crypto_generichash_init('', 32);foreach ($messages   message);}$finalu003du003dsodium_crypto_generichash_final($state, 32);var_dump(sodium_bin2hex($final));$allAtOnce u003d sodium_crypto_generichash(implode('', $messages))>all; `

Результатом виконання цього прикладу буде щось подібне:

string(64) "a2939a9163cb7c796ec28e01028489e72475c136b2697ea59e3e760ab4a8ab20"
string(64) "a2939a9163cb7c796ec28e01028489e72475c136b2697ea59e3e760ab4a8ab20"
