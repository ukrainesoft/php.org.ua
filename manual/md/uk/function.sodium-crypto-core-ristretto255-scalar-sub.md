- [«
sodium_crypto_core_ristretto255_scalar_reduce](function.sodium-crypto-core-ristretto255-scalar-reduce.md)
- [sodium_crypto_core_ristretto255_sub
»](function.sodium-crypto-core-ristretto255-sub.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Віднімає скалярне значення

# sodium_crypto_core_ristretto255_scalar_sub

(PHP 8 \>u003d 8.1.0)

sodium_crypto_core_ristretto255_scalar_sub — Віднімає скалярне значення

### Опис

**sodium_crypto_core_ristretto255_scalar_sub**(string `$x`, string
`$y`): string

Віднімає скалярне значення `y` з `x`. Доступно, починаючи з libsodium
1.0.18.

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
**sodium_crypto_core_ristretto255_scalar_sub()****

` <?php$foo u003d sodium_crypto_core_ristretto255_scalar_random();$bar u003d sodium_crypto_core_ristretto255_scalar_random();$value u003d sodium_crypto_core_ristretto255_scalar_add($foo, $bar);$value u003d sodium_crypto_core_ristretto255_scalar_sub($value, $bar);var_dump(hash_equals($foo, $ value));?> `

Результат виконання цього прикладу:

bool(true)

### Дивіться також

- [sodium_crypto_core_ristretto255_scalar_random()](function.sodium-crypto-core-ristretto255-scalar-random.md) -
Генерує випадковий ключ
- [sodium_crypto_core_ristretto255_scalar_add()](function.sodium-crypto-core-ristretto255-scalar-add.md) -
Додає скалярне значення
