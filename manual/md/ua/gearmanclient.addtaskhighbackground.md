- [« GearmanClient::addTaskHigh](gearmanclient.addtaskhigh.md)
- [GearmanClient::addTaskLow »](gearmanclient.addtasklow.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Додати високопріоритетне фонове завдання для роботи в паралельному
режимі

# GearmanClient::addTaskHighBackground

(PECL gearman u003d 0.5.0)

GearmanClient::addTaskHighBackground — Додати високопріоритетну
фонове завдання для роботи в паралельному режимі

### Опис

public **GearmanClient::addTaskHighBackground**(
string `$function_name`,
string `$workload`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
string `$unique` u003d ?
): [GearmanTask](class.gearmantask.md)

Додає високопріоритетне фонове завдання для паралельної роботи з
іншими завданнями. Викличте цей метод для всіх завдань, які будуть
працювати паралельно, а потім викличте
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

### Дивіться також

- [GearmanClient::addTask()](gearmanclient.addtask.md) - Додати
завдання, яке буде виконано в паралельному режимі
- [GearmanClient::addTaskHigh()](gearmanclient.addtaskhigh.md) -
Додати високопріоритетне завдання для роботи в паралельному режимі
- [GearmanClient::addTaskLow()](gearmanclient.addtasklow.md) -
Додати низькопріоритетне завдання для роботи в паралельному режимі
- [GearmanClient::addTaskBackground()](gearmanclient.addtaskbackground.md) -
Додати фонове завдання для роботи в паралельному режимі
- [GearmanClient::addTaskLowBackground()](gearmanclient.addtasklowbackground.md) -
Додати низькопріоритетне фонове завдання для роботи в паралельному
режимі
- [GearmanClient::runTasks()](gearmanclient.runtasks.md) - Запустити
список завдань у паралельному режимі
