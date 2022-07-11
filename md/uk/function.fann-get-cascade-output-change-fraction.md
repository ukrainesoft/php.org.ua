- [«
fann_get_cascade_num_candidates](function.fann-get-cascade-num-candidates.md)
- [fann_get_cascade_output_stagnation_epochs
»](function.fann-get-cascade-output-stagnation-epochs.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає частку зміни виходу каскаду

# fann_get_cascade_output_change_fraction

(PECL fann u003d 1.0.0)

fann_get_cascade_output_change_fraction — Повертає частку зміни
виходу каскаду

### Опис

**fann_get_cascade_output_change_fraction**(resource `$ann`): float

Частка зміни виходу каскаду - число від 0 до 1, що визначає,
наскільки більша частина значення
[fann_get_MSE()](function.fann-get-mse.md) має змінитися в
[fann_get_cascade_output_stagnation_epochs()](function.fann-get-cascade-output-stagnation-epochs.md)
під час навчання вихідних з'єднань, щоб навчання, щоб не
застоювалося. Якщо навчання зупиниться, навчання вихідних з'єднань
буде припинено та будуть підготовлені нові кандидати.

Це означає, що якщо MSE не змінюється на долю
**fann_get_cascade_output_change_fraction()** протягом періоду
[fann_get_cascade_output_stagnation_epochs()](function.fann-get-cascade-output-stagnation-epochs.md),
навчання вихідних з'єднань припиниться, тому що навчання
зупинилося.

Якщо частка зміни виходу каскаду мала, вихідні з'єднання будуть
навчатися більше, і якщо частка висока, вони навчатимуться менше.

Частка зміни виходу каскаду за промовчанням становить 0.01, що
еквівалентно зміні MSE на 1%.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Частка зміни виходу каскаду або **`false`** у разі виникнення
помилки.

### Дивіться також

- [fann_set_cascade_output_change_fraction()](function.fann-set-cascade-output-change-fraction.md) -
Встановлює частку зміни каскадних вихідних даних
- [fann_get_MSE()](function.fann-get-mse.md) - Зчитує
середньоквадратичну помилку мережі
- [fann_get_cascade_output_stagnation_epochs()](function.fann-get-cascade-output-stagnation-epochs.md) -
Повертає кількість каскадних періодів застою кандидатів
