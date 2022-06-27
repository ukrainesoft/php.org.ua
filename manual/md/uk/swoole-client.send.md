- [« Swoole\Client::resume](swoole-client.resume.md)
- [Swoole\Client::sendfile »](swoole-client.sendfile.md)

- [PHP Manual](index.md)
- [Swoole\Client](class.swoole-client.md)
- Надсилає дані у віддалений TCP-сокет

# Swoole\Client::send

(PECL swoole \>u003d 1.9.0)

Swoole\Client::send — Відправляє дані у віддалений TCP-сокет

### Опис

public **Swoole\Client::send**(string `$data`, string `$flag` u003d ?): int

### Список параметрів

`data`
Дані для надсилання, які можуть бути рядковими або двійковими

`flag`

### Значення, що повертаються

Якщо клієнт успішно надіслав дані, він повертає довжину відправлених
даних. Або він повертає false та встановлює
$swoole_client-\>errCode. Для синхронного клієнта немає обмежень на
надсилання даних. Для асинхронного клієнта обмеження на надсилання
даних – socket_buffer_size.
