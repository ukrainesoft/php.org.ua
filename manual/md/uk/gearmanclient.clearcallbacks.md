- [« GearmanClient::addTaskStatus](gearmanclient.addtaskstatus.md)
- [GearmanClient::clone »](gearmanclient.clone.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Очистити всі функції зворотного виклику цієї задачі

# GearmanClient::clearCallbacks

(PECL gearman u003d 0.5.0)

GearmanClient::clearCallbacks — Очистити всі функції зворотного дзвінка
даної задачі

### Опис

public **GearmanClient::clearCallbacks**(): bool

Очищає всі callback функції завдання, які були раніше встановлені.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Завжди повертає **`true`**.

### Дивіться також

- [GearmanClient::setDataCallback()](gearmanclient.setdatacallback.md) -
Задає callback-функцію обробки переданих даних
- [GearmanClient::setCompleteCallback()](gearmanclient.setcompletecallback.md) -
Встановіть функцію, яка буде викликана після завершення завдання
- [GearmanClient::setCreatedCallback()](gearmanclient.setcreatedcallback.md) -
Встановити функцію зворотного дзвінка, коли завдання ставиться в чергу
- [GearmanClient::setExceptionCallback()](gearmanclient.setexceptioncallback.md) -
Встановлення функції зворотного дзвінка для перехоплення винятків
обробника завдань
- [GearmanClient::setFailCallback()](gearmanclient.setfailcallback.md) -
Установка callback-функції обробки ситуації, коли завдання не
вдалося виконати
- [GearmanClient::setStatusCallback()](gearmanclient.setstatuscallback.md) -
Завдання callback-функції, що збирає інформацію про стан
обробника завдань
- [GearmanClient::setWarningCallback()](gearmanclient.setwarningcallback.md) -
Установка callback-функції, що обслуговує попередження обробника
завдань
- [GearmanClient::setWorkloadCallback()](gearmanclient.setworkloadcallback.md) -
Установка callback-функції, що приймає проміжні результати від
обробника завдань
