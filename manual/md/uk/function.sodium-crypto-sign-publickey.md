- [«
sodium_crypto_sign_publickey_from_secretkey](function.sodium-crypto-sign-publickey-from-secretkey.md)
- [sodium_crypto_sign_secretkey
»](function.sodium-crypto-sign-secretkey.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Витягує відкритий ключ Ed25519 із пари ключів

# sodium_crypto_sign_publickey

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_sign_publickey — Витягує відкритий ключ Ed25519 з пари
ключів

### Опис

**sodium_crypto_sign_publickey**(string `$key_pair`): string

Витягує відкритий ключ Ed25519 із пари ключів.

### Список параметрів

`key_pair`
Ключова пара Ed25519 (дивіться
[sodium_crypto_sign_keypair()](function.sodium-crypto-sign-keypair.md))

### Значення, що повертаються

Відкритий ключ Ed25519
