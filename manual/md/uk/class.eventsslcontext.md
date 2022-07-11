- [«
EventListener::setErrorCallback](eventlistener.seterrorcallback.md)
- [EventSslContext::\_\_construct »](eventsslcontext.construct.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас EventSslContext

# Клас EventSslContext

(PECL event \>u003d 1.2.6-beta)

## Вступ

Представляє структуру `SSL_CTX`. Надає методи та властивості для
налаштування контексту SSL.

## Огляд класів

final class **EventSslContext** {

/\* Константи \*/

const int `SSLv2_CLIENT_METHOD` u003d 1;

const int `SSLv3_CLIENT_METHOD` u003d 2;

const int `SSLv23_CLIENT_METHOD` u003d 3;

const int `TLS_CLIENT_METHOD` u003d 4;

const int `SSLv2_SERVER_METHOD` u003d 5;

const int `SSLv3_SERVER_METHOD` u003d 6;

const int `SSLv23_SERVER_METHOD` u003d 7;

const int `TLS_SERVER_METHOD` u003d 8;

const int `OPT_LOCAL_CERT` u003d 1;

const int `OPT_LOCAL_PK` u003d 2;

const int `OPT_PASSPHRASE` u003d 3;

const int `OPT_CA_FILE` u003d 4;

const int `OPT_CA_PATH` u003d 5;

const int `OPT_ALLOW_SELF_SIGNED` u003d 6;

const int `OPT_VERIFY_PEER` u003d 7;

const int `OPT_VERIFY_DEPTH` u003d 8;

const int `OPT_CIPHERS` u003d 9;

/\* Властивості \*/

public string `$local_cert`;

public string `$local_pk`;

/\* Методи \*/

public [\_\_construct](eventsslcontext.construct.md)( string `$method`
, string `$options` )

}

## Властивості

`local_cert`
Шлях до локального файлу сертифіката. Це має бути файл у форматі
PEM містить сертифікат. Опціонально може містити ланцюжок
сертифікати емітентів.

`local_pk`
Шлях до локального файлу з приватним ключем

## Зумовлені константи

**`EventSslContext::SSLv2_CLIENT_METHOD`**
Спосіб клієнта SSLv2. Дивіться посібник з `SSL_CTX_new(3)`.

**`EventSslContext::SSLv3_CLIENT_METHOD`**
Спосіб клієнта SSLv3. Дивіться посібник з `SSL_CTX_new(3)`.

**`EventSslContext::SSLv23_CLIENT_METHOD`**
Спосіб клієнта SSLv23. Дивіться посібник з `SSL_CTX_new(3)`.

**`EventSslContext::TLS_CLIENT_METHOD`**
Спосіб клієнта TLS. Дивіться посібник з `SSL_CTX_new(3)`.

**`EventSslContext::SSLv2_SERVER_METHOD`**
Метод сервера SSLv2. Дивіться посібник з `SSL_CTX_new(3)`.

**`EventSslContext::SSLv3_SERVER_METHOD`**
Метод сервера SSLv3. Дивіться посібник з `SSL_CTX_new(3)`.

**`EventSslContext::SSLv23_SERVER_METHOD`**
Метод сервера SSLv23. Дивіться посібник з `SSL_CTX_new(3)`.

**`EventSslContext::TLS_SERVER_METHOD`**
Спосіб сервера TLS. Дивіться посібник з `SSL_CTX_new(3)`.

**`EventSslContext::OPT_LOCAL_CERT`**
Ключ елемента в масиві опцій, переданому в
[EventSslContext::\_\_construct()](eventsslcontext.construct.md) .
Опція вказує шлях локального сертифіката.

**`EventSslContext::OPT_LOCAL_PK`**
Ключ елемента в масиві опцій, переданому в
[EventSslContext::\_\_construct()](eventsslcontext.construct.md) .
Опція вказує шлях локального приватного ключа.

**`EventSslContext::OPT_PASSPHRASE`**
Ключ елемента в масиві опцій, переданому в
[EventSslContext::\_\_construct()](eventsslcontext.construct.md) .
Надає пароль сертифіката.

**`EventSslContext::OPT_CA_FILE`**
Ключ елемента в масиві опцій, переданому в
[EventSslContext::\_\_construct()](eventsslcontext.construct.md) .
Це шлях до файлу центру сертифікації.

**`EventSslContext::OPT_CA_PATH`**
Ключ елемента в масиві опцій, переданому в
[EventSslContext::\_\_construct()](eventsslcontext.construct.md) .
Представляє шлях, яким потрібно шукати файл центру сертифікації.

**`EventSslContext::OPT_ALLOW_SELF_SIGNED`**
Ключ елемента в масиві опцій, переданому в
[EventSslContext::\_\_construct()](eventsslcontext.construct.md) .
Представляє опцію, що дозволяє використовувати самопідписані
Сертифікати.

**`EventSslContext::OPT_VERIFY_PEER`**
Ключ елемента в масиві опцій, переданому в
[EventSslContext::\_\_construct()](eventsslcontext.construct.md) .
Надає опцію, що вказує модулю Event перевіряти вузли.

**`EventSslContext::OPT_VERIFY_DEPTH`**
Ключ елемента в масиві опцій, переданому в
[EventSslContext::\_\_construct()](eventsslcontext.construct.md) .
Представляє максимальну глибину перевірки ланцюжка сертифікатів,
допустиму для контексту SSL.

**`EventSslContext::OPT_CIPHERS`**
Ключ елемента в масиві опцій, переданому в
[EventSslContext::\_\_construct()](eventsslcontext.construct.md) .
Надає список шифрів для контексту SSL.

## Зміст

- [EventSslContext::\_\_construct](eventsslcontext.construct.md) -
Конструктор контексту OpenSSL для використання у класах Event
