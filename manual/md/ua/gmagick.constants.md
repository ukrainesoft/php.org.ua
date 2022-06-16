- [« Налаштування під час виконання](gmagick.configuration.md)
- [Приклади »](gmagick.examples.md)

- [PHP Manual](index.md)
- [Gmagick](book.gmagick.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`Gmagick::COLOR_BLACK`** (int)
Чорний

**`Gmagick::COLOR_BLUE`** (int)
Синій

**`Gmagick::COLOR_CYAN`** (int)
Бірюзовий

**`Gmagick::COLOR_GREEN`** (int)
Зелений

**`Gmagick::COLOR_RED`** (int)
червоний

**`Gmagick::COLOR_YELLOW`** (int)
Жовтий

**`Gmagick::COLOR_MAGENTA`** (int)
Пурпурний

**`Gmagick::COLOR_OPACITY`** (int)
Непрозорість

**`Gmagick::COLOR_ALPHA`** (int)
Альфа-канал

**`Gmagick::COLOR_FUZZ`** (int)
Розпушка



**`Gmagick::COMPOSITE_DEFAULT`** (int)
Композитний оператор за замовчуванням

**`Gmagick::COMPOSITE_UNDEFINED`** (int)
Невизначений композитний оператор

**`Gmagick::COMPOSITE_NO`** (int)
Композитний оператор не заданий

**`Gmagick::COMPOSITE_ADD`** (int)
Результат складання зображень

**`Gmagick::COMPOSITE_ATOP`** (int)
Результат має ту саму форму, що й вихідне зображення, але затемнений
за допомогою композитного зображення у місцях перетину.

**`Gmagick::COMPOSITE_BLEND`** (int)
Змішування зображення

**`Gmagick::COMPOSITE_BUMPMAP`** (int)
Те саме, що і COMPOSITE_MULTIPLY, за винятком того, що вихідне
зображення спочатку перетворюється на відтінки сірого.

**`Gmagick::COMPOSITE_CLEAR`** (int)
Робить цільове зображення прозорим.

**`Gmagick::COMPOSITE_COLORBURN`** (int)
Затемняє цільове зображення для відображення вихідного зображення.

**`Gmagick::COMPOSITE_COLORDODGE`** (int)
Освітлює цільове зображення для відображення вихідного зображення.

**`Gmagick::COMPOSITE_COLORIZE`** (int)
Розмальовує цільове зображення за допомогою композитного зображення.

**`Gmagick::COMPOSITE_COPYBLACK`** (int)
Копіює чорний канал із джерела до приймача

**`Gmagick::COMPOSITE_COPYBLUE`** (int)
Копіює синій канал із джерела до приймача

**`Gmagick::COMPOSITE_COPY`** (int)
Копіює джерело до приймача

**`Gmagick::COMPOSITE_COPYCYAN`** (int)
Копіює бірюзовий канал із джерела до приймача

**`Gmagick::COMPOSITE_COPYGREEN`** (int)
Копіює зелений канал із джерела до приймача

**`Gmagick::COMPOSITE_COPYMAGENTA`** (int)
Копіює пурпурний канал із джерела до приймача

**`Gmagick::COMPOSITE_COPYOPACITY`** (int)
Копіює канал прозорості з джерела до приймача

**`Gmagick::COMPOSITE_COPYRED`** (int)
Копіює червоний канал із джерела до приймача

**`Gmagick::COMPOSITE_COPYYELLOW`** (int)
Копіює жовтий канал із джерела до приймача

**`Gmagick::COMPOSITE_DARKEN`** (int)
Затемнення приймача

**`Gmagick::COMPOSITE_DSTATOP`** (int)
Частина приймача, що лежить усередині джерела, накладається на джерело та
замінює приймач

**`Gmagick::COMPOSITE_DST`** (int)
Приймач залишається недоторканим

**`Gmagick::COMPOSITE_DSTIN`** (int)
Частину всередині джерела замінює приймач

**`Gmagick::COMPOSITE_DSTOUT`** (int)
Частину поза джерелом замінює приймач

**`Gmagick::COMPOSITE_DSTOVER`** (int)
Приймач замінює джерело

**`Gmagick::COMPOSITE_DIFFERENCE`** (int)
Віднімає темніше значення кольору з світлішого

**`Gmagick::COMPOSITE_DISPLACE`** (int)
Зсуває пікселі приймача як задано у джерелі

**`Gmagick::COMPOSITE_DISSOLVE`** (int)
Розчиняє джерело в приймачі

**`Gmagick::COMPOSITE_EXCLUSION`** (int)
Створює ефект аналогічний Gmagick:: COMPOSITE_DIFFERENCE, але виглядає
як зниження контрасту

**`Gmagick::COMPOSITE_HARDLIGHT`** (int)
Помножує або освітлює кольори, залежно від значення кольору джерела

**`Gmagick::COMPOSITE_HUE`** (int)
Модифікує відтінок приймача відповідно до джерела

**`Gmagick::COMPOSITE_IN`** (int)
Підмішує джерело до приймача

**`Gmagick::COMPOSITE_LIGHTEN`** (int)
Освітлює приймач відповідно до джерела

**`Gmagick::COMPOSITE_LUMINIZE`** (int)
Люмінізує приймач відповідно до джерела

**`Gmagick::COMPOSITE_MINUS`** (int)
Віднімає джерело з приймача

**`Gmagick::COMPOSITE_MODULATE`** (int)
Модулює яскравість, насиченість та відтінок приймача відповідно до
джерелом

**`Gmagick::COMPOSITE_MULTIPLY`** (int)
Помножує приймач на джерело

**`Gmagick::COMPOSITE_OUT`** (int)
Накладає зовнішні частини джерела на приймач

**`Gmagick::COMPOSITE_OVER`** (int)
Підмішує джерело поверх приймача

**`Gmagick::COMPOSITE_OVERLAY`** (int)
Перекриває приймач джерелом

**`Gmagick::COMPOSITE_PLUS`** (int)
Додає джерело до приймача

**`Gmagick::COMPOSITE_REPLACE`** (int)
Замінює приймач джерелом

**`Gmagick::COMPOSITE_SATURATE`** (int)
Змінює насиченість приймача відповідно до джерела

**`Gmagick::COMPOSITE_SCREEN`** (int)
Джерело та приймач доповнюються, після цього множаться та замінюють
приймач

**`Gmagick::COMPOSITE_SOFTLIGHT`** (int)
Затемняє або освітлює залежно від джерела

**`Gmagick::COMPOSITE_SRCATOP`** (int)
Частина джерела, що лежить поза приймачем, підмішується до приймача

**`Gmagick::COMPOSITE_SRC`** (int)
Джерело копіюється до приймача

**`Gmagick::COMPOSITE_SRCIN`** (int)
Частина джерела, що лежить усередині приймача, замінює приймач.

**`Gmagick::COMPOSITE_SRCOUT`** (int)
Частина джерела, що лежить поза приймачем, замінює приймач.

**`Gmagick::COMPOSITE_SRCOVER`** (int)
Джерело замінює приймач

**`Gmagick::COMPOSITE_SUBTRACT`** (int)
Віднімає кольори зображення джерела із зображення приймача

**`Gmagick::COMPOSITE_THRESHOLD`** (int)
Джерело підмішується до приймача, як визначено у пороговому значенні
джерела

**`Gmagick::COMPOSITE_XOR`** (int)
Частина джерела, що лежить поза приймачем, комбінується з частиною приймача.
що лежить поза джерелом



**`Gmagick::MONTAGEMODE_FRAME`** (int)

**`Gmagick::MONTAGEMODE_UNFRAME`** (int)

**`Gmagick::MONTAGEMODE_CONCATENATE`** (int)



**`Gmagick::STYLE_NORMAL`** (int)

**`Gmagick::STYLE_ITALIC`** (int)

**`Gmagick::STYLE_OBLIQUE`** (int)

**`Gmagick::STYLE_ANY`** (int)



**`Gmagick::FILTER_UNDEFINED`** (int)

**`Gmagick::FILTER_POINT`** (int)

**`Gmagick::FILTER_BOX`** (int)

**`Gmagick::FILTER_TRIANGLE`** (int)

**`Gmagick::FILTER_HERMITE`** (int)

**`Gmagick::FILTER_HANNING`** (int)

**`Gmagick::FILTER_HAMMING`** (int)

**`Gmagick::FILTER_BLACKMAN`** (int)

**`Gmagick::FILTER_GAUSSIAN`** (int)

**`Gmagick::FILTER_QUADRATIC`** (int)

**`Gmagick::FILTER_CUBIC`** (int)

**`Gmagick::FILTER_CATROM`** (int)

**`Gmagick::FILTER_MITCHELL`** (int)

**`Gmagick::FILTER_LANCZOS`** (int)

**`Gmagick::FILTER_BESSEL`** (int)

**`Gmagick::FILTER_SINC`** (int)



**`Gmagick::IMGTYPE_UNDEFINED`** (int)

**`Gmagick::IMGTYPE_BILEVEL`** (int)

**`Gmagick::IMGTYPE_GRAYSCALE`** (int)

**`Gmagick::IMGTYPE_GRAYSCALEMATTE`** (int)

**`Gmagick::IMGTYPE_PALETTE`** (int)

**`Gmagick::IMGTYPE_PALETTEMATTE`** (int)

**`Gmagick::IMGTYPE_TRUECOLOR`** (int)

**`Gmagick::IMGTYPE_TRUECOLORMATTE`** (int)

**`Gmagick::IMGTYPE_COLORSEPARATION`** (int)

**`Gmagick::IMGTYPE_COLORSEPARATIONMATTE`** (int)

**`Gmagick::IMGTYPE_OPTIMIZE`** (int)



**`Gmagick::RESOLUTION_UNDEFINED`** (int)

**`Gmagick::RESOLUTION_PIXELSPERINCH`** (int)

**`Gmagick::RESOLUTION_PIXELSPERCENTIMETER`** (int)



**`Gmagick::COMPRESSION_UNDEFINED`** (int)

**`Gmagick::COMPRESSION_NO`** (int)

**`Gmagick::COMPRESSION_BZIP`** (int)

**`Gmagick::COMPRESSION_FAX`** (int)

**`Gmagick::COMPRESSION_GROUP4`** (int)

**`Gmagick::COMPRESSION_JPEG`** (int)

**`Gmagick::COMPRESSION_JPEG2000`** (int)

**`Gmagick::COMPRESSION_LOSSLESSJPEG`** (int)

**`Gmagick::COMPRESSION_LZW`** (int)

**`Gmagick::COMPRESSION_RLE`** (int)

**`Gmagick::COMPRESSION_ZIP`** (int)



**`Gmagick::PAINT_POINT`** (int)

**`Gmagick::PAINT_REPLACE`** (int)

**`Gmagick::PAINT_FLOODFILL`** (int)

**`Gmagick::PAINT_FILLTOBORDER`** (int)

**`Gmagick::PAINT_RESET`** (int)



**`Gmagick::GRAVITY_NORTHWEST`** (int)

**`Gmagick::GRAVITY_NORTH`** (int)

**`Gmagick::GRAVITY_NORTHEAST`** (int)

**`Gmagick::GRAVITY_WEST`** (int)

**`Gmagick::GRAVITY_CENTER`** (int)

**`Gmagick::GRAVITY_EAST`** (int)

**`Gmagick::GRAVITY_SOUTHWEST`** (int)

**`Gmagick::GRAVITY_SOUTH`** (int)

**`Gmagick::GRAVITY_SOUTHEAST`** (int)



**`Gmagick::STRETCH_NORMAL`** (int)

**`Gmagick::STRETCH_ULTRACONDENSED`** (int)

**`Gmagick::STRETCH_CONDENSED`** (int)

**`Gmagick::STRETCH_SEMICONDENSED`** (int)

**`Gmagick::STRETCH_SEMIEXPANDED`** (int)

**`Gmagick::STRETCH_EXPANDED`** (int)

**`Gmagick::STRETCH_EXTRAEXPANDED`** (int)

**`Gmagick::STRETCH_ULTRAEXPANDED`** (int)

**`Gmagick::STRETCH_ANY`** (int)



**`Gmagick::ALIGN_UNDEFINED`** (int)

**`Gmagick::ALIGN_LEFT`** (int)

**`Gmagick::ALIGN_CENTER`** (int)

**`Gmagick::ALIGN_RIGHT`** (int)



**`Gmagick::DECORATION_NO`** (int)

**`Gmagick::DECORATION_UNDERLINE`** (int)

**`Gmagick::DECORATION_OVERLINE`** (int)

**`Gmagick::DECORATION_LINETROUGH`** (int)



**`Gmagick::NOISE_UNIFORM`** (int)

**`Gmagick::NOISE_GAUSSIAN`** (int)

**`Gmagick::NOISE_MULTIPLICATIVEGAUSSIAN`** (int)

**`Gmagick::NOISE_IMPULSE`** (int)

**`Gmagick::NOISE_LAPLACIAN`** (int)

**`Gmagick::NOISE_POISSON`** (int)



**`Gmagick::CHANNEL_UNDEFINED`** (int)

**`Gmagick::CHANNEL_RED`** (int)

**`Gmagick::CHANNEL_GRAY`** (int)

**`Gmagick::CHANNEL_CYAN`** (int)

**`Gmagick::CHANNEL_GREEN`** (int)

**`Gmagick::CHANNEL_MAGENTA`** (int)

**`Gmagick::CHANNEL_BLUE`** (int)

**`Gmagick::CHANNEL_YELLOW`** (int)

**`Gmagick::CHANNEL_ALPHA`** (int)

**`Gmagick::CHANNEL_OPACITY`** (int)

**`Gmagick::CHANNEL_MATTE`** (int)

**`Gmagick::CHANNEL_BLACK`** (int)

**`Gmagick::CHANNEL_INDEX`** (int)

**`Gmagick::CHANNEL_ALL`** (int)



**`Gmagick::METRIC_UNDEFINED`** (int)

**`Gmagick::METRIC_MEANABSOLUTEERROR`** (int)

**`Gmagick::METRIC_MEANSQUAREERROR`** (int)

**`Gmagick::METRIC_PEAKABSOLUTEERROR`** (int)

**`Gmagick::METRIC_PEAKSIGNALTONOISERATIO`** (int)

**`Gmagick::METRIC_ROOTMEANSQUAREDERROR`** (int)



**`Gmagick::PIXEL_CHAR`** (int)

**`Gmagick::PIXEL_DOUBLE`** (int)

**`Gmagick::PIXEL_FLOAT`** (int)

**`Gmagick::PIXEL_INTEGER`** (int)

**`Gmagick::PIXEL_LONG`** (int)

**`Gmagick::PIXEL_QUANTUM`** (int)

**`Gmagick::PIXEL_SHORT`** (int)



**`Gmagick::COLORSPACE_UNDEFINED`** (int)

**`Gmagick::COLORSPACE_RGB`** (int)

**`Gmagick::COLORSPACE_GRAY`** (int)

**`Gmagick::COLORSPACE_TRANSPARENT`** (int)

**`Gmagick::COLORSPACE_OHTA`** (int)

**`Gmagick::COLORSPACE_LAB`** (int)

**`Gmagick::COLORSPACE_XYZ`** (int)

**`Gmagick::COLORSPACE_YCBCR`** (int)

**`Gmagick::COLORSPACE_YCC`** (int)

**`Gmagick::COLORSPACE_YIQ`** (int)

**`Gmagick::COLORSPACE_YPBPR`** (int)

**`Gmagick::COLORSPACE_YUV`** (int)

**`Gmagick::COLORSPACE_CMYK`** (int)

**`Gmagick::COLORSPACE_SRGB`** (int)

**`Gmagick::COLORSPACE_HSB`** (int)

**`Gmagick::COLORSPACE_HSL`** (int)

**`Gmagick::COLORSPACE_HWB`** (int)

**`Gmagick::COLORSPACE_REC601LUMA`** (int)

**`Gmagick::COLORSPACE_REC709LUMA`** (int)

**`Gmagick::COLORSPACE_LOG`** (int)



**`Gmagick::VIRTUALPIXELMETHOD_UNDEFINED`** (int)

**`Gmagick::VIRTUALPIXELMETHOD_BACKGROUND`** (int)

**`Gmagick::VIRTUALPIXELMETHOD_CONSTANT`** (int)

**`Gmagick::VIRTUALPIXELMETHOD_EDGE`** (int)

**`Gmagick::VIRTUALPIXELMETHOD_MIRROR`** (int)

**`Gmagick::VIRTUALPIXELMETHOD_TILE`** (int)

**`Gmagick::VIRTUALPIXELMETHOD_TRANSPARENT`** (int)



**`Gmagick::PREVIEW_UNDEFINED`** (int)

**`Gmagick::PREVIEW_ROTATE`** (int)

**`Gmagick::PREVIEW_SHEAR`** (int)

**`Gmagick::PREVIEW_ROLL`** (int)

**`Gmagick::PREVIEW_HUE`** (int)

**`Gmagick::PREVIEW_SATURATION`** (int)

**`Gmagick::PREVIEW_BRIGHTNESS`** (int)

**`Gmagick::PREVIEW_GAMMA`** (int)

**`Gmagick::PREVIEW_SPIFF`** (int)

**`Gmagick::PREVIEW_DULL`** (int)

**`Gmagick::PREVIEW_GRAYSCALE`** (int)

**`Gmagick::PREVIEW_QUANTIZE`** (int)

**`Gmagick::PREVIEW_DESPECKLE`** (int)

**`Gmagick::PREVIEW_REDUCENOISE`** (int)

**`Gmagick::PREVIEW_ADDNOISE`** (int)

**`Gmagick::PREVIEW_SHARPEN`** (int)

**`Gmagick::PREVIEW_BLUR`** (int)

**`Gmagick::PREVIEW_THRESHOLD`** (int)

**`Gmagick::PREVIEW_EDGEDETECT`** (int)

**`Gmagick::PREVIEW_SPREAD`** (int)

**`Gmagick::PREVIEW_SOLARIZE`** (int)

**`Gmagick::PREVIEW_SHADE`** (int)

**`Gmagick::PREVIEW_RAISE`** (int)

**`Gmagick::PREVIEW_SEGMENT`** (int)

**`Gmagick::PREVIEW_SWIRL`** (int)

**`Gmagick::PREVIEW_IMPLODE`** (int)

**`Gmagick::PREVIEW_WAVE`** (int)

**`Gmagick::PREVIEW_OILPAINT`** (int)

**`Gmagick::PREVIEW_CHARCOALDRAWING`** (int)

**`Gmagick::PREVIEW_JPEG`** (int)



**`Gmagick::RENDERINGINTENT_UNDEFINED`** (int)

**`Gmagick::RENDERINGINTENT_SATURATION`** (int)

**`Gmagick::RENDERINGINTENT_PERCEPTUAL`** (int)

**`Gmagick::RENDERINGINTENT_ABSOLUTE`** (int)

**`Gmagick::RENDERINGINTENT_RELATIVE`** (int)



**`Gmagick::FILLRULE_UNDEFINED`** (int)

**`Gmagick::FILLRULE_EVENODD`** (int)

**`Gmagick::FILLRULE_NONZERO`** (int)



**`Gmagick::PATHUNITS_UNDEFINED`** (int)

**`Gmagick::PATHUNITS_USERSPACE`** (int)

**`Gmagick::PATHUNITS_USERSPACEONUSE`** (int)

**`Gmagick::PATHUNITS_OBJECTBOUNDINGBOX`** (int)



**`Gmagick::LINECAP_UNDEFINED`** (int)

**`Gmagick::LINECAP_BUTT`** (int)

**`Gmagick::LINECAP_ROUND`** (int)

**`Gmagick::LINECAP_SQUARE`** (int)



**`Gmagick::LINEJOIN_UNDEFINED`** (int)

**`Gmagick::LINEJOIN_MITER`** (int)

**`Gmagick::LINEJOIN_ROUND`** (int)

**`Gmagick::LINEJOIN_BEVEL`** (int)



**`Gmagick::RESOURCETYPE_UNDEFINED`** (int)

**`Gmagick::RESOURCETYPE_AREA`** (int)

**`Gmagick::RESOURCETYPE_DISK`** (int)

**`Gmagick::RESOURCETYPE_FILE`** (int)

**`Gmagick::RESOURCETYPE_MAP`** (int)

**`Gmagick::RESOURCETYPE_MEMORY`** (int)



**`Gmagick::ORIENTATION_UNDEFINED`** (int)

**`Gmagick::ORIENTATION_TOPLEFT`** (int)

**`Gmagick::ORIENTATION_TOPRIGHT`** (int)

**`Gmagick::ORIENTATION_BOTTOMRIGHT`** (int)

**`Gmagick::ORIENTATION_BOTTOMLEFT`** (int)

**`Gmagick::ORIENTATION_LEFTTOP`** (int)

**`Gmagick::ORIENTATION_RIGHTTOP`** (int)

**`Gmagick::ORIENTATION_RIGHTBOTTOM`** (int)

**`Gmagick::ORIENTATION_LEFTBOTTOM`** (int)



**`Gmagick::INTERLACE_UNDEFINED`** (int)

**`Gmagick::INTERLACE_NO`** (int)

**`Gmagick::INTERLACE_NONE`** (int)

**`Gmagick::INTERLACE_LINE`** (int)

**`Gmagick::INTERLACE_PLANE`** (int)

**`Gmagick::INTERLACE_PARTITION`** (int)
