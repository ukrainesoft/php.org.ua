- [«FTP\Connection](class.ftp-connection.md)
- [Вступ »](intro.gearman.md)

- [PHP Manual](index.md)
- [Інші служби](refs.remote.other.md)
- Gearman

# Gearman

- [Вступ](intro.gearman.md)
- [Встановлення та налаштування](gearman.setup.md)
- [Вимоги](gearman.requirements.md)
- [Установка](gearman.installation.md)
- [Налаштування під час виконання](gearman.configuration.md)
- [Типи ресурсів](gearman.resources.md)
- [Предвизначені константи](gearman.constants.md)
- [Приклади](gearman.examples.md)
- [Базове використання](gearman.examples-reverse.md)
- [Базовий клієнт та обробник Gearman, фоновий
режим](gearman.examples-reverse-bg.md)
- [Базові клієнт та обробник Gearman, відправка
задач](gearman.examples-reverse-task.md)
- [GearmanClient](class.gearmanclient.md) - Клас GearmanClient
- [GearmanClient::addOptions](gearmanclient.addoptions.md) -
Додати клієнтські опції
- [GearmanClient::addServer](gearmanclient.addserver.md) -
Додати сервер завдань для клієнта
- [GearmanClient::addServers](gearmanclient.addservers.md) -
Додати список серверів завдань для клієнта
- [GearmanClient::addTask](gearmanclient.addtask.md) — Додати
завдання, яке буде виконано в паралельному режимі
- [GearmanClient::addTaskBackground](gearmanclient.addtaskbackground.md)
— Додати фонове завдання для роботи в паралельному режимі
- [GearmanClient::addTaskHigh](gearmanclient.addtaskhigh.md)
Додати високопріоритетне завдання для роботи у паралельному
режимі
- [GearmanClient::addTaskHighBackground](gearmanclient.addtaskhighbackground.md)
— Додати високопріоритетне фонове завдання для роботи в
паралельному режимі
- [GearmanClient::addTaskLow](gearmanclient.addtasklow.md) -
Додати низькопріоритетне завдання для роботи в паралельному
режимі
- [GearmanClient::addTaskLowBackground](gearmanclient.addtasklowbackground.md)
— Додати низькопріоритетне фонове завдання для роботи в
паралельному режимі
- [GearmanClient::addTaskStatus](gearmanclient.addtaskstatus.md)
— Додати завдання для набуття статусу
- [GearmanClient::clearCallbacks](gearmanclient.clearcallbacks.md)
— Очистити всі функції зворотного виклику цієї задачі
- [GearmanClient::clone](gearmanclient.clone.md) — Створити копію
об'єкта GearmanClient
- [GearmanClient::\_\_construct](gearmanclient.construct.md) -
Створити екземпляр GearmanClient
- [GearmanClient::context](gearmanclient.context.md) -
Повертає контекст програми
- [GearmanClient::data](gearmanclient.data.md) - Повертає
дані програми (функція застаріла)
- [GearmanClient::do](gearmanclient.do.md) — Виконує одну
завдання і повертає результат [Застарілий метод]
- [GearmanClient::doBackground](gearmanclient.dobackground.md) -
Запускає виконання завдання у фоновому режимі
- [GearmanClient::doHigh](gearmanclient.dohigh.md) - Запускає
на виконання завдання з високим пріоритетом
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
- [GearmanClient::doNormal](gearmanclient.donormal.md) -
Виконує одиночне завдання та повертає результат
- [GearmanClient::doStatus](gearmanclient.dostatus.md) -
Отримання статусу завдання, що виконується
- [GearmanClient::echo](gearmanclient.echo.md) - Відправляє
дані всім серверам завдань, щоб перевірити відгук
\[Застарілий метод\]
- [GearmanClient::error](gearmanclient.error.md) — Повернути
рядок помилки для останньої виявленої помилки
- [GearmanClient::getErrno](gearmanclient.geterrno.md) -
Отримати значення errno
- [GearmanClient::jobStatus](gearmanclient.jobstatus.md) -
Набуття статусу виконання фонового завдання
- [GearmanClient::ping](gearmanclient.ping.md) - Відправляє
дані на всі сервери, щоб перевірити, які з них виведуть ці
дані
- [GearmanClient::removeOptions](gearmanclient.removeoptions.md)
— Видалити опції клієнта
- [GearmanClient::returnCode](gearmanclient.returncode.md) -
Отримати останній код повернення Gearman
- [GearmanClient::runTasks](gearmanclient.runtasks.md)
Запустити список завдань у паралельному режимі
- [GearmanClient::setClientCallback](gearmanclient.setclientcallback.md)
— Встановити функцію зворотного дзвінка, коли є пакет даних
для завдання (застарілий метод)
- [GearmanClient::setCompleteCallback](gearmanclient.setcompletecallback.md)
— Встановіть функцію, яка буде викликана після завершення завдання
- [GearmanClient::setContext](gearmanclient.setcontext.md) -
Встановити контекст програми
- [GearmanClient::setCreatedCallback](gearmanclient.setcreatedcallback.md)
— Встановити функцію зворотного дзвінка, коли завдання ставиться в
черга
- [GearmanClient::setData](gearmanclient.setdata.md) -
Встановити дані програми (застарілий метод)
- [GearmanClient::setDataCallback](gearmanclient.setdatacallback.md)
— Задає функцію callback для обробки переданих даних
- [GearmanClient::setExceptionCallback](gearmanclient.setexceptioncallback.md)
— Встановлення функції зворотного дзвінка для перехоплення виключень
обробника завдань
- [GearmanClient::setFailCallback](gearmanclient.setfailcallback.md)
— Установка callback-функції для обробки ситуації, коли
завдання не вдалося виконати
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
- Установка callback-функції, що приймає проміжні
результати від обробника завдань
- [GearmanClient::timeout](gearmanclient.timeout.md) — Отримання
значення часу очікування операцій введення/виводу
- [GearmanClient::wait](gearmanclient.wait.md) - Очікує
активності введення-виводу для всіх підключень на клієнті
- [GearmanJob](class.gearmanjob.md) - Клас GearmanJob
- [GearmanJob::complete](gearmanjob.complete.md) — Надсилання
результату та статусу завершення (застарілий метод)
- [GearmanJob::\_\_construct](gearmanjob.construct.md) -
Створення об'єкту GearmanJob
- [GearmanJob::data](gearmanjob.data.md) — Надсилання даних
(застарілий метод)
- [GearmanJob::exception](gearmanjob.exception.md) — Надсилання
винятки (застарілий метод)
- [GearmanJob::fail](gearmanjob.fail.md) — Надіслати статус
невдалої операції (застарілий метод)
- [GearmanJob::functionName](gearmanjob.functionname.md) -
Отримання імені функції
- [GearmanJob::handle](gearmanjob.handle.md) — Отримання
дескриптора об'єкта завдання
- [GearmanJob::returnCode](gearmanjob.returncode.md) — Отримання
останнього коду повернення
- [GearmanJob::sendComplete](gearmanjob.sendcomplete.md) -
Надсилання результату та статусу завершення
- [GearmanJob::sendData](gearmanjob.senddata.md) — Надсилання
даних виконується завдання
- [GearmanJob::sendException](gearmanjob.sendexception.md) -
Відправлення виключення завдання, що виконується
- [GearmanJob::sendFail](gearmanjob.sendfail.md) — Надсилання
статусу невдалої операції
- [GearmanJob::sendStatus](gearmanjob.sendstatus.md) — Надсилання
статусу
- [GearmanJob::sendWarning](gearmanjob.sendwarning.md)
Надсилання попередження
- [GearmanJob::setReturn](gearmanjob.setreturn.md) — Установка
значення, що повертається
- [GearmanJob::status](gearmanjob.status.md) — Надсилання статусу
завдання (застарілий метод)
- [GearmanJob::unique](gearmanjob.unique.md) — Отримання
унікального ідентифікатора
- [GearmanJob::warning](gearmanjob.warning.md) — Надсилання
попередження (застарілий метод)
- [GearmanJob::workload](gearmanjob.workload.md) — Отримання
даних для обробки
- [GearmanJob::workloadSize](gearmanjob.workloadsize.md) -
Отримання розміру даних, що оброблюються
- [GearmanTask](class.gearmantask.md) - Клас GearmanTask
- [GearmanTask::\_\_construct](gearmantask.construct.md) -
Створює об'єкт GearmanTask
- [GearmanTask::create](gearmantask.create.md) — Створює завдання
(застарілий метод)
- [GearmanTask::data](gearmantask.data.md) — Отримати дані,
повернені для завдання
- [GearmanTask::dataSize](gearmantask.datasize.md) — Отримати
розмір даних, що повертаються
- [GearmanTask::function](gearmantask.function.md) — Отримати
ім'я пов'язаної функції (застарілий метод)
- [GearmanTask::functionName](gearmantask.functionname.md) -
Отримати ім'я функції
- [GearmanTask::isKnown](gearmantask.isknown.md) — Визначення,
чи відомо серверу про це завдання
- [GearmanTask::isRunning](gearmantask.isrunning.md)
Перевіряє, чи виконується завдання на даний момент
- [GearmanTask::jobHandle](gearmantask.jobhandle.md) — Отримати
дескриптор завдання
- [GearmanTask::recvData](gearmantask.recvdata.md) — Читання
даних роботи або результату завдання у буфер
- [GearmanTask::returnCode](gearmantask.returncode.md)
Отримати останній код повернення
- [GearmanTask::sendData](gearmantask.senddata.md) — Надсилання
даних завдання (застарілий метод)
- [GearmanTask::sendWorkload](gearmantask.sendworkload.md) -
Надсилання даних завдання
- [GearmanTask::taskDenominator](gearmantask.taskdenominator.md)
— отримати знаменник відсотка виконаної роботи
- [GearmanTask::taskNumerator](gearmantask.tasknumerator.md)
Отримання чисельника відсотка виконаної роботи
- [GearmanTask::unique](gearmantask.unique.md) — Отримання
унікального ідентифікатора задачі
- [GearmanTask::uuid](gearmantask.uuid.md) — Отримання
унікального ідентифікатора задачі (застарілий метод)
- [GearmanWorker](class.gearmanworker.md) - Клас GearmanWorker
- [GearmanWorker::addFunction](gearmanworker.addfunction.md) -
Реєстрація та додавання callback-функції
- [GearmanWorker::addOptions](gearmanworker.addoptions.md) -
Додавання налаштувань обробника
- [GearmanWorker::addServer](gearmanworker.addserver.md) -
Додавання сервера завдань
- [GearmanWorker::addServers](gearmanworker.addservers.md) -
Додавання серверів завдань
- [GearmanWorker::clone](gearmanworker.clone.md) — Створення
копії обробника
- [GearmanWorker::\_\_construct](gearmanworker.construct.md) -
Створення об'єкту GearmanWorker
- [GearmanWorker::echo](gearmanworker.echo.md) — Перевірка
відгуку серверів завдань
- [GearmanWorker::error](gearmanworker.error.md) — Отримання
останньої виявленої помилки
- [GearmanWorker::getErrno](gearmanworker.geterrno.md) -
Отримання номера помилки
- [GearmanWorker::options](gearmanworker.options.md) — Отримання
налаштувань обробника
- [GearmanWorker::register](gearmanworker.register.md) -
Реєстрація функції на сервері завдань
- [GearmanWorker::removeOptions](gearmanworker.removeoptions.md)
— Видалення налаштувань обробника
- [GearmanWorker::returnCode](gearmanworker.returncode.md) -
Отримання останнього коду повернення Gearman
- [GearmanWorker::setId](gearmanworker.setid.md) — Призначає
обробнику ідентифікатор, щоб надалі мати можливість
опитати всі доступні обробники
- [GearmanWorker::setOptions](gearmanworker.setoptions.md) -
Встановлення налаштувань обробника
- [GearmanWorker::setTimeout](gearmanworker.settimeout.md) -
Встановлення часу очікування на введення/виводу на сокеті
- [GearmanWorker::timeout](gearmanworker.timeout.md) — Отримання
значення час очікування запитів на сокеті
- [GearmanWorker::unregister](gearmanworker.unregister.md)
Видалити реєстрацію імені функції на всіх серверах завдань
- [GearmanWorker::unregisterAll](gearmanworker.unregisterall.md)
— Видалення реєстрації всіх імен функцій на серверах завдань
- [GearmanWorker::wait](gearmanworker.wait.md) — Очікування
запиту з одного із сервера завдань
- [GearmanWorker::work](gearmanworker.work.md) — Очікування та
виконання завдань
- [GearmanException](class.gearmanexception.md) - Клас
GearmanException
