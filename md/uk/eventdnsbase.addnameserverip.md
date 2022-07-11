- [«EventDnsBase](class.eventdnsbase.md)
- [EventDnsBase::addSearch »](eventdnsbase.addsearch.md)

- [PHP Manual](index.md)
- [EventDnsBase](class.eventdnsbase.md)
- Додає сервер імен до бази DNS

# EventDnsBase::addNameserverIp

(PECL event \>u003d 1.2.6-beta)

EventDnsBase::addNameserverIp — Додає сервер імен до бази DNS

### Опис

public **EventDnsBase::addNameserverIp**( string `$ip` ): bool

Додає сервер імен до бази evdns_base.

### Список параметрів

`ip`
Рядок сервера імен у вигляді адреси IPv4, адреси IPv6, адреси IPv4 з
портом (`IPv4:Port`) або адреси IPv6 з портом (`[IPv6]:Port`).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
