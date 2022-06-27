- [«
fann_set_sarprop_step_error_shift](function.fann-set-sarprop-step-error-shift.md)
- [fann_set_sarprop_temperature
»](function.fann-set-sarprop-temperature.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює граничний коефіцієнт помилки кроку sarprop

# fann_set_sarprop_step_error_threshold_factor

(PECL fann u003d 1.0.0)

fann_set_sarprop_step_error_threshold_factor - Встановлює пороговий
коефіцієнт помилки кроку sarprop

### Опис

**fann_set_sarprop_step_error_threshold_factor**(resource `$ann`, float
`$sarprop_step_error_threshold_factor`): bool

Встановлює граничний коефіцієнт помилки кроку sarprop.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`sarprop_step_error_threshold_factor`
Пороговий коефіцієнт помилки кроку sarprop.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_get_sarprop_step_error_threshold_factor()](function.fann-get-sarprop-step-error-threshold-factor.md) -
Повертає пороговий коефіцієнт помилки кроку sarprop
