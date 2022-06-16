- [«
fann_get_cascade_num_candidate_groups](function.fann-get-cascade-num-candidate-groups.md)
- [fann_get_cascade_output_change_fraction
»](function.fann-get-cascade-output-change-fraction.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- повертає кількість кандидатів, використаних під час навчання

# fann_get_cascade_num_candidates

(PECL fann u003d 1.0.0)

fann_get_cascade_num_candidates — Повертає кількість кандидатів,
використаних під час навчання

### Опис

**fann_get_cascade_num_candidates**(resource `$ann`): int

Кількість кандидатів, використаних під час навчання (розраховується
шляхом перемноження
[fann_get_cascade_activation_functions_count()](function.fann-get-cascade-activation-functions-count.md),
[fann_get_cascade_activation_steepnesses_count()](function.fann-get-cascade-activation-steepnesses-count.md)
і
[fann_get_cascade_num_candidate_groups()](function.fann-get-cascade-num-candidate-groups.md)).

Фактичні кандидати визначаються масивами
[fann_get_cascade_activation_functions()](function.fann-get-cascade-activation-functions.md)
і
[fann_get_cascade_activation_steepnesses()](function.fann-get-cascade-activation-steepnesses.md).
Ці масиви визначають функції активації та крутості активації,
використовуються для нейронів-кандидатів. Якщо є 2 функції активації у
масиві функцій активації та 3 крутості в масиві крутості, тоді буде 2
x 3 u003d 6 різних кандидатів, які будуть навчені. Ці 6 різних
кандидатів можуть бути скопійовані в кілька груп кандидатів, де
єдина різниця між цими групами – початкові ваги. Якщо
кількість груп дорівнює 2, кількість нейронів-кандидатів буде 2 x 3
x 2 u003d 12. Кількість груп кандидатів визначається
[fann_set_cascade_num_candidate_groups()](function.fann-set-cascade-num-candidate-groups.md).

Кількість кандидатів за замовчуванням – 6 x 4 x 2 u003d 48.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Кількість кандидатів, використаних під час навчання або **`false`**
у разі виникнення помилки.

### Дивіться також

- [fann_get_cascade_activation_functions()](function.fann-get-cascade-activation-functions.md) -
Повертає функції каскадної активації
- [fann_get_cascade_activation_functions_count()](function.fann-get-cascade-activation-functions-count.md) -
Повертає кількість функцій каскадної активації
- [fann_get_cascade_activation_steepnesses()](function.fann-get-cascade-activation-steepnesses.md) -
Повертає крутість каскадної активації
- [fann_get_cascade_activation_steepnesses_count()](function.fann-get-cascade-activation-steepnesses-count.md) -
Кількість крутості активації
- [fann_get_cascade_num_candidate_groups()](function.fann-get-cascade-num-candidate-groups.md) -
Повертає кількість груп кандидатів
