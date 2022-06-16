- [« Imagick::statisticImage](imagick.statisticimage.md)
- [Imagick::stereoImage »](imagick.stereoimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Приховує цифровий водяний знак у зображенні

# Imagick::steganoImage

(PECL imagick 2, PECL imagick 3)

Imagick::steganoImage — Приховує цифровий водяний знак у зображенні

### Опис

public **Imagick::steganoImage**([Imagick](class.imagick.md)
`$watermark_wand`, int `$offset`): [Imagick](class.imagick.md)

Приховує цифровий водяний знак у зображенні. Відновіть прихований
водяний знак пізніше, щоб довести справжність зображення. Зміщення
визначає початкову позицію на зображенні, щоб приховати водяний знак.

### Список параметрів

`watermark_wand`

`offset`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.
