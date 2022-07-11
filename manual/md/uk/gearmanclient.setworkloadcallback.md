- [«
GearmanClient::setWarningCallback](gearmanclient.setwarningcallback.md)
- [GearmanClient::timeout »](gearmanclient.timeout.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Установка callback-функції, що приймає проміжні результати від
обробника завдань

# GearmanClient::setWorkloadCallback

(PECL gearman u003d 0.5.0)

GearmanClient::setWorkloadCallback - Встановлення callback-функції,
приймає проміжні результати від обробника завдань

### Опис

public
**GearmanClient::setWorkloadCallback**([callable](language.types.callable.md)
`$callback`): bool

Задає функцію, яка буде викликатись, коли обробнику завдання
необхідно передати проміжні результати клієнту до завершення всієї
обробки. Обробнику завдань може знадобитися таке пересилання, якщо
потрібно передати клієнту будь-які оновлення, частково надіслати
результати обробки або звільнити пам'ять під час виконання довгих
завдань. Функція має приймати один аргумент типу
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
- [GearmanClient::setWarningCallback()](gearmanclient.setwarningcallback.md) -
Установка callback-функції, що обслуговує попередження обробника
завдань
