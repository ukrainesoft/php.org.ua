- [«ZMQContext::getSocket](zmqcontext.getsocket.md)
- [ZMQContext::setOpt »](zmqcontext.setopt.md)

- [PHP Manual](index.md)
- [ZMQContext](class.zmqcontext.md)
- Чи є контекст постійним

# ZMQContext::isPersistent

(PECL zmq \>u003d 0.5.0)

ZMQContext::isPersistent — Чи є контекст незмінним

### Опис

public **ZMQContext::isPersistent**(): bool

Визначає, чи контекст є постійним. Постійний контекст
потрібно для постійного з'єднання, так як кожен сокет виділяється з
контексту.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо контекст постійний та **`false`**, якщо ні.
