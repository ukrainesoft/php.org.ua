- [«
sodium_crypto_auth_keygen](function.sodium-crypto-auth-keygen.md)
- [sodium_crypto_auth »](function.sodium-crypto-auth.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Перевіряє, чи допустимо тег для повідомлення

# sodium_crypto_auth_verify

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_auth_verify — Перевіряє, чи припустимо тег для повідомлення

### Опис

**sodium_crypto_auth_verify**(string `$mac`, string `$message`, string
`$key`): bool

Перевіряє, що тег автентифікації є дійсним для цього повідомлення та
ключа.

На відміну від цифрових підписів (наприклад,
[sodium_crypto_sign_verify_detached()](function.sodium-crypto-sign-verify-detached.md)),
будь-яка сторона, здатна перевірити повідомлення, також здатна перевірити
справжність власних повідомлень. (Отже, симетрична
перевірка автентичності.)

### Список параметрів

`mac`
Тег аутентифікації, створений
[sodium_crypto_auth()](function.sodium-crypto-auth.md)

`message`
Повідомлення

`key`
Ключ аутентифікації

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
