- [Fiber::getCurrent](fiber.getcurrent.md)
- [WeakReference::\_\_construct »](weakreference.construct.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Клас WeakReference

# Клас WeakReference

(PHP 7 \>u003d 7.4.0, PHP 8)

## Вступ

Клас WeakReference надає спосіб доступу до об'єкта, не впливаючи при
цьому на кількість посилань на нього, таким чином збирач сміття зможе
звільнити цей об'єкт.

Об'єкт класу **WeakReference** не може бути серіалізованим.

## Огляд класів

final class **WeakReference** {

/\* Методи \*/

public [\_\_construct](weakreference.construct.md)()

public static [create](weakreference.create.md)(object `$object`):
[WeakReference](class.weakreference.md)

public [get](weakreference.get.md)(): ?object

}

## Приклади використання WeakReference

**Приклад #1 Приклад #1. Просте використання WeakReference**

` <?php$obj u003d new stdClass;$weakref u003d WeakReference::create($obj);var_dump($weakref->get());unset($obj);var_dump($weakref->get()); ?> `

Результатом виконання цього прикладу буде щось подібне:

object(stdClass)#1 (0) {
}
NULL

## Зміст

- [WeakReference::\_\_construct](weakreference.construct.md) -
Конструктор, який забороняє реалізацію
- [WeakReference::create](weakreference.create.md) - Створює нову
слабке посилання
- [WeakReference::get](weakreference.get.md) — Отримує об'єкт з
слабким посиланням
