- [«
sodium_crypto_auth_verify](function.sodium-crypto-auth-verify.md)
- [sodium_crypto_box_keypair_from_secretkey_and_publickey
»](function.sodium-crypto-box-keypair-from-secretkey-and-publickey.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Обчислити тег для повідомлення

# sodium_crypto_auth

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_auth — Обчислити тег для повідомлення

### Опис

**sodium_crypto_auth**(string `$message`, string `$key`): string

Симетрична автентифікація повідомлення за допомогою
**sodium_crypto_auth()** забезпечує цілісність, але не
конфіденційність.

На відміну від цифрових підписів (наприклад,
[sodium_crypto_sign_detached()](function.sodium-crypto-sign-detached.md)),
будь-яка сторона, здатна перевірити повідомлення, також здатна перевірити
справжність власних повідомлень. (Отже, симетрична
аутентифікація.)

### Список параметрів

`message`
Повідомлення, яке ви маєте намір підтвердити.

`key`
Ключ аутентифікації

### Значення, що повертаються

Тег аутентифікації
