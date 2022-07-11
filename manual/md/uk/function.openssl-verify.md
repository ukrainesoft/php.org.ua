- [« openssl_spki_verify](function.openssl-spki-verify.md)
- [openssl_x509_check_private_key
»](function.openssl-x509-check-private-key.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Звіряння сигнатури

# openssl_verify

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

openssl_verify - Звірка сигнатури

### Опис

**openssl_verify**(
string `$data`,
string `$signature`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$public_key`,
string\|int `$algorithm` u003d **`OPENSSL_ALGO_SHA1`**
): int\|false

**openssl_verify()** перевіряє, що підпис `signature` коректний для
даних `data` та відкритого ключа `public_key`. Відкритий ключ повинен
відповідати закритому ключу, за допомогою якого генерувалася
підпис.

### Список параметрів

`data`
Перевірені дані

`signature`
Необроблений бінарний рядок, створений функцією
[openssl_sign()](function.openssl-sign.md) або її аналогом

`public_key`
Змінна типу [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md),
містить ключ, підготовлений
[openssl_get_publickey()](function.openssl-get-publickey.md)

Рядок із ключем у форматі PEM. Приблизно такого виду "-----BEGIN PUBLIC
KEY----- MIIBCgK..."

`algorithm`
Ціле число, що відповідає одному з [алгоритмів
підпису](openssl.signature-algos.md).

Рядок, повернутий
[openssl_get_md_methods()](function.openssl-get-md-methods.md),
наприклад, "sha1WithRSAEncryption" або "sha512".

### Значення, що повертаються

Повертає 1, якщо підпис коректний, 0, якщо ні -1 або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------|
| 8.0.0 | `public_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509`. |

### Приклади

**Приклад #1 Приклад використання **openssl_verify()****

`<?php//$$da і $signature містять дані і підпис відповідно// Витягує відкритий ключ із сертифіката і підготовляємо його$pubkeyid u003d openssl_opss Pem"); {   echo "Підпис некоректний";} else {    echo "Відбулася якась помилка, печаль :(";}//Видаляємо ключ з пам'ятіopenssl_free

**Приклад #2 Приклад використання **openssl_verify()****

` <?php//Данные для генерации подписи$data u003d 'my data';//Создаём новую пару открытый/закрытый ключ$private_key_res u003d openssl_pkey_new(array(    "private_key_bits" u003d> 2048,    "private_key_type" u003d> OPENSSL_KEYTYPE_RSA,)) ;$details u003d openssl_pkey_get_details($private_key_res);$public_key_res u003d openssl_pkey_get_public($details['key']);//Обчислюємо підписopenssl_sign($data, $; $2; openssl_verify($data, $signature, $public_key_res, OPENSSL_ALGO_SHA256);if ($ok u003du003d 1) {   echo "коректна";} oseif ($ok u003du003d    | ".openssl_error_string();}?> `

### Дивіться також

- [openssl_sign()](function.openssl-sign.md) - Генерація підпису
