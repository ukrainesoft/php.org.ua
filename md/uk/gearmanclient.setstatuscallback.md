- [« GearmanClient::setOptions](gearmanclient.setoptions.md)
- [GearmanClient::setTimeout »](gearmanclient.settimeout.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Завдання callback-функції, що збирає інформацію про стан
обробника завдань

# GearmanClient::setStatusCallback

(PECL gearman u003d 0.5.0)

GearmanClient::setStatusCallback — Завдання callback-функції, що збирає
інформацію про стан обробника завдань

### Опис

public
**GearmanClient::setStatusCallback**([callable](language.types.callable.md)
`$callback`): bool

Задає callback-функцію, яка прийматиме та оброблятиме
інформацію про стан завдання, що передається обробником завдань.
Функція має приймати один аргумент типу
[GearmanTask](class.gearmantask.md).

### Список параметрів

`callback`
Функція виклику

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
- [GearmanClient::setWarningCallback()](gearmanclient.setwarningcallback.md) -
Установка callback-функції, що обслуговує попередження обробника
завдань
- [GearmanClient::setWorkloadCallback()](gearmanclient.setworkloadcallback.md) -
Установка callback-функції, що приймає проміжні результати від
обробника завдань
