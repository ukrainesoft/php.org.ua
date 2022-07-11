- [«ImagickDraw](class.imagickdraw.md)
- [ImagickDraw::annotation »](imagickdraw.annotation.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Регулює поточну матрицю афінного перетворення

# ImagickDraw::affine

(PECL imagick 2, PECL imagick 3)

ImagickDraw::affine — Регулює поточну матрицю афінного
перетворення

### Опис

public **ImagickDraw::affine**(array `$affine`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Коригує поточну матрицю афінного перетворення із зазначеною
матрицею афінного перетворення.

### Список параметрів

`affine`
Параметри афінної матриці

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::affine()****

` <?phpfunction affine($strokeColor, $fillColor, $backgroundColor) {    $draw u003d new \ImagickDraw(); $draw->setStrokeWidth(1); $draw->setStrokeOpacity(1); $draw->setStrokeColor($strokeColor); $draw->setFillColor($fillColor); $draw->setStrokeWidth(2); $PI u003d 3.141592653589794; $angleu003du003d60 * $PI / 360; //Масштабування координат креслення. $affineScaleu003du003d array("sx" u003d> 1.75, "sy" u003d> 1.75, "rx" u003d> 0, "ry" u003d> 0, "tx" u003d> 0, ty" u003d>> //Зсув координат креслення. $affineShearu003du003d array("sx" u003d> 1, "sy" u003d> 1, "rx" u003d> sin($angle), "ry" u003d> -sin($angle), "tx" u003d> 0, " ty" u003d> 0); //Поворот координат креслення. Афінна матриця зсуву дає    //неправильно масштабовані креслення. $affineRotateu003du003d array("sx" u003d> cos($angle), "sy" u003d> cos($angle), "rx" u003d> sin($angle), "ry" u003d> -sin($angle), "tx" u003d> 0, "ty" u003d> 0,); //Зміщення малюнку    $affineTranslate u003d array("sx" u003d> 1, "sy" u003d> 1, "rx" u003d> 0, "ry" u003d> 0, "tx" u003d>> ); //Единична афінна матриця   $affineIdentity u003d array("sx" u003d> 1, sy" u003d> 1, "rx" u003d> 0, "ryu003d u003d> 0, "tx" > 0); $examplesu003du003d[$affineScale,$affineShear,$affineRotate,$affineTranslate,$affineIdentity,]; $countu003du003d0; foreach ($examples as $example) {        $draw->push(); $draw->translate(($count %2) * 250, intval($count / 2) * 250); $draw->translate(100, 100); $draw->affine($example); $draw->rectangle(-50, -50, 50, 50); $draw->pop(); $ count++; }    //Створення об'єкта зображення, в можна перетворити команди малювання. $image u003d new \Imagick(); $image->newImage(500, 750, $backgroundColor); $image->setImageFormat("png"); //Перетворення команд малювання в об'єкті ImagickDraw    //в зображення. $image->drawImage($draw); //Відображення зображення в браузері   header("Content-Type:image/png"); echo $image->getImageBlob();}?> `
