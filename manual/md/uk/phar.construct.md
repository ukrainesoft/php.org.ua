- [« Phar::compressFiles](phar.compressfiles.md)
- [Phar::convertToData »](phar.converttodata.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Створює об'єкт Phar-архіву

# Phar::\_\_construct

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::\_\_construct — Створює об'єкт Phar-архіву

### Опис

public **Phar::\_\_construct**(string `$filename`, int `$flags` u003d
FilesystemIterator::SKIP_DOTS \| FilesystemIterator::UNIX_PATHS, ?string
`$alias` u003d **`null`**)

### Список параметрів

`filename`
Шлях до вже існуючого Phar-архіву або до архіву, який має бути
створено. Розширення імені файлу має містити .phar.

`flags`
Прапори, які мають бути передані до батьківського класу
[RecursiveDirectoryIterator](class.recursivedirectoryiterator.md).

`alias`
Псевдонім, за допомогою якого повинні проводитись посилання на цей
Phar-архів у викликах, пов'язаних із функціоналом потоків.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо був
викликаний двічі, та виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
phar-архів може бути відкритий.

### Приклади

**Приклад #1 Приклад використання **Phar::\_\_construct()****

` <?phptry {    $p u003d new Phar('/путь/к/my.phar', FilesystemIterator::CURRENT_AS_FILEINFO | FilesystemIterator::KEY_AS_FILENAME,                  'my.phar');} catch (UnexpectedValueException $e) {    die(' Не удалося відкрити my.phar');} catch (BadMethodCallException $e) {   echo 'Технічно це не може відбутися';}// це тепер х't'ar'; / і працює так ж, як якщо би ми ввелиecho file_get_contents('phar:///шлях/к/my.phar/example.txt');?> `
