- [«
fann_get_sarprop_step_error_shift](function.fann-get-sarprop-step-error-shift.md)
- [fann_get_sarprop_temperature
»](function.fann-get-sarprop-temperature.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає пороговий коефіцієнт помилки кроку sarprop

# fann_get_sarprop_step_error_threshold_factor

(PECL fann u003d 1.0.0)

fann_get_sarprop_step_error_threshold_factor — Повертає пороговий
коефіцієнт помилки кроку sarprop

### Опис

**fann_get_sarprop_step_error_threshold_factor**(resource `$ann`): float

Повертає пороговий коефіцієнт помилки кроку sarprop.

За замовчуванням коефіцієнт становить 0.1.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Пороговий коефіцієнт помилки кроку або **`false`** у разі виникнення
помилки.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_set_sarprop_step_error_threshold_factor()](function.fann-set-sarprop-step-error-threshold-factor.md) -
Встановлює граничний коефіцієнт помилки кроку sarprop
