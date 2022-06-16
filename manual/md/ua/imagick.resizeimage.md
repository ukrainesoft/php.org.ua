- [« Imagick::resetImagePage](imagick.resetimagepage.md)
- [Imagick::rollImage »](imagick.rollimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Масштабує зображення

# Imagick::resizeImage

(PECL imagick 2, PECL imagick 3)

Imagick::resizeImage — Масштабує зображення

### Опис

public **Imagick::resizeImage**(
int `$columns`,
int `$rows`,
int `$filter`,
float `$blur`,
bool `$bestfit` u003d **`false`**,
bool `$legacy` u003d **`false`**
): bool

Масштабує зображення до бажаних розмірів за допомогою
[filter](imagick.constants.md#imagick.constants.filters).

> **Примітка**: Поводження параметра `bestfit` було змінено в Imagick
>3.0.0. До цієї версії при зміні зображення розміром 200x150
> 400×300 ніяких операцій не відбувалося. В Imagick 3.0.0 і далі
> зображення буде масштабовано до розмірів 400x300, оскільки це
> найкраще відповідає ("best fit") даним розмірам. Якщо
> використовується параметр `bestfit`, то ширина та висота також повинні бути
> визначено.

### Список параметрів

`columns`
Ширина зображення.

`rows`
Висота зображення.

`filter`
Зверніться до списку [констант
FILTER](imagick.constants.md#imagick.constants.filters).

`blur`
Коефіцієнт розмиття, де значення \> 1 робить зображення більшим
розмитим, а значення \< 1 - різкішим.

`bestfit`
Необов'язковий параметр підгонки.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------|
| PECL imagick 2.1.0 Додано необов'язковий параметр підгонки. Тепер метод підтримує пропорційне масштабування. Для пропорційного масштабування необхідно передати нуль як будь-який параметр. |

### Приклади

**Приклад #1 Приклад використання **Imagick::resizeImage()****

` <?phpfunction resizeImage($imagePath, $width, $height, $filterType, $blur, $bestFit, $cropZoom) {    //Коефіцієнт розмиття, де значення               $imagick u003d new \Imagick(realpath($imagePath)); $imagick->resizeImage($width, $height, $filterType, $blur, $bestFit); $cropWidthu003du003d$imagick->getImageWidth(); $cropHeightu003du003d$imagick->getImageHeight(); if ($cropZoom) {        $newWidth u003d $cropWidth / 2; $newHeight u003d $cropHeight / 2; $imagick->cropimage(            $newWidth,            $newHeight,            ($cropWidth - $newWidth) / 2,            ($cropHeight - $newHeight) / 2        ); $imagick->scaleimage(            $imagick->getImageWidth() * 4,           $imagick->getImageHeight() *  }   header("Content-Type:image/jpg"); echo $imagick->getImageBlob();}?> `
