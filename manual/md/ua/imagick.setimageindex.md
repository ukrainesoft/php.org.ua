- [« Imagick::setImageGreenPrimary](imagick.setimagegreenprimary.md)
- [Imagick::setImageInterlaceScheme
»](imagick.setimageinterlacescheme.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює позицію ітератора

# Imagick::setImageIndex

(PECL imagick 2, PECL imagick 3)

Imagick::setImageIndex — Встановлює позицію ітератора

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::setImageIndex**(int `$index`): bool

Встановлює ітератор у позицію у списку зображень, вказану
параметром index.

Цей метод оголошено застарілим. Використовуйте
[Imagick::setIteratorIndex()](imagick.setiteratorindex.md).

### Список параметрів

`index`
Позиція встановлення ітератора.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
