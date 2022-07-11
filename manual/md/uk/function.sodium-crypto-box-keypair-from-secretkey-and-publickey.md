- [« sodium_crypto_auth](function.sodium-crypto-auth.md)
- [sodium_crypto_box_keypair
»](function.sodium-crypto-box-keypair.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Створює уніфікований рядок ключової пари із секретного та
відкритого ключів

# sodium_crypto_box_keypair_from_secretkey_and_publickey

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_box_keypair_from_secretkey_and_publickey — Створює
уніфікований рядок ключової пари із секретного та відкритого ключів

### Опис

**sodium_crypto_box_keypair_from_secretkey_and_publickey**(string
`$secret_key`, string `$public_key`): string

Функція існує для задоволення вимог API, наприклад
**crypto_box()**. Передайте секретний ключ однієї сторони та відкритий ключ
інший і ви отримаєте ключову пару для спілкування.

### Список параметрів

`secret_key`
Секретний ключ.

`public_key`
Відкритий ключ.

### Значення, що повертаються

Ключова пара X25519.
