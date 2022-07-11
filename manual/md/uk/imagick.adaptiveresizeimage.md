- [« Imagick::adaptiveBlurImage](imagick.adaptiveblurimage.md)
- [Imagick::adaptiveSharpenImage »](imagick.adaptivesharpenimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Адаптивна зміна розміру зображення з даними тріангуляції

# Imagick::adaptiveResizeImage

(PECL imagick 2, PECL imagick 3)

Imagick::adaptiveResizeImage — Адаптивна зміна розміру зображення
з даними тріангуляції

### Опис

public **Imagick::adaptiveResizeImage**(
int `$columns`,
int `$rows`,
bool `$bestfit` u003d **`false`**,
bool `$legacy` u003d **`false`**
): bool

Адаптивна зміна розміру зображення з даними тріангуляції.
Дозволяє уникнути розмиття через різку зміну кольору. Найчастіше
використовується зменшення зображень трохи менше " розміру для web " ;
виходить погано, коли повнорозмірне зображення адаптивно змінюється
у мініатюру. Цей метод доступний, якщо Imagick був скомпільований з
версією ImageMagick 6.2.9 чи старшою.

> **Примітка**: Поводження параметра `bestfit` було змінено в Imagick
>3.0.0. До цієї версії при зміні зображення розміром 200x150
> 400×300 ніяких операцій не відбувалося. В Imagick 3.0.0 і далі
> зображення буде масштабовано до розмірів 400x300, оскільки це
> найкраще відповідає ("best fit") даним розмірам. Якщо
> використовується параметр `bestfit`, то ширина та висота також повинні бути
> визначено.

### Список параметрів

`columns`
Кількість стовпців у масштабі зображення.

`rows`
Кількість рядків у масштабі зображення.

`bestfit`
Чи підганятиметься зображення всередині обмежувальної рамки.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- --------------------------------|
| PECL imagick 2.1.0 Додано необов'язковий параметр підгонки. |
| PECL imagick 2.1.0 Метод тепер підтримує пропорційне масштабування. Для цього необхідно передати 0 одному з параметрів. |

### Приклади

**Приклад #1 Приклад використання **Imagick::adaptiveResizeImage()****

Зміна розмірів зображення, що зазвичай використовуються в web. Цей метод
найкраще працює при невеликій зміні розміру.

` <?phpheader('Content-type: image/jpeg');$image u003d new Imagick('image.jpg');$image->adaptiveResizeImage(1024,768);echo $image;?> `

### Дивіться також

- [Imagick::chopImage()](imagick.chopimage.md) - Видаляє область
зображення і обрізає його
- [Imagick::cropImage()](imagick.cropimage.md) - Витягує область
зображення
- [Imagick::magnifyImage()](imagick.magnifyimage.md) -
Пропорційно масштабує зображення вдвічі
- [Imagick::minifyImage()](imagick.minifyimage.md) - Масштабує
зображення пропорційно половині його розміру
- [Imagick::resizeImage()](imagick.resizeimage.md) - Масштабує
зображення
- [Imagick::scaleImage()](imagick.scaleimage.md) - Масштабує
розмір зображення
- [Imagick::shaveImage()](imagick.shaveimage.md) - Видаляє пікселі
по краях зображення
- [Imagick::thumbnailImage()](imagick.thumbnailimage.md) - Змінює
розмір зображення
- [Imagick::trimImage()](imagick.trimimage.md) - Видаляє краї з
зображення
