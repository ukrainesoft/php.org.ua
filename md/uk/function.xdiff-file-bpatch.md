- [«xdiff_file_bdiff](function.xdiff-file-bdiff.md)
- [xdiff_file_diff_binary »](function.xdiff-file-diff-binary.md)

- [PHP Manual](index.md)
- [Функції xdiff](ref.xdiff.md)
- Застосувати бінарний патч до файлу

#xdiff_file_bpatch

(PECL xdiff \>u003d 1.5.0)

xdiff_file_bpatch — Застосувати бінарний патч до файлу

### Опис

**xdiff_file_bpatch**(string `$file`, string `$patch`, string `$dest`):
bool

Застосувати до файлу `file` патч `patch` і записати результат у файл
`dest`. Ця функція приймає патчі, створені як
[xdiff_file_bdiff()](function.xdiff-file-bdiff.md) так і
[xdiff_file_rabdiff()](function.xdiff-file-rabdiff.md) або їх
копії.

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

**Приклад #1 Приклад використання **xdiff_file_bpatch()****

У цьому коді показано застосування бінарного патча до файлу.

` <?php$old_version u003d 'archive-1.0.tgz';$patch u003d 'archive.bpatch';$result u003d xdiff_file_bpatch($old_version, $patch, 'archive-1.1.tgz');if ($result) { echo "Файл пропатчений";} else {   echo "Файл не може бути пропатчений";}?> `

### Примітки

> **Примітка**:
>
> Обидва файли (`file` і `patch`) будуть завантажені на згадку, отже
> Переконайтеся, що параметр memory_limit налаштований коректно.

### Дивіться також

- [xdiff_file_bdiff()](function.xdiff-file-bdiff.md) - Створити
бінарний патч порівнюючи два файли
- [xdiff_file_rabdiff()](function.xdiff-file-rabdiff.md) - Створити
бінарний патч порівнюючи два файли за допомогою поліномінального
алгоритму Rabin fingerprinting
