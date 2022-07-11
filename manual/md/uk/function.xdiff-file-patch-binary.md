- [«xdiff_file_merge3](function.xdiff-file-merge3.md)
- [xdiff_file_patch »](function.xdiff-file-patch.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Псевдонім для xdiff_file_bpatch

#xdiff_file_patch_binary

(PECL xdiff \>u003d 0.2.0)

xdiff_file_patch_binary — Псевдонім для xdiff_file_bpatch

### Опис

**xdiff_file_patch_binary**(string `$file`, string `$patch`, string
`$dest`): bool

Застосувати до файлу `file` патч `patch` і записати результат у файл
`dest`. Ця функція приймає патчі створені як
[xdiff_file_bdiff()](function.xdiff-file-bdiff.md) так і
[xdiff_file_rabdiff()](function.xdiff-file-rabdiff.md) або їх
копії.

Починаючи з версії 1.5.0 ця функція є псевдонімом
[xdiff_file_bpatch()](function.xdiff-file-bpatch.md).

### Список параметрів

`file`
Оригінальний файл.

`patch`
Файл бінарний патч.

`dest`
Підсумковий файл.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **xdiff_file_patch_binary()****

У цьому коді показано застосування бінарного патча до файлу.

` <?php$old_version u003d 'archive-1.0.tgz';$patch u003d 'archive.bpatch';$result u003d xdiff_file_patch_binary($old_version, $patch, 'archive-1.1.tgz');if ($result) echo "Файл пропатчений";} else {   echo "Файл не може бути пропатчений";}?> `

### Примітки

> **Примітка**:
>
> Обидва файли (`file` і `patch`) будуть завантажені на згадку, отже
> Переконайтеся, що параметр memory_limit налаштований коректно.

### Дивіться також

- [xdiff_string_patch_binary()](function.xdiff-string-patch-binary.md) -
Псевдонім для xdiff_string_bpatch
