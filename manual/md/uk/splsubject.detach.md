- [« SplSubject::attach](splsubject.attach.md)
- [SplSubject::notify »](splsubject.notify.md)

- [PHP Manual](index.md)
- [SplSubject](class.splsubject.md)
- Від'єднати спостерігача

# SplSubject::detach

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplSubject::detach — Від'єднати спостерігача

### Опис

public **SplSubject::detach**([SplObserver](class.splobserver.md)
`$observer`): void

Від'єднує спостерігача від суб'єкта, щоб більше не повідомляти його про
оновлення.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`observer`
Об'єкт класу [SplObserver](class.splobserver.md) для від'єднання.

### Значення, що повертаються

Функція не повертає значення після виконання.
