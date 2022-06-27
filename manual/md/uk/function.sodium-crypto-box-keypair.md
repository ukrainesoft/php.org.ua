- [«
sodium_crypto_box_keypair_from_secretkey_and_publickey](function.sodium-crypto-box-keypair-from-secretkey-and-publickey.md)
- [sodium_crypto_box_open »](function.sodium-crypto-box-open.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Згенерувати випадковим чином секретний ключ та відповідний йому
відкритий ключ

# sodium_crypto_box_keypair

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_box_keypair — Згенерувати випадковим чином секретний
ключ та відповідний йому відкритий ключ

### Опис

**sodium_crypto_box_keypair**(): string

Створює секретний та відкритий ключі як один рядок.

Щоб отримати секретний ключ із цього уніфікованого рядка ключовий
пари, дивіться
[sodium_crypto_box_secretkey()](function.sodium-crypto-box-secretkey.md).
Щоб отримати відкритий ключ із цього уніфікованого рядка ключового
пари, дивіться
[sodium_crypto_box_publickey()](function.sodium-crypto-box-publickey.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Один рядок, що містить секретний ключ X25519 та відповідний відкритий
ключ X25519.
