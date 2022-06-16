- [«EventHttp::setTimeout](eventhttp.settimeout.md)
- [EventHttpConnection::\_\_construct
»](eventhttpconnection.construct.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас EventHttpConnection

# Клас EventHttpConnection

(PECL event \>u003d 1.4.0-beta)

## Вступ

Надає HTTP-з'єднання.

## Огляд класів

class **EventHttpConnection** {

/\* Методи \*/

public [\_\_construct](eventhttpconnection.construct.md)(
[EventBase](class.eventbase.md) `$base` ,
[EventDnsBase](class.eventdnsbase.md) `$dns_base` ,
string `$address` ,
int `$port` ,
[EventSslContext](class.eventsslcontext.md) `$ctx` u003d **`null`**

)

public [getBase](eventhttpconnection.getbase.md)():
[EventBase](class.eventbase.md)

public [getPeer](eventhttpconnection.getpeer.md)( string `&$address` ,
int `&$port` ): void

public [makeRequest](eventhttpconnection.makerequest.md)(
[EventHttpRequest](class.eventhttprequest.md) `$req` , int `$type` ,
string `$uri`): bool

public [setCloseCallback](eventhttpconnection.setclosecallback.md)(
[callable](language.types.callable.md) `$callback` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d ?): void

public [setLocalAddress](eventhttpconnection.setlocaladdress.md)(
string `$address` ): void

public [setLocalPort](eventhttpconnection.setlocalport.md)( int
`$port` ): void

public [setMaxBodySize](eventhttpconnection.setmaxbodysize.md)( string
`$max_size` ): void

public [setMaxHeadersSize](eventhttpconnection.setmaxheaderssize.md)(
string `$max_size`): void

public [setRetries](eventhttpconnection.setretries.md)( int `$retries`
): void

public [setTimeout](eventhttpconnection.settimeout.md)( int `$timeout`
): void

}

## Зміст

- [EventHttpConnection::\_\_construct](eventhttpconnection.construct.md)
- Конструктор об'єкта EventHttpConnection
- [EventHttpConnection::getBase](eventhttpconnection.getbase.md) -
Повертає базу подій, пов'язану зі з'єднанням
- [EventHttpConnection::getPeer](eventhttpconnection.getpeer.md) -
Отримує віддалену адресу та порт, пов'язаний зі з'єднанням
- [EventHttpConnection::makeRequest](eventhttpconnection.makerequest.md)
— Робить HTTP-запит із зазначеного з'єднання
- [EventHttpConnection::setCloseCallback](eventhttpconnection.setclosecallback.md)
- Встановлює callback-функцію при закритті з'єднання
- [EventHttpConnection::setLocalAddress](eventhttpconnection.setlocaladdress.md)
— Встановлює IP-адресу, з якої відбуваються HTTP-з'єднання
- [EventHttpConnection::setLocalPort](eventhttpconnection.setlocalport.md)
— Встановлює локальний порт, з якого з'являються з'єднання
- [EventHttpConnection::setMaxBodySize](eventhttpconnection.setmaxbodysize.md)
— Встановлює максимальний розмір тіла для підключення
- [EventHttpConnection::setMaxHeadersSize](eventhttpconnection.setmaxheaderssize.md)
— Встановлює максимальний розмір заголовка
- [EventHttpConnection::setRetries](eventhttpconnection.setretries.md)
— Встановлює максимальну кількість повторів для підключення
- [EventHttpConnection::setTimeout](eventhttpconnection.settimeout.md)
— Встановлює час очікування для підключення
