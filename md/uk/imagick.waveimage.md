- [« Imagick::vignetteImage](imagick.vignetteimage.md)
- [Imagick::whiteThresholdImage »](imagick.whitethresholdimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Застосовує хвильовий фільтр до зображення

# Imagick::waveImage

(PECL imagick 2, PECL imagick 3)

Imagick::waveImage — Застосовує хвильовий фільтр до зображення

### Опис

public **Imagick::waveImage**(float `$amplitude`, float `$length`): bool

Застосовує хвильовий фільтр зображення. Цей метод доступний, якщо
Imagick був скомпілюваний з версією ImageMagick 6.2.9 або старшим.

### Список параметрів

`amplitude`
Амплітуда хвилі.

`length`
Довжина хвилі.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 WaveImage може бути досить повільним
**Imagick::waveImage()****

` <?phpfunction waveImage($imagePath, $amplitude, $length) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->waveImage($amplitude, $length); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `

### Дивіться також

- [Imagick::solarizeImage()](imagick.solarizeimage.md) - Застосовує до
зображення ефект соляризації
- [Imagick::oilpaintImage()](imagick.oilpaintimage.md) - Імітує
картину олією
- [Imagick::embossImage()](imagick.embossimage.md) - Повертає
зображення в градаціях сірого з тривимірним ефектом
- [Imagick::addNoiseImage()](imagick.addnoiseimage.md) - Накладає
випадковий шум на зображення
- [Imagick::swirlImage()](imagick.swirlimage.md) - Закручує
пікселі навколо центру зображення
