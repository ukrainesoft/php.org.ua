- [« openssl_csr_export](function.openssl-csr-export.md)
- [openssl_csr_get_subject »](function.openssl-csr-get-subject.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Повертає відкритий ключ CSR

#openssl_csr_get_public_key

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

openssl_csr_get_public_key — Повертає відкритий ключ CSR

### Опис

**openssl_csr_get_public_key**([OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md)\|string
`$csr`, bool `$short_names` u003d **`true`**):
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|false

**openssl_csr_get_public_key()** витягує відкритий ключ з `csr` і
готує його для використання в інших функціях.

### Список параметрів

`csr`
Для отримання списку допустимих значень дивіться [Параметри
CSR](openssl.certparams.md).

`short_names`
**Увага**
Цей параметр ігнорується

### Значення, що повертаються

Повертає [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) у
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | У разі успішного виконання повертає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md); раніше повертався ресурс ([resource](language.types.resource.md)) типу OpenSSL key. |
| 8.0.0 | `csr` тепер приймає екземпляр [OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509 CSR. |

### Приклади

**Приклад #1 Приклад використання openssl_csr_get_public_key()**

` <?php$subject u003d array(    "commonName" u003d> "example.com",);$private_key u003d openssl_pkey_new(array(    "private_key_bits" u003d> 2048,    "private_key_type" u003d> OPENSSL_KEYTYPE_RSA,));$csr u003d openssl_csr_new ($subject, $private_key, array('digest_alg' u003d> 'sha256') );$public_key u003d openssl_csr_get_public_key($csr);$info u003d openssl_pkey_get_details('$_key'

### Дивіться також

- [openssl_csr_get_subject()](function.openssl-csr-get-subject.md) -
Повертає суб'єкт CSR
- [openssl_csr_new()](function.openssl-csr-new.md) - Генерує CSR
- [openssl_pkey_get_details()](function.openssl-pkey-get-details.md) -
Отримує масив з детальною інформацією про ключ
- [openssl_pkey_export_to_file()](function.openssl-pkey-export-to-file.md) -
Записує у файл ключ у форматі PEM
- [openssl_pkey_export()](function.openssl-pkey-export.md) -
Отримує рядок із ключем у форматі PEM
