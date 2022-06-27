- [« Imagick::identifyFormat](imagick.identifyformat.md)
- [Imagick::implodeImage »](imagick.implodeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Визначає зображення та отримує атрибути

# Imagick::identifyImage

(PECL imagick 2, PECL imagick 3)

Imagick::identifyImage — Визначає зображення та отримує атрибути

### Опис

public **Imagick::identifyImage**(bool `$appendRawOutput` u003d
**`false`**): array

Визначає зображення та повертає його атрибути у вигляді масиву.
Атрибути зображення включають ширину, висоту, розмір та інші.

### Список параметрів

`appendRawOutput`
Якщо **`true`**, то масив буде включений необроблений висновок.

### Значення, що повертаються

Повертає масив атрибутів. Атрибути зображення включають
ширину, висоту, розмір та інші.

### Помилки

Викликає ImagickException у разі виникнення помилки.

**Приклад #1 Приклад результату**

``` examplescode
Array
(
[imageName] u003d> /some/path/image.jpg
[format] u003d> JPEG (Joint Photographic Experts Group JFIF format)
[geometry] u003d> Array
(
[width] u003d> 90
[height] u003d> 90
)

[type] u003d> TrueColor
[colorSpace] u003d> RGB
[resolution] u003d> Array
(
[x] u003d> 300
[y] u003d> 300
)

[units] u003d> PixelsPerInch
[fileSize] u003d> 1.88672kb
[compression] u003d> JPEG
[signature] u003d> 9a6dc8f604f97d0d691c0286176ddf992e188f0bebba98494b2146ee2d7118da
)
````
