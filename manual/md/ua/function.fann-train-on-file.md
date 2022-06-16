- [« fann_train_on_data](function.fann-train-on-data.md)
- [fann_train »] (function.fann-train.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Навчання на повному наборі даних, прочитаному з файлу, на тимчасовому
інтервалі

# fann_train_on_file

(PECL fann u003d 1.0.0)

fann_train_on_file — Навчання на повному наборі даних, прочитаному з
файлу, на тимчасовому інтервалі

### Опис

**fann_train_on_file**(
resource `$ann`,
string `$filename`,
int `$max_epochs`,
int `$epochs_between_reports`,
float `$desired_error`
): bool

Навчання на повному наборі даних, прочитаному з файлу, на тимчасовому
інтервалі.

Це навчання використовує алгоритм, вибраний функцією
[fann_set_training_algorithm()](function.fann-set-training-algorithm.md)
та набір параметрів для цих алгоритмів.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`filename`
Файл, який містить навчальні дані

`max_epochs`
Максимальна кількість епох, яка має тривати навчання

`epochs_between_reports`
Кількість епох між викликами функції користувача. Якщо одно
нулю, то функція не запускатиметься.

`desired_error`
Бажана [fann_get_MSE()](function.fann-get-mse.md) або
[fann_get_bit_fail()](function.fann-get-bit-fail.md), в залежності від
вибраної функції зупинки
[fann_set_train_stop_function()](function.fann-set-train-stop-function.md)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_train_on_data()](function.fann-train-on-data.md) - Навчання
на всьому обсязі даних на часовому інтервалі
- [fann_train_epoch()](function.fann-train-epoch.md) - Навчання в
протягом однієї епохи
- [fann_get_bit_fail()](function.fann-get-bit-fail.md) - Кількість
бітів збою
- [fann_get_MSE()](function.fann-get-mse.md) - Зчитує
середньоквадратичну помилку мережі
- [fann_set_train_stop_function()](function.fann-set-train-stop-function.md) -
Встановлює функцію зупинки під час тренування.
- [fann_set_training_algorithm()](function.fann-set-training-algorithm.md) -
Встановлює алгоритм навчання
- [fann_set_callback()](function.fann-set-callback.md) -
Встановлює callback-функцію для використання під час навчання
