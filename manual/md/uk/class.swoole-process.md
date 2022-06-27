- [« Swoole \ MySQL \ Exception] (class.swoole-mysql-exception.md)
- [Swoole\Process::alarm »](swoole-process.alarm.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Process

# Клас Swoole\Process

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Process** {

/\* Константи \*/

const int `IPC_NOWAIT` u003d 256;

/\* Методи \*/

public static [alarm](swoole-process.alarm.md)(int `$interval_usec`):
void

public [close](swoole-process.close.md)(): void

public static [daemon](swoole-process.daemon.md)(bool `$nochdir` u003d ?,
bool `$noclose` u003d ?): void

public [\_\_destruct](swoole-process.destruct.md)(): void

public [exec](swoole-process.exec.md)(string `$exec_file`, string
`$args`): ReturnType

public [exit](swoole-process.exit.md)(string `$exit_code` u003d ?): void

public [freeQueue](swoole-process.freequeue.md)(): void

public static [kill](swoole-process.kill.md)(int `$pid`, int
`$signal_no` u003d ?): bool

public [name](swoole-process.name.md)(string `$process_name`): bool

public [pop](swoole-process.pop.md)(int `$maxsize` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [push](swoole-process.push.md)(string `$data`): bool

public [read](swoole-process.read.md)(int `$maxsize` u003d ?): string

public static [signal](swoole-process.signal.md)(string `$signal_no`,
[callable](language.types.callable.md) `$callback`): void

public [start](swoole-process.start.md)(): void

public [statQueue](swoole-process.statqueue.md)(): array

public [useQueue](swoole-process.usequeue.md)(int `$key`, int `$mode`
u003d?): bool

public static [wait](swoole-process.wait.md)(bool `$blocking` u003d ?):
array

public [write](swoole-process.write.md)(string `$data`): int

}

## Зумовлені константи

**`Swoole\Process::IPC_NOWAIT`**

## Зміст

- [Swoole\Process::alarm](swoole-process.alarm.md) - Таймер високої
точності, який запускає сигнал із фіксованим інтервалом
- [Swoole\Process::close](swoole-process.close.md) - Закриває канал
для дочірнього процесу
- [Swoole\Process::\_\_construct](swoole-process.construct.md) -
Створює процес
- [Swoole\Process::daemon](swoole-process.daemon.md) — Змінює
процес на процес-демон
- [Swoole\Process::\_\_destruct](swoole-process.destruct.md) -
Знищує процес
- [Swoole\Process::exec](swoole-process.exec.md) — Виконує
системні команди
- [Swoole\Process::exit](swoole-process.exit.md) - Зупиняє
дочірні процеси
- [Swoole\Process::freeQueue](swoole-process.freequeue.md) -
Знищує чергу повідомлень, створену swoole_process::useQueue
- [Swoole\Process::kill](swoole-process.kill.md) — Надсилає сигнал
дочірньому процесу
- [Swoole\Process::name](swoole-process.name.md) - Встановлює
назва процесу
- [Swoole\Process::pop](swoole-process.pop.md) — Читає та витягує
дані з черги повідомлень
- [Swoole\Process::push](swoole-process.push.md) - Записує та
поміщає дані в чергу повідомлень
- [Swoole\Process::read](swoole-process.read.md) — Читає дані
відправки у процес
- [Swoole\Process::signal](swoole-process.signal.md) — Надсилає
сигнал дочірнім процесам
- [Swoole\Process::start](swoole-process.start.md) - Запускає
процес
- [Swoole\Process::statQueue](swoole-process.statqueue.md) -
Отримує статистику черги повідомлень, яка використовується як
методу зв'язку між процесами
- [Swoole\Process::useQueue](swoole-process.usequeue.md) - Створює
черга повідомлень як метод зв'язку між батьківським
процесом та дочірніми процесами
- [Swoole\Process::wait](swoole-process.wait.md) - Очікує подій
дочірніх процесів
- [Swoole\Process::write](swoole-process.write.md) - Записує
дані в канал і зв'язується з батьківським процесом або дочірніми
процесами
