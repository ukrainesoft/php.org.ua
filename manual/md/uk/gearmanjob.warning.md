- [« GearmanJob::unique](gearmanjob.unique.md)
- [GearmanJob::workload »](gearmanjob.workload.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- Надсилання попередження (застарілий метод)

# GearmanJob::warning

(PECL gearman \<u003d 0.5.0)

GearmanJob::warning — Надсилання попередження (застарілий метод)

### Опис

public **GearmanJob::warning**(string `$warning`): bool

Під час виконання завдання надсилає попередження.

> **Примітка**:
>
> Цей метод було замінено на
> [GearmanJob::sendWarning()](gearmanjob.sendwarning.md) у версії
> 0.6.0 Gearman модуля.

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
