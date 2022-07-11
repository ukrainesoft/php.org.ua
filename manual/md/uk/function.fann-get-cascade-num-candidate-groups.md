- [«
fann_get_cascade_min_out_epochs](function.fann-get-cascade-min-out-epochs.md)
- [fann_get_cascade_num_candidates
»](function.fann-get-cascade-num-candidates.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає кількість груп кандидатів

# fann_get_cascade_num_candidate_groups

(PECL fann u003d 1.0.0)

fann_get_cascade_num_candidate_groups — Повертає кількість груп
кандидатів

### Опис

**fann_get_cascade_num_candidate_groups**(resource `$ann`): int

Кількість груп кандидатів – це кількість груп однакових
кандидатів, які використовуватимуться під час навчання.

Кількість можна використовувати для збільшення кількості кандидатів без
необхідності визначати нові параметри для кандидатів.

Дивіться
[fann_get_cascade_num_candidates()](function.fann-get-cascade-num-candidates.md)
для опису того, які нейрони-кандидати будуть згенеровані цим
параметром.

Кількість груп за замовчуванням дорівнює 2.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Кількість груп кандидатів або **`false`** у разі виникнення
помилки.

### Дивіться також

- [fann_set_cascade_num_candidate_groups()](function.fann-set-cascade-num-candidate-groups.md) -
Встановлює кількість груп кандидатів
