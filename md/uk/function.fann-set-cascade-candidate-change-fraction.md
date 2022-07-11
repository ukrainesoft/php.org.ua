- [«
fann_set_cascade_activation_steepnesses](function.fann-set-cascade-activation-steepnesses.md)
- [fann_set_cascade_candidate_limit
»](function.fann-set-cascade-candidate-limit.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- встановлює частку каскадної зміни кандидата

# fann_set_cascade_candidate_change_fraction

(PECL fann u003d 1.0.0)

fann_set_cascade_candidate_change_fraction — Встановлює частку
каскадної зміни кандидата

### Опис

**fann_set_cascade_candidate_change_fraction**(resource `$ann`, float
`$cascade_candidate_change_fraction`): bool

Встановлює частку каскадної зміни кандидата.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`cascade_candidate_change_fraction`
Частка каскадної зміни кандидата.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_cascade_candidate_change_fraction()](function.fann-get-cascade-candidate-change-fraction.md) -
Повертає частку зміни каскаду кандидата
