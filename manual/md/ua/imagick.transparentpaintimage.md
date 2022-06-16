- [«
Imagick::transformImageColorspace](imagick.transformimagecolorspace.md)
- [Imagick::transposeImage »](imagick.transposeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Малює пікселі прозорими

# Imagick::transparentPaintImage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::transparentPaintImage — Малює пікселі прозорими

### Опис

public **Imagick::transparentPaintImage**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$target`,
float `$alpha`,
float `$fuzz`,
bool `$invert`
): bool

Малює пікселі, що відповідають цільовому кольору, прозорим. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.3.8 або
старше.

### Список параметрів

`target`
Цільовий колір для малювання

`alpha`
Рівень прозорості: 1.0 повністю непрозорий, тоді як 0.0
повністю прозорий.

`fuzz`
Міра заокруглення (fuzz). Наприклад, встановіть значення fuzz в 10 і
червоний колір з інтенсивністю 100 та 102 буде інтерпретуватися як
той самий колір.

`invert`
Якщо **`true`**, зафарбовує будь-який піксель, який не відповідає
цільового кольору.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::transparentPaintImage()****

` <?phpfunction transparentPaintImage($color, $alpha, $fuzz) {    $imagick u003d new \Imagick(realpath("images/BlueScreen.jpg")); //Мовен бути в форматі, підтримує прозорість    $imagick->setimageformat('png'); $imagick->transparentPaintImage(        $color, $alpha, $fuzz * \Imagick::getQuantum(), false    ); //Не потрібно, але допомагає прибирати залишені пікселі    $imagick->despeckleimage(); header("Content-Type: image/png"); echo $imagick->getImageBlob();}?> `
