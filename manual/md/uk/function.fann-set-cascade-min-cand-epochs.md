- [«
fann_set_cascade_max_out_epochs](function.fann-set-cascade-max-out-epochs.md)
- [fann_set_cascade_min_out_epochs
»](function.fann-set-cascade-min-out-epochs.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- встановлює найменший період кандидата

# fann_set_cascade_min_cand_epochs

(PECL fann u003d 1.0.0)

fann_set_cascade_min_cand_epochs — Встановлює найменший період
кандидата

### Опис

**fann_set_cascade_min_cand_epochs**(resource `$ann`, int
`$cascade_min_cand_epochs`): bool

Встановлює найменший період кандидата.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`cascade_min_cand_epochs`
Найменший період кандидата.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_get_cascade_min_cand_epochs()](function.fann-get-cascade-min-cand-epochs.md) -
Отримує найменший період кандидата
