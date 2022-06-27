- [« GearmanClient::wait](gearmanclient.wait.md)
- [GearmanJob::complete »](gearmanjob.complete.md)

- [PHP Manual](index.md)
- [Gearman](book.gearman.md)
- Клас GearmanJob

# Клас GearmanJob

(PECL gearman u003d 0.5.0)

## Вступ

## Огляд класів

class **GearmanJob** {

/\* Методи \*/

public [complete](gearmanjob.complete.md)(string `$result`): bool

public [\_\_construct](gearmanjob.construct.md)()

public [data](gearmanjob.data.md)(string `$data`): bool

public [exception](gearmanjob.exception.md)(string `$exception`): bool

public [fail](gearmanjob.fail.md)(): bool

public [functionName](gearmanjob.functionname.md)(): string

public [handle](gearmanjob.handle.md)(): string

public [returnCode](gearmanjob.returncode.md)(): int

public [sendComplete](gearmanjob.sendcomplete.md)(string `$result`):
bool

public [sendData](gearmanjob.senddata.md)(string `$data`): bool

public [sendException](gearmanjob.sendexception.md)(string
`$exception`): bool

public [sendFail](gearmanjob.sendfail.md)(): bool

public [sendStatus](gearmanjob.sendstatus.md)(int `$numerator`, int
`$denominator`): bool

public [sendWarning](gearmanjob.sendwarning.md)(string `$warning`):
bool

public [setReturn](gearmanjob.setreturn.md)(int `$gearman_return_t`):
bool

public [status](gearmanjob.status.md)(int `$numerator`, int
`$denominator`): bool

public [unique](gearmanjob.unique.md)(): string

public [warning](gearmanjob.warning.md)(string `$warning`): bool

public [workload](gearmanjob.workload.md)(): string

public [workloadSize](gearmanjob.workloadsize.md)(): int

}

## Зміст

- [GearmanJob::complete](gearmanjob.complete.md) — Надсилання
результату та статусу завершення (застарілий метод)
- [GearmanJob::\_\_construct](gearmanjob.construct.md) — Створення
об'єкту GearmanJob
- [GearmanJob::data](gearmanjob.data.md) — Надсилання даних
(застарілий метод)
- [GearmanJob::exception](gearmanjob.exception.md) — Надсилання
винятки (застарілий метод)
- [GearmanJob::fail](gearmanjob.fail.md) — Надіслати статус
невдалої операції (застарілий метод)
- [GearmanJob::functionName](gearmanjob.functionname.md) — Отримання
імені функції
- [GearmanJob::handle](gearmanjob.handle.md) — Отримання дескриптора
об'єкта завдання
- [GearmanJob::returnCode](gearmanjob.returncode.md) — Отримання
останнього коду повернення
- [GearmanJob::sendComplete](gearmanjob.sendcomplete.md) — Надсилання
результату та статусу завершення
- [GearmanJob::sendData](gearmanjob.senddata.md) — Надсилання даних
виконується завдання
- [GearmanJob::sendException](gearmanjob.sendexception.md) -
Надсилання виключення завдання, що виконується
- [GearmanJob::sendFail](gearmanjob.sendfail.md) — Надіслати статус
невдалої операції
- [GearmanJob::sendStatus](gearmanjob.sendstatus.md) — Надсилання
статусу
- [GearmanJob::sendWarning](gearmanjob.sendwarning.md) — Надсилання
попередження
- [GearmanJob::setReturn](gearmanjob.setreturn.md) — Установка
значення, що повертається
- [GearmanJob::status](gearmanjob.status.md) — Надсилання статусу
завдання (застарілий метод)
- [GearmanJob::unique](gearmanjob.unique.md) — Отримання унікального
ідентифікатора
- [GearmanJob::warning](gearmanjob.warning.md) — Надсилання
попередження (застарілий метод)
- [GearmanJob::workload](gearmanjob.workload.md) — Отримання даних
для обробки
- [GearmanJob::workloadSize](gearmanjob.workloadsize.md) — Отримання
розміру оброблюваних даних
