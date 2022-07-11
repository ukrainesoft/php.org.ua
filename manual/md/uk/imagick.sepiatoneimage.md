- [« Imagick::separateImageChannel](imagick.separateimagechannel.md)
- [Imagick::setBackgroundColor »](imagick.setbackgroundcolor.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Тонування зображення сепією

# Imagick::sepiaToneImage

(PECL imagick 2, PECL imagick 3)

Imagick::sepiaToneImage — Тонування зображення сепією

### Опис

public **Imagick::sepiaToneImage**(float `$threshold`): bool

Застосовує до зображення спеціальний ефект, аналогічний ефекту,
досягається у фотолабораторії за допомогою тонування сепією. поріг
варіюється від 0 до QuantumRange і є мірою ступеня тонування
сепії. Поріг 80 – хороша відправна точка для розумного тону.

### Список параметрів

`threshold`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::sepiaToneImage()****

`<?phpfunction sepiaToneImage($imagePath, $sepia) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->sepiaToneImage($sepia); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
