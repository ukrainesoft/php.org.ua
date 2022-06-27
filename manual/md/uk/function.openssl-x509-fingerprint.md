- [« openssl_x509_export](function.openssl-x509-export.md)
- [openssl_x509_free »](function.openssl-x509-free.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- обчислює відбиток або дайджест, заданий сертифікатом X.509

# openssl_x509_fingerprint

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

openssl_x509_fingerprint — Обчислює відбиток або дайджест, заданий
сертифікатом X.509

### Опис

**openssl_x509_fingerprint**([OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`, string `$digest_algo` u003d "sha1", bool `$binary` u003d
**`false`**): string\|false

**openssl_x509_fingerprint()** повертає дайджест `certificate` у вигляді
рядки.

### Список параметрів

`x509`
Для списку коректних значень дивіться [Параметри
ключів/сертифікатів](openssl.certparams.md).

`digest_algo`
Метод хешування. Список доступних методів можна отримати за допомогою
[openssl_get_md_methods()](function.openssl-get-md-methods.md).

`binary`
Якщо встановлено як **`true`**, будуть повернуті необроблені
бінарні дані. Якщо **`false`**, то виводить рядок з
шістнадцяткових чисел у нижньому регістрі.

### Значення, що повертаються

Повертає відбиток сертифіката у вигляді рядка шістнадцяткових чисел.
Якщо `binary` встановлено в **`true`**, то у вигляді бінарних даних.

У разі виникнення помилки повертає **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------------|
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509. |
