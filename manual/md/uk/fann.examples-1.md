- [« Приклади](fann.examples.md)
- [Функції Fann»] (ref.fann.md)

- [PHP Manual](index.md)
- [Приклади](fann.examples.md)
- Навчання XOR

## Навчання XOR

Цей приклад показує, як навчити мережу функції XOR

**Приклад #1 Файл xor.data**

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

**Приклад #2 Просте навчання**

` <?php$num_input u003d 2;$num_output u003d 1;$num_layers u003d 3;$num_neurons_hidden u003d 3;$desired_error u003d 0.001;$max_epochs u003d 500000;$epochs_between_reports u003d 1000;$ann u003d fann_create_standard($num_layers, $num_input, $num_neurons_hidden,$num_output);if($ann) {    fann_set_activation_function_hidden($ann, FANN_SIGMOID_SYMMETRIC); fann_set_activation_function_output($ann, FANN_SIGMOID_SYMMETRIC); $filename u003d dirname(__FILE__) . "/xor.data"; if (fann_train_on_file($ann, $filename, $max_epochs, $epochs_between_reports, $desired_error))       fann_save($ann, dirname(__FILE__)). fann_destroy($ann);}?> `

Цей приклад показує, як прочитати з файлу тренувальні дані та
перевірити роботу мережі.

**Приклад #3 Тестування**

`<?php$train_file u003d (dirname(__FILE__) . "/xor_float.net");if (!is_file($train_file))   die("The file xor_float.net has not been in| it");$ann u003d fann_create_from_file($train_file);if (!$ann)   die("ANN could not be created");$input u003d array(-1, 1);$calc_out input);printf("xor test (%f,%f) -> %f
", $input[0], $input[1], $calc_out[0]);fann_destroy($ann);?> `
