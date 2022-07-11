- [«file_put_contents](function.file-put-contents.md)
- [fileatime »](function.fileatime.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Читає вміст файлу та поміщає його в масив

# file

(PHP 4, PHP 5, PHP 7, PHP 8)

file — Читає вміст файлу та поміщає його в масив

### Опис

**file**(string `$filename`, int `$flags` u003d 0, ?resource `$context` u003d
**`null`**): array\|false

Читає вміст файлу та поміщає його у масив.

> **Примітка**:
>
> Можна також використовувати функцію
> [file_get_contents()](function.file-get-contents.md) для отримання
> файл у вигляді рядка.

### Список параметрів

`filename`
Шлях до файлу.

**Підказка**
Для цієї функції ви можете використовувати URL як ім'я файлу, якщо
була включена опція [fopen
wrappers](filesystem.configuration.md#ini.allow-url-fopen). Дивіться
докладнішу інформацію про визначення імені файлу в описі функції
[fopen()](function.fopen.md). Дивіться також список підтримуваних
оберток URL, їх можливості, зауваження щодо використання та список
визначених констант у розділі [Підтримувані протоколи та
обертки](wrappers.md).

`flags`
Як необов'язковий параметр `flags` може можна вказати одну
або більше наступних констант:

**`FILE_USE_INCLUDE_PATH`**
Шукає файл у [include_path](ini.core.md#ini.include-path).

**`FILE_IGNORE_NEW_LINES`**
Пропускати новий рядок наприкінці кожного елемента масиву

**`FILE_SKIP_EMPTY_LINES`**
Пропускати порожні рядки

`context`
Ресурс (resource) із [контекстом потоку](stream.contexts.md).

### Значення, що повертаються

Повертає файл як масиву. Кожен елемент масиву відповідає
рядку файлу, з символами нового рядка включно. У разі помилки
**file()** повертає **`false`**.

> **Примітка**:
>
> Кожний рядок в отриманому масиві завершуватиметься символами кінця
> рядки, якщо не використовується **`FILE_IGNORE_NEW_LINES`**).

> **Примітка**: Якщо у вас виникають проблеми з розпізнаванням PHP
> кінців рядків під час читання або створення файлів на Macintosh-сумісному
> комп'ютер, включення опції
> [auto_detect_line_endings](filesystem.configuration.md#ini.auto-detect-line-endings)
> допоможе вирішити проблему.

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо файл не існує.

### Приклади

**Приклад #1 Приклад використання **file()****

`<?php// Отримує вміст файлу у вигляді масиву. У цьому прикладі ми використовуємо // звернення за протоколом HTTP для отримання HTML-коду з віддаленого сервера $lines -коду разом з номерами рядків.foreach ($lines as $line_num u003d> $line) {    echo "Рядок #<b>{$line_num}</b> : " . htmlspecialchars($line) . "<br />
";}// Використовуємо необов'язковий параметр flags$trimmed u003d file('somefile.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);?> `

### Примітки

**Увага**

При використанні SSL Microsoft IIS порушує протокол, закриваючи
з'єднання без надсилання індикатора `close_notify`. PHP повідомить про це
як "SSL: Fatal Protocol Error" в той момент, коли ви досягнете кінця
даних. Щоб обійти це, ви повинні встановити
[error_reporting](errorfunc.configuration.md#ini.error-reporting)
рівень, що виключає E_WARNING. PHP вміє визначати, що на стороні
сервера знаходиться проблемний IIS при відкритті потоку за допомогою обгортки
`https://` і виводить попередження. Якщо ви використовуєте
[fsockopen()](function.fsockopen.md) для створення `ssl://` сокету, ви
самі відповідаєте за визначення та придушення цього попередження.

### Дивіться також

- [file_get_contents()](function.file-get-contents.md) - Читає
вміст файлу в рядок
- [readfile()](function.readfile.md) - Виводить файл
- [fopen()](function.fopen.md) - Відкриває файл або URL
- [fsockopen()](function.fsockopen.md) - Відкриває з'єднання з
інтернет-сокетом або доменним сокетом Unix
- [popen()](function.popen.md) - Відкриває файловий покажчик
процесу
- [include](function.include.md) - include
- [stream_context_create()](function.stream-context-create.md) -
Створює контекст потоку
