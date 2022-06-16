- [« GearmanJob::workloadSize](gearmanjob.workloadsize.md)
- [GearmanTask::\_\_construct »](gearmantask.construct.md)

- [PHP Manual](index.md)
- [Gearman](book.gearman.md)
- Клас GearmanTask

# Клас GearmanTask

(PECL gearman u003d 0.5.0)

## Вступ

## Огляд класів

class **GearmanTask** {

/\* Методи \*/

public [\_\_construct](gearmantask.construct.md)()

public [create](gearmantask.create.md)():
[GearmanTask](class.gearmantask.md)\|false

public [data](gearmantask.data.md)(): string

public [dataSize](gearmantask.datasize.md)(): int

public [function](gearmantask.function.md)(): string

public [functionName](gearmantask.functionname.md)(): string

public [isKnown](gearmantask.isknown.md)(): bool

public [isRunning](gearmantask.isrunning.md)(): bool

public [jobHandle](gearmantask.jobhandle.md)(): string

public [recvData](gearmantask.recvdata.md)(int `$data_len`): array

public [returnCode](gearmantask.returncode.md)(): int

public [sendData](gearmantask.senddata.md)(string `$data`): int

public [sendWorkload](gearmantask.sendworkload.md)(string `$data`):
int

public [taskDenominator](gearmantask.taskdenominator.md)(): int

public [taskNumerator](gearmantask.tasknumerator.md)(): int

public [unique](gearmantask.unique.md)(): string

public [uuid](gearmantask.uuid.md)(): string

}

## Зміст

- [GearmanTask::\_\_construct](gearmantask.construct.md) - Створює
об'єкт GearmanTask
- [GearmanTask::create](gearmantask.create.md) — Створює завдання
(застарілий метод)
- [GearmanTask::data](gearmantask.data.md) — Отримати дані,
повернені для завдання
- [GearmanTask::dataSize](gearmantask.datasize.md) — Отримати розмір
даних, що повертаються
- [GearmanTask::function](gearmantask.function.md) — Отримати ім'я
пов'язаної функції (застарілий метод)
- [GearmanTask::functionName](gearmantask.functionname.md) -
Отримати ім'я функції
- [GearmanTask::isKnown](gearmantask.isknown.md) — Визначення,
чи відомо серверу про це завдання
- [GearmanTask::isRunning](gearmantask.isrunning.md) — Перевіряє,
чи виконується завдання на даний момент
- [GearmanTask::jobHandle](gearmantask.jobhandle.md) — Отримати
дескриптор завдання
- [GearmanTask::recvData](gearmantask.recvdata.md) — Читання даних
роботи або результату завдання у буфер
- [GearmanTask::returnCode](gearmantask.returncode.md) — Отримати
останній код повернення
- [GearmanTask::sendData](gearmantask.senddata.md) — Надсилання даних
завдання (застарілий метод)
- [GearmanTask::sendWorkload](gearmantask.sendworkload.md) -
Надсилання даних завдання
- [GearmanTask::taskDenominator](gearmantask.taskdenominator.md)
Отримати знаменник відсотка виконаної роботи
- [GearmanTask::taskNumerator](gearmantask.tasknumerator.md)
Отримання чисельника відсотка виконаної роботи
- [GearmanTask::unique](gearmantask.unique.md) — Отримання
унікального ідентифікатора задачі
- [GearmanTask::uuid](gearmantask.uuid.md) — Отримання унікального
ідентифікатора задачі (застарілий метод)
