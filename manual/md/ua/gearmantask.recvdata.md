- [« GearmanTask::jobHandle](gearmantask.jobhandle.md)
- [GearmanTask::returnCode »](gearmantask.returncode.md)

- [PHP Manual](index.md)
- [GearmanTask](class.gearmantask.md)
- Читання даних роботи чи результату завдання у буфер

# GearmanTask::recvData

(PECL gearman u003d 0.5.0)

GearmanTask::recvData — Читання даних роботи або результату завдання в
буфер

### Опис

public **GearmanTask::recvData**(int `$data_len`): array

**Увага**

Ця функція є ЕКСПЕРИМЕНТАЛЬНОЮ. Поведінка цієї функції, її ім'я
і документація, що відноситься до неї, можуть змінитися в наступних версіях
PHP без попередження. Використовуйте цю функцію на свій страх та ризик.

### Список параметрів

`data_len`
Розмір даних читання.

### Значення, що повертаються

Масив, в якому перший елемент є розміром прочитаних даних,
а другий – буферизовані дані. У разі невдачі під час читання, метод
поверне **`false`**.

### Дивіться також

- [GearmanTask::sendData()](gearmantask.senddata.md) - Надсилання
даних завдання (застарілий метод)
