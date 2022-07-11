- [« Swoole\Process::write](swoole-process.write.md)
- [Swoole\Redis\Server::format »](swoole-redis-server.format.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Redis\Server

# Клас Swoole\Redis\Server

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Redis\Server** extends
[Swoole\Server](class.swoole-server.md) {

/\* Константи \*/

const int `NIL` u003d 1;

const int `ERROR` u003d 0;

const int `STATUS` u003d 2;

const int `INT` u003d 3;

const int `STRING` u003d 4;

const int `SET` u003d 5;

const int `MAP` u003d 6;

/\* Методи \*/

public static [format](swoole-redis-server.format.md)(string `$type`,
string `$value` u003d ?): ReturnType

public [setHandler](swoole-redis-server.sethandler.md)(
string `$command`,
string `$callback`,
string `$number_of_string_param` u003d ?,
string `$type_of_array_param` u003d ?
): ReturnType

public [start](swoole-redis-server.start.md)(): ReturnType

/\* Наслідувані методи \*/

public
[Swoole\Server::addlistener](swoole-server.addlistener.md)(string
`$host`, int `$port`, string `$socket_type`): void

public
[Swoole\Server::addProcess](swoole-server.addprocess.md)([swoole_process](class.swoole-process.md)
`$process`): bool

public [Swoole\Server::after](swoole-server.after.md)(int
`$after_time_ms`, [callable](language.types.callable.md) `$callback`,
string `$param` u003d ?): ReturnType

public [Swoole\Server::bind](swoole-server.bind.md)(int `$fd`, int
`$uid`): bool

public [Swoole\Server::clearTimer](swoole-server.cleartimer.md)(int
`$timer_id`): void

**swoole_timer_clear**(int `$timer_id`): void

public [Swoole\Server::close](swoole-server.close.md)(int `$fd`, bool
`$reset` u003d ?): bool

public [Swoole\Server::confirm](swoole-server.confirm.md)(int `$fd`):
bool

public
[Swoole\Server::connection_info](swoole-server.connection-info.md)(int
`$fd`, int `$reactor_id` u003d ?): array

public
[Swoole\Server::connection_list](swoole-server.connection-list.md)(int
`$start_fd`, int `$pagesize` u003d ?): array

public
[Swoole\Server::defer](swoole-server.defer.md)([callable](language.types.callable.md)
`$callback`): void

public
[Swoole\Server\Port::\_\_destruct](swoole-server-port.destruct.md)():
void

public [Swoole\Server\Port::on](swoole-server-port.on.md)(string
`$event_name`, [callable](language.types.callable.md) `$callback`):
ReturnType

public [Swoole\Server\Port::set](swoole-server-port.set.md)(array
`$settings`): void

public [Swoole\Server::exist](swoole-server.exist.md)(int `$fd`): bool

public [Swoole\Server::finish](swoole-server.finish.md)(string
`$data`): void

public
[Swoole\Server::getClientInfo](swoole-server.getclientinfo.md)(int
`$fd`, int `$reactor_id` u003d ?, bool `$ignore_error` u003d ?): array

public
[Swoole\Server::getClientList](swoole-server.getclientlist.md)(int
`$start_fd`, int `$pagesize` u003d ?): array

public [Swoole\Server::getLastError](swoole-server.getlasterror.md)():
int

public [Swoole\Server::heartbeat](swoole-server.heartbeat.md)(bool
`$if_close_connection`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [Swoole\Server::listen](swoole-server.listen.md)(string
`$host`, int `$port`, string `$socket_type`): bool

public [Swoole\Server::on](swoole-server.on.md)(string `$event_name`,
[callable](language.types.callable.md) `$callback`): void

public [Swoole\Server::pause](swoole-server.pause.md)(int `$fd`): void

public [Swoole\Server::protect](swoole-server.protect.md)(int `$fd`,
bool `$is_protected` u003d ?): void

public [Swoole\Server::reload](swoole-server.reload.md)(): bool

public [Swoole\Server::resume](swoole-server.resume.md)(int `$fd`):
void

public [Swoole\Server::send](swoole-server.send.md)(int `$fd`, string
`$data`, int `$reactor_id` u003d ?): bool

public [Swoole\Server::sendfile](swoole-server.sendfile.md)(int `$fd`,
string `$filename`, int `$offset` u003d ?): bool

public [Swoole\Server::sendMessage](swoole-server.sendmessage.md)(int
`$worker_id`, string `$data`): bool

public [Swoole\Server::sendto](swoole-server.sendto.md)(
string `$ip`,
int `$port`,
string `$data`,
string `$server_socket` u003d ?
): bool

public [Swoole\Server::sendwait](swoole-server.sendwait.md)(int `$fd`,
string `$data`): bool

public [Swoole\Server::set](swoole-server.set.md)(array `$settings`):
ReturnType

public [Swoole\Server::shutdown](swoole-server.shutdown.md)(): void

public [Swoole\Server::start](swoole-server.start.md)(): void

public [Swoole\Server::stats](swoole-server.stats.md)(): array

public [Swoole\Server::stop](swoole-server.stop.md)(int `$worker_id` u003d
?): bool

public [Swoole\Server::task](swoole-server.task.md)(string `$data`,
int `$dst_worker_id` u003d ?, [callable](language.types.callable.md)
`$callback` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [Swoole\Server::taskwait](swoole-server.taskwait.md)(string
`$data`, float `$timeout` u003d ?, int `$worker_id` u003d ?): void

public
[Swoole\Server::taskWaitMulti](swoole-server.taskwaitmulti.md)(array
`$tasks`, double `$timeout_ms` u003d ?): void

public [Swoole\Server::tick](swoole-server.tick.md)(int
`$interval_ms`, [callable](language.types.callable.md) `$callback`):
void

}

## Зумовлені константи

**`Swoole\Redis\Server::NIL`**

**`Swoole\Redis\Server::ERROR`**

**`Swoole\Redis\Server::STATUS`**

**`Swoole\Redis\Server::INT`**

**`Swoole\Redis\Server::STRING`**

**`Swoole\Redis\Server::SET`**

**`Swoole\Redis\Server::MAP`**

## Зміст

- [Swoole\Redis\Server::format](swoole-redis-server.format.md) -
Опис
- [Swoole\Redis\Server::setHandler](swoole-redis-server.sethandler.md)
- Опис
- [Swoole\Redis\Server::start](swoole-redis-server.start.md) -
Опис
