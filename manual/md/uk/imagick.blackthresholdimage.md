- [« Imagick::averageImages](imagick.averageimages.md)
- [Imagick::blueShiftImage »](imagick.blueshiftimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Перевести всі пікселі нижче граничного значення в чорний колір

# Imagick::blackThresholdImage

(PECL imagick 2, PECL imagick 3)

Imagick::blackThresholdImage — Перекласти усі пікселі нижче за пороговий
значення у чорний колір

### Опис

public
**Imagick::blackThresholdImage**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$threshold`): bool

Працює так само, як Imagick::thresholdImage(), але змінюються тільки
пікселі нижче порогового значення, у той час як інші пікселі
залишаються постійними.

### Список параметрів

`threshold`
Порогове значення нижче якого всі пікселі стануть чорними

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------|
| PECL imagick 2.1.0 Як параметр можна передавати колір рядком. У попередніх версіях дозволялося передавати лише ImagickPixel. |

### Приклади

**Приклад #1 Приклад використання **Imagick::blackThresholdImage()****

`<?phpfunction blackThresholdImage($imagePath, $thresholdColor) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->blackthresholdimage($thresholdColor); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
