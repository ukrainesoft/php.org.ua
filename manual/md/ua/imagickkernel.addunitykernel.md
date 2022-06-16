- [« ImagickKernel::addKernel](imagickkernel.addkernel.md)
- [ImagickKernel::fromBuiltIn »](imagickkernel.frombuiltin.md)

- [PHP Manual](index.md)
- [ImagickKernel](class.imagickkernel.md)
- Опис

# ImagickKernel::addUnityKernel

(PECL imagick \>u003d 3.3.0)

ImagickKernel::addUnityKernel — Опис

### Опис

public **ImagickKernel::addUnityKernel**(float `$scale`): void

Додає вказану кількість згорткового ядра 'Unity' до вказаного
попередньо масштабованому та нормалізованому ядру. Це фактично
додає ту кількість вихідного зображення в ядро, що виходить
згортки. В результаті виходить перетворення певних ядер на
змішані м'які плями, нерізкі ядра або загострені ядра.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **ImagickKernel::addUnityKernel()****

` <?php    function renderKernelTable($matrix) {        $output u003d "<table classu003d'infoTable'>"; foreach ($matrix as $row) {            $output .u003d "<tr>"; foreach ($row as $cell) {                $output .u003d "<td styleu003d'text-align:left'>"; if ($cell u003du003du003du003dfalse) {                    $output .u003d "false"; }                 else {                     $output .u003d round($cell, }                  $output .u003d "</td>"; }             $output .u003d "</tr>"; }        $output .u003d "</table>"; return $output; }   $matrix u003d [        [-1, 0, -1],        [ 0, 4,  0], | $kernelu003d \ImagickKernel::fromMatrix($matrix); $kernel->scale(1, \Imagick::NORMALIZE_KERNEL_VALUE); $output u003d "Перед додаваннямunity ядра: <br/>"; $output.u003du003drenderKernelTable($kernel->getMatrix()); $kernel->addUnityKernel(0.5); $output .u003d "Після додавання unity ядра: <br/>"; $output.u003du003drenderKernelTable($kernel->getMatrix()); $kernel->scale(1, \Imagick::NORMALIZE_KERNEL_VALUE); $output .u003d "Після перенормування ядра: <br/>"; $output.u003du003drenderKernelTable($kernel->getMatrix()); echo $output;?> `

**Приклад #2 Приклад використання **ImagickKernel::addUnityKernel()****

<-phpfunction AddUnityKernel($imagePath) {- ,  ,   ,                 $kernelu003d ImagickKernel::fromMatrix($matrix); $kernel->scale(4, \Imagick::NORMALIZE_KERNEL_VALUE); $kernel->addUnityKernel(0.5); $imagick u003d new \Imagick(realpath($imagePath)); $imagick->filter($kernel); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
