- [« fann_test_data](function.fann-test-data.md)
- [fann_train_epoch »](function.fann-train-epoch.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Тестування з набором вхідних даних та бажаним результатом

# fann_test

(PECL fann u003d 1.0.0)

fann_test — Тестування з набором вхідних даних та бажаним результатом

### Опис

**fann_test**(resource `$ann`, array `$input`, array `$desired_output`):
array

Тестування з набором вхідних даних та бажаним результатом. Ця
операція оновить середньоквадратичну помилку, але не змінить мережу.

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

Повертає тестові висновки у разі успішного виконання або **`false`**
у разі виникнення помилки

### Дивіться також

- [fann_test_data()](function.fann-test-data.md) - Тестування
набору навчальних даних та обчислення MSE для нього
- [fann_train()](function.fann-train.md) - Провести одну ітерацію
навчання з набором вхідних даних та бажаним результатом
- [fann_get_num_input()](function.fann-get-num-input.md) - Отримує
кількість вхідних нейронів
- [fann_get_num_output()](function.fann-get-num-output.md) -
Отримує кількість вихідних нейронів
