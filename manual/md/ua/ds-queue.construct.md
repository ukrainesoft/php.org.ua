- [« Ds\Queue::clear](ds-queue.clear.md)
- [Ds\Queue::copy »](ds-queue.copy.md)

- [PHP Manual](index.md)
- [Черга](class.ds-queue.md)
- Створює новий екземпляр

# Ds\Queue::\_\_construct

(PECL ds \>u003d 1.0.0)

Ds\Queue::\_\_construct — Створює новий екземпляр

### Опис

public
**Ds\Queue::\_\_construct**([mixed](language.types.declarations.md#language.types.declarations.mixed)
$values u003d ?)

Створює новий екземпляр, використовуючи або об'єкт, що реалізує
[traversable](class.traversable.md), або масив, передані в
як параметр `values`.

### Список параметрів

`values`
Об'єкт, що реалізує інтерфейс traversable або масив.

### Приклади

**Приклад #1 Приклад використання **Ds\Queue::\_\_construct()****

` <?php$queue u003d new \Ds\Queue();var_dump($queue);$queue u003d new \Ds\Queue([1, 2, 3]);var_dump($queue);?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Queue)#2 (0) {
}
object(Ds\Queue)#2 (3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
}
