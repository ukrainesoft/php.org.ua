- [« fann_test](function.fann-test.md)
- [fann_train_on_data »](function.fann-train-on-data.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Навчання протягом однієї епохи

# fann_train_epoch

(PECL fann u003d 1.0.0)

fann_train_epoch - Навчання протягом однієї епохи

### Опис

**fann_train_epoch**(resource `$ann`, resource `$data`): float

Навчання протягом однієї епохи. Одна епоха визначає, що всі учні
дані будуть використані рівно один раз.

Ця функція повертає повідомлення про помилку MSE, що розраховується або до,
або під час фактичного навчання. Це не актуальне значення MSE,
пораховане після навчання протягом епохи, але, оскільки для його розрахунку
довелося б перебрати навчальний набір ще раз, то зручніше буде
використовувати це значення.

Алгоритм навчання використовуваний цією функцією вибирається за допомогою
[fann_set_training_algorithm()](function.fann-set-training-algorithm.md).

### Список параметрів

`ann`
Ресурс нейронної мережі.

`data`
Ресурс (resource) навчальних даних нейронної мережі.

### Значення, що повертаються

MSE або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_train_on_data()](function.fann-train-on-data.md) - Навчання
на всьому обсязі даних на часовому інтервалі
- [fann_test_data()](function.fann-test-data.md) - Тестування
набору навчальних даних та обчислення MSE для нього
- [fann_get_MSE()](function.fann-get-mse.md) - Зчитує
середньоквадратичну помилку мережі
- [fann_set_training_algorithm()](function.fann-set-training-algorithm.md) -
Встановлює алгоритм навчання
