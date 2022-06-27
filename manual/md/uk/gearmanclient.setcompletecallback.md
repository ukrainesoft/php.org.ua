- [«
GearmanClient::setClientCallback](gearmanclient.setclientcallback.md)
- [GearmanClient::setContext »](gearmanclient.setcontext.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Встановіть функцію, яка буде викликана після завершення завдання

# GearmanClient::setCompleteCallback

(PECL gearman u003d 0.5.0)

GearmanClient::setCompleteCallback — Встановіть функцію, яка буде
викликана після завершення завдання

### Опис

public
**GearmanClient::setCompleteCallback**([callable](language.types.callable.md)
`$callback`): bool

Використовується для встановлення функції, яка буде викликана, коли
[GearmanTask](class.gearmantask.md) буде виконано, або коли
обробник викличе
[GearmanJob::sendComplete()](gearmanjob.sendcomplete.md), в
залежно від того, що станеться раніше.

Ця callback-функція запускається лише коли
[GearmanTask](class.gearmantask.md) запущено з використанням
[GearmanClient::runTasks()](gearmanclient.runtasks.md). Це не
використовується для індивідуальної роботи.

### Список параметрів

`callback`
Функція, яка має бути викликана.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [GearmanClient::setDataCallback()](gearmanclient.setdatacallback.md) -
Задає callback-функцію обробки переданих даних
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
