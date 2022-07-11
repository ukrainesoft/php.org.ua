- [« Imagick::colorMatrixImage](imagick.colormatriximage.md)
- [Imagick::commentImage »](imagick.commentimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Об'єднує одне або кілька зображень в одне зображення

# Imagick::combineImages

(PECL imagick 2, PECL imagick 3)

Imagick::combineImages — Об'єднує одне або кілька зображень у
одне зображення

### Опис

public **Imagick::combineImages**(int `$channelType`):
[Imagick](class.imagick.md)

Об'єднує одне або кілька зображень на одне зображення. Значення
відтінків сірого пікселів кожного зображення у послідовності
надається по порядку зазначеним каналам об'єднаного зображення.
Типовий порядок: зображення 1 u003d\> червоний, 2 u003d\> зелений, 3 u003d\> синій
і т.д.

### Список параметрів

`channelType`
Вкажіть будь-яку константу CHANNEL, яка підходить для вашого режиму
каналу. Для застосування більш ніж одного каналу об'єднайте константи
типу CHANNEL за допомогою побітових операторів. Зверніться до цього списку
[констант CHANNEL](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
