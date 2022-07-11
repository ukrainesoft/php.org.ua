- [«
GearmanClient::addTaskBackground](gearmanclient.addtaskbackground.md)
- [GearmanClient::addTaskHighBackground
»](gearmanclient.addtaskhighbackground.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Додати високопріоритетне завдання для роботи в паралельному режимі

# GearmanClient::addTaskHigh

(PECL gearman u003d 0.5.0)

GearmanClient::addTaskHigh — Додати високопріоритетне завдання для
роботи в паралельному режимі

### Опис

public **GearmanClient::addTaskHigh**(
string `$function_name`,
string `$workload`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
string `$unique` u003d ?
): [GearmanTask](class.gearmantask.md)

Додає високопріоритетне завдання для паралельної роботи з іншими
завданнями. Викличте цей метод для всіх високопріоритетних завдань, які
будуть працювати паралельно, а потім викличте
[GearmanClient::runTasks()](gearmanclient.runtasks.md) для виконання
робіт. Завдання з високим пріоритетом будуть обрані із черги раніше
задач із нормальним або низьким пріоритетом.

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

**Приклад #1 Високопріоритетне завдання разом із двома звичайними завданнями**

Високопріоритетне завдання включено до двох інших завдань. Доступний
єдиний обробник, так що завдання запускаються одне за одним,
Високопріоритетні завдання виконуються насамперед.

` <?php# створення клієнта$gmcu003d new GearmanClient();# додавання сервера задач за замовчуванням$gmc->addServer();# установка callback-функції для повідомлення c>e| # додавання задач, одна з яких високопріоритетна$tasku003d $gmc->addTask("reverse", "Hello World!", null, "1");$tasku003d $gmc->addTaskHig olleH", null, "2");$tasku003d $gmc->addTask("reverse", "Hello World!", null, "3");if (! $gmc->runTasks()){   echo Помилка””. $gmc->error() . "
";   exit;}echo "Виконано
";function reverse_complete($task){    echo "Завершено: " . $task->unique() . ", " . $task->data() . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Завершено: 2, Hello World!
Завершено: 3, !dlroW olleH
Завершено: 1, !dlroW olleH
Виконано

### Дивіться також

- [GearmanClient::addTask()](gearmanclient.addtask.md) - Додати
завдання, яке буде виконано в паралельному режимі
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
