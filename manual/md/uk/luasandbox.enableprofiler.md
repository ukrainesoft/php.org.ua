- [« LuaSandbox::disableProfiler](luasandbox.disableprofiler.md)
- [LuaSandbox::getCPUUsage »](luasandbox.getcpuusage.md)

- [PHP Manual](index.md)
- [LuaSandbox](class.luasandbox.md)
- Включає профільник

# LuaSandbox::enableProfiler

(PECL luasandbox \>u003d 1.1.0)

LuaSandbox::enableProfiler — Включає профільник

### Опис

public **LuaSandbox::enableProfiler**(float `$period` u003d 0.02): bool

Вмикає профільувальник. Профілювання розпочнеться після введення коду Lua.

Профілювальник періодично проводить вимірювання середовища Lua для запису
виконуваної функції. Тестування показує, що принаймні в
Linux установка періоду менше 1 мілісекунди призведе до великого
кількості переповнень, але без проблем із продуктивністю.

### Список параметрів

`period`
Період вибірки за секунди.

### Значення, що повертаються

Повертає логічне значення, що вказує на те, чи включений профільник.

### Дивіться також

- [LuaSandbox::disableProfiler()](luasandbox.disableprofiler.md) -
Відключає профільник
- [LuaSandbox::getProfilerFunctionReport()](luasandbox.getprofilerfunctionreport.md) -
Отримує дані профілювача
