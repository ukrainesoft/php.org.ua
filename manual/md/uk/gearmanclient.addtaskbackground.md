- [« GearmanClient::addTask](gearmanclient.addtask.md)
- [GearmanClient::addTaskHigh »](gearmanclient.addtaskhigh.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Додати фонове завдання для роботи в паралельному режимі

# GearmanClient::addTaskBackground

(PECL gearman u003d 0.5.0)

GearmanClient::addTaskBackground — Додати фонове завдання для роботи в
паралельному режимі

### Опис

public **GearmanClient::addTaskBackground**(
string `$function_name`,
string `$workload`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
string `$unique` u003d ?
): [GearmanTask](class.gearmantask.md)

Додає фонове завдання для паралельної роботи з іншими завданнями.
Викличте цей метод для всіх завдань, які будуть працювати паралельно,
а потім викличте
[GearmanClient::runTasks()](gearmanclient.runtasks.md) для виконання
робіт.

### Список параметрів

`function_name`
Зареєстрована функція, що викликається робочим процесом

`workload`
Серіалізовані дані, що підлягають обробці

`context`
Контекст програми, що пов'язується із завданням

`unique`
Унікальний ID, призначений для певної задачі

### Значення, що повертаються

Об'єкт [GearmanTask](class.gearmantask.md) або **`false`**, якщо
завдання може бути додано.

### Приклади

**Приклад #1 Два завдання, одне у фоновому режимі, а інше немає**

Цей приклад ілюструє різницю між виконанням фонового завдання та
звичайним завданням. Клієнт додає два завдання для виконання одних і тих
функцій, але одна додана за допомогою **addTaskBackground()**.
Callback-функція встановлена так, щоб виконання завдання можна було
простежити. Простий обробник із штучною затримкою повідомляє статус
виконання завдання, і клієнт розуміє це за допомогою виклику
callback-функції. Два обробники запущені для цього прикладу. Зверніть
увагу, що фонове завдання не відображається в клієнтському висновку.

` <?php# Клієнтський скрипт# Створення нашого клієнта$gmcu003d new GearmanClient();# Додавання сервера задач за мовчанням$gmc->addServer();# Установка нескольк Таким чином, ми зможемо відслідковувати виконання $ gmc-> setCompleteCallback ("reverse_complete"); $ gmc-> setStatusCallback ("reverse_status"); World!", null, "1");# Додавання іншої задачі, но вона призначена для запуску у фоновому режимі$tasku003d $gmc->addTaskBackground("reverse", "! if (! $gmc->runTasks()){   echo "Помилка " . $gmc->error() . "
";   exit;}echo "Виконано
";function reverse_status($task){    echo "Статус: " . $task->unique() . ", " . $task->jobHandle() . " - "  . $task->taskDenominator() . "
";}function reverse_complete($task){    echo "Завершено: " . $task->unique() . ", " . $task->data() . "
";}?> `

`<?php# Скрипт обробникаecho "Початок
";# Створюємо наш об'єкт обробника$gmworkeru003d new GearmanWorker();# Додавання сервера задач за замовчуванням (localhost).$gmworker->addServer(); reverse_fn");print "Чекання завдання...
";while($gmworker->work()){ if ($gmworker->returnCode() !u003d GEARMAN_SUCCESS)  {   echo "код повернення: " . $gmworker->returnCode|
";    break;  }}function reverse_fn($job){  echo "Отримана завдання: " . $job->handle() . "
";  $workload u003d $job->workload();  $workload_size u003d $job->workloadSize(); echo "Робоче навантаження: $workload ($workload_size)
";| # В цьому циклі для відображення статуса немає необхідності. Просто для демонстрації, як це працює  for ($xu003d 0; $x < $workload_size;    | "/$workload_size виконано
";   $job->sendStatus($x+1, $workload_size);   $job->sendData(substr($workload, $x, 1));    sleep(1);  }  $$ echo "Результат: $result
";  # Повертаємо то, що ми хочемо повернути клієнту  return $result;}?> `

Виведення робітника для двох запущених працівників:

Отримана задача: H:foo.local:65
Робоче навантаження: !dlroW olleH (12)
1/12 виконано
Отримана задача: H:foo.local:66
Робоче навантаження: Hello World! (12)
Надсилання статусу: 1/12 виконано
Надсилання статусу: 2/12 виконано
Надсилання статусу: 2/12 виконано
Надсилання статусу: 3/12 виконано
Надсилання статусу: 3/12 виконано
Надсилання статусу: 4/12 виконано
Надсилання статусу: 4/12 виконано
Надсилання статусу: 5/12 виконано
Надсилання статусу: 5/12 виконано
Надсилання статусу: 6/12 виконано
Надсилання статусу: 6/12 виконано
Надсилання статусу: 7/12 виконано
Надсилання статусу: 7/12 виконано
Надсилання статусу: 8/12 виконано
Надсилання статусу: 8/12 виконано
Надсилання статусу: 9/12 виконано
Надсилання статусу: 9/12 виконано
Надсилання статусу: 10/12 виконано
Надсилання статусу: 10/12 виконано
Надсилання статусу: 11/12 виконано
Надсилання статусу: 11/12 виконано
Надсилання статусу: 12/12 виконано
Надсилання статусу: 12/12 виконано
Результат: !dlroW olleH
Результат: Hello World!

Клієнт виводить:

Заголовок: 1, H:foo.local:66 - 1/12
Заголовок: 1, H:foo.local:66 - 2/12
Заголовок: 1, H:foo.local:66 - 3/12
Заголовок: 1, H:foo.local:66 - 4/12
Заголовок: 1, H:foo.local:66 - 5/12
Заголовок: 1, H:foo.local:66 - 6/12
Заголовок: 1, H:foo.local:66 - 7/12
Заголовок: 1, H:foo.local:66 - 8/12
Заголовок: 1, H:foo.local:66 - 9/12
Заголовок: 1, H:foo.local:66 - 10/12
Заголовок: 1, H:foo.local:66 - 11/12
Заголовок: 1, H:foo.local:66 - 12/12
Завершено: 1, !dlroW olleH
Виконано

### Дивіться також

- [GearmanClient::addTask()](gearmanclient.addtask.md) - Додати
завдання, яке буде виконано в паралельному режимі
- [GearmanClient::addTaskHigh()](gearmanclient.addtaskhigh.md) -
Додати високопріоритетне завдання для роботи в паралельному режимі
- [GearmanClient::addTaskLow()](gearmanclient.addtasklow.md) -
Додати низькопріоритетне завдання для роботи в паралельному режимі
- [GearmanClient::addTaskHighBackground()](gearmanclient.addtaskhighbackground.md) -
Додати високопріоритетне фонове завдання для роботи в паралельному
режимі
- [GearmanClient::addTaskLowBackground()](gearmanclient.addtasklowbackground.md) -
Додати низькопріоритетне фонове завдання для роботи в паралельному
режимі
- [GearmanClient::runTasks()](gearmanclient.runtasks.md) - Запустити
список завдань у паралельному режимі
