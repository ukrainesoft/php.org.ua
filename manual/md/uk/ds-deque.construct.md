- [« Ds\Deque::clear](ds-deque.clear.md)
- [Ds\Deque::contains »](ds-deque.contains.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Створює новий екземпляр

# Ds\Deque::\_\_construct

(PECL ds \>u003d 1.0.0)

Ds\Deque::\_\_construct — Створює новий екземпляр

### Опис

public
**Ds\Deque::\_\_construct**([mixed](language.types.declarations.md#language.types.declarations.mixed)
$values u003d ?)

Створює новий екземпляр, використовуючи або об'єкт, що реалізує
[traversable](class.traversable.md), або масив, передані в
як параметр `values`.

### Список параметрів

`values`
Об'єкт, що реалізує інтерфейс traversable або масив.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::\_\_construct()****

` <?php$deque u003d new \Ds\Deque();var_dump($deque);$deque u003d new \Ds\Deque([1, 2, 3]);var_dump($deque);?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Deque)#2 (0) {
}
object(Ds\Deque)#2 (3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
}
