- [« Imagick::setPage](imagick.setpage.md)
- [Imagick::setProgressMonitor »](imagick.setprogressmonitor.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює розмір точки

# Imagick::setPointSize

(PECL imagick 2 \>u003d 2.1.0, PECL imagick 3)

Imagick::setPointSize — Встановлює розмір точки

### Опис

public **Imagick::setPointSize**(float `$point_size`): bool

Встановлює об'єкт властивість розміру точки. Метод можна використати,
наприклад, для встановлення розміру шрифту для caption: формату
псевдозображень. Цей метод доступний, якщо Imagick був скомпільований з
версією ImageMagick 6.3.7 чи старшою.

### Список параметрів

`point_size`
Розмір точки.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::setPointSize()****

Приклад використання Imagick::setPointSize

` <?php/* Створення нового об'єкта Imagick */$im u003d new Imagick();/* Установка шрифту для об'єкту */$im->setFont("example.ttf");/* Установка >setPointSize(12);/* Створення заголовка */$im->newPseudoImage(100, 100, "caption:Hello");/* Робота з зображенням */?> `

### Дивіться також

- [Imagick::getPointSize()](imagick.getpointsize.md) - Повертає
розмір точки
