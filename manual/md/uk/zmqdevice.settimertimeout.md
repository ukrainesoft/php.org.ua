- [« ZMQDevice::setTimerCallback](zmqdevice.settimercallback.md)
- [ZooKeeper »](book.zookeeper.md)

- [PHP Manual](index.md)
- [ZMQDevice](class.zmqdevice.md)
- Встановити час очікування таймера

# ZMQDevice::setTimerTimeout

(No version information available, might only be in Git)

ZMQDevice::setTimerTimeout — Встановити час очікування таймера

### Опис

public **ZMQDevice::setTimerTimeout**(int `$timeout`):
[ZMQDevice](class.zmqdevice.md)

Встановлює час очікування на таймер. Якщо задана callback-функція
таймера, то вона буде викликатися із заданою частотою. Додано у версії
модуля 1.1.0.

### Список параметрів

`timeout`
Значення часу очікування.

### Значення, що повертаються

Повертає поточний об'єкт.
