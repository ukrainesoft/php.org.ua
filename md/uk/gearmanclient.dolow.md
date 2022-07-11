- [« GearmanClient::doJobHandle](gearmanclient.dojobhandle.md)
- [GearmanClient::doLowBackground
»](gearmanclient.dolowbackground.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Запускає виконання завдання з низьким пріоритетом

# GearmanClient::doLow

(PECL gearman u003d 0.5.0)

GearmanClient::doLow — Запускає на виконання завдання з низьким
пріоритетом

### Опис

public **GearmanClient::doLow**(string `$function_name`, string
`$workload`, string `$unique` u003d ?): string

Запускає виконання завдання з низьким пріоритетом і повертає рядок,
що містить результат. Функція залежить від
[GearmanClient](class.gearmanclient.md) та
[GearmanWorker](class.gearmanworker.md), оскільки необхідно
забезпечити єдиний формат результату. Високопріоритетні завдання мають
перевага над звичайними та низькопріоритетними завданнями у черзі
завдань. Завдання нормального та високого пріоритету мають перевагу над
низькопріоритетними завданнями у черзі завдань.

### Список параметрів

`function_name`
Зареєстрована функція, що викликається робочим процесом

`workload`
Серіалізовані дані, що підлягають обробці

`unique`
Унікальний ID, призначений для певної задачі

### Значення, що повертаються

Рядок, що містить результат виконання завдання.

### Дивіться також

- [GearmanClient::doNormal()](gearmanclient.donormal.md) - Виконує
одиночне завдання та повертає результат
- [GearmanClient::doHigh()](gearmanclient.dohigh.md) - Запускає на
виконання завдання з високим пріоритетом
- [GearmanClient::doBackground()](gearmanclient.dobackground.md) -
Запускає виконання завдання у фоновому режимі
- [GearmanClient::doHighBackground()](gearmanclient.dohighbackground.md) -
Запускає на виконання з високим пріоритетом завдання у фоновому режимі
режимі
- [GearmanClient::doLowBackground()](gearmanclient.dolowbackground.md) -
Запускає виконання з низьким пріоритетом завдання у фоновому режимі
