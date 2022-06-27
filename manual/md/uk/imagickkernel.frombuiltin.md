- [« ImagickKernel::addUnityKernel](imagickkernel.addunitykernel.md)
- [ImagickKernel::fromMatrix »](imagickkernel.frommatrix.md)

- [PHP Manual](index.md)
- [ImagickKernel](class.imagickkernel.md)
- Опис

# ImagickKernel::fromBuiltIn

(PECL imagick \>u003d 3.3.0)

ImagickKernel::fromBuiltIn — Опис

### Опис

public static **ImagickKernel::fromBuiltin**(int `$kernelType`, string
`$kernelString`): [ImagickKernel](class.imagickkernel.md)

Створює ядро із вбудованого ядра. Дивіться приклади
http://www.imagemagick.org/Usage/morphology/#kernel. В даний час
символи "обертання" не підтримуються. Приклад: $diamondKernel u003d
ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DIAMOND, "2");

### Список параметрів

`kerneltype`
Тип ядра для складання, наприклад \Imagick::KERNEL_DIAMOND

`kernelString`
Рядок, що описує параметри, наприклад, "4,2.5"

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **ImagickKernel::fromBuiltin()****

` <?phpfunction renderKernel(ImagickKernel $imagickKernel) {    $matrix u003d $imagickKernel->getMatrix(); $imageMargin u003d 20; $ tileSize u003d 20; $tileSpace u003d 4; $shadowSigmau003du003d4; $shadowDropX u003d 20; $shadowDropY u003d 0; $radius u003d ($tileSize / 2) * 0.9; $rowsu003du003dcount($matrix); $columns u003d count($matrix[0]); $imagickDrawu003d new \ImagickDraw(); $imagickDraw->setFillColor('#afafaf'); $imagickDraw->setStrokeColor('none'); $imagickDraw->translate($imageMargin, $imageMargin); $imagickDraw->push(); ksort($matrix); foreach ($matrix as $row) {        ksort($row); $imagickDraw->push(); foreach ($row as $cell) {             if ($cell !u003du003d false) {                    $colorString u003d sprintf("rgb(%f, %f, %f)", $color, $color, $color); $imagickDraw->setFillColor($colorString); $imagickDraw->rectangle(0, 0, $tileSize, $tileSize); }             $imagickDraw->translate(($tileSize + $tileSpace), 0); }        $imagickDraw->pop(); $imagickDraw->translate(0, ($tileSize + $tileSpace)); }   $imagickDraw->pop(); $width u003d ($columns * $tileSize) + (($columns - 1) * $tileSpace); $height u003d ($rows * $tileSize) + (($rows - 1) * $tileSpace); $imagickDraw->push(); $imagickDraw->translate($width/2 , $height/2); $imagickDraw->setFillColor('rgba(0, 0, 0, 0)'); $imagickDraw->setStrokeColor('white'); $imagickDraw->circle(0, 0, $radius - 1, 0); $imagickDraw->setStrokeColor('black'); $imagickDraw->circle(0, 0, $radius, 0); $imagickDraw->pop(); $canvasWidthu003du003d$width + (2 * $imageMargin); $canvasHeight u003d $height + (2 * $imageMargin); $kernelu003du003dnewImagick(); $kernel->newPseudoImage($  canvasWidth,       $canvasHeight,        'canvas:none'    ); $kernel->setImageFormat('png'); $kernel->drawImage($imagickDraw); /* створення тіні на власному шарі */    $canvas u003d $kernel->clone(); $canvas->setImageBackgroundColor(new \ImagickPixel('rgb(0, 0, 0)')); $canvas->shadowImage(100, $shadowSigma, $shadowDropX, $shadowDropY); $canvas->setImagePage($canvasWidth, $canvasHeight, -5, -5); $canvas->cropImage($canvasWidth, $canvasHeight, 0, 0); /* накладає вихідний text_layer на shadow_layer */    $canvas->compositeImage($kernel, \Imagick::COMPOSITE_OVER, 0, 0); $canvas->setImageFormat('png'); return $canvas;}function createFromBuiltin($kernelType, $kernelFirstTerm, $kernelSecondTerm, $kernelThirdTerm) {   $string u003d ''; if ($kernelFirstTerm !u003d false && strlen(trim($kernelFirstTerm)) !u003d 0) {        $string .u003d $kernelFirstTerm; if ($kernelSecondTerm !u003d false && strlen(trim($kernelSecondTerm)) !u003d 0) {            $string .u003d ','.$kernelSecon if ($kernelThirdTerm !u003d false && strlen(trim($kernelThirdTerm)) !u003d 0) {                 $string .u003d '; }        }    }}   $kernel u003d ImagickKernel::fromBuiltIn(       $kernelType,                                               —————————— return $kernel;}function fromBuiltin($kernelType, $kernelFirstTerm, $kernelSecondTerm, $kernelThirdTerm) {   $diamondKernel u003d createFromBuiltin($kernel,Ternel $imagicku003du003drenderKernel($diamondKernel); header("Content-Type: image/png"); echo $imagick->getImageBlob();}fromBuiltin(\Imagick::KERNEL_DIAMOND, 2, false, false);?> `
