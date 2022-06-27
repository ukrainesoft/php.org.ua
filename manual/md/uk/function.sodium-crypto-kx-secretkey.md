- [«
sodium_crypto_kx_publickey](function.sodium-crypto-kx-publickey.md)
- [sodium_crypto_kx_seed_keypair
»](function.sodium-crypto-kx-seed-keypair.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Витягує секретний ключ із пари ключів crypto_kx

# sodium_crypto_kx_secretkey

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_kx_secretkey — Витягує секретний ключ із пари ключів
crypto_kx

### Опис

**sodium_crypto_kx_secretkey**(string `$key_pair`): string

Витягує секретний ключ із пари ключів crypto_kx.

### Список параметрів

`key_pair`
Пара ключів X25519, наприклад, згенерована
[sodium_crypto_kx_keypair()](function.sodium-crypto-kx-keypair.md).

### Значення, що повертаються

Секретний ключ X25519.
