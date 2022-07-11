- [«
fann_get_cascade_activation_steepnesses_count](function.fann-get-cascade-activation-steepnesses-count.md)
- [fann_get_cascade_candidate_change_fraction
»](function.fann-get-cascade-candidate-change-fraction.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає крутість каскадної активації

# fann_get_cascade_activation_steepnesses

(PECL fann u003d 1.0.0)

fann_get_cascade_activation_steepnesses — Повертає каскадну крутизну
активації

### Опис

**fann_get_cascade_activation_steepnesses**(resource `$ann`): array

Масив крутості каскадної активації – це масив різних функцій
активації, які використовуються кандидатами.

Дивіться
[fann_get_cascade_num_candidates()](function.fann-get-cascade-num-candidates.md)
для опису того, які кандидатні нейрони генеруватимуться цим
масивом.

Крутизна активації за промовчанням: {0,25, 0,50, 0,75, 1,00}.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Крутизна каскадної активації або **`false`** у разі виникнення
помилки.

### Дивіться також

- [fann_get_cascade_activation_steepnesses_count()](function.fann-get-cascade-activation-steepnesses-count.md) -
Кількість крутості активації
- [fann_set_cascade_activation_steepnesses()](function.fann-set-cascade-activation-steepnesses.md) -
Встановлює масив крутості включення кандидатів у каскад
