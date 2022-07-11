- [« Imagick::pingImageFile](imagick.pingimagefile.md)
- [Imagick::posterizeImage »](imagick.posterizeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Імітує фото Polaroid

# Imagick::polaroidImage

(PECL imagick 2, PECL imagick 3)

Imagick::polaroidImage — Імітує фото Polaroid

### Опис

public **Imagick::polaroidImage**([ImagickDraw](class.imagickdraw.md)
`$properties`, float `$angle`): bool

Імітує фото Polaroid. Цей метод доступний, якщо Imagick був
скомпільований з версією ImageMagick 6.3.2 або старшим.

### Список параметрів

`properties`
Властивості Polaroid.

`angle`
Кут Polaroid.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::polaroidImage()****

Приклад використання Imagick::polaroidImage()

` <?php/* Створення об'єкта */$image u003d new Imagick('source.png');/* Установка непрозорості */$image->polaroidImage(new ImagickDraw(), 25);/* Виведення ('Content-type: image/png');echo $image;?> `
