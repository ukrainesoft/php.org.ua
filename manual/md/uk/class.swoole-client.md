- [« Swoole\Channel::stats](swoole-channel.stats.md)
- [Swoole\Client::close »](swoole-client.close.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Client

# Клас Swoole\Client

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Client** {

/\* Constants \*/

const int `MSG_OOB` u003d 1;

const int `MSG_PEEK` u003d 2;

const int `MSG_DONTWAIT` u003d 128;

const int `MSG_WAITALL` u003d 64;

/\* Властивості \*/

public `$errCode`;

public `$sock`;

public `$reuse`;

public `$reuseCount`;

/\* Методи \*/

public [close](swoole-client.close.md)(bool `$force` u003d ?): bool

public [connect](swoole-client.connect.md)(
string `$host`,
int `$port` u003d ?,
int `$timeout` u003d ?,
int `$flag` u003d ?
): bool

public [\_\_destruct](swoole-client.destruct.md)(): void

public [getpeername](swoole-client.getpeername.md)(): array

public [getsockname](swoole-client.getsockname.md)(): array

public [isConnected](swoole-client.isconnected.md)(): bool

public [on](swoole-client.on.md)(string `$event`,
[callable](language.types.callable.md) `$callback`): void

public [pause](swoole-client.pause.md)(): void

public [pipe](swoole-client.pipe.md)(string `$socket`): void

public [recv](swoole-client.recv.md)(string `$size` u003d ?, string
`$flag` u003d ?): void

public [resume](swoole-client.resume.md)(): void

public [send](swoole-client.send.md)(string `$data`, string `$flag` u003d
?): int

public [sendfile](swoole-client.sendfile.md)(string `$filename`, int
`$offset` u003d ?): bool

public [sendto](swoole-client.sendto.md)(string `$ip`, int `$port`,
string `$data`): bool

public [set](swoole-client.set.md)(array `$settings`): void

public [sleep](swoole-client.sleep.md)(): void

public [wakeup](swoole-client.wakeup.md)(): void

}

## Властивості

`errCode`

`sock`

`reuse`

`reuseCount`

## Зумовлені константи

**`Swoole\Client::MSG_OOB`**

**`Swoole\Client::MSG_PEEK`**

**`Swoole\Client::MSG_DONTWAIT`**

**`Swoole\Client::MSG_WAITALL`**

## Зміст

- [Swoole\Client::close](swoole-client.close.md) - Закриває
встановлене з'єднання
- [Swoole\Client::connect](swoole-client.connect.md) — Підключається
до віддаленого порту TCP або UDP
- [Swoole\Client::\_\_construct](swoole-client.construct.md) -
Створює синхронний або асинхронний TCP/UDP клієнт Swoole з
підтримкою SSL або без нього
- [Swoole\Client::\_\_destruct](swoole-client.destruct.md) -
Знищує клієнт Swoole
- [Swoole\Client::getpeername](swoole-client.getpeername.md) -
Отримує ім'я віддаленого сокету з'єднання
- [Swoole\Client::getsockname](swoole-client.getsockname.md) -
Отримує локальне ім'я сокета з'єднання
- [Swoole\Client::isConnected](swoole-client.isconnected.md) -
Перевіряє, чи з'єднання встановлено
- [Swoole\Client::on](swoole-client.on.md) - Додає
callback-функції, спричинені подіями
- [Swoole\Client::pause](swoole-client.pause.md) - Припиняє
отримання даних
- [Swoole\Client::pipe](swoole-client.pipe.md) - Перенаправляє
дані в інший файловий дескриптор
- [Swoole\Client::recv](swoole-client.recv.md) — Отримує дані з
віддаленого сокету
- [Swoole\Client::resume](swoole-client.resume.md) - Відновлює
отримання даних
- [Swoole\Client::send](swoole-client.send.md) — Надсилає дані в
віддалений TCP-сокет
- [Swoole\Client::sendfile](swoole-client.sendfile.md) - Відправляє
файл у віддалений TCP-сокет
- [Swoole\Client::sendto](swoole-client.sendto.md) - Відправляє
дані на віддалену UDP-адресу
- [Swoole\Client::set](swoole-client.set.md) - Встановлює
параметри клієнта Swoole до встановлення з'єднання
- [Swoole\Client::sleep](swoole-client.sleep.md) — Видаляє
TCP-клієнт із циклу системних подій
- [Swoole\Client::wakeup](swoole-client.wakeup.md) - Додає
TCP-клієнт назад у цикл системних подій
