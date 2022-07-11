- [« Приклади](gmagick.examples.md)
- [Gmagick::addimage »](gmagick.addimage.md)

- [PHP Manual](index.md)
- [Gmagick](book.gmagick.md)
- Клас Gmagick

# Клас Gmagick

(PECL gmagick \>u003d Unknown)

## Вступ

## Огляд класів

class **Gmagick** {

/\* Методи \*/

public [\_\_construct](gmagick.construct.md)(string `$filename` u003d ?)

public [addimage](gmagick.addimage.md)([Gmagick](class.gmagick.md)
`$source`): [Gmagick](class.gmagick.md)

public [addnoiseimage](gmagick.addnoiseimage.md)(int `$noise_type`):
[Gmagick](class.gmagick.md)

public [annotateimage](gmagick.annotateimage.md)(
[GmagickDraw](class.gmagickdraw.md) `$GmagickDraw`,
float `$x`,
float `$y`,
float `$angle`,
string `$text`
): [Gmagick](class.gmagick.md)

public [blurimage](gmagick.blurimage.md)(float `$radius`, float
`$sigma`, int `$channel` u003d ?): [Gmagick](class.gmagick.md)

public
[borderimage](gmagick.borderimage.md)([GmagickPixel](class.gmagickpixel.md)
`$color`, int `$width`, int `$height`): [Gmagick](class.gmagick.md)

public [charcoalimage](gmagick.charcoalimage.md)(float `$radius`,
float `$sigma`): [Gmagick](class.gmagick.md)

public [chopimage](gmagick.chopimage.md)(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): [Gmagick](class.gmagick.md)

public [clear](gmagick.clear.md)(): [Gmagick](class.gmagick.md)

public [commentimage](gmagick.commentimage.md)(string `$comment`):
[Gmagick](class.gmagick.md)

public [compositeimage](gmagick.compositeimage.md)(
[Gmagick](class.gmagick.md) `$source`,
int `$COMPOSE`,
int `$x`,
int `$y`
): [Gmagick](class.gmagick.md)

public [cropimage](gmagick.cropimage.md)(
int `$width`,
int `$height` ,
int `$x`,
int `$y`
): [Gmagick](class.gmagick.md)

public [cropthumbnailimage](gmagick.cropthumbnailimage.md)(int
`$width`, int `$height`): [Gmagick](class.gmagick.md)

public [current](gmagick.current.md)(): [Gmagick](class.gmagick.md)

public [cyclecolormapimage](gmagick.cyclecolormapimage.md)(int
`$displace`): [Gmagick](class.gmagick.md)

public [deconstructimages](gmagick.deconstructimages.md)():
[Gmagick](class.gmagick.md)

public [despeckleimage](gmagick.despeckleimage.md)():
[Gmagick](class.gmagick.md)

public [destroy](gmagick.destroy.md)(): bool

public
[drawimage](gmagick.drawimage.md)([GmagickDraw](class.gmagickdraw.md)
`$GmagickDraw`): [Gmagick](class.gmagick.md)

public [edgeimage](gmagick.edgeimage.md)(float `$radius`):
[Gmagick](class.gmagick.md)

public [embossimage](gmagick.embossimage.md)(float `$radius`, float
`$sigma`): [Gmagick](class.gmagick.md)

public [enhanceimage](gmagick.enhanceimage.md)():
[Gmagick](class.gmagick.md)

public [equalizeimage](gmagick.equalizeimage.md)():
[Gmagick](class.gmagick.md)

public [flipimage](gmagick.flipimage.md)():
[Gmagick](class.gmagick.md)

public [flopimage](gmagick.flopimage.md)():
[Gmagick](class.gmagick.md)

public [frameimage](gmagick.frameimage.md)(
[GmagickPixel](class.gmagickpixel.md) `$color`,
int `$width`,
int `$height`,
int `$inner_bevel`,
int `$outer_bevel`
): [Gmagick](class.gmagick.md)

public [gammaimage](gmagick.gammaimage.md)(float `$gamma`):
[Gmagick](class.gmagick.md)

public [getcopyright](gmagick.getcopyright.md)(): string

public [getfilename](gmagick.getfilename.md)(): string

public
[getimagebackgroundcolor](gmagick.getimagebackgroundcolor.md)():
[GmagickPixel](class.gmagickpixel.md)

public [getimageblueprimary](gmagick.getimageblueprimary.md)(): array

public [getimagebordercolor](gmagick.getimagebordercolor.md)():
[GmagickPixel](class.gmagickpixel.md)

public [getimagechanneldepth](gmagick.getimagechanneldepth.md)(int
`$channel_type`): int

public [getimagecolors](gmagick.getimagecolors.md)(): int

public [getimagecolorspace](gmagick.getimagecolorspace.md)(): int

public [getimagecompose](gmagick.getimagecompose.md)(): int

public [getimagedelay](gmagick.getimagedelay.md)(): int

public [getimagedepth](gmagick.getimagedepth.md)(): int

public [getimagedispose](gmagick.getimagedispose.md)(): int

public [getimageextrema](gmagick.getimageextrema.md)(): array

public [getimagefilename](gmagick.getimagefilename.md)(): string

public [getimageformat](gmagick.getimageformat.md)(): string

public [getimagegamma](gmagick.getimagegamma.md)(): float

public [getimagegreenprimary](gmagick.getimagegreenprimary.md)():
array

public [getimageheight](gmagick.getimageheight.md)(): int

public [getimagehistogram](gmagick.getimagehistogram.md)(): array

public [getimageindex](gmagick.getimageindex.md)(): int

public
[getimageinterlacescheme](gmagick.getimageinterlacescheme.md)(): int

public [getimageiterations](gmagick.getimageiterations.md)(): int

public [getimagematte](gmagick.getimagematte.md)(): int

public [getimagemattecolor](gmagick.getimagemattecolor.md)():
[GmagickPixel](class.gmagickpixel.md)

public [getimageprofile](gmagick.getimageprofile.md)(string `$name`):
string

public [getimageredprimary](gmagick.getimageredprimary.md)(): array

public
[getimagerenderingintent](gmagick.getimagerenderingintent.md)(): int

public [getimageresolution](gmagick.getimageresolution.md)(): array

public [getimagescene](gmagick.getimagescene.md)(): int

public [getimagesignature](gmagick.getimagesignature.md)(): string

public [getimagetype](gmagick.getimagetype.md)(): int

public [getimageunits](gmagick.getimageunits.md)(): int

public [getimagewhitepoint](gmagick.getimagewhitepoint.md)(): array

public [getimagewidth](gmagick.getimagewidth.md)(): int

public [getpackagename](gmagick.getpackagename.md)(): string

public [getquantumdepth](gmagick.getquantumdepth.md)(): array

public [getreleasedate](gmagick.getreleasedate.md)(): string

public [getsamplingfactors](gmagick.getsamplingfactors.md)(): array

public [getsize](gmagick.getsize.md)(): array

public [getversion](gmagick.getversion.md)(): array

public [hasnextimage](gmagick.hasnextimage.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [haspreviousimage](gmagick.haspreviousimage.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [implodeimage](gmagick.implodeimage.md)(float `$radius`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [labelimage](gmagick.labelimage.md)(string `$label`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [levelimage](gmagick.levelimage.md)(
float `$blackPoint`,
float `$gamma`,
float `$whitePoint`,
int `$channel` u003d Gmagick::CHANNEL_DEFAULT
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [magnifyimage](gmagick.magnifyimage.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [mapimage](gmagick.mapimage.md)([gmagick](class.gmagick.md)
`$gmagick`, bool `$dither`): [Gmagick](class.gmagick.md)

public [medianfilterimage](gmagick.medianfilterimage.md)(float
`$radius`): void

public [minifyimage](gmagick.minifyimage.md)():
[Gmagick](class.gmagick.md)

public [modulateimage](gmagick.modulateimage.md)(float `$brightness`,
float `$saturation`, float `$hue`): [Gmagick](class.gmagick.md)

public [motionblurimage](gmagick.motionblurimage.md)(float `$radius`,
float `$sigma`, float `$angle`): [Gmagick](class.gmagick.md)

public [newimage](gmagick.newimage.md)(
int `$width`,
int `$height`,
string `$background`,
string `$format` u003d ?
): [Gmagick](class.gmagick.md)

public [nextimage](gmagick.nextimage.md)(): bool

public [normalizeimage](gmagick.normalizeimage.md)(int `$channel` u003d
?): [Gmagick](class.gmagick.md)

public [oilpaintimage](gmagick.oilpaintimage.md)( float `$radius` ):
[Gmagick](class.gmagick.md)

public [previousimage](gmagick.previousimage.md)(): bool

public [profileimage](gmagick.profileimage.md)(string `$name`, string
`$profile`): [Gmagick](class.gmagick.md)

public [quantizeimage](gmagick.quantizeimage.md)(
int `$numColors`,
int `$colorspace`,
int `$treeDepth`,
bool `$dither`,
bool `$ measureError`
): [Gmagick](class.gmagick.md)

public [quantizeimages](gmagick.quantizeimages.md)(
int `$numColors`,
int `$colorspace`,
int `$treeDepth`,
bool `$dither`,
bool `$ measureError`
): [Gmagick](class.gmagick.md)

public
[queryfontmetrics](gmagick.queryfontmetrics.md)([GmagickDraw](class.gmagickdraw.md)
`$draw`, string `$text`): array

public [queryfonts](gmagick.queryfonts.md)(string `$pattern` u003d "\*"):
array

public [queryformats](gmagick.queryformats.md)(string `$pattern` u003d
"\*"): array

public [radialblurimage](gmagick.radialblurimage.md)(float `$angle`,
int `$channel` u003d Gmagick::CHANNEL_DEFAULT):
[Gmagick](class.gmagick.md)

public [raiseimage](gmagick.raiseimage.md)(
int `$width`,
int `$height`,
int `$x`,
int `$y`,
bool `$raise`
): [Gmagick](class.gmagick.md)

public [read](gmagick.read.md)(string `$filename`):
[Gmagick](class.gmagick.md)

public [readimage](gmagick.readimage.md)(string `$filename`):
[Gmagick](class.gmagick.md)

public [readimageblob](gmagick.readimageblob.md)(string
`$imageContents`, string `$filename` u003d ?): [Gmagick](class.gmagick.md)

public [readimagefile](gmagick.readimagefile.md)(resource `$fp`,
string `$filename` u003d ?): [Gmagick](class.gmagick.md)

public [reducenoiseimage](gmagick.reducenoiseimage.md)(float
`$radius`): [Gmagick](class.gmagick.md)

public [removeimage](gmagick.removeimage.md)():
[Gmagick](class.gmagick.md)

public [removeimageprofile](gmagick.removeimageprofile.md)(string
`$name`): string

public [resampleimage](gmagick.resampleimage.md)(
float `$xResolution`,
float `$yResolution`,
int `$filter`,
float `$blur`
): [Gmagick](class.gmagick.md)

public [resizeimage](gmagick.resizeimage.md)(
int `$width`,
int `$height`,
int `$filter`,
float `$blur`,
bool `$fit` u003d **`false`**
): [Gmagick](class.gmagick.md)

public [rollimage](gmagick.rollimage.md)(int `$x`, int `$y`):
[Gmagick](class.gmagick.md)

public
[rotateimage](gmagick.rotateimage.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$color`, float `$degrees`): [Gmagick](class.gmagick.md)

public [scaleimage](gmagick.scaleimage.md)(int `$width`, int
`$height`, bool `$fit` u003d **`false`**): [Gmagick](class.gmagick.md)

public [separateimagechannel](gmagick.separateimagechannel.md)(int
`$channel`): [Gmagick](class.gmagick.md)

[setCompressionQuality](gmagick.setcompressionquality.md)( int
`$quality` u003d 75): [Gmagick](class.gmagick.md)

public [setfilename](gmagick.setfilename.md)(string `$filename`):
[Gmagick](class.gmagick.md)

public
[setimagebackgroundcolor](gmagick.setimagebackgroundcolor.md)([GmagickPixel](class.gmagickpixel.md)
`$color`): [Gmagick](class.gmagick.md)

public [setimageblueprimary](gmagick.setimageblueprimary.md)(float
`$x`, float `$y`): [Gmagick](class.gmagick.md)

public
[setimagebordercolor](gmagick.setimagebordercolor.md)([GmagickPixel](class.gmagickpixel.md)
`$color`): [Gmagick](class.gmagick.md)

public [setimagechanneldepth](gmagick.setimagechanneldepth.md)(int
`$channel`, int `$depth`): [Gmagick](class.gmagick.md)

public [setimagecolorspace](gmagick.setimagecolorspace.md)(int
`$colorspace`): [Gmagick](class.gmagick.md)

public [setimagecompose](gmagick.setimagecompose.md)(int
`$composite`): [Gmagick](class.gmagick.md)

public [setimagedelay](gmagick.setimagedelay.md)(int `$delay`):
[Gmagick](class.gmagick.md)

public [setimagedepth](gmagick.setimagedepth.md)(int `$depth`):
[Gmagick](class.gmagick.md)

public [setimagedispose](gmagick.setimagedispose.md)(int
`$disposeType`): [Gmagick](class.gmagick.md)

public [setimagefilename](gmagick.setimagefilename.md)(string
`$filename`): [Gmagick](class.gmagick.md)

public [setimageformat](gmagick.setimageformat.md)(string
`$imageFormat`): [Gmagick](class.gmagick.md)

public [setimagegamma](gmagick.setimagegamma.md)(float `$gamma`):
[Gmagick](class.gmagick.md)

public [setimagegreenprimary](gmagick.setimagegreenprimary.md)(float
`$x`, float `$y`): [Gmagick](class.gmagick.md)

public [setimageindex](gmagick.setimageindex.md)(int `$index`):
[Gmagick](class.gmagick.md)

public
[setimageinterlacescheme](gmagick.setimageinterlacescheme.md)(int
`$interlace`): [Gmagick](class.gmagick.md)

public [setimageiterations](gmagick.setimageiterations.md)(int
`$iterations`): [Gmagick](class.gmagick.md)

public [setimageprofile](gmagick.setimageprofile.md)(string `$name`,
string `$profile`): [Gmagick](class.gmagick.md)

public [setimageredprimary](gmagick.setimageredprimary.md)(float `$x`,
float `$y`): [Gmagick](class.gmagick.md)

public
[setimagerenderingintent](gmagick.setimagerenderingintent.md)(int
`$rendering_intent`): [Gmagick](class.gmagick.md)

public [setimageresolution](gmagick.setimageresolution.md)(float
`$xResolution`, float `$yResolution`): [Gmagick](class.gmagick.md)

public [setimagescene](gmagick.setimagescene.md)(int `$scene`):
[Gmagick](class.gmagick.md)

public [setimagetype](gmagick.setimagetype.md)(int `$imgType`):
[Gmagick](class.gmagick.md)

public [setimageunits](gmagick.setimageunits.md)(int `$resolution`):
[Gmagick](class.gmagick.md)

public [setimagewhitepoint](gmagick.setimagewhitepoint.md)(float `$x`,
float `$y`): [Gmagick](class.gmagick.md)

public [setsamplingfactors](gmagick.setsamplingfactors.md)(array
`$factors`): [Gmagick](class.gmagick.md)

public [setsize](gmagick.setsize.md)(int `$columns`, int `$rows`):
[Gmagick](class.gmagick.md)

public
[shearimage](gmagick.shearimage.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$color`, float `$xShear`, float `$yShear`):
[Gmagick](class.gmagick.md)

public [solarizeimage](gmagick.solarizeimage.md)(int `$threshold`):
[Gmagick](class.gmagick.md)

public [spreadimage](gmagick.spreadimage.md)(float `$radius`):
[Gmagick](class.gmagick.md)

public [stripimage](gmagick.stripimage.md)():
[Gmagick](class.gmagick.md)

public [swirlimage](gmagick.swirlimage.md)(float `$degrees`):
[Gmagick](class.gmagick.md)

public [thumbnailimage](gmagick.thumbnailimage.md)(int `$width`, int
`$height`, bool `$fit` u003d **`false`**): [Gmagick](class.gmagick.md)

public [trimimage](gmagick.trimimage.md)(float `$fuzz`):
[Gmagick](class.gmagick.md)

public [writeimage](gmagick.writeimage.md)(string `$filename`, bool
`$all_frames` u003d **`false`**): [Gmagick](class.gmagick.md)

}

## Зміст

- [Gmagick::addimage](gmagick.addimage.md) — Додавання нового
зображення до списку зображень об'єкта Gmagick
- [Gmagick::addnoiseimage](gmagick.addnoiseimage.md) — Додає
випадковий шум до зображення
- [Gmagick::annotateimage](gmagick.annotateimage.md) — Підписати
зображення текстом
- [Gmagick::blurimage](gmagick.blurimage.md) — Додати розмиття
зображенню
- [Gmagick::borderimage](gmagick.borderimage.md) — Додати рамку до
зображенню
- [Gmagick::charcoalimage](gmagick.charcoalimage.md) - Імітація
малювання вугіллям
- [Gmagick::chopimage](gmagick.chopimage.md) — Видаляє область
зображення і підрізає його
- [Gmagick::clear](gmagick.clear.md) — Зачищає всі ресурси,
пов'язані з об'єктом Gmagick
- [Gmagick::commentimage](gmagick.commentimage.md) — Додати
коментар до зображення
- [Gmagick::compositeimage](gmagick.compositeimage.md) — Накладає
одне зображення на інше
- [Gmagick::\_\_construct](gmagick.construct.md) - Конструктор
об'єкту Gmagick
- [Gmagick::cropimage](gmagick.cropimage.md) — Обрізає зображення
- [Gmagick::cropthumbnailimage](gmagick.cropthumbnailimage.md)
Створення обрізаного зменшеного зображення
- [Gmagick::current](gmagick.current.md) - Повернути себе
- [Gmagick::cyclecolormapimage](gmagick.cyclecolormapimage.md) -
Зміщує колірну карту зображення
- [Gmagick::deconstructimages](gmagick.deconstructimages.md) -
Повертає певні піксельні різницю між зображеннями
- [Gmagick::despeckleimage](gmagick.despeckleimage.md) — Призначення
despeckleimage
- [Gmagick::destroy](gmagick.destroy.md) — Знищити об'єкт Gmagick
- [Gmagick::drawimage](gmagick.drawimage.md) — Відображає об'єкт
GmagickDraw на поточному зображенні
- [Gmagick::edgeimage](gmagick.edgeimage.md) — Збільшує краї в
зображенні
- [Gmagick::embossimage](gmagick.embossimage.md) — Повертає
зображення в градаціях сірого з тривимірним ефектом
- [Gmagick::enhanceimage](gmagick.enhanceimage.md) - Покращує
якість зображення з шумом
- [Gmagick::equalizeimage](gmagick.equalizeimage.md) — Вирівнює
гістограму зображення
- [Gmagick::flipimage](gmagick.flipimage.md) — Створює вертикальне
дзеркальне відображення
- [Gmagick::flopimage](gmagick.flopimage.md) — Створює
горизонтальне дзеркальне відображення
- [Gmagick::frameimage](gmagick.frameimage.md) — Додає
змодельований тривимірний кордон
- [Gmagick::gammaimage](gmagick.gammaimage.md) - Гамма-корекція
зображення
- [Gmagick::getcopyright](gmagick.getcopyright.md) — Повертає
копірайт GraphicsMagick API у вигляді рядка
- [Gmagick::getfilename](gmagick.getfilename.md) — Повертає ім'я
файлу пов'язаного з послідовністю зображень
- [Gmagick::getimagebackgroundcolor](gmagick.getimagebackgroundcolor.md)
— Повертає колір тла зображення
- [Gmagick::getimageblueprimary](gmagick.getimageblueprimary.md) -
Повертає кольоровість синьої первинної точки
- [Gmagick::getimagebordercolor](gmagick.getimagebordercolor.md) -
Повертає колір кордону зображення
- [Gmagick::getimagechanneldepth](gmagick.getimagechanneldepth.md) -
Отримує глибину для певного каналу зображення
- [Gmagick::getimagecolors](gmagick.getimagecolors.md) — Повертає
колір вказаного індексу карти кольорів
- [Gmagick::getimagecolorspace](gmagick.getimagecolorspace.md) -
Повертає колірний простір зображення
- [Gmagick::getimagecompose](gmagick.getimagecompose.md) -
Повертає складовий оператор, пов'язаний із зображенням
- [Gmagick::getimagedelay](gmagick.getimagedelay.md) — Отримує
затримку зображення
- [Gmagick::getimagedepth](gmagick.getimagedepth.md) — Отримує
глибину зображення
- [Gmagick::getimagedispose](gmagick.getimagedispose.md) — Отримує
метод видалення зображення
- [Gmagick::getimageextrema](gmagick.getimageextrema.md) — Отримує
екстремуми для зображення
- [Gmagick::getimagefilename](gmagick.getimagefilename.md) -
Повертає ім'я файлу конкретного зображення у послідовності
- [Gmagick::getimageformat](gmagick.getimageformat.md) — Повертає
формат конкретного зображення у послідовності
- [Gmagick::getimagegamma](gmagick.getimagegamma.md) — Повертає
гаму зображення
- [Gmagick::getimagegreenprimary](gmagick.getimagegreenprimary.md) -
Повертає первинну зелену точку
- [Gmagick::getimageheight](gmagick.getimageheight.md) — Повертає
висоту зображення
- [Gmagick::getimagehistogram](gmagick.getimagehistogram.md) -
Повертає гістограму зображення
- [Gmagick::getimageindex](gmagick.getimageindex.md) — Повертає
індекс поточного активного зображення
- [Gmagick::getimageinterlacescheme](gmagick.getimageinterlacescheme.md)
— Отримує схему чергування зображень
- [Gmagick::getimageiterations](gmagick.getimageiterations.md) -
Отримує ітерацію зображення
- [Gmagick::getimagematte](gmagick.getimagematte.md) — Перевіряє,
чи є на зображенні матовий канал
- [Gmagick::getimagemattecolor](gmagick.getimagemattecolor.md) -
Повертає зображення матового кольору
- [Gmagick::getimageprofile](gmagick.getimageprofile.md) -
Повертає іменований профайл зображення
- [Gmagick::getimageredprimary](gmagick.getimageredprimary.md) -
Повертає первинну червону точку
- [Gmagick::getimagerenderingintent](gmagick.getimagerenderingintent.md)
— Отримує мету рендерингу зображення
- [Gmagick::getimageresolution](gmagick.getimageresolution.md) -
Повертає роздільну здатність зображення
- [Gmagick::getimagescene](gmagick.getimagescene.md) — Отримує
сцену зображення
- [Gmagick::getimagesignature](gmagick.getimagesignature.md) -
Створює підпис повідомлення SHA-256
- [Gmagick::getimagetype](gmagick.getimagetype.md) — Повертає
потенційний тип зображення
- [Gmagick::getimageunits](gmagick.getimageunits.md) — Повертає
одиниці роздільної здатності зображення
- [Gmagick::getimagewhitepoint](gmagick.getimagewhitepoint.md) -
Повертає хроматичну білу точку
- [Gmagick::getimagewidth](gmagick.getimagewidth.md) — Повертає
ширину зображення
- [Gmagick::getpackagename](gmagick.getpackagename.md) — Повертає
ім'я пакета GraphicsMagick
- [Gmagick::getquantumdepth](gmagick.getquantumdepth.md) -
Повертає глибину кольору (біт на канал) об'єкта Gmagick у вигляді
рядки
- [Gmagick::getreleasedate](gmagick.getreleasedate.md) — Повертає
дату релізу GraphicsMagick у вигляді рядка
- [Gmagick::getsamplingfactors](gmagick.getsamplingfactors.md) -
Повертає вертикальний та горизонтальний фактор дискретизації
- [Gmagick::getsize](gmagick.getsize.md) — Повертає розмір,
пов'язаний з об'єктом Gmagick
- [Gmagick::getversion](gmagick.getversion.md) — Повертає версію
GraphicsMagick API
- [Gmagick::hasnextimage](gmagick.hasnextimage.md) — Перевіряє, чи є
ще зображення в об'єкті
- [Gmagick::haspreviousimage](gmagick.haspreviousimage.md) -
Перевіряє, чи є ще зображення в об'єкті під час ітерації назад
- [Gmagick::implodeimage](gmagick.implodeimage.md) — Створює копію
зображення
- [Gmagick::labelimage](gmagick.labelimage.md) — Додає позначку до
зображенню
- [Gmagick::levelimage](gmagick.levelimage.md) — Регулює рівні
зображення
- [Gmagick::magnifyimage](gmagick.magnifyimage.md) - Пропорційно
масштабує зображення у 2 рази
- [Gmagick::mapimage](gmagick.mapimage.md) — Замінює кольори
зображення на найближчий колір із еталонного зображення
- [Gmagick::medianfilterimage](gmagick.medianfilterimage.md) -
Застосовує цифровий фільтр
- [Gmagick::minifyimage](gmagick.minifyimage.md) - Масштабує
зображення пропорційно половині його розміру
- [Gmagick::modulateimage](gmagick.modulateimage.md) — Керує
яскравістю, насиченістю та відтінком
- [Gmagick::motionblurimage](gmagick.motionblurimage.md) - Імітує
розмиття при русі
- [Gmagick::newimage](gmagick.newimage.md) — Створює нове
зображення
- [Gmagick::nextimage](gmagick.nextimage.md) — Здійснює перехід
до наступного зображення
- [Gmagick::normalizeimage](gmagick.normalizeimage.md) — Підвищує
контрастність кольорового зображення
- [Gmagick::oilpaintimage](gmagick.oilpaintimage.md) - Імітує
ефект картини олією
- [Gmagick::previousimage](gmagick.previousimage.md) - Здійснює
перехід до попереднього зображення в об'єкті
- [Gmagick::profileimage](gmagick.profileimage.md) — Додає або
видаляє профіль із зображення
- [Gmagick::quantizeimage](gmagick.quantizeimage.md) - Аналізує
кольори еталонного зображення
- [Gmagick::quantizeimages](gmagick.quantizeimages.md) - Аналізує
кольори у послідовності зображень
- [Gmagick::queryfontmetrics](gmagick.queryfontmetrics.md) -
Повертає масив, що представляє метрики шрифту
- [Gmagick::queryfonts](gmagick.queryfonts.md) — Повертає
налаштовані шрифти
- [Gmagick::queryformats](gmagick.queryformats.md) — Повертає
формати, що підтримуються Gmagick
- [Gmagick::radialblurimage](gmagick.radialblurimage.md) — Застосовує
радіальне розмиття до зображення
- [Gmagick::raiseimage](gmagick.raiseimage.md) — Створює імітацію
ефекту тривимірної кнопки
- [Gmagick::read](gmagick.read.md) — Читає зображення з файлу
- [Gmagick::readimage](gmagick.readimage.md) — Читає зображення з
файлу
- [Gmagick::readimageblob](gmagick.readimageblob.md) - Читає
зображення з бінарного рядка
- [Gmagick::readimagefile](gmagick.readimagefile.md) - Читає
зображення або послідовність зображень із файлового
дескриптора
- [Gmagick::reducenoiseimage](gmagick.reducenoiseimage.md)
Згладжує контури зображення
- [Gmagick::removeimage](gmagick.removeimage.md) — Видаляє
зображення зі списку
- [Gmagick::removeimageprofile](gmagick.removeimageprofile.md) -
Видаляє іменований профайл зображення та повертає його
- [Gmagick::resampleimage](gmagick.resampleimage.md) — Змінює
роздільна здатність зображення до бажаного
- [Gmagick::resizeimage](gmagick.resizeimage.md) - Масштабує
зображення
- [Gmagick::rollimage](gmagick.rollimage.md) — Зміщення зображення
- [Gmagick::rotateimage](gmagick.rotateimage.md) - Повертає
зображення
- [Gmagick::scaleimage](gmagick.scaleimage.md) — Масштабування розміру
зображення
- [Gmagick::separateimagechannel](gmagick.separateimagechannel.md) -
Відокремлює канал від зображення
- [Gmagick::setCompressionQuality](gmagick.setcompressionquality.md)
— Встановлює якість стандартного стиснення об'єкта
- [Gmagick::setfilename](gmagick.setfilename.md) — Встановлює ім'я
файлу перед читанням або записуванням зображення
- [Gmagick::setimagebackgroundcolor](gmagick.setimagebackgroundcolor.md)
— Встановлює колір тла зображення
- [Gmagick::setimageblueprimary](gmagick.setimageblueprimary.md) -
Встановлює кольоровість зображення блакитною основною точкою
- [Gmagick::setimagebordercolor](gmagick.setimagebordercolor.md) -
Встановлює колір рамки зображення
- [Gmagick::setimagechanneldepth](gmagick.setimagechanneldepth.md) -
Встановлює глибину певного каналу зображення
- [Gmagick::setimagecolorspace](gmagick.setimagecolorspace.md) -
Встановлює колірний простір зображення
- [Gmagick::setimagecompose](gmagick.setimagecompose.md) -
Встановлює оператор складеного зображення
- [Gmagick::setimagedelay](gmagick.setimagedelay.md) — Встановлює
затримку зображення
- [Gmagick::setimagedepth](gmagick.setimagedepth.md) — Встановлює
глибину зображення
- [Gmagick::setimagedispose](gmagick.setimagedispose.md) -
Встановлює спосіб видалення зображення
- [Gmagick::setimagefilename](gmagick.setimagefilename.md) -
Встановлює ім'я файлу конкретного зображення у послідовності
- [Gmagick::setimageformat](gmagick.setimageformat.md) -
Встановлює формат певного зображення
- [Gmagick::setimagegamma](gmagick.setimagegamma.md) — Встановлює
гаму зображення
- [Gmagick::setimagegreenprimary](gmagick.setimagegreenprimary.md) -
Встановлює кольоровість зображення зеленою первинною точкою
- [Gmagick::setimageindex](gmagick.setimageindex.md) — Встановлює
ітератор у положення у списку зображень, заданому параметром index
- [Gmagick::setimageinterlacescheme](gmagick.setimageinterlacescheme.md)
— Встановлює схему надстрокової розгортки зображення
- [Gmagick::setimageiterations](gmagick.setimageiterations.md) -
Встановлює ітерацію зображення
- [Gmagick::setimageprofile](gmagick.setimageprofile.md) — Додає
іменований профіль в об'єкт Gmagick
- [Gmagick::setimageredprimary](gmagick.setimageredprimary.md) -
Встановлює кольоровість зображення червоною основною точкою
- [Gmagick::setimagerenderingintent](gmagick.setimagerenderingintent.md)
— Встановлює спосіб візуалізації зображення
- [Gmagick::setimageresolution](gmagick.setimageresolution.md) -
Встановлює роздільну здатність зображення
- [Gmagick::setimagescene](gmagick.setimagescene.md) — Встановлює
сцену зображення
- [Gmagick::setimagetype](gmagick.setimagetype.md) — Встановлює
тип зображення
- [Gmagick::setimageunits](gmagick.setimageunits.md) — Встановлює
одиниці роздільної здатності зображення
- [Gmagick::setimagewhitepoint](gmagick.setimagewhitepoint.md) -
Встановлює кольоровість зображення білою точкою
- [Gmagick::setsamplingfactors](gmagick.setsamplingfactors.md) -
Встановлює фактори вибірки зображення
- [Gmagick::setsize](gmagick.setsize.md) — Встановлює розмір
об'єкту Gmagick
- [Gmagick::shearimage](gmagick.shearimage.md) — Створює
паралелограм
- [Gmagick::solarizeimage](gmagick.solarizeimage.md) — Застосовує
соляризаційний ефект до зображення
- [Gmagick::spreadimage](gmagick.spreadimage.md) — Випадково зміщує
кожен піксель у блоці
- [Gmagick::stripimage](gmagick.stripimage.md) — Знімає зображення
всіх профілів та коментарів
- [Gmagick::swirlimage](gmagick.swirlimage.md) — Закручує пікселі
навколо центру зображення
- [Gmagick::thumbnailimage](gmagick.thumbnailimage.md) — Змінює
розмір зображення
- [Gmagick::trimimage](gmagick.trimimage.md) — Видаляє краї з
зображення
- [Gmagick::write](gmagick.write.md) - Псевдонім Gmagick::writeimage
- [Gmagick::writeimage](gmagick.writeimage.md) - Записує
зображення у вказаний файл
