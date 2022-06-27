- [« ImagickKernel::getMatrix](imagickkernel.getmatrix.md)
- [ImagickKernel::separate »](imagickkernel.separate.md)

- [PHP Manual](index.md)
- [ImagickKernel](class.imagickkernel.md)
- Опис

# ImagickKernel::scale

(PECL imagick \>u003d 3.3.0)

ImagickKernel::scale — Опис

### Опис

public **ImagickKernel::scale**(float `$scale`, int `$normalizeFlag` u003d
?): void

ScaleKernelInfo() масштабує заданий список ядер на задану
величину, з нормалізацією суми значень ядра або без неї (у
відповідно до заданих прапорів). Точна поведінка функції залежить від
використовуваного типу нормалізації, дивіться подробиці на
http://www.imagemagick.org/api/morphology.php#ScaleKernelInfo. Прапор
повинен бути одним з наступних: Imagick::NORMALIZE_KERNEL_VALUE,
Imagick::NORMALIZE_KERNEL_CORRELATE, Imagick::NORMALIZE_KERNEL_PERCENT
або не встановлено.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **ImagickKernel::scale()****

` <?php    function renderKernelTable($matrix) {        $output u003d "<table classu003d'infoTable'>"; foreach ($matrix as $row) {            $output .u003d "<tr>"; foreach ($row as $cell) {                $output .u003d "<td styleu003d'text-align:left'>"; if ($cell u003du003du003du003dfalse) {                    $output .u003d "false"; }                 else {                     $output .u003d round($cell, }                  $output .u003d "</td>"; }             $output .u003d "</tr>"; }        $output .u003d "</table>"; return $output; }    $output u003d ""; $matrix u003d [        [-1, 0, -1],       [ 0, 4,  0],         [-1, , ; $kernelu003d \ImagickKernel::fromMatrix($matrix); $kernelClone u003d clone $kernel; $output .u003d "Старт ядра<br/>"; $output.u003du003drenderKernelTable($kernel->getMatrix()); $output .u003d "Масштабування з NORMALIZE_KERNEL_VALUE. The  <br/>"; $kernel->scale(2, \Imagick::NORMALIZE_KERNEL_VALUE); $output.u003du003drenderKernelTable($kernel->getMatrix()); $kernelu003d clone $kernelClone; $output .u003d "Масштабування в відсотках<br/>"; $kernel->scale(2, \Imagick::NORMALIZE_KERNEL_PERCENT); $output.u003du003drenderKernelTable($kernel->getMatrix()); $matrix2 u003d [        [-1, -1, 1],        [ -1, false,  1],        [1, ,| $kernelu003d \ImagickKernel::fromMatrix($matrix2); $output .u003d "Масштабування по кореляції<br/>"; $kernel->scale(1, \Imagick::NORMALIZE_KERNEL_CORRELATE); $output.u003du003drenderKernelTable($kernel->getMatrix()); return $output;?> `
