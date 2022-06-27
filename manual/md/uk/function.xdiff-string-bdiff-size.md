- [«xdiff_file_rabdiff](function.xdiff-file-rabdiff.md)
- [xdiff_string_bdiff »](function.xdiff-string-bdiff.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Отримати розмір файлу, створеного після застосування бінарного патчу

#xdiff_string_bdiff_size

(PECL xdiff \>u003d 1.5.0)

xdiff_string_bdiff_size — Отримати розмір файлу, створеного після
застосування бінарного патчу

### Опис

**xdiff_string_bdiff_size**(string `$patch`): int

Повертає розмір файлу, який буде створено після застосування бінарного
патча (patch) до оригінального файлу.

### Список параметрів

`patch`
Бінарний патч, створений функціями
[xdiff_string_bdiff()](function.xdiff-string-bdiff.md) або
[xdiff_string_rabdiff()](function.xdiff-string-rabdiff.md).

### Значення, що повертаються

Повертає розмір файлу в байтах.

### Приклади

**Приклад #1 Приклад використання **xdiff_string_bdiff_size()****

У наступному коді провадиться підрахунок результуючого розміру файлу
після застосування бінарного патчу.

` <?php$binary_patch u003d file_get_contents('file.bdiff');$length u003d xdiff_string_bdiff_size($binary_patch);echo "Результуючий файл буде займати $length 

### Дивіться також

- [xdiff_string_bdiff()](function.xdiff-string-bdiff.md) - Створити
бінарний патч для двох рядків
- [xdiff_string_rabdiff()](function.xdiff-string-rabdiff.md) -
Порівняти два рядки і створити бінарний патч використовуючи
поліномінальний алгоритм Rabin fingerprint
- [xdiff_string_bpatch()](function.xdiff-string-bpatch.md) -
Застосування бінарного патча до рядка
