- [«Константи перерахувань](language.enumerations.constants.md)
- [Значення перерахування у постійних виразах
»](language.enumerations.expressions.md)

- [PHP Manual](index.md)
- [Перерахування](language.enumerations.md)
- Трейти

## Трейти

Переліки можуть використовувати трейти, які будуть поводитися так само,
як і класи. Застереження полягає в тому, що трейти,
використовуються (`use`) у перерахунку не повинні містити властивостей. Вони
можуть включати лише методи та статичні методи. Трейт із властивостями
призведе до фатальної помилки.

`<?phpinterface Colorful{    public function color(): string;}trait Rectangle{    public function shape(): string {        return "; }}enum Suit implements Colorful{    useuse Rectangle; case Hearts; case Diamonds; case Clubs; case Spades; public function color(): string    {        return match($this) {            Suit::Hearts, Suit::Diamonds u003d> 'Красный',            Suit::Clubs, Suit::Spades u003d> 'Чёрный',        }; }}?> `
