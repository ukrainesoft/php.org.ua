- [«EvChild](class.evchild.md)
- [EvChild::createStopped »](evchild.createstopped.md)

- [PHP Manual](index.md)
- [EvChild](class.evchild.md)
- Створює об'єкт спостерігач EvChild

# EvChild::\_\_construct

(PECL ev \>u003d 0.2.0)

EvChild::\_\_construct — Створює об'єкт спостерігача EvChild

### Опис

public **EvChild::\_\_construct**(
int `$pid`,
bool `$trace`,
[callable](language.types.callable.md) `$callback` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ,
int `$priority` u003d 0
)

Створює об'єкт спостерігача [EvChild](class.evchild.md).

Викликає callback-функцію, коли настала подія зміни статусу
процесу з ідентифікатором `pid` (або будь-яким *PID*, якщо `pid` заданий як
**`0`**). Статус процесу змінюється, коли процес завершується, або
коли його вбивають, або, якщо `trace` дорівнює **`true`**, коли він
зупинено або відновлено. Іншими словами, коли процес отримує
сигнал **`SIGCHLD`** , *Ev* отримує статус exit/wait для всіх
змінених/зомбі дочірніх процесів і викликає callback-функцію.

Правильно встановлювати дочірнього спостерігача після того, як
[EvChild](class.evchild.md) завершився, але до запуску наступної
ітерації подієвого циклу. Наприклад, спочатку викликається `fork`, після
чого новий дочірній процес може вийти, і лише після цього у батьку
встановлюється спостерігач [EvChild](class.evchild.md) для нового
*PID* .

Ви можете отримати доступ до статусів exit/tracing та `pid` використовуючи
властивості об'єкта спостерігача `rstatus` та `rpid`.

Кількість *PID*-спостерігачів для кожного *PID* не обмежена. Всі вони
будуть викликані.

Метод [EvChild::createStopped()](evchild.createstopped.md) не
стартує(не активує) створеного спостерігача.

### Список параметрів

`pid`
Очікує зміни статусу процесу з ідентифікатором PID (або будь-якого
процесу, якщо PID заданий як **`0`**).

`trace`
Якщо **`false`**, то активація спостерігача відбувається лише за
завершення процесу. Якщо **`true`**, то активація відбувається також за
зупинки/відновлення процесу.

`callback`
Дивіться [Callback-функції спостерігачів](ev.watcher-callbacks.md).

`data`
Довільні дані, пов'язані зі спостерігачем.

`priority`
[Пріоритет спостерігача](class.ev.md#ev.constants.watcher-pri)

### Дивіться також

- [EvLoop::child()](evloop.child.md) - Створює об'єкт EvChild,
пов'язаний із поточним циклом подій
