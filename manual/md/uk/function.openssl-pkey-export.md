- [«
openssl_pkey_export_to_file](function.openssl-pkey-export-to-file.md)
- [openssl_pkey_free »](function.openssl-pkey-free.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Отримує рядок із ключем у форматі PEM

# openssl_pkey_export

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_pkey_export — Отримує рядок із ключем у форматі PEM

### Опис

**openssl_pkey_export**(
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$key`,
string `&$output`,
?string `$passphrase` u003d **`null`**,
?array `$options` u003d **`null`**
): bool

**openssl_pkey_export()** експортує `key` у вигляді рядка у форматі PEM
і зберігає його в `output` (передається за посиланням).

> **Примітка**: Для коректної роботи цієї функції має існувати
> правильний `openssl.cnf`. Для більш детальної інформації дивіться
> зауваження під розділом установки (openssl.installation.md).

### Список параметрів

`key`

`output`

`passphrase`
Ключ опціонально захищається паролем `passphrase`.

`options`
`options` можна використовувати для тонкого налаштування процесу експорту
шляхом вказівки або перевизначення опцій конфігураційного файлу
openssl. Дивіться опис
[openssl_csr_new()](function.openssl-csr-new.md) для докладної
інформації про `options`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------|
| 8.0.0 | `key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509`. |
