- [« Приклади](gearman.examples.md)
- [Базовий клієнт та обробник Gearman, фоновий режим
»](gearman.examples-reverse-bg.md)

- [PHP Manual](index.md)
- [Приклади](gearman.examples.md)
- Базове використання

## Базове використання

**Приклад #1 Базовий клієнт та обробник Gearman**

Цей приклад демонструє базову роботу з клієнтом та його обробником.
Клієнт відправляє рядок серверу завдань, обробник перевертає
рядок та відсилає її назад. Операція виконується синхронно.

`<?php# Створення клієнтського об'єкта$gmclientu003d new GearmanClient();# Вказівка сервера за замовчуванням (localhost).$gmclient->addServer();echo "Sending job
";# Отправка задания обратноdo{  $result u003d $gmclient->doNormal("reverse", "Hello!");  # Проверка на различные возвращаемые пакеты и ошибки.  switch($gmclient->returnCode())  {    case GEARMAN_WORK_DATA:      echo "Data: $result
";                       ¦                                            ¦                                             ???
";      break;    case GEARMAN_WORK_FAIL:      echo "Failed
";      exit;    case GEARMAN_SUCCESS:      echo "Success: $result
";      break;    default:      echo "RET: " . $gmclient->returnCode() . "
";     exit; }}while($gmclient->returnCode() !u003d GEARMAN_SUCCESS);?> `

`<?phpecho "Starting
";# Створення нового обробника.$gmworkeru003d new GearmanWorker();# Додавання сервера за мовчанням (localhost).$gmworker->addServer();# Реєстрація функції " більше швидкої обробки без висновку.$gmworker->addFunction("reverse", "reverse_fn");print "Waiting for job...
";while($gmworker->work()){ if ($gmworker->returnCode() !u003d GEARMAN_SUCCESS)  {    echo "return_code: " . $gmworker->returnCode|.
";    break;  }}function reverse_fn($job){ echo "Received job: " . $job->handle() . "
";  $workload u003d $job->workload();  $workload_size u003d $job->workloadSize(); echo "Workload: $workload ($workload_size)
";| # Цей цикл не є необхідним, але|показує як виконується робота  for ($xu003d 0; $x < $workload_size; $x++) |
";   $job->sendStatus($x, $workload_size);    sleep(1);  }  $resultu003d strrev($workload); echo ""Result: $result
";  # Возвращаем, когда необходимо отправить результат обратно клиенту.  return $result;}# Гораздо более простая и менее подробная версия вышеприведённой функции выглядит так:function reverse_fn_fast($job){  return strrev($job->workload());} ?> `

Результатом виконання цього прикладу буде щось подібне:

%php reverse_worker.php
Starting
Waiting for job...
Received job: H:foo.local:36
Workload: Hello! (6)
Sending status: 1/6 complete
Sending status: 2/6 complete
Sending status: 3/6 complete
Sending status: 4/6 complete
Sending status: 5/6 complete
Sending status: 6/6 complete
Result: !olleH

%php reverse_client.php
Starting
Sending job
Status: 1/6 complete
Status: 2/6 complete
Status: 3/6 complete
Status: 4/6 complete
Status: 5/6 complete
Status: 6/6 complete
Success: !olleH
