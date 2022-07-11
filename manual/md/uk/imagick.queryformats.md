- [« Imagick::queryFonts](imagick.queryfonts.md)
- [Imagick::radialBlurImage »](imagick.radialblurimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає формати, що підтримуються Imagick

# Imagick::queryFormats

(PECL imagick 2, PECL imagick 3)

Imagick::queryFormats — Повертає формати, які підтримує Imagick

### Опис

public static **Imagick::queryFormats**(string `$pattern` u003d "\*"): array

Повертає формати Imagick.

### Список параметрів

`pattern`

### Значення, що повертаються

Повертає масив, що містить формати, що підтримуються Imagick.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::queryFormats()****

` <?php    function render() {        $output u003d ""; $inputu003du003dImagick::queryformats(); $ columns u003d u003d 6; $output.u003du003d"<table|borderu003d'2'>"; for ($iu003d0; $i < count($input); $i +u003d $columns) {            $output .u003d "<tr>"; for ($cu003d0;$c<$columns;$c++) {                $output .u003d "<td>"; if (($i + $c) <  count($input)) {                    $output .u003d $input[$i + $c]; }                  $output .u003d "</td>"; }             $output .u003d "</tr>"; }        $output .u003d "</table>"; return $output; }?> `
