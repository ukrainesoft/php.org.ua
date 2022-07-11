- [«rand](function.rand.md)
- [sin »](function.sin.md)

- [PHP Manual](index.md)
- [Математичні функції](ref.math.md)
- Округлює кількість типу float

# round

(PHP 4, PHP 5, PHP 7, PHP 8)

round — Округлює кількість типу float

### Опис

**round**(int\|float `$num`, int `$precision` u003d 0, int `$mode` u003d
**`PHP_ROUND_HALF_UP`**): float

Повертає заокруглене значення `num` із зазначеною точністю `precision`
(кількість цифр після коми). `precision` може бути негативним
або нулем (за замовчуванням).

### Список параметрів

`num`
Значення для заокруглення.

`precision`
Кількість десяткових знаків, до яких проводиться заокруглення

Якщо `precision` позитивний, `num` округляється до точності
`precision` цифр після коми.

Якщо `precision` негативний, `num` округляється до точності `precision`
цифр перед десятковою комою, тобто до найближчого кратного
`pow(10, -precision)`, наприклад для `precision` рівної -1 `num`
округляється до десятків, для "precision" рівної -2 до сотень і т.д.

`mode`
Використовуйте одну з цих констант для визначення способу заокруглення.

| Константи Опис |
|---------------------------|--------------------- -------------------------------------------------- -------------------------------------------------- ----------|
| **`PHP_ROUND_HALF_UP`** | Округлює 'num' від нуля, коли наступний знак знаходиться посередині. Тобто округляє 1.5 - 2 і -1.5 -2. |
| **`PHP_ROUND_HALF_DOWN`** | Округлює 'num' до нуля, коли наступний знак знаходиться посередині. Тобто округляє 1.5 - 1 і -1.5 -1. |
| **`PHP_ROUND_HALF_EVEN`** | Округлює 'num' до найближчого парного значення, коли наступний знак знаходиться посередині. Тобто округляє 1.5 та 2.5 у 2. |
| **`PHP_ROUND_HALF_ODD`** | Округлює 'num' до найближчого непарного значення, коли наступний знак знаходиться посередині. Тобто округляє 1.5 у 1 та 2.5 у 3. |

### Значення, що повертаються

Значення округляється до заданого значення 'precision' як float.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------------------------------------------|
| 8.0.0 | `num` більше не приймає внутрішні об'єкти, що підтримують числове перетворення. |

### Приклади

**Приклад #1 Приклад використання **round()****

` <?phpvar_dump(round(3.4));var_dump(round(3.5));var_dump(round(3.6));var_dump(round(3.6, 0));var_dump(round(5.045, 2));var_dump(round (5.055, 2));var_dump(round(345, -2));var_dump(round(345, -3));var_dump(round(678, -2));var_dump(round(678, -3)) ;?> `

Результат виконання цього прикладу:

float(3)
float(4)
float(4)
float(4)
float(5.05)
float(5.06)
float(300)
float(0)
float(700)
float(1000)

**Приклад #2 Як параметр `precision` впливає на числа з плаваючою
точкою**

` <?php$number u003d 135.79;var_dump(round($number, 3));var_dump(round($number, 2));var_dump(round($number, 1));var_dump(round($number, 0) ));var_dump(round($number, -1));var_dump(round($number, -2));var_dump(round($number, -3));?> `

Результат виконання цього прикладу:

float(135.79)
float(135.79)
float(135.8)
float(136)
float(140)
float(100)
float(0)

**Приклад #3 Приклади використання параметра `mode`**

`<?phpecho 'Режими округлення с 9.5' . PHP_EOL;var_dump(round(9.5, 0, PHP_ROUND_HALF_UP));var_dump(round(9.5, 0, PHP_ROUND_HALF_DOWN));var_dump(round(9.5, 0, PHP_ROUND_H) echo PHP_EOL;echo 'Режими округлення с 8.5' . PHP_EOL;var_dump(round(8.5, 0, PHP_ROUND_HALF_UP));var_dump(round(8.5, 0, PHP_ROUND_HALF_DOWN));var_dump(round(8.5, 0, PHP_ROUND_H) ?> `

Результат виконання цього прикладу:

Режими округлення з 9.5
float(10)
float(9)
float(10)
float(9)

Режими округлення з 8.5
float(9)
float(8)
float(8)
float(9)

**Приклад #4 Приклади використання параметра `mode` із зазначенням точності
`precision`**

`<?phpecho 'Використання PHP_ROUND_HALF_UP з точністю до 1 знака' . PHP_EOL;var_dump(round( 1.55, 1, PHP_ROUND_HALF_UP));var_dump(round(-1.55, 1, PHP_ROUND_HALF_UP));echo PHP_EOL;echo Використання P| PHP_EOL;var_dump(round( 1.55, 1, PHP_ROUND_HALF_DOWN));var_dump(round(-1.55, 1, PHP_ROUND_HALF_DOWN));echo PHP_EOL;echo F  | PHP_EOL;var_dump(round( 1.55, 1, PHP_ROUND_HALF_EVEN));var_dump(round(-1.55, 1, PHP_ROUND_HALF_EVEN));echo PHP_EOL;echo Використання  PHP_EOL;var_dump(round( 1.55, 1, PHP_ROUND_HALF_ODD));var_dump(round(-1.55, 1, PHP_ROUND_HALF_ODD));?> `

Результат виконання цього прикладу:

Використання PHP_ROUND_HALF_UP із точністю до 1 знака
float(1.6)
float(-1.6)

Використання PHP_ROUND_HALF_DOWN із точністю до 1 знака
float(1.5)
float(-1.5)

Використання PHP_ROUND_HALF_EVEN із точністю до 1 знака
float(1.6)
float(-1.6)

Використання PHP_ROUND_HALF_ODD із точністю до 1 знака
float(1.5)
float(-1.5)

### Дивіться також

- [ceil()](function.ceil.md) - Округлює дріб у велику сторону
- [floor()](function.floor.md) - Округлює дріб у менший бік
- [number_format()](function.number-format.md) - Форматує число з
поділом груп
