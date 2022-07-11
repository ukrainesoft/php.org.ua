- [« Приклади](imagick.examples.md)
- [Imagick »](class.imagick.md)

- [PHP Manual](index.md)
- [Приклади](imagick.examples.md)
- Базове використання

## Базове використання

У PHP дуже легко керувати об'єктом Imagick використовуючи
об'єктно-орієнтований інтерфейс. Ось невеликий приклад, як зробити
мініатюру:

**Приклад #1 Створення мініатюри в Imagick**

`<?phpheader('Content-type: image/jpeg');$image u003d new Imagick('image.jpg');// Якщо в якості ширини або висоти переданий 0,// то зберігається співвідношення> thumbnailImage(100, 0);echo $image;?> `

З використанням SPL та інших об'єктно-орієнтованих функцій
підтримуваних в Imagick, можна легко змінити розміри всіх файлів
в директорії (корисно для пакетної зміни великих зображень з
цифрової камери для перегляду Web). Тут ми використовуємо зміну
розміру, використовуючи певні мета-дані:

**Приклад #2 Створення мініатюр для всіх JPG файлів у директорії**

` <?php$images u003d new Imagick(glob('images/*.JPG'));foreach($images as $image) {    // Передаєм 0 в thumbnailImage для збереження спів$ );}$images->writeImages();?> `

Цей приклад створює відображення зображення. Відображення створюється
дзеркальним відображенням та накладенням градієнта на ньому. Потім
оригінальне зображення та його відображення накладаються на полотно.

**Приклад #3 Створення відображення**

` <?php/* Читання зображення */$im u003d new Imagick("test.png");/* Мініатюра зображення */$im->thumbnailImage(200, null);/* Створення рамки для ->borderImage(new ImagickPixel("white"), 5, 5); . Це буде накладенням для відображення */$gradient u003d new Imagick();/* Градиент повинен бути досить великий для зображення і його рамки */$gradient->newPseudoImage () + 10, "gradient:transparent-black");/* Накладання градієнта на відображення */$reflection->compositeImage($gradient, imagick::COMPOSITE_OVER, 0, 0);/* Добавляємо прозорість. Потрібно ImageMagick 6.2.9 або вище */$reflection->setImageOpacity( 0.3 );/* Створюємо порожній полотне */$canvas u003d new Imagick();/* Холст до       $im->getImageWidth() + 40;$height u003d ($im->getImageHeight() * 2) + 30;$canvas->newImage($width, $height, new ImagickPixel("black"));$canvas ->setImageFormat("png");/* Накладання оригінального зображення і відображення на полотне**$$vasvas->compositeImage($im, imagick::COMPOSITE_OVER, 20, 10);$canvas->compositeImage(imag :COMPOSITE_OVER, 20, $im->getImageHeight() + 10);/* Виведення зображення */header("Content-Type: image/png");echo $canvas;?> `

Результатом виконання цього прикладу буде щось подібне:

![Приклад виведення: Створення відображення
зображення](images/c0d23d2d6769e53e24a1b3136c064577-hello_world_reflection.png)

Цей приклад ілюструє використання заливки під час малювання.

**Приклад #4 Заливка тексту градієнтом**

` <?php/* Створення нового об'єкта imagick */$im u003d new Imagick();/* Створення нового зображення. Буде використовуватися як шаблон заливки */$im->newPseudoImage(50, 50, "gradient:red-black");/* Створюємо об'єкт imagickdraw */$draw u003d неw Imag   "*/$draw->pushPattern('gradient', 0, 0, 50, 50);/* Змішуємо градієнт з шаблоном */$draw->composite(Imagick::COMPOSITE_OVER, 0, 0, 5 im);/* Закриваємо шаблон */$draw->popPattern();/* Використовуємо шаблон з назвою "gradient" для заливки */$draw->setFillPatternURL('#gradient');/*   /$draw->setFontSize(52);/* Додаємо свій текст */$draw->annotation(20, 50, "Hello World!");/* Створюємо новий об'єкт полотно і біле  ();$canvas->newImage(350, 70, "white");/* Малюємо ImagickDraw на полотні */$canvas->drawImage($draw);/* встановлюємо чорну рамку шириною 1px >borderImage('black', 1, 1);/* Встановлюємо формат PNG */$canvas->setImageFormat('png');/* Висновок зображення */header("Content-Type: image/png");e cho $canvas;?> `

Результатом виконання цього прикладу буде щось подібне:

![Приклад виведення: Заливка тексту
градієнтом](images/c0d23d2d6769e53e24a1b3136c064577-hello_world.png)

Робота з анімованими GIF-зображеннями

**Приклад #5 Читання GIF зображення та зміна розміру всіх кадрів**

` <?php/* Створення нового об'єкта imagick і читання в GIF */$im u003d new Imagick("example.gif");/* Зміна розміру всіх фреймов */       */   $frame->thumbnailImage(50, 50); /* Встановлюємо віртуальне полотно для корекції розміру */    $frame->setImagePage(50, 50, 0, 0);}/* Зверніть, увімкніть ;?> `

Робота з примітивом "еліпс" та користувальницькими шрифтами

**Приклад #6 Create a PHP logo**

` <?php/* Установка ширини і висоти в пропорції логотипу PHP */$width u003d 400;$height u003d 210;/* Створення об'єкту Imagick с підтримкою  $width, $height, new ImagickPixel('transparent'));/* Новий об'єкт ImagickDraw для відмальовки еліпса */$draw u003d new ImagickDraw() #777bb4');/* Завдання розмірів еліпса */$draw->ellipse($width / 2, $height / 2, $width / 2, $height / 2, 0, 360); img->drawImage($draw);/* Скидання кольору заливки з пурпурного на чорний для тексту (зауважте, що ми використовуємо об'єкт ImagickDraw забарвлення| */$draw->setStrokeColor('white');/* Завдання товщини обведення| ->setTextKerning(-8);/* Завдання шрифту і его розміру, використовуються в логотипі P HP */$draw->setFont('Handel Gothic.ttf');$draw->setFontSize(150);/* Центрування тексту вертикально і горизонтально */$draw->setGravity(Imagick::GRAVITY_CENT тексту "php" зі зміщенням по Y на - 10 на полотно (всередині еліпса) * / $ img-> annotateImage ($ draw, 0, 10, 0, php '); ;/* Установка відповідного заголовка для PNG і виведення зображення */header('Content-Type: image/png');echo $img;?> `

Результатом виконання цього прикладу буде щось подібне:

![Приклад виведення : Створюється логотип PHP за допомогою
Imagick](images/c0d23d2d6769e53e24a1b3136c064577-php_logo.png)
