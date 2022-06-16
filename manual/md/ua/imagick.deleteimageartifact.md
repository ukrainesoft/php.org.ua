- [« Imagick::deconstructImages](imagick.deconstructimages.md)
- [Imagick::deleteImageProperty »](imagick.deleteimageproperty.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Видаляє артефакт зображення

# Imagick::deleteImageArtifact

(PECL imagick 3)

Imagick::deleteImageArtifact — Видаляє артефакт зображення

### Опис

public **Imagick::deleteImageArtifact**(string `$artifact`): bool

Видаляє артефакт, пов'язаний із зображенням. Різниця між властивостями
зображення та артефактами зображення полягає в тому, що властивості
є загальнодоступними, а артефакти – приватними. Цей метод доступний,
якщо Imagick був скомпільований із версією ImageMagick 6.5.7 або старшим.

### Список параметрів

`artifact`
Назва артефакту для видалення

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Дивіться також

- [Imagick::setImageArtifact()](imagick.setimageartifact.md) -
Встановлює артефакт зображення
- [Imagick::getImageArtifact()](imagick.getimageartifact.md) -
Повертає артефакт зображення
