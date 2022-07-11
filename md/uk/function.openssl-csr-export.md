- [«
openssl_csr_export_to_file](function.openssl-csr-export-to-file.md)
- [openssl_csr_get_public_key
»](function.openssl-csr-get-public-key.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Експортує CSR у вигляді рядка

# openssl_csr_export

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_csr_export — Експортує CSR як рядок

### Опис

**openssl_csr_export**([OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md)\|string
`$csr`, string `&$output`, bool `$no_text` u003d **`true`**): bool

**openssl_csr_export()** записує запит на підпис сертифіката `csr`
у форматі PEM у змінну `output`, яка передається за посиланням.

### Список параметрів

`csr`
Для отримання списку допустимих значень дивіться [Параметри
CSR](openssl.certparams.md).

`output`
у разі успішного виконання, у цій змінній буде збережено CSR в
формат PEM.

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

**Приклад #1 Приклад використання openssl_csr_export()**

` <?php$subject u003d array(    "commonName" u003d> "example.com",);$private_key u003d openssl_pkey_new(array(    "private_key_bits" u003d> 2048,    "private_key_type" u003d> OPENSSL_KEYTYPE_RSA,));$configargs u003d array (   'digest_alg' u003d> 'sha256WithRSAEncryption');$csr u003d openssl_csr_new($subject, $private_key, $configargs);openssl_csr_export($csr,$

### Дивіться також

- [openssl_csr_export_to_file()](function.openssl-csr-export-to-file.md) -
Експортує CSR у файл
- [openssl_csr_new()](function.openssl-csr-new.md) - Генерує CSR
- [openssl_csr_sign()](function.openssl-csr-sign.md) - Підписати CSR
за допомогою іншого сертифіката (або їм же) та створити сертифікат
