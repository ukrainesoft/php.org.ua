- [«
sodium_crypto_sign_detached](function.sodium-crypto-sign-detached.md)
- [sodium_crypto_sign_ed25519_sk_to_curve25519
»](function.sodium-crypto-sign-ed25519-sk-to-curve25519.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Перетворення відкритого ключа системи Ed25519 у відкритий ключ
Curve25519

# sodium_crypto_sign_ed25519_pk_to_curve25519

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_sign_ed25519_pk_to_curve25519 — Перетворення відкритого
ключа системи Ed25519 у відкритий ключ Curve25519

### Опис

**sodium_crypto_sign_ed25519_pk_to_curve25519**(string `$public_key`):
string

Обчислює біраціонально-еквівалентний відкритий ключ X25519 для відкритого
ключа Ed25519.

### Список параметрів

`public_key`
Відкритий ключ, який підходить для функцій crypto_sign.

### Значення, що повертаються

Відкритий ключ, який підходить для функцій crypto_box.
