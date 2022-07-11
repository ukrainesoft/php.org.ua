- [« GearmanJob::sendException](gearmanjob.sendexception.md)
- [GearmanJob::sendStatus »](gearmanjob.sendstatus.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- Надсилання статусу невдалої операції

# GearmanJob::sendFail

(PECL gearman \>u003d 0.6.0)

GearmanJob::sendFail — Надсилання статусу невдалої операції

### Опис

public **GearmanJob::sendFail**(): bool

Надсилає статус про невдалу обробку, вказуючи, що завдання завершилося
невдало з відомих причин (на відміну від невдалого завершення,
коли викидається виняток).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [GearmanJob::sendException()](gearmanjob.sendexception.md) -
Надсилання виключення завдання, що виконується
- [GearmanJob::setReturn()](gearmanjob.setreturn.md) - Установка
значення, що повертається
- [GearmanJob::sendStatus()](gearmanjob.sendstatus.md) - Надсилання
статусу
- [GearmanJob::sendWarning()](gearmanjob.sendwarning.md) - Надсилання
попередження
