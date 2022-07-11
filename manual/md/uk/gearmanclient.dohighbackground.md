- [« GearmanClient::doHigh](gearmanclient.dohigh.md)
- [GearmanClient::doJobHandle »](gearmanclient.dojobhandle.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Запускає на виконання із високим пріоритетом завдання у фоновому
режимі

# GearmanClient::doHighBackground

(PECL gearman u003d 0.5.0)

GearmanClient::doHighBackground — Запускає виконання з високим
пріоритетом завдання у фоновому режимі

### Опис

public **GearmanClient::doHighBackground**(string `$function_name`,
string `$workload`, string `$unique` u003d ?): string

Запускає виконання з високим пріоритетом завдання у фоновому режимі,
повертаючи дескриптор завдання, який може бути надалі
використаний для запиту стану завдання, що виконується. Завдання високого
пріоритету мають перевагу над нормальними та низькопріоритетними
задачам у черзі завдань.

### Список параметрів

`function_name`
Зареєстрована функція, що викликається робочим процесом

`workload`
Серіалізовані дані, що підлягають обробці

`unique`
Унікальний ID, призначений для певної задачі

### Значення, що повертаються

Дескриптор відправленого завдання.

### Дивіться також

- [GearmanClient::doNormal()](gearmanclient.donormal.md) - Виконує
одиночне завдання та повертає результат
- [GearmanClient::doHigh()](gearmanclient.dohigh.md) - Запускає на
виконання завдання з високим пріоритетом
- [GearmanClient::doLow()](gearmanclient.dolow.md) - Запускає на
виконання завдання з низьким пріоритетом
- [GearmanClient::doBackground()](gearmanclient.dobackground.md) -
Запускає виконання завдання у фоновому режимі
- [GearmanClient::doLowBackground()](gearmanclient.dolowbackground.md) -
Запускає виконання з низьким пріоритетом завдання у фоновому режимі
