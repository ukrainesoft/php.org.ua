- [« SplObserver::update](splobserver.update.md)
- [SplSubject::attach »](splsubject.attach.md)

- [PHP Manual](index.md)
- [Різні класи та інтерфейси](spl.misc.md)
- Інтерфейс SplSubject

# Інтерфейс SplSubject

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Інтерфейс **SplSubject** використовується спільно з
[SplObserver](class.splobserver.md) для реалізації шаблону
проектування Спостерігач (Observer).

## Огляд інтерфейсів

interface **SplSubject** {

/\* Методи \*/

public
[attach](splsubject.attach.md)([SplObserver](class.splobserver.md)
`$observer`): void

public
[detach](splsubject.detach.md)([SplObserver](class.splobserver.md)
`$observer`): void

public [notify](splsubject.notify.md)(): void

}

## Зміст

- [SplSubject::attach](splsubject.attach.md) — Приєднати
спостерігача (об'єкт класу SplObserver)
- [SplSubject::detach](splsubject.detach.md) — Від'єднати
спостерігача
- [SplSubject::notify](splsubject.notify.md) — Повідомити спостерігача
