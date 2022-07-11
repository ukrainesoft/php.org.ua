- [« Функції Fann](ref.fann.md)
- [fann_cascadetrain_on_file
»](function.fann-cascadetrain-on-file.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Навчання на всьому наборі даних протягом певного періоду
часу за допомогою алгоритму Cascade2

# fann_cascadetrain_on_data

(PECL fann u003d 1.0.0)

fann_cascadetrain_on_data — Навчання на всьому наборі даних протягом
певного періоду часу за допомогою алгоритму Cascade2

### Опис

**fann_cascadetrain_on_data**(
resource `$ann`,
resource `$data`,
int `$max_neurons`,
int `$neurons_between_reports`,
float `$desired_error`
): bool

Фракція каскадного виведення є числом від 0 до 1 і визначає,
наскільки сильно має змінитися значення
[fann_get_MSE()](function.fann-get-mse.md) в
[fann_get_cascade_output_stagnation_epochs()](function.fann-get-cascade-output-stagnation-epochs.md)
під час навчання вихідних з'єднань, для того, щоб навчання не
стагнувало. Якщо навчання стагнувало, навчання вихідних
з'єднань буде завершено та будуть підготовлені нові кандидати.

Це навчання використовує параметри fann_set_cascade\_...,
але також воно використовує інший навчальний алгоритм як внутрішній
навчального алгоритму. Цей алгоритм може бути заданий як
**`FANN_TRAIN_RPROP`** або **`FANN_TRAIN_QUICKPROP`** за допомогою
[fann_set_training_algorithm()](function.fann-set-training-algorithm.md),
та параметри, задані для цих навчальних алгоритмів, також будуть
враховуватись у каскадному навчанні.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`data`
Ресурс (resource) навчальних даних нейронної мережі.

`max_neurons`
Максимальна кількість нейронів для додавання до мережі.

`neurons_between_reports`
Друк звіту про статус відбуватиметься через задане в цьому
Параметр число нейронів. Якщо заданий нуль, то друк не відбуватиметься
буде.

`desired_error`
Бажана [fann_get_MSE()](function.fann-get-mse.md) або
[fann_get_bit_fail()](function.fann-get-bit-fail.md), в залежності від
обраною за допомогою
[fann_set_train_stop_function()](function.fann-set-train-stop-function.md)
зупинної функції.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_train_on_data()](function.fann-train-on-data.md) - Навчання
на всьому обсязі даних на часовому інтервалі
- [fann_cascadetrain_on_file()](function.fann-cascadetrain-on-file.md) -
Навчання на даних прочитаних із файлу за допомогою алгоритму Cascade2
