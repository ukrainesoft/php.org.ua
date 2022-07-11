- [« Swoole\WebSocket\Frame](class.swoole-websocket-frame.md)
- [Swoole\WebSocket\Server::exist
»](swoole-websocket-server.exist.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\WebSocket\Server

# Клас Swoole\WebSocket\Server

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\WebSocket\Server** extends
[Swoole\Http\Server](class.swoole-http-server.md) {

/\* Методи \*/

public [exist](swoole-websocket-server.exist.md)(int `$fd`): bool

public [on](swoole-websocket-server.on.md)(string `$event_name`,
[callable](language.types.callable.md) `$callback`): ReturnType

public static [pack](swoole-websocket-server.pack.md)(
string `$data`,
string `$opcode` u003d ?,
string `$finish` u003d ?,
string `$mask` u003d ?
): binary

public [push](swoole-websocket-server.push.md)(
string `$fd`,
string `$data`,
string `$opcode` u003d ?,
string `$finish` u003d ?
): void

public static [unpack](swoole-websocket-server.unpack.md)(binary
`$data`): string

/\* Наслідувані методи \*/

public [Swoole\Http\Server::on](swoole-http-server.on.md)(string
`$event_name`, [callable](language.types.callable.md) `$callback`):
void

public [Swoole\Http\Server::start](swoole-http-server.start.md)():
void

}

## Зміст

- [Swoole\WebSocket\Server::exist](swoole-websocket-server.exist.md)
— Перевіряє, чи є опис файлу
- [Swoole\WebSocket\Server::on](swoole-websocket-server.on.md) -
Зареєструвати callback-функцію події
- [Swoole\WebSocket\Server::pack](swoole-websocket-server.pack.md) -
Отримання пакета двійкових даних для надсилання в одній групі даних
(frame)
- [Swoole\WebSocket\Server::push](swoole-websocket-server.push.md) -
Надіслати дані віддаленому клієнту
- [Swoole\WebSocket\Server::unpack](swoole-websocket-server.unpack.md)
- Розпакувати двійкові дані, отримані від клієнта
