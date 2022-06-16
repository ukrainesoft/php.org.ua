- [«
fann_set_cascade_num_candidate_groups](function.fann-set-cascade-num-candidate-groups.md)
- [fann_set_cascade_output_stagnation_epochs
»](function.fann-set-cascade-output-stagnation-epochs.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює частку зміни каскадних вихідних даних

# fann_set_cascade_output_change_fraction

(PECL fann u003d 1.0.0)

fann_set_cascade_output_change_fraction — Встановлює частку зміни
каскадних вихідних даних

### Опис

**fann_set_cascade_output_change_fraction**(resource `$ann`, float
`$cascade_output_change_fraction`): bool

Встановлює частку зміни каскадних вихідних даних.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`cascade_output_change_fraction`
Частка змін каскадних вихідних даних.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_cascade_output_change_fraction()](function.fann-get-cascade-output-change-fraction.md) -
Повертає частку зміни виходу каскаду
