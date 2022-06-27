- [« Imagick::previousImage](imagick.previousimage.md)
- [Imagick::quantizeImage »](imagick.quantizeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Додає або видаляє профіль зображення

# Imagick::profileImage

(PECL imagick 2, PECL imagick 3)

Imagick::profileImage — Додає або видаляє профіль зображення

### Опис

public **Imagick::profileImage**(string `$name`, string `$profile`):
bool

Додає або видаляє ICC, IPTC або загальний профіль зображення. Якщо
профіль NULL, він видаляється, інакше – додається. Використовуйте ім'я '\*' та
профіль NULL, щоб видалити всі профілі зображення.

### Список параметрів

`name`

`profile`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
