- [« openssl_pkcs12_export](function.openssl-pkcs12-export.md)
- [openssl_pkcs7_decrypt »](function.openssl-pkcs7-decrypt.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Розбирає сховище сертифікатів PKCS#12 масив

# openssl_pkcs12_read

(PHP 5 \>u003d 5.2.2, PHP 7, PHP 8)

openssl_pkcs12_read — Розбирає сховище сертифікатів PKCS#12 в масив

### Опис

**openssl_pkcs12_read**(string `$pkcs12`, array `&$certificates`, string
`$passphrase`): bool

**openssl_pkcs12_read()** розбирає сховище сертифікатів PKCS#12,
задане в `pkcs12` і поміщає масив `certificates`.

### Список параметрів

`pkcs12`
Вміст сховища сертифікатів, а не ім'я файлу.

`certificates`
У разі успішного виконання міститиме дані сховища
сертифіката (Certificate Store Data).

`passphrase`
Пароль для розшифровки PKCS#12.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **openssl_pkcs12_read()****

` <?phpif (!$cert_store u003d file_get_contents("/certs/file.p12")) {   echo "Помилка: неможливо прочитати файл сертифіката
";   exit;}if (openssl_pkcs12_read($cert_store, $cert_info, "my_secret_pass")) {    echo "Інформація про сертифікат
";    print_r($cert_info);} else {    echo "Помилка: неможливо прочитати сховище сертифікату.
";   exit;}?> `
