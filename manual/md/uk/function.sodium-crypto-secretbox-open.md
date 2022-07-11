- [«
sodium_crypto_secretbox_keygen](function.sodium-crypto-secretbox-keygen.md)
- [sodium_crypto_secretbox »](function.sodium-crypto-secretbox.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Розшифровка з використанням загального ключа з автентичністю

# sodium_crypto_secretbox_open

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_secretbox_open — Розшифровка за допомогою загального ключа
з автентичністю

### Опис

**sodium_crypto_secretbox_open**(string `$ciphertext`, string `$nonce`,
string `$key`): string\|false

Розшифровує зашифроване повідомлення симетричним ключом.

### Список параметрів

`ciphertext`
Має бути у форматі, наданому
[sodium_crypto_secretbox()](function.sodium-crypto-secretbox.md)
(зашифрований текст та тег, об'єднані).

`nonce`
Номер, який необхідно використовувати лише один раз для кожного
повідомлення. Довжина 24 байти. Це досить велика межа для випадкової
генерації (наприклад, [random_bytes()](function.random-bytes.md)).

`key`
Ключ шифрування (256 біт).

### Значення, що повертаються

Розшифрований рядок у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Помилки

- Викидається [SodiumException](class.sodiumexception.md), якщо
довжина байтів параметра `nonce` відрізняється від
[**`SODIUM_CRYPTO_SECRETBOX_NONCEBYTES`**](sodium.constants.md#constant.sodium-crypto-secretbox-noncebytes)
(24 байти).
- Викидається [SodiumException](class.sodiumexception.md), якщо
довжина байтів параметра `key` відрізняється від
[**`SODIUM_CRYPTO_SECRETBOX_KEYBYTES`**](sodium.constants.md#constant.sodium-crypto-secretbox-keybytes)
(32 байти).

### Приклади

**Приклад #1 Приклад використання **sodium_crypto_secretbox_open()****

` <?php// $key должен храниться в секрете.$key u003d random_bytes(SODIUM_CRYPTO_SECRETBOX_KEYBYTES);// Не используйте $nonce повторно с тем же ключом$nonce u003d random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);$ciphertext u003d sodium_crypto_secretbox('message to be encrypted ', $nonce, $key);// Для розшифровки $ciphertext потрібні те ж ім'я і ключ.$plaintext u003d sodium_crypto_secretbox_open($ciphertext, $nonce, $ . PHP_EOL;}?> `

Результат виконання цього прикладу:

message to be encrypted

### Дивіться також

- [sodium_crypto_secretbox()](function.sodium-crypto-secretbox.md) -
Шифрування із загальним ключем з автентичністю
- [sodium_crypto_secretbox_keygen()](function.sodium-crypto-secretbox-keygen.md) -
Створює випадковий ключ для sodium_crypto_secretbox
- [random_bytes()](function.random-bytes.md) - Генерує
криптографічно безпечні псевдовипадкові байти
