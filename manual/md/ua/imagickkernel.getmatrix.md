- [« ImagickKernel::fromMatrix](imagickkernel.frommatrix.md)
- [ImagickKernel::scale »](imagickkernel.scale.md)

- [PHP Manual](index.md)
- [ImagickKernel](class.imagickkernel.md)
- Опис

# ImagickKernel::getMatrix

(PECL imagick \>u003d 3.3.0)

ImagickKernel::getMatrix — Опис

### Опис

public **ImagickKernel::getMatrix**(): array

Отримати 2d матрицю значень, що використовуються у цьому ядрі. Елементи
є або числом з плаваючою точкою для використовуваних елементів, або
'false', якщо елемент має бути пропущений.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Матриця (2d масив) значень, що становлять ядро.

### Приклади

**Приклад #1 Приклад використання **ImagickKernel::getMatrix()****

` <?phpfunction renderKernelTable($matrix) {   $output u003d "<table classu003d'infoTable'>"; foreach ($matrix as $row) {        $output .u003d "<tr>"; foreach ($row as $cell) {            $output .u003d "<td styleu003d'text-align:left'>"; if ($cell u003du003du003d false) {                $output .u003d "false"; }|||||||||||| }             $output .u003d "</td>"; }        $output .u003d "</tr>"; }   $output .u003d "</table>"; return $output;}   $output u003d "Ім'я вбудованого ядра 'ring' з параметрами '2,3.5':<br/>"; $kernelu003d \ImagickKernel::fromBuiltIn(        \Imagick::KERNEL_RING,        "2,3.5"    ); $matrixu003du003d$kernel->getMatrix(); $output.u003du003drenderKernelTable($matrix); echo $output;?> `
