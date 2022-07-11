- [« GearmanJob::setReturn](gearmanjob.setreturn.md)
- [GearmanJob::unique »](gearmanjob.unique.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- Надсилання статусу завдання (застарілий метод)

# GearmanJob::status

(PECL gearman \<u003d 0.5.0)

GearmanJob::status — Надсилання статусу завдання (застарілий метод)

### Опис

public **GearmanJob::status**(int `$numerator`, int `$denominator`):
bool

Посилає на сервер завдань і всім клієнтам, що слухають, статус поточної
роботи. За допомогою цього методу можна дізнатися, який відсоток завдання
виконаний.

> **Примітка**:
>
> Цей метод було замінено на
> [GearmanJob::sendStatus()](gearmanjob.sendstatus.md) у версії 0.6.0
> Gearman модуля.

### Список параметрів

`numerator`
Частка виконання роботи.

`denominator`
Кількість усієї роботи.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [GearmanClient::jobStatus()](gearmanclient.jobstatus.md) -
Набуття статусу виконання фонового завдання
- [GearmanTask::taskDenominator()](gearmantask.taskdenominator.md) -
Отримати знаменник відсотка виконаної роботи
- [GearmanTask::taskNumerator()](gearmantask.tasknumerator.md) -
Отримання чисельника відсотка виконаної роботи
