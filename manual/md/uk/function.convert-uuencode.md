- [«convert_uudecode](function.convert-uudecode.md)
- [count_chars »] (function.count-chars.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Кодує рядок у формат uuencode

#convert_uuencode

(PHP 5, PHP 7, PHP 8)

convert_uuencode — Кодує рядок у форматі uuencode

### Опис

**convert_uuencode**(string `$string`): string

**convert_uuencode()** кодує рядок за допомогою алгоритму uuencode.

Кодування uuencode переводить рядки (включаючи бінарні символи) в
послідовності друкованих (7-бітних) ASCII-символів, що дозволяє
безпечно обмінюватися даними через мережу. Закодовані дані
приблизно на 35% більше від оригіналу.

> **Примітка**: [convert_uudecode()](function.convert-uudecode.md) не
> приймає ні початкового (`begin`), ні кінцевого (`end`) рядка, який
> є частиною файлів (*files*) uuencoded.

### Список параметрів

`string`
Кодовані дані.

### Значення, що повертаються

Повертає закодовані дані у форматі uuencode.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------|
| 8.0.0 | До цієї версії при спробі перетворити порожній рядок поверталося **`false`** без особливої причини. |

### Приклади

**Приклад #1 Приклад використання **convert_uuencode()****

` <?php$some_string u003d "test
text text
";echo convert_uuencode($some_string);?> `

Результат виконання цього прикладу:

0u003d&5Su003d`IT97AT('1E>'0-"@``
`

### Дивіться також

- [convert_uudecode()](function.convert-uudecode.md) - Декодує
рядок з формату uuencode у звичайний вигляд
- [base64_encode()](function.base64-encode.md) - Кодує дані в
формат MIME base64
