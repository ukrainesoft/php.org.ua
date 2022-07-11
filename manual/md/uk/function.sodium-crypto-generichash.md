- [«
sodium_crypto_generichash_update](function.sodium-crypto-generichash-update.md)
- [sodium_crypto_kdf_derive_from_key
»](function.sodium-crypto-kdf-derive-from-key.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Отримати хеш повідомлення

# sodium_crypto_generichash

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_generichash — Отримати хеш повідомлення

### Опис

**sodium_crypto_generichash**(string `$message`, string `$key` u003d "", int
`$length` u003d **`SODIUM_CRYPTO_GENERICHASH_BYTES`**): string

Хешує повідомлення за допомогою BLAKE2b.

### Список параметрів

`message`
Хешені повідомлення.

`key`
(Необов'язковий) криптографічний ключ. Він виконує ту саму функцію, що
і ключ HMAC, але використовується як зарезервований розділ внутрішнього
стану BLAKE2.

`length`
Розмір виводу.

### Значення, що повертаються

Криптографічний хеш як необроблених байтів. Якщо бажаний висновок
у шістнадцятковому коді, результат можна передати в
[sodium_bin2hex()](function.sodium-bin2hex.md).
