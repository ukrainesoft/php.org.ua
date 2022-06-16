- [« Базові клієнт та обробник Gearman, відправка
задач](gearman.examples-reverse-task.md)
- [GearmanClient::addOptions »](gearmanclient.addoptions.md)

- [PHP Manual](index.md)
- [Gearman](book.gearman.md)
- Клас GearmanClient

# Клас GearmanClient

(PECL gearman u003d 0.5.0)

## Вступ

Є класом для підключення до сервера завдань Gearman і
створення запитів для виконання деякої функції за наданими
даних. Функція, що виконується, повинна бути зареєстрована обробником
(worker) Gearman та передані дані є непрозорими для
сервера завдань.

## Огляд класів

class **GearmanClient** {

/\* Методи \*/

public [addOptions](gearmanclient.addoptions.md)(int `$options`): bool

public [addServer](gearmanclient.addserver.md)(string `$host` u003d
127.0.0.1, int `$port` u003d 4730): bool

public [addServers](gearmanclient.addservers.md)(string `$servers` u003d
127.0.0.1:4730): bool

public [addTask](gearmanclient.addtask.md)(
string `$function_name`,
string `$workload`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
string `$unique` u003d ?
): [GearmanTask](class.gearmantask.md)

public [addTaskBackground](gearmanclient.addtaskbackground.md)(
string `$function_name`,
string `$workload`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
string `$unique` u003d ?
): [GearmanTask](class.gearmantask.md)

public [addTaskHigh](gearmanclient.addtaskhigh.md)(
string `$function_name`,
string `$workload`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
string `$unique` u003d ?
): [GearmanTask](class.gearmantask.md)

public
[addTaskHighBackground](gearmanclient.addtaskhighbackground.md)(
string `$function_name`,
string `$workload`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
string `$unique` u003d ?
): [GearmanTask](class.gearmantask.md)

public [addTaskLow](gearmanclient.addtasklow.md)(
string `$function_name`,
string `$workload`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
string `$unique` u003d ?
): [GearmanTask](class.gearmantask.md)

public
[addTaskLowBackground](gearmanclient.addtasklowbackground.md)(
string `$function_name`,
string `$workload`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
string `$unique` u003d ?
): [GearmanTask](class.gearmantask.md)

public [addTaskStatus](gearmanclient.addtaskstatus.md)(string
`$job_handle`, string `&$context` u003d ?):
[GearmanTask](class.gearmantask.md)

public [clearCallbacks](gearmanclient.clearcallbacks.md)(): bool

public [clone](gearmanclient.clone.md)():
[GearmanClient](class.gearmanclient.md)

public [\_\_construct](gearmanclient.construct.md)()

public [context](gearmanclient.context.md)(): string

public [data](gearmanclient.data.md)(): string

public [do](gearmanclient.do.md)(string `$function_name`, string
`$workload`, string `$unique` u003d ?): string

public [doBackground](gearmanclient.dobackground.md)(string
`$function_name`, string `$workload`, string `$unique` u003d ?): string

public [doHigh](gearmanclient.dohigh.md)(string `$function_name`,
string `$workload`, string `$unique` u003d ?): string

public [doHighBackground](gearmanclient.dohighbackground.md)(string
`$function_name`, string `$workload`, string `$unique` u003d ?): string

public [doJobHandle](gearmanclient.dojobhandle.md)(): string

public [doLow](gearmanclient.dolow.md)(string `$function_name`, string
`$workload`, string `$unique` u003d ?): string

public [doLowBackground](gearmanclient.dolowbackground.md)(string
`$function_name`, string `$workload`, string `$unique` u003d ?): string

public [doNormal](gearmanclient.donormal.md)(string `$function_name`,
string `$workload`, string `$unique` u003d ?): string

public [doStatus](gearmanclient.dostatus.md)(): array

public [echo](gearmanclient.echo.md)(string `$workload`): bool

public [error](gearmanclient.error.md)(): string

public [getErrno](gearmanclient.geterrno.md)(): int

public [jobStatus](gearmanclient.jobstatus.md)(string `$job_handle`):
array

public [ping](gearmanclient.ping.md)(string `$workload`): bool

public [removeOptions](gearmanclient.removeoptions.md)(int
`$options`): bool

public [returnCode](gearmanclient.returncode.md)(): int

public [runTasks](gearmanclient.runtasks.md)(): bool

public
[setClientCallback](gearmanclient.setclientcallback.md)([callable](language.types.callable.md)
`$callback`): void

public
[setCompleteCallback](gearmanclient.setcompletecallback.md)([callable](language.types.callable.md)
`$callback`): bool

public [setContext](gearmanclient.setcontext.md)(string `$context`):
bool

public
[setCreatedCallback](gearmanclient.setcreatedcallback.md)(string
`$callback`): bool

public [setData](gearmanclient.setdata.md)(string `$data`): bool

public
[setDataCallback](gearmanclient.setdatacallback.md)([callable](language.types.callable.md)
`$callback`): bool

public
[setExceptionCallback](gearmanclient.setexceptioncallback.md)([callable](language.types.callable.md)
`$callback`): bool

public
[setFailCallback](gearmanclient.setfailcallback.md)([callable](language.types.callable.md)
`$callback`): bool

public [setOptions](gearmanclient.setoptions.md)(int `$options`): bool

public
[setStatusCallback](gearmanclient.setstatuscallback.md)([callable](language.types.callable.md)
`$callback`): bool

public [setTimeout](gearmanclient.settimeout.md)(int `$timeout`): bool

public
[setWarningCallback](gearmanclient.setwarningcallback.md)([callable](language.types.callable.md)
`$callback`): bool

public
[setWorkloadCallback](gearmanclient.setworkloadcallback.md)([callable](language.types.callable.md)
`$callback`): bool

public [timeout](gearmanclient.timeout.md)(): int

public [wait](gearmanclient.wait.md)(): bool

}

## Зміст

- [GearmanClient::addOptions](gearmanclient.addoptions.md) -
Додати клієнтські опції
- [GearmanClient::addServer](gearmanclient.addserver.md) — Додати
сервер завдань для клієнта
- [GearmanClient::addServers](gearmanclient.addservers.md) -
Додати список серверів завдань для клієнта
- [GearmanClient::addTask](gearmanclient.addtask.md) — Додати
завдання, яке буде виконано в паралельному режимі
- [GearmanClient::addTaskBackground](gearmanclient.addtaskbackground.md)
— Додати фонове завдання для роботи в паралельному режимі
- [GearmanClient::addTaskHigh](gearmanclient.addtaskhigh.md)
Додати високопріоритетне завдання для роботи в паралельному режимі
- [GearmanClient::addTaskHighBackground](gearmanclient.addtaskhighbackground.md)
— Додати високопріоритетне фонове завдання для роботи в
паралельному режимі
- [GearmanClient::addTaskLow](gearmanclient.addtasklow.md) -
Додати низькопріоритетне завдання для роботи в паралельному режимі
- [GearmanClient::addTaskLowBackground](gearmanclient.addtasklowbackground.md)
— Додати низькопріоритетне фонове завдання для роботи в
паралельному режимі
- [GearmanClient::addTaskStatus](gearmanclient.addtaskstatus.md) -
Додати завдання для набуття статусу
- [GearmanClient::clearCallbacks](gearmanclient.clearcallbacks.md) -
Очистити всі функції зворотного виклику цієї задачі
- [GearmanClient::clone](gearmanclient.clone.md) — Створити копію
об'єкта GearmanClient
- [GearmanClient::\_\_construct](gearmanclient.construct.md) -
Створити екземпляр GearmanClient
- [GearmanClient::context](gearmanclient.context.md) - Повертає
контекст програми
- [GearmanClient::data](gearmanclient.data.md) — Повертає дані
програми (функція застаріла)
- [GearmanClient::do](gearmanclient.do.md) — Виконує одне завдання
повертає результат [Застарілий метод]
- [GearmanClient::doBackground](gearmanclient.dobackground.md) -
Запускає виконання завдання у фоновому режимі
- [GearmanClient::doHigh](gearmanclient.dohigh.md) - Запускає на
виконання завдання з високим пріоритетом
- [GearmanClient::doHighBackground](gearmanclient.dohighbackground.md)
— Запускає на виконання із високим пріоритетом завдання у фоновому
режимі
- [GearmanClient::doJobHandle](gearmanclient.dojobhandle.md)
Отримати дескриптор завдання, що виконується
- [GearmanClient::doLow](gearmanclient.dolow.md) - Запускає на
виконання завдання з низьким пріоритетом
- [GearmanClient::doLowBackground](gearmanclient.dolowbackground.md)
— Запускає на виконання з низьким пріоритетом завдання у фоновому режимі
режимі
- [GearmanClient::doNormal](gearmanclient.donormal.md) — Виконує
одиночне завдання та повертає результат
- [GearmanClient::doStatus](gearmanclient.dostatus.md) — Отримання
статусу завдання, що виконується
- [GearmanClient::echo](gearmanclient.echo.md) — Надсилає дані
всім серверам завдань, щоб перевірити відгук \[Застарілий метод\]
- [GearmanClient::error](gearmanclient.error.md) — Повернути рядок
помилки для останньої виявленої помилки
- [GearmanClient::getErrno](gearmanclient.geterrno.md) — Отримати
значення errno
- [GearmanClient::jobStatus](gearmanclient.jobstatus.md) — Отримання
статусу виконання фонового завдання
- [GearmanClient::ping](gearmanclient.ping.md) — Надсилає дані
на всі сервери, щоб перевірити, які з них виведуть ці дані
- [GearmanClient::removeOptions](gearmanclient.removeoptions.md) -
Видалити опції клієнта
- [GearmanClient::returnCode](gearmanclient.returncode.md)
Отримати останній код повернення Gearman
- [GearmanClient::runTasks](gearmanclient.runtasks.md) — Запустити
список завдань у паралельному режимі
- [GearmanClient::setClientCallback](gearmanclient.setclientcallback.md)
— Встановити функцію зворотного дзвінка, коли є пакет даних
завдання (застарілий метод)
- [GearmanClient::setCompleteCallback](gearmanclient.setcompletecallback.md)
— Встановіть функцію, яка буде викликана після завершення завдання
- [GearmanClient::setContext](gearmanclient.setcontext.md) -
Встановити контекст програми
- [GearmanClient::setCreatedCallback](gearmanclient.setcreatedcallback.md)
— Встановити функцію зворотного виклику, коли завдання ставиться у
черга
- [GearmanClient::setData](gearmanclient.setdata.md) — Встановити
дані програми (застарілий метод)
- [GearmanClient::setDataCallback](gearmanclient.setdatacallback.md)
— Задає функцію callback для обробки переданих даних
- [GearmanClient::setExceptionCallback](gearmanclient.setexceptioncallback.md)
— Встановлення функції зворотного дзвінка для перехоплення виключень
обробника завдань
- [GearmanClient::setFailCallback](gearmanclient.setfailcallback.md)
— Установка callback-функції для обробки ситуації, коли завдання
не вдалося виконати
- [GearmanClient::setOptions](gearmanclient.setoptions.md) -
Встановлення налаштувань клієнта
- [GearmanClient::setStatusCallback](gearmanclient.setstatuscallback.md)
- Завдання callback-функції, що збирає інформацію про стан
обробника завдань
- [GearmanClient::setTimeout](gearmanclient.settimeout.md) -
Встановлення часу очікування для введення/виводу
- [GearmanClient::setWarningCallback](gearmanclient.setwarningcallback.md)
— Установка callback-функції, яка обслуговує попередження
обробника завдань
- [GearmanClient::setWorkloadCallback](gearmanclient.setworkloadcallback.md)
- Установка callback-функції, що приймає проміжні результати
від обробника завдань
- [GearmanClient::timeout](gearmanclient.timeout.md) — Отримання
значення часу очікування операцій введення/виводу
- [GearmanClient::wait](gearmanclient.wait.md) - Очікує активності
введення-виводу для всіх підключень на клієнті
