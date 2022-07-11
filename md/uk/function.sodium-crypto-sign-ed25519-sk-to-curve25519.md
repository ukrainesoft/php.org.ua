- [«
sodium_crypto_sign_ed25519_pk_to_curve25519](function.sodium-crypto-sign-ed25519-pk-to-curve25519.md)
- [sodium_crypto_sign_keypair_from_secretkey_and_publickey
»](function.sodium-crypto-sign-keypair-from-secretkey-and-publickey.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Перетворити секретний ключ із системи Ed25519 на секретний ключ
Curve25519

# sodium_crypto_sign_ed25519_sk_to_curve25519

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_sign_ed25519_sk_to_curve25519 — Перетворити секретний
ключ із системи Ed25519 в секретний ключ Curve25519

### Опис

**sodium_crypto_sign_ed25519_sk_to_curve25519**(string `$secret_key`):
string

Обчислює біраціонально-еквівалентний секретний ключ X25519 для
секретного ключа Ed25519.

### Список параметрів

`secret_key`
Секретний ключ, який підходить для функцій crypto_sign.

### Значення, що повертаються

Секретний ключ, який підходить для crypto_box.
