- [«
openssl_pkcs12_export_to_file](function.openssl-pkcs12-export-to-file.md)
- [openssl_pkcs12_read »](function.openssl-pkcs12-read.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Експортує сумісний з PKCS#12 файл сховища сертифікатів
змінну

# openssl_pkcs12_export

(PHP 5 \>u003d 5.2.2, PHP 7, PHP 8)

openssl_pkcs12_export — Експортує сумісний із PKCS#12 файл
сховища сертифікатів у змінну

### Опис

**openssl_pkcs12_export**(
[OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`,
string `&$output`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`,
string `$passphrase`,
array `$options` u003d \[\]
): bool

**openssl_pkcs12_export()** зберігає `x509` у змінну `out` в
формат PKCS#12.

### Список параметрів

`x509`
Для списку коректних значень дивіться [Параметри
ключів/сертифікатів](openssl.certparams.md).

`output`
У разі успішного виконання міститиме PKCS#12.

`private_key`
Компонент закритого ключа PKCS#12. Список допустимих значень
дивіться на сторінці [параметрів відкритого/закритого
ключа](openssl.certparams.md).

`passphrase`
Пароль для шифрування PKCS#12.

`options`
Масив опцій. Ключі, що не описані тут, будуть проігноровані.

| Ключ | Опис |
|------------------|------------------------------ -------------------------------------------------- ------|
| "Extracerts" | масив додаткових сертифікатів або один сертифікат для включення файлу PKCS#12. |
| "friendlyname" | рядок для використання сертифікатом та ключем |

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------|
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509 CSR. |
| 8.0.0 | `private_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509`. |
