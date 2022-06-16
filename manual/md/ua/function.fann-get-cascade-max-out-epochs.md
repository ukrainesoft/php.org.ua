- [«
fann_get_cascade_max_cand_epochs](function.fann-get-cascade-max-cand-epochs.md)
- [fann_get_cascade_min_cand_epochs
»](function.fann-get-cascade-min-cand-epochs.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає максимальну кількість періодів

# fann_get_cascade_max_out_epochs

(PECL fann u003d 1.0.0)

fann_get_cascade_max_out_epochs — Повертає максимальну кількість
періодів

### Опис

**fann_get_cascade_max_out_epochs**(resource `$ann`): int

Максимальна кількість періодів визначає кількість періодів,
яких вихідні з'єднання можуть бути навчені після додавання нового
нейрона-кандидата.

Максимальна кількість періодів дорівнює 150.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Максимальна кількість періодів або **`false`** у разі виникнення
помилки.

### Дивіться також

- [fann_set_cascade_max_out_epochs()](function.fann-set-cascade-max-out-epochs.md) -
Встановлює максимальну кількість епох
