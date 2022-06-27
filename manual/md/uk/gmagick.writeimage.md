- [«Gmagick::write](gmagick.write.md)
- [GmagickDraw »](class.gmagickdraw.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Записує зображення у вказаний файл

# Gmagick::writeimage

(PECL gmagick \>u003d Unknown)

Gmagick::writeimage — Записує зображення у вказаний файл

### Опис

public **Gmagick::writeimage**(string `$filename`, bool `$all_frames` u003d
**`false`**): [Gmagick](class.gmagick.md)

Записує зображення у вказаний файл. Якщо як ім'я файлу
вказано **`null`**, то зображення буде записано у файл, заданий
[Gmagick::readimage()](gmagick.readimage.md) або
[Gmagick::setimagefilename()](gmagick.setimagefilename.md).

### Список параметрів

`filename`
Ім'я файлу.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md).

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
