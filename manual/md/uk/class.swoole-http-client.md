- [« Swoole\Exception](class.swoole-exception.md)
- [Swoole\Http\Client::addFile »](swoole-http-client.addfile.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole \ Http \ Client

# Клас Swoole \ Http \ Client

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Http\Client** {

/\* Властивості \*/

public `$errCode`;

public `$sock`;

/\* Методи \*/

public [addFile](swoole-http-client.addfile.md)(
string `$path`,
string `$name`,
string `$type` u003d ?,
string `$filename` u003d ?,
string `$offset` u003d ?
): void

public [close](swoole-http-client.close.md)(): void

public [\_\_destruct](swoole-http-client.destruct.md)(): void

public [download](swoole-http-client.download.md)(
string `$path`,
string `$file`,
[callable](language.types.callable.md) `$callback`,
int `$offset` u003d ?
): void

public [execute](swoole-http-client.execute.md)(string `$path`, string
`$callback`): void

public [get](swoole-http-client.get.md)(string `$path`,
[callable](language.types.callable.md) `$callback`): void

public [isConnected](swoole-http-client.isconnected.md)(): bool

public [on](swoole-http-client.on.md)(string `$event_name`,
[callable](language.types.callable.md) `$callback`): void

public [post](swoole-http-client.post.md)(string `$path`, string
`$data`, [callable](language.types.callable.md) `$callback`): void

public [push](swoole-http-client.push.md)(string `$data`, string
`$opcode` u003d ?, string `$finish` u003d ?): void

public [set](swoole-http-client.set.md)(array `$settings`): void

public [setCookies](swoole-http-client.setcookies.md)(array
`$cookies`): void

public [setData](swoole-http-client.setdata.md)(string `$data`):
ReturnType

public [setHeaders](swoole-http-client.setheaders.md)(array
`$headers`): void

public [setMethod](swoole-http-client.setmethod.md)(string `$method`):
void

public [upgrade](swoole-http-client.upgrade.md)(string `$path`, string
`$callback`): void

}

## Властивості

`errCode`

`sock`

## Зміст

- [Swoole\Http\Client::addFile](swoole-http-client.addfile.md) -
Додає файл до форми повідомлення
- [Swoole\Http\Client::close](swoole-http-client.close.md) -
Закриває http-з'єднання
- [Swoole\Http\Client::\_\_construct](swoole-http-client.construct.md)
- Створює асинхронний HTTP-клієнт
- [Swoole\Http\Client::\_\_destruct](swoole-http-client.destruct.md)
— Знищує HTTP-клієнт
- [Swoole\Http\Client::download](swoole-http-client.download.md) -
Завантажує файл із віддаленого сервера
- [Swoole\Http\Client::execute](swoole-http-client.execute.md) -
Надсилає HTTP-запит після встановлення параметрів
- [Swoole\Http\Client::get](swoole-http-client.get.md) - Відправляє
HTTP-запит GET на віддалений сервер
- [Swoole\Http\Client::isConnected](swoole-http-client.isconnected.md)
— Перевіряє, чи підключено HTTP-з'єднання.
- [Swoole\Http\Client::on](swoole-http-client.on.md) - Реєструє
callback-функцію на ім'я події
- [Swoole\Http\Client::post](swoole-http-client.post.md) -
Надсилає HTTP-запит POST на віддалений сервер
- [Swoole\Http\Client::push](swoole-http-client.push.md) - Передає
дані у клієнт websocket
- [Swoole\Http\Client::set](swoole-http-client.set.md) - Оновлює
параметри HTTP-клієнта
- [Swoole\Http\Client::setCookies](swoole-http-client.setcookies.md)
— Встановлює cookies для HTTP-запиту
- [Swoole\Http\Client::setData](swoole-http-client.setdata.md) -
Встановлює дані тіла HTTP-запиту
- [Swoole\Http\Client::setHeaders](swoole-http-client.setheaders.md)
— Встановлює заголовки HTTP-запиту
- [Swoole\Http\Client::setMethod](swoole-http-client.setmethod.md) -
Встановлює метод HTTP-запиту
- [Swoole\Http\Client::upgrade](swoole-http-client.upgrade.md) -
Оновлення до протоколу websocket
