- [«
sodium_crypto_box_seal_open](function.sodium-crypto-box-seal-open.md)
- [sodium_crypto_box_secretkey
»](function.sodium-crypto-box-secretkey.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Шифрування відкритим ключем без автентифікації

# sodium_crypto_box_seal

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_box_seal — Шифрування відкритим ключем без перевірки
справжності

### Опис

**sodium_crypto_box_seal**(string `$message`, string `$public_key`):
string

Шифрує повідомлення так, що лише одержувач може його розшифрувати.

На відміну від [sodium_crypto_box()](function.sodium-crypto-box.md), вам
потрібно знати лише відкритий ключ одержувача, щоб використовувати
**sodium_crypto_box_seal()**. Однак одним із наслідків цієї зручності
є те, що зашифрований текст не прив'язаний до статичного
відкритого ключа і, отже, не автентифікується. Отже,
шифрування відкритим ключем без автентифікації.

**sodium_crypto_box_seal()**, як і раніше, забезпечує цілісність
зашифрований текст. Тільки не перевіряє справжність відправника.

Якщо вам також потрібна автентифікація відправника, найкраще
почати з функцій
[sodium_crypto_sign()](function.sodium-crypto-sign.md).

### Список параметрів

`message`
Повідомлення, яке потрібно зашифрувати.

`public_key`
Відкритий ключ, який відповідає єдиному ключу, який може
розшифрувати повідомлення.

### Значення, що повертаються

Рядок зашифрованого тексту у форматі (одноразовий відкритий ключ,
зашифроване повідомлення, тег аутентифікації).

### Приклади

**Приклад #1 Приклад використання **sodium_crypto_box_seal()****

` <?php$keypair u003d sodium_crypto_box_keypair();$public_key u003d sodium_crypto_box_publickey($keypair);// Обфусцированный текст, чтобы сделать пример более увлекательным$plaintext_b64 u003d "V3JpdGluZyBzb2Z0d2FyZSBpbiBQSFAgY2FuIGJlIGEgZGVsaWdodCEu003d";$decoded_plaintext u003d sodium_base642bin($plaintext_b64, SODIUM_BASE64_VARIANT_ORIGINAL);$ sealedu003d sodium_crypto_box_seal($decoded_plaintext, $public_key);var_dump(base64_encode($sealed));$openedu003du003dsodium_crypto_box_seal_open($sealed, $keypair);

Результатом виконання цього прикладу буде щось подібне:

string(120) "oRBXXAV4iQBrxlV4A21Bord8Yo/D8ZlrIIGNyaRCcGBfpz0map52I3xq6l+CST+1NSgQkbV+HyYyFjXWiWiaCGupGf+zl4bgWj/A9Adtem7
string(41) "Writing software in PHP can be a delight!"
