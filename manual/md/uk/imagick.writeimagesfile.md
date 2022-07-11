- [« Imagick::writeImages](imagick.writeimages.md)
- [ImagickDraw »](class.imagickdraw.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Записує кадри у файловий дескриптор

# Imagick::writeImagesFile

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::writeImagesFile — Записує кадри у файловий дескриптор

### Опис

public **Imagick::writeImagesFile**(resource `$filehandle`, string
`$format` u003d ?): bool

Записує всі кадри зображення у відкритий дескриптор файлу. Метод
можна використовувати для запису анімованих GIF-файлів або інших
багатокадрових зображень у відкритому дескрипторі файлу. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.3.6 або
старше.

### Список параметрів

`filehandle`
Файловий дескриптор, на який записати зображення.

`format`
Формат зображення. Список допустимих специфікаторів формату залежить від
скомпілованого набору функцій програми ImageMagick і можливо
запитаний під час виконання за допомогою методу
[Imagick::queryFormats()](imagick.queryformats.md).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Дивіться також

- [Imagick::queryFormats()](imagick.queryformats.md) - Повертає
формати, що підтримуються Imagick
