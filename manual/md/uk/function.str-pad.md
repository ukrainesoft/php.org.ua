- [«str_ireplace](function.str-ireplace.md)
- [str_repeat »](function.str-repeat.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Доповнює рядок іншим рядком до заданої довжини

#str_pad

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

str_pad — Доповнює рядок іншим рядком до заданої довжини

### Опис

**str_pad**(
string `$string`,
int `$length`,
string `$pad_string` u003d " ",
int `$pad_type` u003d **`STR_PAD_RIGHT`**
): string

Ця функція повертає рядок `string`, доповнений ліворуч, праворуч або з
обох сторін до заданої довжини. Якщо необов'язковий аргумент
`pad_string` не переданий, то `string` буде доповнений пробілами, інакше він
буде доповнено символами з `pad_string` до потрібної довжини.

### Список параметрів

`string`
Вхідний рядок.

`length`
Якщо значення `length` негативне, менше або дорівнює довжині вхідний
рядки, то доповнення не відбувається і повертається вихідний рядок
`string`.

`pad_string`
> **Примітка**:
>
> `pad_string` може бути урізана, якщо потрібна кількість
> символів, що доповнюються, не ділиться націло на довжину рядка `pad_string`.

`pad_type`
Необов'язковий аргумент `pad_type` може мати значення
**`STR_PAD_RIGHT`**, **`STR_PAD_LEFT`** або **`STR_PAD_BOTH`**. Якщо не
вказано, то за замовчуванням використовується **`STR_PAD_RIGHT`**.

### Значення, що повертаються

Повертає доповнений рядок.

### Приклади

**Приклад #1 Приклад використання **str_pad()****

`<?php$input u003d "Alien";echo str_pad($input, 10); // виводить "Alien     "echo str_pad($input, 10, "-u003d", STR_PAD_LEFT); // виводить "-u003d-u003d-Alien"echo str_pad($input, 10, "_", STR_PAD_BOTH); // виводить "__Alien___"echo str_pad($input,  6, "___"); // виводить "Alien_"echo str_pad($input, 3, "*"); // виводить "Alien"?> `
