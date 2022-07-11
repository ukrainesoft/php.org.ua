- [«Imagick::\_\_construct](imagick.construct.md)
- [Imagick::contrastStretchImage »](imagick.contraststretchimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Змінює контраст зображення

# Imagick::contrastImage

(PECL imagick 2, PECL imagick 3)

Imagick::contrastImage — Змінює контраст зображення

### Опис

public **Imagick::contrastImage**(bool `$sharpen`): bool

Збільшує різницю в інтенсивності між світлими та темними елементами
зображення. Встановіть збільшення різкості на значення, відмінне від 0,
щоб збільшити контраст зображення, інакше контраст
зменшується.

### Список параметрів

`sharpen`
Значення різкості

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::contrastImage()****

`<?phpfunction contrastImage($imagePath, $contrastType) {   $imagick u003d new \Imagick(realpath($imagePath)); if ($contrastType !u003d 2) {        $imagick->contrastImage($contrastType); }   header("Content-Type:image/jpg"); echo $imagick->getImageBlob();}?> `
