- [« sodium_crypto_kdf_keygen](function.sodium-crypto-kdf-keygen.md)
- [sodium_crypto_kx_keypair »](function.sodium-crypto-kx-keypair.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- обчислює ключі сесії на стороні клієнта

# sodium_crypto_kx_client_session_keys

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_kx_client_session_keys — Обчислює ключі сесії на стороні
клієнта

### Опис

**sodium_crypto_kx_client_session_keys**(string `$client_key_pair`,
string `$server_key`): array

Обчислює ключі сеансу за клієнта, використовуючи метод обміну
ключами X25519+BLAKE2b.

### Список параметрів

`client_key_pair`
Пара ключів crypto_kx, наприклад, згенерована
[sodium_crypto_kx_keypair()](function.sodium-crypto-kx-keypair.md).

`server_key`
Відкритий ключ crypto_kx.

### Значення, що повертаються

Масив, що складається із двох рядків. Першу слід використовувати для прийому
даних із сервера. Другу слід використовувати для надсилання даних на
сервер.
