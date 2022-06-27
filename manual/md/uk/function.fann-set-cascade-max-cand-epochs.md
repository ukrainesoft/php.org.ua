- [«
fann_set_cascade_candidate_stagnation_epochs](function.fann-set-cascade-candidate-stagnation-epochs.md)
- [fann_set_cascade_max_out_epochs
»](function.fann-set-cascade-max-out-epochs.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- встановлює найбільший період кандидата

# fann_set_cascade_max_cand_epochs

(PECL fann u003d 1.0.0)

fann_set_cascade_max_cand_epochs — Встановлює максимальний період
кандидата

### Опис

**fann_set_cascade_max_cand_epochs**(resource `$ann`, int
`$cascade_max_cand_epochs`): bool

Встановлює максимальний період кандидата.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`cascade_max_cand_epochs`
Максимальний період кандидата.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_cascade_max_cand_epochs()](function.fann-get-cascade-max-cand-epochs.md) -
Отримує найбільший період кандидата
