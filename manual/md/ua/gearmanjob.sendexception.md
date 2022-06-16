- [« GearmanJob::sendData](gearmanjob.senddata.md)
- [GearmanJob::sendFail »](gearmanjob.sendfail.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- Відправлення виключення завдання, що виконується

# GearmanJob::sendException

(PECL gearman \>u003d 0.6.0)

GearmanJob::sendException — Надсилання виключення завдання, що виконується

### Опис

public **GearmanJob::sendException**(string `$exception`): bool

Надсилає виняток, що виник під час виконання роботи.

### Список параметрів

`exception`
Опис винятку.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [GearmanJob::setReturn()](gearmanjob.setreturn.md) - Установка
значення, що повертається
- [GearmanJob::sendStatus()](gearmanjob.sendstatus.md) - Надсилання
статусу
- [GearmanJob::sendWarning()](gearmanjob.sendwarning.md) - Надсилання
попередження
