- [«Типи ресурсів](image.resources.md)
- [Приклади »](image.examples.md)

- [PHP Manual](index.md)
- [GD] (book.image.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`GD_VERSION`** (string)
Версія GD, з якою було скомпільовано PHP.

**`GD_MAJOR_VERSION`** (int)
Повнофункціональна версія GD, з якою був скомпільований PHP.

**`GD_MINOR_VERSION`** (int)
Скорочена версія GD, з якою був скомпільований PHP.

**`GD_RELEASE_VERSION`** (int)
Робоча версія GD, з якою був скомпільований PHP.

**`GD_EXTRA_VERSION`** (string)
Додаткова (beta/rc..) версія GD, з якою був скомпільований PHP.

**`GD_BUNDLED`** (int)
Якщо використовується версія GD, що розповсюджується з PHP, константа приймає
значення 1, інакше 0.

**`IMG_AVIF`** (int)
Використовується як значення функції, що повертається
[imagetypes()](function.imagetypes.md). Доступно з PHP 8.1.0.

**`IMG_BMP`** (int)
Використовується як значення функції, що повертається
[imagetypes()](function.imagetypes.md).

**`IMG_GIF`** (int)
Використовується як значення функції, що повертається
[imagetypes()](function.imagetypes.md).

**`IMG_JPG`** (int)
Використовується як значення функції, що повертається
[imagetypes()](function.imagetypes.md).

**`IMG_JPEG`** (int)
Використовується як значення функції, що повертається
[imagetypes()](function.imagetypes.md).

> **Примітка**:
>
> Ця константа має те саме значення, що і **`IMG_JPG`**

**`IMG_PNG`** (int)
Використовується як значення функції, що повертається
[imagetypes()](function.imagetypes.md).

**`IMG_WBMP`** (int)
Використовується як значення функції, що повертається
[imagetypes()](function.imagetypes.md).

**`IMG_XPM`** (int)
Використовується як значення функції, що повертається
[imagetypes()](function.imagetypes.md).

**`IMG_WEBP`** (int)
Використовується як значення функції, що повертається
[imagetypes()](function.imagetypes.md). Доступно з PHP 7.0.10.

**`IMG_WEBP_LOSSLESS`** (int)
Доступно з PHP 8.1.0.

**`IMG_COLOR_TILED`** (int)
Спеціальний варіант кольору, який може бути використаний замість
певного за допомогою
[imagecolorallocate()](function.imagecolorallocate.md) та
[imagecolorallocatealpha()](function.imagecolorallocatealpha.md).

**`IMG_COLOR_STYLED`** (int)
Спеціальний варіант кольору, який може бути використаний замість
певного за допомогою
[imagecolorallocate()](function.imagecolorallocate.md) та
[imagecolorallocatealpha()](function.imagecolorallocatealpha.md).

**`IMG_COLOR_BRUSHED`** (int)
Спеціальний варіант кольору, який може бути використаний замість
певного за допомогою
[imagecolorallocate()](function.imagecolorallocate.md) та
[imagecolorallocatealpha()](function.imagecolorallocatealpha.md).

**`IMG_COLOR_STYLEDBRUSHED`** (int)
Спеціальний варіант кольору, який може бути використаний замість
певного за допомогою
[imagecolorallocate()](function.imagecolorallocate.md) та
[imagecolorallocatealpha()](function.imagecolorallocatealpha.md).

**`IMG_COLOR_TRANSPARENT`** (int)
Спеціальний варіант кольору, який може бути використаний замість
певного за допомогою
[imagecolorallocate()](function.imagecolorallocate.md) та
[imagecolorallocatealpha()](function.imagecolorallocatealpha.md).

**`IMG_AFFINE_TRANSLATE`** (int)
Константа типу афінного перетворення, що використовується з функцією
[imageaffinematrixget()](function.imageaffinematrixget.md) .

**`IMG_AFFINE_SCALE`** (int)
Константа типу афінного перетворення, що використовується з функцією
[imageaffinematrixget()](function.imageaffinematrixget.md) .

**`IMG_AFFINE_ROTATE`** (int)
Константа типу афінного перетворення, що використовується з функцією
[imageaffinematrixget()](function.imageaffinematrixget.md) .

**`IMG_AFFINE_SHEAR_HORIZONTAL`** (int)
Константа типу афінного перетворення, що використовується з функцією
[imageaffinematrixget()](function.imageaffinematrixget.md) .

**`IMG_AFFINE_SHEAR_VERTICAL`** (int)
Константа типу афінного перетворення, що використовується з функцією
[imageaffinematrixget()](function.imageaffinematrixget.md) .

**`IMG_ARC_ROUNDED`** (int)
Константа стилю, що використовується з функцією
[imagefilledarc()](function.imagefilledarc.md).

> **Примітка**:
>
> Ця константа має те саме значення, що і **`IMG_ARC_PIE`**

**`IMG_ARC_PIE`** (int)
Константа стилю, що використовується з функцією
[imagefilledarc()](function.imagefilledarc.md).

**`IMG_ARC_CHORD`** (int)
Константа стилю, що використовується з функцією
[imagefilledarc()](function.imagefilledarc.md).

**`IMG_ARC_NOFILL`** (int)
Константа стилю, що використовується з функцією
[imagefilledarc()](function.imagefilledarc.md).

**`IMG_ARC_EDGED`** (int)
Константа стилю, що використовується з функцією
[imagefilledarc()](function.imagefilledarc.md).

**`IMG_GD2_RAW`** (int)
Константа типу використовується з функцією
[imagegd2()](function.imagegd2.md).

**`IMG_GD2_COMPRESSED`** (int)
Константа типу використовується з функцією
[imagegd2()](function.imagegd2.md).

**`IMG_EFFECT_REPLACE`** (int)
Ефект альфа-змішування, використовується з функцією
[imagelayereffect()](function.imagelayereffect.md).

**`IMG_EFFECT_ALPHABLEND`** (int)
Ефект альфа-змішування, використовується з функцією
[imagelayereffect()](function.imagelayereffect.md).

**`IMG_EFFECT_NORMAL`** (int)
Ефект альфа-змішування, використовується з функцією
[imagelayereffect()](function.imagelayereffect.md).

**`IMG_EFFECT_OVERLAY`** (int)
Ефект альфа-змішування, використовується з функцією
[imagelayereffect()](function.imagelayereffect.md).

**`IMG_EFFECT_MULTIPLY`** (int)
Ефект альфа-змішування, використовується з функцією
[imagelayereffect()](function.imagelayereffect.md).

**`IMG_FILTER_NEGATE`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_GRAYSCALE`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_BRIGHTNESS`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_CONTRAST`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_COLORIZE`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_EDGEDETECT`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_GAUSSIAN_BLUR`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_SELECTIVE_BLUR`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_EMBOSS`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_MEAN_REMOVAL`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_SMOOTH`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_PIXELATE`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md).

**`IMG_FILTER_SCATTER`** (int)
Спеціальний фільтр GD, що використовується з функцією
[imagefilter()](function.imagefilter.md). (Доступна з PHP 7.4.0)

**`IMAGETYPE_GIF`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_JPEG`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_JPEG2000`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_PNG`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_SWF`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_PSD`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_BMP`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_WBMP`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_XBM`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_TIFF_II`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_TIFF_MM`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_IFF`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_JB2`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_JPC`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_JP2`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_JPX`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_SWC`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_ICO`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).

**`IMAGETYPE_WEBP`** (int)
Константа типу зображення, що використовується з функціями
[image_type_to_mime_type()](function.image-type-to-mime-type.md) та
[image_type_to_extension()](function.image-type-to-extension.md).
(Available as of PHP 7.1.0)

**`PNG_NO_FILTER`** (int)
Спеціальний фільтр PNG filter, що використовується з функцією
[imagepng()](function.imagepng.md).

**`PNG_FILTER_NONE`** (int)
Спеціальний фільтр PNG filter, що використовується з функцією
[imagepng()](function.imagepng.md).

**`PNG_FILTER_SUB`** (int)
Спеціальний фільтр PNG filter, що використовується з функцією
[imagepng()](function.imagepng.md).

**`PNG_FILTER_UP`** (int)
Спеціальний фільтр PNG filter, що використовується з функцією
[imagepng()](function.imagepng.md).

**`PNG_FILTER_AVG`** (int)
Спеціальний фільтр PNG filter, що використовується з функцією
[imagepng()](function.imagepng.md).

**`PNG_FILTER_PAETH`** (int)
Спеціальний фільтр PNG filter, що використовується з функцією
[imagepng()](function.imagepng.md).

**`PNG_ALL_FILTERS`** (int)
Спеціальний фільтр PNG filter, що використовується з функцією
[imagepng()](function.imagepng.md).

**`IMG_FLIP_VERTICAL`** (int)
Використовується з функцією [imageflip()](function.imageflip.md), доступна
із PHP 5.5.0.

**`IMG_FLIP_HORIZONTAL`** (int)
Використовується з функцією [imageflip()](function.imageflip.md), доступна
із PHP 5.5.0.

**`IMG_FLIP_BOTH`** (int)
Використовується з функцією [imageflip()](function.imageflip.md), доступна
із PHP 5.5.0.

**`IMG_BELL`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_BESSEL`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_BILINEAR_FIXED`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_BICUBIC_FIXED`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_BICUBIC`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_BLACKMAN`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_BOX`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_BSPLINE`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_CATMULLROM`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_GAUSSIAN`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_GENERALIZED_CUBIC`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_HERMITE`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_HAMMING`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_HANNING`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_MITCHELL`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_POWER`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_QUADRATIC`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_SINC`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_NEAREST_NEIGHBOUR`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_WEIGHTED4`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.

**`IMG_TRIANGLE`** (int)
Використовується з функцією
[imagesetinterpolation()](function.imagesetinterpolation.md), доступна
із PHP 5.5.0.
