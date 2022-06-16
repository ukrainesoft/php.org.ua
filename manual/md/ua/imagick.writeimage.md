- [« Imagick::whiteThresholdImage](imagick.whitethresholdimage.md)
- [Imagick::writeImageFile »](imagick.writeimagefile.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Записує зображення за вказаним ім'ям файлу

# Imagick::writeImage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::writeImage — Записує зображення за вказаним ім'ям файлу

### Опис

public **Imagick::writeImage**(string `$filename` u003d NULL): bool

Записує зображення у вказане ім'я файлу. Якщо параметр імені файлу
дорівнює NULL, зображення записується в ім'я файлу, встановлене з
за допомогою Imagick::readImage() або Imagick::setImageFilename().

### Список параметрів

`filename`
Назва файлу, куди записати зображення. Розширення імені файлу визначає
тип файлу. Формат може бути примусово встановлений незалежно від
розширення файлу, використовуючи префікс "format:", наприклад, "jpg:test.png".

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.
