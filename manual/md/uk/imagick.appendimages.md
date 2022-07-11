- [« Imagick::annotateImage](imagick.annotateimage.md)
- [Imagick::autoLevelImage »](imagick.autolevelimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Об'єднує набір зображень

# Imagick::appendImages

(PECL imagick 2, PECL imagick 3)

Imagick::appendImages — Об'єднує набір зображень

### Опис

public **Imagick::appendImages**(bool `$stack`):
[Imagick](class.imagick.md)

Об'єднує набір зображень в одне велике зображення.

### Список параметрів

`stack`
Чи варто складати зображення вертикально. За замовчуванням (або якщо
вказано **`false`**) зображення складаються зліва направо. Якщо
`stack` встановлений в **`true`**, то зображення складаються зверху
вниз.

### Значення, що повертаються

У разі успішного виконання повертає екземпляр Imagick.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::appendImages()****

` <?php/* Створюємо новий об'єкт imagick */$im u003d new Imagick();/* створюємо червоне, зелене і синє зображення */$im->newImage(100, 50; newImage(100, 50, "green");$im->newImage(100, 50, "blue");/* З'єднуємо всі зображення в одно */$im->resetIterator(); appendImages(true);/* Виводимо зображення */$combined->setImageFormat("png");header("Content-Type: image/png");echo $combined;?> `

Результатом виконання цього прикладу буде щось подібне:

![Приклад виведення:
Imagick::appendImages()](images/c0d23d2d6769e53e24a1b3136c064577-floodfillpaint_intermediate.png)
