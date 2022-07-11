- [«
sodium_crypto_box_keypair](function.sodium-crypto-box-keypair.md)
- [sodium_crypto_box_publickey_from_secretkey
»](function.sodium-crypto-box-publickey-from-secretkey.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Розшифровка відкритого ключа з автентичністю

# sodium_crypto_box_open

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_box_open — Розшифровка відкритого ключа з перевіркою
справжності

### Опис

**sodium_crypto_box_open**(string `$ciphertext`, string `$nonce`, string
`$key_pair`): string\|false

Розшифровує повідомлення з використанням асиметричної криптографії (с
відкритим ключем).

### Список параметрів

`ciphertext`
Зашифроване повідомлення, яке потрібно спробувати розшифрувати.

`nonce`
Номер, який необхідно використовувати лише один раз для кожного
повідомлення. Довжина 24 байти. Це досить велика межа для випадкової
генерації (наприклад, [random_bytes()](function.random-bytes.md)).

`key_pair`
Дивіться
[sodium_crypto_box_keypair_from_secretkey_and_publickey()](function.sodium-crypto-box-keypair-from-secretkey-and-publickey.md).
Повинна включати відкритий ключ відправника та секретний ключ одержувача.

### Значення, що повертаються

Повертає повідомлення у разі успішного виконання або **`false`**
у разі виникнення помилки.
