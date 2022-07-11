- [«
GearmanClient::addTaskHighBackground](gearmanclient.addtaskhighbackground.md)
- [GearmanClient::addTaskLowBackground
»](gearmanclient.addtasklowbackground.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Додати низькопріоритетне завдання для роботи в паралельному режимі

# GearmanClient::addTaskLow

(PECL gearman u003d 0.5.0)

GearmanClient::addTaskLow — Додати низькопріоритетне завдання для роботи
у паралельному режимі

### Опис

public **GearmanClient::addTaskLow**(
string `$function_name`,
string `$workload`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
string `$unique` u003d ?
): [GearmanTask](class.gearmantask.md)

Додає низькопріоритетне завдання для паралельної роботи з іншими
завданнями. Викличте цей метод для всіх завдань, які будуть працювати
паралельно, а потім викличте
[GearmanClient::runTasks()](gearmanclient.runtasks.md) для виконання
робіт. Завдання з низьким пріоритетом будуть вибрані із черги після завдань
з нормальним чи високим пріоритетом.

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

**Приклад #1 Низькопріоритетне завдання разом із двома звичайними завданнями**

Низькопріоритетне завдання включено серед двох інших завдань. Єдиний
обробник доступний, так що завдання запускаються одне за одним,
низькопріоритетні завдання виконуються в останню чергу.

` <?php# створення клієнта$gmcu003d new GearmanClient();# додавання сервера задач за замовчуванням$gmc->addServer();# установка функції зворотного|виклику за c| задач, одна з которих з низким пріоритетом$tasku003d $gmc->addTask("reverse", "Hello World!", null, "1");$tasku003d $gmc->addTaskLow("reverse!" olleH", null, "2");$tasku003d $gmc->addTask("reverse", "Hello World!", null, "3");if (! $gmc->runTasks()){   echo Помилка””. $gmc->error() . "
";   exit;}echo "Готово
";function reverse_complete($task){    echo "Виконано: " . $task->unique() . ", " . $task->data() . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Виконано: 3, !dlroW olleH
Виконано: 1, !dlroW olleH
Виконано: 2, Hello World!
Готово

### Дивіться також

- [GearmanClient::addTask()](gearmanclient.addtask.md) - Додати
завдання, яке буде виконано в паралельному режимі
- [GearmanClient::addTaskHigh()](gearmanclient.addtaskhigh.md) -
Додати високопріоритетне завдання для роботи в паралельному режимі
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
