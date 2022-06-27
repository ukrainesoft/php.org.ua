- [« openssl_csr_new](function.openssl-csr-new.md)
- [openssl_decrypt »](function.openssl-decrypt.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Підписати CSR за допомогою іншого сертифіката (або їм же) та створити
сертифікат

# openssl_csr_sign

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_csr_sign — Підписати CSR за допомогою іншого сертифіката (або їм)
ж) та створити сертифікат

### Опис

**openssl_csr_sign**(
[OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md)\|string
`$csr`,
[OpenSSLCertificate](class.opensslcertificate.md)\|string\|null
`$ca_certificate`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`,
int `$days`,
?array `$options` u003d **`null`**,
int `$serial` u003d 0
): [OpenSSLCertificate](class.opensslcertificate.md)\|false

**openssl_csr_sign()** створює сертифікат x509 із заданого CSR.

> **Примітка**: Для коректної роботи цієї функції має існувати
> правильний `openssl.cnf`. Для більш детальної інформації дивіться
> зауваження під розділом установки (openssl.installation.md).

### Список параметрів

`csr`
Створений за допомогою [openssl_csr_new()](function.openssl-csr-new.md)
CSR. Також може бути шляхом кодованого в PEM CSR, якщо задано як
`file://path/to/csr` або експортованим рядком, створеним за допомогою
[openssl_csr_export()](function.openssl-csr-export.md).

`ca_certificate`
Сертифікат, що створюється, буде підписаний `ca_certificate`. Якщо
`ca_certificate` заданий як **`null`**, то буде згенеровано
самопідписаний сертифікат.

`private_key`
`private_key` - секретний ключ, що відповідає `ca_certificate`.

`days`
`days` - час життя сертифіката, що створюється, в днях.

`options`
Можна тонко настроїти підпис CSR за допомогою options. Деталі
дивіться в описі функції
[openssl_csr_new()](function.openssl-csr-new.md), у розділі
присвяченому параметру `options`.

`serial`
Опціональний серійний номер сертифіката. Якщо не вказано,
то за умовчанням буде використано 0.

### Значення, що повертаються

Повертає [OpenSSLCertificate](class.opensslcertificate.md) у випадку
успішного виконання або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | On success, this function returns an [OpenSSLCertificate](class.opensslcertificate.md) instance now; previously, a [resource](language.types.resource.md) of type `OpenSSL X.509` був відновлений. |
| 8.0.0 | `csr` тепер приймає екземпляр [OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509 CSR. |
| 8.0.0 | `ca_certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509 CSR. |
| 8.0.0 | `private_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509 CSR. |

### Приклади

**Приклад #1 Приклад **openssl_csr_sign()** - підпис CSR (як зробити
свій власний CA)**

`<?php//Припустимо, що CSR отриманий з поля textarea з веб-сторінки$csrdata u003d $_POST["CSR"];// Ми підпишемо запрос з допомогою сертифіка сертифікат, но цей процес безкорисний, якщо// сертифікат не є є довіреним для ПО або користувачів, будуть його// використовувати// Нам потрібний власний  crt";$privkey u003d array("file://path/to/ca.key", "your_ca_key_passphrase");$usercert u003d openssl_csr_sign($csrdata, $cacert, $privkey, 365, array('digest 'sha256') );// Теперь напечатаем сертификат, чтобы пользователь мог его скопировать// и внести в свою локальную конфигурацию (например в файл хранилища SSL сертификатов)openssl_x509_export($usercert, $certout);echo $certout;// Покажем возникшие помилки, якщо вони булиwhile (($e u003d openssl_error_string()) !u003du003d false) {    echo $e . "
";}?> `
