- [« ZMQContext::isPersistent](zmqcontext.ispersistent.md)
- [ZMQSocket »](class.zmqsocket.md)

- [PHP Manual](index.md)
- [ZMQContext](class.zmqcontext.md)
- Встановити опцію сокету

# ZMQContext::setOpt

(PECL zmq \>u003d 1.0.4)

ZMQContext::setOpt — Встановити опцію сокету

### Опис

public **ZMQContext::setOpt**(int `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): [ZMQContext](class.zmqcontext.md)

Встановлює опцію контексту ZMQ. Тип `value` залежить від `key`.
Дивіться [Типи Констант ZMQ](class.zmq.md#zmq.constants).

### Список параметрів

`key`
Одна з констант **`ZMQ::CTXOPT_*`**.

`value`
Значення параметру.

### Значення, що повертаються

Повертає поточний об'єкт. У разі виникнення помилки викидає
виняток ZMQContextException.
