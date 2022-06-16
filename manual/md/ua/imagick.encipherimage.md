- [« Imagick::embossImage](imagick.embossimage.md)
- [Imagick::enhanceImage »](imagick.enhanceimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Шифрує зображення

# Imagick::encipherImage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::encipherImage — Шифрує зображення

### Опис

public **Imagick::encipherImage**(string `$passphrase`): bool

Перетворює звичайні пікселі на зашифровані пікселі. Зображення не
читається, доки не буде розшифровано за допомогою
[Imagick::decipherImage()](imagick.decipherimage.md) Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.3.9 або
старше.

### Список параметрів

`passphrase`
Пароль

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Дивіться також

- [Imagick::decipherImage()](imagick.decipherimage.md) -
Розшифровує зображення
