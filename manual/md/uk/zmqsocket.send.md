- [«ZMQSocket::recvMulti](zmqsocket.recvmulti.md)
- [ZMQSocket::sendmulti »](zmqsocket.sendmulti.md)

- [PHP Manual](index.md)
- [ZMQSocket](class.zmqsocket.md)
- Надіслати повідомлення

# ZMQSocket::send

(PECL zmq \>u003d 0.5.0)

ZMQSocket::send — Надіслати повідомлення

### Опис

public **ZMQSocket::send**(string `$message`, int `$mode` u003d 0):
[ZMQSocket](class.zmqsocket.md)

Надсилає повідомлення. Операція може блокуватися, якщо не використовується
прапор **`ZMQ::MODE_NOBLOCK`**.

### Список параметрів

`message`
Повідомлення для надсилання.

`mode`
Прапори для налаштування режиму не блокуючого отримання та роботи з
повідомленнями, що з кількох частин. Дивіться константи
**`ZMQ::MODE_*`**.

### Значення, що повертаються

Повертає поточний об'єкт. У разі виникнення помилки викидає
виняток ZMQSocketException. Якщо використовується режим
**`ZMQ::MODE_NOBLOCK`** та операція заблокована, то буде повернено
**`false`**.
