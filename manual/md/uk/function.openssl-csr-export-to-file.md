- [« openssl_cms_verify](function.openssl-cms-verify.md)
- [openssl_csr_export »](function.openssl-csr-export.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Експортує CSR у файл

# openssl_csr_export_to_file

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_csr_export_to_file — Експортує CSR у файл

### Опис

**openssl_csr_export_to_file**([OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md)\|string
`$csr`, string `$output_filename`, bool `$no_text` u003d **`true`**): bool

**openssl_csr_export_to_file()** записує запит на підпис
сертифіката `csr` у форматі PEM у файл `output_filename`.

### Список параметрів

`csr`
Для отримання списку допустимих значень дивіться [Параметри
CSR](openssl.certparams.md).

`output_filename`
Шлях до файлу.

`no_text`
Необов'язковий параметр `notext` впливає на деталізацію повідомлень виводу;
якщо він встановлений у **`false`**, то до висновку додається додаткова
людиночитана інформація. Значення за умовчанням `notext` є
**`true`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `csr` тепер приймає екземпляр [OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509 CSR. |

### Приклади

**Приклад #1 Приклад використання openssl_csr_export_to_file()**

` <?php$subject u003d array(    "commonName" u003d> "example.com",);$private_key u003d openssl_pkey_new(array(    "private_key_bits" u003d> 2048,    "private_key_type" u003d> OPENSSL_KEYTYPE_RSA,));$csr u003d openssl_csr_new ($subject, $private_key, array('digest_alg' u003d> 'sha384') );openssl_pkey_export_to_file($private_key, 'example-priv.key'); csr, 'example-csr.pem');?> `

### Дивіться також

- [openssl_csr_export()](function.openssl-csr-export.md) -
Експортує CSR у вигляді рядка
- [openssl_csr_new()](function.openssl-csr-new.md) - Генерує CSR
- [openssl_csr_sign()](function.openssl-csr-sign.md) - Підписати CSR
за допомогою іншого сертифіката (або їм же) та створити сертифікат
