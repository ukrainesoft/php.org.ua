- [«
sodium_crypto_sign_keypair](function.sodium-crypto-sign-keypair.md)
- [sodium_crypto_sign_publickey_from_secretkey
»](function.sodium-crypto-sign-publickey-from-secretkey.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Перевірити, що підписане повідомлення має коректний підпис

# sodium_crypto_sign_open

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_sign_open — Перевірити, чи підписане повідомлення має
коректний підпис

### Опис

**sodium_crypto_sign_open**(string `$signed_message`, string
`$public_key`): string\|false

Перевіряє підпис, прикріплений до повідомлення, та повертає повідомлення

### Список параметрів

`signed_message`
Повідомлення, підписане
[sodium_crypto_sign()](function.sodium-crypto-sign.md)

`public_key`
Відкритий ключ Ed25519

### Значення, що повертаються

У разі успішного виконання повертає вихідне підписане повідомлення
або **`false`** у разі виникнення помилки.
