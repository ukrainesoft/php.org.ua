- [« Ds\Set::reduce](ds-set.reduce.md)
- [Ds\Set::reverse »](ds-set.reverse.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Видаляє всі задані значення набору

# Ds\Set::remove

(PECL ds \>u003d 1.0.0)

Ds\Set::remove — Видалення всіх заданих значень з набору

### Опис

public
**Ds\Set::remove**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

Видаляє всі задані значення `values` із набору. Значення, які
відсутні в наборі, будуть проігноровані.

### Список параметрів

`values`
Значення видалення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::remove()****

` <?php$set u003d new \Ds\Set([1, 2, 3, 4, 5]);$set->remove(1); // Видалити 1 $ set-> remove (1, 2); // Неможливо найти 1, але видалити 2$set->remove(...[3, 4]); // Видалити 3 і 4var_dump($set);?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Set)#1 (1) {
[0]u003d>
int(5)
}
