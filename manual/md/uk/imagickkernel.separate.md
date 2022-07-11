- [« ImagickKernel::scale](imagickkernel.scale.md)
- [Модулі для роботи з поштою »](refs.remote.mail.md)

- [PHP Manual](index.md)
- [ImagickKernel](class.imagickkernel.md)
- Опис

# ImagickKernel::separate

(PECL imagick \>u003d 3.3.0)

ImagickKernel::separate — Опис

### Опис

public **ImagickKernel::separate**(): array

Поділяє пов'язаний набір ядер і повертає масив ImagickKernels.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **ImagickKernel::separate()****

` <?php    function renderKernelTable($matrix) {        $output u003d "<table classu003d'infoTable'>"; foreach ($matrix as $row) {            $output .u003d "<tr>"; foreach ($row as $cell) {                $output .u003d "<td styleu003d'text-align:left'>"; if ($cell u003du003du003du003dfalse) {                    $output .u003d "false"; }                 else {                     $output .u003d round($cell, }                  $output .u003d "</td>"; }             $output .u003d "</tr>"; }        $output .u003d "</table>"; return $output; }   $matrix u003d [        [-1, 0, -1],        [ 0, 4,  0], | $kernelu003d \ImagickKernel::fromMatrix($matrix); $kernel->scale(4, \Imagick::NORMALIZE_KERNEL_VALUE); $diamondKernelu003du003d \ImagickKernel::fromBuiltIn(        \Imagick::KERNEL_DIAMOND,       "2"    ); $kernel->addKernel($diamondKernel); $kernelList u003d $kernel->separate(); $outputu003du003d''; $countu003du003d0; foreach ($kernelList as $kernel) {        $output .u003d "<br/>Ядро $count<br/>"; $output.u003du003drenderKernelTable($kernel->getMatrix()); $ count++; }   return $output;?> `
