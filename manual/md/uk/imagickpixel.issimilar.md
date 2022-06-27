- [«
ImagickPixel::isPixelSimilarQuantum](imagickpixel.ispixelsimilarquantum.md)
- [ImagickPixel::setColor »](imagickpixel.setcolor.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Перевірити різницю між цим кольором та іншим

# ImagickPixel::isSimilar

(PECL imagick 2, PECL imagick 3)

ImagickPixel::isSimilar — Перевірити різницю між цим кольором та іншим

### Опис

public
**ImagickPixel::isSimilar**([ImagickPixel](class.imagickpixel.md)
`$color`, float `$fuzz`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Перевіряється різниця кольору, описаного поточним об'єктом ImagickPixel та
кольори в переданому об'єкті, шляхом побудови їх RGB значень у колірному
куб. Якщо різниця між ними менша за передане fuzz-значення, то
кольори вважаються однаковими. Застарів на користь
[ImagickPixel::isPixelSimilar()](imagickpixel.ispixelsimilar.md).

### Список параметрів

`col`
Об'єкт ImagickPixel можна порівняти з поточним об'єктом.

`fuzz`
Максимальна різниця, за якої кольори будуть вважатися однаковими.
Теоретичним максимумом для цього значення можна вважати квадратний
корінь із трьох (1.732).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ImagickPixel::isSimilar()****

` <?php        // Тесты ниже написаны с учётом максимальной дистанции 255        // следовательно мы должны масштабировать их на корень из 3 - длину диагонали        // единичного куба        $root3 u003d 1.732050807568877; $tests u003d array(            ['rgb(245, 0, 0)',      'rgb(255, 0, 0)',   9 / $root3,         false,],            ['rgb(245, 0, 0)',      ' rgb(255, 0, 0)',  10 / $root3,         true,],            ['rgb(0, 0, 0)',        'rgb(7, 7, 0)',     9 / $root3,         false,] ,            ['rgb(0, 0, 0)',        'rgb(7, 7, 0)',    10 / $root3,         true,],            ['rgba(0, 0, 0, 1)',    'rgba( 7, 7, 0, 1)', 9 / $root3,        false,],                   ,     true,],            ['rgb(128, 128, 128)',  'rgb(128, 128, 120)',   7 / $root3,     false,],            ['rgb(128, 128, 128)',  ' rgb(128, 128, 120)',   8 / $root3,     true,],            ['rgb(0, 0, 0)',        'rgb(255, 255, 255)',   254.9,          false,],            [' rgb(0, 0, 0)',        'rgb(255, 255, 255)',   255,            true,],            ['rgb(255, 0, 0)',      'rgb(0, 255, 255)', 254.9,         false,],            ['rgb(255, 0, 0)',      'rgb(0, 5 true,],            ['black',               'rgba(0, 0, 0)',        0.0,            true],            ['black',               'rgba(10, 0, 0, 1.0)',  10.0 / $root3,  true] ,); $output u003d "<table widthu003d'100%' classu003d'infoTable'><thead>                <tr>                <th>                Color 1                </th>                <th>                Color 2                </th>                <th>                    Тестовая дистанция * 255                < /th>                <th>                    Есть в пределах досягаемости                </th>                </tr>        </thead>"; $output.u003du003d"<tbody>"; foreach ($tests as $testInfo) {            $color1 u003d $testInfo[0]; $color2u003du003d$testInfo[1]; $distanceu003du003d$testInfo[2]; $expectationu003du003d$testInfo[3]; $testDistance u003d ($distance / 255.0); $color1Pixelu003d new \ImagickPixel($color1); $color2Pixelu003d new \ImagickPixel($color2); $isSimilar u003d $color1Pixel->isPixelSimilar($color2Pixel, $testDistance); if ($isSimilar !u003du003d $expectation) {                echo "Тест дистанції провалений. Колір [$color1] в' порівнянні  | }            $layout u003d "<tr>                <td>%s</td>                <td>%s</td>                <td>%s</td>                <td styleu003d'text-align: center;'>%s </td>             </tr>"; $output .u003d sprintf(                $layout,                $color1,                $color2,                $distance,                $isSimilar ? 'да' : 'нет'            ); }        $output .u003d "</tbody></table>"; return $output;?> `
