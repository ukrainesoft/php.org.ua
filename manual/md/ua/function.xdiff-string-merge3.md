- [«xdiff_string_diff](function.xdiff-string-diff.md)
- [xdiff_string_patch_binary
»](function.xdiff-string-patch-binary.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Об'єднати три рядки в один

#xdiff_string_merge3

(PECL xdiff \>u003d 0.2.0)

xdiff_string_merge3 — Об'єднати три рядки в один

### Опис

**xdiff_string_merge3**(
string `$old_data`,
string `$new_data1`,
string `$new_data2`,
string `&$error` u003d ?
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Поєднує три рядки в один і повертає результат. У параметрі
`old_data` задається оригінальний рядок, а в `new_data1` і
`new_data2` – її модифіковані версії. Опціональний параметр `error`
використовується для збереження помилок у процесі об'єднання.

### Список параметрів

`old_data`
Перший рядок із даними. Це будуть "старі" дані.

`new_data1`
Другий рядок із даними. Модифікована версія `old_data`.

`new_data2`
Третій рядок із даними. Модифікована версія `old_data`.

`error`
Якщо заданий, то сюди будуть записуватися помилки, що виникли.

### Значення, що повертаються

Повертає отриманий рядок, **`false`** у разі виникнення помилки
або **`true`**, якщо отриманий рядок порожній.

### Дивіться також

- [xdiff_file_merge3()](function.xdiff-file-merge3.md) - Об'єднання
трьох файлів в один
