- [« Imagick::setImageMatteColor](imagick.setimagemattecolor.md)
- [Imagick::setImageOrientation »](imagick.setimageorientation.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює рівень непрозорості зображення

# Imagick::setImageOpacity

(PECL imagick 2, PECL imagick 3)

Imagick::setImageOpacity — Встановлює рівень непрозорості
зображення

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::setImageOpacity**(float `$opacity`): bool

Встановлює зображення на вказаний рівень непрозорості. Цей
метод доступний, якщо Imagick був скомпільований з версією ImageMagick
6.3.1 чи старше. Метод працює з усіма каналами, що означає,
наприклад, що значення непрозорості 0.5 зробить усі прозорі області
частково непрозорими. Щоб додати прозорості в області, які
ще непрозорі, використовуйте
[Imagick::evaluateImage()](imagick.evaluateimage.md).

### Список параметрів

`opacity`
Рівень прозорості: 1.0 – повністю непрозорий, а 0.0 – повністю
прозорий. transparent.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::setImageOpacity()****

Приклад використання Imagick::setImageOpacity().

` <?php/* Створення об'єкта */$image u003d new Imagick('source.png');/* Установка непрозорості */$image->setImageOpacity(0.7);/* Висновок зображення */header('Conte : image/png');echo $image;?> `
