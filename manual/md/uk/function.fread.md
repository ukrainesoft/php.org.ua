- [«fputs](function.fputs.md)
- [fscanf»] (function.fscanf.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Бінарно-безпечне читання файлу

# fread

(PHP 4, PHP 5, PHP 7, PHP 8)

fread — Бінарно-безпечне читання файлу

### Опис

**fread**(resource `$stream`, int `$length`): string\|false

**fread()** читає до `length` байт із файлового покажчика `stream` та
зміщує покажчик. Читання зупиняється як тільки було досягнуто
одна з наступних умов:

- було прочитано `length` байт
- досягнуто EOF (кінець файлу)
- став доступний пакет або минув [час очікування
сокета](function.socket-set-timeout.md) (для мережевих потоків)
- якщо потік, що читається, є буферизованим і не являє собою
звичайний файл, то за один раз максимум читається кількість байт,
рівне розміру однієї порції даних (зазвичай це 8192), однак,
залежно від раніше буферизованих даних розмір повертається
даних може бути більшим за розмір однієї порції даних.

### Список параметрів

`stream`
Вказівник (resource) на файл, який зазвичай створюється за допомогою функції
[fopen()](function.fopen.md).

`length`
`length` вказує розмір прочитаних даних у байтах.

### Значення, що повертаються

Повертає прочитаний рядок або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Простий приклад використання **fread()****

` <?php// отримує вміст файла в рядок$filename u003d "/usr/local/something.txt";$handle u003dfopen($filename, "r");$contents u003d fread($handle, filesi($file) ));fclose($handle);?> `

**Приклад #2 Приклад бінарного читання за допомогою **fread()****

**Увага**

На системах, які розрізняють бінарні та текстові файли (наприклад,
Windows), файл повинен бути відкритий з використанням прапора 'b' у параметрі
mode функції [fopen()](function.fopen.md).

` <?php$filename u003d "c:\files\somepic.gif";$handle u003dfopen($filename, "rb");$contents u003dfread($handle, filesize($filename));fclose($handle );?> `

**Приклад #3 Приклади віддаленого читання за допомогою **fread()****

**Увага**

При читанні чогось відмінного від локальних файлів, наприклад потоків,
повертаються під час читання [віддалених файлів](features.remote-files.md)
або з [popen()](function.popen.md) та
[fsockopen()](function.fsockopen.md), читання зупиниться після того,
як пакет стане доступним. Це означає, що ви повинні збирати дані
разом по шматочках, як показано на прикладі нижче.

` <?php$handle u003d fopen("http://www.example.com/", "rb");$contents u003d stream_get_contents($handle);fclose($handle);?> `

` <?php$handle u003d fopen("http://www.example.com/", "rb");if (FALSE u003du003du003d $handle) {    exit("Не вдалося відкрити потік за url адресою"); }$contents u003d '';while (!feof($handle)) {    $contents .u003d fread($handle, 8192);}fclose($handle);?> `

### Примітки

> **Примітка**:
>
> Якщо ви просто хочете отримати вміст файлу у вигляді рядка,
> використовуйте [file_get_contents()](function.file-get-contents.md),
> оскільки ця функція набагато продуктивніша, ніж описаний вище код.

> **Примітка**:
>
> Врахуйте, що **fread()** читає, починаючи з поточної позиції файлового
> покажчика. Використовуйте функцію [ftell()](function.ftell.md) для
> знаходження поточної позиції покажчика та функцію
> [rewind()](function.rewind.md) для перемотування позиції вказівника в
> Початок.

### Дивіться також

- [fwrite()](function.fwrite.md) - Бінарно-безпечний запис у файл
- [fopen()](function.fopen.md) - Відкриває файл або URL
- [fsockopen()](function.fsockopen.md) - Відкриває з'єднання з
інтернет-сокетом або доменним сокетом Unix
- [popen()](function.popen.md) - Відкриває файловий покажчик
процесу
- [fgets()](function.fgets.md) - Читає рядок із файлу
- [fgetss()](function.fgetss.md) - Читає рядок з файлу та видаляє
HTML-теги
- [fscanf()](function.fscanf.md) - Обробляє дані з файлу в
відповідно до формату
- [file()](function.file.md) - Читає вміст файлу та поміщає
його в масив
- [fpassthru()](function.fpassthru.md) - Виводить всі, що залишилися.
дані з файлового покажчика
- [ftell()](function.ftell.md) - Повертає поточну позицію
покажчика читання/запису файлу
- [rewind()](function.rewind.md) - Скидає курсор файлового
вказівника
- [unpack()](function.unpack.md) - Розпакувати дані з бінарної
рядки
