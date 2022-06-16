- [« SplObserver](class.splobserver.md)
- [SplSubject »](class.splsubject.md)

- [PHP Manual](index.md)
- [SplObserver](class.splobserver.md)
- отримати оновлення від суб'єкта

# SplObserver::update

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplObserver::update — Отримати оновлення

### Опис

public **SplObserver::update**([SplSubject](class.splsubject.md)
`$subject`): void

Цей метод викликається, коли будь-який [SplSubject](class.splsubject.md),
до якого приєднаний спостерігач, викликає
[SplSubject::notify()](splsubject.notify.md).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`subject`
[SplSubject](class.splsubject.md), що повідомляє спостерігача про
оновлення.

### Значення, що повертаються

Функція не повертає значення після виконання.
