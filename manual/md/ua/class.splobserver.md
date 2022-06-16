- [« ArrayObject::unserialize](arrayobject.unserialize.md)
- [SplObserver::update »](splobserver.update.md)

- [PHP Manual](index.md)
- [Різні класи та інтерфейси](spl.misc.md)
- Інтерфейс SplObserver

# Інтерфейс SplObserver

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Інтерфейс **SplObserver** використовується спільно з
[SplSubject](class.splsubject.md) для реалізації шаблону
проектування Спостерігач (Observer).

## Огляд інтерфейсів

interface **SplObserver** {

/\* Методи \*/

public
[update](splobserver.update.md)([SplSubject](class.splsubject.md)
`$subject`): void

}

## Зміст

- [SplObserver::update](splobserver.update.md) — Отримати оновлення
від суб'єкта
