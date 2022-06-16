- [«
sodium_crypto_pwhash_scryptsalsa208sha256_str](function.sodium-crypto-pwhash-scryptsalsa208sha256-str.md)
- [sodium_crypto_pwhash_str_needs_rehash
»](function.sodium-crypto-pwhash-str-needs-rehash.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Отримує ключ із пароля, використовуючи scrypt

# sodium_crypto_pwhash_scryptsalsa208sha256

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_pwhash_scryptsalsa208sha256 — Отримує ключ із пароля,
використовуючи scrypt

### Опис

**sodium_crypto_pwhash_scryptsalsa208sha256**(
int `$length`,
string `$password`,
string `$salt`,
int `$opslimit`,
int `$memlimit`
): string

Аналог функції scrypt
[sodium_crypto_pwhash()](function.sodium-crypto-pwhash.md).

Найпоширеніша причина використання цієї конкретної функції -
отримати початкові числа для криптографічних ключів з паролю та солі,
а потім використовувати ці початкові числа для генерації фактичних
ключів, необхідних для деяких цілей (наприклад,
[sodium_crypto_sign_detached()](function.sodium-crypto-sign-detached.md)).

### Список параметрів

`length`
Довжина генерованого хеша пароля в байтах.

`password`
Пароль, для якого створюється хеш.

`salt`
Сіль, яку потрібно додати до пароля перед хешуванням. Сіль винна
бути непередбачуваною, в ідеалі згенерованою з гарного джерела
випадкових чисел, таких як
[random_bytes()](function.random-bytes.md), і мати довжину не менше
**`SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_SALTBYTES`** байт.

`opslimit`
Представляє максимальну кількість обчислень для виконання.
Збільшення цього числа призведе до того, що функції знадобиться більше
циклів ЦП для обчислення ключа Доступні деякі константи для
встановлення межі операцій на відповідні значення в залежності від
передбачуваного використання, у порядку розміру:
**`SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_OPSLIMIT_INTERACTIVE`** та
**`SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_OPSLIMIT_SENSITIVE`**.

`memlimit`
Максимальний обсяг ОЗУ, який використовуватиме функція, в байтах.
Існують константи, які допоможуть вам вибрати відповідне значення в
порядку їх розміру:
**`SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_MEMLIMIT_INTERACTIVE`** and
**`SODIUM_CRYPTO_PWHASH_SCRYPTSALSA208SHA256_MEMLIMIT_SENSITIVE`**.
Зазвичай вони повинні поєднуватись з відповідними значеннями `opslimit`.

### Значення, що повертаються

Рядок байтів бажаної довжини.
