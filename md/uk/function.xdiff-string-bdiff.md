- [«xdiff_string_bdiff_size](function.xdiff-string-bdiff-size.md)
- [xdiff_string_bpatch »](function.xdiff-string-bpatch.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Створити бінарний патч для двох рядків

#xdiff_string_bdiff

(PECL xdiff \>u003d 1.5.0)

xdiff_string_bdiff — Створити бінарний патч для двох рядків

### Опис

**xdiff_string_bdiff**(string `$old_data`, string `$new_data`): string

Здійснює бінарне порівняння двох рядків та повертає патч. Ця функція
працює як з текстом, так і з бінарними даними. Отриманий патч
згодом можна застосувати за допомогою функцій
[xdiff_string_bpatch()](function.xdiff-string-bpatch.md) та
[xdiff_file_bpatch()](function.xdiff-file-bpatch.md).

### Список параметрів

`old_data`
Перший рядок із бінарними даними. Це будуть "старі" дані.

`new_data`
Другий рядок із бінарними даними. Це будуть "нові" дані.

### Значення, що повертаються

Повертає рядок з бінарним патчем, що містить різницю між "старими"
та "новими" даними, або **`false`** у разі виникнення помилки.

### Дивіться також

- [xdiff_string_bpatch()](function.xdiff-string-bpatch.md) -
Застосування бінарного патча до рядка
