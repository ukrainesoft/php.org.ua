- [« GearmanJob::exception](gearmanjob.exception.md)
- [GearmanJob::functionName »](gearmanjob.functionname.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- Надсилання статусу невдалої операції (застарілий метод)

# GearmanJob::fail

(PECL gearman \<u003d 0.5.0)

GearmanJob::fail — Надсилання статусу невдалої операції (застарілий)
метод)

### Опис

public **GearmanJob::fail**(): bool

Надсилає статус про невдалу обробку, вказуючи, що завдання завершилося
невдало з відомих причин (на відміну від невдалого завершення,
коли викидається виняток).

> **Примітка**:
>
> Цей метод було замінено на
> [GearmanJob::sendFail()](gearmanjob.sendfail.md) у версії 0.6.0
> Gearman модуля.

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
