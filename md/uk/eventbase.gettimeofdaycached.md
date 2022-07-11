- [«EventBase::getMethod](eventbase.getmethod.md)
- [EventBase::gotExit »](eventbase.gotexit.md)

- [PHP Manual](index.md)
- [EventBase](class.eventbase.md)
- Повертає поточний час базовий подій

# EventBase::getTimeOfDayCached

(PECL event \>u003d 1.2.6-beta)

EventBase::getTimeOfDayCached — Повертає поточний час базовий подій

### Опис

public **EventBase::getTimeOfDayCached**(): float

При успішному завершенні повертає поточний час (як результат функції
`gettimeofday()`), переглядаючи кешоване значення в *base*, якщо це
можливо, і викликаючи `gettimeofday()` або `clock_gettime()`,
залежно від ситуації, якщо немає кешованого часу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає поточний час бази подій. У разі виникнення помилки
повертає **`null`**.
