- [« Базовий клієнт та обробник Gearman, фоновий
режим](gearman.examples-reverse-bg.md)
- [GearmanClient »](class.gearmanclient.md)

- [PHP Manual](index.md)
- [Приклади](gearman.examples.md)
- Базові клієнт та обробник Gearman, відправлення завдань

## Базові клієнт та обробник Gearman, відправлення завдань

**Приклад #1 Базові клієнт та обробник Gearman, відправлення задач**

У цьому прикладі наш базовий клієнт перевертання рядка розширено так,
щоб виконувати два завдання паралельно. Обробник перевертання
рядки не змінено, за винятком додавання даних, що надсилаються назад
під час обробки.

` <?php# створення клієнта gearman$gmcu003d new GearmanClient();# вказівка сервера за мовчанням (localhost)$gmc->addServer();# реєстрація функцій зворотного cc>$ ->setDataCallback("reverse_data");$gmc->setStatusCallback("reverse_status");$gmc->setCompleteCallback("reverse_complete");$gmc->setFailCallback("reverse_fail");# вказ 'foo'] u003d 'bar';# додавання двох задань$tasku003d $gmc->addTask("reverse", "foo", $data);$task2u003d $gmc->addTaskLow("reverse", , NULL);# виконання задань паралельно (використання двох обробників)if (! $gmc->runTasks()){   echo "ERROR " . $gmc->error() . "
";   exit;}echo "DONE
";function reverse_created($task){    echo "CREATED: " . $task->jobHandle() . "
";}function reverse_status($task){    echo "STATUS: " . $task->jobHandle() . " - " . $task->taskNumerator() > > 
";}function reverse_complete($task){    echo "COMPLETE: " . $task->jobHandle() . ", " . $task->data() . "
";}function reverse_fail($task){    echo "FAILED: " . $task->jobHandle() . "
";}function reverse_data($task){    echo "DATA: " . $task->data() . "
";}?> `

`<?phpecho "Starting
";# Створення обробника.$gmworkeru003d new GearmanWorker();# Вказівка сервера за мовчанням   (localhost).$gmworker->addServer();# Реєстрація функція "reverse" швидкої обробки без висновку.$gmworker->addFunction("reverse", "reverse_fn");print "Waiting for job...
";while($gmworker->work()){ if ($gmworker->returnCode() !u003d GEARMAN_SUCCESS)  {    echo "return_code: " . $gmworker->returnCode|.
";    break;  }}function reverse_fn($job){ echo "Received job: " . $job->handle() . "
";  $workload u003d $job->workload();  $workload_size u003d $job->workloadSize(); echo "Workload: $workload ($workload_size)
";| # Цей цикл не є необхідним, але|показує як виконується робота  for ($xu003d 0; $x < $workload_size; $x++) |
";   $job->sendStatus($x+1, $workload_size);   $job->sendData(substr($workload, $x, 1));    sleep(1);  }  $$ echo "Result: $result
";  # Возвращаем, когда необходимо отправить результат обратно клиенту.  return $result;}# Гораздо более простая и менее подробная версия вышеприведённой функции выглядит так:function reverse_fn_fast($job){  return strrev($job->workload());} ?> `

Результатом виконання цього прикладу буде щось подібне:

%php reverse_worker.php
Starting
Waiting for job...
Received job: H:foo.local:45
Workload: foo (3)
1/3 complete
2/3 complete
3/3 complete
Result: oof
Received job: H:foo.local:44
Workload: bar (3)
1/3 complete
2/3 complete
3/3 complete
Result: rab

%php reverse_client_task.php
CREATED: H:foo.local:44
CREATED: H:foo.local:45
STATUS: H:foo.local:45 - 1/3
DATA: f
STATUS: H:foo.local:45 - 2/3
DATA: o
STATUS: H:foo.local:45 - 3/3
DATA: o
COMPLETE: H:foo.local:45, oof
STATUS: H:foo.local:44 - 1/3
DATA: b
STATUS: H:foo.local:44 - 2/3
DATA: a
STATUS: H:foo.local:44 - 3/3
DATA: r
COMPLETE: H:foo.local:44, rab
DONE
