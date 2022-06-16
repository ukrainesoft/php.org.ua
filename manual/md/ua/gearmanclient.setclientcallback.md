- [« GearmanClient::runTasks](gearmanclient.runtasks.md)
- [GearmanClient::setCompleteCallback
»](gearmanclient.setcompletecallback.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Встановити функцію зворотного дзвінка, коли є пакет даних для
завдання (застарілий метод)

# GearmanClient::setClientCallback

(PECL gearman \<u003d 0.5.0)

GearmanClient::setClientCallback — Встановити функцію зворотного дзвінка,
коли є пакет даних для завдання (застарілий метод)

### Опис

public
**GearmanClient::setClientCallback**([callable](language.types.callable.md)
`$callback`): void

Встановлює функцію зворотного дзвінка для прийняття пакетів даних
завдання. Функція зворотного виклику має приймати єдиний
параметр - об'єкт [GearmanTask](class.gearmantask.md).

> **Примітка**:
>
> Цей метод було замінено на
> [GearmanClient::setDataCallback()](gearmanclient.setdatacallback.md)
> у версії 0.6.0 Gearman.

### Список параметрів

`callback`
Функція або метод, які мають бути викликані.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [GearmanClient::setCompleteCallback()](gearmanclient.setcompletecallback.md) -
Встановіть функцію, яка буде викликана після завершення завдання
- [GearmanClient::setCreatedCallback()](gearmanclient.setcreatedcallback.md) -
Встановити функцію зворотного дзвінка, коли завдання ставиться в чергу
- [GearmanClient::setDataCallback()](gearmanclient.setdatacallback.md) -
Задає callback-функцію обробки переданих даних
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
