- [«popen](function.popen.md)
- [readlink »] (function.readlink.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Виводить файл

# readfile

(PHP 4, PHP 5, PHP 7, PHP 8)

readfile — Виводить файл

### Опис

**readfile**(string `$filename`, bool `$use_include_path` u003d **`false`**,
?resource `$context` u003d **`null`**): int\|false

Читає файл та записує його у буфер виводу.

### Список параметрів

`filename`
Ім'я файлу, що читається.

`use_include_path`
Якщо ви хочете, щоб використовувався пошук файлу в
[include_path](ini.core.md#ini.include-path), установіть цей параметр
в **`true`**.

`context`
Ресурс (resource) із [контекстом потоку](stream.contexts.md).

### Значення, що повертаються

Повертає кількість прочитаних із файлу байт у разі успішного
виконання або **`false`** у разі виникнення помилки

### Помилки

У разі невдалого завершення роботи генерується помилка рівня
**`E_WARNING`**.

### Приклади

**Приклад #1 Примусове завантаження за допомогою **readfile()****

` <?php$file u003d 'monkey.gif';if (file_exists($file)) {    header('Content-Description: File Transfer'); header('Content-Type: application/octet-stream'); header('Content-Disposition: attachment; filenameu003d"'.basename($file).'"'); header('Expires: 0'); header('Cache-Control: must-revalidate'); header('Pragma: public'); header('Content-Length: ' . filesize($file)); readfile($file); exit;}?> `

Результатом виконання цього прикладу буде щось подібне:

![Діалог відкриття / збереження
файлу](images/e88cefb5c3fca5060e2490b9763c4433-readfile.png)

### Примітки

> **Примітка**:
>
> **readfile()** сама по собі не призводить до будь-яких проблем з
> пам'яттю, навіть під час надсилання великих файлів. У разі виникнення помилки
> Перевищення пам'яті переконайтеся, що буферизація виводу вимкнена з
> за допомогою [ob_get_level()](function.ob-get-level.md).

**Підказка**

Для цієї функції ви можете використовувати URL як ім'я файлу, якщо
була включена опція [fopen
wrappers](filesystem.configuration.md#ini.allow-url-fopen). Дивіться
докладнішу інформацію про визначення імені файлу в описі функції
[fopen()](function.fopen.md). Дивіться також список підтримуваних
оберток URL, їх можливості, зауваження щодо використання та список
визначених констант у розділі [Підтримувані протоколи та
обертки](wrappers.md).

### Дивіться також

- [fpassthru()](function.fpassthru.md) - Виводить всі, що залишилися.
дані з файлового покажчика
- [file()](function.file.md) - Читає вміст файлу та поміщає
його в масив
- [fopen()](function.fopen.md) - Відкриває файл або URL
- [include](function.include.md) - include
- [require](function.require.md) - require
- [virtual()](function.virtual.md) - Виконує підзапит Apache
- [file_get_contents()](function.file-get-contents.md) - Читає
вміст файлу в рядок
- [Підтримувані протоколи та обгортки](wrappers.md)
