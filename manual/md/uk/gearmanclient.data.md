- [« GearmanClient::context](gearmanclient.context.md)
- [GearmanClient::do »](gearmanclient.do.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Повертає дані програми (функція застаріла)

# GearmanClient::data

(PECL gearman \<u003d 0.5.0)

GearmanClient::data — Повертає дані програми (функція застаріла)

### Опис

public **GearmanClient::data**(): string

Повертає дані програми, встановлені раніше за допомогою
[GearmanClient::setData()](gearmanclient.setdata.md).

> **Примітка**:
>
> Цей метод було замінено на
> [GearmanClient::setContext()](gearmanclient.setcontext.md) у версії
> 0.6.0 Gearman модуля.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Деякі строкові дані, встановлені
[GearmanClient::setData()](gearmanclient.setdata.md).

### Дивіться також

- [GearmanClient::setData()](gearmanclient.setdata.md) - Встановити
дані програми (застарілий метод)
