- [«
fann_set_cascade_output_change_fraction](function.fann-set-cascade-output-change-fraction.md)
- [fann_set_cascade_weight_multiplier
»](function.fann-set-cascade-weight-multiplier.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює кількість періодів стагнації каскадного виводу

# fann_set_cascade_output_stagnation_epochs

(PECL fann u003d 1.0.0)

fann_set_cascade_output_stagnation_epochs — Встановлює кількість
періодів стагнації каскадного виводу

### Опис

**fann_set_cascade_output_stagnation_epochs**(resource `$ann`, int
`$cascade_output_stagnation_epochs`): bool

Встановлює кількість періодів стагнації каскадного виводу.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`cascade_output_stagnation_epochs`
Кількість епох стагнації каскадного виходу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_cascade_output_stagnation_epochs()](function.fann-get-cascade-output-stagnation-epochs.md) -
Повертає кількість каскадних періодів застою кандидатів
