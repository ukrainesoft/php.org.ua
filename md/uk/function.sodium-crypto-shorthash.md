- [«
sodium_crypto_shorthash_keygen](function.sodium-crypto-shorthash-keygen.md)
- [sodium_crypto_sign_detached
»](function.sodium-crypto-sign-detached.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Обчислює короткий хеш повідомлення та ключ

# sodium_crypto_shorthash

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_shorthash — Обчислює короткий хеш повідомлення та ключ

### Опис

**sodium_crypto_shorthash**(string `$message`, string `$key`): string

**sodium_crypto_shorthash()** обгортає хеш-функцію під назвою
SipHash-2-4, яка ідеально підходить для реалізації хеш-таблиць,
які не схильні до атак відмови в обслуговуванні через колізію хешей
(Hash-DoS).

SipHash-2-4 не є криптографічною хеш-функцією загального
призначення.

### Список параметрів

`message`
Повідомлення, хеш якого потрібно обчислити.

`key`
Хеш-ключ.

### Значення, що повертаються
