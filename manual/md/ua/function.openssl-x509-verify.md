- [« openssl_x509_read](function.openssl-x509-read.md)
- [OpenSSLCertificate »](class.opensslcertificate.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Перевірка цифрового підпису сертифіката x509 за допомогою публічного
ключа

# openssl_x509_verify

(PHP 7 u003d 7.4.0, PHP 8)

openssl_x509_verify — Перевірка цифрового підпису сертифіката x509 з
допомогою публічного ключа

### Опис

**openssl_x509_verify**([OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$public_key`): int

**openssl_x509_verify()** перевіряє, що сертифікат `certificate` був
підписаний приватним ключем, що відповідає публічному ключу
`public_key`.

### Список параметрів

`x509`
Для списку коректних значень дивіться [Параметри
ключів/сертифікатів](openssl.certparams.md).

`public_key`
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) - ключ,
повернутий функцією
[openssl_get_publickey()](function.openssl-get-publickey.md)

string - ключ у форматі PEM, такого вигляду: : "-----BEGIN PUBLIC KEY-----
MIIBCgK..."

### Значення, що повертаються

Повертає 1, якщо підпис коректний, 0, якщо ні, і -1 у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------|
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509. |
| 8.0.0 | `public_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md) або [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу `OpenSSL key` або `OpenSSL X.509`. |

### Приклади

**Приклад #1 Приклад використання **openssl_x509_verify()****

` <?php$hostname u003d "news.php.net";$ssloptions u003d array(    "capture_peer_cert" u003d> true,    "capture_peer_cert_chain" u003d> true,    "allow_self_signed"u003d> false,    "CN_match" u003d> $hostname,    " verify_peer" u003d> true,    "SNI_enabled" u003d> true,   "SNI_server_name" u003d>$hostname,); $hostname:443", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $ctx);$cont u003d stream_context_get_params($result);$x509 u003d $cont["options"]["ssl" $certparsedu003du003dopenssl_x509_parse($x509);foreach($cont["options"]["ssl"]["peer_certificate_chain"] as $chaincert){    $chainparsed u003d openssl_se $chain_public_keyu003du003dopenssl_get_publickey($chaincert); $r u003d openssl_x509_verify($x509, $chain_public_key); if ($ru003du003d1)    {        echo $certparsed['subject']['CN']; echo " was digitally signed by "; echo $chainparsed['subject']['CN']."
";    }}?> `

### Дивіться також

- [openssl_verify()](function.openssl-verify.md) - Звірка сигнатури
- [openssl_get_publickey()](function.openssl-get-publickey.md) -
Псевдонім openssl_pkey_get_public
