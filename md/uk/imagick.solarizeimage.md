- [« Imagick::smushImages](imagick.smushimages.md)
- [Imagick::sparseColorImage »](imagick.sparsecolorimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Застосовує до зображення ефект соляризації

# Imagick::solarizeImage

(PECL imagick 2, PECL imagick 3)

Imagick::solarizeImage — Застосовує до зображення ефект соляризації

### Опис

public **Imagick::solarizeImage**(int `$threshold`): bool

Застосовує до зображення спеціальний ефект, аналогічний ефекту,
досягається у фотолабораторії шляхом вибіркового впливу світла на
ділянки фоточутливого паперу. Поріг варіюється від 0 до
QuantumRange і є мірою ступеня соляризації.

### Список параметрів

`threshold`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::solarizeImage()****

`<?phpfunction solarizeImage($imagePath, $solarizeThreshold) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->solarizeImage($solarizeThreshold * \Imagick::getQuantum()); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
