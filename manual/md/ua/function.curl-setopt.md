- [«curl_setopt_array](function.curl-setopt-array.md)
- [curl_share_close »](function.curl-share-close.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Встановлює параметр для сеансу CURL

#curl_setopt

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

curl_setopt — Встановлює параметр для сеансу CURL

### Опис

**curl_setopt**([CurlHandle](class.curlhandle.md) `$handle`, int
`$option`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Встановлює параметр для сеансу cURL.

### Список параметрів

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

`option`
Параметр `CURLOPT_XXX`.

`value`
Значення параметра `option`.

Для наступних значень параметра `option`, параметр `value` має бути
типу bool:

[TABLE]

Для наступних значень параметра `option`, параметр `value` має бути
типу int:

[TABLE]

Для наступних значень параметра `option`, параметр `value` має бути
типу string:

[TABLE]

Для наступних значень параметра `option`, параметр `value` має бути
масивом:

| Параметр | Встановлюване значення `value` | Зауваження |
|------------------------------|------------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------|------------------------------------------- -----|
| **`CURLOPT_CONNECT_TO`** | З'єднуватись із вказаним хостом по вказаному порту, ігноруючи URL. Приймає масив рядків формату `HOST:PORT:CONNECT-TO-HOST:CONNECT-TO-PORT`. | Додано до cURL 7.49.0. Доступно з PHP 7.0.7. |
| **`CURLOPT_HTTP200ALIASES`** | Масив HTTP 200 відповідей, які трактуватимуться коректними відповідями, а не помилковими. | Доданий до cURL 7.10.3. |
| **`CURLOPT_HTTPHEADER`** | Масив HTTP-заголовків, що встановлюються, у форматі `array('Content-type: text/plain', 'Content-length: 100') ` | |
| **`CURLOPT_POSTQUOTE`** | Масив FTP-команд, які виконуються на сервері, після виконання FTP-запиту. | |
| **`CURLOPT_PROXYHEADER`** | Масив HTTP-заголовків для відправки на проксі | Додано до cURL 7.37.0. Доступно з PHP 7.0.7. |
| **`CURLOPT_QUOTE`** | Масив FTP-команд, що виконуються на сервері, перед виконанням FTP-запиту. | |
| **`CURLOPT_RESOLVE`** | Надає адресу для певної пари хоста та порту. Масив, що містить рядки, що складаються з імені хоста, порту та IP-адреси, розділених двокрапкою. Приклад: ` array("example.com:80:127.0.0.1") ` | Додано до cURL 7.21.3. |

Для наступних значень параметра `option`, параметр `value` має бути
потоковим дескриптором (повертається, наприклад, функцією
[fopen()](function.fopen.md)):

| Параметр | Встановлюване значення `value` |
|---------------------------|--------------------- -------------------------------------------------- ---------------------------------------------|
| **`CURLOPT_FILE`** | Файл, у якому буде записано результат передачі. За промовчанням використовується потік виведення `STDOUT` (вікно браузера). |
| **`CURLOPT_INFILE`** | Файл, з якого слід читати дані, під час завантаження на сервер. |
| **`CURLOPT_STDERR`** | Альтернативний файл для виведення помилок, який використовується замість потоку помилок `STDERR`. |
| **`CURLOPT_WRITEHEADER`** | Файл, у якому буде записано заголовки поточної операції. |

Для наступних значень параметра `option`, параметр `value` має бути
правильним ім'ям функції або замиканням:

[TABLE]

Інші значення:

| Параметр | Встановлюване значення `value` |
|---------------------|--------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------|
| **`CURLOPT_SHARE`** | Результат виконання функції [curl_share_init()](function.curl-share-init.md). Дозволяє обробнику cURL використовувати дані із загального оброблювача. |

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|---------------|--------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------|
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |
| 7.3.15, 7.4.3 | Додано **`CURLOPT_HTTP09_ALLOWED`**. |
| 7.3.0 | Введені **`CURLOPT_ABSTRACT_UNIX_SOCKET`**, **`CURLOPT_KEEP_SENDING_ON_ERROR`**, **`CURLOPT_PRE_PROXY`**, **`CURLOPT_PROXY_CAINFO`**, **`CURLOPT_PROXY_CAPAT** *`CURLOPT_PROXY_KEYPASSWD`**, **`CURLOPT_PROXY_PINNEDPUBLICKEY`**, **`CURLOPT_PROXY_SSLCERT`**, **`CURLOPT_PROXY_SSLCERTTYPE`**, **`CURLOPT_PROXY_SSL_CI** ** CURLOPT_PROXY_SSLKEYTYPE`**, **`CURLOPT_PROXY_SSL_OPTIONS`**, **`CURLOPT_PROXY_SSL_VERIFYHOST`**, **`CURLOPT_PROXY_SSL_VERIFYPEER`**, **`CURLOPT_PROXY_SSLVERSION`**, **`CURLOPT_PROXY_TLSAUTH_PASSWORD`**, **`CURLOPT_PROXY_TLSAUTH_TYPE` **, **`CURLOPT_PROXY_TLSAUTH_USERNAME`**, **`CURLOPT_SOCKS5_AUTH`**, **`CURLOPT_SUPPRESS_CONNECT_HEADERS`**, **`CURLOPT_DISALLOW_USERNAME_IN_URL`**, **`C** , **`CURLOPT_HAPROXYPROTOCOL`**, **`CURLOPT_PROXY_TLS13_CIPHERS`**, **`CURLOPT_SSH_COMPRESSION`**, **`CURLOPT_TIMEVALUE_LARGE`** та **`CURLOPT_TLS13_CIPH ERS`**. |
| 7.0.7 | Додані **`CURL_HTTP_VERSION_2`**, **`CURL_HTTP_VERSION_2_PRIOR_KNOWLEDGE`**, **`CURL_HTTP_VERSION_2TLS`**, **`CURL_REDIR_POST_301`**, **`CURL_REDIR_POST_302`**, ** *`CURL_REDIR_POST_ALL`**, **`CURL_VERSION_KERBEROS5`**, **`CURL_VERSION_PSL`**, **`CURL_VERSION_UNIX_SOCKETS`**, **`CURLAUTH_NEGOTIATE`**, **`CURLAUTH_NTLM_WB`**, ** CURLFTP_CREATE_DIR`**, **`CURLFTP_CREATE_DIR_NONE`**, **`CURLFTP_CREATE_DIR_RETRY`**, **`CURLHEADER_SEPARATE`**, **`CURLHEADER_UNIFIED`**, **`CURLMOPT_CHK` **, **`CURLMOPT_MAX_HOST_CONNECTIONS`**, **`CURLMOPT_MAX_PIPELINE_LENGTH`**, **`CURLMOPT_MAX_TOTAL_CONNECTIONS`**, **`CURLOPT_CONNECT_TO`**, **`CURLOPT_DEFAULT_PROTOCDN** , **`CURLOPT_DNS_LOCAL_IP4`**, **`CURLOPT_DNS_LOCAL_IP6`**, **`CURLOPT_EXPECT_100_TIMEOUT_MS`**, **`CURLOPT_HEADEROPT`**, **`CURLOPT_LOGIN_OPTIONS`**,** *`CURLOPT_PINNEDPUBLICKEY`**, **`CURLOPT_PI PEWAIT`**, **`CURLOPT_PROXY_SERVICE_NAME`**, **`CURLOPT_PROXYHEADER`**, **`CURLOPT_SASL_IR`**, **`CURLOPT_SERVICE_NAME`**, **`CURLOPT_SSL_ENABLE_ALPN`**, **`CURLO **, **`CURLOPT_SSL_FALSESTART`**, **`CURLOPT_SSL_VERIFYSTATUS`**, **`CURLOPT_STREAM_WEIGHT`**, **`CURLOPT_TCP_FASTOPEN`**, **`CURLOPT_TFTP_NO_OPTIONS`**, ** , **`CURLOPT_XOAUTH2_BEARER`**, **`CURLPROTO_SMB`**, **`CURLPROTO_SMBS`**, **`CURLPROXY_HTTP_1_0`**, **`CURLSSH_AUTH_AGENT`** та **`CURLSSLOPT_NO_REVOKE`**. |

### Приклади

**Приклад #1 Ініціалізація сеансу CURL та завантаження веб-сторінки**

`<?php// створення нового ресурсу cURL$ch u003d curl_init();// установка URL і інших необхідних параметрівcurl_setopt($ch, CURLOPT_URL, "http://www.example.com CURLOPT_HEADER, false);// завантаження сторінки і видача еї браузеруcurl_exec($ch);// завершення сеансу і звільнення ресурсовcurl_close($ch);?> `

### Примітки

> **Примітка**:
>
> Передача масиву в **`CURLOPT_POSTFIELDS`** закодує дані у вигляді
> *multipart/form-data*, тоді як передача URL-кодованого рядка
> закодує дані у вигляді *application/x-www-form-urlencoded*.

### Дивіться також

- [curl_setopt_array()](function.curl-setopt-array.md) -
Встановлює кілька параметрів для сеансу cURL
- [CURLFile](class.curlfile.md)
- [CURLStringFile](class.curlstringfile.md)
