- [« LuaSandbox::setCPULimit](luasandbox.setcpulimit.md)
- [LuaSandbox::unpauseUsageTimer »](luasandbox.unpauseusagetimer.md)

- [PHP Manual](index.md)
- [LuaSandbox](class.luasandbox.md)
- Встановлює межу пам'яті для середовища Lua

# LuaSandbox::setMemoryLimit

(PECL luasandbox \>u003d 1.0.0)

LuaSandbox::setMemoryLimit — Встановлює межу пам'яті для середовища Lua

### Опис

public **LuaSandbox::setMemoryLimit**(int `$limit`): void

Встановлює межу пам'яті для середовища Lua.

Якщо межа перевищена, буде викинуто виняток
[LuaSandboxMemoryError](class.luasandboxmemoryerror.md).

### Список параметрів

`limit`
Межа пам'яті у байтах.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Виклик функції Lua**

`<?php// Створення нового об'єкта LuaSandbox$sandbox u003d neu LuaSandbox();// Установка межі пам'яті$sandbox->setMemoryLimit( 50 * 1024 * > u003d "x"; while true do x u003d x .. x; end' )->call();?> `

Результатом виконання цього прикладу буде щось подібне:

PHP Fatal error: Uncaught LuaSandboxMemoryError: not enough memory

### Дивіться також

- [LuaSandbox::getMemoryUsage()](luasandbox.getmemoryusage.md) -
Повертає поточне використання пам'яті у середовищі Lua
- [LuaSandbox::getPeakMemoryUsage()](luasandbox.getpeakmemoryusage.md) -
Повертає пікове використання пам'яті у середовищі Lua
- [LuaSandbox::setCPULimit()](luasandbox.setcpulimit.md) -
Встановлює обмеження часу процесора для середовища Lua
