- [« Imagick::displayImages](imagick.displayimages.md)
- [Imagick::drawImage »](imagick.drawimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Спотворює зображення, використовуючи різні методи спотворення

# Imagick::distortImage

(PECL imagick 2 \>u003d 2.0.1, PECL imagick 3)

Imagick::distortImage — Спотворює зображення за допомогою різних методів.
спотворення

### Опис

public **Imagick::distortImage**(int `$method`, array `$arguments`, bool
`$bestfit`): bool

Спотворює зображення, використовуючи різні методи спотворення, зіставляючи
пошукові запити кольору вихідного зображення з новим цільовим
зображенням, зазвичай того ж розміру, що і вихідне зображення, якщо
для параметра "bestfit" встановлено значення **true**.

Якщо параметр "bestfit" увімкнено і це дозволяє спотворення, цільове
зображення налаштовується таким чином, щоб вихідне зображення
повністю відповідало кінцевому цільовому зображенню, яке буде
мати відповідний розмір та усунення. Також у багатьох випадках при
зіставлення враховуватиметься віртуальне зміщення вихідного
зображення.

Цей метод доступний, якщо Imagick був скомпільований з версією
ImageMagick 6.3.6 або старше.

### Список параметрів

`method`
Метод спотворення зображення. Дивіться [константи
спотворення](imagick.constants.md#imagick.constants.distortion).

`arguments`
Аргументи обраного методу спотворення.

`bestfit`
Спроба змінити розмір призначення, щоб він відповідав
спотвореного джерела.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::distortImage()**:**

Спотворення зображення та відображення у браузері.

` <?php/* Створення нового об'єкта */$im u003d u003d new Imagick (); формату зображення на png */$im->setImageFormat('png');/* Заповнення нових видимих областей прозорим кольором */$im->setImageVirtualPixelMethod(Imagick::VIRTUALPIXELMETHOD_TRANSPARENT$at (true);/* Контрольные точки для искажения */$controlPoints u003d array( 10, 10,                        10, 5,                        10, $im->getImageHeight() - 20,                        10, $im->getImageHeight() - 5,                        $ im->getImageWidth() - 10, 10,                        $im->getImageWidth() - 10, 20,                        $im->getImageWidth() - 10, $im->getImageHeight() - 10,                        $im->getImageWidth() - 10, $im->getImageHeight() - 30);/* Виконання спотворення */$im->distortImage(Imagick::DISTORTION_PERSPECTIVE, $controlPoints, true);/* Виведення зображення */header("Content-Type: image/png");echo $im;?> `

Результатом виконання цього прикладу буде щось подібне:

![Приклад використання
Imagick::distortImage()](images/c0d23d2d6769e53e24a1b3136c064577-distortImage.png)

### Дивіться також

- [Imagick::blurImage()](imagick.blurimage.md) - Додає фільтр
розмиття до зображення
- [Imagick::motionBlurImage()](imagick.motionblurimage.md) -
Імітує розмиття у русі
- [Imagick::radialBlurImage()](imagick.radialblurimage.md) -
Радіальне розмиття зображення
