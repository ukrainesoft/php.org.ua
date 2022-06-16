- [« openssl_pkcs7_sign](function.openssl-pkcs7-sign.md)
- [openssl_pkey_derive »](function.openssl-pkey-derive.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Перевірити підпис повідомлення S/MIME

#openssl_pkcs7_verify

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_pkcs7_verify — Перевірити підпис повідомлення S/MIME

### Опис

**openssl_pkcs7_verify**(
string `$input_filename`,
int `$flags`,
?string `$signers_certificates_filename` u003d **`null`**,
array `$ca_info` u003d \[\],
?string `$untrusted_certificates_filename` u003d **`null`**,
?string `$content` u003d **`null`**,
?string `$output_filename` u003d **`null`**
): bool\|int

**openssl_pkcs7_verify()** читає S/MIME повідомлення з файлу та перевіряє
його підпис.

### Список параметрів

`input_filename`
Шлях до файлу із повідомленням.

`flags`
flags можна використовувати для модифікації процесу перевірки. Більше
Детально дивіться [константи PKCS7](openssl.pkcs7.flags.md).

`signers_certificates_filename`
Якщо заданий параметр `signers_certificates_filename`, то він повинен
бути рядок з ім'ям файлу, в який буде збережено сертифікати,
використані під час підписання, у форматі PEM.

`ca_info`
Якщо заданий параметр `ca_info`, то в ньому повинна бути інформація про
довірених сертифікатах CA, які необхідно використовувати у процесі
перевірки. Докладніше читайте на сторінці [перевірки
сертифікатів](openssl.cert.verification.md).

`untrusted_certificates_filename`
Якщо встановлено параметр `untrusted_certificates_filename`, у ньому повинно бути
міститься ім'я файлу, який містить набір недовірених сертифікатів CA.

`content`
У параметрі `content` можна вказати ім'я файлу, до якого будуть записані
верифіковані дані без інформації щодо підпису.

`output_filename`

### Значення, що повертаються

Повертає **`true`**, якщо перевірка успішна, **`false`**, якщо ні та -1
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------------------------------|
| 8.0.0 | `signers_certificates_filename`, `untrusted_certificates_filename`, `content` та `output_filename` тепер допускають значення null. |
| 7.2.0 | Доданий параметр `output_filename`. |

### Примітки

> **Примітка**: Як зазначено в RFC 2045, довжина параметра
> `input_filename` не має бути довшим за 76 символів.
