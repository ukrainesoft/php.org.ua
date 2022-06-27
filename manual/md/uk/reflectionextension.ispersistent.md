- [« ReflectionExtension::info](reflectionextension.info.md)
- [ReflectionExtension::isTemporary
»](reflectionextension.istemporary.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- Визначає, чи модуль є постійним

# ReflectionExtension::isPersistent

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

ReflectionExtension::isPersistent — Визначає, чи є модуль
постійним

### Опис

public **ReflectionExtension::isPersistent**(): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** для модулів, що завантажуються через ini-налаштування
[`extension`](ini.core.md#ini.extension), **`false`** у протилежному
випадку.

### Дивіться також

- [ReflectionExtension::isTemporary()](reflectionextension.istemporary.md) -
Визначає, чи модуль тимчасовим
