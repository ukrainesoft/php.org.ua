- [«xdiff_file_diff](function.xdiff-file-diff.md)
- [xdiff_file_patch_binary »](function.xdiff-file-patch-binary.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Об'єднання трьох файлів в один

#xdiff_file_merge3

(PECL xdiff \>u003d 0.2.0)

xdiff_file_merge3 — Об'єднання трьох файлів в один

### Опис

**xdiff_file_merge3**(
string `$old_file`,
string `$new_file1`,
string `$new_file2`,
string `$dest`
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Об'єднує три файли в один і зберігає результат `dest`. Файл
`old_file` є оригінальним файлом, тоді як `new_file1` та
`new_file2` його модифікованими версіями.

### Список параметрів

`old_file`
Шлях до першого, "старого" файлу.

`new_file1`
Шлях до другого файлу. Модифікованої версії `old_file`.

`new_file2`
Дорога до третього файлу. Модифікованої версії `old_file`.

`dest`
Шлях до результуючого файлу, який міститиме об'єднані
зміни з `new_file1` та `new_file2`.

### Значення, що повертаються

Повертає **`true`**, якщо об'єднання пройшло успішно, рядок з
відхиленими даними, якщо ні, і **`false`** у разі внутрішньої
помилки.

### Приклади

**Приклад #1 Приклад використання **xdiff_file_merge3()****

Наступний код поєднує три файли.

` <?php$old_version u003d 'original_script.php';$fix1 u003d 'script_with_fix1.php';$fix2 u003d 'script_with_fix2.php';$errors u003d xdiff_file_merge3($old_version, $fix1, );if(is_string($errors)) {    echo "Відхилені:
";   echo $errors;}?> `

### Дивіться також

- [xdiff_string_merge3()](function.xdiff-string-merge3.md) -
Об'єднати три рядки в один
