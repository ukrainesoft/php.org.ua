- [« GearmanClient::addServers](gearmanclient.addservers.md)
- [GearmanClient::addTaskBackground
»](gearmanclient.addtaskbackground.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Додати завдання, яке буде виконано у паралельному режимі

# GearmanClient::addTask

(PECL gearman u003d 0.5.0)

GearmanClient::addTask — Додати завдання, яке буде виконано в
паралельному режимі

### Опис

public **GearmanClient::addTask**(
string `$function_name`,
string `$workload`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
string `$unique` u003d ?
): [GearmanTask](class.gearmantask.md)

Додає завдання для паралельної роботи з іншими завданнями. Викличте
цей метод для всіх завдань, які будуть працювати паралельно, а потім
викличте [GearmanClient::runTasks()](gearmanclient.runtasks.md) для
виконання робіт. Зверніть увагу, що має бути достатнє
кількість обробників для одночасного виконання всіх завдань.

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

**Приклад #1 Основне уявлення двох завдань**

` <?php# Створюємо нашого клієнта $ gmclient u003d новий GearmanClient (); ;# Добавляємо завдання для виконання функції reverse, перевертаючою рядок "Hello World!"$gmclient->addTask("reverse", "Hello World!", null,| рядок "!dlroW olleH"$gmclient->addTask("reverse", "!dlroW olleH", null, "2");# Виконуємо завдання$gmclient->runTasks();function complete($ta : " . $task->unique() . ", " . $task->data() . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Виконано: 2, Hello World!
Виконано: 1, !dlroW olleH

**Приклад #2 Основне уявлення двох завдань із передачею контексту
програми**

` <?php$client u003d new GearmanClient();$client->addServer();# Встановлюємо функцію, буде викликана по завершенню роботи$client->setCompleteCallback("reverse_comple u003d array();$client->addTask("reverse", "Hello World!", $results, "t1");$client->addTask("reverse", "!dlroW olleH", $results, "t2 ");$client->runTasks();# Результати мають заповнені з callback-функційforeach ($results as $id u003d> $result)   echo $id . ": " . $result['handle'] . ", " . $result['data'] . "
";function reverse_complete($task, $results){   $results[$task->unique()] u003d array("handle"u003d>$task->jobHandle(), "data"u003d>$task->data( ));}?> `

Результатом виконання цього прикладу буде щось подібне:

t2: H.foo:21, Hello World!
t1: H:foo:22, !dlroW olleH

### Дивіться також

- [GearmanClient::addTaskHigh()](gearmanclient.addtaskhigh.md) -
Додати високопріоритетне завдання для роботи в паралельному режимі
- [GearmanClient::addTaskLow()](gearmanclient.addtasklow.md) -
Додати низькопріоритетне завдання для роботи в паралельному режимі
- [GearmanClient::addTaskBackground()](gearmanclient.addtaskbackground.md) -
Додати фонове завдання для роботи в паралельному режимі
- [GearmanClient::addTaskHighBackground()](gearmanclient.addtaskhighbackground.md) -
Додати високопріоритетне фонове завдання для роботи в паралельному
режимі
- [GearmanClient::addTaskLowBackground()](gearmanclient.addtasklowbackground.md) -
Додати низькопріоритетне фонове завдання для роботи в паралельному
режимі
- [GearmanClient::runTasks()](gearmanclient.runtasks.md) - Запустити
список завдань у паралельному режимі
