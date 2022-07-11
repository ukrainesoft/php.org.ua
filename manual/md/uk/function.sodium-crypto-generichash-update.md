- [«
sodium_crypto_generichash_keygen](function.sodium-crypto-generichash-keygen.md)
- [sodium_crypto_generichash
»](function.sodium-crypto-generichash.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Додати повідомлення до хешу

# sodium_crypto_generichash_update

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_generichash_update — Додати повідомлення до хешу

### Опис

**sodium_crypto_generichash_update**(string `&$state`, string
`$message`): bool

Додає повідомлення до внутрішнього хеш-стану.

### Список параметрів

`state`
Значення, що повертається
[sodium_crypto_generichash_init()](function.sodium-crypto-generichash-init.md).

`message`
Дані для додавання до стану хешування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання
**sodium_crypto_generichash_update()****

`<?php$messages u003d [random_bytes(32), random_bytes(32), random_bytes(16)];$state u003d sodium_crypto_generichash_init();foreach ($messages as $message$ $finalu003du003dsodium_crypto_generichash_final($state);var_dump(sodium_bin2hex($final));$allAtOnceu003du003dsodium_crypto_generichash(implode('', $messages));var_dump(sodium_bin2h>

Результатом виконання цього прикладу буде щось подібне:

string(64) "e16e28bbbbcc39d9f5b1cbc33c41f1d217808640103e57a41f24870f79831e04"
string(64) "e16e28bbbbcc39d9f5b1cbc33c41f1d217808640103e57a41f24870f79831e04"
