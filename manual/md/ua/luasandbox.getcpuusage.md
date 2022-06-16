- [« LuaSandbox::enableProfiler](luasandbox.enableprofiler.md)
- [LuaSandbox::getMemoryUsage »](luasandbox.getmemoryusage.md)

- [PHP Manual](index.md)
- [LuaSandbox](class.luasandbox.md)
- Повертає поточний час використання процесора у середовищі Lua

# LuaSandbox::getCPUUsage

(PECL luasandbox \>u003d 1.0.0)

LuaSandbox::getCPUUsage — Повертає поточний час використання
процесора в середовищі Lua

### Опис

public **LuaSandbox::getCPUUsage**(): float

Повертає час використання процесора в середовищі Lua.

Включає витрачений час у callback-функціях PHP.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає час використання процесора в секундах.

> **Примітка**:
>
> У Windows ця функція завжди повертає нуль. В операційних
> системах, які не підтримують **`CLOCK_THREAD_CPUTIME_ID`**, таких
> як FreeBSD і Mac OS X, функція повертає минулий фізичний час,
> а чи не час процесора.

### Дивіться також

- [LuaSandbox::getMemoryUsage()](luasandbox.getmemoryusage.md) -
Повертає поточне використання пам'яті у середовищі Lua
- [LuaSandbox::getPeakMemoryUsage()](luasandbox.getpeakmemoryusage.md) -
Повертає пікове використання пам'яті у середовищі Lua
- [LuaSandbox::setCPULimit()](luasandbox.setcpulimit.md) -
Встановлює обмеження часу процесора для середовища Lua
