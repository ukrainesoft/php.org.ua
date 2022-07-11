- [«imagefilltoborder](function.imagefilltoborder.md)
- [imageflip »](function.imageflip.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Застосовує фільтр до зображення

# imagefilter

(PHP 5, PHP 7, PHP 8)

imagefilter — Застосовує фільтр до зображення

### Опис

**imagefilter**([GdImage](class.gdimage.md) `$image`, int `$filter`,
array\|int\|float\|bool `...$args`): bool

**imagefilter()** застосовує заданий фільтр `filter` до зображення
`image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`filter`
`filter` може бути одним з наступних:

- **`IMG_FILTER_NEGATE`**: Інвертує всі кольори зображення.
- **`IMG_FILTER_GRAYSCALE`**: Перетворює кольори зображення на
градації сірого шляхом перетворення компонентів червоного, зеленого і
синього в їх суму з урахуванням ваг, таких як при обчисленні
яскравості (Y') за REC.601. Альфа-канал зберігається. Для зображень,
що використовують палітру, результат може відрізнятися через обмеження,
що накладаються палітрою.
- **`IMG_FILTER_BRIGHTNESS`**: Змінює яскравість зображення.
Використовуйте аргумент `args` для завдання рівня яскравості. Діапазон
яскравостей від -255 до 255
- **`IMG_FILTER_CONTRAST`**: Змінює контрастність зображення.
Використовуйте аргумент `args` для визначення рівня контрастності.
- **`IMG_FILTER_COLORIZE`**: Те саме, що й **`IMG_FILTER_GRAYSCALE`**,
крім того, що можна задати колір. Використовуйте аргументи
`args`, `arg2` і `arg3` для вказівки каналів `red`, `green`, `blue`,
а `arg4` для `alpha` каналу. Діапазон для кожного каналу кольору від 0
до 255.
- **`IMG_FILTER_EDGEDETECT`**: Використовує визначення меж для них
підсвічування.
- **`IMG_FILTER_EMBOSS`**: Додає рельєф.
- **`IMG_FILTER_GAUSSIAN_BLUR`**: Розмиває зображення за методом
Гаус.
- **`IMG_FILTER_SELECTIVE_BLUR`**: Розмиває зображення.
- **`IMG_FILTER_MEAN_REMOVAL`**: Використовує усереднення для досягнення
ефекту "ескізу".
- **`IMG_FILTER_SMOOTH`**: Робить межі більш плавними, а
зображення менш чітким. Використовуйте аргумент `args` для завдання
рівня гладкості.
- **`IMG_FILTER_PIXELATE`**: Застосовує ефект пікселювання.
Використовуйте аргумент `args` для завдання розміру блоку та аргумент
`arg2` для завдання режиму пікселювання.
- **`IMG_FILTER_SCATTER`**: Застосовує ефект розсіювання до
зображенню, використовуйте `args` та `arg2` для визначення сили
ефекту та додатково `arg3` для застосування тільки до обраних
кольорів пікселів.

`args`
- **`IMG_FILTER_BRIGHTNESS`**: рівень яскравості.
- **`IMG_FILTER_CONTRAST`**: Рівень контрастності.
- **`IMG_FILTER_COLORIZE`**: значення червоного компонента кольору.
- **`IMG_FILTER_SMOOTH`**: Рівень згладжування.
- **`IMG_FILTER_PIXELATE`**: Розмір блоку в пікселах.
- **`IMG_FILTER_SCATTER`**: рівень зменшення ефекту. Не повинен
бути більшим або дорівнює рівню додавання ефекту, встановленому з
допомогою `arg2`.

`arg2`
- **`IMG_FILTER_COLORIZE`**: значення зеленого компонента кольору.
- **`IMG_FILTER_PIXELATE`**: Використовувати вдосконалений ефект
пікселування чи ні (за умовчанням **`false`**).
- **`IMG_FILTER_SCATTER`**: Рівень додавання ефекту.

`arg3`
- **`IMG_FILTER_COLORIZE`**: значення синього компонента кольору.
- **`IMG_FILTER_SCATTER`**: Необов'язковий масив значень індексації
кольори для застосування ефекту.

`arg4`
- **`IMG_FILTER_COLORIZE`**: Альфа канал, значення між 0 та 127. 0
означає непрозорість, 127 відповідає абсолютній прозорості.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |
| 7.4.0 | Додано підтримку розсіювання (**`IMG_FILTER_SCATTER`**). |

### Приклади

**Приклад #1 Приклад використання **imagefilter()** з фільтром
grayscale**

` <?php$im u003d imagecreatefrompng('dave.png');if($im && imagefilter($im, IMG_FILTER_GRAYSCALE)){   echo 'Зображення перетворено к градаціям сірого.'; imagepng($im, 'dave.png');}else{    echo 'Перетворення не удалося.';}imagedestroy($im);?> `

**Приклад #2 Приклад використання **imagefilter()** з фільтром яскравості**

` <?php$im u003d imagecreatefrompng('sean.png');if($im && imagefilter($im, IMG_FILTER_BRIGHTNESS, 20)){   echo 'Яскравість зображення змінена.'; imagepng($im, 'sean.png'); imagedestroy($im);}else{   echo 'Змінити яскравість не удалося.';}?> `

**Приклад #3 Приклад використання **imagefilter()** з фільтром colorize**

` <?php$im u003d imagecreatefrompng('philip.png');/* R, G, B, so 0, 255, 0 is green */if($im && imagefilter($im, IMG_FILTER_COLORI 0)){    echo 'Зображення перетворено до відтінків зеленого.'; imagepng($im, 'philip.png'); imagedestroy($im);}else{   echo 'Перетворення не вдалося.';}?> `

**Приклад #4 Приклад використання **imagefilter()** з фільтром negate**

`<?php// Визначимо нашу функцію, можна використовувати в PHP// без imagefilter()function negate($im){   if(function_exists('imagefilter'))    }    for($x u003d 0; $x < imagesx($im); ++$x)    {        for($y u003d 0; $y < imagesy($im); ++$y)        {            $index u003d imagecolorat( $im, $x, $y); $rgbu003du003dimagecolorsforindex($index); $color u003d imagecolorallocate($im, 255 - $rgb['red'], 255 - $rgb['green'], 255 - $rgb['blue']); imagesetpixel($im, $x, $y, $color); }    }   return(true);}$im u003d imagecreatefromjpeg('kalle.jpg');if($im && negate($im)){    echo 'Зображення інвертовано успішно.'; imagejpeg($im, 'kalle.jpg', 100); imagedestroy($im);}else{   echo 'Інвертувати зображення не удалося.';}?> `

**Приклад #5 Приклад використання **imagefilter()** з фільтром pixelate**

` <?php// завантаження PHP логотипу, нам потрібно 2 штуки// для порівняння$logo1 u003d imagecreatefrompng('./php.png');$logo2 u003d imagecreatefrompng('./phppng $outputu003du003dimagecreatetruecolor(imagesx($logo1) * 2, imagesy($logo1));// Застосування пікселування до кожному зображенню з розміром блоку <3IMEX| , true);// Суміщення відмінностей у вихідному зображенніimagecopy($output, $logo1, 0, 0, 0, 0, imagesx($logo1) - 1, imagesy($logo1) $ , imagesx($logo2), 0, 0, 0, imagesx($logo2) - 1, imagesy($logo2) - 1);imagedestroy($logo1);imagedestroy($logo2);// Висновок розбіжностей Type: image/png');imagepng($output);imagedestroy($output);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу: imagefilter()
pixelate](images/21009b70229598c6a80eef8b45bf282b-imagefilterpixelate.png)

**Приклад #6 Приклад використання **imagefilter()** з фільтром scatter**

`<?php// Завантаження зображення$logo u003d imagecreatefrompng('./php.png');// Застосування дуже м'якого ефекту розсіювання к зображеннюimagefilter($logo, IMG_FILTER_SCATі   'Content-Type: image/png');imagepng($logo);imagedestroy($logo);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу: imagefilter()
scatter](images/21009b70229598c6a80eef8b45bf282b-scatter.png)

### Примітки

> **Примітка**: Результат **`IMG_FILTER_SCATTER`** завжди випадковий.

### Дивіться також

- [imageconvolution()](function.imageconvolution.md) - Накладення
викривляючої матриці 3х3, використовуючи коефіцієнт та зміщення
