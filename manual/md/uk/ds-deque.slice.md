- [« Ds\Deque::shift](ds-deque.shift.md)
- [Ds\Deque::sort »](ds-deque.sort.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Повертає підчерг із заданого діапазону

# Ds\Deque::slice

(PECL ds \>u003d 1.0.0)

Ds\Deque::slice — Повертає почерг із заданого діапазону

### Опис

public **Ds\Deque::slice**(int `$index`, int `$length` u003d ?):
[Ds\Deque](class.ds-deque.md)

Повертає почергово з діапазону заданого початковим індексом `index`
та довжиною `length`.

### Список параметрів

`index`
Індекс, який визначає початок діапазону.

Якщо позитивний, то відраховуватиметься від початку колекції. Якщо
негативний, від кінця.

`length`
Позитивне значення визначає, скільки елементів буде взято. Якщо
кількість елементів двосторонньої черги менше заданого значення,
повернеться стільки елементів, скільки є. Негативне значення задасть
індекс, відрахований від кінця двосторонньої черги, що визначає кінець
діапазону. Якщо довжина не задана, то буде повернено всі елементи
двосторонньої черги від заданого індексу до кінця колекції.

### Значення, що повертаються

Підчерг із заданого діапазону.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::slice()****

` <?php$deque u003d new \Ds\Deque(["a", "b", "c", "d", "e"]);// Slice from 2 onwardsprint_r($deque->slice(2 ));// Slice from 1, for a length of 3print_r($deque->slice(1, 3));// Slice from 1 onwardsprint_r($deque->slice(1));// Slice the end onwardsprint_r($deque->slice(-2));// Slice from 1 to 1 from the endprint_r($deque->slice(1, -1));?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Deque Object
(
[0] u003d> c
[1] u003d> d
[2] u003d> e
)
Ds\Deque Object
(
[0] u003d> b
[1] u003d> c
[2] u003d> d
)
Ds\Deque Object
(
[0] u003d> b
[1] u003d> c
[2] u003d> d
[3] u003d> e
)
Ds\Deque Object
(
[0] u003d> d
[1] u003d> e
)
Ds\Deque Object
(
[0] u003d> b
[1] u003d> c
[2] u003d> d
)
