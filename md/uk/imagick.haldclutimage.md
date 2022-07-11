- [« Imagick::getVersion](imagick.getversion.md)
- [Imagick::hasNextImage »](imagick.hasnextimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Замінює кольори у зображенні

# Imagick::haldClutImage

(PECL imagick 3)

Imagick::haldClutImage — Замінює кольори зображення

### Опис

public **Imagick::haldClutImage**([Imagick](class.imagick.md) `$clut`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Замінює кольори зображення за допомогою таблиці пошуку Hald.
Hald-зображення можуть бути створені за допомогою колірного кодера
HALD.

### Список параметрів

`clut`
Об'єкт Imagick, який містить пошукове Hald-зображення.

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::haldClutImage()****

` <?phpfunction haldClutImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagickPalette u003d new \Imagick(realpath("images/hald/hald_8.png")); $imagickPalette->sepiatoneImage(55); $imagick->haldClutImage($imagickPalette); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
