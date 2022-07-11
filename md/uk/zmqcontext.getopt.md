- [«ZMQContext::\_\_construct](zmqcontext.construct.md)
- [ZMQContext::getSocket »](zmqcontext.getsocket.md)

- [PHP Manual](index.md)
- [ZMQContext](class.zmqcontext.md)
- Отримати опцію контексту

# ZMQContext::getOpt

(PECL zmq \>u003d 1.0.4)

ZMQContext::getOpt — Отримати опцію контексту

### Опис

public **ZMQContext::getOpt**(string `$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає значення опції контексту.

### Список параметрів

`key`
Ціле число, що відображає значення опції. Дивіться опис констант
**`ZMQ::CTXOPT_*`**.

### Значення, що повертаються

Повертає string або int залежно від `key`. У разі виникнення
помилка викидає виняток ZMQContextException.
