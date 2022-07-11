- [«
Swoole\Http\Request::rawcontent](swoole-http-request.rawcontent.md)
- [Swoole\Http\Response::cookie »](swoole-http-response.cookie.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole \ Http \ Response

# Клас Swoole\Http\Response

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Http\Response** {

/\* Методи \*/

public [cookie](swoole-http-response.cookie.md)(
string `$name`,
string `$value` u003d ?,
string `$expires` u003d ?,
string `$path` u003d ?,
string `$domain` u003d ?,
string `$secure` u003d ?,
string `$httponly` u003d ?
): string

public [\_\_destruct](swoole-http-response.destruct.md)(): void

public [end](swoole-http-response.end.md)(string `$content` u003d ?): void

public [gzip](swoole-http-response.gzip.md)(string `$compress_level` u003d
?): ReturnType

public [header](swoole-http-response.header.md)(string `$key`, string
`$value`, string `$ucwords` u003d ?): void

public [initHeader](swoole-http-response.initheader.md)(): ReturnType

public [rawcookie](swoole-http-response.rawcookie.md)(
string `$name`,
string `$value` u003d ?,
string `$expires` u003d ?,
string `$path` u003d ?,
string `$domain` u003d ?,
string `$secure` u003d ?,
string `$httponly` u003d ?
): ReturnType

public [sendfile](swoole-http-response.sendfile.md)(string
`$filename`, int `$offset` u003d ?): ReturnType

public [status](swoole-http-response.status.md)(string `$http_code`):
ReturnType

public [write](swoole-http-response.write.md)(string `$content`): void

}

## Зміст

- [Swoole\Http\Response::cookie](swoole-http-response.cookie.md) -
Встановлює cookie HTTP-відповіді
- [Swoole\Http\Response::\_\_destruct](swoole-http-response.destruct.md)
— Знищує HTTP-відповідь
- [Swoole\Http\Response::end](swoole-http-response.end.md) -
Відправляє дані HTTP-запиту та завершує відповідь
- [Swoole\Http\Response::gzip](swoole-http-response.gzip.md) -
Включає gzip-стиснення відповіді.
- [Swoole\Http\Response::header](swoole-http-response.header.md) -
Встановлює заголовки HTTP-відповіді
- [Swoole\Http\Response::initHeader](swoole-http-response.initheader.md)
— Ініціювати заголовок HTTP-відповіді
- [Swoole\Http\Response::rawcookie](swoole-http-response.rawcookie.md)
— Встановлює необроблені cookie у HTTP-відповідь
- [Swoole\Http\Response::sendfile](swoole-http-response.sendfile.md)
— Надсилає файл через HTTP-відповідь
- [Swoole\Http\Response::status](swoole-http-response.status.md) -
Встановлює код стану HTTP-відповіді
- [Swoole\Http\Response::write](swoole-http-response.write.md) -
Додає вміст тіла HTTP до HTTP-відповіді
