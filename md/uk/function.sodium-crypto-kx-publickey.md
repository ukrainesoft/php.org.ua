- [« sodium_crypto_kx_keypair](function.sodium-crypto-kx-keypair.md)
- [sodium_crypto_kx_secretkey
»](function.sodium-crypto-kx-secretkey.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Витягує відкритий ключ із пари ключів crypto_kx

# sodium_crypto_kx_publickey

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_kx_publickey — Витягує відкритий ключ із пари ключів
crypto_kx

### Опис

**sodium_crypto_kx_publickey**(string `$key_pair`): string

Виймає відкритий ключ із пари ключів crypto_kx.

### Список параметрів

`key_pair`
Пара ключів X25519, наприклад, згенерована
[sodium_crypto_kx_keypair()](function.sodium-crypto-kx-keypair.md).

### Значення, що повертаються

Відкритий ключ X25519.
