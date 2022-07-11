- [« Imagick::profileImage](imagick.profileimage.md)
- [Imagick::quantizeImages »](imagick.quantizeimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Аналізує кольори еталонного зображення

# Imagick::quantizeImage

(PECL imagick 2, PECL imagick 3)

Imagick::quantizeImage — Аналізує кольори еталонного зображення

### Опис

public **Imagick::quantizeImage**(
int `$numberColors`,
int `$colorspace`,
int `$treedepth`,
bool `$dither`,
bool `$ measureError`
): bool

### Список параметрів

`numberColors`

`colorspace`

`treedepth`

`dither`

`measureError`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::quantizeImage()****

` <?phpfunction quantizeImage($imagePath, $numberColors, $colorSpace, $treeDepth, $dither) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->quantizeImage($numberColors, $colorSpace, $treeDepth, $dither, false); $imagick->setImageFormat('png'); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
