- [«
UI\Draw\Text\Font::getUnderlineThickness](ui-draw-text-font.getunderlinethickness.md)
- [UI\Draw\Text\Font\Descriptor::\_\_construct
»](ui-draw-text-font-descriptor.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Дескриптор шрифту

# Дескриптор шрифту

(UI 0.9.9)

## Вступ

Описує шрифт

## Огляд класів

class **UI\Draw\Text\Font\Descriptor** {

/\* Конструктор \*/

public [\_\_construct](ui-draw-text-font-descriptor.construct.md)(
string `$family`,
float `$size`,
int `$weight` u003d UI\Draw\Text\Font\Weight::Normal,
int `$italic` u003d UI\Draw\Text\Font\Italic::Normal,
int `$stretch` u003d UI\Draw\Text\Font\Stretch::Normal
)

/\* Методи \*/

public [getFamily](ui-draw-text-font-descriptor.getfamily.md)():
string

public [getItalic](ui-draw-text-font-descriptor.getitalic.md)(): int

public [getSize](ui-draw-text-font-descriptor.getsize.md)(): float

public [getStretch](ui-draw-text-font-descriptor.getstretch.md)(): int

public [getWeight](ui-draw-text-font-descriptor.getweight.md)(): int

}

## Зміст

- [UI\Draw\Text\Font\Descriptor::\_\_construct](ui-draw-text-font-descriptor.construct.md)
- Конструктор класу Font Descriptor
- [UI\Draw\Text\Font\Descriptor::getFamily](ui-draw-text-font-descriptor.getfamily.md)
— Отримує сімейство шрифтів
- [UI\Draw\Text\Font\Descriptor::getItalic](ui-draw-text-font-descriptor.getitalic.md)
— Визначення стилю
- [UI\Draw\Text\Font\Descriptor::getSize](ui-draw-text-font-descriptor.getsize.md)
- Визначення розміру
- [UI\Draw\Text\Font\Descriptor::getStretch](ui-draw-text-font-descriptor.getstretch.md)
— Визначення стилю
- [UI\Draw\Text\Font\Descriptor::getWeight](ui-draw-text-font-descriptor.getweight.md)
- Визначення насиченості
