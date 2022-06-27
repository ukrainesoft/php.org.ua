- [«Зумовлені константи](filesystem.constants.md)
- [basename »](function.basename.md)

- [PHP Manual](index.md)
- [Файлова система](book.filesystem.md)
- Функції файлової системи

# Функції файлової системи

# Дивіться також

Опис родинних функцій ви зможете знайти у розділах
[Каталоги](ref.dir.md) та [Виконання програм](ref.exec.md).

За списком обгорток URL для роботи з віддаленими файлами та поясненнями
зверніться до розділу [Підтримувані протоколи та обгортки](wrappers.md).

## Зміст

- [basename](function.basename.md) — Повертає останній компонент
імені із зазначеного шляху
- [chgrp](function.chgrp.md) — Змінює групу файлу
- [chmod](function.chmod.md) — Змінює режим доступу до файлу
- [chown](function.chown.md) — Змінює власника файлу
- [clearstatcache](function.clearstatcache.md) - Очищає кеш
стану файлів
- [copy](function.copy.md) — копіює файл
- [delete](function.delete.md) — Дивіться опис функції unlink
або unset
- [dirname](function.dirname.md) — Повертає батьківське ім'я
каталогу із зазначеного шляху
- [disk_free_space](function.disk-free-space.md) — Повертає розмір
доступного простору в каталозі або файловій системі
- [disk_total_space](function.disk-total-space.md) - Повертає
загальний розмір файлової системи або розділу диска
- [diskfreespace](function.diskfreespace.md) - Псевдонім
disk_free_space
- [fclose](function.fclose.md) — Закриває відкритий дескриптор файлу
- [fdatasync](function.fdatasync.md) — Синхронізує дані (але не
метадані) з файлом
- [feof](function.feof.md) — Перевіряє, чи кінець файлу досягнуто
- [fflush](function.fflush.md) — Скидає буфер виводу у файл
- [fgetc](function.fgetc.md) — Зчитує символ із файлу
- [fgetcsv](function.fgetcsv.md) — Читає рядок із файлу та
проводить розбір даних CSV
- [fgets](function.fgets.md) — Читає рядок із файлу
- [fgetss](function.fgetss.md) — Читає рядок з файлу та видаляє
HTML-теги
- [file_exists](function.file-exists.md) - Перевіряє існування
вказаного файлу чи каталогу
- [file_get_contents](function.file-get-contents.md) - Читає
вміст файлу в рядок
- [file_put_contents](function.file-put-contents.md) - Пише дані
у файл
- [file](function.file.md) — Читає вміст файлу та поміщає його
в масив
- [fileatime](function.fileatime.md) — Повертає час останнього
доступу до файлу
- [filectime](function.filectime.md) — Повертає час зміни
індексного дескриптора файлу
- [filegroup](function.filegroup.md) — Отримує ідентифікатор групи
файлу
- [fileinode](function.fileinode.md) - Повертає індексний
дескриптор файлу
- [filemtime](function.filemtime.md) — Повертає час останнього
зміни файлу
- [fileowner](function.fileowner.md) — Повертає ідентифікатор
власника файлу
- [fileperms](function.fileperms.md) — Повертає інформацію про
правах на файл
- [filesize](function.filesize.md) — Повертає розмір файлу
- [filetype](function.filetype.md) — Повертає тип файлу
- [flock](function.flock.md) - Портована консультативна
блокування файлів
- [fnmatch](function.fnmatch.md) — Перевірка збігу імені файлу
із шаблоном
- [fopen](function.fopen.md) — Відкриває файл або URL-адресу
- [fpassthru](function.fpassthru.md) — Виводить всі дані, що залишилися.
з файлового покажчика
- [fputcsv](function.fputcsv.md) — Форматує рядок у вигляді CSV та
записує її у файловий покажчик
- [fputs](function.fputs.md) - Псевдонім fwrite
- [fread](function.fread.md) - Бінарно-безпечне читання файлу
- [fscanf](function.fscanf.md) — Обробляє дані з файлу
відповідно до формату
- [fseek](function.fseek.md) — Встановлює зміщення у файловому
вказівнику
- [fstat](function.fstat.md) — Отримує інформацію про файл,
використовуючи відкритий файловий покажчик
- [fsync](function.fsync.md) — Синхронізує зміни у файлі
(включаючи метадані)
- [ftell](function.ftell.md) — Повертає поточну позицію вказівника
читання/запису файлу
- [ftruncate](function.ftruncate.md) — Урізує файл до вказаного
довжини
- [fwrite](function.fwrite.md) — Бінарно-безпечний запис у файл
- [glob](function.glob.md) — Знаходить файлові шляхи, що збігаються з
шаблоном
- [is_dir](function.is-dir.md) — Визначає, чи є ім'я файлу
директорією
- [is_executable](function.is-executable.md) — Визначає, чи є
чи файл виконуваним
- [is_file](function.is-file.md) — Визначає, чи є файл
звичайним файлом
- [is_link](function.is-link.md) — Визначає, чи є файл
символічним посиланням
- [is_readable](function.is-readable.md) - Визначає існування
файлу і чи доступний він для читання
- [is_uploaded_file](function.is-uploaded-file.md) - Визначає, був
файл завантажений за допомогою HTTP POST
- [is_writable](function.is-writable.md) — Визначає, чи доступний
файл для запису
- [is_writeable](function.is-writeable.md) - Псевдонім is_writable
- [lchgrp](function.lchgrp.md) — Змінює групу, якою
належить символічне посилання
- [lchown](function.lchown.md) — Змінює символічного власника
посилання
- [link](function.link.md) - Створює жорстке посилання
- [linkinfo](function.linkinfo.md) — Повертає інформацію про посилання
- [lstat](function.lstat.md) — Повертає інформацію про файл або
символічне посилання
- [mkdir](function.mkdir.md) — створює директорію
- [move_uploaded_file](function.move-uploaded-file.md) — Переміщує
завантажений файл у нове місце
- [parse_ini_file](function.parse-ini-file.md) - Обробляє
конфігураційний файл
- [parse_ini_string](function.parse-ini-string.md) - Розбирає
рядок конфігурації
- [pathinfo](function.pathinfo.md) — Повертає інформацію про шлях до
файлу
- [pclose](function.pclose.md) — Закриває файловий покажчик
процесу
- [popen](function.popen.md) — Відкриває файловий покажчик процесу
- [readfile](function.readfile.md) - Виводить файл
- [readlink](function.readlink.md) - Повертає файл, на який
вказує символічне посилання
- [realpath_cache_get](function.realpath-cache-get.md) - Отримує
записи з кеша realpath
- [realpath_cache_size](function.realpath-cache-size.md) - Отримує
розмір кеша realpath
- [realpath](function.realpath.md) - Повертає канонізований
абсолютний шлях до файлу
- [rename](function.rename.md) — Перейменовує файл або директорію
- [rewind](function.rewind.md) — Скидає курсор файлу
вказівника
- [rmdir](function.rmdir.md) — Видаляє каталог
- [set_file_buffer](function.set-file-buffer.md) - Псевдонім
stream_set_write_buffer
- [stat](function.stat.md) — Повертає інформацію про файл
- [symlink](function.symlink.md) — Створює символічне посилання
- [tempnam](function.tempnam.md) — Створює файл із унікальним ім'ям
- [tmpfile](function.tmpfile.md) — Створення тимчасового файлу
- [touch](function.touch.md) — Встановлює час доступу та
модифікації файлу
- [umask](function.umask.md) — Змінює поточну umask
- [unlink](function.unlink.md) — Видалення файлу
