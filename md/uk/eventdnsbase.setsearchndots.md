- [«EventDnsBase::setOption](eventdnsbase.setoption.md)
- [EventHttp »](class.eventhttp.md)

- [PHP Manual](index.md)
- [EventDnsBase](class.eventdnsbase.md)
- Встановлює 'ndots' для пошуку

# EventDnsBase::setSearchNdots

(PECL event \>u003d 1.2.6-beta)

EventDnsBase::setSearchNdots — Встановлює параметр 'ndots' для пошуку

### Опис

public **EventDnsBase::setSearchNdots**( int `$ndots` ): bool

Встановлює параметр **``ndots'`** для пошуку. Встановлює
кількість точок, яке при знаходженні в імені призводить до того, що
перший запит немає пошукового домену.

### Список параметрів

`ndots`
Кількість точок.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
