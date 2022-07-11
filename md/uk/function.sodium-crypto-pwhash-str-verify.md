- [«
sodium_crypto_pwhash_str_needs_rehash](function.sodium-crypto-pwhash-str-needs-rehash.md)
- [sodium_crypto_pwhash_str »](function.sodium-crypto-pwhash-str.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Перевіряє, що пароль відповідає хешу

# sodium_crypto_pwhash_str_verify

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_pwhash_str_verify — Перевіряє, що пароль відповідає
хешу

### Опис

**sodium_crypto_pwhash_str_verify**(string `$hash`, string `$password`):
bool

Перевіряє, що хеш пароля, створений
[sodium_crypto_pwhash_str()](function.sodium-crypto-pwhash-str.md),
відповідає заданому паролю. Зверніть увагу, що в цій функції
порядок аргументів не відповідає порядку аргументів у схожій функції
[password_verify()](function.password-verify.md).

### Список параметрів

`hash`
Хеш, створений функцією [password_hash()](function.password-hash.md).

`password`
Користувальницький пароль.

### Значення, що повертаються

Повертає **`true`**, якщо пароль відповідає хешу, та **`false`**,
якщо ні.

### Примітки

> **Примітка**:
>
> Хеші обчислюються за допомогою алгоритму Argon2ID, який добре протистоїть
> обох видів атак: GPU та атак по сторонньому каналу.

### Дивіться також

- [sodium_crypto_pwhash_str()](function.sodium-crypto-pwhash-str.md) -
Отримати ASCII-кодований хеш
- [password_hash()](function.password-hash.md) - Створює хеш пароля
- [password_verify()](function.password-verify.md) - Перевіряє,
чи відповідає пароль хешу
