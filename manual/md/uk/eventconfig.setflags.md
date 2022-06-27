- [« EventConfig::requireFeatures](eventconfig.requirefeatures.md)
- [EventConfig::setMaxDispatchInterval
»](eventconfig.setmaxdispatchinterval.md)

- [PHP Manual](index.md)
- [EventConfig](class.eventconfig.md)
- Встановлює один або кілька прапорів для налаштування можливого
ініціалізації EventBase

# EventConfig::setFlags

(PECL event \>u003d 2.0.2-alpha)

EventConfig::setFlags — Встановлює один або кілька прапорів для
налаштування можливої ініціалізації EventBase

### Опис

public **EventConfig::setFlags**( int `$flags` ): bool

Встановлює один або кілька прапорів для налаштування того, які частини
Можливі EventBase будуть ініціалізовані і як вони будуть працювати.

### Список параметрів

`flags`
Одна із констант `EventBase::LOOP_*`. Дивіться [константи
EventBase](class.eventbase.md#eventbase.constants).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBase::getFeatures()](eventbase.getfeatures.md) - Повертає
бітову маску підтримуваних функцій
