- [«
ReflectionExtension::isTemporary](reflectionextension.istemporary.md)
- [ReflectionFunction »](class.reflectionfunction.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- Перетворення на рядок

# ReflectionExtension::\_\_toString

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::\_\_toString — Перетворення на рядок

### Опис

public **ReflectionExtension::\_\_toString**(): string

Виконує експорт модуля та повертає його у вигляді рядка string. Це те
ж саме, що й виклик
[ReflectionExtension::export()](reflectionextension.export.md) з
аргументом `return`, рівним **`true`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає експортований модуль у вигляді рядка, так само як
[ReflectionExtension::export()](reflectionextension.export.md).

### Дивіться також

- [ReflectionExtension::\_\_construct()](reflectionextension.construct.md) -
Створює об'єкт класу ReflectionExtension
- [ReflectionExtension::export()](reflectionextension.export.md) -
Експортує модуль
- [\_\_toString()](language.oop5.magic.md#object.tostring)
