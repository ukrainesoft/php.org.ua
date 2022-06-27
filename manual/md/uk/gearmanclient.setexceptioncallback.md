- [«
GearmanClient::setDataCallback](gearmanclient.setdatacallback.md)
- [GearmanClient::setFailCallback
»](gearmanclient.setfailcallback.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Встановлення функції зворотного дзвінка для перехоплення виключень
обробника завдань

# GearmanClient::setExceptionCallback

(PECL gearman u003d 0.5.0)

GearmanClient::setExceptionCallback — Встановлення функції зворотнього дзвінка
для перехоплення виключень обробника завдань

### Опис

public
**GearmanClient::setExceptionCallback**([callable](language.types.callable.md)
`$callback`): bool

Задає функцію, яка буде викликатись, коли обробник завдання
відправить виняток.

### Список параметрів

`callback`
Функція для перехоплення виключення, викинутого обробником завдань.

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
