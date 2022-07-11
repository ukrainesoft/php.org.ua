- [« fann_print_error](function.fann-print-error.md)
- [fann_read_train_from_file
»](function.fann-read-train-from-file.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Привласнює кожному з'єднанню випадкову вагу між min_weight та
max_weight

# fann_randomize_weights

(PECL fann u003d 1.0.0)

fann_randomize_weights — надає кожному з'єднанню випадкову вагу
між min_weight та max_weight

### Опис

**fann_randomize_weights**(resource `$ann`, float `$min_weight`, float
`$max_weight`): bool

Надає кожному з'єднанню випадкову вагу між `min_weight` і
`max_weight`

З початку випадковий вага в діапазоні від -0,1 до 0,1.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`min_weight`
Мінімальне значення ваги.

`max_weight`
Максимальне значення ваги.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_init_weights()](function.fann-init-weights.md) -
Ініціалізує ваги за допомогою алгоритму Widrow+Nguyen
