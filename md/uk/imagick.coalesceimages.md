- [« Imagick::clutImage](imagick.clutimage.md)
- [Imagick::colorFloodfillImage »](imagick.colorfloodfillimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Компонує набір зображень

# Imagick::coalesceImages

(PECL imagick 2, PECL imagick 3)

Imagick::coalesceImages — Компонує набір зображень

### Опис

public **Imagick::coalesceImages**(): [Imagick](class.imagick.md)

Скомпонований набір зображень з дотриманням будь-яких зсувів сторінок та
методи видалення. Анімаційні послідовності GIF, MIFF та MNG зазвичай
починаються з фону зображення, і кожне наступне зображення
змінюється за розміром та зміщенням. Повертає новий об'єкт Imagick, де
кожне зображення в послідовності має той самий розмір, що і
перше та скомпоноване з наступним зображенням у послідовності.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає новий об'єкт Imagick у разі успішного виконання.

### Помилки

Викликає ImagickException у разі виникнення помилки.
