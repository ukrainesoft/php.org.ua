- [«
sodium_crypto_box_publickey](function.sodium-crypto-box-publickey.md)
- [sodium_crypto_box_seal »](function.sodium-crypto-box-seal.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Розшифровка відкритим ключем без автентифікації

# sodium_crypto_box_seal_open

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_box_seal_open — Розшифровка відкритим ключем без перевірки
справжності

### Опис

**sodium_crypto_box_seal_open**(string `$ciphertext`, string
`$key_pair`): string\|false

Розшифровує повідомлення, зашифроване за допомогою
[sodium_crypto_box_seal()](function.sodium-crypto-box-seal.md).

### Список параметрів

`ciphertext`
Зашифроване повідомлення

`key_pair`
Ключова пара отримувача. Повинна включати секретний ключ.

### Значення, що повертаються

Текст у разі успішного виконання або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **sodium_crypto_box_seal_open()****

`<?php// Шифрований текст нечутливий; base64_decode в порядке$sealed_b64 u003d "oRBXXAV4iQBrxlV4A21Bord8Yo/D8ZlrIIGNyaRCcGBfpz0map52I3xq6l+CST+1NSgQkbV+HiYyFjXWiWiaCGupGf+zl4bgWj/A9Adtem7Jt3h3emrMsLwu003d";$sealed u003d base64_decode($sealed_b64);// Ключевая пара содержит криптографический секрет; использовать безопасный по времени декодер$keypair_b64 u003d "KZkF8wnB7bnC2aXB3lFOqCTc0Z6MllvaQb9ASVG8o2/MsewkuE4u1uaEgTzSakeiYyIW8DGj+02/L3cWIbs9bQu003du003d";$keypair u003d sodium_base642bin($keypair_b64, SODIUM_BASE64_VARIANT_ORIGINAL);$opened u003d sodium_crypto_box_seal_open($sealed, $keypair);var_dump($opened);? > `

Результатом виконання цього прикладу буде щось подібне:

string(41) "Writing software in PHP can be a delight!"
