- [« Swoole\Client::sendfile](swoole-client.sendfile.md)
- [Swoole\Client::set »](swoole-client.set.md)

- [PHP Manual](index.md)
- [Swoole\Client](class.swoole-client.md)
- Надсилає дані на віддалену UDP-адресу

# Swoole\Client::sendto

(PECL swoole \>u003d 1.9.0)

Swoole\Client::sendto — Надсилає дані на віддалену UDP-адресу

### Опис

public **Swoole\Client::sendto**(string `$ip`, int `$port`, string
`$data`): bool

Тип клієнта swoole має бути SWOOLE_SOCK_UDP або SWOOLE_SOCK_UDP6.

### Список параметрів

`ip`
IP-адреса віддаленого хоста, IPv4 або IPv6.

`port`
Номер порту віддаленого хоста.

`data`
Дані для відправки повинні бути меншими за 64К.

### Значення, що повертаються
