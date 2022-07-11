- [«
fann_cascadetrain_on_data](function.fann-cascadetrain-on-data.md)
- [fann_clear_scaling_params
»](function.fann-clear-scaling-params.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Навчання на даних прочитаних із файлу за допомогою алгоритму Cascade2

# fann_cascadetrain_on_file

(PECL fann u003d 1.0.0)

fann_cascadetrain_on_file — Навчання на даних прочитаних з файлу з
за допомогою алгоритму Cascade2

### Опис

**fann_cascadetrain_on_file**(
resource `$ann`,
string `$filename`,
int `$max_neurons`,
int `$neurons_between_reports`,
float `$desired_error`
): bool

Робить те саме, що і
[fann_cascadetrain_on_data()](function.fann-cascadetrain-on-data.md),
але читає дані безпосередньо із файла.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`filename`
Файл із даними.

`max_neurons`
Максимальна кількість нейронів у мережі.

`neurons_between_reports`
Кількість нейронів між виведенням звітів про стан. Якщо поставити 0, то
звіти не друкуватимуться.

`desired_error`
Вибрані [fann_get_MSE()](function.fann-get-mse.md) або
[fann_get_bit_fail()](function.fann-get-bit-fail.md), в залежності від
обраною за допомогою
[fann_set_train_stop_function()](function.fann-set-train-stop-function.md)
функції зупинки.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_train_on_data()](function.fann-train-on-data.md) - Навчання
на всьому обсязі даних на часовому інтервалі
- [fann_cascadetrain_on_data()](function.fann-cascadetrain-on-data.md) -
Навчання на всьому наборі даних протягом певного періоду
часу за допомогою алгоритму Cascade2
