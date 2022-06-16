- [«
sodium_crypto_core_ristretto255_scalar_complement](function.sodium-crypto-core-ristretto255-scalar-complement.md)
- [sodium_crypto_core_ristretto255_scalar_mul
»](function.sodium-crypto-core-ristretto255-scalar-mul.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- інвертує скалярне значення

# sodium_crypto_core_ristretto255_scalar_invert

(PHP 8 \>u003d 8.1.0)

sodium_crypto_core_ristretto255_scalar_invert — Інвертує скалярне
значення

### Опис

**sodium_crypto_core_ristretto255_scalar_invert**(string `$s`): string

Інвертує скалярне значення. Доступно з libsodium 1.0.18.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`s`
Скалярне значення.

### Значення, що повертаються

Повертає випадковий 32-байтовий рядок (string).

### Приклади

**Приклад #1 Приклад використання
**sodium_crypto_core_ristretto255_scalar_invert()****

`<?php$foo u003d sodium_crypto_core_ristretto255_scalar_random();$inverted u003d

Результат виконання цього прикладу:

bool(true)

### Дивіться також

- [sodium_crypto_core_ristretto255_scalar_random()](function.sodium-crypto-core-ristretto255-scalar-random.md) -
Генерує випадковий ключ
