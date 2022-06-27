- [« Базове використання LuaSandbox](luasandbox.examples-basic.md)
- [LuaSandbox::callFunction »](luasandbox.callfunction.md)

- [PHP Manual](index.md)
- [LuaSandbox](book.luasandbox.md)
- Клас LuaSandbox

# Клас LuaSandbox

(PECL luasandbox \>u003d 1.0.0)

## Вступ

Клас LuaSandbox створює середовище Lua та дозволяє виконувати код Lua.

## Огляд класів

class **LuaSandbox** {

/\* Константи \*/

const int `SAMPLES` u003d 0;

const int `SECONDS` u003d 1;

const int `PERCENT` u003d 2;

/\* Методи \*/

public [callFunction](luasandbox.callfunction.md)(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`): array\|bool

public [disableProfiler](luasandbox.disableprofiler.md)(): void

public [enableProfiler](luasandbox.enableprofiler.md)(float `$period`
u003d 0.02): bool

public [getCPUUsage](luasandbox.getcpuusage.md)(): float

public [getMemoryUsage](luasandbox.getmemoryusage.md)(): int

public [getPeakMemoryUsage](luasandbox.getpeakmemoryusage.md)(): int

public
[getProfilerFunctionReport](luasandbox.getprofilerfunctionreport.md)(int
`$units` u003d LuaSandbox::SECONDS): array

public static [getVersionInfo](luasandbox.getversioninfo.md)(): array

public [loadBinary](luasandbox.loadbinary.md)(string `$code`, string
`$chunkName` u003d ''): [LuaSandboxFunction](class.luasandboxfunction.md)

public [loadString](luasandbox.loadstring.md)(string `$code`, string
`$chunkName` u003d ''): [LuaSandboxFunction](class.luasandboxfunction.md)

public [pauseUsageTimer](luasandbox.pauseusagetimer.md)(): bool

public [registerLibrary](luasandbox.registerlibrary.md)(string
`$libname`, array `$functions`): void

public [setCPULimit](luasandbox.setcpulimit.md)(float\|bool `$limit`):
void

public [setMemoryLimit](luasandbox.setmemorylimit.md)(int `$limit`):
void

public [unpauseUsageTimer](luasandbox.unpauseusagetimer.md)(): void

public
[wrapPhpFunction](luasandbox.wrapphpfunction.md)([callable](language.types.callable.md)
`$function`): [LuaSandboxFunction](class.luasandboxfunction.md)

}

## Зумовлені константи

**`LuaSandbox::SAMPLES`**
Використовується з
[LuaSandbox::getProfilerFunctionReport()](luasandbox.getprofilerfunctionreport.md)
для повернення часу у зразках.

**`LuaSandbox::SECONDS`**
Використовується з
[LuaSandbox::getProfilerFunctionReport()](luasandbox.getprofilerfunctionreport.md)
для повернення часу за секунди.

**`LuaSandbox::PERCENT`**
Використовується з
[LuaSandbox::getProfilerFunctionReport()](luasandbox.getprofilerfunctionreport.md)
повернення часу у відсотках від загального значення.

## Зміст

- [LuaSandbox::callFunction](luasandbox.callfunction.md) — Викликає
функцію в глобальній змінній Lua
- [LuaSandbox::disableProfiler](luasandbox.disableprofiler.md)
Відключає профільник
- [LuaSandbox::enableProfiler](luasandbox.enableprofiler.md)
Включає профільник
- [LuaSandbox::getCPUUsage](luasandbox.getcpuusage.md) — Повертає
поточний час використання процесора у середовищі Lua
- [LuaSandbox::getMemoryUsage](luasandbox.getmemoryusage.md) -
Повертає поточне використання пам'яті у середовищі Lua
- [LuaSandbox::getPeakMemoryUsage](luasandbox.getpeakmemoryusage.md)
— Повертає пікове використання пам'яті у середовищі Lua
- [LuaSandbox::getProfilerFunctionReport](luasandbox.getprofilerfunctionreport.md)
— Отримує дані профілювача
- [LuaSandbox::getVersionInfo](luasandbox.getversioninfo.md) -
Повертає версії LuaSandbox та Lua
- [LuaSandbox::loadBinary](luasandbox.loadbinary.md) — Завантажує
попередньо скомпільований двійковий фрагмент у середу Lua
- [LuaSandbox::loadString](luasandbox.loadstring.md) — Завантажує код
Lua у середу Lua
- [LuaSandbox::pauseUsageTimer](luasandbox.pauseusagetimer.md) -
Зупиняє таймер використання процесора
- [LuaSandbox::registerLibrary](luasandbox.registerlibrary.md)
Реєструє набір PHP-функцій як бібліотеку Lua
- [LuaSandbox::setCPULimit](luasandbox.setcpulimit.md) -
Встановлює обмеження часу процесора для середовища Lua
- [LuaSandbox::setMemoryLimit](luasandbox.setmemorylimit.md) -
Встановлює межу пам'яті для середовища Lua
- [LuaSandbox::unpauseUsageTimer](luasandbox.unpauseusagetimer.md) -
Відновлює таймер, припинений LuaSandbox::pauseUsageTimer
- [LuaSandbox::wrapPhpFunction](luasandbox.wrapphpfunction.md)
Обертає викликаний PHP-об'єкт у LuaSandboxFunction
