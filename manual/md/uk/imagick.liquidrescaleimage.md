- [« Imagick::linearStretchImage](imagick.linearstretchimage.md)
- [Imagick::listRegistry »](imagick.listregistry.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Анімує зображення або зображення

# Imagick::liquidRescaleImage

(PECL imagick 2 \>u003d 2.2.0, PECL imagick 3)

Imagick::liquidRescaleImage — Анімація зображення або зображення

### Опис

public **Imagick::liquidRescaleImage**(
int `$width`,
int `$height`,
float `$delta_x`,
float `$rigidity`
): bool

Масштабує зображення за допомогою методу liquid rescaling. Він
є реалізацією техніки seam carving. Щоб метод працював
належним чином, ImageMagick має бути скомпільований за допомогою
liblqr. Цей метод доступний, якщо Imagick був скомпільований з версією
ImageMagick 6.3.9 або старше.

### Список параметрів

`width`
Ширина цільового розміру.

`height`
Висота цільового розміру.

`delta_x`
Визначає скільки шов може проходити по осі x. При передачі значення
0 шви стають прямими.

`rigidity`
Вводить ухил для непрямих швів. Цей параметр зазвичай дорівнює 0.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Дивіться також

- [Imagick::resizeImage()](imagick.resizeimage.md) - Масштабує
зображення
