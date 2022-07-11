- [«EventBase::gotStop](eventbase.gotstop.md)
- [EventBase::priorityInit »](eventbase.priorityinit.md)

- [PHP Manual](index.md)
- [EventBase](class.eventbase.md)
- Надсилання очікуваних подій

# EventBase::loop

(PECL event \>u003d 1.2.6-beta)

EventBase::loop — Надсилання очікуваних подій

### Опис

public **EventBase::loop**( int `$flags` u003d ?): bool

Очікує, доки події стануть активними, і запускає їх callback-функції.

**Увага**

*НЕ* руйнуйте об'єкт [EventBase](class.eventbase.md) доки
звільнені пов'язані з `Event` ресурси. Інакше це призведе
до непередбачуваних результатів!

### Список параметрів

`flags`
Необов'язкові прапори. Одна із констант `EventBase::LOOP_*`. Дивіться
[EventBase константи](class.eventbase.md#eventbase.constants).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBase::dispatch()](eventbase.dispatch.md) - Відправляє
очікуючі події
