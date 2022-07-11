- [«
fann_set_cascade_min_out_epochs](function.fann-set-cascade-min-out-epochs.md)
- [fann_set_cascade_output_change_fraction
»](function.fann-set-cascade-output-change-fraction.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- встановлює кількість груп кандидатів

# fann_set_cascade_num_candidate_groups

(PECL fann u003d 1.0.0)

fann_set_cascade_num_candidate_groups — Встановлює кількість груп
кандидатів

### Опис

**fann_set_cascade_num_candidate_groups**(resource `$ann`, int
`$cascade_num_candidate_groups`): bool

Встановлює кількість груп кандидатів.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`cascade_num_candidate_groups`
Кількість груп кандидатів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_cascade_num_candidate_groups()](function.fann-get-cascade-num-candidate-groups.md) -
Повертає кількість груп кандидатів
