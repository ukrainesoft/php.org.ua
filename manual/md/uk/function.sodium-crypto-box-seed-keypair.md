- [«
sodium_crypto_box_secretkey](function.sodium-crypto-box-secretkey.md)
- [sodium_crypto_box »](function.sodium-crypto-box.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Детерміністичний висновок ключової пари з одного ключа

# sodium_crypto_box_seed_keypair

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_box_seed_keypair - Детерміністичний висновок ключової пари
з одного ключа

### Опис

**sodium_crypto_box_seed_keypair**(string `$seed`): string

Скріплює початкове значення для формування секретного ключа,
витягує відкритий ключ та повертає їх у вигляді пари ключів.

Функції `*_seed_keypair` ідеально підходять для створення пари ключів з
пароля та солі. Використовуйте результат як seed для генерації бажаних
ключів.

### Список параметрів

`seed`
Якісь криптографічні дані. Має бути 32 байти.

### Значення, що повертаються

Ключова пара X25519 (секретний та відкритий ключі).
