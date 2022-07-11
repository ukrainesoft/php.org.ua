- [« fann_train_on_file](function.fann-train-on-file.md)
- [FANNConnection »](class.fannconnection.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Провести одну ітерацію навчання з набором вхідних даних та бажаним
результатом

# fann_train

(PECL fann u003d 1.0.0)

fann_train — Провести одну ітерацію навчання з набором вхідних даних та
бажаним результатом

### Опис

**fann_train**(resource `$ann`, array `$input`, array
`$desired_output`): bool

Провести одну ітерацію навчання з набором вхідних даних та бажаним
результатом. Це навчання завжди інкрементальне, тому що представлена
лише одна модель.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`input`
Масив вхідних даних. Розмір масиву має точно відповідати
[fann_get_num_input()](function.fann-get-num-input.md).

`desired_output`
Масив бажаних результатів. Розмір масиву має точно відповідати
[fann_get_num_output()](function.fann-get-num-output.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_train_on_data()](function.fann-train-on-data.md) - Навчання
на всьому обсязі даних на часовому інтервалі
- [fann_train_epoch()](function.fann-train-epoch.md) - Навчання в
протягом однієї епохи
- [fann_get_num_input()](function.fann-get-num-input.md) - Отримує
кількість вхідних нейронів
- [fann_get_num_output()](function.fann-get-num-output.md) -
Отримує кількість вихідних нейронів
