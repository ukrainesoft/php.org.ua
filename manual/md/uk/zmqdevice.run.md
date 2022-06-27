- [« ZMQDevice::getTimerTimeout](zmqdevice.gettimertimeout.md)
- [ZMQDevice::setIdleCallback »](zmqdevice.setidlecallback.md)

- [PHP Manual](index.md)
- [ZMQDevice](class.zmqdevice.md)
- Запуск нового пристрою

# ZMQDevice::run

(No version information available, might only be in Git)

ZMQDevice::run — Запуск нового пристрою

### Опис

public **ZMQDevice::run**(): void

Запускає пристрій.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Запуск цього методу блокує виконання, поки пристрій запущено. Не
рекомендується використовувати у інтерактивних скриптах. В разі
Виникнення помилки викидає виняток ZMQDeviceException.
