- [«openssl_seal](function.openssl-seal.md)
- [openssl_spki_export_challenge
»](function.openssl-spki-export-challenge.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- генерація підпису

# openssl_sign

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

openssl_sign — Генерація підпису

### Опис

**openssl_sign**(
string `$data`,
string `&$signature`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`,
string\|int `$algorithm` u003d **`OPENSSL_ALGO_SHA1`**
): bool

**openssl_sign()** обчислює підпис даних `data` шляхом генерації
криптографічного цифрового зліпка з використанням секретного ключа
`private_key`. Зверніть увагу, що дані не шифруються.

### Список параметрів

`data`
Рядок даних, для яких ви хочете отримати відбиток

`signature`
Якщо функція відпрацює успішно, то підпис буде поміщений у змінну,
задану в `signature`.

`private_key`
Ідентифікатор ключа типу
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md), отриманий з
[openssl_get_privatekey()](function.openssl-get-privatekey.md)

Рядок, що є ключем у форматі PEM

`algorithm`
Ціле число, що визначає алгоритм. Дивіться [алгоритми
підпису](openssl.signature-algos.md).

Рядок, повернутий
[openssl_get_md_methods()](function.openssl-get-md-methods.md).
Наприклад, "sha256WithRSAEncryption" або "sha384".

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------|
| 8.0.0 | `private_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509`. |

### Приклади

**Приклад #1 Приклад використання **openssl_sign()****

` <?php// $data містить дані для генерації підписи// Виймаємо секретний ключ з файла і підготовляємо$pkeyid u003d openssl_pkey_get_private("file//src/. // Обчислюємо підписopenssl_sign($data, $signature, $pkeyid);// Вивільняємо ресурс ключаopenssl_free_key($pkeyid);?> `

**Приклад #2 Приклад використання **openssl_sign()****

` <?php//Данные для генерации сигнатуры$data u003d 'my data';//Создаём новую пару открытый/закрытый ключ$new_key_pair u003d openssl_pkey_new(array(    "private_key_bits" u003d> 2048,    "private_key_type" u003d> OPENSSL_KEYTYPE_RSA,)) ;openssl_pkey_export($new_key_pair, $private_key_pem);$details u003d openssl_pkey_get_details($new_key_pair);$public_key_pem u003d $details['key'];//Вычисляем подписьopenssl_sign($data, $signature, $private_key_pem, OPENSSL_ALGO_SHA256);//Сохраняемfile_put_contents ('private_key.pem', $private_key_pem);file_put_contents('public_key.pem', $public_key_pem);file_put_contents('signature.dat', $signature);//Звіряємо підпис$r u003d openssl_ver $public_key_pem, "sha256WithRSAEncryption");var_dump($r);?> `

### Дивіться також

- [openssl_verify()](function.openssl-verify.md) - Звірка сигнатури
