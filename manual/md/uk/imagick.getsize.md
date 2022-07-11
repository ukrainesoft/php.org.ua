- [« Imagick::getSamplingFactors](imagick.getsamplingfactors.md)
- [Imagick::getSizeOffset »](imagick.getsizeoffset.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає розмір, пов'язаний із об'єктом Imagick

# Imagick::getSize

(PECL imagick 2, PECL imagick 3)

Imagick::getSize — Повертає розмір, пов'язаний із об'єктом Imagick

### Опис

public **Imagick::getSize**(): array

Отримує розмір пікселів об'єкта Imagick, попередньо заданий з
за допомогою функції [Imagick::setSize()](imagick.setsize.md).

> **Примітка**:
>
> Цей метод лише повертає розмір, встановлений
> [Imagick::setSize()](imagick.setsize.md). Якщо вам потрібно
> отримати реальні розміри зображення, використовуйте функції
> [Imagick::getImageWidth()](imagick.getimagewidth.md) та
> [Imagick::getImageHeight()](imagick.getimageheight.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає розмір, пов'язаний із об'єктом Imagick у вигляді масиву з ключами
"columns" (стовпці) та "rows" (рядки).

### Приклади

**Приклад #1 Отримання розміру вихідного зображення RGB, встановлені в
200x400, після масштабування до 400x800**

` <?php//Встановлюємо розмір і завантажуємо зображення$img u003d new Imagick();$img->setSize(200, 400);$img->readImage("image.rgb");$img->scaleImage(400 , 800);$size u003d $img->getSize();print_r($size);echo $img->getImageWidth()."x".$img->getImageHeight();?> `

Результат виконання цього прикладу:

Array
(
[columns] u003d> 200
[rows] u003d> 400
)
400x800
