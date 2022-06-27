- [«
sodium_crypto_scalarmult_ristretto255](function.sodium-crypto-scalarmult-ristretto255.md)
- [sodium_crypto_secretbox_keygen
»](function.sodium-crypto-secretbox-keygen.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Обчислити загальний секрет на підставі секретного ключа користувача та
відкритого ключа іншого користувача

# sodium_crypto_scalarmult

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_scalarmult — Обчислити загальний секрет на основі
секретного ключа користувача та відкритого ключа іншого користувача

### Опис

**sodium_crypto_scalarmult**(string `$n`, string `$p`): string

Еліптична крива Діффі-Хеллмана. Обчислює скаляр n помножений на
точку p на еліптичній кривій.

### Список параметрів

`n`
скаляр, який зазвичай є секретним ключем

`p`
точка (координата x), яка зазвичай є відкритим ключем

### Значення, що повертаються

32-байтовий випадковий рядок.
