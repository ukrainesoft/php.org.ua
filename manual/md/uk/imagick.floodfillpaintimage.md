- [« Imagick::flipImage](imagick.flipimage.md)
- [Imagick::flopImage »](imagick.flopimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Змінює значення кольору будь-якого пікселя, що відповідає цільовому

# Imagick::floodFillPaintImage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::floodFillPaintImage — Змінює значення кольору будь-якого пікселя,
відповідного цільового

### Опис

public **Imagick::floodFillPaintImage**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fill`,
float `$fuzz`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$target`,
int `$x`,
int `$y`,
bool `$invert`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

Змінює значення кольору будь-якого пікселя, що відповідає цільовому та
що є найближчим сусідом. Даний метод – заміна застарілому
[Imagick::paintFloodFillImage()](imagick.paintfloodfillimage.md). Цей
метод доступний, якщо Imagick був скомпільований з версією ImageMagick
6.3.8 чи старше.

### Список параметрів

`fill`
Об'єкт ImagickPixel або рядок, який містить колір заливки.

`fuzz`
Міра заокруглення (fuzz). Наприклад, встановіть значення fuzz в 10 і
червоний колір з інтенсивністю 100 та 102 буде інтерпретуватися як
той самий колір.

`target`
Об'єкт ImagickPixel або рядок, який містить цільовий колір для малювання.

`x`
Початкова позиція заливки X.

`y`
Початкова позиція заливання Y.

`invert`
Якщо значення дорівнює **`true`**, зафарбовує будь-який піксель, не
відповідний цільовому кольору.

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::floodfillPaintImage()****

` <?php/* Створення нового об'єкта Imagick */$im u003d new Imagick();/* Створення червоних, зелених і синіх зображення */$im->newImage(100, >>> newImage(100, 50, "green");$im->newImage(100, 50, "blue");/* Складання зображень в одне*/$im->resetIterator();$combined u003d $im->appendImages (true);/* Збереження проміжного зображення для порівнення */$combined->writeImage("floodfillpaint_intermediate.png");/* Цільовий піксель для малювання */$x u003d 1;$ | малюємо */$target u003d $combined->getImagePixelColor($x, $y);/* Зафарбовування пікселя в позиції 1,1 чорним і всіх сусідних пікселів,         , $target, $x, $y, false);/* Збереження результату */$combined->writeImage("floodfillpaint_result.png");?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
Imagick::floodfillPaintImage()](images/c0d23d2d6769e53e24a1b3136c064577-floodfillpaint_intermediate.png)

![Висновок прикладу:
Imagick::floodfillPaintImage()](images/c0d23d2d6769e53e24a1b3136c064577-floodfillpaint_result.png)
