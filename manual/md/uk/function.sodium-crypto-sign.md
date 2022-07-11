- [«
sodium_crypto_sign_verify_detached](function.sodium-crypto-sign-verify-detached.md)
- [sodium_crypto_stream_keygen
»](function.sodium-crypto-stream-keygen.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Підписати повідомлення

# sodium_crypto_sign

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_sign — Підписати повідомлення

### Опис

**sodium_crypto_sign**(string `$message`, string `$secret_key`): string

Підписує повідомлення секретним ключем, який можна перевірити з
за допомогою відповідного відкритого ключа. Функція прикріплює підпис до
повідомленню. Подробиці у розділі
[sodium_crypto_sign_detached()](function.sodium-crypto-sign-detached.md)
для окремих підписів.

### Список параметрів

`message`
Повідомлення для підпису.

`secret_key`
Секретний ключ. Дивіться
[sodium_crypto_sign_secretkey()](function.sodium-crypto-sign-secretkey.md)

### Значення, що повертаються

Підписане повідомлення (не зашифроване).
