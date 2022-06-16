- [«xdiff_string_bdiff](function.xdiff-string-bdiff.md)
- [xdiff_string_diff_binary »](function.xdiff-string-diff-binary.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Застосування бінарного патча до рядка

#xdiff_string_bpatch

(PECL xdiff \>u003d 1.5.0)

xdiff_string_bpatch — Застосування бінарного патча до рядка

### Опис

**xdiff_string_bpatch**(string `$str`, string `$patch`): string

Застосовує до рядка `str` бінарний патч `patch`. Ця функція приймає
патчі створені як
[xdiff_string_bdiff()](function.xdiff-string-bdiff.md), так і
[xdiff_string_rabdiff()](function.xdiff-string-rabdiff.md).

### Список параметрів

`str`
Оригінальний бінарний рядок.

`patch`
Рядок з бінарним патчем.

### Значення, що повертаються

Повертає змінений рядок, або **`false`** у разі виникнення
помилки.

### Дивіться також

- [xdiff_string_bdiff()](function.xdiff-string-bdiff.md) - Створити
бінарний патч для двох рядків
- [xdiff_string_rabdiff()](function.xdiff-string-rabdiff.md) -
Порівняти два рядки і створити бінарний патч використовуючи
поліномінальний алгоритм Rabin fingerprint
