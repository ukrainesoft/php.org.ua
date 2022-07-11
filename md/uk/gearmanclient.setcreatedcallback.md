- [« GearmanClient::setContext](gearmanclient.setcontext.md)
- [GearmanClient::setData »](gearmanclient.setdata.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Встановити функцію зворотного виклику, коли завдання ставиться у чергу

# GearmanClient::setCreatedCallback

(PECL gearman u003d 0.5.0)

GearmanClient::setCreatedCallback — Встановити функцію зворотного дзвінка,
коли завдання ставиться в чергу

### Опис

public **GearmanClient::setCreatedCallback**(string `$callback`): bool

Встановлює функцію, яка буде викликана, коли завдання отримано та
поставлена у чергу сервером задач Gearman. Функція зворотного дзвінка
повинна приймати єдиний параметр – об'єкт
[GearmanTask](class.gearmantask.md).

### Список параметрів

`callback`
Функція, яка має бути викликана.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [GearmanClient::setDataCallback()](gearmanclient.setdatacallback.md) -
Задає callback-функцію обробки переданих даних
- [GearmanClient::setCompleteCallback()](gearmanclient.setcompletecallback.md) -
Встановіть функцію, яка буде викликана після завершення завдання
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
