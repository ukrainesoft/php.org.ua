- [«
sodium_crypto_sign_seed_keypair](function.sodium-crypto-sign-seed-keypair.md)
- [sodium_crypto_sign »](function.sodium-crypto-sign.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Перевірити підпис для повідомлення

# sodium_crypto_sign_verify_detached

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_sign_verify_detached — Перевірити підпис для повідомлення

### Опис

**sodium_crypto_sign_verify_detached**(string `$signature`, string
`$message`, string `$public_key`): bool

Перевіряє підпис для повідомлення

### Список параметрів

`signature`
Криптографічний підпис, отриманий за допомогою
[sodium_crypto_sign_detached()](function.sodium-crypto-sign-detached.md)

`message`
Перевірене повідомлення

`public_key`
Відкритий ключ ed25519

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
