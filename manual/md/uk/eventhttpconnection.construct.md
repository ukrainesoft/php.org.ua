- [«EventHttpConnection](class.eventhttpconnection.md)
- [EventHttpConnection::getBase »](eventhttpconnection.getbase.md)

- [PHP Manual](index.md)
- [EventHttpConnection](class.eventhttpconnection.md)
- Конструктор об'єкту EventHttpConnection

# EventHttpConnection::\_\_construct

(PECL event \>u003d 1.2.6-beta)

EventHttpConnection::\_\_construct — Конструктор об'єкта
EventHttpConnection

### Опис

public **EventHttpConnection::\_\_construct**(
[EventBase](class.eventbase.md) `$base` ,
[EventDnsBase](class.eventdnsbase.md) `$dns_base` ,
string `$address` ,
int `$port` ,
[EventSslContext](class.eventsslcontext.md) `$ctx` u003d **`null`**

)

Конструктор об'єкту EventHttpConnection.

### Список параметрів

`base`
Пов'язана основа подій.

`dns_base`
Якщо параметр `dns_base` дорівнює **`null`**, роздільна здатність імені хоста буде
заблоковано.

`address`
Адреса для підключення.

`port`
Порт для підключення.

`ctx`
Об'єкт класу [EventSslContext](class.eventsslcontext.md). Включає
OpenSSL.

> **Примітка**:
>
> Цей параметр доступний, тільки якщо `Event` скомпільовано за допомогою
> OpenSSL і тільки з `Libevent 2.1.0-alpha` та вище.

### Значення, що повертаються

Повертає об'єкт [EventHttpConnection](class.eventhttpconnection.md).

### Список змін

| Версія | Опис |
|------------------|------------------------------ --------|
| PECL event 1.9.0 | Додано підтримку OpenSSL (`ctx`). |
