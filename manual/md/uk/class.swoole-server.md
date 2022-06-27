- [« Swoole\Serialize::unpack](swoole-serialize.unpack.md)
- [Swoole\Server::addlistener »](swoole-server.addlistener.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Server

# Клас Swoole\Server

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Server** {

/\* Методи \*/

public [addlistener](swoole-server.addlistener.md)(string `$host`, int
`$port`, string `$socket_type`): void

public
[addProcess](swoole-server.addprocess.md)([swoole_process](class.swoole-process.md)
`$process`): bool

public [after](swoole-server.after.md)(int `$after_time_ms`,
[callable](language.types.callable.md) `$callback`, string `$param` u003d
?): ReturnType

public [bind](swoole-server.bind.md)(int `$fd`, int `$uid`): bool

public [clearTimer](swoole-server.cleartimer.md)(int `$timer_id`):
void

**swoole_timer_clear**(int `$timer_id`): void

public [close](swoole-server.close.md)(int `$fd`, bool `$reset` u003d ?):
bool

public [confirm](swoole-server.confirm.md)(int `$fd`): bool

public [connection_info](swoole-server.connection-info.md)(int `$fd`,
int `$reactor_id` u003d ?): array

public [connection_list](swoole-server.connection-list.md)(int
`$start_fd`, int `$pagesize` u003d ?): array

public
[defer](swoole-server.defer.md)([callable](language.types.callable.md)
`$callback`): void

public
[Swoole\Server\Port::\_\_destruct](swoole-server-port.destruct.md)():
void

public [Swoole\Server\Port::on](swoole-server-port.on.md)(string
`$event_name`, [callable](language.types.callable.md) `$callback`):
ReturnType

public [Swoole\Server\Port::set](swoole-server-port.set.md)(array
`$settings`): void

public [exist](swoole-server.exist.md)(int `$fd`): bool

public [finish](swoole-server.finish.md)(string `$data`): void

public [getClientInfo](swoole-server.getclientinfo.md)(int `$fd`, int
`$reactor_id` u003d ?, bool `$ignore_error` u003d ?): array

public [getClientList](swoole-server.getclientlist.md)(int
`$start_fd`, int `$pagesize` u003d ?): array

public [getLastError](swoole-server.getlasterror.md)(): int

public [heartbeat](swoole-server.heartbeat.md)(bool
`$if_close_connection`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [listen](swoole-server.listen.md)(string `$host`, int `$port`,
string `$socket_type`): bool

public [on](swoole-server.on.md)(string `$event_name`,
[callable](language.types.callable.md) `$callback`): void

public [pause](swoole-server.pause.md)(int `$fd`): void

public [protect](swoole-server.protect.md)(int `$fd`, bool
`$is_protected` u003d ?): void

public [reload](swoole-server.reload.md)(): bool

public [resume](swoole-server.resume.md)(int `$fd`): void

public [send](swoole-server.send.md)(int `$fd`, string `$data`, int
`$reactor_id` u003d ?): bool

public [sendfile](swoole-server.sendfile.md)(int `$fd`, string
`$filename`, int `$offset` u003d ?): bool

public [sendMessage](swoole-server.sendmessage.md)(int `$worker_id`,
string `$data`): bool

public [sendto](swoole-server.sendto.md)(
string `$ip`,
int `$port`,
string `$data`,
string `$server_socket` u003d ?
): bool

public [sendwait](swoole-server.sendwait.md)(int `$fd`, string
`$data`): bool

public [set](swoole-server.set.md)(array `$settings`): ReturnType

public [shutdown](swoole-server.shutdown.md)(): void

public [start](swoole-server.start.md)(): void

public [stats](swoole-server.stats.md)(): array

public [stop](swoole-server.stop.md)(int `$worker_id` u003d ?): bool

public [task](swoole-server.task.md)(string `$data`, int
`$dst_worker_id` u003d ?, [callable](language.types.callable.md)
`$callback` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [taskwait](swoole-server.taskwait.md)(string `$data`, float
`$timeout` u003d ?, int `$worker_id` u003d ?): void

public [taskWaitMulti](swoole-server.taskwaitmulti.md)(array `$tasks`,
double `$timeout_ms` u003d ?): void

public [tick](swoole-server.tick.md)(int `$interval_ms`,
[callable](language.types.callable.md) `$callback`): void

}

## Зміст

- [Swoole\Server::addlistener](swoole-server.addlistener.md) -
Додає нового слухача на сервер
- [Swoole\Server::addProcess](swoole-server.addprocess.md) -
Додає певний користувачем swoole_process на сервер
- [Swoole\Server::after](swoole-server.after.md) — Запускає
callback-функцію після закінчення певного періоду часу
- [Swoole\Server::bind](swoole-server.bind.md) - Прив'язує
з'єднання до вказаного ідентифікатора користувача
- [Swoole\Server::clearTimer](swoole-server.cleartimer.md) -
Зупиняє та знищує таймер
- [Swoole\Server::close](swoole-server.close.md) - Закриває
з'єднання з клієнтом
- [Swoole\Server::confirm](swoole-server.confirm.md) — Перевіряє
стан з'єднання
- [Swoole\Server::connection_info](swoole-server.connection-info.md)
— Отримує інформацію про з'єднання з описом файлу
- [Swoole\Server::connection_list](swoole-server.connection-list.md)
— Отримує всі встановлені з'єднання
- [Swoole\Server::\_\_construct](swoole-server.construct.md) -
Створює сервер Swoole
- [Swoole\Server::defer](swoole-server.defer.md) — Відкладає
виконання callback-функції в кінці поточного EventLoop
- [Swoole\Server\Port::\_\_construct](swoole-server-port.construct.md)
- Створює порт сервера
- [Swoole\Server\Port::\_\_destruct](swoole-server-port.destruct.md)
— Знищує порт сервера
- [Swoole\Server\Port::on](swoole-server-port.on.md) - Реєструє
callback-функції за подією
- [Swoole\Server\Port::set](swoole-server-port.set.md) -
Встановлює протокол порту сервера
- [Swoole\Server::exist](swoole-server.exist.md) — Перевіряє,
чи існує з'єднання
- [Swoole\Server::finish](swoole-server.finish.md) — Використовується в
процесі завдання для відправки результату в робочий процес після
завершення завдання
- [Swoole\Server::getClientInfo](swoole-server.getclientinfo.md) -
Отримує інформацію про з'єднання з описом файлу
- [Swoole\Server::getClientList](swoole-server.getclientlist.md) -
Отримує всі встановлені з'єднання
- [Swoole\Server::getLastError](swoole-server.getlasterror.md) -
Отримує код останньої помилки
- [Swoole\Server::heartbeat](swoole-server.heartbeat.md) — Перевіряє
всі з'єднання на сервері
- [Swoole\Server::listen](swoole-server.listen.md) — Слухає по
заданому IP та порту, тип сокету
- [Swoole\Server::on](swoole-server.on.md) — Реєструє
callback-функцію на ім'я події
- [Swoole\Server::pause](swoole-server.pause.md) - Припиняє
отримання даних від з'єднання
- [Swoole\Server::protect](swoole-server.protect.md) — Встановлює
з'єднання у захищений режим
- [Swoole\Server::reload](swoole-server.reload.md) — Перезапуск
всі робочі процеси
- [Swoole\Server::resume](swoole-server.resume.md) - Починає
отримувати дані із з'єднання
- [Swoole\Server::send](swoole-server.send.md) — Надсилає дані
клієнту
- [Swoole\Server::sendfile](swoole-server.sendfile.md) — Надсилає
файл на з'єднання
- [Swoole\Server::sendMessage](swoole-server.sendmessage.md) -
Надсилає повідомлення робочим процесам за ідентифікатором
- [Swoole\Server::sendto](swoole-server.sendto.md) — Відправляє
дані на віддалену UDP-адресу
- [Swoole\Server::sendwait](swoole-server.sendwait.md) — Відправляє
дані у віддалений сокет блокуючим способом
- [Swoole\Server::set](swoole-server.set.md) — Встановлює
налаштування часу виконання сервера swoole
- [Swoole\Server::shutdown](swoole-server.shutdown.md) - Завершує
процес головного сервера, функцію можна викликати у робочих процесах
- [Swoole\Server::start](swoole-server.start.md) — Запускає сервер
Swoole
- [Swoole\Server::stats](swoole-server.stats.md) — Отримує
статистику сервера Swoole
- [Swoole\Server::stop](swoole-server.stop.md) - Зупиняє
сервер Swoole
- [Swoole\Server::task](swoole-server.task.md) — Надсилає дані в
робочі процеси завдання
- [Swoole\Server::taskwait](swoole-server.taskwait.md) — Надсилає
дані робочим процесам завдання блокуючим способом
- [Swoole\Server::taskWaitMulti](swoole-server.taskwaitmulti.md) -
Виконує кілька завдань одночасно
- [Swoole\Server::tick](swoole-server.tick.md) - Повторює цю
функцію у кожний заданий інтервал часу
