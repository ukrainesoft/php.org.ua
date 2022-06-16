- [« openssl_pkcs7_read](function.openssl-pkcs7-read.md)
- [openssl_pkcs7_verify »](function.openssl-pkcs7-verify.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Підписати повідомлення S/MIME

# openssl_pkcs7_sign

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_pkcs7_sign — Підписати повідомлення S/MIME

### Опис

**openssl_pkcs7_sign**(
string `$input_filename`,
string `$output_filename`,
[OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`,
?array `$headers`,
int `$flags` u003d **`PKCS7_DETACHED`**,
?string `$untrusted_certificates_filename` u003d **`null`**
): bool

**openssl_pkcs7_sign()** бере вміст файлу `input_filename` та
підписує його з використанням сертифіката `certificate` та закритого
ключа `private_key`.

### Список параметрів

`input_filename`
Файл, який потрібно підписати.

`output_filename`
Файл, до якого буде записано цифровий підпис.

`certificate`
Сертифікат X.509, який буде використаний для підпису
`input_filename`. Дивіться [параметри
ключа/сертифіката](openssl.certparams.md).

`private_key`
`private_key` задається секретним ключем, що відповідає сертифікату
(`Certificate`). Дивіться [параметри відкритого/секретного
ключа](openssl.certparams.md).

`headers`
`headers` задається масивом заголовків, які будуть додані на початок
даних після підписання. (дивіться
[openssl_pkcs7_encrypt()](function.openssl-pkcs7-encrypt.md) для
отримання додаткової інформації про формат цього параметра).

`flags`
`flags` використовується для налаштування виводу. Дивіться [константи
PKCS7](openssl.pkcs7.flags.md).

`untrusted_certificates_filename`
`untrusted_certificates_filename` може містити ім'я файлу, в якому
зберігаються додаткові сертифікати для додавання їх до підпису,
наприклад, для полегшення верифікації підпису різними користувачами.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------|
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509 CSR. |
| 8.0.0 | `private_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509 CSR`. |

### Приклади

**Приклад #1 Приклад використання **openssl_pkcs7_sign()****

`<?php// Повідомлення, яке ви хочете підписати для того, щоб одержувачі могли / / перевірити, що його послали саме ви $ data u003d 0 на 0.00. / зберігаємо повідомлення в фалй$fp u003dfopen("msg.txt", "w");fwrite($fp, $data);fclose($fp);// шифруємоif (openssl_pkcs7_sign("ed .txt", "file://mycert.pem",   array("file://mycert.pem", "mypassphrase"),    array("To" u003d> "joes@example.com", // асоціативний синтаксис "From: HQ <ceo@example.com>", // індексований синтаксис           "Subject" u003d> "Представницькі витрати")    )) {         exec(ini_get("sendmail_path") . " < signed.txt");}?> `
