- [«password_needs_rehash](function.password-needs-rehash.md)
- [Sodium »](book.sodium.md)

- [PHP Manual](index.md)
- [Функції хешування паролів](ref.password.md)
- Перевіряє, чи пароль хешу відповідає

#password_verify

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

password_verify — Перевіряє, чи пароль хешу відповідає

### Опис

**password_verify**(string `$password`, string `$hash`): bool

Перевіряє, чи пароль хешу. Функція **password_verify()**
сумісна з [crypt()](function.crypt.md). Отже, хеші
паролів, створені [crypt()](function.crypt.md), можуть бути
використані в **password_verify()**.

Зверніть увагу, що [password_hash()](function.password-hash.md)
повертає алгоритм, вартість та сіль як частини хешу. Таким чином, вся
необхідна для перевірки інформація включена до нього. Це дозволяє
проводити перевірку без необхідності зберігати всі ці дані окремо.

Ця функція безпечна для атак часу.

### Список параметрів

`password`
Користувальницький пароль.

`hash`
Хеш, створений функцією [password_hash()](function.password-hash.md).

### Значення, що повертаються

Повертає **`true`** або **`false`**, залежно від результатів
перевірки.

### Приклади

**Приклад #1 Приклад використання **password_verify()****

` <?php// Смотрите пример использования password_hash(), для понимания откуда это взялось.$hash u003d '$2y$07$BCryptRequires22Chrcte/VlQH0piJtjXl.0t1XkA8pw9dMXTpOq';if (password_verify('rasmuslerdorf', $hash)) {    echo 'Пароль правильний!';} else {   echo 'Пароль неправильний.';}?> `

Результат виконання цього прикладу:

Пароль правильний!

### Дивіться також

- [password_hash()](function.password-hash.md) - Створює хеш пароля
- [» користувацька
реалізація](https://github.com/ircmaxell/password_compat)
- [sodium_crypto_pwhash_str_verify()](function.sodium-crypto-pwhash-str-verify.md) -
Перевіряє, що пароль відповідає хешу
