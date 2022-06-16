- [« Phar::unlinkArchive](phar.unlinkarchive.md)
- [PharData »](class.phardata.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Направляє запит із браузера у внутрішній файл у phar-архіві

# Phar::webPhar

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::webPhar — Надсилає запит із браузера у внутрішній файл
phar-архіві

### Опис

final public static **Phar::webPhar**(
?string `$alias` u003d **`null`**,
?string `$index` u003d **`null`**,
?string `$fileNotFoundScript` u003d **`null`**,
array `$mimeTypes` u003d \[\],
?[callable](language.types.callable.md) `$rewrite` u003d **`null`**
): void

**Phar::webPhar()** служить [Phar::mapPhar()](phar.mapphar.md) для
веб-архівів ПАР. Метод аналізує `$_SERVER['REQUEST_URI']` та
надсилає запит із браузера у внутрішній файл у phar-архіві. Він
імітує веб-сервер, надсилає запити до потрібного файлу, відображає
правильні заголовки та аналізує файли PHP при необхідності. В
поєднанні з [Phar::mungServer()](phar.mungserver.md) та
[Phar::interceptFileFuncs()](phar.interceptfilefuncs.md), будь-яке
веб-додаток можна використовувати без змін із phar-архіву.

**Phar::webPhar()** повинен викликатися тільки із заглушки (stub)
phar-архіва (про те, що таке заглушка і як з ним працювати, читайте
[Тут] (phar.fileformat.stub.md)).

### Список параметрів

`alias`
Псевдонім для використання в обгортках `phar://`.

`index`
Розташування в phar-архіві індексного файлу.

`fileNotFoundScript`
Розташування скрипта, який відповідає за обробку помилки HTTP 404. Скрипт
повинен повертати коректні заголовки цієї помилки.

`mimeTypes`
Масив зіставлення розширень файлів типу MIME. Якщо достатньо
Порівняння за замовчуванням, передайте сюди порожній масив. за
замовчуванням використовуються такі зіставлення:

` <?php$mimes u003d array(    'phps' u003d> Phar::PHPS, // передається в highlight_file()   'c' u003d> 'text/plain',    ' ' u003d> 'text/plain',   'c++' u003d> 'text/plain',   'dtd' u003d> 'text/plain',   'h' u003d>>'text/plain',      plain',   'rng' u003d> 'text/plain',   'txt' u003d> 'text/plain',   'xsd' u003d> 'text/plain',    'php' u003d> PHP   'inc' u003d> Phar::PHP, // розбірується як PHP   'avi' u003d> 'video/avi',   'bmp' u003d> 'image/bmp', '  gif' u003d> 'image/gif',   'htm' u003d> 'text/html',   'html' u003d> 'text/html',    htmls' u003d> 'text/html',    ' 'ico /x-ico',   'jpe' u003d> 'image/jpeg',    'jpg' u003d> 'image/jpeg',   'jpeg' u003d> 'image/jpeg',    'js' ',   'midi' u003d> 'audio/midi',   'mid' u003d> 'audio/midi',   'mod' u003d> 'audio/mod',    'mov' u003d>'  > 'audio/mp3',    'mpg' u003d> 'video/mpeg',   'mpeg' u003d> 'video/mpeg',    'pdf' u003d> 'application/pdf',     png ,   'swf ' u003d> 'application/shockwave-flash',   'tif' u003d> 'image/tiff',   'tiff' u003d> 'image/tiff',    'wav' u003d> 'audio/wav'  image/xbm',   'xml' u003d> 'text/xml',);?> `

`rewrite`
Функція перезапису, якою передається єдиний рядковий параметр і
яка має також повернути рядок, або **`false`**.

Якщо ви використовуєте fast-cgi або cgi, то параметром, що передається в цю
функцію буде значення змінної `$_SERVER['PATH_INFO']`. В іншому випадку
передаватиметься значення змінної `$_SERVER['REQUEST_URI']`.

Якщо буде повернено рядок, то його буде використано як шлях до файлу
всередині архіву. Якщо повернеться **`false`**, то webPhar() надішле код помилки
HTTP 403

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викине виняток [PharException](class.pharexception.md), якщо
буде неможливо відкрити будь-який файл, або якщо викликати її не з
заглушки. Якщо в параметрі mimeTypes вказати некоректний MIME-тип,
або в `rewrite` буде передана некоректна функція зворотного дзвінка, то
буде викинуто виняток
[UnexpectedValueException](class.unexpectedvalueexception.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------------|
| 8.0.0 | `fileNotFoundScript`, `mimeTypes` та `rewrite` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **Phar::webPhar()****

У прикладі нижче створений phar відобразить `Hello World` при зверненні з
браузера до `/myphar.phar/index.php` або до `/myphar.phar`, і відобразить
вихідний код `index.phps` при зверненні до `/myphar.phar/index.phps`.

`<?php// створюємо архів:try {    $phar u003d new Phar('myphar.phar'); $phar['index.php'] u003d '<?php echo "Hello World"; ?>'; $phar['index.phps'] u003d '<?php echo "Hello World"; ?>'; $phar->setStub('<?phpPhar::webPhar();__HALT_COMPILER(); ?>');} catch (Exception $e) {    // обробка помилок}?> `

### Дивіться також

- [Phar::mungServer()](phar.mungserver.md) - Визначити список до
чотирьох $\_SERVER-змінних, які мають бути змінені для
запуску
- [Phar::interceptFileFuncs()](phar.interceptfilefuncs.md) -
Вказує phar перехоплювати fopen, file_get_contents, opendir і все
stat-функції
