- [«
sodium_crypto_core_ristretto255_scalar_mul](function.sodium-crypto-core-ristretto255-scalar-mul.md)
- [sodium_crypto_core_ristretto255_scalar_random
»](function.sodium-crypto-core-ristretto255-scalar-random.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Скасує скалярне значення

# sodium_crypto_core_ristretto255_scalar_negate

(PHP 8 \>u003d 8.1.0)

sodium_crypto_core_ristretto255_scalar_negate — Скасовує скалярне
значення

### Опис

**sodium_crypto_core_ristretto255_scalar_negate**(string `$s`): string

Скасовує скалярне значення. Доступно з libsodium 1.0.18.

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
**sodium_crypto_core_ristretto255_scalar_negate()****

`<?php$foo u003d sodium_crypto_core_ristretto255_scalar_random();$negate u003d sodium_crypto_core_ristretto255_scalar_negate($foo);$reNegate u003d sodium_crypto_core_rise$$;

Результат виконання цього прикладу:

bool(true)

### Дивіться також

- [sodium_crypto_core_ristretto255_scalar_random()](function.sodium-crypto-core-ristretto255-scalar-random.md) -
Генерує випадковий ключ
