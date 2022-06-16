- [«
fann_set_cascade_candidate_limit](function.fann-set-cascade-candidate-limit.md)
- [fann_set_cascade_max_cand_epochs
»](function.fann-set-cascade-max-cand-epochs.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- встановлює кількість каскадних періодів застою кандидатів

# fann_set_cascade_candidate_stagnation_epochs

(PECL fann u003d 1.0.0)

fann_set_cascade_candidate_stagnation_epochs — Встановлює кількість
каскадних періодів застою кандидатів

### Опис

**fann_set_cascade_candidate_stagnation_epochs**(resource `$ann`, int
`$cascade_candidate_stagnation_epochs`): bool

Встановлює кількість каскадних періодів застою кандидатів.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`cascade_candidate_stagnation_epochs`
Кількість каскадних періодів застою кандидатів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_cascade_candidate_stagnation_epochs()](function.fann-get-cascade-candidate-stagnation-epochs.md) -
Повертає кількість періодів застою каскаду кандидата
