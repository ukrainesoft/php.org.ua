- [«fdf_remove_item](function.fdf-remove-item.md)
- [fdf_save »](function.fdf-save.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Повертає документ FDF у вигляді рядка

#fdf_save_string

(PHP 4 \>u003d 4.3.0, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_save_string — Повертає документ FDF у вигляді рядка

### Опис

**fdf_save_string**(resource `$fdf_document`): string

Повертає документ FDF у вигляді рядка.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) or
[fdf_open_string()](function.fdf-open-string.md).

### Значення, що повертаються

Повертає документ у вигляді рядка або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Отримання FDF у вигляді рядка**

` <?php$fdf u003d fdf_create();fdf_set_value($fdf, "foo", "bar");$str u003d fdf_save_string($fdf);fdf_close($fdf);echo $str;?> `

Результат виконання цього прикладу:

%FDF-1.2
%âãÏÓ
1 0 obj
<<
/FDF << /Fields 2 0 R >>
>>
endobj
2 0 obj
[
<< /T (foo)/V (bar)>>
]
endobj
trailer
<<
/Root 1 0 R

>>
%%EOF

### Дивіться також

- [fdf_open_string()](function.fdf-open-string.md) - Читає FDF
документ з рядка
- [fdf_close()](function.fdf-close.md) - Закриває FDF-документ
- [fdf_create()](function.fdf-create.md) - Створює новий документ
FDF
- [fdf_save()](function.fdf-save.md) - Зберігає документ FDF
