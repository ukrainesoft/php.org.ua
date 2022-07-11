- [« Imagick::setGravity](imagick.setgravity.md)
- [Imagick::setImageAlphaChannel »](imagick.setimagealphachannel.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Замінює зображення в об'єкті

# Imagick::setImage

(PECL imagick 2, PECL imagick 3)

Imagick::setImage — Замінює зображення в об'єкті

### Опис

public **Imagick::setImage**([Imagick](class.imagick.md) `$replace`):
bool

Замінює поточну послідовність зображень зображенням з
замінного об'єкта.

### Список параметрів

`replace`
Замінний об'єкт Imagick.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::setImage()****

Приклад використання Imagick::setImage()

` <?php/* Створення об'єктів */$image u003d new Imagick('source.jpg');$replace u003d new Imagick('replace.jpg');/* source.jpg замінюється на replace.jpg */$image ->setImage($replace);/* Виведення зображення */header('Content-type: image/jpeg');echo $image;?> `
