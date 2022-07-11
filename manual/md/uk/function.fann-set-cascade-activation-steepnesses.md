- [«
fann_set_cascade_activation_functions](function.fann-set-cascade-activation-functions.md)
- [fann_set_cascade_candidate_change_fraction
»](function.fann-set-cascade-candidate-change-fraction.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює масив крутості включення кандидатів у каскад

# fann_set_cascade_activation_steepnesses

(PECL fann u003d 1.0.0)

fann_set_cascade_activation_steepnesses — Встановлює масив крутості
включення кандидатів у каскад

### Опис

**fann_set_cascade_activation_steepnesses**(resource `$ann`, array
`$cascade_activation_steepnesses_count`): bool

Встановлює масив крутості включення кандидатів у каскад.

Дивіться
[fann_get_cascade_num_candidates()](function.fann-get-cascade-num-candidates.md)
для опису того, які нейрони-кандидати будуть згенеровані цим
масивом.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`cascade_activation_steepnesses_count`
Масив крутості включення кандидатів у каскад.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_cascade_activation_steepnesses()](function.fann-get-cascade-activation-steepnesses.md) -
Повертає крутість каскадної активації
- [fann_get_cascade_activation_steepnesses_count()](function.fann-get-cascade-activation-steepnesses-count.md) -
Кількість крутості активації
