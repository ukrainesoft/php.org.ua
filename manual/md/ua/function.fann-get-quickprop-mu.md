- [« fann_get_quickprop_decay](function.fann-get-quickprop-decay.md)
- [fann_get_rprop_decrease_factor
»](function.fann-get-rprop-decrease-factor.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає коефіцієнт mu

# fann_get_quickprop_mu

(PECL fann u003d 1.0.0)

fann_get_quickprop_mu — Повертає коефіцієнт mu

### Опис

**fann_get_quickprop_mu**(resource `$ann`): float

Коефіцієнт mu використовується для збільшення та зменшення розміру кроку
час швидкого тренування. Коефіцієнт mu завжди повинен бути більше 1,
оскільки в іншому випадку розмір кроку зменшиться, коли
передбачається його збільшити.

Коефіцієнт mu за умовчанням дорівнює 1.75.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Коефіцієнт mu чи **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_set_quickprop_mu()](function.fann-set-quickprop-mu.md) -
Встановлює МЮ-фактор quickprop
