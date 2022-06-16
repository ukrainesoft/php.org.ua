- [« Imagick::adaptiveSharpenImage](imagick.adaptivesharpenimage.md)
- [Imagick::addImage »](imagick.addimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Вибір порога для кожного пікселя в залежності від діапазону
інтенсивності

# Imagick::adaptiveThresholdImage

(PECL imagick 2, PECL imagick 3)

Imagick::adaptiveThresholdImage — Вибір порога для кожного пікселя в
залежно від діапазону інтенсивності

### Опис

public **Imagick::adaptiveThresholdImage**(int `$width`, int `$height`,
int `$offset`): bool

Вибір індивідуального обмеження кожного пікселя в залежності від
діапазону значень інтенсивності навколо цього пікселя. Це дає
можливість встановити поріг зображення, в якому гістограма
Глобальна інтенсивність не містить характерних піків.

### Список параметрів

`width`
Область сусідів за шириною.

`height`
Область сусідів висотою.

`offset`
Середнє зміщення

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::adaptiveThresholdImage()****

` <?phpfunction adaptiveThresholdImage($imagePath, $width, $height, $adaptiveOffset) {    $imagick u003d new \Imagick(realpath($imagePath)); $adaptiveOffsetQuantumu003du003dintval($adaptiveOffset**Imagick::getQuantum()); $imagick->adaptiveThresholdImage($width, $height, $adaptiveOffsetQuantum); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
