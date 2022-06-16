- [« GearmanJob::data](gearmanjob.data.md)
- [GearmanJob::fail »](gearmanjob.fail.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- Надсилання виключення (застарілий метод)

# GearmanJob::exception

(PECL gearman \<u003d 0.5.0)

GearmanJob::exception — Надсилання виключення (застарілий метод)

### Опис

public **GearmanJob::exception**(string `$exception`): bool

Надсилає виняток, що виник під час виконання роботи.

> **Примітка**:
>
> Цей метод було замінено на
> [GearmanJob::sendException()](gearmanjob.sendexception.md) у модулі
> Gearman версія 0.6.0.

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
