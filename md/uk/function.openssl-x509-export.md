- [«
openssl_x509_export_to_file](function.openssl-x509-export-to-file.md)
- [openssl_x509_fingerprint »](function.openssl-x509-fingerprint.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Експортує сертифікат у рядок

# openssl_x509_export

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_x509_export — Експортує сертифікат у рядок

### Опис

**openssl_x509_export**([OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`, string `&$output`, bool `$no_text` u003d **`true`**): bool

**openssl_x509_export()** зберігає сертифікат `certificate` у вигляді PEM
рядки в `output`.

### Список параметрів

`x509`
Для списку коректних значень дивіться [Параметри
ключів/сертифікатів](openssl.certparams.md).

`output`
У разі успішного виконання в цій змінній буде PEM-подання
сертифікат.

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
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------------|
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509. |
