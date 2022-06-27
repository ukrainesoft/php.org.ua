- [« GearmanClient::setTimeout](gearmanclient.settimeout.md)
- [GearmanClient::setWorkloadCallback
»](gearmanclient.setworkloadcallback.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Установка callback-функції, що обслуговує попередження обробника
завдань

# GearmanClient::setWarningCallback

(PECL gearman u003d 0.5.0)

GearmanClient::setWarningCallback - Установка callback-функції,
обслуговуючою попередження обробника завдань

### Опис

public
**GearmanClient::setWarningCallback**([callable](language.types.callable.md)
`$callback`): bool

Задає функцію, яка буде викликатись, коли обробник завдань
надішле попередження. Функція має приймати один аргумент типу
[GearmanTask](class.gearmantask.md).

### Список параметрів

`callback`
Функція зворотного дзвінка

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

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
- [GearmanClient::setWorkloadCallback()](gearmanclient.setworkloadcallback.md) -
Установка callback-функції, що приймає проміжні результати від
обробника завдань
