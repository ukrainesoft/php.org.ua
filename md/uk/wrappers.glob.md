- [«data://](wrappers.data.md)
- [phar://»](wrappers.phar.md)

- [PHP Manual](index.md)
- [Підтримувані протоколи та обгортки](wrappers.md)
- Знаходження шляхів, що відповідають шаблону

# glob://

glob:// — Знаходження шляхів, що відповідають шаблону

### Опис

Обгортка потоку `glob:`.

### Використання

- `glob://`

### Опції

| Атрибут Підтримка
|------------------------------------------------- ----------------------------------------|--------- --|
| Обмеження на [allow_url_fopen](filesystem.configuration.md#ini.allow-url-fopen) | Ні |
| Обмеження на [allow_url_include](filesystem.configuration.md#ini.allow-url-include) | Ні |
| Читання | Ні |
| Запис | Ні |
| Додавання | Ні |
| Одночасне читання та запис | Ні |
| Підтримка [stat()](function.stat.md) | Ні |
| Підтримка [unlink()](function.unlink.md) | Ні |
| Підтримка [rename()](function.rename.md) | Ні |
| Підтримка [mkdir()](function.mkdir.md) | Ні |
| Підтримка [rmdir()](function.rmdir.md) | Ні |

**Основна інформація**

### Приклади

**Приклад #1 Основи використання**

` <?php// Переглянути все файли *.php в директорії ext/spl/examples/// і надрукувати імена файлів і их розміри$it u003d new DirectoryIterator("glob://ext );foreach($it as $f) {    printf("%s: %.1FK
", $f->getFilename(), $f->getSize()/1024);}?> `

tree.php: 1.0K
findregex.php: 0.6K
findfile.php: 0.7K
dba_dump.php: 0.9K
nocvsdir.php: 1.1K
phar_from_dir.php: 1.0K
ini_groups.php: 0.9K
directorytree.php: 0.9K
dba_array.php: 1.1K
class_tree.php: 1.8K
