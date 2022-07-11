- [« Базове використання](gearman.examples-reverse.md)
- [Базові клієнт та обробник Gearman, відправка завдань
»](gearman.examples-reverse-task.md)

- [PHP Manual](index.md)
- [Приклади](gearman.examples.md)
- Базовий клієнт та обробник Gearman, фоновий режим

## Базовий клієнт та обробник Gearman, фоновий режим

**Приклад #1 Базовий клієнт та обробник Gearman, фоновий режим**

Цей приклад демонструє базову роботу з клієнтом та його обробником.
Клієнт відправляє рядок серверу виконання завдань у вигляді фонової
завдання, а обробник перевертає рядок. Зверніть увагу, що
робота виконується асинхронно, тобто. клієнт не чекає завершення завдання, а
відразу відключається (а значить і не отримує результату).

`<?php# створення об'єкта$gmclientu003d new GearmanClient();# вказівка сервера за мовчанням (localhost)$gmclient->addServer();# виконання в фоновому режимі$jo this is a test");if ($gmclient->returnCode() !u003d GEARMAN_SUCCESS){ echo "bad return code
";  exit;}echo "done!
";?> `

`<?phpecho "Starting
"; # Створення обробника. швидкої обробки без висновку.$gmworker->addFunction("reverse", "reverse_fn");print "Waiting for job...
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
Received job: H:foo.local:41
Workload: this is a test (14)
1/14 complete
2/14 complete
3/14 complete
4/14 complete
5/14 complete
6/14 complete
7/14 complete
8/14 complete
9/14 complete
10/14 complete
11/14 complete
12/14 complete
13/14 complete
14/14 complete
Result: tset a si siht

%php reverse_client_bg.php
done!
