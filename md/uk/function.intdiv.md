- [«hypot](function.hypot.md)
- [is_finite »](function.is-finite.md)

- [PHP Manual](index.md)
- [Математичні функції](ref.math.md)
- цілісний поділ

# intdiv

(PHP 7, PHP 8)

intdiv - Цілочисленний поділ

### Опис

**intdiv**(int `$num1`, int `$num2`): int

Повертає результат цілісного поділу `num1` на `num2`.

### Список параметрів

`num1`
Чисельник (те, що ділиться).

`num2`
Знаменник. Число, на яке поділяється `num1`

### Значення, що повертаються

Ціле приватне від розподілу `num1` на `num2`.

### Помилки

Якщо `num2` дорівнює `0`, буде викинуто виняток
[DivisionByZeroError](class.divisionbyzeroerror.md). Якщо `num1` дорівнює
**`PHP_INT_MIN`**, а `num2` дорівнює `-1`, то буде викинуто виняток
[ArithmeticError](class.arithmeticerror.md).

### Приклади

**Приклад #1 Приклад використання **intdiv()****

` <?phpvar_dump(intdiv(3, 2));var_dump(intdiv(-3, 2));var_dump(intdiv(3, -2));var_dump(intdiv(-3, -2));var_dump(intdiv (PHP_INT_MAX, PHP_INT_MAX));var_dump(intdiv(PHP_INT_MIN, PHP_INT_MIN));var_dump(intdiv(PHP_INT_MIN, -1));var_dump(intdiv(1, 0));?> `

int(1)
int(-1)
int(-1)
int(1)
int(1)
int(1)

Error error: Uncaught ArithmeticError: Відображення PHP_INT_MIN by -1 не входить у %s on line 8
Fatal error: Uncaught DivisionByZeroError: Division by zero in %s on line 9

### Дивіться також

- [`/`](language.operators.arithmetic.md) - розподіл раціональних
чисел
- [`%`](language.operators.arithmetic.md) - залишок від розподілу
- [fmod()](function.fmod.md) - залишок від розподілу раціональних чисел
