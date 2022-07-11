- [« openssl_pkey_derive](function.openssl-pkey-derive.md)
- [openssl_pkey_export »](function.openssl-pkey-export.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Записує у файл ключ у форматі PEM

# openssl_pkey_export_to_file

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_pkey_export_to_file — Записує у файл ключ у форматі PEM

### Опис

**openssl_pkey_export_to_file**(
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$key`,
string `$output_filename`,
?string `$passphrase` u003d **`null`**,
?array `$options` u003d **`null`**
): bool

**openssl_pkey_export_to_file()** записує `key` у форматі PEM у файл
`output_filename`.

> **Примітка**: Для коректної роботи цієї функції має існувати
> правильний `openssl.cnf`. Для більш детальної інформації дивіться
> зауваження під розділом установки (openssl.installation.md).

### Список параметрів

`key`

`output_filename`
Шлях до файлу.

`passphrase`
Ключ опціонально захищається паролем `passphrase`.

`options`
`options` можна використовувати для тонкого налаштування процесу експорту
шляхом вказівки або перевизначення опцій конфігураційного файлу
openssl. Дивіться [openssl_csr_new()](function.openssl-csr-new.md) для
Детальна інформація про `options`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------|
| 8.0.0 | `key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509`. |
