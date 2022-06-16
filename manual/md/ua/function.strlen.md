- [«stristr](function.stristr.md)
- [strnatcasecmp »](function.strnatcasecmp.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Повертає довжину рядка

#strlen

(PHP 4, PHP 5, PHP 7, PHP 8)

strlen — Повертає довжину рядка

### Опис

**strlen**(string `$string`): int

Повертає довжину рядка `string`.

### Список параметрів

`string`
Рядок (string), на яку вимірюється довжина.

### Значення, що повертаються

Довжина рядка `string` у разі успішного виконання, та `0`, якщо
`string` порожня.

### Приклади

**Приклад #1 Приклад використання **strlen()****

` <?php$stru003du003d'abcdef';echo strlen($str); // 6$str u003d ' ab cd ';echo strlen($str); // 7?> `

### Примітки

> **Примітка**:
>
> Функція **strlen()** поверне кількість байт, а не кількість символів у
> рядку.

> **Примітка**:
>
> Функція **strlen()** повертає **`null`** при використанні на
> масивах, і навіть виводить помилку рівня **`E_WARNING`**.

### Дивіться також

- [count()](function.count.md) - Підраховує кількість елементів
масиву або Countable об'єкті
- [grapheme_strlen()](function.grapheme-strlen.md) - Отримує довжину
рядки в одиницях графеми
- [iconv_strlen()](function.iconv-strlen.md) - Повертає кількість
символів у рядку
- [mb_strlen()](function.mb-strlen.md) - Отримує довжину рядка
