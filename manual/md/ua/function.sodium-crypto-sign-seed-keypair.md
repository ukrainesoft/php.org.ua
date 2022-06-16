- [«
sodium_crypto_sign_secretkey](function.sodium-crypto-sign-secretkey.md)
- [sodium_crypto_sign_verify_detached
»](function.sodium-crypto-sign-verify-detached.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Детерміноване виведення пари ключів з одного ключа

# sodium_crypto_sign_seed_keypair

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_sign_seed_keypair — Детерміноване виведення пари ключів з
одного ключа

### Опис

**sodium_crypto_sign_seed_keypair**(string `$seed`): string

Скріплює початкове значення для формування секретного ключа,
витягує відкритий ключ та повертає їх у вигляді пари ключів.

Функції `*_seed_keypair` ідеально підходять для створення пари ключів з
пароля та солі. Використовуйте результат як seed для генерації бажаних
ключів.

### Список параметрів

`seed`
Якісь криптографічні дані. Має бути 32 байти.

### Значення, що повертаються

Ключова пара (секретний та відкритий ключі)
