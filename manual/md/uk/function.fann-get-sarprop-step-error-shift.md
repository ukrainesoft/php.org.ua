- [«
fann_get_rprop_increase_factor](function.fann-get-rprop-increase-factor.md)
- [fann_get_sarprop_step_error_threshold_factor
»](function.fann-get-sarprop-step-error-threshold-factor.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає зрушення помилки кроку sarprop

# fann_get_sarprop_step_error_shift

(PECL fann u003d 1.0.0)

fann_get_sarprop_step_error_shift — Повертає зрушення помилки кроку sarprop

### Опис

**fann_get_sarprop_step_error_shift**(resource `$ann`): float

Повертає зрушення помилки кроку sarprop.

Зсув помилки кроку за промовчанням становить 1.385.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Зрушення помилки кроку sarprop або **`false`** у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_set_sarprop_step_error_shift()](function.fann-set-sarprop-step-error-shift.md) -
Встановлює зрушення помилки кроку sarprop
