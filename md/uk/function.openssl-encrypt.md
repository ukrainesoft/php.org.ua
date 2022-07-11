- [«openssl_digest](function.openssl-digest.md)
- [openssl_error_string »](function.openssl-error-string.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Шифрує дані

#openssl_encrypt

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

openssl_encrypt — Шифрує дані

### Опис

**openssl_encrypt**(
string `$data`,
string `$cipher_algo`,
string `$passphrase`,
int `$options` u003d 0,
string `$iv` u003d "",
string `&$tag` u003d **`null`**,
string `$aad` u003d "",
int `$tag_length` u003d 16
): string\|false

Шифрує дані із заданим шифром та ключем і повертає необроблену
рядок, або рядок, закодований у base64

### Список параметрів

`data`
Дані для шифрування.

`cipher_algo`
Метод шифрування. Список доступних методів можна отримати за допомогою
функції
[openssl_get_cipher_methods()](function.openssl-get-cipher-methods.md).

`passphrase`
Кодова фраза. Якщо кодова фраза вкорочена, ніж очікувалося, вона
автоматично доповнюється символами `NUL`; якщо кодова фраза довша,
чим очікувалося, вона автоматично усікається.

`options`
`options` можна задати одній із констант: **`OPENSSL_RAW_DATA`**,
**`OPENSSL_ZERO_PADDING`**.

`iv`
Ненульовий вектор, що ініціалізує.

`tag`
Тег аутентифікації, що передається за посиланням, у режимі шифрування AEAD
(GCM або CCM).

`aad`
Додаткові автентифіковані дані.

`tag_length`
Довжина параметра `tag`. Для режиму GCM має бути від 4 до 16.

### Значення, що повертаються

Повертає зашифрований рядок або **`false`** у разі виникнення
помилки.

### Помилки

Видає помилку рівня **`E_WARNING`**, якщо в параметрі `cipher_algo`
передано невідомий алгоритм шифрування.

Видає помилку рівня **`E_WARNING`**, якщо параметр "iv" передано
пусте значення.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----------|
| 7.1.0 | Додані параметри `tag`, `aad` та `tag_length`. |

### Приклади

**Приклад #1 Приклад шифрування AES з автентифікацією в режимі GCM PHP
7.1+**

`<?php//$$key повинен бути згенерований заздалегідь криптографічно безпечним образом// наприклад, допомогою openssl_random_pseudo_bytes$plaintext u003d_ cipu003d"cipu003d"; ())){   $ivlen u003d openssl_cipher_iv_length($cipher); $iv u003d openssl_random_pseudo_bytes($ivlen); $ciphertextu003du003dopenssl_encrypt($plaintext,$cipher,$key,$optionsu003d0,$iv, $tag); // зберігаємо $cipher, $iv і $tag для дальшого розшифровки    $original_plaintext u003d openssl_decrypt($ciphertext, $cipher, $key, $optionsu003d0| echo $original_plaintext."
";}?> `

**Приклад #2 Приклад шифрування AES з автентифікацією до PHP 7.1**

`<?php//$$key повинен бути згенерований заздалегідь криптографічно безпечним образом// наприклад, допомогою openssl_random_pseudo_bytes$plaintext u003d' "дані для шифрування$$; u003d openssl_random_pseudo_bytes($ivlen);$ciphertext_raw u003d openssl_encrypt($plaintext, $cipher, $key, $optionsu003dOPENSSL_RAW_DATA, $iv);$hmac u003d hash_h$ ;$ciphertextu003du003dbase64_encode($iv.$hmac.$ciphertext_raw );// розшифровка....$c u003d base64_decode($ciphertext);$ivlen u003d openssl_cipher_iv_l$ iv u003d substr($c, 0, $ivlen);$hmac u003d substr($c, $ivlen, $sha2lenu003d32);$ciphertext_raw u003d substr($c, $ivlen+$sha2len);$original_plaintext ciphertext_raw, $cipher, $ key, $ options u003d OPENSSL_RAW_DATA, $ iv); / порівняння, не схильне атаці за часу{   echo $original_plaintext."
";}?> `

### Дивіться також

- [openssl_decrypt()](function.openssl-decrypt.md) - Розшифровує
дані
