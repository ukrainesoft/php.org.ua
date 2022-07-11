- [«fgets](function.fgets.md)
- [file_exists »](function.file-exists.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Читає рядок з файлу та видаляє HTML-теги

# fgetss

(PHP 4, PHP 5, PHP 7)

fgetss — Читає рядок з файлу та видаляє HTML-теги

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.3.0 і була *Видалена*
у версії PHP 8.0.0. Використовувати цю функцію не рекомендується.

### Опис

**fgetss**(resource `$handle`, int `$length` u003d ?, string
`$allowable_tags` u003d ?): string

Функція ідентична функції [fgets()](function.fgets.md), крім
того, що **fgetss()** видаляє будь-які NULL-байти, HTML- та PHP-теги з
прочитаного рядка. Функція зберігає стан синтаксичного аналізу
від виклику до виклику і тому не еквівалентна виклику
[strip_tags()](function.strip-tags.md) для значення, що повертається
[fgets()](function.fgets.md).

### Список параметрів

`handle`
Вказівник на файл повинен бути коректним і вказувати на файл успішно
відкритий функціями [fopen()](function.fopen.md) або
[fsockopen()](function.fsockopen.md) (і все ще не закритий функцією
[fclose()](function.fclose.md)).

`length`
Довжина даних.

`allowable_tags`
Можна використати третій необов'язковий параметр для вказівки тегів,
які не потрібно вирізати. Дивіться опис
[strip_tags()](function.strip-tags.md) для більш детальної інформації
про `allowable_tags`.

### Значення, що повертаються

Повертає рядок довжиною до `length` - 1 байт, прочитаних з файлу, на
який вказує дескриптор `handle`, з вирізаними тегами HTML та PHP.

У разі виникнення помилки повертає **`false`**.

### Приклади

**Приклад #1 Порядкове читання PHP-файлу**

` <?php$str u003d <<<EOD<html><body> <p>Ласкаво просимо! Сьогодні <?php echo(date('jS F')); ?>.</p></body></html>Текст поза HTML-блоку.EOD;file_put_contents('sample.php', $str);$handle u003d @fopen("sample.php", "r" );if ($handle) {    while (!feof($handle)) {       $buffer u003d fgetss($handle, 4096); echo $buffer; }   fclose($handle);}?> `

Результатом виконання цього прикладу буде щось подібне:

Ласкаво просимо! Сьогодні.

Текст поза HTML-блоком.

### Примітки

> **Примітка**: Якщо у вас виникають проблеми з розпізнаванням PHP
> кінців рядків під час читання або створення файлів на Macintosh-сумісному
> комп'ютер, включення опції
> [auto_detect_line_endings](filesystem.configuration.md#ini.auto-detect-line-endings)
> допоможе вирішити проблему.

### Дивіться також

- [fgets()](function.fgets.md) - Читає рядок із файлу
- [fopen()](function.fopen.md) - Відкриває файл або URL
- [popen()](function.popen.md) - Відкриває файловий покажчик
процесу
- [fsockopen()](function.fsockopen.md) - Відкриває з'єднання з
інтернет-сокетом або доменним сокетом Unix
- [strip_tags()](function.strip-tags.md) - Видаляє теги HTML та PHP
з рядка
- [SplFileObject::fgetss()](splfileobject.fgetss.md) - Отримати
рядок з файлу та видалити теги HTML
- Фільтр
[string.strip_tags](filters.string.md#filters.string.strip_tags)
