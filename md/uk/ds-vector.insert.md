- [« Ds\Vector::get](ds-vector.get.md)
- [Ds\Vector::isEmpty »](ds-vector.isempty.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Вставляє значення за вказаним індексом

# Ds\Vector::insert

(PECL ds \>u003d 1.0.0)

Ds\Vector::insert — Вставляє значення за вказаним індексом

### Опис

public **Ds\Vector::insert**(int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

Вставляє значення за вказаним індексом.

### Список параметрів

`index`
Індекс, яким необхідно здійснити вставку.
`0 <u003d index <u003d count`

> **Примітка**:
>
> Можна вказати індекс, який дорівнює кількості елементів вектора.

`values`
Значення чи значення для вставки.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток
[OutOfRangeException](class.outofrangeexception.md) у разі
некоректного індексу.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::insert()****

` <?php$vector u003d new \Ds\Vector();$vector->insert(0, "e"); // [e]$vector->insert(1, "f"); // [e, f]$vector->insert(2, "g"); // [e, f, g]$vector->insert(0, "a", "b"); // [a, b, e, f, g]$vector->insert(2, ...["c", "d"]); // [a, b, c, d, e, f, g]var_dump($vector);?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Vector)#1 (7) {
[0]u003d>
string(1) "a"
[1]u003d>
string(1) "b"
[2]u003d>
string(1) "c"
[3]u003d>
string(1) "d"
[4]u003d>
string(1) "e"
[5]u003d>
string(1) "f"
[6]u003d>
string(1) "g"
}
