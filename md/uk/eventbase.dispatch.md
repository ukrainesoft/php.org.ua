- [«EventBase::\_\_construct](eventbase.construct.md)
- [EventBase::exit »](eventbase.exit.md)

- [PHP Manual](index.md)
- [EventBase](class.eventbase.md)
- Відправляє очікувані події

# EventBase::dispatch

(PECL event \>u003d 1.2.6-beta)

EventBase::dispatch — Відправляє події, що очікують.

### Опис

public **EventBase::dispatch**(): void

Очікує, доки події стануть активними, і запускає їх callback-функції.
Також, як [EventBase::loop()](eventbase.loop.md) без встановлених
прапори.

**Увага**

*НЕ* руйнуйте об'єкт [EventBase](class.eventbase.md) доки
звільнені пов'язані з `Event` ресурси. Інакше це призведе
до непередбачуваних результатів!

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBase::loop()](eventbase.loop.md) - Надсилання чекаючих
подій
