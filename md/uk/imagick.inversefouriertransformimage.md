- [« Imagick::importImagePixels](imagick.importimagepixels.md)
- [Imagick::labelImage »](imagick.labelimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- реалізує дискретне перетворення Фур'є

# Imagick::inverseFourierTransformImage

(PECL imagick 3 \>u003d 3.3.0)

Imagick::inverseFourierTransformImage — Реалізує дискретне
перетворення Фур'є

### Опис

public
**Imagick::inverseFourierTransformImage**([Imagick](class.imagick.md)
`$complement`, bool `$magnitude`): bool

Реалізує дискретне перетворення Фур'є (ДПФ) зображення у вигляді пари
величина/фаза або пари, що складається з реального/уявного зображень.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`complement`
Друге зображення, яке потрібно об'єднати з даними, щоб
сформувати або пару величина / фаза, або пару з реального / уявного
зображень.

`magnitude`
Якщо значення дорівнює true, буде повернена пара величина/фаза, інакше -
пара, що складається з реального / уявного зображення.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.
