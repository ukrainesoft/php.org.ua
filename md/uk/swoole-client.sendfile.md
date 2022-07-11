- [« Swoole\Client::send](swoole-client.send.md)
- [Swoole\Client::sendto »](swoole-client.sendto.md)

- [PHP Manual](index.md)
- [Swoole\Client](class.swoole-client.md)
- Надсилає файл у віддалений TCP-сокет

# Swoole\Client::sendfile

(PECL swoole \>u003d 1.9.0)

Swoole\Client::sendfile — Відправляє файл у віддалений TCP-сокет

### Опис

public **Swoole\Client::sendfile**(string `$filename`, int `$offset` u003d
?): bool

Є оболонкою системного виклику sendfile в Linux.

### Список параметрів

`filename`
Шлях до файлу для надсилання.

`offset`
Зміщення файлу для надсилання

### Значення, що повертаються
