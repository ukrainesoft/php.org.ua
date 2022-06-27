- [« fann_get_layer_array](function.fann-get-layer-array.md)
- [fann_get_learning_rate »](function.fann-get-learning-rate.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає імпульс навчання

# fann_get_learning_momentum

(PECL fann u003d 1.0.0)

fann_get_learning_momentum - Повертає імпульс навчання

### Опис

**fann_get_learning_momentum**(resource `$ann`): float

Імпульс навчання можна використовувати для прискорення навчання
**`FANN_TRAIN_INCREMENTAL`**. Проте надто високий імпульс не принесе
користі тренувань. Встановлення імпульсу на 0 буде рівносильним відключенню
параметра імпульсу Рекомендоване значення цього параметра становить від
0,0 до 1,0.

Імпульс за промовчанням дорівнює 0.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

Імпульс навчання або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_set_learning_momentum()](function.fann-set-learning-momentum.md) -
Встановлює імпульс навчання
- [fann_set_training_algorithm()](function.fann-set-training-algorithm.md) -
Встановлює алгоритм навчання
