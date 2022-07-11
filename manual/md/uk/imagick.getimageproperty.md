- [« Imagick::getImageProperties](imagick.getimageproperties.md)
- [Imagick::getImageRedPrimary »](imagick.getimageredprimary.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає іменовану властивість зображення

# Imagick::getImageProperty

(PECL imagick 2, PECL imagick 3)

Imagick::getImageProperty — Повертає назву зображення.

### Опис

public **Imagick::getImageProperty**(string `$name`): string

Повертає іменовану якість зображення. Цей метод доступний, якщо
Imagick був скомпілюваний з версією ImageMagick 6.3.2 або старшим.

### Список параметрів

`name`
Ім'я властивості (наприклад, Exif: DateTime).

### Значення, що повертаються

Повертає рядок, що містить властивість зображення, або false, якщо
властивість із заданим ім'ям не існує.

### Приклади

**Приклад #1 Приклад використання **Imagick::getImageProperty()**:**

Завдання та отримання властивості зображення

` <?php$image u003d new Imagick();$image->newImage(300, 200, "black");$image->setImageProperty('Exif:Make', 'Imagick');echo $image->getImageProperty ('Exif:Make');?> `

### Дивіться також

- [Imagick::setImageProperty()](imagick.setimageproperty.md) -
Встановлює властивість зображення
