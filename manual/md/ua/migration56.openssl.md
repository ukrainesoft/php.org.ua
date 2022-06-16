- [« Нові функції](migration56.new-functions.md)
- [Інші зміни у модулях »](migration56.extensions.md)

- [PHP Manual](index.md)
- [Міграція з PHP 5.5.x на PHP 5.6.x](migration56.md)
- Зміни OpenSSL у PHP 5.6.x

## Зміни OpenSSL у PHP 5.6.x

### Обертки потоків тепер за замовчуванням перевіряють сертифікати вузлів та імена хостів при використанні SSL/TLS

Всі клієнтські потоки, що шифруються, тепер за замовчуванням включають перевірку
бенкетів. За замовчуванням використовується OpenSSL CA пакет для перевірки
сертифіката бенкету. У більшості випадків не потрібно нічого робити для
з'єднання з серверами з правильним SSL сертифікатом, оскільки зазвичай
OpenSSL вже налаштований для використання хороших пакетів CA.

Стандартний CA пакет може бути перевизначений глобально за допомогою
установки або openssl.cafile або openssl.capath рядків конфігурації, або
ж на рівні кожного запиту використовуючи опції контексту
[`cafile`](context.ssl.md#context.ssl.cafile) або
[`capath`](context.ssl.md#context.ssl.capath).

Хоча це й не рекомендується, але можна вимкнути перевірку сертифіката
бенкету для запиту, встановивши
[`verify_peer`](context.ssl.md#context.ssl.verify-peer) опцію
контексту в **`false`**, і можна відключити перевірку імені бенкету,
встановивши
[`verify_peer_name`](context.ssl.md#context.ssl.verify-peer-name) в
**`false`**.

### Сигнатура сертифіката

Була додана підтримка вилучення та перевірки сигнатури сертифікату.
Для отримання сигнатур сертифікатів X.509 додано функцію
[openssl_x509_fingerprint()](function.openssl-x509-fingerprint.md).
Також було додано дві опції [контексту потоку SSL](context.ssl.md):
`capture_peer_cert` для захоплення вузлового сертифіката X.509, та
`peer_fingerprint` для перевірки сертифіката на відповідність заданої
сигнатурі.

### Оновлені шифри за замовчуванням

Список стандартних шифрів, що використовуються PHP, був оновлений на більш
безпечний відповідно до [»  рекомендацій щодо шифрів від
Mozilla](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_Ciphersuite),
з двома додатковими винятками: анонімні шифри Діффі-Хеллмана та
RC4.

Цей список доступний через нову константу
**`OPENSSL_DEFAULT_STREAM_CIPHERS`**, і може бути перевизначений (як і
у попередніх версіях PHP) установкою опцією контексту
[`ciphers`](context.ssl.md#context.ssl.ciphers).

### Стиснення заборонено за замовчуванням

Стиснення SSL/TLS було заборонено за замовчуванням для зменшення зменшення
ймовірність атаки типу CRIME. У PHP 5.4.13 було додано опцію
контексту
[`disable_compression`](context.ssl.md#context.ssl.disable-compression)
для можливості заборонити компресію і тепер вона за умовчанням
встановлена як **`true`** (тобто компресія заборонена).

### Дозвіл серверу визначати свій власний порядок шифрів

Була додана опція контексту `honor_cipher_order`, яка дозволяє
серверу обслуговуючому зашифрований потік самому визначати шифри,
якими користуватиметься клієнт. Це дозволить знизити ризик атаки
типу BEAST.

### Доступ до узгодженого протоколу та шифру

Протокол і шифр, узгоджені для шифрованого потоку, доступні з
допомогою функцій
[stream_get_meta_data()](function.stream-get-meta-data.md) або
[stream_context_get_options()](function.stream-context-get-options.md),
якщо опція контексту SSL `capture_session_meta` встановлена як
**`true`**.

` <?php$ctx u003d stream_context_create(['ssl' u003d> [    'capture_session_meta' u003d> TRUE]]);$html u003d file_get_contents('https://google.com/', FALSE,$ u003d stream_context_get_options($ctx)['ssl']['session_meta'];var_dump($meta);?> `

Результат виконання цього прикладу:

array(4) {
["protocol"]u003d>
string(5) "TLSv1"
["cipher_name"]u003d>
string(20) "ECDHE-RSA-AES128-SHA"
["cipher_bits"]u003d>
int(128)
["cipher_version"]u003d>
string(11) "TLSv1/SSLv3"
}

### Нові можливості для досконалої прямої секретності (PFS) для серверів, що обслуговують шифровані потоки

Шифровані потоки клієнта вже підтримують досконалу пряму
таємність, оскільки вона, як правило, контролюється сервером.
Сервери PHP, що обслуговують шифровані потоки, що використовують сертифікати
підтримують досконалу пряму секретність не потребують будь-яких
додаткові дії для включення PFS; однак, було додано
кілька нових опцій контексту SSL для більш точного
контролю над PFS та для вирішення можливих проблем.

`ecdh_curve`
Ця опція дозволяє вибрати криву для використання у шифрах ECDH. Якщо
не задано, то буде використовуватись `prime256v1`.

`dh_param`
Шлях до файлу, що містить параметри обміну ключами Діффі-Хеллмана,
створеного, наприклад, за допомогою такої команди:

`` shellcode
openssl dhparam -out /path/to/my/certs/dh-2048.pem 2048
````

`single_dh_use`
Якщо встановлено як **`true`**, нова пара ключів буде створена,
використовуючи параметри Діффі-Хеллмана, тим самим покращуючи пряму
таємність.

`single_ecdh_use`
Якщо встановлено як **`true`**, нова пара ключів генеруватиметься
завжди, за узгодженням шифру ECDH. Це покращує пряму таємність.

### Вибір версії SSL/TLS

Тепер можна вибирати конкретну версію SSL та TLS за допомогою опції
контексту `crypto_method` або вказуючи конкретний транспорт під час створення
обгортки потоку (наприклад, за допомогою виклику
[stream_socket_client()](function.stream-socket-client.md) або
[stream_socket_server()](function.stream-socket-server.md)).

Опція контексту SSL `crypto_method` приймає бітову маску,
що перераховує допустимі протоколи, як це задається в параметрі
`crypto_type` функції
[stream_socket_enable_crypto()](function.stream-socket-enable-crypto.md).

| Протокол Прапор клієнта | Прапор сервера | Транспорт |
|--------------------------|---------------------- ---------------------|---------------------------- ---------------|--------------|
| Будь-які версії TLS чи SSL | **`STREAM_CRYPTO_METHOD_ANY_CLIENT`** | **`STREAM_CRYPTO_METHOD_ANY_SERVER`** | `ssl://` |
| Будь-яка версія TLS | **`STREAM_CRYPTO_METHOD_TLS_CLIENT`** | **`STREAM_CRYPTO_METHOD_TLS_SERVER`** | `tls://` |
| TLS 1.0 **`STREAM_CRYPTO_METHOD_TLSv1_0_CLIENT`** | **`STREAM_CRYPTO_METHOD_TLSv1_0_SERVER`** | `tlsv1.0://` |
| TLS 1.1 | **`STREAM_CRYPTO_METHOD_TLSv1_1_CLIENT`** | **`STREAM_CRYPTO_METHOD_TLSv1_1_SERVER`** | `tlsv1.1://` |
| TLS 1.2 | **`STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT`** | **`STREAM_CRYPTO_METHOD_TLSv1_2_SERVER`** | `tlsv1.2://` |
| SSL 3 | **`STREAM_CRYPTO_METHOD_SSLv3_CLIENT`** | **`STREAM_CRYPTO_METHOD_SSLv3_SERVER`** | `sslv3://` |

**Вибрана версія протоколу та відповідні опції**

` <?php// Требуется TLS 1.0 или выше для использования file_get_contents():$ctx u003d stream_context_create([    'ssl' u003d> [        'crypto_method' u003d> STREAM_CRYPTO_METHOD_TLS_CLIENT,    ],]);$html u003d file_get_contents('https:/ /google.com/', false, $ctx);// Требуется TLS 1.1 или 1.2:$ctx u003d stream_context_create([    'ssl' u003d> [        'crypto_method' u003d> STREAM_CRYPTO_METHOD_TLSv1_1_CLIENT |                           STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT,    ],]);$html u003d file_get_contents('https://google.com/', false, $ctx);// Сполучаємось з використанням транспорту струмового сокету tlsv1.2://$sock u003d stream_socket_client('tlsv1.2://google. / ');?> `

### Додана функція [openssl_get_cert_locations()](function.openssl-get-cert-locations.md)

Була додана функція
[openssl_get_cert_locations()](function.openssl-get-cert-locations.md):
вона повертає розташування, в яких PHP буде шукати пакети CA
замовчуванням.

` <?phpvar_dump(openssl_get_cert_locations());?> `

Результат виконання цього прикладу:

array(8) {
["default_cert_file"]u003d>
string(21) "/etc/pki/tls/cert.pem"
["default_cert_file_env"]u003d>
string(13) "SSL_CERT_FILE"
["default_cert_dir"]u003d>
string(18) "/etc/pki/tls/certs"
["default_cert_dir_env"]u003d>
string(12) "SSL_CERT_DIR"
["default_private_dir"]u003d>
string(20) "/etc/pki/tls/private"
["default_default_cert_area"]u003d>
string(12) "/etc/pki/tls"
["ini_cafile"]u003d>
string(0) ""
["ini_capath"]u003d>
string(0) ""
}

### Підтримка SPKI

Була додана підтримка для створення, вилучення та перевірки підписаних
публічних ключів та розпізнавальних рядків (SPKAC). Були додані функції
[openssl_spki_new()](function.openssl-spki-new.md),
[openssl_spki_verify()](function.openssl-spki-verify.md),
[openssl_spki_export_challenge()](function.openssl-spki-export-challenge.md)
та [openssl_spki_export()](function.openssl-spki-export.md) для
створення, перевірки експорту PEM публічних ключів та відповідних
розпізнавальних рядків із SPKAC, створених з елементів HTML5 `KeyGen`.

`openssl_spki_new`
Генерація нового SPKAC з використанням приватного ключа
розпізнавального рядка та алгоритму хешування.

` <?php$pkey u003d openssl_pkey_new();openssl_pkey_export($pkey, 'secret passphrase');$spkac u003d openssl_spki_new($pkey, 'challenge string');?> `

Результат виконання цього прикладу:

SPKACu003dMIIBXjCByDCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA3L0IfUijj7+A8CPC8EmhcdNoe5fUAog7OrBdhn7EkxFButUp40P7+LiYiygYG1TmoI/a5EgsLU3s9twEz3hmgY9mYIqb/rb+SF8qlD/K6KVyUORC7Wlz1Df4L8O3DuRGzx6/+3jIW6cPBpfgH1sVuYS1vDBsP/gMMIxwTsKJ4P0CAwEAARYkYjViMzYxMTktNjY5YS00ZDljLWEyYzctMGZjNGFhMjVlMmE2MA0GCSqGSIb3DQEBAwUAA4GBAF7hu0ifzmjonhAak2FhhBRsKFDzXdKIkrWxVNe8e0bZzMrWOxFM/rqBgeH3/gtOUDRS5Fnzyq425UsTYbjfiKzxGeCYCQJb1KJ2V5Ij/mIJHZr53WYEXHQTNMGR8RPm7IxwVXVSHIgAfXsXZ9IXNbFbcaLRiSTr9/N4U+MXUWL7

`openssl_spki_verify`
Перевірка наданого SPKAC.

` <?php$pkey u003dopenssl_pkey_new();openssl_pkey_export($pkey, 'secret passphrase');$spkac u003d openssl_spki_new($pkey, 'challenge string');var_dump(ka

`openssl_spki_export_challenge`
Експорт пов'язаного розпізнавального рядка із наданого SPKAC.

`<?php$pkey u003d openssl_pkey_new();openssl_pkey_export($pkey, 'secret passphrase');$spkac u003d openssl_spki_new($pkey, 'challenge string')_$challenge > `

Результат виконання цього прикладу:

challenge string

`openssl_spki_export`
Експорт публічного ключа RSA у форматі SPKAC.

` <?php$pkey u003d openssl_pkey_new();openssl_pkey_export($pkey, 'secret passphrase');$spkac u003d openssl_spki_new($pkey, 'challenge string');echo$>

Результат виконання цього прикладу:

-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDcvQh9SKOPv4DwI8LwSaFx02h7
l9QCiDs6sF2GfsSTEUG61SnjQ/v4uJiLKBgbVOagj9rkSCwtTez23ATPeGaBj2Zg
ipv+tv5IXyqUP8ropXJQ5ELtbXPUN/gvw7cO5EbPHr/7eMhbpw8Gl+AfWxW5hLW8
MGw/+AwwjHBOwong/QIDAQAB
-----END PUBLIC KEY-----
