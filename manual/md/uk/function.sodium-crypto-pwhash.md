- [« sodium_crypto_pwhash_str](function.sodium-crypto-pwhash-str.md)
- [sodium_crypto_scalarmult_base
»](function.sodium-crypto-scalarmult-base.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Отримує ключ із пароля, використовуючи Argon2

# sodium_crypto_pwhash

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_pwhash — Отримує ключ із пароля, використовуючи Argon2

### Опис

**sodium_crypto_pwhash**(
int `$length`,
string `$password`,
string `$salt`,
int `$opslimit`,
int `$memlimit`,
int `$algo` u003d **`SODIUM_CRYPTO_PWHASH_ALG_DEFAULT`**
): string

Ця функція надає низькорівневий доступ до функції crypto_pwhash
бібліотеки libsodium. Якщо у вас немає принципової необхідності у цій
функції, краще використовувати
[sodium_crypto_pwhash_str()](function.sodium-crypto-pwhash-str.md) або
[password_hash()](function.password-hash.md).

Найпоширеніша причина використання цієї конкретної функції -
отримати початкові числа для криптографічних ключів з паролю та солі,
а потім використовувати ці початкові числа для генерації фактичних
ключів, необхідних для деяких цілей (наприклад,
[sodium_crypto_sign_detached()](function.sodium-crypto-sign-detached.md)).

### Список параметрів

`length`
int; Довжина хешу пароля в байтах.

`password`
string; Пароль, для якого створюється хеш.

`salt`
Сіль, яку потрібно додати до пароля перед хешуванням. Сіль винна
бути непередбачуваною, що в ідеалі генерується з хорошого джерела
випадкових чисел, таких як
[random_bytes()](function.random-bytes.md), а також бути довжиною не
менше байт, зазначених у константі **`SODIUM_CRYPTO_PWHASH_SALTBYTES`**.

`opslimit`
Представляє максимальну кількість обчислень для виконання
Збільшення цього числа призведе до того, що функції знадобиться більше
циклів ЦП для обчислення ключа Існують константи, доступні для
встановлення межі операцій для відповідних значень залежно від
передбачуваного використання, у порядку зменшення:
**`SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE`**,
**`SODIUM_CRYPTO_PWHASH_OPSLIMIT_MODERATE`** та
**`SODIUM_CRYPTO_PWHASH_OPSLIMIT_SENSITIVE`**.

`memlimit`
Максимальний обсяг ОЗУ в байтах, який використовуватиме функція.
Існують константи, які допоможуть вам вибрати відповідне значення в
порядку розміру: **`SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE`**,
**`SODIUM_CRYPTO_PWHASH_MEMLIMIT_MODERATE`** та
**`SODIUM_CRYPTO_PWHASH_MEMLIMIT_SENSITIVE`**. Як правило, вони повинні
поєднуватись з відповідними значеннями `opslimit`.

`algo`
int Число, що вказує алгоритм хешування, що використовується. За замовчуванням
задана **`SODIUM_CRYPTO_PWHASH_ALG_DEFAULT`** (рекомендований в даний час
час алгоритм, який може бути змінений при зміні версії libsodium
на іншу), або явно використовуючи константу
**`SODIUM_CRYPTO_PWHASH_ALG_ARGON2ID13`**, що представляє версію
алгоритму Argon2id 1.3.

### Значення, що повертаються

Повертає захешований пароль. Повертається значення є
бінарним рядком, а не ASCII-поданням і не містить жодного
додаткової інформації про параметри, з якими генерувався хеш.
Таким чином вам необхідно самим зберігати значення використаних
параметрів для перевірки коректності хешу у майбутньому. Щоб усім цим не
займатися – використовуйте функцію
[sodium_crypto_pwhash_str()](function.sodium-crypto-pwhash-str.md).

### Приклади

**Приклад #1 Приклад використання
[password_hash()](function.password-hash.md)**

` <?php//Для дальнейшенй проверки необходимо сохранить соль$salt u003d random_bytes(SODIUM_CRYPTO_PWHASH_SALTBYTES);// Используем bin2hex для удобочитаемостиecho bin2hex(    sodium_crypto_pwhash(        16, // u003du003d 128 бит        'password',        $salt,        SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE,        SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE,        SODIUM_CRYPTO_PWHASH_ALG_ARGON2ID13 ));?> `

Результатом виконання цього прикладу буде щось подібне:

a18f346ba57992eb7e4ae6abf3fd30ee
