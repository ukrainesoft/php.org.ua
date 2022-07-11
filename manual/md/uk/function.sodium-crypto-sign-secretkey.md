- [«
sodium_crypto_sign_publickey](function.sodium-crypto-sign-publickey.md)
- [sodium_crypto_sign_seed_keypair
»](function.sodium-crypto-sign-seed-keypair.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Витягує секретний ключ Ed25519 із пари ключів

# sodium_crypto_sign_secretkey

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_sign_secretkey — Витягує секретний ключ Ed25519 з пари
ключів

### Опис

**sodium_crypto_sign_secretkey**(string `$key_pair`): string

Виймає секретний ключ Ed25519 із пари ключів

### Список параметрів

`key_pair`
Ключова пара Ed25519 (дивіться
[sodium_crypto_sign_keypair()](function.sodium-crypto-sign-keypair.md))

### Значення, що повертаються

Секретний ключ Ed25519
