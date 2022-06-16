- [«
openssl_x509_checkpurpose](function.openssl-x509-checkpurpose.md)
- [openssl_x509_export »](function.openssl-x509-export.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Експортує сертифікат у файл

# openssl_x509_export_to_file

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_x509_export_to_file — Експортує сертифікат у файл

### Опис

**openssl_x509_export_to_file**([OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`, string `$output_filename`, bool `$no_text` u003d
**`true`**): bool

**openssl_x509_export_to_file()** зберігає сертифікат `certificate` в
файл `output_filename` у вигляді рядка у форматі PEM.

### Список параметрів

`x509`
Для списку коректних значень дивіться [Параметри
ключів/сертифікатів](openssl.certparams.md).

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
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------------|
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509. |
