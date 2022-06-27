- [«
sodium_crypto_pwhash_str_verify](function.sodium-crypto-pwhash-str-verify.md)
- [sodium_crypto_pwhash »](function.sodium-crypto-pwhash.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Отримати ASCII-кодований хеш

# sodium_crypto_pwhash_str

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_pwhash_str — Отримати ASCII-кодований хеш

### Опис

**sodium_crypto_pwhash_str**(string `$password`, int `$opslimit`, int
`$memlimit`): string

Використовує ресурсомісткий за ЦПУ та пам'яті алгоритм хешування. Сіль
генерується випадково. Можна встановити обмеження щодо використання пам'яті
та ЦПУ. Можна використовувати для генерації ASCII-хешей, придатних для
зберігання паролів.

### Список параметрів

`password`
string; Пароль, для якого генеруватиметься хеш.

`opslimit`
Задає обмеження використання процесорного часу. Чим більше
число - тим більше навантаження на процесор при генерації ключа.
Також можна використовувати певні константи для цього параметра
(перераховані у порядку посилення захищеності та споживання ЦПУ):
**`SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE`**,
**`SODIUM_CRYPTO_PWHASH_OPSLIMIT_MODERATE`** та
**`SODIUM_CRYPTO_PWHASH_OPSLIMIT_SENSITIVE`**.

`memlimit`
Задає обмеження використання пам'яті в байтах. Можно використовувати
визначені константи для цього параметра (перераховані в порядку
посилення захищеності та споживання пам'яті):
**`SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE`**,
**`SODIUM_CRYPTO_PWHASH_MEMLIMIT_MODERATE`** та
**`SODIUM_CRYPTO_PWHASH_MEMLIMIT_SENSITIVE`**. Має сенс використовувати
однакові рівні захищеності в memlimit і opslimit.

### Значення, що повертаються

Повертає хеш пароля.

Для того, щоб для того самого пароля завжди генерувався один і
той же хеш, необхідно використовувати однакові значення `opslimit` і
`memlimit`. Оскільки ці параметри включені в згенерований хеш,
функція
[sodium_crypto_pwhash_str_verify()](function.sodium-crypto-pwhash-str-verify.md)
може перевіряти його коректність без необхідності зберігати ці параметри
окремо.

### Приклади

**Приклад #1 Приклад використання **sodium_crypto_pwhash_str()****

` <?php$password u003d 'password';echo sodium_crypto_pwhash_str(    $password,   SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE,    SODIUM_CRYPTO_PIT_ML `

Результатом виконання цього прикладу буде щось подібне:

$argon2id$vu003d19$mu003d65536,tu003d2,pu003d1$oWIfdaXwWwhVmovOBc2NAQ$EbsZ+JnZyyavkafS0hoc4HdaOB0ILWZESAZ7kVGa+Iw

### Примітки

> **Примітка**:
>
> Хеші обчислюються за допомогою алгоритму Argon2ID, стійкого до атак
> стороннього каналу та GPU. На відміну від функції
> [password_hash()](function.password-hash.md), у цієї функції немає
> параметр salt (він генерується автоматично), а параметри `opslimit`
> і `memlimit` є обов'язковими.

### Дивіться також

- [sodium_crypto_pwhash_str_verify()](function.sodium-crypto-pwhash-str-verify.md) -
Перевіряє, що пароль відповідає хешу
- [sodium_crypto_pwhash()](function.sodium-crypto-pwhash.md) -
Отримує ключ із пароля, використовуючи Argon2
- [password_hash()](function.password-hash.md) - Створює хеш пароля
- [password_verify()](function.password-verify.md) - Перевіряє,
чи відповідає пароль хешу
- [» Документація на Libsodium
Argon2](https://download.libsodium.org/doc/password_hashing/the_argon2i_function.md)
