- [« sodium_crypto_shorthash](function.sodium-crypto-shorthash.md)
- [sodium_crypto_sign_ed25519_pk_to_curve25519
»](function.sodium-crypto-sign-ed25519-pk-to-curve25519.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Підписати повідомлення

# sodium_crypto_sign_detached

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_sign_detached — Підписати повідомлення

### Опис

**sodium_crypto_sign_detached**(string `$message`, string
`$secret_key`): string

Підписує повідомлення секретним ключем, який можна перевірити з
за допомогою відповідного відкритого ключа. Функція повертає
від'єднаний підпис.

### Список параметрів

`message`
Повідомлення для підписання.

`secret_key`
Секретний ключ. Дивіться
[sodium_crypto_sign_secretkey()](function.sodium-crypto-sign-secretkey.md)

### Значення, що повертаються

Криптографічний підпис.
