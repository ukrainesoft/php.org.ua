- [«
Swoole\Connection\Iterator::valid](swoole-connection-iterator.valid.md)
- [Swoole\Coroutine::call_user_func_array
»](swoole-coroutine.call-user-func-array.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Coroutine

# Клас Swoole\Coroutine

(PECL swoole \>u003d 2.0.0)

## Вступ

## Огляд класів

class **Swoole\Coroutine** {

/\* Методи \*/

public static
[call_user_func_array](swoole-coroutine.call-user-func-array.md)([callable](language.types.callable.md)
`$callback`, array `$param_array`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static
[call_user_func](swoole-coroutine.call-user-func.md)([callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static [cli_wait](swoole-coroutine.cli-wait.md)(): ReturnType

public static [create](swoole-coroutine.create.md)(): ReturnType

public
[Swoole\Coroutine\Client::close](swoole-coroutine-client.close.md)():
ReturnType

public
[Swoole\Coroutine\Client::connect](swoole-coroutine-client.connect.md)():
ReturnType

public
[Swoole\Coroutine\Client::\_\_destruct](swoole-coroutine-client.destruct.md)():
ReturnType

public
[Swoole\Coroutine\Client::getpeername](swoole-coroutine-client.getpeername.md)():
ReturnType

public
[Swoole\Coroutine\Client::getsockname](swoole-coroutine-client.getsockname.md)():
ReturnType

public
[Swoole\Coroutine\Client::isConnected](swoole-coroutine-client.isconnected.md)():
ReturnType

public
[Swoole\Coroutine\Client::recv](swoole-coroutine-client.recv.md)():
ReturnType

public
[Swoole\Coroutine\Client::send](swoole-coroutine-client.send.md)():
ReturnType

public
[Swoole\Coroutine\Client::sendfile](swoole-coroutine-client.sendfile.md)():
ReturnType

public
[Swoole\Coroutine\Client::sendto](swoole-coroutine-client.sendto.md)():
ReturnType

public
[Swoole\Coroutine\Client::set](swoole-coroutine-client.set.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::addFile](swoole-coroutine-http-client.addfile.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::close](swoole-coroutine-http-client.close.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::\_\_destruct](swoole-coroutine-http-client.destruct.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::execute](swoole-coroutine-http-client.execute.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::get](swoole-coroutine-http-client.get.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::getDefer](swoole-coroutine-http-client.getdefer.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::isConnected](swoole-coroutine-http-client.isconnected.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::post](swoole-coroutine-http-client.post.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::recv](swoole-coroutine-http-client.recv.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::set](swoole-coroutine-http-client.set.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::setCookies](swoole-coroutine-http-client.setcookies.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::setData](swoole-coroutine-http-client.setdata.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::setDefer](swoole-coroutine-http-client.setdefer.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::setHeaders](swoole-coroutine-http-client.setheaders.md)():
ReturnType

public
[Swoole\Coroutine\Http\Client::setMethod](swoole-coroutine-http-client.setmethod.md)():
ReturnType

public
[Swoole\Coroutine\MySQL::close](swoole-coroutine-mysql.close.md)():
ReturnType

public
[Swoole\Coroutine\MySQL::connect](swoole-coroutine-mysql.connect.md)():
ReturnType

public
[Swoole\Coroutine\MySQL::\_\_destruct](swoole-coroutine-mysql.destruct.md)():
ReturnType

public
[Swoole\Coroutine\MySQL::getDefer](swoole-coroutine-mysql.getdefer.md)():
ReturnType

public
[Swoole\Coroutine\MySQL::query](swoole-coroutine-mysql.query.md)():
ReturnType

public
[Swoole\Coroutine\MySQL::recv](swoole-coroutine-mysql.recv.md)():
ReturnType

public
[Swoole\Coroutine\MySQL::setDefer](swoole-coroutine-mysql.setdefer.md)():
ReturnType

public static [getuid](swoole-coroutine.getuid.md)(): ReturnType

public static [resume](swoole-coroutine.resume.md)(): ReturnType

public static [suspend](swoole-coroutine.suspend.md)(): ReturnType

}

## Зміст

- [Swoole\Coroutine::call_user_func_array](swoole-coroutine.call-user-func-array.md)
- Викликає callback-функцію з масивом параметрів
- [Swoole\Coroutine::call_user_func](swoole-coroutine.call-user-func.md)
- Викликає callback-функцію, задану першим параметром
- [Swoole\Coroutine::cli_wait](swoole-coroutine.cli-wait.md)
Опис
- [Swoole\Coroutine::create](swoole-coroutine.create.md) — Опис
- [Swoole\Coroutine\Client::close](swoole-coroutine-client.close.md)
- Опис
- [Swoole\Coroutine\Client::connect](swoole-coroutine-client.connect.md)
- Опис
- [Swoole\Coroutine\Client::\_\_construct](swoole-coroutine-client.construct.md)
- Опис
- [Swoole\Coroutine\Client::\_\_destruct](swoole-coroutine-client.destruct.md)
- Опис
- [Swoole\Coroutine\Client::getpeername](swoole-coroutine-client.getpeername.md)
- Опис
- [Swoole\Coroutine\Client::getsockname](swoole-coroutine-client.getsockname.md)
- Опис
- [Swoole\Coroutine\Client::isConnected](swoole-coroutine-client.isconnected.md)
- Опис
- [Swoole\Coroutine\Client::recv](swoole-coroutine-client.recv.md) -
Опис
- [Swoole\Coroutine\Client::send](swoole-coroutine-client.send.md) -
Опис
- [Swoole\Coroutine\Client::sendfile](swoole-coroutine-client.sendfile.md)
- Опис
- [Swoole\Coroutine\Client::sendto](swoole-coroutine-client.sendto.md)
- Опис
- [Swoole\Coroutine\Client::set](swoole-coroutine-client.set.md) -
Опис
- [Swoole\Coroutine\Http\Client::addFile](swoole-coroutine-http-client.addfile.md)
- Опис
- [Swoole\Coroutine\Http\Client::close](swoole-coroutine-http-client.close.md)
- Опис
- [Swoole\Coroutine\Http\Client::\_\_construct](swoole-coroutine-http-client.construct.md)
- Опис
- [Swoole\Coroutine\Http\Client::\_\_destruct](swoole-coroutine-http-client.destruct.md)
- Опис
- [Swoole\Coroutine\Http\Client::execute](swoole-coroutine-http-client.execute.md)
- Опис
- [Swoole\Coroutine\Http\Client::get](swoole-coroutine-http-client.get.md)
- Опис
- [Swoole\Coroutine\Http\Client::getDefer](swoole-coroutine-http-client.getdefer.md)
- Опис
- [Swoole\Coroutine\Http\Client::isConnected](swoole-coroutine-http-client.isconnected.md)
- Опис
- [Swoole\Coroutine\Http\Client::post](swoole-coroutine-http-client.post.md)
- Опис
- [Swoole\Coroutine\Http\Client::recv](swoole-coroutine-http-client.recv.md)
- Опис
- [Swoole\Coroutine\Http\Client::set](swoole-coroutine-http-client.set.md)
- Опис
- [Swoole\Coroutine\Http\Client::setCookies](swoole-coroutine-http-client.setcookies.md)
- Опис
- [Swoole\Coroutine\Http\Client::setData](swoole-coroutine-http-client.setdata.md)
- Опис
- [Swoole\Coroutine\Http\Client::setDefer](swoole-coroutine-http-client.setdefer.md)
- Опис
- [Swoole\Coroutine\Http\Client::setHeaders](swoole-coroutine-http-client.setheaders.md)
- Опис
- [Swoole\Coroutine\Http\Client::setMethod](swoole-coroutine-http-client.setmethod.md)
- Опис
- [Swoole\Coroutine\MySQL::close](swoole-coroutine-mysql.close.md) -
Опис
- [Swoole\Coroutine\MySQL::connect](swoole-coroutine-mysql.connect.md)
- Опис
- [Swoole\Coroutine\MySQL::\_\_construct](swoole-coroutine-mysql.construct.md)
- Опис
- [Swoole\Coroutine\MySQL::\_\_destruct](swoole-coroutine-mysql.destruct.md)
- Опис
- [Swoole\Coroutine\MySQL::getDefer](swoole-coroutine-mysql.getdefer.md)
- Опис
- [Swoole\Coroutine\MySQL::query](swoole-coroutine-mysql.query.md) -
Опис
- [Swoole\Coroutine\MySQL::recv](swoole-coroutine-mysql.recv.md) -
Опис
- [Swoole\Coroutine\MySQL::setDefer](swoole-coroutine-mysql.setdefer.md)
- Опис
- [Swoole\Coroutine::getuid](swoole-coroutine.getuid.md) — Опис
- [Swoole\Coroutine::resume](swoole-coroutine.resume.md) — Опис
- [Swoole\Coroutine::suspend](swoole-coroutine.suspend.md) -
Опис
