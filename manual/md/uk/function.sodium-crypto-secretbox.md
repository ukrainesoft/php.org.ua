- [«
sodium_crypto_secretbox_open](function.sodium-crypto-secretbox-open.md)
- [sodium_crypto_secretstream_xchacha20poly1305_init_pull
»](function.sodium-crypto-secretstream-xchacha20poly1305-init-pull.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Шифрування із загальним ключем з автентичністю

# sodium_crypto_secretbox

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_secretbox — Шифрування із загальним ключем із перевіркою
справжності

### Опис

**sodium_crypto_secretbox**(string `$message`, string `$nonce`, string
`$key`): string

Шифрування повідомлення є симетричним (загальним) ключем.

### Список параметрів

`message`
Текстове повідомлення, яке потрібно зашифрувати.

`nonce`
Номер, який необхідно використовувати лише один раз для кожного
повідомлення. Довжина 24 байти. Це досить велика межа для випадкової
генерації (наприклад, [random_bytes()](function.random-bytes.md)).

`key`
Ключ шифрування (256 біт).

### Значення, що повертаються

Повертає зашифрований рядок.

### Помилки

- Викидається [SodiumException](class.sodiumexception.md), якщо
довжина байтів параметра `nonce` відрізняється від
[**`SODIUM_CRYPTO_SECRETBOX_NONCEBYTES`**](sodium.constants.md#constant.sodium-crypto-secretbox-noncebytes)
(24 байти).
- Викидається [SodiumException](class.sodiumexception.md), якщо
довжина байтів параметра `key` відрізняється від
[**`SODIUM_CRYPTO_SECRETBOX_KEYBYTES`**](sodium.constants.md#constant.sodium-crypto-secretbox-keybytes)
(32 байти).
- Викидає [SodiumException](class.sodiumexception.md) у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **sodium_crypto_secretbox()****

` <?php// $key должен храниться в секрете.$key u003d sodium_crypto_secretbox_keygen();// Не используйте $nonce повторно с тем же ключом$nonce u003d random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);$plaintext u003d "message to be encrypted";$ ciphertextu003d sodium_crypto_secretbox($plaintext, $nonce, $key);var_dump(bin2hex($ciphertext)); ;?> `

Результатом виконання цього прикладу буде щось подібне:

string(78) "3a1fa3e9f7b72ef8be51d40abf8e296c6899c185d07b18b4c93e7f26aa776d24c50852cd6b1076"
string(23) "message to be encrypted"

### Дивіться також

- [sodium_crypto_secretbox_open()](function.sodium-crypto-secretbox-open.md) -
Розшифровка за допомогою загального ключа з автентичністю
- [sodium_crypto_secretbox_keygen()](function.sodium-crypto-secretbox-keygen.md) -
Створює випадковий ключ для sodium_crypto_secretbox
- [random_bytes()](function.random-bytes.md) - Генерує
криптографічно безпечні псевдовипадкові байти
