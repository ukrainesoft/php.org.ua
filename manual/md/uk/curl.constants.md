- [« Типи ресурсів](curl.resources.md)
- [Приклади »](curl.examples.md)

- [PHP Manual](index.md)
- [cURL](book.curl.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

Описи та приклади застосування цих констант описані у документації
функцій [curl_setopt()](function.curl-setopt.md),
[curl_multi_setopt()](function.curl-multi-setopt.md) та
[curl_getinfo()](function.curl-getinfo.md).

**`CURLOPT_AUTOREFERER`** (int)

**`CURLOPT_COOKIESESSION`** (int)

**`CURLOPT_DOH_URL`** (int)
Надає URL-адресу DNS-over-HTTPS. Доступно, починаючи з PHP 8.1.0 та
CURL 7.62.0.

**`CURLOPT_DNS_USE_GLOBAL_CACHE`** (int)

**`CURLOPT_DNS_CACHE_TIMEOUT`** (int)

**`CURLOPT_FTP_SSL`** (int)

**`CURLFTP_CREATE_DIR`** (int)
Доступно з PHP 7.0.7 та cURL 7.19.3

**`CURLFTP_CREATE_DIR_NONE`** (int)
Доступно з PHP 7.0.7 та cURL 7.19.3

**`CURLFTP_CREATE_DIR_RETRY`** (int)
Доступно з PHP 7.0.7 та cURL 7.19.3

**`CURLFTPSSL_TRY`** (int)

**`CURLFTPSSL_ALL`** (int)

**`CURLFTPSSL_CONTROL`** (int)

**`CURLFTPSSL_NONE`** (int)

**`CURLOPT_PRIVATE`** (int)

**`CURLOPT_FTPSSLAUTH`** (int)

**`CURLOPT_PORT`** (int)

**`CURLOPT_FILE`** (int)

**`CURLOPT_INFILE`** (int)

**`CURLOPT_INFILESIZE`** (int)

**`CURLOPT_ISSUERCERT_BLOB`** (int)
Сертифікат емітента SSL з великого двійкового об'єкта пам'яті. Доступно,
починаючи з PHP 8.1.0 та cURL 7.71.0.

**`CURLOPT_URL`** (int)

**`CURLOPT_PROXY`** (int)

**`CURLOPT_PROXY_ISSUERCERT`** (int)
Ім'я файлу сертифіката SSL емітента проксі. Доступно, починаючи з PHP 8.1.0
та CURL 7.71.0.

**`CURLOPT_PROXY_ISSUERCERT_BLOB`** (int)
SSL сертифікат емітента проксі з великого двійкового об'єкта пам'яті.
Доступно, починаючи з PHP 8.1.0 та cURL 7.71.0.

**`CURLOPT_PROXY_SSLCERT_BLOB`** (int)
Сертифікат клієнта проксі SSL із великого двійкового об'єкта пам'яті.
Доступно, починаючи з PHP 8.1.0 та cURL 7.71.0.

**`CURLOPT_PROXY_SSLKEY_BLOB`** (int)
Закритий ключ для сертифіката проксі із великого двійкового об'єкта
пам'яті. Доступно, починаючи з PHP 8.1.0 та cURL 7.71.0.

**`CURLOPT_VERBOSE`** (int)

**`CURLOPT_HEADER`** (int)

**`CURLOPT_HTTPHEADER`** (int)

**`CURLOPT_NOPROGRESS`** (int)

**`CURLOPT_NOBODY`** (int)

**`CURLOPT_FAILONERROR`** (int)

**`CURLOPT_UPLOAD`** (int)

**`CURLOPT_POST`** (int)

**`CURLOPT_FTPLISTONLY`** (int)

**`CURLOPT_FTPAPPEND`** (int)

**`CURLOPT_FTP_CREATE_MISSING_DIRS`** (int)

**`CURLOPT_NETRC`** (int)

**`CURLOPT_FOLLOWLOCATION`** (int)
Ця опція недоступна, якщо дозволено
[open_basedir](ini.core.md#ini.open-basedir).

**`CURLOPT_FTPASCII`** (int)

**`CURLOPT_PUT`** (int)

**`CURLOPT_MUTE`** (int)

**`CURLOPT_USERPWD`** (int)

**`CURLOPT_PROXYUSERPWD`** (int)

**`CURLOPT_RANGE`** (int)

**`CURLOPT_TIMEOUT`** (int)

**`CURLOPT_TIMEOUT_MS`** (int)

**`CURLOPT_TCP_NODELAY`** (int)

**`CURLOPT_POSTFIELDS`** (int)

**`CURLOPT_PROGRESSFUNCTION`** (int)

**`CURLOPT_REFERER`** (int)

**`CURLOPT_USERAGENT`** (int)

**`CURLOPT_FTPPORT`** (int)

**`CURLOPT_FTP_USE_EPSV`** (int)

**`CURLOPT_LOW_SPEED_LIMIT`** (int)

**`CURLOPT_LOW_SPEED_TIME`** (int)

**`CURLOPT_RESUME_FROM`** (int)

**`CURLOPT_COOKIE`** (int)

**`CURLOPT_COOKIELIST`** (int)
Доступно з cURL 7.14.1

**`CURLOPT_SSLCERT`** (int)

**`CURLOPT_SSLCERT_BLOB`** (int)
Сертифікат клієнта SSL із великого двійкового об'єкта пам'яті. Доступно,
починаючи з PHP 8.1.0 та cURL 7.71.0.

**`CURLOPT_SSLCERTPASSWD`** (int)

**`CURLOPT_SSLKEY_BLOB`** (int)
Закритий ключ для сертифіката клієнта із великого двійкового об'єкту
пам'яті. Доступно, починаючи з PHP 8.1.0 та cURL 7.71.0.

**`CURLOPT_WRITEHEADER`** (int)

**`CURLOPT_SSL_VERIFYHOST`** (int)

**`CURLOPT_COOKIEFILE`** (int)

**`CURLOPT_SSLVERSION`** (int)

**`CURL_SSLVERSION_DEFAULT`** (int)

**`CURL_SSLVERSION_TLSv1`** (int)

**`CURL_SSLVERSION_SSLv2`** (int)

**`CURL_SSLVERSION_SSLv3`** (int)

**`CURL_SSLVERSION_TLSv1_0`** (int)

**`CURL_SSLVERSION_TLSv1_1`** (int)

**`CURL_SSLVERSION_TLSv1_2`** (int)

**`CURLOPT_TIMECONDITION`** (int)

**`CURLOPT_TIMEVALUE`** (int)

**`CURLOPT_CUSTOMREQUEST`** (int)

**`CURLOPT_STDERR`** (int)

**`CURLOPT_TRANSFERTEXT`** (int)

**`CURLOPT_RETURNTRANSFER`** (int)

**`CURLOPT_QUOTE`** (int)

**`CURLOPT_POSTQUOTE`** (int)

**`CURLOPT_INTERFACE`** (int)

**`CURLOPT_KRB4LEVEL`** (int)

**`CURLOPT_HTTPPROXYTUNNEL`** (int)

**`CURLOPT_FILETIME`** (int)

**`CURLOPT_WRITEFUNCTION`** (int)

**`CURLOPT_READFUNCTION`** (int)

**`CURLOPT_PASSWDFUNCTION`** (int)

**`CURLOPT_HEADERFUNCTION`** (int)

**`CURLOPT_MAXREDIRS`** (int)

**`CURLOPT_MAXCONNECTS`** (int)

**`CURLOPT_FRESH_CONNECT`** (int)

**`CURLOPT_FORBID_REUSE`** (int)

**`CURLOPT_RANDOM_FILE`** (int)

**`CURLOPT_EGDSOCKET`** (int)

**`CURLOPT_CONNECTTIMEOUT`** (int)

**`CURLOPT_CONNECTTIMEOUT_MS`** (int)

**`CURLOPT_SSL_VERIFYPEER`** (int)

**`CURLOPT_CAINFO`** (int)

**`CURLOPT_CAPATH`** (int)

**`CURLOPT_COOKIEJAR`** (int)

**`CURLOPT_SSL_CIPHER_LIST`** (int)

**`CURLOPT_BINARYTRANSFER`** (int)

**`CURLOPT_NOSIGNAL`** (int)

**`CURLOPT_PROXYTYPE`** (int)
Доступно з CURL 7.10.

**`CURLOPT_BUFFERSIZE`** (int)

**`CURLOPT_HTTPGET`** (int)

**`CURLOPT_HTTP_VERSION`** (int)

**`CURLOPT_SSLKEY`** (int)

**`CURLOPT_SSLKEYTYPE`** (int)

**`CURLOPT_SSLKEYPASSWD`** (int)

**`CURLOPT_SSLENGINE`** (int)

**`CURLOPT_SSLENGINE_DEFAULT`** (int)

**`CURLOPT_SSLCERTTYPE`** (int)

**`CURLOPT_CRLF`** (int)

**`CURLOPT_ENCODING`** (int)

**`CURLOPT_PROXYPORT`** (int)

**`CURLOPT_UNRESTRICTED_AUTH`** (int)

**`CURLOPT_FTP_USE_EPRT`** (int)

**`CURLOPT_HTTP200ALIASES`** (int)

**`CURLOPT_HTTPAUTH`** (int)

**`CURLAUTH_BASIC`** (int)

**`CURLAUTH_DIGEST`** (int)

**`CURLAUTH_GSSNEGOTIATE`** (int)

**`CURLAUTH_NEGOTIATE`** (int)
Доступно з PHP 7.0.7 та CURL 7.38.0.

**`CURLAUTH_NTLM`** (int)

**`CURLAUTH_NTLM_WB`** (int)
Доступно з PHP 7.0.7 та cURL 7.22.0

**`CURLAUTH_ANY`** (int)

**`CURLAUTH_ANYSAFE`** (int)

**`CURLOPT_PROXYAUTH`** (int)

**`CURLOPT_MAX_RECV_SPEED_LARGE`** (int)
Доступно з cURL 7.15.5

**`CURLOPT_MAX_SEND_SPEED_LARGE`** (int)
Доступно з cURL 7.15.5

**`CURLOPT_HEADEROPT`** (int)
Доступно з PHP 7.0.7 та cURL 7.37.0

**`CURLOPT_PROXYHEADER`** (int)
Доступно з PHP 7.0.7 та cURL 7.37.0

**`CURLINFO_PRIVATE`** (int)

**`CURLINFO_EFFECTIVE_URL`** (int)

**`CURLINFO_HTTP_CODE`** (int)
Починаючи з cURL 7.10.8, це застарілий псевдонім
**`CURLINFO_RESPONSE_CODE`**

**`CURLINFO_RESPONSE_CODE`** (int)
Доступно з cURL 7.10.8

**`CURLINFO_HEADER_OUT`** (int)

**`CURLINFO_HEADER_SIZE`** (int)

**`CURLINFO_REQUEST_SIZE`** (int)

**`CURLINFO_TOTAL_TIME`** (int)

**`CURLINFO_NAMELOOKUP_TIME`** (int)

**`CURLINFO_CONNECT_TIME`** (int)

**`CURLINFO_PRETRANSFER_TIME`** (int)

**`CURLINFO_SIZE_UPLOAD`** (int)

**`CURLINFO_SIZE_DOWNLOAD`** (int)

**`CURLINFO_SPEED_DOWNLOAD`** (int)

**`CURLINFO_SPEED_UPLOAD`** (int)

**`CURLINFO_FILETIME`** (int)

**`CURLINFO_SSL_VERIFYRESULT`** (int)

**`CURLINFO_CONTENT_LENGTH_DOWNLOAD`** (int)

**`CURLINFO_CONTENT_LENGTH_UPLOAD`** (int)

**`CURLINFO_STARTTRANSFER_TIME`** (int)

**`CURLINFO_CONTENT_TYPE`** (int)

**`CURLINFO_REDIRECT_TIME`** (int)

**`CURLINFO_REDIRECT_COUNT`** (int)

**`CURLINFO_REDIRECT_URL`** (string)

**`CURLINFO_PRIMARY_IP`** (string)

**`CURLINFO_PRIMARY_PORT`** (int)

**`CURLINFO_LOCAL_IP`** (string)

**`CURLINFO_LOCAL_PORT`** (int)

**`CURL_PUSH_OK`** (int)
Доступно з PHP 7.1.0 та cURL 7.44.0

**`CURL_PUSH_DENY`** (int)
Доступно з PHP 7.1.0 та cURL 7.44.0

**`CURL_REDIR_POST_301`** (int)
Доступно з PHP 7.0.7 та cURL 7.18.2

**`CURL_REDIR_POST_302`** (int)
Доступно з PHP 7.0.7 та cURL 7.18.2

**`CURL_REDIR_POST_303`** (int)
Доступно з PHP 7.0.7 та cURL 7.25.1

**`CURL_REDIR_POST_ALL`** (int)
Доступно з PHP 7.0.7 та cURL 7.18.2

**`CURL_TIMECOND_NONE`** (int)

**`CURL_TIMECOND_IFMODSINCE`** (int)

**`CURL_TIMECOND_IFUNMODSINCE`** (int)

**`CURL_TIMECOND_LASTMOD`** (int)

**`CURL_VERSION_ALTSVC`** (int)
Доступно з PHP 7.3.6 та cURL 7.64.1

**`CURL_VERSION_ASYNCHDNS`** (int)
Асинхронна роздільна здатність DNS. Доступно з PHP 7.3.0 та cURL 7.10.7

**`CURL_VERSION_BROTLI`** (int)
Доступно з PHP 7.3.0 та cURL 7.57.0

**`CURL_VERSION_CONV`** (int)
Перетворення символів підтримуються. Доступно з PHP 7.3.0 та cURL
7.15.4

**`CURL_VERSION_CURLDEBUG`** (int)
Підтримується відстеження налагодження пам'яті. Доступно з PHP 7.3.6 та cURL
7.19.6

**`CURL_VERSION_DEBUG`** (int)
Зібраний із можливістю налагодження. Доступно з PHP 7.3.0 та cURL 7.10.6

**`CURL_VERSION_GSSAPI`** (int)
Зібрано на основі бібліотеки GSS-API. Доступно з PHP 7.3.0 та cURL 7.38.0

**`CURL_VERSION_GSSNEGOTIATE`** (int)
Підтримується узгодження автентифікації. Доступно з PHP 7.3.0 та cURL
7.10.6 (оголошено застарілим з 7.38.0)

**`CURL_VERSION_IDN`** (int)
Підтримуються міжнародні доменні назви. Доступно з PHP 7.3.0 та cURL
7.12.0

**`CURL_VERSION_MULTI_SSL`** (int)
Доступно з PHP 7.3.0 та cURL 7.56.0

**`CURL_VERSION_NTLM`** (int)
Підтримується аутентифікація NTLM. Доступно з PHP 7.3.0 та cURL 7.10.6

**`CURL_VERSION_NTLM_WB`** (int)
Підтримується делегування NTLM помічнику winbind. Доступно з PHP
7.3.0 та CURL 7.22.0

**`CURL_VERSION_IPV6`** (int)
За допомогою IPv6.

**`CURL_VERSION_KERBEROS4`** (int)
Підтримується автентифікація Kerberos V4.

**`CURL_VERSION_KERBEROS5`** (int)
Підтримується автентифікація Kerberos V5. Доступно з PHP 7.0.7 та
CURL 7.40.0

**`CURL_VERSION_HTTP2`** (int)
Вбудована підтримка HTTP2. Доступно з cURL 7.33.0

**`CURL_VERSION_LARGEFILE`** (int)
Підтримує файли більше 2 ГБ. Доступно з cURL 7.33.0

**`CURL_VERSION_PSL`** (int)
Список загальнодоступних суфіксів Mozilla, що використовується для перевірки домену
cookie. Доступно з PHP 7.3.6 та cURL 7.47.0

**`CURL_VERSION_SPNEGO`** (int)
Підтримується автентифікація SPNEGO. Доступно з PHP 7.3.0 та cURL 7.10.8

**`CURL_VERSION_SSPI`** (int)
Вбудована підтримка Windows SSPI. Доступно з PHP 7.3.0 та cURL 7.13.2

**`CURL_VERSION_SSL`** (int)
Існують опції SSL.

**`CURL_VERSION_TLSAUTH_SRP`** (int)
Підтримується аутентифікацію TLS-SRP. Доступно з PHP 7.3.0 та cURL
7.21.4

**`CURL_VERSION_UNIX_SOCKETS`** (int)
Підтримка сокетів домену Unix. Доступно з PHP 7.0.7 та cURL 7.40.0

**`CURL_VERSION_LIBZ`** (int)
Підтримуються можливості libz.

**`CURLVERSION_NOW`** (int)

**`CURLE_OK`** (int)

**`CURLE_UNSUPPORTED_PROTOCOL`** (int)

**`CURLE_FAILED_INIT`** (int)

**`CURLE_URL_MALFORMAT`** (int)

**`CURLE_URL_MALFORMAT_USER`** (int)

**`CURLE_COULDNT_RESOLVE_PROXY`** (int)

**`CURLE_COULDNT_RESOLVE_HOST`** (int)

**`CURLE_COULDNT_CONNECT`** (int)

**`CURLE_FTP_WEIRD_SERVER_REPLY`** (int)

**`CURLE_FTP_ACCESS_DENIED`** (int)

**`CURLE_FTP_USER_PASSWORD_INCORRECT`** (int)

**`CURLE_FTP_WEIRD_PASS_REPLY`** (int)

**`CURLE_FTP_WEIRD_USER_REPLY`** (int)

**`CURLE_FTP_WEIRD_PASV_REPLY`** (int)

**`CURLE_FTP_WEIRD_227_FORMAT`** (int)

**`CURLE_FTP_CANT_GET_HOST`** (int)

**`CURLE_FTP_CANT_RECONNECT`** (int)

**`CURLE_FTP_COULDNT_SET_BINARY`** (int)

**`CURLE_PARTIAL_FILE`** (int)

**`CURLE_FTP_COULDNT_RETR_FILE`** (int)

**`CURLE_FTP_WRITE_ERROR`** (int)

**`CURLE_FTP_QUOTE_ERROR`** (int)

**`CURLE_HTTP_NOT_FOUND`** (int)

**`CURLE_WRITE_ERROR`** (int)

**`CURLE_MALFORMAT_USER`** (int)

**`CURLE_FTP_COULDNT_STOR_FILE`** (int)

**`CURLE_READ_ERROR`** (int)

**`CURLE_OUT_OF_MEMORY`** (int)

**`CURLE_OPERATION_TIMEOUTED`** (int)

**`CURLE_FTP_COULDNT_SET_ASCII`** (int)

**`CURLE_FTP_PORT_FAILED`** (int)

**`CURLE_FTP_COULDNT_USE_REST`** (int)

**`CURLE_FTP_COULDNT_GET_SIZE`** (int)

**`CURLE_HTTP_RANGE_ERROR`** (int)

**`CURLE_HTTP_POST_ERROR`** (int)

**`CURLE_SSL_CONNECT_ERROR`** (int)

**`CURLE_FTP_BAD_DOWNLOAD_RESUME`** (int)

**`CURLE_FILE_COULDNT_READ_FILE`** (int)

**`CURLE_LDAP_CANNOT_BIND`** (int)

**`CURLE_LDAP_SEARCH_FAILED`** (int)

**`CURLE_LIBRARY_NOT_FOUND`** (int)

**`CURLE_FUNCTION_NOT_FOUND`** (int)

**`CURLE_ABORTED_BY_CALLBACK`** (int)

**`CURLE_BAD_FUNCTION_ARGUMENT`** (int)

**`CURLE_BAD_CALLING_ORDER`** (int)

**`CURLE_HTTP_PORT_FAILED`** (int)

**`CURLE_BAD_PASSWORD_ENTERED`** (int)

**`CURLE_TOO_MANY_REDIRECTS`** (int)

**`CURLE_UNKNOWN_TELNET_OPTION`** (int)

**`CURLE_TELNET_OPTION_SYNTAX`** (int)

**`CURLE_OBSOLETE`** (int)

**`CURLE_SSL_PEER_CERTIFICATE`** (int)

**`CURLE_GOT_NOTHING`** (int)

**`CURLE_SSL_ENGINE_NOTFOUND`** (int)

**`CURLE_SSL_ENGINE_SETFAILED`** (int)

**`CURLE_SEND_ERROR`** (int)

**`CURLE_RECV_ERROR`** (int)

**`CURLE_SHARE_IN_USE`** (int)

**`CURLE_SSL_CERTPROBLEM`** (int)

**`CURLE_SSL_CIPHER`** (int)

**`CURLE_SSL_CACERT`** (int)

**`CURLE_BAD_CONTENT_ENCODING`** (int)

**`CURLE_LDAP_INVALID_URL`** (int)

**`CURLE_FILESIZE_EXCEEDED`** (int)

**`CURLE_FTP_SSL_FAILED`** (int)

**`CURLE_SSH`** (int)
Доступно із cURL 7.16.1.

**`CURLFTPAUTH_DEFAULT`** (int)

**`CURLFTPAUTH_SSL`** (int)

**`CURLFTPAUTH_TLS`** (int)

**`CURLPROXY_HTTP`** (int)
Доступно з CURL 7.10.

**`CURLPROXY_HTTP_1_0`** (int)
Доступно з PHP 7.0.7 та cURL 7.19.3

**`CURLPROXY_SOCKS4`** (int)
Доступно з CURL 7.10.

**`CURLPROXY_SOCKS5`** (int)
Доступно з CURL 7.10.

**`CURL_NETRC_OPTIONAL`** (int)

**`CURL_NETRC_IGNORED`** (int)

**`CURL_NETRC_REQUIRED`** (int)

**`CURL_HTTP_VERSION_NONE`** (int)

**`CURL_HTTP_VERSION_1_0`** (int)

**`CURL_HTTP_VERSION_1_1`** (int)

**`CURL_HTTP_VERSION_2`** (int)
Доступно з PHP 7.0.7 та cURL 7.43.0

**`CURL_HTTP_VERSION_2_0`** (int)
Доступно з cURL 7.33.0

**`CURL_HTTP_VERSION_2TLS`** (int)
Доступно з PHP 7.0.7 та cURL 7.47.0

**`CURL_HTTP_VERSION_2_PRIOR_KNOWLEDGE`** (int)
Доступно з PHP 7.0.7 та cURL 7.49.0

**`CURLM_CALL_MULTI_PERFORM`** (int)

**`CURLM_OK`** (int)

**`CURLM_BAD_HANDLE`** (int)

**`CURLM_BAD_EASY_HANDLE`** (int)

**`CURLM_OUT_OF_MEMORY`** (int)

**`CURLM_INTERNAL_ERROR`** (int)

**`CURLMSG_DONE`** (int)

**`CURLOPT_KEYPASSWD`** (int)

**`CURLOPT_SSH_AUTH_TYPES`** (int)

**`CURLOPT_SSH_HOST_PUBLIC_KEY_MD5`** (int)

**`CURLOPT_SSH_PRIVATE_KEYFILE`** (int)

**`CURLOPT_SSH_PUBLIC_KEYFILE`** (int)

**`CURLOPT_SSL_OPTIONS`** (int)
Доступно з cURL 7.25.0

**`CURLSSLOPT_ALLOW_BEAST`** (int)
Доступно з cURL 7.25.0

**`CURLSSLOPT_NO_REVOKE`** (int)
Доступно з PHP 7.0.7 та cURL 7.44.0

**`CURLOPT_USERNAME`** (int)
Доступно з cURL 7.19.1

**`CURLOPT_SASL_IR`** (int)
Доступно з PHP 7.0.7 та cURL 7.31.0

**`CURLOPT_DNS_INTERFACE`** (int)
Доступно з PHP 7.0.7 та cURL 7.33.0

**`CURLOPT_DNS_LOCAL_IP4`** (int)
Доступно з PHP 7.0.7 та cURL 7.33.0

**`CURLOPT_DNS_LOCAL_IP6`** (int)
Доступно з PHP 7.0.7 та cURL 7.33.0

**`CURLOPT_XOAUTH2_BEARER`** (int)
Доступно з PHP 7.0.7 та cURL 7.33.0

**`CURLOPT_LOGIN_OPTIONS`** (int)
Доступно з PHP 7.0.7 та cURL 7.34.0

**`CURLOPT_EXPECT_100_TIMEOUT_MS`** (int)
Доступно з PHP 7.0.7 та cURL 7.36.0

**`CURLOPT_SSL_ENABLE_ALPN`** (int)
Доступно з PHP 7.0.7 та cURL 7.36.0

**`CURLOPT_SSL_ENABLE_NPN`** (int)
Доступно з PHP 7.0.7 та cURL 7.36.0

**`CURLOPT_PINNEDPUBLICKEY`** (int)
Доступно з PHP 7.0.7 та cURL 7.39.0

**`CURLOPT_UNIX_SOCKET_PATH`** (int)
Доступно з PHP 7.0.7 та cURL 7.40.0

**`CURLOPT_SSL_VERIFYSTATUS`** (int)
Доступно з PHP 7.0.7 та cURL 7.41.0

**`CURLOPT_PATH_AS_IS`** (int)
Доступно з PHP 7.0.7 та cURL 7.42.0

**`CURLOPT_SSL_FALSESTART`** (int)
Доступно з PHP 7.0.7 та cURL 7.42.0

**`CURLOPT_PIPEWAIT`** (int)
Доступно з PHP 7.0.7 та cURL 7.43.0

**`CURLOPT_PROXY_SERVICE_NAME`** (int)
Доступно з PHP 7.0.7 та cURL 7.43.0

**`CURLOPT_SERVICE_NAME`** (int)
Доступно з PHP 7.0.7 та cURL 7.43.0

**`CURLOPT_DEFAULT_PROTOCOL`** (int)
Доступно з PHP 7.0.7 та cURL 7.45.0

**`CURLOPT_STREAM_WEIGHT`** (int)
Доступно з PHP 7.0.7 та cURL 7.46.0

**`CURLOPT_TFTP_NO_OPTIONS`** (int)
Доступно з PHP 7.0.7 та cURL 7.48.0

**`CURLOPT_CONNECT_TO`** (int)
Доступно з PHP 7.0.7 та cURL 7.49.0

**`CURLOPT_TCP_FASTOPEN`** (int)
Доступно з PHP 7.0.7 та cURL 7.49.0

**`CURLOPT_TCP_KEEPALIVE`** (int)
Доступно з cURL 7.25.0

**`CURLOPT_TCP_KEEPIDLE`** (int)
Доступно з cURL 7.25.0

**`CURLOPT_TCP_KEEPINTVL`** (int)
Доступно з cURL 7.25.0

**`CURLMOPT_PIPELINING`** (int)
Доступно з CURL 7.16.0.

**`CURLMOPT_MAXCONNECTS`** (int)
Доступно з URL 7.16.3.

**`CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE`** (int)
Доступно з PHP 7.0.7 та cURL 7.30.0

**`CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE`** (int)
Доступно з PHP 7.0.7 та cURL 7.30.0

**`CURLMOPT_MAX_HOST_CONNECTIONS`** (int)
Доступно з PHP 7.0.7 та cURL 7.30.0

**`CURLMOPT_MAX_PIPELINE_LENGTH`** (int)
Доступно з PHP 7.0.7 та cURL 7.30.0

**`CURLMOPT_MAX_TOTAL_CONNECTIONS`** (int)
Доступно з PHP 7.0.7 та cURL 7.30.0

**`CURLMOPT_PUSHFUNCTION`** (int)
Доступно з PHP 7.1.0 та cURL 7.44.0

**`CURLSSH_AUTH_AGENT`** (int)
Доступно з PHP 7.0.7 та cURL 7.28.0

**`CURLSSH_AUTH_ANY`** (int)

**`CURLSSH_AUTH_DEFAULT`** (int)

**`CURLSSH_AUTH_HOST`** (int)

**`CURLSSH_AUTH_KEYBOARD`** (int)

**`CURLSSH_AUTH_NONE`** (int)

**`CURLSSH_AUTH_PASSWORD`** (int)

**`CURLSSH_AUTH_PUBLICKEY`** (int)

**`CURLPAUSE_ALL`** (int)
Доступно з CURL 7.18.0.

**`CURLPAUSE_CONT`** (int)
Доступно з CURL 7.18.0.

**`CURLPAUSE_RECV`** (int)
Доступно з CURL 7.18.0.

**`CURLPAUSE_RECV_CONT`** (int)
Доступно з CURL 7.18.0.

**`CURLPAUSE_SEND`** (int)
Доступно з CURL 7.18.0.

**`CURLPAUSE_SEND_CONT`** (int)
Доступно з CURL 7.18.0.

**`CURLPIPE_NOTHING`** (int)
Доступно з CURL 7.43.0.

**`CURLPIPE_HTTP1`** (int)
Доступно з CURL 7.43.0.

**`CURLPIPE_MULTIPLEX`** (int)
Доступно з CURL 7.43.0.

**`CURLPROXY_SOCKS4A`** (int)
Доступно з CURL 7.18.0.

**`CURLPROXY_SOCKS5_HOSTNAME`** (int)
Доступно з CURL 7.18.0.

**`CURLHEADER_SEPARATE`** (int)
Доступно з PHP 7.0.7 та CURL 7.37.0.

**`CURLHEADER_UNIFIED`** (int)
Доступно з PHP 7.0.7 та CURL 7.37.0.

**`CURLPROTO_SMB`** (int)
Доступно з PHP 7.0.7 та CURL 7.40.0.

**`CURLPROTO_SMBS`** (int)
Доступно з PHP 7.0.7 та CURL 7.40.0.

**`CURLOPT_REQUEST_TARGET`** (int)
Доступно з PHP 7.3.0 та CURL 7.55.0.

**`CURLAUTH_GSSAPI`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.54.1

**`CURLE_WEIRD_SERVER_REPLY`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.51.0

**`CURLINFO_CONTENT_LENGTH_DOWNLOAD_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.55.0

**`CURLINFO_CONTENT_LENGTH_UPLOAD_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.55.0

**`CURLINFO_HTTP_VERSION`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.50.0

**`CURLINFO_PROTOCOL`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLINFO_PROXY_SSL_VERIFYRESULT`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLINFO_SCHEME`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLINFO_SIZE_DOWNLOAD_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.50.0

**`CURLINFO_SIZE_UPLOAD_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.50.0

**`CURLINFO_SPEED_DOWNLOAD_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.50.0

**`CURLINFO_SPEED_UPLOAD_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.50.0

**`CURL_MAX_READ_SIZE`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.53.0

**`CURLOPT_ABSTRACT_UNIX_SOCKET`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.53.0

**`CURLOPT_KEEP_SENDING_ON_ERROR`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.51.0

**`CURLOPT_PRE_PROXY`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_CAINFO`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_CAPATH`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_CRLFILE`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_KEYPASSWD`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_PINNEDPUBLICKEY`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_SSLCERT`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_SSLCERTTYPE`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_SSL_CIPHER_LIST`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_SSLKEY`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_SSLKEYTYPE`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_SSL_OPTIONS`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_SSL_VERIFYHOST`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_SSL_VERIFYPEER`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_SSLVERSION`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_TLSAUTH_PASSWORD`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_TLSAUTH_TYPE`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_PROXY_TLSAUTH_USERNAME`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLOPT_SOCKS5_AUTH`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.55.0

**`CURLOPT_SUPPRESS_CONNECT_HEADERS`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.54.0

**`CURLPROXY_HTTPS`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURL_SSLVERSION_MAX_DEFAULT`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.54.0

**`CURL_SSLVERSION_MAX_NONE`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.54.0

**`CURL_SSLVERSION_MAX_TLSv1_0`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.54.0

**`CURL_SSLVERSION_MAX_TLSv1_1`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.54.0

**`CURL_SSLVERSION_MAX_TLSv1_2`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.54.0

**`CURL_SSLVERSION_MAX_TLSv1_3`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.54.0

**`CURL_SSLVERSION_TLSv1_3`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURL_VERSION_HTTPS_PROXY`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.52.0

**`CURLAUTH_BEARER`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURLINFO_APPCONNECT_TIME_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURLINFO_CONNECT_TIME_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURLINFO_FILETIME_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.59.0

**`CURLINFO_NAMELOOKUP_TIME_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURLINFO_PRETRANSFER_TIME_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURLINFO_REDIRECT_TIME_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURLINFO_STARTTRANSFER_TIME_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURLINFO_TOTAL_TIME_T`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURL_LOCK_DATA_CONNECT`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.10.0

**`CURL_LOCK_DATA_PSL`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURLOPT_DISALLOW_USERNAME_IN_URL`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURLOPT_DNS_SHUFFLE_ADDRESSES`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.60.0

**`CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.59.0

**`CURLOPT_HAPROXYPROTOCOL`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.60.0

**`CURLOPT_PROXY_TLS13_CIPHERS`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURLOPT_SSH_COMPRESSION`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.56.0

**`CURLOPT_TIMEVALUE_LARGE`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.59.0

**`CURLOPT_TLS13_CIPHERS`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.61.0

**`CURLSSH_AUTH_GSSAPI`** (int)
Доступно з версії PHP 7.3.0 та cURL 7.58.0

**`CURLOPT_HTTP09_ALLOWED`** (int)
Доступно з версії PHP 7.3.15 та 7.4.3, відповідно, і cURL 7.64.0
