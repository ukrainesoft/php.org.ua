- [« GearmanJob::sendStatus](gearmanjob.sendstatus.md)
- [GearmanJob::setReturn »](gearmanjob.setreturn.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- Надсилання попередження

# GearmanJob::sendWarning

(PECL gearman \>u003d 0.6.0)

GearmanJob::sendWarning — Надсилання попередження

### Опис

public **GearmanJob::sendWarning**(string `$warning`): bool

Під час виконання роботи надсилає попередження.

### Список параметрів

`warning`
Повідомлення попередження.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [GearmanJob::sendComplete()](gearmanjob.sendcomplete.md) -
Надсилання результату та статусу завершення
- [GearmanJob::sendException()](gearmanjob.sendexception.md) -
Надсилання виключення завдання, що виконується
- [GearmanJob::sendFail()](gearmanjob.sendfail.md) - Надсилання
статусу невдалої операції
