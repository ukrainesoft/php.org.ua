- [« openssl_pbkdf2](function.openssl-pbkdf2.md)
- [openssl_pkcs12_export »](function.openssl-pkcs12-export.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Експортує сумісний з PKCS#12 файл сховища сертифікатів

# openssl_pkcs12_export_to_file

(PHP 5 \>u003d 5.2.2, PHP 7, PHP 8)

openssl_pkcs12_export_to_file — Експортує до сумісного з PKCS#12
файл сховища сертифікатів

### Опис

**openssl_pkcs12_export_to_file**(
[OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`,
string `$output_filename`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`,
string `$passphrase`,
array `$options` u003d \[\]
): bool

**openssl_pkcs12_export_to_file()** зберігає `certificate` у файл
`output_filename` у форматі PKCS#12.

### Список параметрів

`x509`
Для списку коректних значень дивіться [Параметри
ключів/сертифікатів](openssl.certparams.md).

`output_filename`
Шлях до файлу.

`private_key`
Закритий компонент ключа PKCS#12. Допустимі значення дивіться
[Параметри закритого/відкритого ключа](openssl.certparams.md).

`passphrase`
Пароль для розблокування PKCS#12.

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
