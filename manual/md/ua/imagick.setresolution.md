- [« Imagick::setRegistry](imagick.setregistry.md)
- [Imagick::setResourceLimit »](imagick.setresourcelimit.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює роздільну здатність зображення

# Imagick::setResolution

(PECL imagick 2, PECL imagick 3)

Imagick::setResolution — Встановлює роздільну здатність зображення

### Опис

public **Imagick::setResolution**(float `$x_resolution`, float
`$y_resolution`): bool

Встановлює роздільну здатність зображення.

### Список параметрів

`x_resolution`
Горизонтальний дозвіл.

`y_resolution`
Вертикальна роздільна здатність.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Примітки

**Imagick::setResolution()** необхідно викликати перед завантаженням або
створення зображення.

### Дивіться також

- [Imagick::setImageResolution()](imagick.setimageresolution.md) -
Встановлює роздільну здатність зображення
- [Imagick::getImageResolution()](imagick.getimageresolution.md) -
Повертає роздільну здатність зображення за X та Y
