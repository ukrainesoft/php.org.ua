- [«
sodium_crypto_scalarmult_base](function.sodium-crypto-scalarmult-base.md)
- [sodium_crypto_scalarmult_ristretto255
»](function.sodium-crypto-scalarmult-ristretto255.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Обчислює відкритий ключ із закритого ключа

# sodium_crypto_scalarmult_ristretto255_base

(PHP 8 \>u003d 8.1.1)

sodium_crypto_scalarmult_ristretto255_base — Обчислює відкритий ключ з
закритого ключа

### Опис

**sodium_crypto_scalarmult_ristretto255_base**(string `$n`): string

З огляду на закритий ключ обчислює відповідний відкритий ключ.
Доступно з libsodium 1.0.18.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`n`
Закритий ключ.

### Значення, що повертаються

Повертає випадковий 32-байтовий рядок (string).

### Дивіться також

- [sodium_crypto_scalarmult_ristretto255()](function.sodium-crypto-scalarmult-ristretto255.md) -
Обчислює загальний секрет
