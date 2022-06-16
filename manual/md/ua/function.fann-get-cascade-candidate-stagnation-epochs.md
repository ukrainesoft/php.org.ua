- [«
fann_get_cascade_candidate_limit](function.fann-get-cascade-candidate-limit.md)
- [fann_get_cascade_max_cand_epochs
»](function.fann-get-cascade-max-cand-epochs.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає кількість періодів застою каскаду кандидата

# fann_get_cascade_candidate_stagnation_epochs

(PECL fann u003d 1.0.0)

fann_get_cascade_candidate_stagnation_epochs — Повертає кількість
періодів застою каскаду кандидата

### Опис

**fann_get_cascade_candidate_stagnation_epochs**(resource `$ann`): int

Кількість періодів застою каскаду кандидата визначає кількість
періодів, яким дозволено продовжити навчання без зміни MSE на
частку
[fann_get_cascade_candidate_change_fraction()](function.fann-get-cascade-candidate-change-fraction.md).

Дивіться додаткову інформацію про цей параметр у
[fann_get_cascade_candidate_change_fraction()](function.fann-get-cascade-candidate-change-fraction.md).

За замовчуванням кількість періодів застою каскаду кандидата дорівнює 12.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Кількість періодів застою каскаду кандидата або **`false`** у разі
виникнення помилки.

### Дивіться також

- [fann_set_cascade_candidate_stagnation_epochs()](function.fann-set-cascade-candidate-stagnation-epochs.md) -
Встановлює кількість каскадних періодів застою кандидатів
- [fann_get_cascade_candidate_change_fraction()](function.fann-get-cascade-candidate-change-fraction.md) -
Повертає частку зміни каскаду кандидата
