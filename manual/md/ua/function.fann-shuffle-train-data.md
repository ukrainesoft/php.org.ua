- [« fann_set_weight](function.fann-set-weight.md)
- [fann_subset_train_data »](function.fann-subset-train-data.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Перемішує навчальні дані у випадковому порядку

# fann_shuffle_train_data

(PECL fann u003d 1.0.0)

fann_shuffle_train_data - Перемішує навчальні дані у випадковому
порядку

### Опис

**fann_shuffle_train_data**(resource `$train_data`): bool

Перемішує навчальні дані у випадковому порядку. Рекомендується
використовувати при інкрементальному навчанні, але ніяк не впливає на
пакетне навчання.

### Список параметрів

`train_data`
Ресурс (resource) навчальних даних нейронної мережі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.
