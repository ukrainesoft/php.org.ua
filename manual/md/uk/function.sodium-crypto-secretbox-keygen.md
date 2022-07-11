- [« sodium_crypto_scalarmult](function.sodium-crypto-scalarmult.md)
- [sodium_crypto_secretbox_open
»](function.sodium-crypto-secretbox-open.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Створює випадковий ключ для sodium_crypto_secretbox

# sodium_crypto_secretbox_keygen

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_secretbox_keygen — Створює випадковий ключ для
sodium_crypto_secretbox

### Опис

**sodium_crypto_secretbox_keygen**(): string

Створює випадковий ключ для
[sodium_crypto_secretbox()](function.sodium-crypto-secretbox.md) та
[sodium_crypto_secretbox_open()](function.sodium-crypto-secretbox-open.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає згенерований рядок криптографічно безпечних випадкових
байтів.

### Приклади

**Приклад #1 Приклад використання **sodium_crypto_secretbox_keygen()****

` <?php$key u003d sodium_crypto_secretbox_keygen();var_dump( sodium_bin2hex( $key ) );?> `

Результатом виконання цього прикладу буде щось подібне:

string(64) "88bd1dc51ec81984f3ddc5a8f59a3d95b647e2da3e879f1b9ceb0abd89e7286c"

**Приклад #2 Порівняння **sodium_crypto_secretbox_keygen()** з
[random_bytes()](function.random-bytes.md)**

`<?php$key u003d sodium_crypto_secretbox_keygen();$bytes u003d random_bytes( SODIUM_CRYPTO_SECRETBOX_KEYBYTES );var_dump( mb_strlen( $key, '8bit' > )

Результат виконання цього прикладу:

bool(true)

### Дивіться також

- [sodium_bin2hex()](function.sodium-bin2hex.md) - Кодувати в
шістнадцяткове уявлення
- [random_bytes()](function.random-bytes.md) - Генерує
криптографічно безпечні псевдовипадкові байти
