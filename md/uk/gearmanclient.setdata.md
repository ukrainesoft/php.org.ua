- [«
GearmanClient::setCreatedCallback](gearmanclient.setcreatedcallback.md)
- [GearmanClient::setDataCallback
»](gearmanclient.setdatacallback.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Встановити дані програми (застарілий метод)

# GearmanClient::setData

(PECL gearman \<u003d 0.5.0)

GearmanClient::setData — Встановити дані програми (застарілий метод)

### Опис

public **GearmanClient::setData**(string `$data`): bool

Встановлює деякі довільні дані програми, які
згодом можуть бути вилучені
[GearmanClient::data()](gearmanclient.data.md).

> **Примітка**:
>
> Цей метод було замінено на **GearmanCient::setContext()** у версії
> 0.6.0 Gearman модуля.

### Список параметрів

`data`

### Значення, що повертаються

Завжди повертає **`true`**.

### Дивіться також

- [GearmanClient::data()](gearmanclient.data.md) - Повертає дані
програми (функція застаріла)
