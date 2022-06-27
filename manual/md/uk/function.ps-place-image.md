- [«ps_open_memory_image](function.ps-open-memory-image.md)
- [ps_rect »](function.ps-rect.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Розміщує зображення на сторінці

#ps_place_image

(PECL ps \>u003d 1.1.0)

ps_place_image — Розміщує зображення на сторінці

### Опис

**ps_place_image**(
resource `$psdoc`,
int `$imageid`,
float `$x`,
float `$y`,
float `$scale`
): bool

Поміщає раніше завантажене зображення на сторінку. Зображення можна
масштабувати. Якщо зображення також потрібно повернути, потрібно буде
спочатку повернути систему координат за допомогою
[ps_rotate()](function.ps-rotate.md).

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`imageid`
Ідентифікатор ресурсу зображення, повернутий
[ps_open_image()](function.ps-open-image.md) або
[ps_open_image_file()](function.ps-open-image-file.md).

`x`
Координата X лівого нижнього кута зображення.

`y`
Координата Y лівого нижнього кута зображення.

`scale`
Коефіцієнт масштабування зображення. Масштаб 1.0 дозволить 72
точки на дюйм, тому що кожен піксель еквівалентний 1 точці.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_open_image()](function.ps-open-image.md) - Зчитує
зображення для подальшого розміщення
- [ps_open_image_file()](function.ps-open-image-file.md) - Відкриває
зображення з файлу
