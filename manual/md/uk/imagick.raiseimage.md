- [« Imagick::radialBlurImage](imagick.radialblurimage.md)
- [Imagick::randomThresholdImage »](imagick.randomthresholdimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює імітацію ефекту 3D-кнопки

# Imagick::raiseImage

(PECL imagick 2, PECL imagick 3)

Imagick::raiseImage — Створює імітацію ефекту 3D-кнопки

### Опис

public **Imagick::raiseImage**(
int `$width`,
int `$height`,
int `$x`,
int `$y`,
bool `$raise`
): bool

Створює імітацію тривимірного ефекту кнопки, освітлюючи та затемнюючи краї
зображення. Ширина та висота елементів raise_info визначають ширину
вертикального та горизонтального краю ефекту.

### Список параметрів

`width`

`height`

`x`

`y`

`raise`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::raiseImage()****

`<?phpfunction raiseImage($imagePath, $width, $height, $x, $y, $raise) {    $imagick u003d new \Imagick(realpath($imagePath)); //x і y нічого не роблять? $imagick->raiseImage($width, $height, $x, $y, $raise); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
