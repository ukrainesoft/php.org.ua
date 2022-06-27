- [«
geoip_time_zone_by_country_and_region](function.geoip-time-zone-by-country-and-region.md)
- [Вступ »](intro.fann.md)

- [PHP Manual](index.md)
- [Інші базові модулі](refs.basic.other.md)
- Швидка штучна нейронна мережа (Fast Artificial Neural Network
або FANN)

# Швидка штучна нейронна мережа (Fast Artificial Neural Network або FANN)

- [Вступ](intro.fann.md)
- [Встановлення та налаштування](fann.setup.md)
- [Вимоги](fann.requirements.md)
- [Установка](fann.installation.md)
- [Налаштування під час виконання](fann.configuration.md)
- [Типи ресурсів](fann.resources.md)
- [Предвизначені константи](fann.constants.md)
- [Приклади](fann.examples.md)
- [Навчання XOR](fann.examples-1.md)
- [Функції Fann](ref.fann.md)
- [fann_cascadetrain_on_data](function.fann-cascadetrain-on-data.md)
— Навчання на всьому наборі даних протягом певного періоду
часу за допомогою алгоритму Cascade2
- [fann_cascadetrain_on_file](function.fann-cascadetrain-on-file.md)
— Навчання на даних прочитаних із файлу за допомогою алгоритму
Cascade2
- [fann_clear_scaling_params](function.fann-clear-scaling-params.md)
— Очищення параметрів масштабування
- [fann_copy](function.fann-copy.md) — Створення копії структури
fann
- [fann_create_from_file](function.fann-create-from-file.md) -
Створює нейронну мережу зі зворотним поширенням помилки з
конфігураційного файлу
- [fann_create_shortcut_array](function.fann-create-shortcut-array.md)
- Створює стандартну нейронну мережу зворотного розповсюдження,
яка не повністю підключена та має швидкі з'єднання
- [fann_create_shortcut](function.fann-create-shortcut.md) -
Створює стандартну нейронну мережу зворотного розповсюдження,
яка не повністю підключена та має швидкі з'єднання
- [fann_create_sparse_array](function.fann-create-sparse-array.md)
- Створює стандартну нейронну мережу зворотного розповсюдження,
яка не повністю підключена, використовуючи масив розмірів шарів
- [fann_create_sparse](function.fann-create-sparse.md) - Створює
стандартну нейронну мережу зворотного розповсюдження, яка не
повністю підключена
- [fann_create_standard_array](function.fann-create-standard-array.md)
— Створює стандартну повністю підключену нейронну мережу
зворотного поширення, використовуючи масив розмірів шарів
- [fann_create_standard](function.fann-create-standard.md) -
Створює стандартну повністю підключену нейронну мережу
зворотного розповсюдження
- [fann_create_train_from_callback](function.fann-create-train-from-callback.md)
— створює структуру даних навчання з наданої
користувачем функції
- [fann_create_train](function.fann-create-train.md) - Створює
порожню структуру даних для навчання
- [fann_descale_input](function.fann-descale-input.md) -
Масштабує дані у вхідному векторі після отримання їх на
основі раніше розрахованих параметрів
- [fann_descale_output](function.fann-descale-output.md) -
Масштабує дані у вихідному векторі після отримання їх і
основі раніше розрахованих параметрів
- [fann_descale_train](function.fann-descale-train.md) -
Масштабування вхідних та вихідних даних на основі
попередньо розрахованих параметрів
- [fann_destroy_train](function.fann-destroy-train.md) -
Знищує тренувальні дані
- [fann_destroy](function.fann-destroy.md) - Знищує всю мережу
і правильно звільняє всю пов'язану пам'ять
- [fann_duplicate_train_data](function.fann-duplicate-train-data.md)
— Повертає точну копію тренувальних даних
- [fann_get_activation_function](function.fann-get-activation-function.md)
- Повертає функцію активації
- [fann_get_activation_steepness](function.fann-get-activation-steepness.md)
— Повертає крутість активації для нейрона і
номери шару
- [fann_get_bias_array](function.fann-get-bias-array.md) -
Отримує кількість зсувів у кожному шарі в мережі
- [fann_get_bit_fail_limit](function.fann-get-bit-fail-limit.md)
— Повертає межу збою бітів, використану під час навчання
- [fann_get_bit_fail](function.fann-get-bit-fail.md) -
Кількість бітів збою
- [fann_get_cascade_activation_functions_count](function.fann-get-cascade-activation-functions-count.md)
— Повертає кількість функцій каскадної активації
- [fann_get_cascade_activation_functions](function.fann-get-cascade-activation-functions.md)
— Повертає функції каскадної активації
- [fann_get_cascade_activation_steepnesses_count](function.fann-get-cascade-activation-steepnesses-count.md)
— Кількість крутості активації
- [fann_get_cascade_activation_steepnesses](function.fann-get-cascade-activation-steepnesses.md)
— Повертає крутість каскадної активації
- [fann_get_cascade_candidate_change_fraction](function.fann-get-cascade-candidate-change-fraction.md)
— Повертає частку зміни каскаду кандидата
- [fann_get_cascade_candidate_limit](function.fann-get-cascade-candidate-limit.md)
— Повертає межу кандидата
- [fann_get_cascade_candidate_stagnation_epochs](function.fann-get-cascade-candidate-stagnation-epochs.md)
— Повертає кількість періодів застою каскаду кандидата
- [fann_get_cascade_max_cand_epochs](function.fann-get-cascade-max-cand-epochs.md)
— Отримує найбільший період кандидата
- [fann_get_cascade_max_out_epochs](function.fann-get-cascade-max-out-epochs.md)
— Повертає максимальну кількість періодів
- [fann_get_cascade_min_cand_epochs](function.fann-get-cascade-min-cand-epochs.md)
— Отримує найменший період кандидата
- [fann_get_cascade_min_out_epochs](function.fann-get-cascade-min-out-epochs.md)
— Повертає мінімальну кількість періодів
- [fann_get_cascade_num_candidate_groups](function.fann-get-cascade-num-candidate-groups.md)
— Повертає кількість груп кандидатів
- [fann_get_cascade_num_candidates](function.fann-get-cascade-num-candidates.md)
— Повертає кількість кандидатів, використаних на час
навчання
- [fann_get_cascade_output_change_fraction](function.fann-get-cascade-output-change-fraction.md)
— Повертає частку зміни виходу каскаду
- [fann_get_cascade_output_stagnation_epochs](function.fann-get-cascade-output-stagnation-epochs.md)
— Повертає кількість каскадних періодів застою кандидатів
- [fann_get_cascade_weight_multiplier](function.fann-get-cascade-weight-multiplier.md)
- Повертає множник ваги
- [fann_get_connection_array](function.fann-get-connection-array.md)
— Отримує з'єднання в мережі
- [fann_get_connection_rate](function.fann-get-connection-rate.md)
— Отримує швидкість з'єднання, що використовується під час створення мережі
- [fann_get_errno](function.fann-get-errno.md) - Повертає
останній номер помилки
- [fann_get_errstr](function.fann-get-errstr.md) — Повертає
останній рядок помилки
- [fann_get_layer_array](function.fann-get-layer-array.md) -
Отримує кількість нейронів у кожному шарі мережі
- [fann_get_learning_momentum](function.fann-get-learning-momentum.md)
- Повертає імпульс навчання
- [fann_get_learning_rate](function.fann-get-learning-rate.md) -
Повертає швидкість навчання
- [fann_get_MSE](function.fann-get-mse.md) - Зчитує
середньоквадратичну помилку мережі
- [fann_get_network_type](function.fann-get-network-type.md) -
Отримує тип нейронної мережі
- [fann_get_num_input](function.fann-get-num-input.md) -
Отримує кількість вхідних нейронів
- [fann_get_num_layers](function.fann-get-num-layers.md) -
Отримує кількість шарів у нейронній мережі
- [fann_get_num_output](function.fann-get-num-output.md) -
Отримує кількість вихідних нейронів
- [fann_get_quickprop_decay](function.fann-get-quickprop-decay.md)
— Повертає зниження, яке є фактором, за якого
ваги повинні зменшуватись на кожній ітерації під час навчання
quickprop
- [fann_get_quickprop_mu](function.fann-get-quickprop-mu.md) -
Повертає коефіцієнт mu
- [fann_get_rprop_decrease_factor](function.fann-get-rprop-decrease-factor.md)
— Повертає коефіцієнт зменшення, який використовується під час
навчання RPROP
- [fann_get_rprop_delta_max](function.fann-get-rprop-delta-max.md)
- Повертає максимальний розмір кроку
- [fann_get_rprop_delta_min](function.fann-get-rprop-delta-min.md)
- Повертає мінімальний розмір кроку
- [fann_get_rprop_delta_zero](function.fann-get-rprop-delta-zero.md)
- Повертає початковий розмір кроку
- [fann_get_rprop_increase_factor](function.fann-get-rprop-increase-factor.md)
— Повертає коефіцієнт збільшення, який використовується під час
навчання RPROP
- [fann_get_sarprop_step_error_shift](function.fann-get-sarprop-step-error-shift.md)
- Повертає зрушення помилки кроку sarprop
- [fann_get_sarprop_step_error_threshold_factor](function.fann-get-sarprop-step-error-threshold-factor.md)
- Повертає пороговий коефіцієнт помилки кроку sarprop
- [fann_get_sarprop_temperature](function.fann-get-sarprop-temperature.md)
- Повертає температуру sarprop
- [fann_get_sarprop_weight_decay_shift](function.fann-get-sarprop-weight-decay-shift.md)
- Повертає зсув зменшення ваги sarprop
- [fann_get_total_connections](function.fann-get-total-connections.md)
— Отримує загальну кількість з'єднань у всій мережі
- [fann_get_total_neurons](function.fann-get-total-neurons.md) -
Отримує загальну кількість нейронів у всій мережі
- [fann_get_train_error_function](function.fann-get-train-error-function.md)
— Повертає функцію обробки помилок, яка використовується під час
навчання
- [fann_get_train_stop_function](function.fann-get-train-stop-function.md)
— Повертає функцію зупинки, що використовується під час навчання
- [fann_get_training_algorithm](function.fann-get-training-algorithm.md)
- Повертає алгоритм навчання
- [fann_init_weights](function.fann-init-weights.md) -
Ініціалізує ваги за допомогою алгоритму Widrow+Nguyen
- [fann_length_train_data](function.fann-length-train-data.md) -
Повертає кількість шаблонів у навчальних даних
- [fann_merge_train_data](function.fann-merge-train-data.md) -
Об'єднує навчальні дані
- [fann_num_input_train_data](function.fann-num-input-train-data.md)
— Повертає кількість вхідних даних у кожному із шаблонів у
навчальних даних
- [fann_num_output_train_data](function.fann-num-output-train-data.md)
— Повертає кількість вихідних даних у кожному із шаблонів у
навчальних даних
- [fann_print_error](function.fann-print-error.md) - Виводить
рядок помилки
- [fann_randomize_weights](function.fann-randomize-weights.md) -
Привласнює кожному з'єднанню випадкову вагу між min_weight та
max_weight
- [fann_read_train_from_file](function.fann-read-train-from-file.md)
— Читає файл, де зберігаються дані навчання
- [fann_reset_errno](function.fann-reset-errno.md) - Скидає
номер останньої помилки
- [fann_reset_errstr](function.fann-reset-errstr.md) -
Скидає останній рядок помилки
- [fann_reset_MSE](function.fann-reset-mse.md) — Скидає
середньоквадратичну помилку з мережі
- [fann_run](function.fann-run.md) - Запускає нейронну мережу з
заданими даними
- [fann_save_train](function.fann-save-train.md) — Зберігає
структуру навчання у файл
- [fann_save](function.fann-save.md) — Зберігає всю мережу у файл
конфігурації
- [fann_scale_input_train_data](function.fann-scale-input-train-data.md)
— Масштабує вхідні дані до навчальних даних до зазначеного
діапазону
- [fann_scale_input](function.fann-scale-input.md) -
Масштабує дані у вхідному векторі перед подачею їх у ann на
основі раніше розрахованих параметрів
- [fann_scale_output_train_data](function.fann-scale-output-train-data.md)
— Масштабує вихідні дані до навчальних даних до зазначеного
діапазону
- [fann_scale_output](function.fann-scale-output.md) -
Масштабує дані у вихідному векторі перед їх передачею в ann
на основі раніше розрахованих параметрів
- [fann_scale_train_data](function.fann-scale-train-data.md) -
Масштабує вхідні та вихідні дані у навчальних даних до
вказаного діапазону
- [fann_scale_train](function.fann-scale-train.md) -
Масштабує вхідні та вихідні дані на основі раніше
розрахованих параметрів
- [fann_set_activation_function_hidden](function.fann-set-activation-function-hidden.md)
— Встановлює функцію активації для всіх прихованих шарів
- [fann_set_activation_function_layer](function.fann-set-activation-function-layer.md)
— Встановлює функцію активації для всіх нейронів.
наданому шарі
- [fann_set_activation_function_output](function.fann-set-activation-function-output.md)
— Встановлює функцію активації для вихідного шару
- [fann_set_activation_function](function.fann-set-activation-function.md)
— Встановлює функцію активації для вказаного нейрона та шару
- [fann_set_activation_steepness_hidden](function.fann-set-activation-steepness-hidden.md)
- Встановлює крутість крутості активації для всіх нейронів у
всіх прихованих шарах
- [fann_set_activation_steepness_layer](function.fann-set-activation-steepness-layer.md)
— Встановлює крутість активації для всіх нейронів у зазначеному
номері шару
- [fann_set_activation_steepness_output](function.fann-set-activation-steepness-output.md)
— Встановлює крутість активації у вихідному шарі
- [fann_set_activation_steepness](function.fann-set-activation-steepness.md)
— Встановлює крутість активації для вказаного нейрона та
номери шару
- [fann_set_bit_fail_limit](function.fann-set-bit-fail-limit.md)
— Встановлює межу помилок, що використовується під час навчання
- [fann_set_callback](function.fann-set-callback.md) -
Встановлює callback-функцію для використання під час
навчання
- [fann_set_cascade_activation_functions](function.fann-set-cascade-activation-functions.md)
- Встановлює масив каскадних функцій активації кандидатів
- [fann_set_cascade_activation_steepnesses](function.fann-set-cascade-activation-steepnesses.md)
- Встановлює масив крутості включення кандидатів у каскад
- [fann_set_cascade_candidate_change_fraction](function.fann-set-cascade-candidate-change-fraction.md)
- Встановлює частку каскадної зміни кандидата
- [fann_set_cascade_candidate_limit](function.fann-set-cascade-candidate-limit.md)
- Встановлює ліміт кандидатів
- [fann_set_cascade_candidate_stagnation_epochs](function.fann-set-cascade-candidate-stagnation-epochs.md)
- Встановлює кількість каскадних періодів застою кандидатів
- [fann_set_cascade_max_cand_epochs](function.fann-set-cascade-max-cand-epochs.md)
- Встановлює найбільший період кандидата
- [fann_set_cascade_max_out_epochs](function.fann-set-cascade-max-out-epochs.md)
— Встановлює максимальну кількість епох
- [fann_set_cascade_min_cand_epochs](function.fann-set-cascade-min-cand-epochs.md)
- Встановлює найменший період кандидата
- [fann_set_cascade_min_out_epochs](function.fann-set-cascade-min-out-epochs.md)
— Встановлює мінімальні епохи вихідних даних
- [fann_set_cascade_num_candidate_groups](function.fann-set-cascade-num-candidate-groups.md)
- Встановлює кількість груп кандидатів
- [fann_set_cascade_output_change_fraction](function.fann-set-cascade-output-change-fraction.md)
- Встановлює частку зміни каскадних вихідних даних
- [fann_set_cascade_output_stagnation_epochs](function.fann-set-cascade-output-stagnation-epochs.md)
- Встановлює кількість періодів стагнації каскадного виводу
- [fann_set_cascade_weight_multiplier](function.fann-set-cascade-weight-multiplier.md)
- Встановлює множник ваги
- [fann_set_error_log](function.fann-set-error-log.md) -
Встановлює, де реєструються помилки
- [fann_set_input_scaling_params](function.fann-set-input-scaling-params.md)
— Розраховує вхідні параметри масштабування для майбутнього
використання на основі даних навчання
- [fann_set_learning_momentum](function.fann-set-learning-momentum.md)
- Встановлює імпульс навчання
- [fann_set_learning_rate](function.fann-set-learning-rate.md) -
Встановлює швидкість навчання
- [fann_set_output_scaling_params](function.fann-set-output-scaling-params.md)
— Розраховує вихідні параметри масштабування для майбутнього
використання на основі даних навчання
- [fann_set_quickprop_decay](function.fann-set-quickprop-decay.md)
- Встановлює коефіцієнт згасання quickprop
- [fann_set_quickprop_mu](function.fann-set-quickprop-mu.md) -
Встановлює МЮ-фактор quickprop
- [fann_set_rprop_decrease_factor](function.fann-set-rprop-decrease-factor.md)
— Встановлює коефіцієнт зменшення, який використовується під час
навчання RPROP
- [fann_set_rprop_delta_max](function.fann-set-rprop-delta-max.md)
- Встановлює максимальний розмір кроку
- [fann_set_rprop_delta_min](function.fann-set-rprop-delta-min.md)
- Встановлює мінімальний розмір кроку
- [fann_set_rprop_delta_zero](function.fann-set-rprop-delta-zero.md)
- Встановлює початковий розмір кроку
- [fann_set_rprop_increase_factor](function.fann-set-rprop-increase-factor.md)
— Встановлює коефіцієнт збільшення, який використовується під час
навчання Rprop
- [fann_set_sarprop_step_error_shift](function.fann-set-sarprop-step-error-shift.md)
- Встановлює зрушення помилки кроку sarprop
- [fann_set_sarprop_step_error_threshold_factor](function.fann-set-sarprop-step-error-threshold-factor.md)
- Встановлює пороговий коефіцієнт помилки кроку sarprop
- [fann_set_sarprop_temperature](function.fann-set-sarprop-temperature.md)
- Встановлює температуру sarprop
- [fann_set_sarprop_weight_decay_shift](function.fann-set-sarprop-weight-decay-shift.md)
- Встановлює зсув згасання sarprop
- [fann_set_scaling_params](function.fann-set-scaling-params.md)
— Розраховує вхідні та вихідні параметри масштабування для
майбутнього використання на основі даних навчання
- [fann_set_train_error_function](function.fann-set-train-error-function.md)
— Встановлює функцію помилки під час тренування.
- [fann_set_train_stop_function](function.fann-set-train-stop-function.md)
— Встановлює функцію зупинки, яка використовується під час
тренування
- [fann_set_training_algorithm](function.fann-set-training-algorithm.md)
- Встановлює алгоритм навчання
- [fann_set_weight_array](function.fann-set-weight-array.md) -
Створення зв'язків у мережі
- [fann_set_weight](function.fann-set-weight.md) - Створення
зв'язку в мережі
- [fann_shuffle_train_data](function.fann-shuffle-train-data.md)
— Перемішує навчальні дані у випадковому порядку
- [fann_subset_train_data](function.fann-subset-train-data.md) -
Отримати копію підмножини з навчальних даних
- [fann_test_data](function.fann-test-data.md) — Тестування
набору навчальних даних та обчислення MSE для нього
- [fann_test](function.fann-test.md) — Тестування з набором
вхідних даних та бажаним результатом
- [fann_train_epoch](function.fann-train-epoch.md) - Навчання в
протягом однієї епохи
- [fann_train_on_data](function.fann-train-on-data.md) -
Навчання на всьому обсязі даних на часовому інтервалі
- [fann_train_on_file](function.fann-train-on-file.md) -
Навчання на повному наборі даних, прочитаному з файлу,
тимчасовому інтервалі
- [fann_train](function.fann-train.md) — Провести одну ітерацію
навчання з набором вхідних даних та бажаним результатом
- [FANNConnection](class.fannconnection.md) - Клас FANNConnection
- [FANNConnection::\_\_construct](fannconnection.construct.md) -
Конструктор зв'язку
- [FANNConnection::getFromNeuron](fannconnection.getfromneuron.md)
- Повертає позицію стартового нейрона
- [FANNConnection::getToNeuron](fannconnection.gettoneuron.md) -
Повертає позицію кінцевого нейрона
- [FANNConnection::getWeight](fannconnection.getweight.md) -
Повертає вагу зв'язку
- [FANNConnection::setWeight](fannconnection.setweight.md) -
Встановлює вагу зв'язку
