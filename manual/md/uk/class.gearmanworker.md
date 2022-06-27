- [« GearmanTask::uuid](gearmantask.uuid.md)
- [GearmanWorker::addFunction »](gearmanworker.addfunction.md)

- [PHP Manual](index.md)
- [Gearman](book.gearman.md)
- Клас GearmanWorker

# Клас GearmanWorker

(PECL gearman u003d 0.5.0)

## Вступ

## Огляд класів

class **GearmanWorker** {

/\* Методи \*/

public [addFunction](gearmanworker.addfunction.md)(
string `$function_name`,
[callable](language.types.callable.md) `$function`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
int `$timeout` u003d ?
): bool

public [addOptions](gearmanworker.addoptions.md)(int `$option`): bool

public [addServer](gearmanworker.addserver.md)(string `$host` u003d
127.0.0.1, int `$port` u003d 4730): bool

public [addServers](gearmanworker.addservers.md)(string `$servers` u003d
127.0.0.1:4730): bool

public [clone](gearmanworker.clone.md)(): void

public [\_\_construct](gearmanworker.construct.md)()

public [echo](gearmanworker.echo.md)(string `$workload`): bool

public [error](gearmanworker.error.md)(): string

public [getErrno](gearmanworker.geterrno.md)(): int

public [options](gearmanworker.options.md)(): int

public [register](gearmanworker.register.md)(string `$function_name`,
int `$timeout` u003d ?): bool

public [removeOptions](gearmanworker.removeoptions.md)(int `$option`):
bool

public [returnCode](gearmanworker.returncode.md)(): int

public [setId](gearmanworker.setid.md)(string `$id`): bool

public [setOptions](gearmanworker.setoptions.md)(int `$option`): bool

public [setTimeout](gearmanworker.settimeout.md)(int `$timeout`): bool

public [timeout](gearmanworker.timeout.md)(): int

public [unregister](gearmanworker.unregister.md)(string
`$function_name`): bool

public [unregisterAll](gearmanworker.unregisterall.md)(): bool

public [wait](gearmanworker.wait.md)(): bool

public [work](gearmanworker.work.md)(): bool

}

## Зміст

- [GearmanWorker::addFunction](gearmanworker.addfunction.md) -
Реєстрація та додавання callback-функції
- [GearmanWorker::addOptions](gearmanworker.addoptions.md) -
Додавання налаштувань обробника
- [GearmanWorker::addServer](gearmanworker.addserver.md) -
Додавання сервера завдань
- [GearmanWorker::addServers](gearmanworker.addservers.md) -
Додавання серверів завдань
- [GearmanWorker::clone](gearmanworker.clone.md) — Створення копії
обробника
- [GearmanWorker::\_\_construct](gearmanworker.construct.md) -
Створення об'єкту GearmanWorker
- [GearmanWorker::echo](gearmanworker.echo.md) — Перевірка відгуку
серверів завдань
- [GearmanWorker::error](gearmanworker.error.md) — Отримання
останньої виявленої помилки
- [GearmanWorker::getErrno](gearmanworker.geterrno.md) — Отримання
номери помилки
- [GearmanWorker::options](gearmanworker.options.md) — Отримання
налаштувань обробника
- [GearmanWorker::register](gearmanworker.register.md) — Реєстрація
функції на сервері завдань
- [GearmanWorker::removeOptions](gearmanworker.removeoptions.md) -
Видалення налаштувань обробника
- [GearmanWorker::returnCode](gearmanworker.returncode.md) -
Отримання останнього коду повернення Gearman
- [GearmanWorker::setId](gearmanworker.setid.md) — Призначає
обробнику ідентифікатор, щоб надалі мати можливість
опитати всі доступні обробники
- [GearmanWorker::setOptions](gearmanworker.setoptions.md) -
Встановлення налаштувань обробника
- [GearmanWorker::setTimeout](gearmanworker.settimeout.md) — Завдання
часу очікування на введення/виведення на сокеті
- [GearmanWorker::timeout](gearmanworker.timeout.md) — Отримання
значення час очікування запитів на сокеті
- [GearmanWorker::unregister](gearmanworker.unregister.md) — Видалити
реєстрацію імені функції на всіх серверах завдань
- [GearmanWorker::unregisterAll](gearmanworker.unregisterall.md)
Видалення реєстрації всіх імен функцій на серверах завдань
- [GearmanWorker::wait](gearmanworker.wait.md) — Очікування запиту з
одного із сервера завдань
- [GearmanWorker::work](gearmanworker.work.md) — Очікування та
виконання завдань
