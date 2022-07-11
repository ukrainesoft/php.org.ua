- [« Imagick::compareImageLayers](imagick.compareimagelayers.md)
- [Imagick::compositeImage »](imagick.compositeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Порівнює зображення з відновленим зображенням

# Imagick::compareImages

(PECL imagick 2, PECL imagick 3)

Imagick::compareImages — Порівнює зображення з відновленим
зображенням

### Опис

public **Imagick::compareImages**([Imagick](class.imagick.md)
`$compare`, int `$metric`): array

Повертає масив, що містить відновлене зображення та різницю
між зображеннями.

### Список параметрів

`compare`
Зображення для порівняння.

`metric`
Вкажіть допустиму константу типу метрики. Дивіться список [констант
метрики](imagick.constants.md#imagick.constants.metric).

### Значення, що повертаються

Повертає масив, що містить відновлене зображення та різницю
між зображеннями.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::compareImages()**:**

Порівняння зображення та відображення відновленого зображення

` <?php$image1 u003d new imagick("image1.png");$image2 u003d neu imagick("image2.png");$result u003d $image1->compareImages($image2, Imagick::METRIC_MEANSQUAREERROR);$result [0]->setImageFormat("png");header("Content-Type: image/png");echo $result[0];?> `
