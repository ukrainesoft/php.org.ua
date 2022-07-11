- [«
sodium_crypto_core_ristretto255_scalar_sub](function.sodium-crypto-core-ristretto255-scalar-sub.md)
- [sodium_crypto_generichash_final
»](function.sodium-crypto-generichash-final.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Віднімає елемент

# sodium_crypto_core_ristretto255_sub

(PHP 8 \>u003d 8.1.0)

sodium_crypto_core_ristretto255_sub — Віднімає елемент

### Опис

**sodium_crypto_core_ristretto255_sub**(string `$p`, string `$q`):
string

Віднімає елемент `q` з `p`. Доступно з libsodium 1.0.18.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`p`
Елемент.

`q`
Елемент.

### Значення, що повертаються

Повертає випадковий 32-байтовий рядок (string).

### Приклади

**Приклад #1 Приклад використання
**sodium_crypto_core_ristretto255_sub()****

` <?php$foo u003d sodium_crypto_core_ristretto255_random();$bar u003d sodium_crypto_core_ristretto255_random();$value u003d sodium_crypto_core_ristretto255_add($foo, $bar);$value u003d sodium_crypto_core_ristretto255_sub($value, $bar);var_dump(hash_equals($foo, $ value));?> `

Результат виконання цього прикладу:

bool(true)

### Дивіться також

- [sodium_crypto_core_ristretto255_random()](function.sodium-crypto-core-ristretto255-random.md) -
Генерує випадковий ключ
- [sodium_crypto_core_ristretto255_add()](function.sodium-crypto-core-ristretto255-add.md) -
Додає елемент
