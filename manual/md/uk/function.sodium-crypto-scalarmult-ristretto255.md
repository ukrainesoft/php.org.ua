- [«
sodium_crypto_scalarmult_ristretto255_base](function.sodium-crypto-scalarmult-ristretto255-base.md)
- [sodium_crypto_scalarmult »](function.sodium-crypto-scalarmult.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- обчислює загальний секрет

# sodium_crypto_scalarmult_ristretto255

(PHP 8 \>u003d 8.1.1)

sodium_crypto_scalarmult_ristretto255 - Обчислює загальний секрет

### Опис

**sodium_crypto_scalarmult_ristretto255**(string `$n`, string `$p`):
string

Обчислює скаляр `n`, помножений на точку `p`. Доступно, починаючи з
libsodium 1.0.18.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`n`
Скаляр, який зазвичай є закритим ключем.

`p`
Крапка (x-координата), яка зазвичай є відкритим ключем.

### Значення, що повертаються

Повертає випадковий 32-байтовий рядок (string).

### Дивіться також

- [sodium_crypto_scalarmult_ristretto255_base()](function.sodium-crypto-scalarmult-ristretto255-base.md) -
Обчислює відкритий ключ із закритого ключа
