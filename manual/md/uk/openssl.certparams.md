- [« Інші константи](openssl.constants.other.md)
- [Перевірка сертифікатів »](openssl.cert.verification.md)

- [PHP Manual](index.md)
- [OpenSSL](book.openssl.md)
- Параметри ключа/сертифіката

# Параметри ключа/сертифіката

Деякі функції openssl вимагають параметри у вигляді ключа або
сертифікат. Можна використовувати один із таких варіантів:

- Сертифікати

1. Примірник [OpenSSLCertificate](class.opensslcertificate.md)
(або до PHP 8.0.0 ресурс
([resource](language.types.resource.md)) типу
`OpenSSL X.509`), що повертається функцією
[openssl_x509_read()](function.openssl-x509-read.md)
2. Рядок формату `file://path/to/cert.pem`; вказаний файл повинен
містити сертифікат у форматі PEM
3. Рядок, в якому міститься вміст сертифіката/ключа,
закодованого PEM

- Запити підпису сертифіката (Certificate Signing Requests або CSRs)

1. Примірник
[OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md)
(або до PHP 8.0.0 ресурс
([resource](language.types.resource.md)) типу
`OpenSSL X.509 CSR`), що повертається функцією
[openssl_csr_new()](function.openssl-csr-new.md)
2. Рядок виду `file://path/to/csr.pem`; вказаний файл повинен
містити CSR у форматі PEM
3. Рядок з CSR, кодований у форматі PEM, повинен починатися з
-----BEGIN CERTIFICATE REQUEST-----

- Відкриті/закриті ключі

1. Примірник
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) (або до
PHP 8.0.0 ресурс ([resource](language.types.resource.md)) типу
`OpenSSL key`), що повертається функцією
[openssl_get_publickey()](function.openssl-get-publickey.md)
або
[openssl_get_privatekey()](function.openssl-get-privatekey.md)
2. Тільки для відкритих ключів: екземпляр
[OpenSSLCertificate](class.opensslcertificate.md) (або до PHP
8.0.0 ресурс ([resource](language.types.resource.md)) типу
`OpenSSL X.509`)
3. Рядок формату `file://path/to/file.pem` - вказаний файл повинен
містити сертифікат у форматі PEM (може містити обидва ключі)
4. Рядок, в якому міститься вміст сертифіката/ключа,
закодованого PEM
5. Для закритих ключів можливе використання синтаксису
`array($key, $passphrase)` де `$key` представляє ключ
вказаний за допомогою формату file:// або текстовий вміст
описане вище, а `$passphrase` представляє рядок, що містить
пароль для зазначеного закритого ключа
