- [« Imagick::resampleImage](imagick.resampleimage.md)
- [Imagick::resizeImage »](imagick.resizeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Скидає сторінку зображення

# Imagick::resetImagePage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::resetImagePage — Скидає сторінку зображення

### Опис

public **Imagick::resetImagePage**(string `$page`): bool

Визначення сторінки у вигляді рядка. Рядок має формат WxH+x+y. Цей
метод доступний, якщо Imagick був скомпільований з версією ImageMagick
6.3.6 чи старше.

### Список параметрів

`page`
Визначення сторінки. Наприклад, `7168x5147+0+0`.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.
