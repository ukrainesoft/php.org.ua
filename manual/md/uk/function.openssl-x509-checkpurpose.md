- [«
openssl_x509_check_private_key](function.openssl-x509-check-private-key.md)
- [openssl_x509_export_to_file
»](function.openssl-x509-export-to-file.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Перевіряє, чи можна використовувати сертифікат для конкретних завдань

# openssl_x509_checkpurpose

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_x509_checkpurpose — Перевіряє, чи можна використовувати сертифікат
для конкретних завдань

### Опис

**openssl_x509_checkpurpose**(
[OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`,
int `$purpose`,
array `$ca_info` u003d \[\],
?string `$untrusted_certificates_file` u003d **`null`**
): bool\|int

**openssl_x509_checkpurpose()** перевіряє сертифікат, щоб дізнатися,
чи може він використовуватися із заданою метою `purpose`.

### Список параметрів

`certificate`
Сертифікат

`purpose`
| Константа Опис |
|----------------------------|-------------------- -------------------------------------------------- ---|
| X509_PURPOSE_SSL_CLIENT | Чи можна використовувати сертифікат SSL на стороні клієнта? |
| X509_PURPOSE_SSL_SERVER | Чи можна використовувати сертифікат SSL на стороні сервера? |
| X509_PURPOSE_NS_SSL_SERVER | Чи можна використовувати сервер Netscape SSL? |
| X509_PURPOSE_SMIME_SIGN | Чи можна підписати S/MIME email? |
| X509_PURPOSE_SMIME_ENCRYPT | Чи можна шифрувати S/MIME email? |
| X509_PURPOSE_CRL_SIGN | Чи можна підписувати список відгуків сертифікатів (CRL)? |
| X509_PURPOSE_ANY | Чи можна використовувати будь-які завдання? |

**Мета **openssl_x509_checkpurpose()****

Ці опції не є бінарною маскою - можна використовувати лише одне
значення за раз!

`ca_info`
`ca_info` повинен містити масив довірених CA файлів/директорій, як
описано на сторінці [перевірки
сертифікатів](openssl.cert.verification.md).

`untrusted_certificates_file`
Якщо задано, то має містити шлях до PEM-файлу, що містить
сертифікати, які можуть бути використані для перевірки сертифіката,
але не є при цьому довіреними.

### Значення, що повертаються

Повертає **`true`**, якщо сертифікат можна використовувати за вказаним
призначенню, **`false`** - якщо не можна і -1 у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------------|
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509. |
| 8.0.0 | `untrusted_certificates_file` тепер допускає значення null. |
