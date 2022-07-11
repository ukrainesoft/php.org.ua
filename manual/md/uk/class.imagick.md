- [« Базове використання](imagick.examples-1.md)
- [Imagick::adaptiveBlurImage »](imagick.adaptiveblurimage.md)

- [PHP Manual](index.md)
- [ImageMagick](book.imagick.md)
- Клас Imagick

# Клас [Imagick](class.imagick.md)

(PECL imagick 2, PECL imagick 3)

## Огляд класів

class **Imagick** implements [Iterator](class.iterator.md) {

public
[\_\_construct](imagick.construct.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$files` u003d ?)

public [adaptiveBlurImage](imagick.adaptiveblurimage.md)(float
`$radius`, float `$sigma`, int `$channel` u003d Imagick::CHANNEL_DEFAULT):
bool

public [adaptiveResizeImage](imagick.adaptiveresizeimage.md)(
int `$columns`,
int `$rows`,
bool `$bestfit` u003d **`false`**,
bool `$legacy` u003d **`false`**
): bool

public [adaptiveSharpenImage](imagick.adaptivesharpenimage.md)(float
`$radius`, float `$sigma`, int `$channel` u003d Imagick::CHANNEL_DEFAULT):
bool

public [adaptiveThresholdImage](imagick.adaptivethresholdimage.md)(int
`$width`, int `$height`, int `$offset`): bool

public [addImage](imagick.addimage.md)([Imagick](class.imagick.md)
`$source`): bool

public [addNoiseImage](imagick.addnoiseimage.md)(int `$noise_type`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public
[affineTransformImage](imagick.affinetransformimage.md)([ImagickDraw](class.imagickdraw.md)
`$matrix`): bool

public [animateImages](imagick.animateimages.md)(string `$x_server`):
bool

public [annotateImage](imagick.annotateimage.md)(
[ImagickDraw](class.imagickdraw.md) `$draw_settings`,
float `$x`,
float `$y`,
float `$angle`,
string `$text`
): bool

public [appendImages](imagick.appendimages.md)(bool `$stack`):
[Imagick](class.imagick.md)

public [autoLevelImage](imagick.autolevelimage.md)(int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

public [averageImages](imagick.averageimages.md)():
[Imagick](class.imagick.md)

public
[blackThresholdImage](imagick.blackthresholdimage.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$threshold`): bool

public [blueShiftImage](imagick.blueshiftimage.md)(float `$factor` u003d
1.5): bool

public [blurImage](imagick.blurimage.md)(float `$radius`, float
`$sigma`, int `$channel` u003d ?): bool

public
[borderImage](imagick.borderimage.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$bordercolor`, int `$width`, int `$height`): bool

public
[brightnessContrastImage](imagick.brightnesscontrastimage.md)(float
`$brightness`, float `$contrast`, int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

public [charcoalImage](imagick.charcoalimage.md)(float `$radius`,
float `$sigma`): bool

public [chopImage](imagick.chopimage.md)(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): bool

public [clampImage](imagick.clampimage.md)(int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

public [clear](imagick.clear.md)(): bool

public [clipImage](imagick.clipimage.md)(): bool

public [clipImagePath](imagick.clipimagepath.md)(string `$pathname`,
string `$inside`): void

public [clipPathImage](imagick.clippathimage.md)(string `$pathname`,
bool `$inside`): bool

public [clone](imagick.clone.md)(): [Imagick](class.imagick.md)

public [clutImage](imagick.clutimage.md)([Imagick](class.imagick.md)
`$lookup_table`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [coalesceImages](imagick.coalesceimages.md)():
[Imagick](class.imagick.md)

public [colorFloodfillImage](imagick.colorfloodfillimage.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fill`,
float `$fuzz`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$bordercolor,
int `$x`,
int `$y`
): bool

public
[colorizeImage](imagick.colorizeimage.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$colorize`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$opacity`, bool `$legacy` u003d **`false`**): bool

public [colorMatrixImage](imagick.colormatriximage.md)(array
`$color_matrix` u003d Imagick::CHANNEL_DEFAULT): bool

public [combineImages](imagick.combineimages.md)(int `$channelType`):
[Imagick](class.imagick.md)

public [commentImage](imagick.commentimage.md)(string `$comment`):
bool

public
[compareImageChannels](imagick.compareimagechannels.md)([Imagick](class.imagick.md)
`$image`, int `$channelType`, int `$metricType`): array

public [compareImageLayers](imagick.compareimagelayers.md)(int
`$method`): [Imagick](class.imagick.md)

public
[compareImages](imagick.compareimages.md)([Imagick](class.imagick.md)
`$compare`, int `$metric`): array

public [compositeImage](imagick.compositeimage.md)(
[Imagick](class.imagick.md) `$composite_object`,
int `$composite`,
int `$x`,
int `$y`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public [contrastImage](imagick.contrastimage.md)(bool `$sharpen`):
bool

public [contrastStretchImage](imagick.contraststretchimage.md)(float
`$black_point`, float `$white_point`, int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

public [convolveImage](imagick.convolveimage.md)(array `$kernel`, int
`$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [count](imagick.count.md)(int `$mode` u003d 0): int

public [cropImage](imagick.cropimage.md)(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): bool

public [cropThumbnailImage](imagick.cropthumbnailimage.md)(int
`$width`, int `$height`, bool `$legacy` u003d **`false`**): bool

public [current](imagick.current.md)(): [Imagick](class.imagick.md)

public [cycleColormapImage](imagick.cyclecolormapimage.md)(int
`$displace`): bool

public [decipherImage](imagick.decipherimage.md)(string
`$passphrase`): bool

public [deconstructImages](imagick.deconstructimages.md)():
[Imagick](class.imagick.md)

public [deleteImageArtifact](imagick.deleteimageartifact.md)(string
`$artifact`): bool

public [deleteImageProperty](imagick.deleteimageproperty.md)(string
`$name`): bool

public [deskewImage](imagick.deskewimage.md)(float `$threshold`): bool

public [despeckleImage](imagick.despeckleimage.md)(): bool

public [destroy](imagick.destroy.md)(): bool

public [displayImage](imagick.displayimage.md)(string `$servername`):
bool

public [displayImages](imagick.displayimages.md)(string
`$servername`): bool

public [distortImage](imagick.distortimage.md)(int `$method`, array
`$arguments`, bool `$bestfit`): bool

public
[drawImage](imagick.drawimage.md)([ImagickDraw](class.imagickdraw.md)
`$draw`): bool

public [edgeImage](imagick.edgeimage.md)(float `$radius`): bool

public [embossImage](imagick.embossimage.md)(float `$radius`, float
`$sigma`): bool

public [encipherImage](imagick.encipherimage.md)(string
`$passphrase`): bool

public [enhanceImage](imagick.enhanceimage.md)(): bool

public [equalizeImage](imagick.equalizeimage.md)(): bool

public [evaluateImage](imagick.evaluateimage.md)(int `$op`, float
`$constant`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [exportImagePixels](imagick.exportimagepixels.md)(
int `$x`,
int `$y`,
int `$width`,
int `$height`,
string `$map`,
int `$STORAGE`
): array

public [extentImage](imagick.extentimage.md)(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): bool

public
[filter](imagick.filter.md)([ImagickKernel](class.imagickkernel.md)
`$ImagickKernel`, int `$channel` u003d Imagick::CHANNEL_UNDEFINED): bool

public [flattenImages](imagick.flattenimages.md)():
[Imagick](class.imagick.md)

public [flipImage](imagick.flipimage.md)(): bool

public [floodFillPaintImage](imagick.floodfillpaintimage.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fill`,
float `$fuzz`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$target`,
int `$x`,
int `$y`,
bool `$invert`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public [flopImage](imagick.flopimage.md)(): bool

public
[forwardFourierTransformimage](imagick.forwardfouriertransformimage.md)(bool
`$magnitude`): bool

public [frameImage](imagick.frameimage.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$matte_color`,
int `$width`,
int `$height`,
int `$inner_bevel`,
int `$outer_bevel`
): bool

public [functionImage](imagick.functionimage.md)(int `$function`,
array `$arguments`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [fxImage](imagick.fximage.md)(string `$expression`, int
`$channel` u003d Imagick::CHANNEL_DEFAULT): [Imagick](class.imagick.md)

public [gammaImage](imagick.gammaimage.md)(float `$gamma`, int
`$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [gaussianBlurImage](imagick.gaussianblurimage.md)(float
`$radius`, float `$sigma`, int `$channel` u003d Imagick::CHANNEL_DEFAULT):
bool

public [getColorspace](imagick.getcolorspace.md)(): int

public [getCompression](imagick.getcompression.md)(): int

public [getCompressionQuality](imagick.getcompressionquality.md)():
int

public static [getCopyright](imagick.getcopyright.md)(): string

public [getFilename](imagick.getfilename.md)(): string

public [getFont](imagick.getfont.md)(): string

public [getFormat](imagick.getformat.md)(): string

public [getGravity](imagick.getgravity.md)(): int

public static [getHomeURL](imagick.gethomeurl.md)(): string

public [getImage](imagick.getimage.md)():
[Imagick](class.imagick.md)

public [getImageAlphaChannel](imagick.getimagealphachannel.md)(): bool

public [getImageArtifact](imagick.getimageartifact.md)(string
`$artifact`): string

public [getImageAttribute](imagick.getimageattribute.md)(string
`$key`): string

public
[getImageBackgroundColor](imagick.getimagebackgroundcolor.md)():
[ImagickPixel](class.imagickpixel.md)

public [getImageBlob](imagick.getimageblob.md)(): string

public [getImageBluePrimary](imagick.getimageblueprimary.md)(): array

public [getImageBorderColor](imagick.getimagebordercolor.md)():
[ImagickPixel](class.imagickpixel.md)

public [getImageChannelDepth](imagick.getimagechanneldepth.md)(int
`$channel`): int

public
[getImageChannelDistortion](imagick.getimagechanneldistortion.md)([Imagick](class.imagick.md)
`$reference`, int `$channel`, int `$metric`): float

public
[getImageChannelDistortions](imagick.getimagechanneldistortions.md)([Imagick](class.imagick.md)
`$reference`, int `$metric`, int `$channel` u003d Imagick::CHANNEL_DEFAULT):
float

public [getImageChannelExtrema](imagick.getimagechannelextrema.md)(int
`$channel`): array

public
[getImageChannelKurtosis](imagick.getimagechannelkurtosis.md)(int
`$channel` u003d Imagick::CHANNEL_DEFAULT): array

public [getImageChannelMean](imagick.getimagechannelmean.md)(int
`$channel`): array

public [getImageChannelRange](imagick.getimagechannelrange.md)(int
`$channel`): array

public
[getImageChannelStatistics](imagick.getimagechannelstatistics.md)():
array

public [getImageClipMask](imagick.getimageclipmask.md)():
[Imagick](class.imagick.md)

public [getImageColormapColor](imagick.getimagecolormapcolor.md)(int
`$index`): [ImagickPixel](class.imagickpixel.md)

public [getImageColors](imagick.getimagecolors.md)(): int

public [getImageColorspace](imagick.getimagecolorspace.md)(): int

public [getImageCompose](imagick.getimagecompose.md)(): int

public [getImageCompression](imagick.getimagecompression.md)(): int

public
[getImageCompressionQuality](imagick.getimagecompressionquality.md)():
int

public [getImageDelay](imagick.getimagedelay.md)(): int

public [getImageDepth](imagick.getimagedepth.md)(): int

public [getImageDispose](imagick.getimagedispose.md)(): int

public [getImageDistortion](imagick.getimagedistortion.md)(MagickWand
`$reference`, int `$metric`): float

public [getImageExtrema](imagick.getimageextrema.md)(): array

public [getImageFilename](imagick.getimagefilename.md)(): string

public [getImageFormat](imagick.getimageformat.md)(): string

public [getImageGamma](imagick.getimagegamma.md)(): float

public [getImageGeometry](imagick.getimagegeometry.md)(): array

public [getImageGravity](imagick.getimagegravity.md)(): int

public [getImageGreenPrimary](imagick.getimagegreenprimary.md)():
array

public [getImageHeight](imagick.getimageheight.md)(): int

public [getImageHistogram](imagick.getimagehistogram.md)(): array

public [getImageIndex](imagick.getimageindex.md)(): int

public
[getImageInterlaceScheme](imagick.getimageinterlacescheme.md)(): int

public
[getImageInterpolateMethod](imagick.getimageinterpolatemethod.md)():
int

public [getImageIterations](imagick.getimageiterations.md)(): int

public [getImageLength](imagick.getimagelength.md)(): int

public [getImageMatte](imagick.getimagematte.md)(): bool

public [getImageMatteColor](imagick.getimagemattecolor.md)():
[ImagickPixel](class.imagickpixel.md)

public [getImageMimeType](imagick.getimagemimetype.md)(): string

public [getImageOrientation](imagick.getimageorientation.md)(): int

public [getImagePage](imagick.getimagepage.md)(): array

public [getImagePixelColor](imagick.getimagepixelcolor.md)(int `$x`,
int `$y`): [ImagickPixel](class.imagickpixel.md)

public [getImageProfile](imagick.getimageprofile.md)(string `$name`):
string

public [getImageProfiles](imagick.getimageprofiles.md)(string
`$pattern` u003d "\*", bool `$include_values` u003d **`true`**): array

public [getImageProperties](imagick.getimageproperties.md)(string
`$pattern` u003d "\*", bool `$include_values` u003d **`true`**): array

public [getImageProperty](imagick.getimageproperty.md)(string
`$name`): string

public [getImageRedPrimary](imagick.getimageredprimary.md)(): array

public [getImageRegion](imagick.getimageregion.md)(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): [Imagick](class.imagick.md)

public
[getImageRenderingIntent](imagick.getimagerenderingintent.md)(): int

public [getImageResolution](imagick.getimageresolution.md)(): array

public [getImagesBlob](imagick.getimagesblob.md)(): string

public [getImageScene](imagick.getimagescene.md)(): int

public [getImageSignature](imagick.getimagesignature.md)(): string

public [getImageSize](imagick.getimagesize.md)(): int

public [getImageTicksPerSecond](imagick.getimagetickspersecond.md)():
int

public
[getImageTotalInkDensity](imagick.getimagetotalinkdensity.md)(): float

public [getImageType](imagick.getimagetype.md)(): int

public [getImageUnits](imagick.getimageunits.md)(): int

public
[getImageVirtualPixelMethod](imagick.getimagevirtualpixelmethod.md)():
int

public [getImageWhitePoint](imagick.getimagewhitepoint.md)(): array

public [getImageWidth](imagick.getimagewidth.md)(): int

public [getInterlaceScheme](imagick.getinterlacescheme.md)(): int

public [getIteratorIndex](imagick.getiteratorindex.md)(): int

public [getNumberImages](imagick.getnumberimages.md)(): int

public [getOption](imagick.getoption.md)(string `$key`): string

public static [getPackageName](imagick.getpackagename.md)(): string

public [getPage](imagick.getpage.md)(): array

public [getPixelIterator](imagick.getpixeliterator.md)():
[ImagickPixelIterator](class.imagickpixeliterator.md)

public [getPixelRegionIterator](imagick.getpixelregioniterator.md)(
int `$x`,
int `$y`,
int `$columns`,
int `$rows`
): [ImagickPixelIterator](class.imagickpixeliterator.md)

public [getPointSize](imagick.getpointsize.md)(): float

public static [getQuantum](imagick.getquantum.md)(): int

public static [getQuantumDepth](imagick.getquantumdepth.md)(): array

public static [getQuantumRange](imagick.getquantumrange.md)(): array

public static [getRegistry](imagick.getregistry.md)(string `$key`):
string

public static [getReleaseDate](imagick.getreleasedate.md)(): string

public static [getResource](imagick.getresource.md)(int `$type`): int

public static [getResourceLimit](imagick.getresourcelimit.md)(int
`$type`): int

public [getSamplingFactors](imagick.getsamplingfactors.md)(): array

public [getSize](imagick.getsize.md)(): array

public [getSizeOffset](imagick.getsizeoffset.md)(): int

public static [getVersion](imagick.getversion.md)(): array

public
[haldClutImage](imagick.haldclutimage.md)([Imagick](class.imagick.md)
`$clut`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [hasNextImage](imagick.hasnextimage.md)(): bool

public [hasPreviousImage](imagick.haspreviousimage.md)(): bool

public [identifyFormat](imagick.identifyformat.md)(string
`$embedText`): string\|false

public [identifyImage](imagick.identifyimage.md)(bool
`$appendRawOutput` u003d **`false`**): array

public [implodeImage](imagick.implodeimage.md)(float `$radius`): bool

public [importImagePixels](imagick.importimagepixels.md)(
int `$x`,
int `$y`,
int `$width`,
int `$height`,
string `$map`,
int `$storage`,
array `$pixels`
): bool

public
[inverseFourierTransformImage](imagick.inversefouriertransformimage.md)([Imagick](class.imagick.md)
`$complement`, bool `$magnitude`): bool

public [labelImage](imagick.labelimage.md)(string `$label`): bool

public [levelImage](imagick.levelimage.md)(
float `$blackPoint`,
float `$gamma`,
float `$whitePoint`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public [linearStretchImage](imagick.linearstretchimage.md)(float
`$blackPoint`, float `$whitePoint`): bool

public [liquidRescaleImage](imagick.liquidrescaleimage.md)(
int `$width`,
int `$height`,
float `$delta_x`,
float `$rigidity`
): bool

public static [listRegistry](imagick.listregistry.md)(): array

public [magnifyImage](imagick.magnifyimage.md)(): bool

public [mapImage](imagick.mapimage.md)([Imagick](class.imagick.md)
`$map`, bool `$dither`): bool

public [matteFloodfillImage](imagick.mattefloodfillimage.md)(
float `$alpha`,
float `$fuzz`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$bordercolor,
int `$x`,
int `$y`
): bool

public [medianFilterImage](imagick.medianfilterimage.md)(float
`$radius`): bool

public [mergeImageLayers](imagick.mergeimagelayers.md)(int
`$layer_method`): [Imagick](class.imagick.md)

public [minifyImage](imagick.minifyimage.md)(): bool

public [modulateImage](imagick.modulateimage.md)(float `$brightness`,
float `$saturation`, float `$hue`): bool

public [montageImage](imagick.montageimage.md)(
[ImagickDraw](class.imagickdraw.md) `$draw`,
string `$tile_geometry`,
string `$thumbnail_geometry`,
int `$mode`,
string `$frame`
): [Imagick](class.imagick.md)

public [morphImages](imagick.morphimages.md)(int `$number_frames`):
[Imagick](class.imagick.md)

public [morphology](imagick.morphology.md)(
int `$morphologyMethod`,
int `$iterations`,
[ImagickKernel](class.imagickkernel.md) `$ImagickKernel`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public [mosaicImages](imagick.mosaicimages.md)():
[Imagick](class.imagick.md)

public [motionBlurImage](imagick.motionblurimage.md)(
float `$radius`,
float `$sigma`,
float `$angle`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public [negateImage](imagick.negateimage.md)(bool `$gray`, int
`$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [newImage](imagick.newimage.md)(
int `$cols`,
int `$rows`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$background`,
string `$format` u003d ?
): bool

public [newPseudoImage](imagick.newpseudoimage.md)(int `$columns`, int
`$rows`, string `$pseudoString`): bool

public [nextImage](imagick.nextimage.md)(): bool

public [normalizeImage](imagick.normalizeimage.md)(int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

public [oilPaintImage](imagick.oilpaintimage.md)(float `$radius`):
bool

public [opaquePaintImage](imagick.opaquepaintimage.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$target`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fill`,
float `$fuzz`,
bool `$invert`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public [optimizeImageLayers](imagick.optimizeimagelayers.md)(): bool

public
[orderedPosterizeImage](imagick.orderedposterizeimage.md)(string
`$threshold_map`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [paintFloodfillImage](imagick.paintfloodfillimage.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fill`,
float `$fuzz`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$bordercolor,
int `$x`,
int `$y`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public [paintOpaqueImage](imagick.paintopaqueimage.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$target`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fill`,
float `$fuzz`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public
[paintTransparentImage](imagick.painttransparentimage.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$target`, float `$alpha`, float `$fuzz`): bool

public [pingImage](imagick.pingimage.md)(string `$filename`): bool

public [pingImageBlob](imagick.pingimageblob.md)(string `$image`):
bool

public [pingImageFile](imagick.pingimagefile.md)(resource
`$filehandle`, string `$fileName` u003d ?): bool

public
[polaroidImage](imagick.polaroidimage.md)([ImagickDraw](class.imagickdraw.md)
`$properties`, float `$angle`): bool

public [posterizeImage](imagick.posterizeimage.md)(int `$levels`, bool
`$dither`): bool

public [previewImages](imagick.previewimages.md)(int `$preview`): bool

public [previousImage](imagick.previousimage.md)(): bool

public [profileImage](imagick.profileimage.md)(string `$name`, string
`$profile`): bool

public [quantizeImage](imagick.quantizeimage.md)(
int `$numberColors`,
int `$colorspace`,
int `$treedepth`,
bool `$dither`,
bool `$ measureError`
): bool

public [quantizeImages](imagick.quantizeimages.md)(
int `$numberColors`,
int `$colorspace`,
int `$treedepth`,
bool `$dither`,
bool `$ measureError`
): bool

public
[queryFontMetrics](imagick.queryfontmetrics.md)([ImagickDraw](class.imagickdraw.md)
`$properties`, string `$text`, bool `$multiline` u003d ?): array

public static [queryFonts](imagick.queryfonts.md)(string `$pattern` u003d
"\*"): array

public static [queryFormats](imagick.queryformats.md)(string
`$pattern` u003d "\*"): array

public [radialBlurImage](imagick.radialblurimage.md)(float `$angle`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [raiseImage](imagick.raiseimage.md)(
int `$width`,
int `$height`,
int `$x`,
int `$y`,
bool `$raise`
): bool

public [randomThresholdImage](imagick.randomthresholdimage.md)(float
`$low`, float `$high`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [readImage](imagick.readimage.md)(string $filename`): bool

public [readImageBlob](imagick.readimageblob.md)(string `$image`,
string `$filename` u003d ?): bool

public [readImageFile](imagick.readimagefile.md)(resource
`$filehandle`, string `$fileName` u003d **`null`**): bool

public [readImages](imagick.readimages.md)(array `$filenames`): bool

public [recolorImage](imagick.recolorimage.md)(array `$matrix`): bool

public [reduceNoiseImage](imagick.reducenoiseimage.md)(float
`$radius`): bool

public
[remapImage](imagick.remapimage.md)([Imagick](class.imagick.md)
`$replacement`, int `$DITHER`): bool

public [removeImage](imagick.removeimage.md)(): bool

public [removeImageProfile](imagick.removeimageprofile.md)(string
`$name`): string

public [render](imagick.render.md)(): bool

public [resampleImage](imagick.resampleimage.md)(
float `$x_resolution`,
float `$y_resolution`,
int `$filter`,
float `$blur`
): bool

public [resetImagePage](imagick.resetimagepage.md)(string `$page`):
bool

public [resizeImage](imagick.resizeimage.md)(
int `$columns`,
int `$rows`,
int `$filter`,
float `$blur`,
bool `$bestfit` u003d **`false`**,
bool `$legacy` u003d **`false`**
): bool

public [rollImage](imagick.rollimage.md)(int `$x`, int `$y`): bool

public
[rotateImage](imagick.rotateimage.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$background`, float `$degrees`): bool

public [rotationalBlurImage](imagick.rotationalblurimage.md)(float
`$angle`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [roundCorners](imagick.roundcorners.md)(
float `$x_rounding`,
float `$y_rounding`,
float `$stroke_width` u003d 10,
float `$displace` u003d 5,
float `$size_correction` u003d -6
): bool

public [sampleImage](imagick.sampleimage.md)(int `$columns`, int
`$rows`): bool

public [scaleImage](imagick.scaleimage.md)(
int `$cols`,
int `$rows`,
bool `$bestfit` u003d **`false`**,
bool `$legacy` u003d **`false`**
): bool

public [segmentImage](imagick.segmentimage.md)(
int `$COLORSPACE`,
float `$cluster_threshold`,
float `$smooth_threshold`,
bool `$verbose` u003d **`false`**
): bool

public [selectiveBlurImage](imagick.selectiveblurimage.md)(
float `$radius`,
float `$sigma`,
float `$threshold`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public [separateImageChannel](imagick.separateimagechannel.md)(int
`$channel`): bool

public [sepiaToneImage](imagick.sepiatoneimage.md)(float
`$threshold`): bool

public
[setBackgroundColor](imagick.setbackgroundcolor.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$background`): bool

public [setColorspace](imagick.setcolorspace.md)(int `$COLORSPACE`):
bool

public [setCompression](imagick.setcompression.md)(int
`$compression`): bool

public [setCompressionQuality](imagick.setcompressionquality.md)(int
`$quality`): bool

public [setFilename](imagick.setfilename.md)(string `$filename`): bool

public [setFirstIterator](imagick.setfirstiterator.md)(): bool

public [setFont](imagick.setfont.md)(string `$font`): bool

public [setFormat](imagick.setformat.md)(string `$format`): bool

public [setGravity](imagick.setgravity.md)(int `$gravity`): bool

public [setImage](imagick.setimage.md)([Imagick](class.imagick.md)
`$replace`): bool

public [setImageAlphaChannel](imagick.setimagealphachannel.md)(int
`$mode`): bool

public [setImageArtifact](imagick.setimageartifact.md)(string
`$artifact`, string `$value`): bool

public [setImageAttribute](imagick.setimageattribute.md)(string
`$key`, string `$value`): bool

public
[setImageBackgroundColor](imagick.setimagebackgroundcolor.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$background`): bool

public [setImageBias](imagick.setimagebias.md)(float `$bias`): bool

public [setImageBiasQuantum](imagick.setimagebiasquantum.md)(string
`$bias`): void

public [setImageBluePrimary](imagick.setimageblueprimary.md)(float
`$x`, float `$y`): bool

public
[setImageBorderColor](imagick.setimagebordercolor.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$border`): bool

public [setImageChannelDepth](imagick.setimagechanneldepth.md)(int
`$channel`, int `$depth`): bool

public
[setImageClipMask](imagick.setimageclipmask.md)([Imagick](class.imagick.md)
`$clip_mask`): bool

public [setImageColormapColor](imagick.setimagecolormapcolor.md)(int
`$index`, [ImagickPixel](class.imagickpixel.md) `$color`): bool

public [setImageColorspace](imagick.setimagecolorspace.md)(int
`$colorspace`): bool

public [setImageCompose](imagick.setimagecompose.md)(int `$compose`):
bool

public [setImageCompression](imagick.setimagecompression.md)(int
`$compression`): bool

public
[setImageCompressionQuality](imagick.setimagecompressionquality.md)(int
`$quality`): bool

public [setImageDelay](imagick.setimagedelay.md)(int `$delay`): bool

public [setImageDepth](imagick.setimagedepth.md)(int `$depth`): bool

public [setImageDispose](imagick.setimagedispose.md)(int `$dispose`):
bool

public [setImageExtent](imagick.setimageextent.md)(int `$columns`, int
`$rows`): bool

public [setImageFilename](imagick.setimagefilename.md)(string
`$filename`): bool

public [setImageFormat](imagick.setimageformat.md)(string `$format`):
bool

public [setImageGamma](imagick.setimagegamma.md)(float `$gamma`): bool

public [setImageGravity](imagick.setimagegravity.md)(int `$gravity`):
bool

public [setImageGreenPrimary](imagick.setimagegreenprimary.md)(float
`$x`, float `$y`): bool

public [setImageIndex](imagick.setimageindex.md)(int `$index`): bool

public
[setImageInterlaceScheme](imagick.setimageinterlacescheme.md)(int
`$interlace_scheme`): bool

public
[setImageInterpolateMethod](imagick.setimageinterpolatemethod.md)(int
`$method`): bool

public [setImageIterations](imagick.setimageiterations.md)(int
`$iterations`): bool

public [setImageMatte](imagick.setimagematte.md)(bool `$matte`): bool

public
[setImageMatteColor](imagick.setimagemattecolor.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$matte`): bool

public [setImageOpacity](imagick.setimageopacity.md)(float
`$opacity`): bool

public [setImageOrientation](imagick.setimageorientation.md)(int
`$orientation`): bool

public [setImagePage](imagick.setimagepage.md)(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): bool

public [setImageProfile](imagick.setimageprofile.md)(string `$name`,
string `$profile`): bool

public [setImageProperty](imagick.setimageproperty.md)(string `$name`,
string `$value`): bool

public [setImageRedPrimary](imagick.setimageredprimary.md)(float `$x`,
float `$y`): bool

public
[setImageRenderingIntent](imagick.setimagerenderingintent.md)(int
`$rendering_intent`): bool

public [setImageResolution](imagick.setimageresolution.md)(float
`$x_resolution`, float `$y_resolution`): bool

public [setImageScene](imagick.setimagescene.md)(int `$scene`): bool

public [setImageTicksPerSecond](imagick.setimagetickspersecond.md)(int
`$ticks_per_second`): bool

public [setImageType](imagick.setimagetype.md)(int `$image_type`):
bool

public [setImageUnits](imagick.setimageunits.md)(int `$units`): bool

public
[setImageVirtualPixelMethod](imagick.setimagevirtualpixelmethod.md)(int
`$method`): bool

public [setImageWhitePoint](imagick.setimagewhitepoint.md)(float `$x`,
float `$y`): bool

public [setInterlaceScheme](imagick.setinterlacescheme.md)(int
`$interlace_scheme`): bool

public [setIteratorIndex](imagick.setiteratorindex.md)(int `$index`):
bool

public [setLastIterator](imagick.setlastiterator.md)(): bool

public [setOption](imagick.setoption.md)(string `$key`, string
`$value`): bool

public [setPage](imagick.setpage.md)(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): bool

public [setPointSize](imagick.setpointsize.md)(float `$point_size`):
bool

public
[setProgressMonitor](imagick.setprogressmonitor.md)([callable](language.types.callable.md)
`$callback`): bool

public static [setRegistry](imagick.setregistry.md)(string `$key`,
string `$value`): bool

public [setResolution](imagick.setresolution.md)(float
`$x_resolution`, float `$y_resolution`): bool

public static [setResourceLimit](imagick.setresourcelimit.md)(int
`$type`, int `$limit`): bool

public [setSamplingFactors](imagick.setsamplingfactors.md)(array
`$factors`): bool

public [setSize](imagick.setsize.md)(int `$columns`, int `$rows`):
bool

public [setSizeOffset](imagick.setsizeoffset.md)(int `$columns`, int
`$rows`, int `$offset`): bool

public [setType](imagick.settype.md)(int $image_type`): bool

public [shadeImage](imagick.shadeimage.md)(bool `$gray`, float
`$azimuth`, float `$elevation`): bool

public [shadowImage](imagick.shadowimage.md)(
float `$opacity`,
float `$sigma`,
int `$x`,
int `$y`
): bool

public [sharpenImage](imagick.sharpenimage.md)(float `$radius`, float
`$sigma`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [shaveImage](imagick.shaveimage.md)(int `$columns`, int
`$rows`): bool

public
[shearImage](imagick.shearimage.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$background`, float `$x_shear`, float `$y_shear`): bool

public [sigmoidalContrastImage](imagick.sigmoidalcontrastimage.md)(
bool `$sharpen`,
float `$alpha`,
float `$beta`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public [sketchImage](imagick.sketchimage.md)(float `$radius`, float
`$sigma`, float `$angle`): bool

public [smushImages](imagick.smushimages.md)(bool `$stack`, int
`$offset`): [Imagick](class.imagick.md)

public [solarizeImage](imagick.solarizeimage.md)(int `$threshold`):
bool

public [sparseColorImage](imagick.sparsecolorimage.md)(int
`$SPARSE_METHOD`, array `$arguments`, int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

public [spliceImage](imagick.spliceimage.md)(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): bool

public [spreadImage](imagick.spreadimage.md)(float `$radius`): bool

public [statisticImage](imagick.statisticimage.md)(
int `$type`,
int `$width`,
int `$height`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public
[steganoImage](imagick.steganoimage.md)([Imagick](class.imagick.md)
`$watermark_wand`, int `$offset`): [Imagick](class.imagick.md)

public
[stereoImage](imagick.stereoimage.md)([Imagick](class.imagick.md)
`$offset_wand`): bool

public [stripImage](imagick.stripimage.md)(): bool

public
[subImageMatch](imagick.subimagematch.md)([Imagick](class.imagick.md)
`$Imagick`, array `&$offset` u003d ?, float `&$similarity` u003d ?):
[Imagick](class.imagick.md)

[swirlImage](imagick.swirlimage.md)(float `$degrees`): bool

[textImage](imagick.textureimage.md)([Imagick](class.imagick.md)
`$texture_wand`): [Imagick](class.imagick.md)

public [thresholdImage](imagick.thresholdimage.md)(float `$threshold`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

public [thumbnailImage](imagick.thumbnailimage.md)(
int `$columns`,
int `$rows`,
bool `$bestfit` u003d **`false`**,
bool `$fill` u003d **`false`**,
bool `$legacy` u003d **`false`**
): bool

public
[tintImage](imagick.tintimage.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$tint`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$opacity`, bool `$legacy` u003d **`false`**): bool

public [\_\_toString](imagick.tostring.md)(): string

public [transformImage](imagick.transformimage.md)(string `$crop`,
string `$geometry`): [Imagick](class.imagick.md)

public
[transformImageColorspace](imagick.transformimagecolorspace.md)(int
`$colorspace`): bool

public [transparentPaintImage](imagick.transparentpaintimage.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$target`,
float `$alpha`,
float `$fuzz`,
bool `$invert`
): bool

public [transposeImage](imagick.transposeimage.md)(): bool

public [transverseImage](imagick.transverseimage.md)(): bool

public [trimImage](imagick.trimimage.md)(float `$fuzz`): bool

public [uniqueImageColors](imagick.uniqueimagecolors.md)(): bool

public [unsharpMaskImage](imagick.unsharpmaskimage.md)(
float `$radius`,
float `$sigma`,
float `$amount`,
float `$threshold`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

public [valid](imagick.valid.md)(): bool

public [vignetteImage](imagick.vignetteimage.md)(
float `$blackPoint`,
float `$whitePoint`,
int `$x`,
int `$y`
): bool

public [waveImage](imagick.waveimage.md)(float `$amplitude`, float
`$length`): bool

public
[whiteThresholdImage](imagick.whitethresholdimage.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$threshold`): bool

public [writeImage](imagick.writeimage.md)(string `$filename` u003d NULL):
bool

public [writeImageFile](imagick.writeimagefile.md)(resource
`$filehandle`, string `$format` u003d ?): bool

public [writeImages](imagick.writeimages.md)(string `$filename`, bool
`$adjoin`): bool

public [writeImagesFile](imagick.writeimagesfile.md)(resource
`$filehandle`, string `$format` u003d ?): bool

}

## Методи зображення та глобальні методи

Клас Imagick має можливість утримувати та обробляти декілька
зображень одночасно. Це досягається за рахунок внутрішнього стеку,
якому існує покажчик, що вказує на поточне зображення.
Деякі функції працюють з усіма зображеннями у класі Imagick, але
все-таки, більшість працює тільки з поточним зображенням у
внутрішньому стеку. За згодою, імена методів можуть містити слово
Image для позначення того, що вони впливають лише на поточне зображення
у стеку.

## Методи класу

Тут наведено список найбільш використовуваних методів, об'єднаних у
групи за призначенням:

| Ефекти зображення | Методи одержання | Методи встановлення Читання/записування зображень | Інші |
|------------------------------------------------- -------------------------|------------------------ -------------------------------------------------- --------|----------------------------------------- -----------------------------------------|-------- -------------------------------------------------- ----|--------------------------------------------- ---------------------|
| [Imagick::adaptiveBlurImage()](imagick.adaptiveblurimage.md) | [Imagick::getCompression()](imagick.getcompression.md) | [Imagick::setBackgroundColor()](imagick.setbackgroundcolor.md) | [Imagick::\_\_construct()](imagick.construct.md) | [Imagick::clear()](imagick.clear.md) |
| [Imagick::adaptiveResizeImage()](imagick.adaptiveresizeimage.md) | [Imagick::getFilename()](imagick.getfilename.md) | [Imagick::setCompressionQuality()](imagick.setcompressionquality.md) | [Imagick::addImage()](imagick.addimage.md) | [Imagick::clone()](imagick.clone.md) |
| [Imagick::adaptiveSharpenImage()](imagick.adaptivesharpenimage.md) | [Imagick::getFormat()](imagick.getformat.md) | [Imagick::setCompression()](imagick.setcompression.md) | [Imagick::appendImages()](imagick.appendimages.md) | [Imagick::current()](imagick.current.md) |
| [Imagick::adaptiveThresholdImage()](imagick.adaptivethresholdimage.md) | [Imagick::getImageBackgroundColor()](imagick.getimagebackgroundcolor.md) | [Imagick::setFilename()](imagick.setfilename.md) | [Imagick::getFilename()](imagick.getfilename.md) | [Imagick::destroy()](imagick.destroy.md) |
| [Imagick::addNoiseImage()](imagick.addnoiseimage.md) | [Imagick::getImageBlob()](imagick.getimageblob.md) | [Imagick::getImagesBlob()](imagick.getimagesblob.md) | [Imagick::setFormat()](imagick.setformat.md) | [Imagick::getFormat()](imagick.getformat.md) |
| [Imagick::affinetransformimage()](imagick.affinetransformimage.md) | [Imagick::getImageBluePrimary()](imagick.getimageblueprimary.md) | [Imagick::setImageBackgroundColor()](imagick.setimagebackgroundcolor.md) | [Imagick::getImageFilename()](imagick.getimagefilename.md) | [Imagick::getHomeURL()](imagick.gethomeurl.md) |
| [Imagick::annotateImage()](imagick.annotateimage.md) | [Imagick::getImageBorderColor()](imagick.getimagebordercolor.md) | [Imagick::setFirstIterator()](imagick.setfirstiterator.md) | [Imagick::getImageFormat()](imagick.getimageformat.md) | [Imagick::commentImage()](imagick.commentimage.md) |
| [Imagick::averageImages()](imagick.averageimages.md) | [Imagick::getImageChannelDepth()](imagick.getimagechanneldepth.md) | [Imagick::setImageBias()](imagick.setimagebias.md) | [Imagick::getImage()](imagick.getimage.md) | [Imagick::getNumberImages()](imagick.getnumberimages.md) |
| [Imagick::blackThresholdImage()](imagick.blackthresholdimage.md) | [Imagick::getImageChannelDistortion()](imagick.getimagechanneldistortion.md) | [Imagick::setImageBluePrimary()](imagick.setimageblueprimary.md) | [Imagick::setImageFilename()](imagick.setimagefilename.md) | [Imagick::getReleaseDate()](imagick.getreleasedate.md) |
| [Imagick::blurImage()](imagick.blurimage.md) | [Imagick::getImageChannelExtrema()](imagick.getimagechannelextrema.md) | [Imagick::setImageBorderColor()](imagick.setimagebordercolor.md) | [Imagick::setImageFormat()](imagick.setimageformat.md) | [Imagick::getVersion()](imagick.getversion.md) |
| [Imagick::borderImage()](imagick.borderimage.md) | [Imagick::getImageChannelMean()](imagick.getimagechannelmean.md) | [Imagick::setImageChannelDepth()](imagick.setimagechanneldepth.md) | [Imagick::readImageFile()](imagick.readimagefile.md) | [Imagick::hasNextImage()](imagick.hasnextimage.md) |
| [Imagick::charcoalImage()](imagick.charcoalimage.md) | [Imagick::getImageChannelStatistics()](imagick.getimagechannelstatistics.md) | [Imagick::setImageColormapColor()](imagick.setimagecolormapcolor.md) | [Imagick::readImage()](imagick.readimage.md) | [Imagick::hasPreviousImage()](imagick.haspreviousimage.md) |
| [Imagick::chopImage()](imagick.chopimage.md) | [Imagick::getImageColormapColor()](imagick.getimagecolormapcolor.md) | [Imagick::setImageColorSpace()](imagick.setimagecolorspace.md) | [Imagick::writeImages()](imagick.writeimages.md) | [Imagick::labelImage()](imagick.labelimage.md) |
| [Imagick::clipImage()](imagick.clipimage.md) | [Imagick::getImageColorspace()](imagick.getimagecolorspace.md) | [Imagick::setImageCompose()](imagick.setimagecompose.md) | [Imagick::writeImage()](imagick.writeimage.md) | [Imagick::newImage()](imagick.newimage.md) |
| [Imagick::clipPathImage()](imagick.clippathimage.md) | [Imagick::getImageColors()](imagick.getimagecolors.md) | [Imagick::setImageCompression()](imagick.setimagecompression.md) | | [Imagick::newPseudoImage()](imagick.newpseudoimage.md) |
| [Imagick::coalesceImages()](imagick.coalesceimages.md) | [Imagick::getImageCompose()](imagick.getimagecompose.md) | [Imagick::setImageDelay()](imagick.setimagedelay.md) | | [Imagick::nextImage()](imagick.nextimage.md) |
| [Imagick::colorFloodFillImage()](imagick.colorfloodfillimage.md) | [Imagick::getImageDelay()](imagick.getimagedelay.md) | [Imagick::setImageDepth()](imagick.setimagedepth.md) | | [Imagick::pingImageBlob()](imagick.pingimageblob.md) |
| [Imagick::colorizeImage()](imagick.colorizeimage.md) | [Imagick::getImageDepth()](imagick.getimagedepth.md) | [Imagick::setImageDispose()](imagick.setimagedispose.md) | | [Imagick::pingImageFile()](imagick.pingimagefile.md) |
| [Imagick::combineImages()](imagick.combineimages.md) | [Imagick::getImageDispose()](imagick.getimagedispose.md) | [Imagick::setImageDispose()](imagick.setimagedispose.md) | | [Imagick::pingImage()](imagick.pingimage.md) |
| [Imagick::compareImageChannels()](imagick.compareimagechannels.md) | [Imagick::getImageDistortion()](imagick.getimagedistortion.md) | [Imagick::setImageExtent()](imagick.setimageextent.md) | | [Imagick::previousImage()](imagick.previousimage.md) |
| [Imagick::compareImageLayers()](imagick.compareimagelayers.md) | [Imagick::getImageExtrema()](imagick.getimageextrema.md) | [Imagick::setImageFilename()](imagick.setimagefilename.md) | | [Imagick::profileImage()](imagick.profileimage.md) |
| [Imagick::compositeImage()](imagick.compositeimage.md) | [Imagick::getImageFilename()](imagick.getimagefilename.md) | [Imagick::setImageFormat()](imagick.setimageformat.md) | | [Imagick::queryFormats()](imagick.queryformats.md) |
| [Imagick::contrastImage()](imagick.contrastimage.md) | [Imagick::getImageFormat()](imagick.getimageformat.md) | [Imagick::setImageGamma()](imagick.setimagegamma.md) | | [Imagick::removeImageProfile()](imagick.removeimageprofile.md) |
| [Imagick::contrastStretchImage()](imagick.contraststretchimage.md) | [Imagick::getImageGamma()](imagick.getimagegamma.md) | [Imagick::setImageGreenPrimary()](imagick.setimagegreenprimary.md) | | [Imagick::removeImage()](imagick.removeimage.md) |
| [Imagick::convolveImage()](imagick.convolveimage.md) | [Imagick::getImageGeometry()](imagick.getimagegeometry.md) | [Imagick::setImageIndex()](imagick.setimageindex.md) | | [Imagick::setFirstIterator()](imagick.setfirstiterator.md) |
| [Imagick::cropImage()](imagick.cropimage.md) | [Imagick::getImageGreenPrimary()](imagick.getimagegreenprimary.md) | [Imagick::setImageInterpolateMethod()](imagick.setimageinterpolatemethod.md) | | [Imagick::setImageIndex()](imagick.setimageindex.md) |
| [Imagick::cycleColormapImage()](imagick.cyclecolormapimage.md) | [Imagick::getImageHeight()](imagick.getimageheight.md) | [Imagick::setImageIterations()](imagick.setimageiterations.md) | | [Imagick::valid()](imagick.valid.md) |
| [Imagick::deconstructImages()](imagick.deconstructimages.md) | [Imagick::getImageHistogram()](imagick.getimagehistogram.md) | [Imagick::setImageMatteColor()](imagick.setimagemattecolor.md) | | [Imagick::getCopyright()](imagick.getcopyright.md) |
| [Imagick::drawImage()](imagick.drawimage.md) | [Imagick::getImageIndex()](imagick.getimageindex.md) | [Imagick::setImageMatte()](imagick.setimagematte.md) | | |
| [Imagick::edgeImage()](imagick.edgeimage.md) | [Imagick::getImageInterlaceScheme()](imagick.getimageinterlacescheme.md) | [Imagick::setImagePage()](imagick.setimagepage.md) | | |
| [Imagick::embossImage()](imagick.embossimage.md) | [Imagick::getImageInterpolateMethod()](imagick.getimageinterpolatemethod.md) | [Imagick::setImageProfile()](imagick.setimageprofile.md) | | |
| [Imagick::enhanceImage()](imagick.enhanceimage.md) | [Imagick::getImageIterations()](imagick.getimageiterations.md) | [Imagick::setImageProperty()](imagick.setimageproperty.md) | | |
| [Imagick::equalizeImage()](imagick.equalizeimage.md) | [Imagick::getImageMatteColor()](imagick.getimagemattecolor.md) | [Imagick::setImageRedPrimary()](imagick.setimageredprimary.md) | | |
| [Imagick::evaluateImage()](imagick.evaluateimage.md) | [Imagick::getImageMatte()](imagick.getimagematte.md) | [Imagick::setImageRenderingIntent()](imagick.setimagerenderingintent.md) | | |
| [Imagick::flattenImages()](imagick.flattenimages.md) | [Imagick::getImagePage()](imagick.getimagepage.md) | [Imagick::setImageResolution()](imagick.setimageresolution.md) | | |
| [Imagick::flipImage()](imagick.flipimage.md) | [Imagick::getImagePixelColor()](imagick.getimagepixelcolor.md) | [Imagick::setImageScene()](imagick.setimagescene.md) | | |
| [Imagick::flopImage()](imagick.flopimage.md) | [Imagick::getImageProfile()](imagick.getimageprofile.md) | [Imagick::setImageTicksPerSecond()](imagick.setimagetickspersecond.md) | | |
| | [Imagick::getImageProperty()](imagick.getimageproperty.md) | [Imagick::setImageType()](imagick.setimagetype.md) | | |
| [Imagick::fxImage()](imagick.fximage.md) | [Imagick::getImageRedPrimary()](imagick.getimageredprimary.md) | [Imagick::setImageUnits()](imagick.setimageunits.md) | | |
| [Imagick::gammaImage()](imagick.gammaimage.md) | [Imagick::getImageRegion()](imagick.getimageregion.md) | [Imagick::setImageVirtualPixelMethod()](imagick.setimagevirtualpixelmethod.md) | | |
| [Imagick::gaussianBlurImage()](imagick.gaussianblurimage.md) | [Imagick::getImageRenderingIntent()](imagick.getimagerenderingintent.md) | [Imagick::setImageWhitepoint()](imagick.setimagewhitepoint.md) | | |
| [Imagick::implodeImage()](imagick.implodeimage.md) | [Imagick::getImageResolution()](imagick.getimageresolution.md) | [Imagick::setInterlaceScheme()](imagick.setinterlacescheme.md) | | |
| [Imagick::levelImage()](imagick.levelimage.md) | [Imagick::getImageScene()](imagick.getimagescene.md) | [Imagick::setOption()](imagick.setoption.md) | | |
| [Imagick::linearStretchImage()](imagick.linearstretchimage.md) | [Imagick::getImageSignature()](imagick.getimagesignature.md) | [Imagick::setPage()](imagick.setpage.md) | | |
| [Imagick::magnifyImage()](imagick.magnifyimage.md) | [Imagick::getImageTicksPerSecond()](imagick.getimagetickspersecond.md) | [Imagick::setResolution()](imagick.setresolution.md) | | |
| [Imagick::matteFloodFillImage()](imagick.mattefloodfillimage.md) | [Imagick::getImageTotalInkDensity()](imagick.getimagetotalinkdensity.md) | [Imagick::setResourceLimit()](imagick.setresourcelimit.md) | | |
| [Imagick::medianFilterImage()](imagick.medianfilterimage.md) | [Imagick::getImageType()](imagick.getimagetype.md) | [Imagick::setSamplingFactors()](imagick.setsamplingfactors.md) | | |
| [Imagick::minifyImage()](imagick.minifyimage.md) | [Imagick::getImageUnits()](imagick.getimageunits.md) | [Imagick::setSizeOffset()](imagick.setsizeoffset.md) | | |
| [Imagick::modulateImage()](imagick.modulateimage.md) | [Imagick::getImageVirtualPixelMethod()](imagick.getimagevirtualpixelmethod.md) | [Imagick::setSize()](imagick.setsize.md) | | |
| [Imagick::montageImage()](imagick.montageimage.md) | [Imagick::getImageWhitepoint()](imagick.getimagewhitepoint.md) | [Imagick::setType()](imagick.settype.md) | | |
| [Imagick::morphImages()](imagick.morphimages.md) | [Imagick::getImageWidth()](imagick.getimagewidth.md) | | | |
| [Imagick::mosaicImages()](imagick.mosaicimages.md) | [Imagick::getImage()](imagick.getimage.md) | | | |
| [Imagick::motionBlurImage()](imagick.motionblurimage.md) | [Imagick::getInterlaceScheme()](imagick.getinterlacescheme.md) | | | |
| [Imagick::negateImage()](imagick.negateimage.md) | [Imagick::getNumberImages()](imagick.getnumberimages.md) | | | |
| [Imagick::normalizeImage()](imagick.normalizeimage.md) | [Imagick::getOption()](imagick.getoption.md) | | | |
| [Imagick::oilPaintImage()](imagick.oilpaintimage.md) | [Imagick::getPackageName()](imagick.getpackagename.md) | | | |
| [Imagick::optimizeImageLayers()](imagick.optimizeimagelayers.md) | [Imagick::getPage()](imagick.getpage.md) | | | |
| [Imagick::paintOpaqueImage()](imagick.paintopaqueimage.md) | [Imagick::getPixelIterator()](imagick.getpixeliterator.md) | | | |
| [Imagick::paintTransparentImage()](imagick.painttransparentimage.md) | [Imagick::getPixelRegionIterator()](imagick.getpixelregioniterator.md) | | | |
| [Imagick::posterizeImage()](imagick.posterizeimage.md) | [Imagick::getQuantumDepth()](imagick.getquantumdepth.md) | | | |
| [Imagick::radialBlurImage()](imagick.radialblurimage.md) | [Imagick::getQuantumRange()](imagick.getquantumrange.md) | | | |
| [Imagick::raiseImage()](imagick.raiseimage.md) | [Imagick::getResourceLimit()](imagick.getresourcelimit.md) | | | |
| [Imagick::randomThresholdImage()](imagick.randomthresholdimage.md) | [Imagick::getResource()](imagick.getresource.md) | | | |
| [Imagick::reduceNoiseImage()](imagick.reducenoiseimage.md) | [Imagick::getSamplingFactors()](imagick.getsamplingfactors.md) | | | |
| [Imagick::render()](imagick.render.md) | [Imagick::getSizeOffset()](imagick.getsizeoffset.md) | | | |
| [Imagick::resampleImage()](imagick.resampleimage.md) | [Imagick::getSize()](imagick.getsize.md) | | | |
| [Imagick::resizeImage()](imagick.resizeimage.md) | [Imagick::identifyImage()](imagick.identifyimage.md) | | | |
| [Imagick::rollImage()](imagick.rollimage.md) | [Imagick::getImageSize()](imagick.getimagesize.md) | | | |
| [Imagick::rotateImage()](imagick.rotateimage.md) | | | | |
| [Imagick::sampleImage()](imagick.sampleimage.md) | | | | |
| [Imagick::scaleImage()](imagick.scaleimage.md) | | | | |
| [Imagick::separateImageChannel()](imagick.separateimagechannel.md) | | | | |
| [Imagick::sepiaToneImage()](imagick.sepiatoneimage.md) | | | | |
| [Imagick::shadeImage()](imagick.shadeimage.md) | | | | |
| [Imagick::shadowImage()](imagick.shadowimage.md) | | | | |
| [Imagick::sharpenImage()](imagick.sharpenimage.md) | | | | |
| [Imagick::shaveImage()](imagick.shaveimage.md) | | | | |
| [Imagick::shearImage()](imagick.shearimage.md) | | | | |
| [Imagick::sigmoidalContrastImage()](imagick.sigmoidalContrastimage.md) | | | | |
| [Imagick::sketchImage()](imagick.sketchimage.md) | | | | |
| [Imagick::solarizeImage()](imagick.solarizeimage.md) | | | | |
| [Imagick::spliceImage()](imagick.spliceimage.md) | | | | |
| [Imagick::spreadImage()](imagick.spreadimage.md) | | | | |
| [Imagick::steganoImage()](imagick.steganoimage.md) | | | | |
| [Imagick::stereoImage()](imagick.stereoimage.md) | | | | |
| [Imagick::stripImage()](imagick.stripimage.md) | | | | |
| [Imagick::swirlImage()](imagick.swirlimage.md) | | | | |
| [Imagick::textureImage()](imagick.textureimage.md) | | | | |
| [Imagick::thresholdImage()](imagick.thresholdimage.md) | | | | |
| [Imagick::thumbnailImage()](imagick.thumbnailimage.md) | | | | |
| [Imagick::tintImage()](imagick.tintimage.md) | | | | |
| [Imagick::transverseImage()](imagick.transverseimage.md) | | | | |
| [Imagick::trimImage()](imagick.trimimage.md) | | | | |
| [Imagick::uniqueImageColors()](imagick.uniqueimagecolors.md) | | | | |
| [Imagick::unsharpMaskImage()](imagick.unsharpmaskimage.md) | | | | |
| [Imagick::vignetteImage()](imagick.vignetteimage.md) | | | | |
| [Imagick::waveImage()](imagick.waveimage.md) | | | | |
| [Imagick::whiteThresholdImage()](imagick.whitethresholdimage.md) | | | | |

**Методи класу за призначенням**

## Зміст

- [Imagick::adaptiveBlurImage](imagick.adaptiveblurimage.md) -
Додає адаптивний фільтр розмиття до зображення
- [Imagick::adaptiveResizeImage](imagick.adaptiveresizeimage.md) -
Адаптивна зміна розміру зображення з даними тріангуляції
- [Imagick::adaptiveSharpenImage](imagick.adaptivesharpenimage.md) -
Адаптивна зміна різкості зображення
- [Imagick::adaptiveThresholdImage](imagick.adaptivethresholdimage.md)
— Вибір порога кожного пікселя в залежності від діапазону
інтенсивності
- [Imagick::addImage](imagick.addimage.md) — Додає нове
зображення до списку зображень об'єкту Imagick
- [Imagick::addNoiseImage](imagick.addnoiseimage.md) - Накладає
випадковий шум на зображення
- [Imagick::affineTransformImage](imagick.affinetransformimage.md) -
Перетворення зображення
- [Imagick::animateImages](imagick.animateimages.md) - Анімація
одного або кількох зображень
- [Imagick::annotateImage](imagick.annotateimage.md) — Додає
текстовий коментар на зображення
- [Imagick::appendImages](imagick.appendimages.md) — Об'єднує
набір зображень
- [Imagick::autoLevelImage](imagick.autolevelimage.md) — Опис
- [Imagick::averageImages](imagick.averageimages.md) — Зосереджує
набір зображень
- [Imagick::blackThresholdImage](imagick.blackthresholdimage.md)
Перекласти всі пікселі нижче граничного значення в чорний колір
- [Imagick::blueShiftImage](imagick.blueshiftimage.md) — Опис
- [Imagick::blurImage](imagick.blurimage.md) — Додає фільтр
розмиття до зображення
- [Imagick::borderImage](imagick.borderimage.md) - Оточує
зображення рамкою
- [Imagick::brightnessContrastImage](imagick.brightnesscontrastimage.md)
- Опис
- [Imagick::charcoalImage](imagick.charcoalimage.md) - Малювання
вугілля
- [Imagick::chopImage](imagick.chopimage.md) — Видаляє область
зображення і обрізає його
- [Imagick::clampImage](imagick.clampimage.md) — Опис
- [Imagick::clear](imagick.clear.md) — Очищає всі ресурси,
пов'язані з об'єктом Imagick
- [Imagick::clipImage](imagick.clipimage.md) — Обрізка вздовж
найближчого контуру з профілем 8BIM
- [Imagick::clipImagePath](imagick.clipimagepath.md) — Опис
- [Imagick::clipPathImage](imagick.clippathimage.md) — Відсікнути вздовж
позначеного контуру з профілем 8BIM
- [Imagick::clone](imagick.clone.md) — Створює точну копію об'єкта
Imagick
- [Imagick::clutImage](imagick.clutimage.md) — Замінює кольори в
зображенні
- [Imagick::coalesceImages](imagick.coalesceimages.md) - Компонує
набір зображень
- [Imagick::colorFloodfillImage](imagick.colorfloodfillimage.md) -
Змінює значення кольору будь-якого пікселя, що відповідає цільовому
- [Imagick::colorizeImage](imagick.colorizeimage.md) — Змішування
кольори заливки із зображенням
- [Imagick::colorMatrixImage](imagick.colormatriximage.md)
Застосовує перетворення кольору до зображення
- [Imagick::combineImages](imagick.combineimages.md) — Об'єднує
одне або кілька зображень в одне зображення
- [Imagick::commentImage](imagick.commentimage.md) — Додає
коментар до вашого зображення
- [Imagick::compareImageChannels](imagick.compareimagechannels.md) -
Повертає різницю в одному або кількох зображеннях
- [Imagick::compareImageLayers](imagick.compareimagelayers.md) -
Повертає максимальну обмежуючу область між зображеннями
- [Imagick::compareImages](imagick.compareimages.md) - Порівнює
зображення з відновленим зображенням
- [Imagick::compositeImage](imagick.compositeimage.md) — Накладає
одне зображення на інше
- [Imagick::\_\_construct](imagick.construct.md) - Конструктор
об'єкту Imagick
- [Imagick::contrastImage](imagick.contrastimage.md) — Змінює
контраст зображення
- [Imagick::contrastStretchImage](imagick.contraststretchimage.md) -
Підвищує контрастність кольорового зображення
- [Imagick::convolveImage](imagick.convolveimage.md) — Застосовує
ядро згортки до зображення
- [Imagick::count](imagick.count.md) — Отримує кількість
зображень
- [Imagick::cropImage](imagick.cropimage.md) — Витягує область
зображення
- [Imagick::cropThumbnailImage](imagick.cropthumbnailimage.md)
Створює обрізану мініатюру
- [Imagick::current](imagick.current.md) - Повертає посилання на
поточний об'єкт Imagick
- [Imagick::cycleColormapImage](imagick.cyclecolormapimage.md) -
Відображає колірну карту зображення
- [Imagick::decipherImage](imagick.decipherimage.md) -
Розшифровує зображення
- [Imagick::deconstructImages](imagick.deconstructimages.md) -
Повертає певні піксельні різницю між зображеннями
- [Imagick::deleteImageArtifact](imagick.deleteimageartifact.md) -
Видаляє артефакт зображення
- [Imagick::deleteImageProperty](imagick.deleteimageproperty.md) -
Опис
- [Imagick::deskewImage](imagick.deskewimage.md) — Видаляє перекіс з
зображення
- [Imagick::despeckleImage](imagick.despeckleimage.md) — Зменшує
спекл-шум на зображенні
- [Imagick::destroy](imagick.destroy.md) — Видалення об'єкту Imagick
- [Imagick::displayImage](imagick.displayimage.md) - Виводить
зображення
- [Imagick::displayImages](imagick.displayimages.md) - Виводить
зображення або послідовність зображень
- [Imagick::distortImage](imagick.distortimage.md) - Спотворює
зображення, використовуючи різні методи спотворення
- [Imagick::drawImage](imagick.drawimage.md) — Виконує рендеринг
об'єкта ImagickDraw на поточному зображенні
- [Imagick::edgeImage](imagick.edgeimage.md) — Підсилює краї в
зображенні
- [Imagick::embossImage](imagick.embossimage.md) - Повертає
зображення в градаціях сірого з тривимірним ефектом
- [Imagick::encipherImage](imagick.encipherimage.md) - Шифрує
зображення
- [Imagick::enhanceImage](imagick.enhanceimage.md) - Покращує
якість шумного зображення
- [Imagick::equalizeImage](imagick.equalizeimage.md) - Вирівнює
гістограму зображення
- [Imagick::evaluateImage](imagick.evaluateimage.md) — Застосовує
вираз до зображення
- [Imagick::exportImagePixels](imagick.exportimagepixels.md)
Експортує пікселі зображення
- [Imagick::extentImage](imagick.extentimage.md) — Встановлює
розмір зображення
- [Imagick::filter](imagick.filter.md) — Опис
- [Imagick::flattenImages](imagick.flattenimages.md) — Об'єднує
послідовність зображень
- [Imagick::flipImage](imagick.flipimage.md) — Створює вертикальне
дзеркало зображення
- [Imagick::floodFillPaintImage](imagick.floodfillpaintimage.md) -
Змінює значення кольору будь-якого пікселя, що відповідає цільовому
- [Imagick::flopImage](imagick.flopimage.md) — Створює
горизонтальне дзеркальне відображення
- [Imagick::forwardFourierTransformImage](imagick.forwardfouriertransformimage.md)
- Опис
- [Imagick::frameImage](imagick.frameimage.md) — Додає імітацію
тривимірного кордону
- [Imagick::functionImage](imagick.functionimage.md) — Застосовує
функцію до зображення
- [Imagick::fxImage](imagick.fximage.md) — Оцінює вираз для
кожного пікселя у зображенні
- [Imagick::gammaImage](imagick.gammaimage.md) - Гамма-корекція
зображення
- [Imagick::gaussianBlurImage](imagick.gaussianblurimage.md)
Розмиває зображення
- [Imagick::getColorspace](imagick.getcolorspace.md) — Повертає
колірну палітру
- [Imagick::getCompression](imagick.getcompression.md) — Повертає
тип стиснення об'єкта
- [Imagick::getCompressionQuality](imagick.getcompressionquality.md)
— Повертає якість стиснення об'єкта
- [Imagick::getCopyright](imagick.getcopyright.md) — Повертає
копірайт API ImageMagick у вигляді рядка
- [Imagick::getFilename](imagick.getfilename.md) — Ім'я файлу
результуючого зображення
- [Imagick::getFont](imagick.getfont.md) — Повертає назву
шрифту
- [Imagick::getFormat](imagick.getformat.md) — Повертає формат
Imagick об'єкту
- [Imagick::getGravity](imagick.getgravity.md) — Повертає значення
гравітації (тяжіння)
- [Imagick::getHomeURL](imagick.gethomeurl.md) - Повертає домашній
URL бібліотеки ImageMagick
- [Imagick::getImage](imagick.getimage.md) — Повертає новий об'єкт
Imagick
- [Imagick::getImageAlphaChannel](imagick.getimagealphachannel.md) -
Перевіряє, чи є зображення альфа-канал
- [Imagick::getImageArtifact](imagick.getimageartifact.md) -
Повертає артефакт зображення
- [Imagick::getImageAttribute](imagick.getimageattribute.md) -
Повертає іменований атрибут
- [Imagick::getImageBackgroundColor](imagick.getimagebackgroundcolor.md)
— Повертає колір тла зображення
- [Imagick::getImageBlob](imagick.getimageblob.md) — Повертає
послідовність зображень у вигляді BLOB
- [Imagick::getImageBluePrimary](imagick.getimageblueprimary.md) -
Повертає основну точку синього кольору зображення
- [Imagick::getImageBorderColor](imagick.getimagebordercolor.md) -
Повертає колір рамки зображення
- [Imagick::getImageChannelDepth](imagick.getimagechanneldepth.md) -
Повертає глибину для певного каналу зображення
- [Imagick::getImageChannelDistortion](imagick.getimagechanneldistortion.md)
— Порівнює канали зображення з відновленим зображенням
- [Imagick::getImageChannelDistortions](imagick.getimagechanneldistortions.md)
- Повертає спотворення каналу
- [Imagick::getImageChannelExtrema](imagick.getimagechannelextrema.md)
— Повертає екстремуми для одного або кількох каналів
зображення
- [Imagick::getImageChannelKurtosis](imagick.getimagechannelkurtosis.md)
— Повертає ексцес та асиметрію певного каналу
- [Imagick::getImageChannelMean](imagick.getimagechannelmean.md) -
Повертає середнє та стандартне відхилення
- [Imagick::getImageChannelRange](imagick.getimagechannelrange.md) -
Повертає діапазон каналів
- [Imagick::getImageChannelStatistics](imagick.getimagechannelstatistics.md)
— Повертає статистику для кожного каналу зображення
- [Imagick::getImageClipMask](imagick.getimageclipmask.md) -
Повертає відсічну маску зображення
- [Imagick::getImageColormapColor](imagick.getimagecolormapcolor.md)
— Повертає колір зазначеного індексу панелі
- [Imagick::getImageColors](imagick.getimagecolors.md) - Повертає
кількість унікальних кольорів у зображенні
- [Imagick::getImageColorspace](imagick.getimagecolorspace.md) -
Повертає колірну палітру зображення
- [Imagick::getImageCompose](imagick.getimagecompose.md) -
Повертає складовий оператор, пов'язаний із зображенням
- [Imagick::getImageCompression](imagick.getimagecompression.md) -
Повертає поточний тип компресії зображення
- [Imagick::getImageCompressionQuality](imagick.getimagecompressionquality.md)
— Повертає поточну якість стиснення зображення
- [Imagick::getImageDelay](imagick.getimagedelay.md) - Повертає
затримку зображення
- [Imagick::getImageDepth](imagick.getimagedepth.md) — Повертає
глибину зображення
- [Imagick::getImageDispose](imagick.getimagedispose.md) -
Повертає метод видалення зображення
- [Imagick::getImageDistortion](imagick.getimagedistortion.md) -
Порівнює зображення з відновленим зображенням
- [Imagick::getImageExtrema](imagick.getimageextrema.md) -
Повертає екстремуми зображення
- [Imagick::getImageFilename](imagick.getimagefilename.md) -
Повертає ім'я файлу конкретного зображення у послідовності
- [Imagick::getImageFormat](imagick.getimageformat.md) — Повертає
формат конкретного зображення у послідовності
- [Imagick::getImageGamma](imagick.getimagegamma.md) - Повертає
гаму зображення
- [Imagick::getImageGeometry](imagick.getimagegeometry.md) -
Повертає ширину та висоту у вигляді асоціативного масиву
- [Imagick::getImageGravity](imagick.getimagegravity.md) -
Повертає значення гравітації (тяжіння)
- [Imagick::getImageGreenPrimary](imagick.getimagegreenprimary.md) -
Повертає первинну точку кольоровості зеленого
- [Imagick::getImageHeight](imagick.getimageheight.md) - Повертає
висоту зображення
- [Imagick::getImageHistogram](imagick.getimagehistogram.md) -
Повертає гістограму зображення
- [Imagick::getImageIndex](imagick.getimageindex.md) - Повертає
індекс поточного активного зображення
- [Imagick::getImageInterlaceScheme](imagick.getimageinterlacescheme.md)
— Отримує схему надрядкового зображення
- [Imagick::getImageInterpolateMethod](imagick.getimageinterpolatemethod.md)
— Повертає метод інтерполяції
- [Imagick::getImageIterations](imagick.getimageiterations.md) -
Повертає ітерації зображення
- [Imagick::getImageLength](imagick.getimagelength.md) - Повертає
довжину зображення в байтах
- [Imagick::getImageMatte](imagick.getimagematte.md) — Повертає,
якщо зображення містить матовий канал
- [Imagick::getImageMatteColor](imagick.getimagemattecolor.md) -
Повертає матовий колір зображення
- [Imagick::getImageMimeType](imagick.getimagemimetype.md) -
Повертає MIME-тип зображення
- [Imagick::getImageOrientation](imagick.getimageorientation.md) -
Повертає орієнтацію зображення
- [Imagick::getImagePage](imagick.getimagepage.md) — Повертає
геометрію сторінки
- [Imagick::getImagePixelColor](imagick.getimagepixelcolor.md)
Повертає колір вказаного пікселя
- [Imagick::getImageProfile](imagick.getimageprofile.md) -
Повертає названий профіль зображення
- [Imagick::getImageProfiles](imagick.getimageprofiles.md) -
Повертає профілі зображень
- [Imagick::getImageProperties](imagick.getimageproperties.md) -
Повертає властивості зображення
- [Imagick::getImageProperty](imagick.getimageproperty.md) -
Повертає іменовану якість зображення
- [Imagick::getImageRedPrimary](imagick.getimageredprimary.md) -
Повертає червону первинну точку кольоровості
- [Imagick::getImageRegion](imagick.getimageregion.md) — Витягує
область зображення
- [Imagick::getImageRenderingIntent](imagick.getimagerenderingintent.md)
— Повертає схему передачі кольору зображення
- [Imagick::getImageResolution](imagick.getimageresolution.md) -
Повертає роздільну здатність зображення за X та Y
- [Imagick::getImagesBlob](imagick.getimagesblob.md) - Повертає
всі послідовності зображень у вигляді великого двійкового об'єкта
- [Imagick::getImageScene](imagick.getimagescene.md) - Повертає
сцену зображення
- [Imagick::getImageSignature](imagick.getimagesignature.md) -
Генерує хеш SHA-256
- [Imagick::getImageSize](imagick.getimagesize.md) - Повертає
розмір зображення в байтах
- [Imagick::getImageTicksPerSecond](imagick.getimagetickspersecond.md)
— Отримує кількість кадрів на секунду для зображення
- [Imagick::getImageTotalInkDensity](imagick.getimagetotalinkdensity.md)
— Повертає загальну щільність чорнила зображення
- [Imagick::getImageType](imagick.getimagetype.md) — Повертає
можливий тип зображення
- [Imagick::getImageUnits](imagick.getimageunits.md) - Повертає
одиниці вимірювання роздільної здатності зображення
- [Imagick::getImageVirtualPixelMethod](imagick.getimagevirtualpixelmethod.md)
— Повертає метод віртуального пікселя
- [Imagick::getImageWhitePoint](imagick.getimagewhitepoint.md) -
Повертає білу точку кольоровості
- [Imagick::getImageWidth](imagick.getimagewidth.md) — Повертає
ширину зображення
- [Imagick::getInterlaceScheme](imagick.getinterlacescheme.md) -
Отримує схему стиснення зображення
- [Imagick::getIteratorIndex](imagick.getiteratorindex.md) -
Повертає індекс поточного активного зображення
- [Imagick::getNumberImages](imagick.getnumberimages.md) -
Повертає кількість зображень в об'єкті
- [Imagick::getOption](imagick.getoption.md) — Повертає значення,
пов'язане із зазначеним ключем
- [Imagick::getPackageName](imagick.getpackagename.md) — Повертає
ім'я пакета ImageMagick
- [Imagick::getPage](imagick.getpage.md) — Повертає геометрію
сторінки
- [Imagick::getPixelIterator](imagick.getpixeliterator.md) -
Повертає MagickPixelIterator
- [Imagick::getPixelRegionIterator](imagick.getpixelregioniterator.md)
— Повертає об'єкт ImagickPixelIterator для розділу зображення
- [Imagick::getPointSize](imagick.getpointsize.md) — Повертає
розмір точки
- [Imagick::getQuantum](imagick.getquantum.md) - Повертає
квантовий діапазон ImageMagick
- [Imagick::getQuantumDepth](imagick.getquantumdepth.md) -
Повертає величину глибини
- [Imagick::getQuantumRange](imagick.getquantumrange.md) -
Повертає розмір розміру спектру Imagick
- [Imagick::getRegistry](imagick.getregistry.md) — Опис
- [Imagick::getReleaseDate](imagick.getreleasedate.md) - Повертає
дату релізу ImageMagick
- [Imagick::getResource](imagick.getresource.md) — Повертає розмір
пам'яті вказаного ресурсу
- [Imagick::getResourceLimit](imagick.getresourcelimit.md) -
Повертає заданий ліміт ресурсів
- [Imagick::getSamplingFactors](imagick.getsamplingfactors.md) -
Повертає горизонтальний та вертикальний фактор вибірки
- [Imagick::getSize](imagick.getsize.md) — Повертає розмір,
пов'язаний з об'єктом Imagick
- [Imagick::getSizeOffset](imagick.getsizeoffset.md) — Повертає
розмір зміщення
- [Imagick::getVersion](imagick.getversion.md) — Повертає версію
API ImageMagick
- [Imagick::haldClutImage](imagick.haldclutimage.md) — Замінює
кольори у зображенні
- [Imagick::hasNextImage](imagick.hasnextimage.md) — Перевіряє,
чи містить об'єкт більше зображень
- [Imagick::hasPreviousImage](imagick.haspreviousimage.md) -
Перевіряє, чи має об'єкт попереднє зображення
- [Imagick::identifyFormat](imagick.identifyformat.md) — Опис
- [Imagick::identifyImage](imagick.identifyimage.md) — Визначає
зображення та отримує атрибути
- [Imagick::implodeImage](imagick.implodeimage.md) — Створює копію
зображення
- [Imagick::importImagePixels](imagick.importimagepixels.md) -
Імпортує пікселі зображення
- [Imagick::inverseFourierTransformImage](imagick.inversefouriertransformimage.md)
- Реалізує дискретне перетворення Фур'є
- [Imagick::labelImage](imagick.labelimage.md) — Додає позначку до
зображенню
- [Imagick::levelImage](imagick.levelimage.md) — Регулює рівні
зображення
- [Imagick::linearStretchImage](imagick.linearstretchimage.md)
Розтягує з насиченням яскравість зображення
- [Imagick::liquidRescaleImage](imagick.liquidrescaleimage.md) -
Анімує зображення або зображення
- [Imagick::listRegistry](imagick.listregistry.md) — Опис
- [Imagick::magnifyImage](imagick.magnifyimage.md) - Пропорційно
масштабує зображення вдвічі
- [Imagick::mapImage](imagick.mapimage.md) — Замінює кольори
зображення на найближчий колір із еталонного зображення
- [Imagick::matteFloodfillImage](imagick.mattefloodfillimage.md) -
Змінює значення прозорості кольору
- [Imagick::medianFilterImage](imagick.medianfilterimage.md) -
Застосовує цифровий фільтр
- [Imagick::mergeImageLayers](imagick.mergeimagelayers.md) -
Об'єднує шари зображення
- [Imagick::minifyImage](imagick.minifyimage.md) - Масштабує
зображення пропорційно половині його розміру
- [Imagick::modulateImage](imagick.modulateimage.md) — Керуйте
яскравістю, насиченістю та відтінком
- [Imagick::montageImage](imagick.montageimage.md) — Створює
складове зображення
- [Imagick::morphImages](imagick.morphimages.md) — Перетворює набір
зображень
- [Imagick::morphology](imagick.morphology.md) — Опис
- [Imagick::mosaicImages](imagick.mosaicimages.md) - Формує
мозаїку із зображень
- [Imagick::motionBlurImage](imagick.motionblurimage.md) - Імітує
розмиття в русі
- [Imagick::negateImage](imagick.negateimage.md) — Інвертує кольори
в еталонному зображенні
- [Imagick::newImage](imagick.newimage.md) — Створює нове
зображення
- [Imagick::newPseudoImage](imagick.newpseudoimage.md) — Створює
нове зображення
- [Imagick::nextImage](imagick.nextimage.md) — Переходить до
наступного зображення
- [Imagick::normalizeImage](imagick.normalizeimage.md) — Підвищує
контрастність кольорового зображення
- [Imagick::oilPaintImage](imagick.oilpaintimage.md) - Імітує
картину олією
- [Imagick::opaquePaintImage](imagick.opaquepaintimage.md) -
Змінює значення кольору будь-якого пікселя, що відповідає цільовому
- [Imagick::optimizeImageLayers](imagick.optimizeimagelayers.md) -
Видаляє повторювані частини зображень для оптимізації
- [Imagick::orderedPosterizeImage](imagick.orderedposterizeimage.md)
- Виконує впорядкований дизеринг
- [Imagick::paintFloodfillImage](imagick.paintfloodfillimage.md) -
Змінює значення кольору будь-якого пікселя, що відповідає меті
- [Imagick::paintOpaqueImage](imagick.paintopaqueimage.md) -
Змінює будь-який піксель, що відповідає кольору
- [Imagick::paintTransparentImage](imagick.painttransparentimage.md)
— Змінює будь-який піксель, який відповідає кольору, на колір,
певний заливкою
- [Imagick::pingImage](imagick.pingimage.md) — Отримує основні
атрибути зображення
- [Imagick::pingImageBlob](imagick.pingimageblob.md) - Швидко
витягує атрибути
- [Imagick::pingImageFile](imagick.pingimagefile.md) — Отримує
базові атрибути зображення спрощеним способом
- [Imagick::polaroidImage](imagick.polaroidimage.md) - Імітує
фото Polaroid
- [Imagick::posterizeImage](imagick.posterizeimage.md) — Зменшує
зображення до обмеженої кількості рівнів кольору
- [Imagick::previewImages](imagick.previewimages.md) - Швидке
визначення відповідних параметрів для обробки зображень
- [Imagick::previousImage](imagick.previousimage.md) — Переходить до
попереднього зображення в об'єкті
- [Imagick::profileImage](imagick.profileimage.md) — Додає або
видаляє профіль зображення
- [Imagick::quantizeImage](imagick.quantizeimage.md) - Аналізує
кольори еталонного зображення
- [Imagick::quantizeImages](imagick.quantizeimages.md) - Аналізує
кольори у послідовності зображень
- [Imagick::queryFontMetrics](imagick.queryfontmetrics.md) -
Повертає масив, що представляє метрики шрифту
- [Imagick::queryFonts](imagick.queryfonts.md) — Повертає
налаштовані шрифти
- [Imagick::queryFormats](imagick.queryformats.md) — Повертає
формати, що підтримуються Imagick
- [Imagick::radialBlurImage](imagick.radialblurimage.md) -
Радіальне розмиття зображення
- [Imagick::raiseImage](imagick.raiseimage.md) — Створює імітацію
ефекту 3D-кнопки
- [Imagick::randomThresholdImage](imagick.randomthresholdimage.md) -
Створює висококонтрастне двокольорове зображення
- [Imagick::readImage](imagick.readimage.md) — Читає зображення з
файлу
- [Imagick::readImageBlob](imagick.readimageblob.md) - Зчитує
зображення з двійкового рядка
- [Imagick::readImageFile](imagick.readimagefile.md) - Читає
зображення з відкритого дескриптора файлу
- [Imagick::readimages](imagick.readimages.md) — Читає зображення
з масиву імен файлів
- [Imagick::recolorImage](imagick.recolorimage.md) - Перефарбовує
зображення
- [Imagick::reduceNoiseImage](imagick.reducenoiseimage.md)
Згладжує контури зображення
- [Imagick::remapImage](imagick.remapimage.md) — Перезначення кольорів
зображення
- [Imagick::removeImage](imagick.removeimage.md) — Видаляє
зображення зі списку зображень
- [Imagick::removeImageProfile](imagick.removeimageprofile.md) -
Видаляє іменований профіль зображення та повертає його
- [Imagick::render](imagick.render.md) — Показує всі попередні
команди малювання
- [Imagick::resampleImage](imagick.resampleimage.md) — Перетворює
зображення до бажаного дозволу
- [Imagick::resetImagePage](imagick.resetimagepage.md) — Скидає
сторінку зображення
- [Imagick::resizeImage](imagick.resizeimage.md) - Масштабує
зображення
- [Imagick::rollImage](imagick.rollimage.md) — Зміщення зображення
- [Imagick::rotateImage](imagick.rotateimage.md) - Повертає
зображення
- [Imagick::rotationalBlurImage](imagick.rotationalblurimage.md) -
Застосовує обертальне розмиття до зображення
- [Imagick::roundCorners](imagick.roundcorners.md) — Скруглює кути
зображення
- [Imagick::sampleImage](imagick.sampleimage.md) — Масштабує
зображення з піксельною вибіркою
- [Imagick::scaleImage](imagick.scaleimage.md) — Масштабує розмір
зображення
- [Imagick::segmentImage](imagick.segmentimage.md) - Сегментує
зображення
- [Imagick::selectiveBlurImage](imagick.selectiveblurimage.md) -
Опис
- [Imagick::separateImageChannel](imagick.separateimagechannel.md) -
Відокремлює канал від зображення
- [Imagick::sepiaToneImage](imagick.sepiatoneimage.md) — Тонування
зображення сепією
- [Imagick::setBackgroundColor](imagick.setbackgroundcolor.md) -
Встановлює колір фону за замовчуванням об'єкта
- [Imagick::setColorspace](imagick.setcolorspace.md) — Встановлює
колірний простір
- [Imagick::setCompression](imagick.setcompression.md) -
Встановлює тип стиснення об'єкта за замовчуванням
- [Imagick::setCompressionQuality](imagick.setcompressionquality.md)
— Встановлює якість стандартного стиснення об'єкта
- [Imagick::setFilename](imagick.setfilename.md) — Встановлює ім'я
файлу перед читанням або записуванням зображення
- [Imagick::setFirstIterator](imagick.setfirstiterator.md) -
Встановлює ітератор Imagick для першого зображення
- [Imagick::setFont](imagick.setfont.md) — Встановлює шрифт
- [Imagick::setFormat](imagick.setformat.md) — Встановлює формат
об'єкту Imagick
- [Imagick::setGravity](imagick.setgravity.md) — Встановлює
гравітацію
- [Imagick::setImage](imagick.setimage.md) — Замінює зображення на
об'єкті
- [Imagick::setImageAlphaChannel](imagick.setimagealphachannel.md) -
Встановлює альфа-канал зображення
- [Imagick::setImageArtifact](imagick.setimageartifact.md) -
Встановлює артефакт зображення
- [Imagick::setImageAttribute](imagick.setimageattribute.md) -
Встановлює атрибут зображення
- [Imagick::setImageBackgroundColor](imagick.setimagebackgroundcolor.md)
— Встановлює колір тла зображення
- [Imagick::setImageBias](imagick.setimagebias.md) - Встановлює
зміщення зображення для будь-якого методу, який згортає
зображення
- [Imagick::setImageBiasQuantum](imagick.setimagebiasquantum.md) -
Опис
- [Imagick::setImageBluePrimary](imagick.setimageblueprimary.md) -
Встановлює кольоровість зображення блакитною основною точкою
- [Imagick::setImageBorderColor](imagick.setimagebordercolor.md) -
Встановлює колір рамки зображення
- [Imagick::setImageChannelDepth](imagick.setimagechanneldepth.md) -
Встановлює глибину певного каналу зображення
- [Imagick::setImageClipMask](imagick.setimageclipmask.md) -
Встановлює маску кліпу
- [Imagick::setImageColormapColor](imagick.setimagecolormapcolor.md)
— Встановлює колір вказаного індексу картки
- [Imagick::setImageColorspace](imagick.setimagecolorspace.md) -
Встановлює колірний простір зображення
- [Imagick::setImageCompose](imagick.setimagecompose.md) -
Встановлює оператор складеного зображення
- [Imagick::setImageCompression](imagick.setimagecompression.md) -
Встановлює стиснення зображення
- [Imagick::setImageCompressionQuality](imagick.setimagecompressionquality.md)
— Встановлює якість стиснення зображення
- [Imagick::setImageDelay](imagick.setimagedelay.md) — Встановлює
затримку зображення
- [Imagick::setImageDepth](imagick.setimagedepth.md) — Встановлює
глибину зображення
- [Imagick::setImageDispose](imagick.setimagedispose.md) -
Встановлює спосіб видалення зображення
- [Imagick::setImageExtent](imagick.setimageextent.md) -
Встановлює розмір зображення
- [Imagick::setImageFilename](imagick.setimagefilename.md) -
Встановлює ім'я конкретного файлу.
- [Imagick::setImageFormat](imagick.setimageformat.md) -
Встановлює формат певного зображення
- [Imagick::setImageGamma](imagick.setimagegamma.md) — Встановлює
гаму зображення
- [Imagick::setImageGravity](imagick.setimagegravity.md) -
Встановлює гравітацію зображення
- [Imagick::setImageGreenPrimary](imagick.setimagegreenprimary.md) -
Встановлює кольоровість зображення зеленою первинною точкою
- [Imagick::setImageIndex](imagick.setimageindex.md) — Встановлює
позицію ітератора
- [Imagick::setImageInterlaceScheme](imagick.setimageinterlacescheme.md)
— Встановлює стиснення зображення
- [Imagick::setImageInterpolateMethod](imagick.setimageinterpolatemethod.md)
— Встановлює метод інтерполяції пікселів зображення
- [Imagick::setImageIterations](imagick.setimageiterations.md) -
Встановлює ітерацію зображення
- [Imagick::setImageMatte](imagick.setimagematte.md) — Встановлює
матовий канал зображення
- [Imagick::setImageMatteColor](imagick.setimagemattecolor.md) -
Встановлює матовий колір зображення
- [Imagick::setImageOpacity](imagick.setimageopacity.md) -
Встановлює рівень непрозорості зображення
- [Imagick::setImageOrientation](imagick.setimageorientation.md) -
Встановлює орієнтацію зображення
- [Imagick::setImagePage](imagick.setimagepage.md) — Встановлює
геометрію сторінки зображення
- [Imagick::setImageProfile](imagick.setimageprofile.md) — Додає
іменований профіль до об'єкту Imagick
- [Imagick::setImageProperty](imagick.setimageproperty.md) -
Встановлює властивість зображення
- [Imagick::setImageRedPrimary](imagick.setimageredprimary.md) -
Встановлює червону первинну точку кольоровості зображення
- [Imagick::setImageRenderingIntent](imagick.setimagerenderingintent.md)
— Встановлює схему передачі кольору зображення
- [Imagick::setImageResolution](imagick.setimageresolution.md) -
Встановлює роздільну здатність зображення
- [Imagick::setImageScene](imagick.setimagescene.md) — Встановлює
сцену зображення
- [Imagick::setImageTicksPerSecond](imagick.setimagetickspersecond.md)
— Встановлює тривалість відображення кадру
- [Imagick::setImageType](imagick.setimagetype.md) — Встановлює
тип зображення
- [Imagick::setImageUnits](imagick.setimageunits.md) — Встановлює
одиниці вимірювання роздільної здатності зображення
- [Imagick::setImageVirtualPixelMethod](imagick.setimagevirtualpixelmethod.md)
- Встановлює метод віртуального пікселя
- [Imagick::setImageWhitePoint](imagick.setimagewhitepoint.md) -
Встановлює білу точку кольору зображення
- [Imagick::setInterlaceScheme](imagick.setinterlacescheme.md) -
Встановлює стиснення зображення
- [Imagick::setIteratorIndex](imagick.setiteratorindex.md) -
Встановлює позицію ітератора
- [Imagick::setLastIterator](imagick.setlastiterator.md) -
Встановлює ітератор Imagick до останнього зображення
- [Imagick::setOption](imagick.setoption.md) — Встановлює опцію
- [Imagick::setPage](imagick.setpage.md) — Встановлює геометрію
сторінки об'єкту Imagick
- [Imagick::setPointSize](imagick.setpointsize.md) — Встановлює
розмір точки
- [Imagick::setProgressMonitor](imagick.setprogressmonitor.md) -
Встановлює callback-функцію, яка буде викликатись під час
обробки зображення Imagick
- [Imagick::setRegistry](imagick.setregistry.md) — Опис
- [Imagick::setResolution](imagick.setresolution.md) — Встановлює
роздільна здатність зображення
- [Imagick::setResourceLimit](imagick.setresourcelimit.md) -
Встановлює ліміт для конкретного ресурсу
- [Imagick::setSamplingFactors](imagick.setsamplingfactors.md)
Встановлює коефіцієнти вибірки зображень
- [Imagick::setSize](imagick.setsize.md) — Встановлює розмір
об'єкту Imagick
- [Imagick::setSizeOffset](imagick.setsizeoffset.md) — Встановлює
розмір та усунення об'єкту Imagick
- [Imagick::setType](imagick.settype.md) — Встановлює атрибут
типу зображення
- [Imagick::shadeImage](imagick.shadeimage.md) — Створює 3D-ефект
- [Imagick::shadowImage](imagick.shadowimage.md) - Імітує тінь
зображення
- [Imagick::sharpenImage](imagick.sharpenimage.md) - Підвищує
різкість зображення
- [Imagick::shaveImage](imagick.shaveimage.md) — Видаляє пікселі за
краях зображення
- [Imagick::shearImage](imagick.shearimage.md) — Створює
паралелограм
- [Imagick::sigmoidalContrastImage](imagick.sigmoidalContrastimage.md)
- Регулює контраст зображення
- [Imagick::sketchImage](imagick.sketchimage.md) - Імітує
малюнок олівцем
- [Imagick::smushImages](imagick.smushimages.md) — Опис
- [Imagick::solarizeImage](imagick.solarizeimage.md) — Застосовує до
зображення ефект соляризації
- [Imagick::sparseColorImage](imagick.sparsecolorimage.md) -
Інтерполує кольори
- [Imagick::spliceImage](imagick.spliceimage.md) — Склеює
суцільний колір у зображення
- [Imagick::spreadImage](imagick.spreadimage.md) — Випадково зміщує
кожен піксель у блоці
- [Imagick::statisticImage](imagick.statisticimage.md) — Опис
- [Imagick::steganoImage](imagick.steganoimage.md) - Приховує
цифровий водяний знак у зображенні
- [Imagick::stereoImage](imagick.stereoimage.md) — Об'єднує два
зображення
- [Imagick::stripImage](imagick.stripimage.md) — Знімає зображення
всіх профілів та коментарів
- [Imagick::subImageMatch](imagick.subimagematch.md) — Опис
- [Imagick::swirlImage](imagick.swirlimage.md) — Закручує пікселі
навколо центру зображення
- [Imagick::textureImage](imagick.textureimage.md) - Багаторазово
розміщує зображення текстури
- [Imagick::thresholdImage](imagick.thresholdimage.md) — Змінює
окремі пікселі на основі порогового значення
- [Imagick::thumbnailImage](imagick.thumbnailimage.md) — Змінює
розмір зображення
- [Imagick::tintImage](imagick.tintimage.md) — Застосовує вектор
кольори до кожного пікселя зображення
- [Imagick::\_\_toString](imagick.tostring.md) - Повертає
зображення у вигляді рядка
- [Imagick::transformImage](imagick.transformimage.md) - Зручний
метод налаштування розміру кадрування та геометрії зображення
- [Imagick::transformImageColorspace](imagick.transformimagecolorspace.md)
— Перетворює зображення на новий колірний простір
- [Imagick::transparentPaintImage](imagick.transparentpaintimage.md)
— Малює пікселі прозорими
- [Imagick::transposeImage](imagick.transposeimage.md) — Створює
вертикальне дзеркальне відображення
- [Imagick::transverseImage](imagick.transverseimage.md) — Створює
горизонтальне дзеркальне відображення
- [Imagick::trimImage](imagick.trimimage.md) — Видаляє краї з
зображення
- [Imagick::uniqueImageColors](imagick.uniqueimagecolors.md)
Відкидає все, крім одного, будь-якого кольору пікселя
- [Imagick::unsharpMaskImage](imagick.unsharpmaskimage.md)
Різкість зображення
- [Imagick::valid](imagick.valid.md) — Перевіряє, чи є
поточний елемент коректним
- [Imagick::vignetteImage](imagick.vignetteimage.md) — Додає
віньєтний фільтр до зображення
- [Imagick::waveImage](imagick.waveimage.md) — Застосовує хвильовий
фільтр до зображення
- [Imagick::whiteThresholdImage](imagick.whitethresholdimage.md) -
Зафарбовує всі пікселі вище за поріг у білий
- [Imagick::writeImage](imagick.writeimage.md) - Записує
зображення за вказаним ім'ям файлу
- [Imagick::writeImageFile](imagick.writeimagefile.md) - Записує
зображення у файл
- [Imagick::writeImages](imagick.writeimages.md) - Записує
зображення або послідовність зображень
- [Imagick::writeImagesFile](imagick.writeimagesfile.md) -
Записує кадри у файловий дескриптор
