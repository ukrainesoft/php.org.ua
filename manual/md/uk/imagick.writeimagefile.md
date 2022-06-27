- [« Imagick::writeImage](imagick.writeimage.md)
- [Imagick::writeImages »](imagick.writeimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Записує зображення у файл

# Imagick::writeImageFile

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::writeImageFile — Записує зображення у файл

### Опис

public **Imagick::writeImageFile**(resource `$filehandle`, string
`$format` u003d ?): bool

Записує зображення у заданий файловий дескриптор. Дескриптор повинен
бути попередньо відкритий, наприклад, за допомогою fopen. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.3.6 або
старше.

### Список параметрів

`filehandle`
Файловий дескриптор.

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
