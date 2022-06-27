- [«gmp_hamdist](function.gmp-hamdist.md)
- [gmp_init »](function.gmp-init.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Імпортувати з бінарного рядка

# gmp_import

(PHP 5 \>u003d 5.6.1, PHP 7, PHP 8)

gmp_import — Імпортувати з бінарного рядка

### Опис

**gmp_import**(string `$data`, int `$word_size` u003d 1, int `$flags` u003d
GMP_MSW_FIRST \| GMP_NATIVE_ENDIAN): [GMP](class.gmp.md)

Імпортує GMP-число з бінарного рядка

### Список параметрів

`data`
Бінарний рядок для імпорту

`word_size`
За замовчуванням дорівнює 1. Кількість байт у кожному блоці бінарних даних.
Зазвичай використовується разом із завданням options.

`flags`
Типово **`GMP_MSW_FIRST`** \| **`GMP_NATIVE_ENDIAN`**.

### Значення, що повертаються

Повертає GMP-число.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------|
| 8.0.0 | Функція більше не повертає **`false`** у разі виникнення помилки. |

### Приклади

**Приклад #1 Приклад використання **gmp_import()****

` <?php$number u003d gmp_import(" ");echo gmp_strval($number) . "
";$number u003d gmp_import(" ");echo gmp_strval($number) . "
";?> `

Результат виконання цього прикладу:

    0
258

### Дивіться також

- [gmp_export()](function.gmp-export.md) - Експортувати в бінарну
рядок
