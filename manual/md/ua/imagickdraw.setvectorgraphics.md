- [«
ImagickDraw::setTextUnderColor](imagickdraw.settextundercolor.md)
- [ImagickDraw::setViewbox »](imagickdraw.setviewbox.md)

- [PHP Manual](index.md)
- [ImagickDraw](class.imagickdraw.md)
- Встановлює векторну графіку

# ImagickDraw::setVectorGraphics

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setVectorGraphics — Встановлює векторну графіку

### Опис

public **ImagickDraw::setVectorGraphics**(string `$xml`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Встановлює векторну графіку, пов'язану із зазначеним об'єктом
ImagickDraw. Метод використовується з
[ImagickDraw::getVectorGraphics()](imagickdraw.getvectorgraphics.md) в
як метод для збереження стану векторної графіки.

### Список параметрів

`xml`
XML, який містить векторну графіку.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ImagickDraw::setVectorGraphics()****

`<?phpfunction setVectorGraphics() {    //Створення об'єкта для малювання з яким-небудь малюнком в ньому. $draw u003d new \ImagickDraw(); $draw->setFillColor("red"); $draw->circle(20, 20, 50, 50); $draw->setFillColor("blue"); $draw->circle(50, 70, 50, 50); $draw->rectangle(50, 120, 80, 150); //Одержання малюнку в виді рядки   $SVG u003d $draw->getVectorGraphics(); //$svg - рядок, і е можна зберегти сюди, де рядок може буде збережена     //Використання збереженого малюнку для створення нового          //Очевидно, в тексті SVG відсутня кореневий елемент. $draw2->setVectorGraphics("<root>".$SVG."</root>"); $imagicku003du003dnewImagick(); $imagick->newImage(200, 200, 'white'); $imagick->setImageFormat("png"); $imagick->drawImage($draw2); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
