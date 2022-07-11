- [« Imagick::setInterlaceScheme](imagick.setinterlacescheme.md)
- [Imagick::setLastIterator »](imagick.setlastiterator.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює позицію ітератора

# Imagick::setIteratorIndex

(PECL imagick 2, PECL imagick 3)

Imagick::setIteratorIndex — Встановлює позицію ітератора

### Опис

public **Imagick::setIteratorIndex**(int `$index`): bool

Встановлює ітератор на позицію у списку зображень, вказану з
за допомогою параметра index. Цей метод доступний, якщо Imagick був
скомпільований з версією ImageMagick 6.2.9 або старшим.

### Список параметрів

`index`
Позиція встановлення ітератора.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::setIteratorIndex()**:**

Створення зображення, встановлення та отримання індексу ітератора

` <?php$im u003d new Imagick();$im->newImage(100, 100, new ImagickPixel("red"));$im->newImage(100, 100, new ImagickPixel("green")); $im->newImage(100, 100, new ImagickPixel("blue"));$im->setIteratorIndex(1);echo $im->getIteratorIndex();?> `

### Дивіться також

- [Imagick::getIteratorIndex()](imagick.getiteratorindex.md) -
Повертає індекс поточного активного зображення
- [Imagick::getImageIndex()](imagick.getimageindex.md) - Повертає
індекс поточного активного зображення
- [Imagick::setImageIndex()](imagick.setimageindex.md) -
Встановлює позицію ітератора
