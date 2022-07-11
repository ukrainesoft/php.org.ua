- [« Imagick::scaleImage](imagick.scaleimage.md)
- [Imagick::selectiveBlurImage »](imagick.selectiveblurimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Сегментує зображення

# Imagick::segmentImage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::segmentImage — Сегментує зображення

### Опис

public **Imagick::segmentImage**(
int `$COLORSPACE`,
float `$cluster_threshold`,
float `$smooth_threshold`,
bool `$verbose` u003d **`false`**
): bool

Аналізує зображення та визначає схожі об'єкти. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.4.5 або
старше.

### Список параметрів

`COLORSPACE`
Одна з [констант
COLORSPACE](imagick.constants.md#imagick.constants.colorspace).

`cluster_threshold`
Відсоток, що описує мінімальну кількість пікселів, що містяться в
гексаедре, перш ніж він вважатиметься коректним.

`smooth_threshold`
Усуває шум на гістограмі.

`verbose`
Визначає, чи виводити докладну інформацію про розпізнані класи.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Imagick::segmentImage()****

`<?phpfunction segmentImage($imagePath, $colorSpace, $clusterThreshold, $smoothThreshold) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->segmentImage($colorSpace, $clusterThreshold, $smoothThreshold); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}segmentImage($imagePath, \Imagick::COLORSPACE_RGB, 5, 5);?> `
