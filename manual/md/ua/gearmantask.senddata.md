- [« GearmanTask::returnCode](gearmantask.returncode.md)
- [GearmanTask::sendWorkload »](gearmantask.sendworkload.md)

- [PHP Manual](index.md)
- [GearmanTask](class.gearmantask.md)
- Надсилання даних завдання (застарілий метод)

# GearmanTask::sendData

(PECL gearman \<u003d 0.5.0)

GearmanTask::sendData — Надсилання даних завдання (застарілий метод)

### Опис

public **GearmanTask::sendData**(string `$data`): int

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
