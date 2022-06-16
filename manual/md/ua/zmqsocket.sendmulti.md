- [«ZMQSocket::send](zmqsocket.send.md)
- [ZMQSocket::setSockOpt »](zmqsocket.setsockopt.md)

- [PHP Manual](index.md)
- [ZMQSocket](class.zmqsocket.md)
- Надіслати повідомлення, що складається з кількох частин

# ZMQSocket::sendmulti

(PECL zmq \>u003d 0.8.0)

ZMQSocket::sendmulti — Надіслати повідомлення, яке складається з кількох частин

### Опис

public **ZMQSocket::sendmulti**(array `$message`, int `$mode` u003d 0):
[ZMQSocket](class.zmqsocket.md)

Надіслати повідомлення, що складається з кількох частин Операція може
блокуватись, якщо не використовується прапор **`ZMQ::MODE_NOBLOCK`**.

### Список параметрів

`message`
Повідомлення у вигляді масиву рядків

`mode`
Прапори для налаштування режиму не блокуючого отримання та роботи з
повідомленнями, що з кількох частин. Дивіться константи
**`ZMQ::MODE_*`**.

### Значення, що повертаються

Повертає поточний об'єкт. У разі виникнення помилки викидає
виняток ZMQSocketException. Якщо використовується режим
**`ZMQ::MODE_NOBLOCK`** та операція заблокована, то буде повернено
**`false`**.
