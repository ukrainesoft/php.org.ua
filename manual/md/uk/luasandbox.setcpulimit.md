- [« LuaSandbox::registerLibrary](luasandbox.registerlibrary.md)
- [LuaSandbox::setMemoryLimit »](luasandbox.setmemorylimit.md)

- [PHP Manual](index.md)
- [LuaSandbox](class.luasandbox.md)
- Встановлює обмеження часу процесора для середовища Lua

# LuaSandbox::setCPULimit

(PECL luasandbox \>u003d 1.0.0)

LuaSandbox::setCPULimit — Встановлює обмеження часу процесора
для середовища Lua

### Опис

public **LuaSandbox::setCPULimit**(float\|bool `$limit`): void

Встановлює обмеження часу процесора для середовища Lua.

Якщо загальний користувальницький та системний час, використовуваний середовищем після
виклику методу, що перевищує це обмеження, викидається виняток
[LuaSandboxTimeoutError](class.luasandboxtimeouterror.md).

Час, який використовується в callback-функціях PHP, включено в ліміт.

Установка обмеження часу для callback-функції під час роботи
Lua призводить до скидання таймера або його запуску, якщо він ще не був
запущений.

> **Примітка**:
>
> У Windows обмеження процесора ігнорується. В операційних
> системах, які не підтримують **`CLOCK_THREAD_CPUTIME_ID`**, таких
> як FreeBSD та Mac OS X, буде обмежено фактичний час, а не час
> процесора.

### Список параметрів

`limit`
Обмеження як число з плаваючою точкою (float) в секундах або `false`,
щоб не обмежувати.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Виклик функції Lua**

` <?php// створення нового LuaSandbox$sandbox u003d new LuaSandbox();// установка ліміту$sandbox->setCPULimit( 2 );// запуск кода Lua$sandbox->load   call();?> `

Результатом виконання цього прикладу буде щось подібне:

PHP Fatal error: Uncaught LuaSandboxTimeoutError: The maximum execution time for this script was exceeded

### Дивіться також

- [LuaSandbox::getCPUUsage()](luasandbox.getcpuusage.md) -
Повертає поточний час використання процесора у середовищі Lua
- [LuaSandbox::setMemoryLimit()](luasandbox.setmemorylimit.md) -
Встановлює межу пам'яті для середовища Lua
