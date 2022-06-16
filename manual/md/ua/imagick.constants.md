- [« Типи ресурсів](imagick.resources.md)
- [Приклади »](imagick.examples.md)

- [PHP Manual](index.md)
- [ImageMagick](book.imagick.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`imagick::COLOR_BLACK`** (int)
Чорний

**`imagick::COLOR_BLUE`** (int)
Синій

**`imagick::COLOR_CYAN`** (int)
Синьо-зелений

**`imagick::COLOR_GREEN`** (int)
Зелений

**`imagick::COLOR_RED`** (int)
червоний

**`imagick::COLOR_YELLOW`** (int)
Жовтий

**`imagick::COLOR_MAGENTA`** (int)
Пурпурний

**`imagick::COLOR_OPACITY`** (int)
Прозорість кольору

**`imagick::COLOR_ALPHA`** (int)
Альфа-канал для кольору

**`imagick::COLOR_FUZZ`** (int)
'Fuzz factor' для кольору. Дивіться документацію ImageMagick.



**`imagick::DISPOSE_UNRECOGNIZED`** (int)
Не розпізнаний

**`imagick::DISPOSE_UNDEFINED`** (int)
Не заданий

**`imagick::DISPOSE_NONE`** (int)
Немає прихильності

**`imagick::DISPOSE_BACKGROUND`** (int)
Фон

**`imagick::DISPOSE_PREVIOUS`** (int)
Попереднє



**`imagick::COMPOSITE_DEFAULT`** (int)
Оператор накладання за замовчуванням

**`imagick::COMPOSITE_UNDEFINED`** (int)
Невизначений оператор накладання

**`imagick::COMPOSITE_NO`** (int)
Не встановлений оператор накладання

**`imagick::COMPOSITE_ADD`** (int)
Результатом буде зображення + зображення

**`imagick::COMPOSITE_ATOP`** (int)
Результатом буде зображення такої ж форми з накладенням зображення
затемняючи його в місцях перекриття

**`imagick::COMPOSITE_BLEND`** (int)
Суміш зображення

**`imagick::COMPOSITE_BUMPMAP`** (int)
Так само, як COMPOSITE_MULTIPLY, за винятком того, що джерело
спочатку перетворюється на відтінки сірого.

**`imagick::COMPOSITE_CLEAR`** (int)
Робить цільове зображення прозорим

**`imagick::COMPOSITE_COLORBURN`** (int)
Затемняє кінцеве зображення з урахуванням вихідного зображення

**`imagick::COMPOSITE_COLORDODGE`** (int)
Підвищена яскравість кінцевого зображення з урахуванням вихідного зображення

**`imagick::COMPOSITE_COLORIZE`** (int)
Розмальовка цільового зображення за допомогою складеного зображення

**`imagick::COMPOSITE_COPYBLACK`** (int)
Копіює чорний колір з вихідного зображення до цільового

**`imagick::COMPOSITE_COPYBLUE`** (int)
Копіює синій колір з вихідного зображення до цільового

**`imagick::COMPOSITE_COPY`** (int)
Копіює вихідне зображення до цільового

**`imagick::COMPOSITE_COPYCYAN`** (int)
Копіює синьо-зелений колір з вихідного зображення до цільового

**`imagick::COMPOSITE_COPYGREEN`** (int)
Копіює зелений колір з вихідного зображення до цільового

**`imagick::COMPOSITE_COPYMAGENTA`** (int)
Копіює пурпурний колір з вихідного зображення до цільового

**`imagick::COMPOSITE_COPYOPACITY`** (int)
Копіює прозорість з вихідного зображення до цільового

**`imagick::COMPOSITE_COPYRED`** (int)
Копіює червоний колір з вихідного зображення до цільового

**`imagick::COMPOSITE_COPYYELLOW`** (int)
Копіює жовтий колір з вихідного зображення до цільового

**`imagick::COMPOSITE_DARKEN`** (int)
Затемнює цільове зображення

**`imagick::COMPOSITE_DSTATOP`** (int)
Область призначення, яка знаходиться всередині вихідного зображення
накладається поверх вихідного та замінює призначення

**`imagick::COMPOSITE_DST`** (int)
Цільове зображення залишається недоторканим

**`imagick::COMPOSITE_DSTIN`** (int)
Область усередині вихідного зображення замінюється заданим зображенням

**`imagick::COMPOSITE_DSTOUT`** (int)
Область зовні вихідного зображення замінюється на задане зображення

**`imagick::COMPOSITE_DSTOVER`** (int)
Вихідне зображення замінюється на задане

**`imagick::COMPOSITE_DIFFERENCE`** (int)
Віднімання темнішого кольору з двох складових

**`imagick::COMPOSITE_DISPLACE`** (int)
Зміщення пікселів заданого зображення за аналогією з вихідним
зображенням

**`imagick::COMPOSITE_DISSOLVE`** (int)
Розчинення вихідного зображення у заданому

**`imagick::COMPOSITE_EXCLUSION`** (int)
Створення ефекту, схожого на imagick::COMPOSITE_DIFFERENCE, але з більш
низьким контрастом

**`imagick::COMPOSITE_HARDLIGHT`** (int)
Помножує або освітлює колір залежно від вихідного значення кольору

**`imagick::COMPOSITE_HUE`** (int)
Зміна відтінку заданого зображення за аналогією з вихідним
зображенням

**`imagick::COMPOSITE_IN`** (int)
Накладення вихідного зображення на задане

**`imagick::COMPOSITE_LIGHTEN`** (int)
Висвітлює задане зображення за аналогією з вихідним зображенням

**`imagick::COMPOSITE_LUMINIZE`** (int)
Зміна яскравості заданого зображення за аналогією з вихідним
зображенням

**`imagick::COMPOSITE_MINUS`** (int)
Віднімає вихідне зображення із заданого

**`imagick::COMPOSITE_MODULATE`** (int)
Модулює цільові яскравість, насиченість і тон за аналогією з вихідним
зображенням

**`imagick::COMPOSITE_MULTIPLY`** (int)
Перемножує ціль та джерело

**`imagick::COMPOSITE_OUT`** (int)
Накладання зовнішніх частин джерела на ціль

**`imagick::COMPOSITE_OVER`** (int)
Накладення джерела на ціль

**`imagick::COMPOSITE_OVERLAY`** (int)
Перетворення "Overlay"

**`imagick::COMPOSITE_PLUS`** (int)
Додає джерело до мети

**`imagick::COMPOSITE_REPLACE`** (int)
Замінює ціль джерелом

**`imagick::COMPOSITE_SATURATE`** (int)
Змінює насиченість мети відповідно до джерела

**`imagick::COMPOSITE_SCREEN`** (int)
Джерело і ціль спочатку доповнюються, потім перемножуються, а потім
джерело замінює ціль.

**`imagick::COMPOSITE_SOFTLIGHT`** (int)
Затемняє або освітлює кольори, залежно від джерела

**`imagick::COMPOSITE_SRCATOP`** (int)
Частина джерела, що лежить усередині мети, накладається на ціль

**`imagick::COMPOSITE_SRC`** (int)
Джерело копіюється в ціль

**`imagick::COMPOSITE_SRCIN`** (int)
Частина джерела, що лежить усередині мети, замінює ціль

**`imagick::COMPOSITE_SRCOUT`** (int)
Частина джерела, що лежить поза метою, замінює ціль

**`imagick::COMPOSITE_SRCOVER`** (int)
Джерело замінює мету

**`imagick::COMPOSITE_SUBTRACT`** (int)
Віднімає кольори джерела з мети

**`imagick::COMPOSITE_THRESHOLD`** (int)
Джерело накладається на мету як визначено порогом джерела

**`imagick::COMPOSITE_XOR`** (int)
Частина джерела, що лежить поза метою, комбінується з частиною мети, що лежить
поза джерелом



**`imagick::MONTAGEMODE_FRAME`** (int)

**`imagick::MONTAGEMODE_UNFRAME`** (int)

**`imagick::MONTAGEMODE_CONCATENATE`** (int)



**`imagick::STYLE_NORMAL`** (int)

**`imagick::STYLE_ITALIC`** (int)

**`imagick::STYLE_OBLIQUE`** (int)

**`imagick::STYLE_ANY`** (int)



**`imagick::FILTER_UNDEFINED`** (int)

**`imagick::FILTER_POINT`** (int)

**`imagick::FILTER_BOX`** (int)

**`imagick::FILTER_TRIANGLE`** (int)

**`imagick::FILTER_HERMITE`** (int)

**`imagick::FILTER_HANNING`** (int)

**`imagick::FILTER_HAMMING`** (int)

**`imagick::FILTER_BLACKMAN`** (int)

**`imagick::FILTER_GAUSSIAN`** (int)

**`imagick::FILTER_QUADRATIC`** (int)

**`imagick::FILTER_CUBIC`** (int)

**`imagick::FILTER_CATROM`** (int)

**`imagick::FILTER_MITCHELL`** (int)

**`imagick::FILTER_LANCZOS`** (int)

**`imagick::FILTER_BESSEL`** (int)

**`imagick::FILTER_SINC`** (int)



**`imagick::IMGTYPE_UNDEFINED`** (int)

**`imagick::IMGTYPE_BILEVEL`** (int)

**`imagick::IMGTYPE_GRAYSCALE`** (int)

**`imagick::IMGTYPE_GRAYSCALEMATTE`** (int)

**`imagick::IMGTYPE_PALETTE`** (int)

**`imagick::IMGTYPE_PALETTEMATTE`** (int)

**`imagick::IMGTYPE_TRUECOLOR`** (int)

**`imagick::IMGTYPE_TRUECOLORMATTE`** (int)

**`imagick::IMGTYPE_COLORSEPARATION`** (int)

**`imagick::IMGTYPE_COLORSEPARATIONMATTE`** (int)

**`imagick::IMGTYPE_OPTIMIZE`** (int)



**`imagick::RESOLUTION_UNDEFINED`** (int)

**`imagick::RESOLUTION_PIXELSPERINCH`** (int)

**`imagick::RESOLUTION_PIXELSPERCENTIMETER`** (int)



**`imagick::COMPRESSION_UNDEFINED`** (int)

**`imagick::COMPRESSION_NO`** (int)

**`imagick::COMPRESSION_BZIP`** (int)

**`imagick::COMPRESSION_FAX`** (int)

**`imagick::COMPRESSION_GROUP4`** (int)

**`imagick::COMPRESSION_JPEG`** (int)

**`imagick::COMPRESSION_JPEG2000`** (int)

**`imagick::COMPRESSION_LOSSLESSJPEG`** (int)

**`imagick::COMPRESSION_LZW`** (int)

**`imagick::COMPRESSION_RLE`** (int)

**`imagick::COMPRESSION_ZIP`** (int)

**`imagick::COMPRESSION_DXT1`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.0 або вище.

**`imagick::COMPRESSION_DXT3`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.0 або вище.

**`imagick::COMPRESSION_DXT5`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.0 або вище.



**`imagick::PAINT_POINT`** (int)

**`imagick::PAINT_REPLACE`** (int)

**`imagick::PAINT_FLOODFILL`** (int)

**`imagick::PAINT_FILLTOBORDER`** (int)

**`imagick::PAINT_RESET`** (int)



**`imagick::GRAVITY_NORTHWEST`** (int)

**`imagick::GRAVITY_NORTH`** (int)

**`imagick::GRAVITY_NORTHEAST`** (int)

**`imagick::GRAVITY_WEST`** (int)

**`imagick::GRAVITY_CENTER`** (int)

**`imagick::GRAVITY_EAST`** (int)

**`imagick::GRAVITY_SOUTHWEST`** (int)

**`imagick::GRAVITY_SOUTH`** (int)

**`imagick::GRAVITY_SOUTHEAST`** (int)



**`imagick::STRETCH_NORMAL`** (int)

**`imagick::STRETCH_ULTRACONDENSED`** (int)

**`imagick::STRETCH_CONDENSED`** (int)

**`imagick::STRETCH_SEMICONDENSED`** (int)

**`imagick::STRETCH_SEMIEXPANDED`** (int)

**`imagick::STRETCH_EXPANDED`** (int)

**`imagick::STRETCH_EXTRAEXPANDED`** (int)

**`imagick::STRETCH_ULTRAEXPANDED`** (int)

**`imagick::STRETCH_ANY`** (int)



**`imagick::ALIGN_UNDEFINED`** (int)

**`imagick::ALIGN_LEFT`** (int)

**`imagick::ALIGN_CENTER`** (int)

**`imagick::ALIGN_RIGHT`** (int)



**`imagick::DECORATION_NO`** (int)

**`imagick::DECORATION_UNDERLINE`** (int)

**`imagick::DECORATION_OVERLINE`** (int)

**`imagick::DECORATION_LINETROUGH`** (int)



**`imagick::NOISE_UNIFORM`** (int)

**`imagick::NOISE_GAUSSIAN`** (int)

**`imagick::NOISE_MULTIPLICATIVEGAUSSIAN`** (int)

**`imagick::NOISE_IMPULSE`** (int)

**`imagick::NOISE_LAPLACIAN`** (int)

**`imagick::NOISE_POISSON`** (int)

**`imagick::NOISE_RANDOM`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.6 або вище.



**`imagick::CHANNEL_UNDEFINED`** (int)

**`imagick::CHANNEL_RED`** (int)

**`imagick::CHANNEL_GRAY`** (int)

**`imagick::CHANNEL_CYAN`** (int)

**`imagick::CHANNEL_GREEN`** (int)

**`imagick::CHANNEL_MAGENTA`** (int)

**`imagick::CHANNEL_BLUE`** (int)

**`imagick::CHANNEL_YELLOW`** (int)

**`imagick::CHANNEL_ALPHA`** (int)

**`imagick::CHANNEL_OPACITY`** (int)

**`imagick::CHANNEL_MATTE`** (int)

**`imagick::CHANNEL_BLACK`** (int)

**`imagick::CHANNEL_INDEX`** (int)

**`imagick::CHANNEL_ALL`** (int)

**`imagick::CHANNEL_DEFAULT`** (int)



**`imagick::METRIC_UNDEFINED`** (int)

**`imagick::METRIC_MEANABSOLUTEERROR`** (int)

**`imagick::METRIC_MEANSQUAREERROR`** (int)

**`imagick::METRIC_PEAKABSOLUTEERROR`** (int)

**`imagick::METRIC_PEAKSIGNALTONOISERATIO`** (int)

**`imagick::METRIC_ROOTMEANSQUAREDERROR`** (int)



**`imagick::PIXEL_CHAR`** (int)

**`imagick::PIXEL_DOUBLE`** (int)

**`imagick::PIXEL_FLOAT`** (int)

**`imagick::PIXEL_INTEGER`** (int)
Доступно лише для ImageMagick \<7.

**`imagick::PIXEL_LONG`** (int)

**`imagick::PIXEL_QUANTUM`** (int)

**`imagick::PIXEL_SHORT`** (int)



**`imagick::EVALUATE_UNDEFINED`** (int)

**`imagick::EVALUATE_ADD`** (int)

**`imagick::EVALUATE_AND`** (int)

**`imagick::EVALUATE_DIVIDE`** (int)

**`imagick::EVALUATE_LEFTSHIFT`** (int)

**`imagick::EVALUATE_MAX`** (int)

**`imagick::EVALUATE_MIN`** (int)

**`imagick::EVALUATE_MULTIPLY`** (int)

**`imagick::EVALUATE_OR`** (int)

**`imagick::EVALUATE_RIGHTSHIFT`** (int)

**`imagick::EVALUATE_SET`** (int)

**`imagick::EVALUATE_SUBTRACT`** (int)

**`imagick::EVALUATE_XOR`** (int)

**`imagick::EVALUATE_POW`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_LOG`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_THRESHOLD`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_THRESHOLDBLACK`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_THRESHOLDWHITE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_GAUSSIANNOISE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_IMPULSENOISE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_LAPLACIANNOISE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_MULTIPLICATIVENOISE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_POISSONNOISE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_UNIFORMNOISE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_COSINE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_SINE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.

**`imagick::EVALUATE_ADDMODULUS`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.4 або вище.



**`imagick::COLORSPACE_UNDEFINED`** (int)

**`imagick::COLORSPACE_RGB`** (int)

**`imagick::COLORSPACE_GRAY`** (int)

**`imagick::COLORSPACE_TRANSPARENT`** (int)

**`imagick::COLORSPACE_OHTA`** (int)

**`imagick::COLORSPACE_LAB`** (int)

**`imagick::COLORSPACE_XYZ`** (int)

**`imagick::COLORSPACE_YCBCR`** (int)

**`imagick::COLORSPACE_YCC`** (int)

**`imagick::COLORSPACE_YIQ`** (int)

**`imagick::COLORSPACE_YPBPR`** (int)

**`imagick::COLORSPACE_YUV`** (int)

**`imagick::COLORSPACE_CMYK`** (int)

**`imagick::COLORSPACE_SRGB`** (int)

**`imagick::COLORSPACE_HSB`** (int)

**`imagick::COLORSPACE_HSL`** (int)

**`imagick::COLORSPACE_HWB`** (int)

**`imagick::COLORSPACE_REC601LUMA`** (int)

**`imagick::COLORSPACE_REC709LUMA`** (int)

**`imagick::COLORSPACE_LOG`** (int)

**`imagick::COLORSPACE_CMY`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.2 або вище.



**`imagick::VIRTUALPIXELMETHOD_UNDEFINED`** (int)

**`imagick::VIRTUALPIXELMETHOD_BACKGROUND`** (int)

**`imagick::VIRTUALPIXELMETHOD_CONSTANT`** (int)

**`imagick::VIRTUALPIXELMETHOD_EDGE`** (int)

**`imagick::VIRTUALPIXELMETHOD_MIRROR`** (int)

**`imagick::VIRTUALPIXELMETHOD_TILE`** (int)

**`imagick::VIRTUALPIXELMETHOD_TRANSPARENT`** (int)

**`imagick::VIRTUALPIXELMETHOD_MASK`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.2 або вище.

**`imagick::VIRTUALPIXELMETHOD_BLACK`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.2 або вище.

**`imagick::VIRTUALPIXELMETHOD_GRAY`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.2 або вище.

**`imagick::VIRTUALPIXELMETHOD_WHITE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.2 або вище.

**`imagick::VIRTUALPIXELMETHOD_HORIZONTALTILE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.3 або вище.

**`imagick::VIRTUALPIXELMETHOD_VERTICALTILE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.3 або вище.



**`imagick::PREVIEW_UNDEFINED`** (int)

**`imagick::PREVIEW_ROTATE`** (int)

**`imagick::PREVIEW_SHEAR`** (int)

**`imagick::PREVIEW_ROLL`** (int)

**`imagick::PREVIEW_HUE`** (int)

**`imagick::PREVIEW_SATURATION`** (int)

**`imagick::PREVIEW_BRIGHTNESS`** (int)

**`imagick::PREVIEW_GAMMA`** (int)

**`imagick::PREVIEW_SPIFF`** (int)

**`imagick::PREVIEW_DULL`** (int)

**`imagick::PREVIEW_GRAYSCALE`** (int)

**`imagick::PREVIEW_QUANTIZE`** (int)

**`imagick::PREVIEW_DESPECKLE`** (int)

**`imagick::PREVIEW_REDUCENOISE`** (int)

**`imagick::PREVIEW_ADDNOISE`** (int)

**`imagick::PREVIEW_SHARPEN`** (int)

**`imagick::PREVIEW_BLUR`** (int)

**`imagick::PREVIEW_THRESHOLD`** (int)

**`imagick::PREVIEW_EDGEDETECT`** (int)

**`imagick::PREVIEW_SPREAD`** (int)

**`imagick::PREVIEW_SOLARIZE`** (int)

**`imagick::PREVIEW_SHADE`** (int)

**`imagick::PREVIEW_RAISE`** (int)

**`imagick::PREVIEW_SEGMENT`** (int)

**`imagick::PREVIEW_SWIRL`** (int)

**`imagick::PREVIEW_IMPLODE`** (int)

**`imagick::PREVIEW_WAVE`** (int)

**`imagick::PREVIEW_OILPAINT`** (int)

**`imagick::PREVIEW_CHARCOALDRAWING`** (int)

**`imagick::PREVIEW_JPEG`** (int)



**`imagick::RENDERINGINTENT_UNDEFINED`** (int)

**`imagick::RENDERINGINTENT_SATURATION`** (int)

**`imagick::RENDERINGINTENT_PERCEPTUAL`** (int)

**`imagick::RENDERINGINTENT_ABSOLUTE`** (int)

**`imagick::RENDERINGINTENT_RELATIVE`** (int)



**`imagick::INTERLACE_UNDEFINED`** (int)

**`imagick::INTERLACE_NO`** (int)

**`imagick::INTERLACE_LINE`** (int)

**`imagick::INTERLACE_PLANE`** (int)

**`imagick::INTERLACE_PARTITION`** (int)

**`imagick::INTERLACE_GIF`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.4 або вище.

**`imagick::INTERLACE_JPEG`** (int)

**`imagick::INTERLACE_PNG`** (int)



**`imagick::FILLRULE_UNDEFINED`** (int)

**`imagick::FILLRULE_EVENODD`** (int)

**`imagick::FILLRULE_NONZERO`** (int)



**`imagick::PATHUNITS_UNDEFINED`** (int)

**`imagick::PATHUNITS_USERSPACE`** (int)

**`imagick::PATHUNITS_USERSPACEONUSE`** (int)

**`imagick::PATHUNITS_OBJECTBOUNDINGBOX`** (int)



**`imagick::LINECAP_UNDEFINED`** (int)

**`imagick::LINECAP_BUTT`** (int)

**`imagick::LINECAP_ROUND`** (int)

**`imagick::LINECAP_SQUARE`** (int)



**`imagick::LINEJOIN_UNDEFINED`** (int)

**`imagick::LINEJOIN_MITER`** (int)

**`imagick::LINEJOIN_ROUND`** (int)

**`imagick::LINEJOIN_BEVEL`** (int)



**`imagick::RESOURCETYPE_UNDEFINED`** (int)

**`imagick::RESOURCETYPE_AREA`** (int)
Визначає максимальну ширину * висоту зображення, яке може
перебувати у піксеному кеші.

**`imagick::RESOURCETYPE_DISK`** (int)
Визначає максимальну кількість дискового простору в байтах,
дозволених для використання у піксельному кеші.

**`imagick::RESOURCETYPE_FILE`** (int)
Визначає максимальну кількість відкритих файлів піксельного кеша.

**`imagick::RESOURCETYPE_MAP`** (int)
Визначає максимальну кількість пам'яті в байтах під піксельний кеш.

**`imagick::RESOURCETYPE_MEMORY`** (int)
Визначає максимальну кількість пам'яті в байтах під піксельний кеш.
з купи.

**`imagick::RESOURCETYPE_THREAD`** (int)
Визначає максимальну кількість паралельних потоків. Ця константа
доступна, якщо Imagick був скомпільований з версією ImageMagick 6.7.8 або
вище.



**`imagick::LAYERMETHOD_UNDEFINED`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.2.9 або вище.

**`imagick::LAYERMETHOD_COALESCE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.2.9 або вище.

**`imagick::LAYERMETHOD_COMPAREANY`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.2.9 або вище.

**`imagick::LAYERMETHOD_COMPARECLEAR`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.2.9 або вище.

**`imagick::LAYERMETHOD_COMPAREOVERLAY`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.2.9 або вище.

**`imagick::LAYERMETHOD_DISPOSE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.2.9 або вище.

**`imagick::LAYERMETHOD_OPTIMIZE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.2.9 або вище.

**`imagick::LAYERMETHOD_OPTIMIZEPLUS`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.2.9 або вище.

**`imagick::LAYERMETHOD_OPTIMIZEIMAGE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::LAYERMETHOD_OPTIMIZETRANS`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::LAYERMETHOD_REMOVEDUPS`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::LAYERMETHOD_REMOVEZERO`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::LAYERMETHOD_COMPOSITE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::LAYERMETHOD_MERGE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.7 або вище.

**`imagick::LAYERMETHOD_FLATTEN`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.7 або вище.

**`imagick::LAYERMETHOD_MOSAIC`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.7 або вище.



**`imagick::ORIENTATION_UNDEFINED`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::ORIENTATION_TOPLEFT`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::ORIENTATION_TOPRIGHT`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::ORIENTATION_BOTTOMRIGHT`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::ORIENTATION_BOTTOMLEFT`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::ORIENTATION_LEFTTOP`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::ORIENTATION_RIGHTTOP`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::ORIENTATION_RIGHTBOTTOM`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.

**`imagick::ORIENTATION_LEFTBOTTOM`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.0 або вище.



**`imagick::DISTORTION_UNDEFINED`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.6 або вище.

**`imagick::DISTORTION_AFFINE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.6 або вище.

**`imagick::DISTORTION_AFFINEPROJECTION`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.6 або вище.

**`imagick::DISTORTION_ARC`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.6 або вище.

**`imagick::DISTORTION_BILINEAR`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.6 або вище.

**`imagick::DISTORTION_PERSPECTIVE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.6 або вище.

**`imagick::DISTORTION_PERSPECTIVEPROJECTION`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.6 або вище.

**`imagick::DISTORTION_SCALEROTATETRANSLATE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.6 або вище.

**`imagick::DISTORTION_POLYNOMIAL`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::DISTORTION_POLAR`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::DISTORTION_DEPOLAR`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::DISTORTION_BARREL`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::DISTORTION_BARRELINVERSE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::DISTORTION_SHEPARDS`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::DISTORTION_SENTINEL`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.



**`imagick::ALPHACHANNEL_ACTIVATE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.8 або вище.

**`imagick::ALPHACHANNEL_DEACTIVATE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.8 або вище.

**`imagick::ALPHACHANNEL_RESET`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.8 або вище.

**`imagick::ALPHACHANNEL_SET`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.8 або вище.

**`imagick::ALPHACHANNEL_UNDEFINED`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::ALPHACHANNEL_COPY`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::ALPHACHANNEL_EXTRACT`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::ALPHACHANNEL_OPAQUE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::ALPHACHANNEL_SHAPE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::ALPHACHANNEL_TRANSPARENT`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.



**`imagick::SPARSECOLORMETHOD_UNDEFINED`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::SPARSECOLORMETHOD_BARYCENTRIC`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::SPARSECOLORMETHOD_BILINEAR`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::SPARSECOLORMETHOD_POLYNOMIAL`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::SPARSECOLORMETHOD_SPEPARDS`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::SPARSECOLORMETHOD_VORONOI`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.



**`imagick::FUNCTION_UNDEFINED`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.9 або вище.

**`imagick::FUNCTION_POLYNOMIAL`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.9 або вище.

**`imagick::FUNCTION_SINUSOID`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.9 або вище.



**`imagick::INTERPOLATE_UNDEFINED`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.2 або вище.

**`imagick::INTERPOLATE_AVERAGE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.2 або вище.

**`imagick::INTERPOLATE_BICUBIC`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.2 або вище.

**`imagick::INTERPOLATE_BILINEAR`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.2 або вище.

**`imagick::INTERPOLATE_FILTER`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.2 або вище.

**`imagick::INTERPOLATE_INTEGER`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.2 або вище.

**`imagick::INTERPOLATE_MESH`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.2 або вище.

**`imagick::INTERPOLATE_NEARESTNEIGHBOR`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.2 або вище.

**`imagick::INTERPOLATE_SPLINE`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.3.4 або вище.



**`imagick::DITHERMETHOD_UNDEFINED`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::DITHERMETHOD_NO`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::DITHERMETHOD_RIEMERSMA`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.

**`imagick::DITHERMETHOD_FLOYDSTEINBERG`** (int)
Ця константа доступна, якщо Imagick був скомпільований з версією
ImageMagick 6.4.6 або вище.
