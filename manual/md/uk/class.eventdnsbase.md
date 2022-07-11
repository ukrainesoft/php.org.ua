- [«
EventConfig::setMaxDispatchInterval](eventconfig.setmaxdispatchinterval.md)
- [EventDnsBase::addNameserverIp »](eventdnsbase.addnameserverip.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас EventDnsBase

# Клас EventDnsBase

(PECL event \>u003d 1.2.6-beta)

## Вступ

Представляє структуру бібліотеки DNS Libevent. Використовується для
асинхронної роздільної здатності DNS, аналізу конфігураційного файлу resolv.conf
і т.д.

## Огляд класів

final class **EventDnsBase** {

/\* Константи \*/

const int `OPTION_SEARCH` u003d 1;

const int `OPTION_NAMESERVERS` u003d 2;

const int `OPTION_MISC` u003d 4;

const int `OPTION_HOSTSFILE` u003d 8;

const int `OPTIONS_ALL` u003d 15;

/\* Методи \*/

public [addNameserverIp](eventdnsbase.addnameserverip.md)( string
`$ip` ): bool

public [addSearch](eventdnsbase.addsearch.md)( string `$domain` ):
void

public [clearSearch](eventdnsbase.clearsearch.md)(): void

public [\_\_construct](eventdnsbase.construct.md)(
[EventBase](class.eventbase.md) `$base` , bool `$initialize` )

public [countNameservers](eventdnsbase.countnameservers.md)(): int

public [loadHosts](eventdnsbase.loadhosts.md)( string `$hosts` ): bool

public [parseResolvConf](eventdnsbase.parseresolvconf.md)( int
`$flags` , string `$filename` ): bool

public [setOption](eventdnsbase.setoption.md)( string `$option` ,
string `$value` ): bool

public [setSearchNdots](eventdnsbase.setsearchndots.md)( int `$ndots`
): bool

}

## Зумовлені константи

**`EventDnsBase::OPTION_SEARCH`**
Вказує читати домен та пошукові поля з файлу `resolv.conf` та опції
`ndots` і використовувати їх для визначення доменів (якщо є), в яких
буде здійснюватися пошук по короткому імені хоста.

**`EventDnsBase::OPTION_NAMESERVERS`**
Вказує на використання сервера імен (nameservers) з файлу
`resolv.conf`.

**`EventDnsBase::OPTION_MISC`**

**`EventDnsBase::OPTION_HOSTSFILE`**
Вказує брати список хостів з файлу `/etc/hosts` під час завантаження
`resolv.conf`.

**`EventDnsBase::OPTIONS_ALL`**
Вказує використовувати все, що можливо з файлу `resolv.conf`.

## Зміст

- [EventDnsBase::addNameserverIp](eventdnsbase.addnameserverip.md) -
Додає сервер імен до бази DNS
- [EventDnsBase::addSearch](eventdnsbase.addsearch.md) — Додає
домен до списку пошукових доменів
- [EventDnsBase::clearSearch](eventdnsbase.clearsearch.md) — Видаляє
всі поточні суфікси пошуку
- [EventDnsBase::\_\_construct](eventdnsbase.construct.md) -
Конструктор об'єкту EventDnsBase
- [EventDnsBase::countNameservers](eventdnsbase.countnameservers.md)
— Отримує кількість налаштованих серверів імен
- [EventDnsBase::loadHosts](eventdnsbase.loadhosts.md) — Завантажує
файл hosts (у тому ж форматі, що і /etc/hosts) з файлу hosts
- [EventDnsBase::parseResolvConf](eventdnsbase.parseresolvconf.md) -
Сканує файл у форматі resolv.conf
- [EventDnsBase::setOption](eventdnsbase.setoption.md) -
Встановлює значення параметра конфігурації
- [EventDnsBase::setSearchNdots](eventdnsbase.setsearchndots.md) -
Встановлює параметр 'ndots' для пошуку
