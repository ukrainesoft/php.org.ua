- [« openssl_cms_decrypt](function.openssl-cms-decrypt.md)
- [openssl_cms_read »](function.openssl-cms-read.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Зашифровує CMS-повідомлення

#openssl_cms_encrypt

(PHP 8)

openssl_cms_encrypt — Зашифровує CMS-повідомлення

### Опис

**openssl_cms_encrypt**(
string `$input_filename`,
string `$output_filename`,
[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$certificate`,
?array `$headers`,
int `$flags` u003d 0,
int `$encoding` u003d **`OPENSSL_ENCODING_SMIME`**,
int `$cipher_algo` u003d **`OPENSSL_CIPHER_AES_128_CBC`**
): bool

Шифрує вміст для одного або кількох одержувачів на основі
переданих йому сертифікатів.

### Список параметрів

`input_filename`
Файл, який потрібно зашифрувати.

`output_filename`
Вихідний файл.

`certificate`
Одержувачі, для яких виконується шифрування.

`headers`
Заголовки, які будуть увімкнені при використанні S/MIME.

`flags`
Прапори, що надсилаються CMS_sign.

`encoding`
Кодування для виводу. **`OPENSSL_ENCODING_SMIME`**,
**`OPENSSL_ENCODING_DER`** або **`OPENSSL_ENCODING_PEM`**.

`cipher_algo`
Алгоритм шифрування, що використовується.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------------------|
| 8.1.0 | Алгоритм шифрування за замовчуванням ('cipher_algo') тепер є AES-128-CBC (**'OPENSSL_CIPHER_AES_128_CBC`**). Раніше використовувався алгоритм PKCS7/CMS (**OPENSSL_CIPHER_RC2_40**). |
