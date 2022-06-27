- [«EventSslContext](class.eventsslcontext.md)
- [EventUtil »](class.eventutil.md)

- [PHP Manual](index.md)
- [EventSslContext](class.eventsslcontext.md)
- Конструктор контексту OpenSSL для використання у класах Event

# EventSslContext::\_\_construct

(PECL event \>u003d 1.2.6-beta)

EventSslContext::\_\_construct — Конструктор контексту OpenSSL для
використання у класах Event

### Опис

public **EventSslContext::\_\_construct**( string `$method` , string
`$options` )

Створює контекст SSL, що містить покажчик на `SSL_CTX` (дивіться
системне керівництво).

### Список параметрів

`method`
Одна з констант
[`EventSslContext::*_METHOD`](class.eventsslcontext.md#eventsslcontext.constants)
.

`options`
Асоціативний масив опцій контексту SSL. Константи
[`EventSslContext::OPT_*`](class.eventsslcontext.md#eventsslcontext.constants)
.

### Значення, що повертаються

Повертає об'єкт [EventSslContext](class.eventsslcontext.md).

### Приклади

**Приклад #1 Приклад використання **EventSslContext::\_\_construct()****

` <?php$ctx u003d new EventSslContext(EventSslContext::SSLv3_SERVER_METHOD, array(     EventSslContext::OPT_LOCAL_CERT        u003d> $local_cert,     EventSslContext::OPT_LOCAL_PK          u003d> $local_pk,     EventSslContext::OPT_PASSPHRASE        u003d> "echo server",     EventSslContext::OPT_VERIFY_PEER u003d> true,     EventSslContext::OPT_ALLOW_SELF_SIGNED u003d> false,));?> `
