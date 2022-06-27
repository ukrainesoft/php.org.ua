- [« Imagick::appendImages](imagick.appendimages.md)
- [Imagick::averageImages »](imagick.averageimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Опис

# Imagick::autoLevelImage

(PECL imagick 3 \>u003d 3.3.0)

Imagick::autoLevelImage — Опис

### Опис

public **Imagick::autoLevelImage**(int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

Налаштовує рівні певного каналу зображення, масштабуючи
мінімальне та максимальне значення до повного квантового діапазону.

### Список параметрів

`channel`
На якому каналі слід здійснити автоматичне вирівнювання.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::autoLevelImage()****

`<?phpfunction autoLevelImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->autoLevelImage(); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
