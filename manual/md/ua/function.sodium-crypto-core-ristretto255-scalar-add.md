- [«
sodium_crypto_core_ristretto255_random](function.sodium-crypto-core-ristretto255-random.md)
- [sodium_crypto_core_ristretto255_scalar_complement
»](function.sodium-crypto-core-ristretto255-scalar-complement.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Додає скалярне значення

# sodium_crypto_core_ristretto255_scalar_add

(PHP 8 \>u003d 8.1.0)

sodium_crypto_core_ristretto255_scalar_add — Додає скалярне
значення

### Опис

**sodium_crypto_core_ristretto255_scalar_add**(string `$x`, string
`$y`): string

Додає елемент `y` до `x`. Доступно з libsodium 1.0.18.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`x`
Скаляр, який представляє координату X.

`y`
Скаляр, який представляє координату Y.

### Значення, що повертаються

Повертає випадковий 32-байтовий рядок (string).

### Приклади

**Приклад #1 Приклад використання
**sodium_crypto_core_ristretto255_scalar_add()****

` <?php$foo u003d sodium_crypto_core_ristretto255_scalar_random();$bar u003d sodium_crypto_core_ristretto255_scalar_random();$value u003d sodium_crypto_core_ristretto255_scalar_add($foo, $bar);$value u003d sodium_crypto_core_ristretto255_scalar_sub($value, $bar);var_dump(hash_equals($foo, $ value));?> `

Результат виконання цього прикладу:

bool(true)

### Дивіться також

- [sodium_crypto_core_ristretto255_scalar_random()](function.sodium-crypto-core-ristretto255-scalar-random.md) -
Генерує випадковий ключ
- [sodium_crypto_core_ristretto255_scalar_sub()](function.sodium-crypto-core-ristretto255-scalar-sub.md) -
Віднімає скалярне значення
