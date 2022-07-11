- [«
fann_get_sarprop_temperature](function.fann-get-sarprop-temperature.md)
- [fann_get_total_connections
»](function.fann-get-total-connections.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає зсув зменшення ваги sarprop

# fann_get_sarprop_weight_decay_shift

(PECL fann u003d 1.0.0)

fann_get_sarprop_weight_decay_shift — Повертає зсув зменшення ваги
sarprop

### Опис

**fann_get_sarprop_weight_decay_shift**(resource `$ann`): float

Повертає зсув зменшення ваги sarprop.

Максимальна дельта за промовчанням становить -6.644.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Зсув зменшення ваги sarprop або **`false`** у разі виникнення
помилки.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_set_sarprop_weight_decay_shift()](function.fann-set-sarprop-weight-decay-shift.md) -
Встановлює зсув згасання sarprop
