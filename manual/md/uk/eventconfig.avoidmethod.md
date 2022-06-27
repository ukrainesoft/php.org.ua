- [«EventConfig](class.eventconfig.md)
- [EventConfig::\_\_construct »](eventconfig.construct.md)

- [PHP Manual](index.md)
- [EventConfig](class.eventconfig.md)
- Попросити libevent не використати певний метод події

# EventConfig::avoidMethod

(PECL event \>u003d 1.2.6-beta)

EventConfig::avoidMethod — Попросити libevent не використовувати
певний метод події

### Опис

public **EventConfig::avoidMethod**( string `$method` ): bool

Попросити libevent не використовувати певний метод події (бекенд).
Дивіться [» Створення бази
події](http://www.wangafu.net/~nickm/libevent-book/Ref2_eventbase.md#_creating_an_event_base).

### Список параметрів

`method`
Метод бекенду, який потрібно ігнорувати. Дивіться [константи
EventConfig](class.eventconfig.md#eventconfig.constants) .

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 **Приклад використання EventConfig::avoidMethod()****

` <?php$cfg u003d new EventConfig();if ($cfg->avoidMethod("select")) {    echo "Метод 'select' буде ігноруватися
";}?> `

### Дивіться також

- [EventBase::\_\_construct()](eventbase.construct.md) - Конструктор
об'єкта EventBase
