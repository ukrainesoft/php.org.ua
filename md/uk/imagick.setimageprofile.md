- [« Imagick::setImagePage](imagick.setimagepage.md)
- [Imagick::setImageProperty »](imagick.setimageproperty.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Додає іменований профіль до об'єкту Imagick

# Imagick::setImageProfile

(PECL imagick 2, PECL imagick 3)

Imagick::setImageProfile — Додає іменований профіль до об'єкту
Imagick

### Опис

public **Imagick::setImageProfile**(string `$name`, string `$profile`):
bool

Додає іменований профіль до об'єкту Imagick. Якщо профіль з таким
ім'ям вже існує, він замінюється. Цей метод відрізняється від методу
Imagick::ProfileImage() тим, що він не застосовує будь-які колірні
профілі CMS.

### Список параметрів

`name`

`profile`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
