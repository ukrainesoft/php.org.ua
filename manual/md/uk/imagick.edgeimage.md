- [« Imagick::drawImage](imagick.drawimage.md)
- [Imagick::embossImage »](imagick.embossimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Підсилює краї зображення.

# Imagick::edgeImage

(PECL imagick 2, PECL imagick 3)

Imagick::edgeImage — Підсилює краї зображення.

### Опис

public **Imagick::edgeImage**(float `$radius`): bool

Збільшує краї зображення за допомогою фільтра згортки даного
радіусу. Використовуйте радіус 0, і його буде обрано автоматично.

### Список параметрів

`radius`
Радіус операції.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::edgeImage()****

`<?phpfunction edgeImage($imagePath, $radius) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->edgeImage($radius); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
