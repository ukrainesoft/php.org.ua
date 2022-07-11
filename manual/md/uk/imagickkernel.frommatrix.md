- [« ImagickKernel::fromBuiltIn](imagickkernel.frombuiltin.md)
- [ImagickKernel::getMatrix »](imagickkernel.getmatrix.md)

- [PHP Manual](index.md)
- [ImagickKernel](class.imagickkernel.md)
- Опис

# ImagickKernel::fromMatrix

(PECL imagick \>u003d 3.3.0)

ImagickKernel::fromMatrix — Опис

### Опис

public static **ImagickKernel::fromMatrix**(array `$matrix`, array
`$origin` u003d ?): [ImagickKernel](class.imagickkernel.md)

Створює ядро двомерної матриці значень. Кожне значення має бути
або числом з плаваючою комою (якщо елемент повинен використовуватися),
або з 'false', якщо слід пропустити елемент. Для матриць непарних
розмірів в обох вимірах вихідним пікселем за замовчуванням буде центр
ядра. Для інших розмірів ядра необхідно вказати вихідний піксель.

### Список параметрів

`array`
Матриця (тобто двовимірний масив) значень, що визначають ядро. Кожен
елемент повинен бути або числом із плаваючою комою, або значенням
FALSE, якщо цей елемент не використовується ядром.

`array`
Який елемент ядра слід використовувати як вихідний піксель.
Наприклад, для матриці 3x3, що визначає початок координат як [2, 2],
буде вказано, що нижній правий елемент має бути вихідним пікселем.

### Значення, що повертаються

Створений ImagickKernel.

### Приклади

**Приклад #1 Приклад використання **ImagickKernel::fromMatrix()****

` <?phpfunction renderKernel(ImagickKernel $imagickKernel) {    $matrix u003d $imagickKernel->getMatrix(); $imageMargin u003d 20; $ tileSize u003d 20; $tileSpace u003d 4; $shadowSigmau003du003d4; $shadowDropX u003d 20; $shadowDropY u003d 0; $radius u003d ($tileSize / 2) * 0.9; $rowsu003du003dcount($matrix); $columns u003d count($matrix[0]); $imagickDrawu003d new \ImagickDraw(); $imagickDraw->setFillColor('#afafaf'); $imagickDraw->setStrokeColor('none'); $imagickDraw->translate($imageMargin, $imageMargin); $imagickDraw->push(); ksort($matrix); foreach ($matrix as $row) {        ksort($row); $imagickDraw->push(); foreach ($row as $cell) {             if ($cell !u003du003d false) {                    $colorString u003d sprintf("rgb(%f, %f, %f)", $color, $color, $color); $imagickDraw->setFillColor($colorString); $imagickDraw->rectangle(0, 0, $tileSize, $tileSize); }             $imagickDraw->translate(($tileSize + $tileSpace), 0); }        $imagickDraw->pop(); $imagickDraw->translate(0, ($tileSize + $tileSpace)); }   $imagickDraw->pop(); $width u003d ($columns * $tileSize) + (($columns - 1) * $tileSpace); $height u003d ($rows * $tileSize) + (($rows - 1) * $tileSpace); $imagickDraw->push(); $imagickDraw->translate($width/2 , $height/2); $imagickDraw->setFillColor('rgba(0, 0, 0, 0)'); $imagickDraw->setStrokeColor('white'); $imagickDraw->circle(0, 0, $radius - 1, 0); $imagickDraw->setStrokeColor('black'); $imagickDraw->circle(0, 0, $radius, 0); $imagickDraw->pop(); $canvasWidthu003du003d$width + (2 * $imageMargin); $canvasHeight u003d $height + (2 * $imageMargin); $kernelu003du003dnewImagick(); $kernel->newPseudoImage($  canvasWidth,       $canvasHeight,        'canvas:none'    ); $kernel->setImageFormat('png'); $kernel->drawImage($imagickDraw); /* створення тіні на власному шарі */    $canvas u003d $kernel->clone(); $canvas->setImageBackgroundColor(new \ImagickPixel('rgb(0, 0, 0)')); $canvas->shadowImage(100, $shadowSigma, $shadowDropX, $shadowDropY); $canvas->setImagePage($canvasWidth, $canvasHeight, -5, -5); $canvas->cropImage($canvasWidth, $canvasHeight, 0, 0); /* накладає вихідний text_layer на shadow_layer */    $canvas->compositeImage($kernel, \Imagick::COMPOSITE_OVER, 0, 0); $canvas->setImageFormat('png'); return $canvas;}function createFromMatrix() {    $matrix u003d [        [0.5, 0, 0.2],   ,  ,                          < $kernelu003d \ImagickKernel::fromMatrix($matrix); return $kernel;}function fromMatrix() {    $kernel u003d createFromMatrix(); $imagicku003du003drenderKernel($kernel); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
