- [«parse_ini_string](function.parse-ini-string.md)
- [pclose »] (function.pclose.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Повертає інформацію про шлях до файлу

# pathinfo

(PHP 4 \>u003d 4.0.3, PHP 5, PHP 7, PHP 8)

pathinfo — Повертає інформацію про шлях до файлу

### Опис

**pathinfo**(string `$path`, int `$flags` u003d **`PATHINFO_ALL`**):
array\|string

**pathinfo()** повертає інформацію про `path` у вигляді асоціативного
масиву чи рядка, залежно від `flags`.

> **Примітка**:
>
> Докладніше про отримання інформації про поточний шлях, можна почитати в
> розділ [Предвизначені зарезервовані
> змінні](language.variables.predefined.md).

> **Примітка**:
>
> **pathinfo()** оперує вхідним рядком і не знає фактичного
> файлову систему або компоненти шляху, такі як "..".

**Застереження**

**pathinfo()** враховує налаштування локалі, тому для коректної
обробки шляху з багатобайтними символами має бути встановлена
відповідна локаль за допомогою функції
[setlocale()](function.setlocale.md).

### Список параметрів

`path`
Аналізований шлях.

`flags`
Якщо зазначений, то ставить, який з елементів шляху буде повернутий:
**`PATHINFO_DIRNAME`**, **`PATHINFO_BASENAME`**,
**`PATHINFO_EXTENSION`** та **`PATHINFO_FILENAME`**.

Якщо `flags` не вказано, то повертаються всі доступні елементи.

### Значення, що повертаються

Якщо параметр `flags` не переданий, то асоціативний масив, що повертається
(array) міститиме такі елементи: `dirname`, `basename`,
`extension` (якщо є) та `filename`.

> **Примітка**:
>
> Якщо `path` містить більше одного розширення, то
> **`PATHINFO_EXTENSION`** повертає тільки останній та
> **`PATHINFO_FILENAME`** видаляє лише останнє розширення. (дивіться
> Приклад нижче).

> **Примітка**:
>
> Якщо `path` не містить розширення, то не буде повернено елемент
> `extension` (дивіться нижче другий приклад).

> **Примітка**:
>
> Якщо `basename` параметра `path` починається з точки, то все
> наступні символи інтерпретуються як розширення файлу
> (`extension`) та ім'я файлу `filename` буде порожнім (дивіться третій
> Приклад).

Якщо вказано параметр `flags`, буде повернено рядок (string),
містить зазначений елемент.

### Приклади

**Приклад #1 Приклад використання функції **pathinfo()****

` <?php$path_parts u003d pathinfo('/www/htdocs/inc/lib.inc.php');echo $path_parts['dirname'], "
";echo $path_parts['basename'], "
";echo $path_parts['extension'], "
";echo $path_parts['filename'], "
";?> `

Результат виконання цього прикладу:

/www/htdocs/inc
lib.inc.php
php
lib.inc

**Приклад #2 Приклад з **pathinfo()**, що показує різницю між null та
відсутністю розширення**

` <?php$path_parts u003d pathinfo('/path/emptyextension.');var_dump($path_parts['extension']);$path_parts u003d pathinfo('/path/noextension');var_dump($path_parts['extension' ]);?> `

Результатом виконання цього прикладу буде щось подібне:

string(0) ""

Notice: Undefined index: extension in test.php on line 6
NULL

**Приклад #3 Приклад **pathinfo()** для файлу, що починається з точки**

` <?phpprint_r(pathinfo('/some/path/.test'));?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[dirname] u003d> /some/path
[basename] u003d> .test
[extension] u003d> test
[filename] u003d>
)

### Дивіться також

- [dirname()](function.dirname.md) - Повертає батьківське ім'я
каталогу із зазначеного шляху
- [basename()](function.basename.md) - Повертає останній
компонент імені із зазначеного шляху
- [parse_url()](function.parse-url.md) - Розбирає URL та повертає
його компоненти
- [realpath()](function.realpath.md) - Повертає канонізований
абсолютний шлях до файлу
