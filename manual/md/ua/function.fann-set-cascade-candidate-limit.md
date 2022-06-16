- [«
fann_set_cascade_candidate_change_fraction](function.fann-set-cascade-candidate-change-fraction.md)
- [fann_set_cascade_candidate_stagnation_epochs
»](function.fann-set-cascade-candidate-stagnation-epochs.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- встановлює ліміт кандидатів

# fann_set_cascade_candidate_limit

(PECL fann u003d 1.0.0)

fann_set_cascade_candidate_limit - Встановлює ліміт кандидатів

### Опис

**fann_set_cascade_candidate_limit**(resource `$ann`, float
`$cascade_candidate_limit`): bool

Встановлює ліміт кандидатів.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`cascade_candidate_limit`
Ліміт кандидатів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_cascade_candidate_limit()](function.fann-get-cascade-candidate-limit.md) -
Повертає межу кандидата
