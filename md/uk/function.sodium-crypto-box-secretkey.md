- [« sodium_crypto_box_seal](function.sodium-crypto-box-seal.md)
- [sodium_crypto_box_seed_keypair
»](function.sodium-crypto-box-seed-keypair.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Витягує секретний ключ із ключової пари crypto_box

# sodium_crypto_box_secretkey

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_box_secretkey — Витягує секретний ключ із ключової пари
crypto_box

### Опис

**sodium_crypto_box_secretkey**(string `$key_pair`): string

Отримує лише секретний ключ для цієї ключової пари.

### Список параметрів

`key_pair`
Пара ключів, створена, наприклад,
[sodium_crypto_box_keypair()](function.sodium-crypto-box-keypair.md)
або
[sodium_crypto_box_seed_keypair()](function.sodium-crypto-box-seed-keypair.md)

### Значення, що повертаються

Секретний ключ X25519.
