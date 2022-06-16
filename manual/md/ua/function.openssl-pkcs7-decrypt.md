- [« openssl_pkcs12_read](function.openssl-pkcs12-read.md)
- [openssl_pkcs7_encrypt »](function.openssl-pkcs7-encrypt.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Розшифрувати повідомлення, зашифроване S/MIME

#openssl_pkcs7_decrypt

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_pkcs7_decrypt — Розшифрувати повідомлення, зашифроване S/MIME

### Опис

**openssl_pkcs7_decrypt**(
string `$input_filename`,
string `$output_filename`,
[OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string\|null
`$private_key` u003d **`null`**
): bool

Розшифровує повідомлення, зашифроване S/MIME, що міститься у файлі
`input_filename`, з використанням сертифіката `certificate` та
відповідного закритого ключа `private_key`.

### Список параметрів

`input_filename`

`output_filename`
Розшифроване повідомлення буде записано у файл `output_filename`.

`certificate`

`private_key`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------|
| 8.0.0 | `private_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509 CSR`. |

### Приклади

**Приклад #1 Приклад використання **openssl_pkcs7_decrypt()****

`<?php//$$cert і $key містять пару з особистим сертифікатом і закритим ключом$infilename u003d "encrypted.msg"; // в цьому файлі зашифроване повідомлення$outfilename u003d "decrypted.msg"; // переконайтеся, що у вас є права на записif (openssl_pkcs7_decrypt($infilename, $outfilename, $cert, $key)) {    echo "розшифровано!"
