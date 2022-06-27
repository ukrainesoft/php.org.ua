- [« GearmanTask::sendData](gearmantask.senddata.md)
- [GearmanTask::taskDenominator »](gearmantask.taskdenominator.md)

- [PHP Manual](index.md)
- [GearmanTask](class.gearmantask.md)
- Надсилання даних завдання

# GearmanTask::sendWorkload

(PECL gearman \>u003d 0.6.0)

GearmanTask::sendWorkload — Надсилання даних завдання

### Опис

public **GearmanTask::sendWorkload**(string `$data`): int

**Увага**

Ця функція є ЕКСПЕРИМЕНТАЛЬНОЮ. Поведінка цієї функції, її ім'я
і документація, що відноситься до неї, можуть змінитися в наступних версіях
PHP без попередження. Використовуйте цю функцію на свій страх та ризик.

### Список параметрів

`data`
Передані обробнику дані.

### Значення, що повертаються

Розмір переданих даних або **`false`** у разі невдачі.

### Дивіться також

- [GearmanTask::recvData()](gearmantask.recvdata.md) - Читання даних
роботи або результату завдання у буфер
