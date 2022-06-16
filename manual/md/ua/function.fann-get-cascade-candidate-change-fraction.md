- [«
fann_get_cascade_activation_steepnesses](function.fann-get-cascade-activation-steepnesses.md)
- [fann_get_cascade_candidate_limit
»](function.fann-get-cascade-candidate-limit.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає частку зміни каскаду кандидата

# fann_get_cascade_candidate_change_fraction

(PECL fann u003d 1.0.0)

fann_get_cascade_candidate_change_fraction — Повертає частку зміни
каскаду кандидата

### Опис

**fann_get_cascade_candidate_change_fraction**(resource `$ann`): float

Частка зміни каскаду кандидата – це число від 0 до 1, що визначає,
наскільки велике значення [fann_get_MSE()](function.fann-get-mse.md),
яке має змінитися в межах
[fann_get_cascade_candidate_stagnation_epochs()](function.fann-get-cascade-candidate-stagnation-epochs.md)
під час навчання нейронів-кандидатів, щоби навчання не застоювалося.
Якщо навчання застоюється, навчання нейронів-кандидатів припиняється і
обирається найкращий кандидат.

Це означає, що якщо MSE не змінюється на долю
**fann_get_cascade_candidate_change_fraction()** протягом періоду
[fann_get_cascade_candidate_stagnation_epochs()](function.fann-get-cascade-candidate-stagnation-epochs.md),
навчання нейронів-кандидатів припиняється, тому що навчання
зупинилося.

Якщо частка зміни каскаду кандидатів мала, нейрони-кандидати будуть
навчатися більше, і якщо частка висока, вони навчатимуться менше.

Частка зміни каскаду за замовчуванням становить 0.01, що
еквівалентно зміні MSE на 1%.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Частка зміни каскаду кандидата або **`false`** у разі виникнення
помилки.

### Дивіться також

- [fann_set_cascade_candidate_change_fraction()](function.fann-set-cascade-candidate-change-fraction.md) -
Встановлює частку каскадної зміни кандидата
- [fann_get_MSE()](function.fann-get-mse.md) - Зчитує
середньоквадратичну помилку мережі
- [fann_get_cascade_candidate_stagnation_epochs()](function.fann-get-cascade-candidate-stagnation-epochs.md) -
Повертає кількість періодів застою каскаду кандидата
