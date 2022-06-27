- [« Imagick::cycleColormapImage](imagick.cyclecolormapimage.md)
- [Imagick::deconstructImages »](imagick.deconstructimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Розшифровує зображення

# Imagick::decipherImage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::decipherImage — Розшифровує зображення

### Опис

public **Imagick::decipherImage**(string `$passphrase`): bool

Розшифровує зображення, яке було зашифровано раніше. Зображення
має бути зашифровано з використанням
[Imagick::encipherImage()](imagick.encipherimage.md). Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.3.9 або
старше.

### Список параметрів

`passphrase`
Пароль

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Дивіться також

- [Imagick::encipherImage()](imagick.encipherimage.md) - Шифрує
зображення
