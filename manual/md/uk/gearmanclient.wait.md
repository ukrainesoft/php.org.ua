- [« GearmanClient::timeout](gearmanclient.timeout.md)
- [GearmanJob »](class.gearmanjob.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Очікує активності введення-виводу для всіх підключень на клієнта

# GearmanClient::wait

(PECL gearman \>u003d 0.6.0)

GearmanClient::wait — Очікує активності введення-виводу для всіх
підключень на клієнта

### Опис

public **GearmanClient::wait**(): bool

Чекає на активність від будь-якого з підключених серверів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`** у разі успішного виконання, **`false`** у разі
виникнення помилки.

### Дивіться також

- [GearmanWorker::wait()](gearmanworker.wait.md) - Очікування запиту
з одного із сервера завдань
