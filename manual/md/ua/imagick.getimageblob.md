- [«
Imagick::getImageBackgroundColor](imagick.getimagebackgroundcolor.md)
- [Imagick::getImageBluePrimary »](imagick.getimageblueprimary.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає послідовність зображень у вигляді BLOB

# Imagick::getImageBlob

(PECL imagick 2, PECL imagick 3)

Imagick::getImageBlob — Повертає послідовність зображень у вигляді
BLOB

### Опис

public **Imagick::getImageBlob**(): string

Реалізує формати зображень безпосередньо на згадку. Повертає
послідовність зображень у вигляді рядка. Формат зображення
визначає формат BLOB-об'єкта, що повертається (GIF, JPEG, PNG і т.д.).
Щоб повернути інший формат зображення, використовуйте
Imagick::setImageFormat().

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок, який містить зображення.

### Помилки

Викликає ImagickException у разі виникнення помилки.
