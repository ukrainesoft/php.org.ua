- [«Imagick::current](imagick.current.md)
- [Imagick::decipherImage »](imagick.decipherimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Відображає колірну карту зображення

# Imagick::cycleColormapImage

(PECL imagick 2, PECL imagick 3)

Imagick::cycleColormapImage — Відображає колірну карту зображення

### Опис

public **Imagick::cycleColormapImage**(int `$displace`): bool

Зміщує колірну карту зображення на задану кількість позицій. Якщо
ви циклічно змінюєте колірну карту кілька разів, ви можете
зробити психоделічний ефект.

### Список параметрів

`displace`
Кількість для усунення колірної карти.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
