- [« fann_subset_train_data](function.fann-subset-train-data.md)
- [fann_test »](function.fann-test.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Тестування набору навчальних даних та обчислення MSE для нього

# fann_test_data

(PECL fann u003d 1.0.0)

fann_test_data — Тестування набору навчальних даних та обчислення MSE
для нього

### Опис

**fann_test_data**(resource `$ann`, resource `$data`): float

Тестування набору навчальних даних та обчислення MSE для нього.

Ця функція оновлює MSE та значення біт невдачі.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`data`
Ресурс (resource) навчальних даних нейронної мережі.

### Значення, що повертаються

Оновлена MSE, або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_train_on_data()](function.fann-train-on-data.md) - Навчання
на всьому обсязі даних на часовому інтервалі
- [fann_train_epoch()](function.fann-train-epoch.md) - Навчання в
протягом однієї епохи
- [fann_get_bit_fail()](function.fann-get-bit-fail.md) - Кількість
бітів збою
- [fann_get_MSE()](function.fann-get-mse.md) - Зчитує
середньоквадратичну помилку мережі
- [fann_set_training_algorithm()](function.fann-set-training-algorithm.md) -
Встановлює алгоритм навчання
