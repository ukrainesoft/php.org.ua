- [« GearmanWorker::unregisterAll](gearmanworker.unregisterall.md)
- [GearmanWorker::work »](gearmanworker.work.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Очікування запиту з одного із серверів завдань

# GearmanWorker::wait

(PECL gearman \>u003d 0.6.0)

GearmanWorker::wait — Очікування запиту з одного із серверів завдань

### Опис

public **GearmanWorker::wait**(): bool

При роботі в неблокувальному режимі введення/виводу змушує обробника
чекати на завдання від будь-якого сервера завдань Gearman. У разі відмови
буде видано попередження **`E_WARNING`** із зазначенням останньої
помилки, що відбулася.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Запуск оброблювача в неблокуючому режимі**

`<?phpecho "Запуск
";# створення об'єкта обробника$workeru003d new GearmanWorker();# включення неблокуючого режиму$worker->addOptions(GEARMAN_WORKER_NON_BLOCKING);# додавання сервера у | функції$worker->addFunction('reverse', 'reverse_fn');# спробуємо отримати завданняwhile (@$worker->work() ||      $worker->returnCode()_re| u003du003d GEARMAN_NO_JOBS){ if ($worker->returnCode() u003du003d GEARMAN_SUCCESS)    continue; echo "Чекання наступного завдання...
";  if (!@$worker->wait())  {    if ($worker->returnCode() u003du003d GEARMAN_NO_ACTIVE_FDS)    {      # мы не подключены ни к одному из серверов, подождём немного      # и попробуем переподключиться      sleep(5); continue;    }    break;  }}echo "Помилка в обробнику: " . $worker->error() . "
";function reverse_fn($job){ return strrev($job->workload());}?> `

### Дивіться також

- [GearmanWorker::work()](gearmanworker.work.md) - Очікування та
виконання завдань
