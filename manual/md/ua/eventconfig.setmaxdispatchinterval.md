- [«EventConfig::setFlags](eventconfig.setflags.md)
- [EventDnsBase »](class.eventdnsbase.md)

- [PHP Manual](index.md)
- [EventConfig](class.eventconfig.md)
- Запобігти інверсії пріоритетів

# EventConfig::setMaxDispatchInterval

(PECL event \>u003d 2.1.0-alpha)

EventConfig::setMaxDispatchInterval — Запобігти інверсії пріоритетів

### Опис

public **EventConfig::setMaxDispatchInterval**( int `$max_interval` ,
int `$max_callbacks`, int `$min_priority`): void

Запобігти інверсії пріоритетів шляхом обмеження числа
низькопріоритетних подій перед черговою перевіркою на
наявність більш пріоритетних.

> **Примітка**:
>
> Доступно з `libevent 2.1.0-alpha`.

### Список параметрів

`max_interval`
Інтервал, після якого Libevent зобов'язаний припинити запускати
callback-функції та перевірити наявність нових подій, або **`0`**, щоб
не використовувати такий функціонал.

`max_callbacks`
Кількість запущених callback-функцій, після якого Libevent
призупинить їх запуск та перевірить, чи є нові події. **`-1`**,
щоб не використати такий функціонал.

`min_priority`
Пріоритет, нижче якого `max_interval` та `max_callbacks` не повинні
застосовуватись. Якщо встановлено як **`0`**, дані обмеження будуть
застосовуватися до подій із будь-яким пріоритетом; Якщо встановлено в **`1`** ,
обмеження будуть застосовуватися до подій пріоритету **`1`** та вище. І
так далі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
