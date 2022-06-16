- [«
GearmanClient::setCompleteCallback](gearmanclient.setcompletecallback.md)
- [GearmanClient::setCreatedCallback
»](gearmanclient.setcreatedcallback.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Встановити контекст програми

# GearmanClient::setContext

(PECL gearman \>u003d 0.6.0)

GearmanClient::setContext — Встановити контекст програми

### Опис

public **GearmanClient::setContext**(string `$context`): bool

Встановлює довільний рядок для надання контексту
програми, яка може бути пізніше отримана за допомогою
[GearmanClient::context()](gearmanclient.context.md).

### Список параметрів

`context`
Довільні дані контексту

### Значення, що повертаються

Завжди повертає **`true`**.

### Дивіться також

- [GearmanClient::context()](gearmanclient.context.md) - Повертає
контекст програми
