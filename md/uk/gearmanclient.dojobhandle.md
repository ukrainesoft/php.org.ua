- [«
GearmanClient::doHighBackground](gearmanclient.dohighbackground.md)
- [GearmanClient::doLow »](gearmanclient.dolow.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Отримати дескриптор завдання, що виконується

# GearmanClient::doJobHandle

(PECL gearman u003d 0.5.0)

GearmanClient::doJobHandle — Отримати дескриптор завдання, що виконується

### Опис

public **GearmanClient::doJobHandle**(): string

Отримує дескриптор завдання для завдання, що виконується. Цей метод винен
використовуватися між повторними викликами
[GearmanClient::doNormal()](gearmanclient.donormal.md). Дескриптор
Завдання може використовуватися для отримання інформації про завдання.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Дескриптор завдання для завдання, що виконується.

### Дивіться також

- [GearmanClient::jobStatus()](gearmanclient.jobstatus.md) -
Набуття статусу виконання фонового завдання
