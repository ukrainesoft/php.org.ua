- [« fann_shuffle_train_data](function.fann-shuffle-train-data.md)
- [fann_test_data »](function.fann-test-data.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Отримати копію підмножини з навчальних даних

# fann_subset_train_data

(PECL fann u003d 1.0.0)

fann_subset_train_data — Отримати копію підмножини з навчальних даних

### Опис

**fann_subset_train_data**(resource `$data`, int `$pos`, int `$length`):
resource

Повертає копію підмножини з навчальних даних ресурсів, що починаються
з `pos` та довжиною `length` елементів.

`fann_subset_train_data(train_data, 0, fann_length_train_data(train_data))`
робить те саме, що і
[fann_duplicate_train_data()](function.fann-duplicate-train-data.md)

### Список параметрів

`data`
Ресурс (resource) навчальних даних нейронної мережі.

`pos`
Початкова позиція.

`length`
Кількість елементів, що копіюються.

### Значення, що повертаються

Повертає ресурс (resource) навчальних даних, або **`false`** у разі
виникнення помилки.

### Дивіться також

- [fann_duplicate_train_data()](function.fann-duplicate-train-data.md) -
Повертає точну копію тренувальних даних
