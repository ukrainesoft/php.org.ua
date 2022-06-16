- [«
sodium_crypto_pwhash_scryptsalsa208sha256](function.sodium-crypto-pwhash-scryptsalsa208sha256.md)
- [sodium_crypto_pwhash_str_verify
»](function.sodium-crypto-pwhash-str-verify.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Визначає, чи потрібно повторно використовувати пароль

# sodium_crypto_pwhash_str_needs_rehash

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_pwhash_str_needs_rehash — Визначає, чи потрібно повторно
використовувати пароль

### Опис

**sodium_crypto_pwhash_str_needs_rehash**(string `$password`, int
`$opslimit`, int `$memlimit`): bool

Визначає, чи слід повторно використовувати пароль на основі поточного
хеш-значення `opslimit` та `memlimit`.

### Список параметрів

`password`
Хеш пароля

`opslimit`
Налаштований opslimit; дивіться
[sodium_crypto_pwhash_str()](function.sodium-crypto-pwhash-str.md)

`memlimit`
Налаштований memlimit; дивіться
[sodium_crypto_pwhash_str()](function.sodium-crypto-pwhash-str.md)

### Значення, що повертаються

Повертає **`true`**, якщо наданий memlimit/opslimit не
відповідає тому, що зберігається у хеші. Повертає **`false`**, якщо
вони збігаються.
