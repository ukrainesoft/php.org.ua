- [«xdiff_string_merge3](function.xdiff-string-merge3.md)
- [xdiff_string_patch »](function.xdiff-string-patch.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Псевдонім для xdiff_string_bpatch

#xdiff_string_patch_binary

(PECL xdiff \>u003d 0.2.0)

xdiff_string_patch_binary — Псевдонім для xdiff_string_bpatch

### Опис

**xdiff_string_patch_binary**(string `$str`, string `$patch`): string

Застосовує до рядка `str` бінарний патч `patch`. Ця функція приймає
патчі створені як
[xdiff_string_bdiff()](function.xdiff-string-bdiff.md), так і
[xdiff_string_rabdiff()](function.xdiff-string-rabdiff.md).

Починаючи з версії 1.5.0, є псевдонімом для
[xdiff_string_bpatch()](function.xdiff-string-bpatch.md).

### Список параметрів

`str`
Оригінальний бінарний рядок.

`patch`
Рядок з бінарним патчем.

### Значення, що повертаються

Повертає змінений рядок, або **`false`** у разі виникнення
помилки.

### Дивіться також

- [xdiff_string_bpatch()](function.xdiff-string-bpatch.md) -
Застосування бінарного патча до рядка
- [xdiff_string_bdiff()](function.xdiff-string-bdiff.md) - Створити
бінарний патч для двох рядків
- [xdiff_string_rabdiff()](function.xdiff-string-rabdiff.md) -
Порівняти два рядки і створити бінарний патч використовуючи
поліномінальний алгоритм Rabin fingerprint
