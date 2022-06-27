- [«
sodium_crypto_kdf_derive_from_key](function.sodium-crypto-kdf-derive-from-key.md)
- [sodium_crypto_kx_client_session_keys
»](function.sodium-crypto-kx-client-session-keys.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Створює випадковий кореневий ключ для інтерфейсу KDF

# sodium_crypto_kdf_keygen

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_kdf_keygen — Створює випадковий кореневий ключ для
інтерфейсу KDF

### Опис

**sodium_crypto_kdf_keygen**(): string

Створює випадковий ключ, що підходить для використання як
кореневого ключа для
[sodium_crypto_kdf_derive_from_key()](function.sodium-crypto-kdf-derive-from-key.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Випадковий 256-бітний ключ.
