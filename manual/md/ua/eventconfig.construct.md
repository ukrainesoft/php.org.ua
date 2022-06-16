- [« EventConfig::avoidMethod](eventconfig.avoidmethod.md)
- [EventConfig::requireFeatures »](eventconfig.requirefeatures.md)

- [PHP Manual](index.md)
- [EventConfig](class.eventconfig.md)
- Створити об'єкт EventConfig

# EventConfig::\_\_construct

(PECL event \>u003d 1.2.6-beta)

EventConfig::\_\_construct — Створити об'єкт EventConfig

### Опис

public **EventConfig::\_\_construct**()

Створює об'єкт EventConfig, який можна передати до конструктора
[EventBase::\_\_construct()](eventbase.construct.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт [EventConfig](class.eventconfig.md).

### Приклади

**Приклад #1 Приклад використання **EventConfig::\_\_construct()****

` <?php// Ігноруємо метод "select"$cfg u003d new EventConfig();if ($cfg->avoidMethod("select")) {    echo "Метод 'select' буде ігноруватися
";}// Створюємо event_base, пов'язаний з цим конфігом $ base u003d u003d новий EventBase ($ cfg);

### Дивіться також

- [EventBase::\_\_construct()](eventbase.construct.md) - Конструктор
об'єкта EventBase
