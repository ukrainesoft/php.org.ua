- [« GearmanClient::setData](gearmanclient.setdata.md)
- [GearmanClient::setExceptionCallback
»](gearmanclient.setexceptioncallback.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Задає callback-функцію для обробки переданих даних

# GearmanClient::setDataCallback

(PECL gearman \>u003d 0.6.0)

GearmanClient::setDataCallback — Задає функцію callback для обробки
переданих даних

### Опис

public
**GearmanClient::setDataCallback**([callable](language.types.callable.md)
`$callback`): bool

Задає callback-функцію, яка оброблятиме дані завдання. Ця
функція повинна приймати один аргумент типу
[GearmanTask](class.gearmantask.md).

### Список параметрів

`callback`
Функція або метод зворотного дзвінка.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

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
