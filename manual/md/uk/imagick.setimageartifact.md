- [« Imagick::setImageAlphaChannel](imagick.setimagealphachannel.md)
- [Imagick::setImageAttribute »](imagick.setimageattribute.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює артефакт зображення

# Imagick::setImageArtifact

(PECL imagick 3)

Imagick::setImageArtifact — Встановлює артефакт зображення

### Опис

public **Imagick::setImageArtifact**(string `$artifact`, string
`$value`): bool

Зв'язує артефакт із зображенням. Різниця між властивостями зображення
та артефактами зображення полягає в тому, що властивості є
загальнодоступними, а артефакти – закритими. Цей метод доступний, якщо
Imagick був скомпілюваний з версією ImageMagick 6.5.7 або старшим.

### Список параметрів

`artifact`
Ім'я артефакту.

`value`
Значення артефакту.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::setImageArtifact()****

` <?phpfunction setImageArtifact() {    $src1 u003d new \Imagick(realpath("./images/artifact/source1.png")); $src2 u003d new \Imagick(realpath("./images/artifact/source2.png")); $src2->setImageVirtualPixelMethod(\Imagick::VIRTUALPIXELMETHOD_TRANSPARENT); $src2->setImageArtifact('compose:args', "1,0,-0.5,0.5"); $src1->compositeImage($src2, Imagick::COMPOSITE_MATHEMATICS, 0, 0); $src1->setImageFormat('png'); header("Content-Type: image/png"); echo $src1->getImagesBlob();}?> `

### Дивіться також

- [Imagick::getImageArtifact()](imagick.getimageartifact.md) -
Повертає артефакт зображення
- [Imagick::deleteImageArtifact()](imagick.deleteimageartifact.md) -
Видаляє артефакт зображення
