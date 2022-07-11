- [«SplFileObject](class.splfileobject.md)
- [SplFileObject::current »](splfileobject.current.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Створює об'єкт SplFileObject

# SplFileObject::\_\_construct

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::\_\_construct — Створює об'єкт SplFileObject

### Опис

public **SplFileObject::\_\_construct**(
string `$filename`,
string `$mode` u003d "r",
bool `$useIncludePath` u003d **`false`**,
?resource `$context` u003d **`null`**
)

Створює новий файловий об'єкт.

### Список параметрів

`filename`
Файл, який потрібно прочитати.

**Підказка**
Для цієї функції ви можете використовувати URL як ім'я файлу, якщо
була включена опція [fopen
wrappers](filesystem.configuration.md#ini.allow-url-fopen). Дивіться
докладнішу інформацію про визначення імені файлу в описі функції
[fopen()](function.fopen.md). Дивіться також список підтримуваних
оберток URL, їх можливості, зауваження щодо використання та список
визначених констант у розділі [Підтримувані протоколи та
обертки](wrappers.md).

`mode`
Режим роботи із файлом. Список можливих режимів роботи наведено в
опис функції [fopen()](function.fopen.md).

`useIncludePath`
Чи потрібно переглядати
[include_path](ini.core.md#ini.include-path) під час пошуку файлу
`filename`.

`context`
Допустимий ресурс контексту, створений функцією
[stream_context_create()](function.stream-context-create.md).

### Помилки

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо файл `filename` неможливо відкрити.

Викидає виняток [LogicException](class.logicexception.md), якщо
`filename` є каталогом.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::\_\_construct()****

Цей приклад відкриває поточний файл і перебирає його рядків.

` <?php$file u003d new SplFileObject(__FILE__);foreach ($file as $line_num u003d> $line) {    echo "Рядок$line_num: $line";}?> `

Результатом виконання цього прикладу буде щось подібне:

Рядок 0: <?php
Рядок 1: $file u003d New SplFileObject(__FILE__);
Рядок 2: foreach ($file as $line_num u003d> $line) {
Рядок 3: echo "Line $line_num is $line";
Рядок 4: }
Рядок 5: ?>

### Дивіться також

- [SplFileInfo::openFile()](splfileinfo.openfile.md) - Отримує
об'єкт SplFileObject для файлу
- [fopen()](function.fopen.md) - Відкриває файл або URL
