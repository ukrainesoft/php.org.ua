- [«
sodium_crypto_kx_seed_keypair](function.sodium-crypto-kx-seed-keypair.md)
- [sodium_crypto_pwhash_scryptsalsa208sha256_str_verify
»](function.sodium-crypto-pwhash-scryptsalsa208sha256-str-verify.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- обчислює ключі сесії на стороні сервера

# sodium_crypto_kx_server_session_keys

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_kx_server_session_keys — Обчислює ключі сесії на стороні
сервера

### Опис

**sodium_crypto_kx_server_session_keys**(string `$server_key_pair`,
string `$client_key`): array

Обчислює ключі сесії на стороні сервера, використовуючи метод обміну
ключами X25519+BLAKE2b.

### Список параметрів

`server_key_pair`
Пара ключів crypto_kx, наприклад, згенерована
[sodium_crypto_kx_keypair()](function.sodium-crypto-kx-keypair.md).

`client_key`
Відкритий ключ crypto_kx.

### Значення, що повертаються

Масив, що складається із двох рядків. Першу слід використовувати для
отримання даних від клієнта Другу слід використовувати для надсилання
даних клієнта.
