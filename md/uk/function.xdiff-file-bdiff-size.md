- [« Функції xdiff](ref.xdiff.md)
- [xdiff_file_bdiff »](function.xdiff-file-bdiff.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Отримати розмір файлу після застосування бінарного патчу

#xdiff_file_bdiff_size

(PECL xdiff \>u003d 1.5.0)

xdiff_file_bdiff_size — Отримати розмір файлу після застосування бінарного
патча

### Опис

**xdiff_file_bdiff_size**(string `$file`): int

Повертає розмір файлу, який буде створено після застосування бінарного
патча із файлу `file`.

### Список параметрів

`file`
Шлях до бінарного патчу, створеного функціями
[xdiff_string_bdiff()](function.xdiff-string-bdiff.md) або
[xdiff_string_rabdiff()](function.xdiff-string-rabdiff.md).

### Значення, що повертаються

Повертає розмір файлу, який буде створено.

### Приклади

**Приклад #1 Приклад використання **xdiff_file_bdiff_size()****

Наступний код отримує розмір файлу, який буде створено після
застосування патчу.

` <?php$length u003d xdiff_string_bdiff_size('file.bdiff');echo "Розмір результуючого файлу буде $length байт";?> `

### Дивіться також

- [xdiff_file_bdiff()](function.xdiff-file-bdiff.md) - Створити
бінарний патч порівнюючи два файли
- [xdiff_file_rabdiff()](function.xdiff-file-rabdiff.md) - Створити
бінарний патч порівнюючи два файли за допомогою поліномінального
алгоритму Rabin fingerprinting
- [xdiff_file_bpatch()](function.xdiff-file-bpatch.md) - Застосувати
бінарний патч до файлу
