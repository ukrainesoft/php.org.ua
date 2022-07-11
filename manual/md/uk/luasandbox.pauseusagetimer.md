- [« LuaSandbox::loadString](luasandbox.loadstring.md)
- [LuaSandbox::registerLibrary »](luasandbox.registerlibrary.md)

- [PHP Manual](index.md)
- [LuaSandbox](class.luasandbox.md)
- Зупиняє таймер використання процесора

# LuaSandbox::pauseUsageTimer

(PECL luasandbox \>u003d 1.4.0)

LuaSandbox::pauseUsageTimer — Зупиняє таймер використання
процесора

### Опис

public **LuaSandbox::pauseUsageTimer**(): bool

Зупиняє таймер використання процесора.

Має значення тільки за виклику з callback-функції Lua. Коли
виконання повертається в Lua, таймер автоматично відновлює роботу.
Якщо буде зроблено новий виклик у Lua, таймер буде відновлено на час
цього виклику.

Якщо callback-функція PHP знову викликає Lua з не призупиненим
таймером, а потім ця функція Lua знову викликає PHP, другий виклик PHP
не зможе призупинити таймер. Логіка полягає в тому, що навіть якщо
другий виклик PHP не враховує використання процесора відповідно до
обмеженням, перший виклик все одно вважає.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає логічне значення (bool), що вказує, чи зупинено
Таймер.

### Приклади

**Приклад #1 Керування таймером використання**

`<?php// створення нового LuaSandbox і установка ліміту процесора$sandbox u003d neu LuaSandbox(); while ( microtime( true ) < $end ) {        // waste CPU cycles    }}// регистрация новой callback-функции PHP$sandbox->registerLibrary( 'php', [    'test' u003d> function () use ( $sandbox ) {        $sandbox->pauseUsageTimer();        doWait( 5 );        $sandbox->unpauseUsageTimer();        doWait( 0.1 );    },    'test2' u003d> function () use ( $sandbox ) {        $sandbox->pauseUsageTimer() ;     $sandbox->unpauseUsageTimer();        doWait( 1.1 );    }] );echo "Це не повинна 
";$sandbox->loadString( 'php.test()' )->call();echo "Це повинно міняти.
";try { |$sandbox->loadString( 'php.test2()' )->call();   echo "Це не так?
";} catch ( LuaSandboxTimeoutError $ex ) {    echo "Це так! " . $ex->getMessage() . "
";}?> `

Результат виконання цього прикладу:

Це не повинно закінчуватися...
Це має закінчуватися.
Це так! The maximum execution time for this script was exceeded

### Дивіться також

- [LuaSandbox::setCPULimit()](luasandbox.setcpulimit.md) -
Встановлює обмеження часу процесора для середовища Lua
- [LuaSandbox::unpauseUsageTimer()](luasandbox.unpauseusagetimer.md) -
Відновлює таймер, припинений LuaSandbox::pauseUsageTimer
