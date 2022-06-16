- [« openssl_get_publickey](function.openssl-get-publickey.md)
- [openssl_pbkdf2 »](function.openssl-pbkdf2.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Відкрити запечатані дані

#openssl_open

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

openssl_open — Відкрити запечатані дані

### Опис

**openssl_open**(
string `$data`,
string `&$output`,
string `$encrypted_key`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`,
string `$cipher_algo`,
?string `$iv` u003d **`null`**
): bool

**openssl_open()** відкриває (дешифрує) `data`, використовуючи секретний
ключ, пов'язаний з ідентифікатором `private_key` та ключ обгортки
`encrypted_key`, і заповнює `output` розшифрованими даними. Ключ
обгортки створюється під час запечатування даних і може використовуватися тільки
з одним єдиним секретним ключем. Докладніше можна прочитати на
сторінці опису функції [openssl_seal()](function.openssl-seal.md).

### Список параметрів

`data`

`output`
При вдалому завершенні змінна передана в цьому параметрі буде
містити відкриті дані.

`encrypted_key`

`private_key`

`cipher_algo`
Метод шифрування.

**Застереження**
Значення за умовчанням (RC4) вважається небезпечним. Наполегливо
рекомендується явно вказувати метод безпечного шифрування.

`iv`
Ініціалізуючий вектор.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------|
| 8.0.0 | `private_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509 CSR`. |
| 8.0.0 | `cipher_algo` більше не є необов'язковим параметром. |

### Приклади

**Приклад #1 Приклад використання **openssl_open()****

`<?php//Припустимо, що$sealedі$env_keyмістять|закриті|дані|і// ключ обгортки відповідно// Виймаємо секретний ключ| .pem", "r");$priv_key u003d fread($fp, 8192);fclose($fp);$pkeyid u003d openssl_get_privatekey($priv_key); , $open, $env_key, $pkeyid)) {    echo "Розшифровані дані: ", $open;} else {    echo "Щось|помилу(і)|упр|у|| > `

### Дивіться також

- [openssl_seal()](function.openssl-seal.md) - Запечатати
(зашифрувати) дані
