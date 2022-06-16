- [«
sodium_crypto_box_publickey_from_secretkey](function.sodium-crypto-box-publickey-from-secretkey.md)
- [sodium_crypto_box_seal_open
»](function.sodium-crypto-box-seal-open.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Витягує відкритий ключ із ключової пари crypto_box

# sodium_crypto_box_publickey

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_box_publickey — Витягує відкритий ключ із ключової пари
crypto_box

### Опис

**sodium_crypto_box_publickey**(string `$key_pair`): string

Отримує лише відкритий ключ із ключової пари.

### Список параметрів

`key_pair`
Ключова пара, створена, наприклад,
[sodium_crypto_box_keypair()](function.sodium-crypto-box-keypair.md)
або
[sodium_crypto_box_seed_keypair()](function.sodium-crypto-box-seed-keypair.md).

### Значення, що повертаються

Відкритий ключ X25519.
