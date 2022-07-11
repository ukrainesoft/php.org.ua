- [«
LuaSandbox::getPeakMemoryUsage](luasandbox.getpeakmemoryusage.md)
- [LuaSandbox::getVersionInfo »](luasandbox.getversioninfo.md)

- [PHP Manual](index.md)
- [LuaSandbox](class.luasandbox.md)
- Отримує дані профілювача

# LuaSandbox::getProfilerFunctionReport

(PECL luasandbox \>u003d 1.1.0)

LuaSandbox::getProfilerFunctionReport — Отримує дані профілювача

### Опис

public **LuaSandbox::getProfilerFunctionReport**(int `$units` u003d
LuaSandbox::SECONDS): array

Для екземпляра профілювання, раніше запущеного за допомогою
[LuaSandbox::enableProfiler()](luasandbox.enableprofiler.md), отримаєте
звіт про вартість кожної функції.

Measurement unit used for the cost is determined by the `$units`
parameter:

**`LuaSandbox::SAMPLES`**
Вимірювання кількості зразків.

**`LuaSandbox::SECONDS`**
Вимірювання процесорного часу за секунди.

**`LuaSandbox::PERCENT`**
Вимірювання відсотка процесорного часу.

### Список параметрів

`units`
Константа одиниці виміру.

### Значення, що повертаються

Повертає вимірювання профільника, відсортовані в порядку зменшення,
як асоціативного масиву (array). Ключі – це імена функцій Lua (з
вихідним файлом і рядком, визначеним у кутових дужках), значення -
це вимірювання як ціле число (int) або число з плаваючою комою
(float).

> **Примітка**:
>
> Функція Windows завжди повертає порожній масив. В операційних
> системах, які не підтримують **`CLOCK_THREAD_CPUTIME_ID`**, таких
> як FreeBSD і Mac OS X, функція повідомлятиме фактичне минуле
> час, а чи не час процесора.

### Приклади

**Приклад #1 Профіль коду Lua**

` <?php// створення нового LuaSandbox$sandbox u003d new LuaSandbox();// початок профілювання$sandbox->enableProfiler( 0.01 );// ... Виконання якого    data u003d $sandbox->getProfilerFunctionReport();?> `
