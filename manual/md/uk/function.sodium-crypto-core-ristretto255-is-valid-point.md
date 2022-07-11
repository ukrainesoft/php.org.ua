- [«
sodium_crypto_core_ristretto255_from_hash](function.sodium-crypto-core-ristretto255-from-hash.md)
- [sodium_crypto_core_ristretto255_random
»](function.sodium-crypto-core-ristretto255-random.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Визначає, чи лежить точка на кривій.

# sodium_crypto_core_ristretto255_is_valid_point

(PHP 8 \>u003d 8.1.0)

sodium_crypto_core_ristretto255_is_valid_point — Визначає, чи лежить
точка на кривій ristretto255

### Опис

**sodium_crypto_core_ristretto255_is_valid_point**(string `$s`): bool

Визначає, чи лежить точка на кривій ristretto255 у канонічній формі
на головній підгрупі та що точка не має малого порядку. Доступно,
починаючи з libsodium 1.0.18.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`s`
Крапка еліптичної кривої.

### Значення, що повертаються

Повертає **`true`**, якщо точка `s` знаходиться на кривій ristretto255,
інакше повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання
**sodium_crypto_core_ristretto255_is_valid_point()****

` <?php$foo u003d sodium_crypto_core_ristretto255_scalar_random();$bar u003d sodium_crypto_scalarmult_ristretto255_base($foo);var_dump(sodium_crypto_core_ristretto255_$_valid

Результат виконання цього прикладу:

bool(true)

### Дивіться також

- [sodium_crypto_core_ristretto255_scalar_random()](function.sodium-crypto-core-ristretto255-scalar-random.md) -
Генерує випадковий ключ
- [sodium_crypto_scalarmult_ristretto255_base()](function.sodium-crypto-scalarmult-ristretto255-base.md) -
Обчислює відкритий ключ із закритого ключа
