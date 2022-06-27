- [« Imagick::deleteImageProperty](imagick.deleteimageproperty.md)
- [Imagick::despeckleImage »](imagick.despeckleimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Видаляє перекіс із зображення

# Imagick::deskewImage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3 \>u003d 3.3.0)

Imagick::deskewImage — Видаляє перекіс із зображення

### Опис

public **Imagick::deskewImage**(float `$threshold`): bool

Метод можна використовувати для видалення перекосу, наприклад,
відсканованих зображень, якщо папір не був правильно розміщений на
сканування поверхні. Цей метод доступний, якщо Imagick був
скомпільований з версією ImageMagick 6.4.5 або старшим.

### Список параметрів

`threshold`
Розмір перекосу

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Imagick::deskewImage()****

` <?phpfunction deskewImage($threshold) {   $imagick u003d new \Imagick(realpath("images/NYTimes-Page1-11-11-1918.jpg")); $deskewImagicku003du003dclone$imagick; //Це єдине, що потрібно для видалення перекосу. $deskewImagick->deskewImage($threshold); //Інша частина цього прикладу - зробити результат очевидним,    //потому що в протилежному випадку результат не очевидний. $trim u003d 9; $deskewImagick->cropImage($deskewImagick->getImageWidth() - $trim, $deskewImagick->getImageHeight(), $trim, 0); $imagick->cropImage($imagick->getImageWidth() - $trim, $imagick->getImageHeight(), $trim, 0); $deskewImagick->resizeimage($deskewImagick->getImageWidth() / 2, $deskewImagick->getImageHeight() / 2, \Imagick::FILTER_LANCZOS, 1); $imagick->resizeimage($imagick->getImageWidth() / 2, $imagick->getImageHeight() / 2, \Imagick::FILTER_LANCZOS, 1); $newCanvasu003dNewImagick(); $newCanvas->newimage($imagick->getImageWidth() + $deskewImagick->getImageWidth() + 20, $imagick->getImageHeight(), 'red', 'jpg'); $newCanvas->compositeimage($imagick, \Imagick::COMPOSITE_COPY, 5, 0); $newCanvas->compositeimage($deskewImagick, \Imagick::COMPOSITE_COPY, $imagick->getImageWidth() + 10, 0); header("Content-Type: image/jpg"); echo $newCanvas->getImageBlob();}?> `
