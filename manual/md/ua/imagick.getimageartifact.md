- [« Imagick::getImageAlphaChannel](imagick.getimagealphachannel.md)
- [Imagick::getImageAttribute »](imagick.getimageattribute.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає артефакт зображення

# Imagick::getImageArtifact

(PECL imagick 3)

Imagick::getImageArtifact — Повертає артефакт зображення

### Опис

public **Imagick::getImageArtifact**(string `$artifact`): string

Повертає артефакт, пов'язаний із зображенням. Різниця між властивостями
зображення та артефактами зображення полягає в тому, що властивості
є загальнодоступними, а артефакти – закритими.

### Список параметрів

`artifact`
Ім'я артефакту.

### Значення, що повертаються

Повертає значення артефакту у разі успішного виконання.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Дивіться також

- [Imagick::setImageArtifact()](imagick.setimageartifact.md) -
Встановлює артефакт зображення
- [Imagick::deleteImageArtifact()](imagick.deleteimageartifact.md) -
Видаляє артефакт зображення
