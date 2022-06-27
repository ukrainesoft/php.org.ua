- [« openssl_cms_read](function.openssl-cms-read.md)
- [openssl_cms_verify »](function.openssl-cms-verify.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Підписує файл

# openssl_cms_sign

(PHP 8)

openssl_cms_sign — Підписує файл

### Опис

**openssl_cms_sign**(
string `$input_filename`,
string `$output_filename`,
[OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`,
?array `$headers`,
int `$flags` u003d 0,
int `$encoding` u003d **`OPENSSL_ENCODING_SMIME`**,
?string `$untrusted_certificates_filename` u003d **`null`**
): bool

Підписує файл сертифікатом X.509 та ключем.

### Список параметрів

`input_filename`
Назва файлу для підпису.

`output_filename`
Ім'я файлу для збереження результатів.

`certificate`
Сертифікат підпису. Дивіться [параметри
ключа/сертифіката](openssl.certparams.md) для отримання списку
допустимих значень.

`private_key`
Ключ, пов'язаний із `certificate`. Дивіться [параметри
ключа/сертифіката](openssl.certparams.md) для отримання списку
допустимих значень.

`headers`
Масив заголовків для включення виведення S/MIME.

`flags`
Прапори, які передаються **cms_sign()**.

`encoding`
Кодування вихідного файлу. **`OPENSSL_ENCODING_SMIME`**,
**`OPENSSL_ENCODING_DER`** або **`OPENSSL_ENCODING_PEM`**.

`untrusted_certificates_filename`
Проміжні сертифікати, що включаються до підпису.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **openssl_cms_sign()****

` <?phpopenssl_cms_sign('input.txt', 'output.txt', 'file://cert.pem', 'file://privkey.pem', null, OPENSSL_CMS_BINARY, OPENSSL_ENCODING_DER, 'chain.p ?> `
