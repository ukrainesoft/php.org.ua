- [«
fann_get_cascade_max_out_epochs](function.fann-get-cascade-max-out-epochs.md)
- [fann_get_cascade_min_out_epochs
»](function.fann-get-cascade-min-out-epochs.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- отримує найменший період кандидата

# fann_get_cascade_min_cand_epochs

(PECL fann u003d 1.0.0)

fann_get_cascade_min_cand_epochs — Отримує найменший період кандидата

### Опис

**fann_get_cascade_min_cand_epochs**(resource `$ann`): int

Мінімальний період кандидата визначає мінімальну кількість періодів,
в яких вхідні з'єднання з кандидатами можуть бути навчені перед
додаванням нового нейрона-кандидата.

Мінімальний період кандидата за замовчуванням – 50.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Мінімальний період кандидата або **`false`** у разі виникнення
помилки.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_set_cascade_min_cand_epochs()](function.fann-set-cascade-min-cand-epochs.md) -
Встановлює найменший період кандидата
