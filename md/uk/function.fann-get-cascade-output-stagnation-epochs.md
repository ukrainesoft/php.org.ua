- [«
fann_get_cascade_output_change_fraction](function.fann-get-cascade-output-change-fraction.md)
- [fann_get_cascade_weight_multiplier
»](function.fann-get-cascade-weight-multiplier.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає кількість каскадних періодів застою кандидатів

# fann_get_cascade_output_stagnation_epochs

(PECL fann u003d 1.0.0)

fann_get_cascade_output_stagnation_epochs — Повертає кількість
каскадних періодів застою кандидатів

### Опис

**fann_get_cascade_output_stagnation_epochs**(resource `$ann`): int

Кількість каскадних періодів застою кандидатів визначає кількість
періодів навчання, яке буде продовжено без зміни оцінки MSE з
допомогою
[fann_get_cascade_output_change_fraction()](function.fann-get-cascade-output-change-fraction.md).

Дивіться додаткову інформацію про цей параметр у
[fann_get_cascade_output_change_fraction()](function.fann-get-cascade-output-change-fraction.md).

За замовчуванням кількість періодів застою каскадного виводу дорівнює 12.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Кількість каскадних періодів застою кандидатів або **`false`** у разі
виникнення помилки.

### Дивіться також

- [fann_set_cascade_output_stagnation_epochs()](function.fann-set-cascade-output-stagnation-epochs.md) -
Встановлює кількість періодів стагнації каскадного виводу
- [fann_get_cascade_output_change_fraction()](function.fann-get-cascade-output-change-fraction.md) -
Повертає частку зміни виходу каскаду
