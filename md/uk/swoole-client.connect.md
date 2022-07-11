- [« Swoole\Client::close](swoole-client.close.md)
- [Swoole\Client::\_\_construct »](swoole-client.construct.md)

- [PHP Manual](index.md)
- [Swoole\Client](class.swoole-client.md)
- Підключається до віддаленого порту TCP або UDP

# Swoole\Client::connect

(PECL swoole \>u003d 1.9.0)

Swoole\Client::connect — Підключається до віддаленого порту TCP або UDP

### Опис

public **Swoole\Client::connect**(
string `$host`,
int `$port` u003d ?,
int `$timeout` u003d ?,
int `$flag` u003d ?
): bool

### Список параметрів

`host`
Ім'я хоста віддаленої адреси.

`port`
Номер порту віддаленої адреси.

`timeout`
Час очікування (у секундах) з'єднання/надсилання/отримання, значення по
замовчуванням становить 0,1 с

`flag`
Якщо тип клієнта - UDP, $flag означає, чи ввімкнено конфігурацію
udp_connect. Якщо конфігурацію udp_connect увімкнено, клієнт буде
отримувати дані лише із зазначеного ip:port. Якщо тип клієнта TCP, а
$flag встановлено в 1, він повинен використовувати swoole_client_select
перевірки стану з'єднання перед відправкою/отриманням.

### Значення, що повертаються

Чи встановлено з'єднання.
