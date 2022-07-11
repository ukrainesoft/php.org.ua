- [«xdiff_string_patch](function.xdiff-string-patch.md)
- [Підтримка мов та кодувань]](refs.international.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Порівняти два рядки і створити бінарний патч використовуючи
поліномінальний алгоритм Rabin fingerprint

#xdiff_string_rabdiff

(PECL xdiff \>u003d 1.5.0)

xdiff_string_rabdiff — Порівняти два рядки та створити бінарний патч
використовуючи поліномінальний алгоритм Rabin fingerprint

### Опис

[xdiff_string_bdiff](function.xdiff-string-bdiff.md)(string
`$old_data`, string `$new_data`): string

Створює бінарний патч для двох рядків та повертає результат. Різниця
між цією функцією та
[xdiff_string_bdiff()](function.xdiff-string-bdiff.md) у використовуваному
алгоритм, який працює швидше і створює більш короткий патч. Ця
функція працює як із текстовими, і з бінарними даними. Отриманий
патч згодом можна застосувати за допомогою функцій
[xdiff_string_bpatch()](function.xdiff-string-bpatch.md) та
[xdiff_file_bpatch()](function.xdiff-file-bpatch.md).

Докладніше про розбіжності в алгоритмах читайте на сайті
[» libxdiff](http://www.xmailserver.org/xdiff-lib.md).

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
