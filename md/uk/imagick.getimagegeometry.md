- [« Imagick::getImageGamma](imagick.getimagegamma.md)
- [Imagick::getImageGravity »](imagick.getimagegravity.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає ширину та висоту у вигляді асоціативного масиву

# Imagick::getImageGeometry

(PECL imagick 2, PECL imagick 3)

Imagick::getImageGeometry — Повертає ширину та висоту у вигляді
асоціативного масиву

### Опис

public **Imagick::getImageGeometry**(): array

Повертає ширину та висоту у вигляді асоціативного масиву.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив із шириною та висотою зображення.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::getImageGeometry()****

` <?php$imagick u003d new Imagick();$imagick->newImage(100, 200, "black");print_r($imagick->getImageGeometry());?> `

Результат виконання цього прикладу:

Array
(
[width] u003d> 100
[height] u003d> 200
)
