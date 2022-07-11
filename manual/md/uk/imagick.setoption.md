- [« Imagick::setLastIterator](imagick.setlastiterator.md)
- [Imagick::setPage »](imagick.setpage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює опцію

# Imagick::setOption

(PECL imagick 2, PECL imagick 3)

Imagick::setOption — Встановлює опцію

### Опис

public **Imagick::setOption**(string `$key`, string `$value`): bool

Зв'язує одну або кілька опцій із паличкою.

### Список параметрів

`key`

`value`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Спроба досягти розміру '$extent' **Imagick::setOption()****

` <?php     function renderJPG($extent) {        $imagePath u003d $this->control->getImagePath(); $imagick u003d new \Imagick(realpath($imagePath)); $imagick->setImageFormat('jpg'); $imagick->setOption('jpeg:extent', $extent); header("Content-Type: image/jpg"); echo $imagick->getImageBlob(); }?> `

**Приклад #2 Приклад використання **Imagick::setOption()****

` <?php    function renderPNG($imagePath, $format) {        $imagick u003d new \Imagick(realpath($imagePath)); $imagick->setImageFormat('png'); $imagick->setOption('png:format', $format); header("Content-Type: image/png"); echo $imagick->getImageBlob(); }    //Збереження в виді 64bit PNG. renderPNG($imagePath, 'png64');?> `

**Приклад #3 Приклад використання **Imagick::setOption()****

` <?php    function renderCustomBitDepthPNG() {        $imagePath u003d $this->control->getImagePath(); $imagick u003d new \Imagick(realpath($imagePath)); $imagick->setImageFormat('png'); $imagick->setOption('png:bit-depth', '16'); $imagick->setOption('png:color-type', 6); header("Content-Type: image/png"); $crashu003du003dtrue; if ($crash) {             echo $imagick->getImageBlob(); }||||||||||| $imagick->writeimage(realpath($tempFilename)); echo file_get_contents($tempFilename); }    }?> `
