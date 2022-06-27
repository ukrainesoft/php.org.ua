- [« fann_randomize_weights](function.fann-randomize-weights.md)
- [fann_reset_errno »](function.fann-reset-errno.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Читає файл, у якому зберігаються дані навчання

# fann_read_train_from_file

(PECL fann u003d 1.0.0)

fann_read_train_from_file — Читає файл, у якому зберігаються дані
навчання

### Опис

**fann_read_train_from_file**(string `$filename`): resource

Читає файл, де зберігаються дані навчання.

### Список параметрів

`filename`
Вхідний файл у такому форматі:

``` txtcode
num_train_data num_input num_output
вхідні дані, розділені пробілом
вихідні дані, розділені пробілом

.
.
.

вхідні дані, розділені пробілом
вихідні дані, розділені пробілом
````

### Значення, що повертаються

Повертає ресурс (resource) навчальних даних, або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **fann_read_train_from_file()****

` <?php$train_data u003d fann_read_train_from_file("xor.data");if ($train_data) {     // Зробіть що-небудь з $train_data для функції XOR}?

Вміст xor.data

``` txtcode
4 2 1
-1 -1
-1
-1 1
1
1 -1
1
1 1
-1
````

### Дивіться також

- [fann_train_on_data()](function.fann-train-on-data.md) - Навчання
на всьому обсязі даних на часовому інтервалі
- [fann_destroy_train()](function.fann-destroy-train.md) -
Знищує тренувальні дані
- [fann_save_train()](function.fann-save-train.md) - Зберігає
структуру навчання у файл
