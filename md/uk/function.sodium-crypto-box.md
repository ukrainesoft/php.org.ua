- [«
sodium_crypto_box_seed_keypair](function.sodium-crypto-box-seed-keypair.md)
- [sodium_crypto_core_ristretto255_add
»](function.sodium-crypto-core-ristretto255-add.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Шифрування відкритим ключем з автентичністю

# sodium_crypto_box

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_box — Шифрування відкритим ключем із автентифікацією

### Опис

**sodium_crypto_box**(string `$message`, string `$nonce`, string
`$key_pair`): string

Шифрує повідомлення з використанням асиметричної криптографії (с
відкритим ключем).

Алгоритм, який використовується функціями з префіксом **sodium_crypto_box()**:
Еліптична крива Діффі-Хеллмана на кривій Монтгомері, Curve25519;
зазвичай скорочено X25519.

### Список параметрів

`message`
Повідомлення, яке потрібно зашифрувати.

`nonce`
Номер, який необхідно використовувати лише один раз для кожного
повідомлення. Довжина 24 байти. Це досить велика межа для випадкової
генерації (наприклад, [random_bytes()](function.random-bytes.md)).

`key_pair`
Дивіться
[sodium_crypto_box_keypair_from_secretkey_and_publickey()](function.sodium-crypto-box-keypair-from-secretkey-and-publickey.md).
Повинен включати секретний ключ X25519 відправника та відкритий ключ X25519
отримувача.

### Значення, що повертаються

Повертає зашифроване повідомлення (зашифрований текст плюс тег
автентифікації). Зашифрований текст буде на 16 байтів довше, ніж
відкритий текст, та необроблений двійковий рядок. Дивіться
[sodium_bin2base64()](function.sodium-bin2base64.md) для безпечного
кодування для зберігання.
