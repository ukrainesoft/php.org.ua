- [«
EventDnsBase::countNameservers](eventdnsbase.countnameservers.md)
- [EventDnsBase::parseResolvConf »](eventdnsbase.parseresolvconf.md)

- [PHP Manual](index.md)
- [EventDnsBase](class.eventdnsbase.md)
- Завантажує файл hosts (у тому форматі, що і /etc/hosts) з файлу
hosts

# EventDnsBase::loadHosts

(PECL event \>u003d 1.2.6-beta)

EventDnsBase::loadHosts — Завантажує файл hosts (у тому ж форматі, що й
/etc/hosts) з файлу hosts

### Опис

public **EventDnsBase::loadHosts**( string `$hosts` ): bool

Завантажує файл hosts (у тому форматі, що і `/etc/hosts`) з файлу
hosts.

### Список параметрів

`hosts`
Шлях до файлу хостів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
