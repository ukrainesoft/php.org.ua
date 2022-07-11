- [« Imagick::setImageProfile](imagick.setimageprofile.md)
- [Imagick::setImageRedPrimary »](imagick.setimageredprimary.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює властивість зображення

# Imagick::setImageProperty

(PECL imagick 2, PECL imagick 3)

Imagick::setImageProperty — Встановлює властивість зображення

### Опис

public **Imagick::setImageProperty**(string `$name`, string `$value`):
bool

Встановлює іменовану якість зображення. Цей метод доступний,
якщо Imagick був скомпільований із версією ImageMagick 6.3.2 або старшим.

### Список параметрів

`name`

`value`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::setImageProperty()****

Встановлення та отримання властивостей зображення

` <?php$image u003d new Imagick();$image->newImage(300, 200, "black");$image->setImageProperty('Exif:Make', 'Imagick');echo $image->getImageProperty ('Exif:Make');?> `

### Дивіться також

- [Imagick::getImageProperty()](imagick.getimageproperty.md) -
Повертає іменовану якість зображення
