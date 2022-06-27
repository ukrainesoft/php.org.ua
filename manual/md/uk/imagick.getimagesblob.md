- [« Imagick::getImageResolution](imagick.getimageresolution.md)
- [Imagick::getImageScene »](imagick.getimagescene.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає всі послідовності зображень у вигляді великого
двійкового об'єкту

# Imagick::getImagesBlob

(PECL imagick 2, PECL imagick 3)

Imagick::getImagesBlob — Повертає всі послідовності зображень у
вигляді великого двійкового об'єкта

### Опис

public **Imagick::getImagesBlob**(): string

Реалізує формати зображень безпосередньо на згадку. Метод повертає все
послідовності зображень у вигляді рядка. Формат зображення
визначає формат великого двійкового об'єкта, що повертається (GIF, JPEG,
PNG і т.д.). Щоб повернути інший формат зображення, використовуйте
Imagick::setImageFormat().

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок, який містить зображення. У разі виникнення помилки
викидає виняток ImagickException.
