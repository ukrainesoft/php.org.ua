- [«
sodium_crypto_sign_ed25519_sk_to_curve25519](function.sodium-crypto-sign-ed25519-sk-to-curve25519.md)
- [sodium_crypto_sign_keypair
»](function.sodium-crypto-sign-keypair.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Об'єднує секретний ключ та відкритий ключ разом

# sodium_crypto_sign_keypair_from_secretkey_and_publickey

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_sign_keypair_from_secretkey_and_publickey — Об'єднує
секретний ключ та відкритий ключ разом

### Опис

**sodium_crypto_sign_keypair_from_secretkey_and_publickey**(string
`$secret_key`, string `$public_key`): string

Об'єднує секретний ключ та відкритий ключ разом.

### Список параметрів

`secret_key`
Секретний ключ Ed25519

`public_key`
Відкритий ключ Ed25519

### Значення, що повертаються

Ключова пара
