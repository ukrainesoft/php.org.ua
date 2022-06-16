- [«
Imagick::paintTransparentImage](imagick.painttransparentimage.md)
- [Imagick::pingImageBlob »](imagick.pingimageblob.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Отримує основні атрибути зображення

# Imagick::pingImage

(PECL imagick 2, PECL imagick 3)

Imagick::pingImage — Отримує основні атрибути зображення

### Опис

public **Imagick::pingImage**(string `$filename`): bool

Метод можна використовувати для запиту ширини, висоти, розміру та формату
зображення без зчитування всього зображення на згадку.

### Список параметрів

`filename`
Ім'я файлу, з якого слід прочитати інформацію.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.
