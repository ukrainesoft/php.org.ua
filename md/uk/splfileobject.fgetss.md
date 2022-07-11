- [« SplFileObject::fgets](splfileobject.fgets.md)
- [SplFileObject::flock »](splfileobject.flock.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Отримати рядок із файлу та видалити теги HTML

# SplFileObject::fgetss

(PHP 5 \>u003d 5.1.0, PHP 7)

SplFileObject::fgetss — Отримати рядок із файлу та видалити теги HTML

**Увага**

Ця функція оголошена *СТУРШЕНОЮ*, починаючи з PHP 7.3.0 і була *ВИДАЛЕНА*
у версії PHP 8.0.0. Використовувати цю функцію не рекомендується.

### Опис

public **SplFileObject::fgetss**(string `$allowable_tags` u003d ?): string

Робота функції ідентична
[SplFileObject::fgets()](splfileobject.fgets.md) за винятком того,
що **SplFileObject::fgetss()** намагається очистити рядок від будь-яких тегів
HTML та PHP. Function retains the parsing state from call to call,
and as such is not equivalent to calling
[strip_tags()](function.strip-tags.md) on the return value of
[SplFileObject::fgets()](splfileobject.fgets.md). Функція зберігає
стан синтаксичного аналізу від виклику до виклику і тому
еквівалентна виклику [strip_tags()](function.strip-tags.md) для
значення, що повертається
[SplFileObject::fgets()](splfileobject.fgets.md).

### Список параметрів

`allowable_tags`
Необов'язковий параметр для вказівки тегів, які слід видаляти.

### Значення, що повертаються

Повертає рядок з файлу, очищений від HTML- та PHP-коду, або
**`false`** у разі помилки.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::fgetss()****

` <?php$str u003d <<<EOD<html><body> <p>Ласкаво просимо! Сьогодні <?php echo(date('jS')); ?> <?u003d date('F'); ?>.</p></body></html>Текст поза блоком HTML.EOD;file_put_contents("sample.php", $str);$file u003d new SplFileObject("sample.php");while (! $file->eof()) {   echo $file->fgetss();}?> `

Результатом виконання цього прикладу буде щось подібне:


Ласкаво просимо! Сьогодні.

Текст поза блоком HTML.

### Дивіться також

- [fgetss()](function.fgetss.md) - Читає рядок з файлу та видаляє
HTML-теги
- [SplFileObject::fgets()](splfileobject.fgets.md) - Отримує рядок
з файлу
- [SplFileObject::fgetc()](splfileobject.fgetc.md) - Отримує символ
з файлу
- [SplFileObject::current()](splfileobject.current.md) - Отримати
поточний рядок файлу
- Фільтр
[string.strip_tags](filters.string.md#filters.string.strip_tags)
