- [« fann_set_weight_array](function.fann-set-weight-array.md)
- [fann_shuffle_train_data »](function.fann-shuffle-train-data.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Створення зв'язку в мережі

# fann_set_weight

(PECL fann u003d 1.0.0)

fann_set_weight — Створення зв'язку в мережі

### Опис

**fann_set_weight**(
resource `$ann`,
int `$from_neuron`,
int `$to_neuron`,
float `$weight`
): bool

Створює зв'язок у мережі.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`from_neuron`
Початковий нейрон

`to_neuron`
Кінцевий нейрон

`weight`
Вага зв'язку

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.
