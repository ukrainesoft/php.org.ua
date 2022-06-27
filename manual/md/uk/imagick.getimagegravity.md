- [« Imagick::getImageGeometry](imagick.getimagegeometry.md)
- [Imagick::getImageGreenPrimary »](imagick.getimagegreenprimary.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає значення гравітації (тяжіння)

# Imagick::getImageGravity

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::getImageGravity — Повертає значення гравітації (тяжіння)

### Опис

public **Imagick::getImageGravity**(): int

Повертає значення гравітації зображення. На відміну від
[Imagick::getGravity()](imagick.getgravity.md), цей метод повертає
гравітацію, встановлену для поточного зображення у послідовності.
Цей метод доступний, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або старше.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає значення гравітації. Дивіться список [констант
гравітації](imagick.constants.md#imagick.constants.gravity).
