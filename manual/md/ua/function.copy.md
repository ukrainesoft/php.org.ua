- [«clearstatcache](function.clearstatcache.md)
- [delete »] (function.delete.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Копіює файл

# copy

(PHP 4, PHP 5, PHP 7, PHP 8)

copy — Копіює файл

### Опис

**copy**(string `$from`, string `$to`, ?resource `$context` u003d
**`null`**): bool

Копіює файл `from` у файл з ім'ям `to`.

Якщо потрібно перейменувати файл, використовуйте функцію
[rename()](function.rename.md).

### Список параметрів

`from`
Шлях до вихідного файлу.

`to`
Дорога до цільового файлу. Якщо `to` є URL, то операція копіювання
може завершитися помилкою, якщо обгортка URL не підтримує
перезаписування наявних файлів.

**Увага**
Якщо цільовий файл вже існує, він буде перезаписаний.

`context`
Коректний ресурс контексту, створений функцією
[stream_context_create()](function.stream-context-create.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання функції **copy()****

` <?php$file u003d 'example.txt';$newfile u003d 'example.txt.bak';if (!copy($file, $newfile)) {   echo "не удалося скопіювати $file...
";}?> `

### Дивіться також

- [move_uploaded_file()](function.move-uploaded-file.md) -
Переміщує завантажений файл у нове місце
- [rename()](function.rename.md) - Перейменовує файл або
директорію
- Розділ керівництва "[Завантаження файлів](features.file-upload.md)"
