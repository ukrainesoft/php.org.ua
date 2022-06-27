- [«
sodium_crypto_core_ristretto255_sub](function.sodium-crypto-core-ristretto255-sub.md)
- [sodium_crypto_generichash_init
»](function.sodium-crypto-generichash-init.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Закінчити хешування

# sodium_crypto_generichash_final

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_generichash_final - Закінчити хешування

### Опис

**sodium_crypto_generichash_final**(string `&$state`, int `$length` u003d
**`SODIUM_CRYPTO_GENERICHASH_BYTES`**): string

Метод завершення потокового API-інтерфейсу generichash.

### Список параметрів

`state`
Стан хешу, повернутий
[sodium_crypto_generichash_init()](function.sodium-crypto-generichash-init.md)

`length`
Довжина виводу.

### Значення, що повертаються

Криптографічний хеш.

### Приклади

**Приклад #1 Приклад використання **sodium_crypto_generichash_final()****

`<?php$messages u003d [random_bytes(32), random_bytes(32), random_bytes(16)];$state u003d sodium_crypto_generichash_init('', 32);foreach ($messages   message);}$finalu003du003dsodium_crypto_generichash_final($state, 32);var_dump(sodium_bin2hex($final));$allAtOnce u003d sodium_crypto_generichash(implode('', $messages))>all; `

Результатом виконання цього прикладу буде щось подібне:

string(64) "a2939a9163cb7c796ec28e01028489e72475c136b2697ea59e3e760ab4a8ab20"
string(64) "a2939a9163cb7c796ec28e01028489e72475c136b2697ea59e3e760ab4a8ab20"
