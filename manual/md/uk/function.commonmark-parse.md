- [« Функції CommonMark](ref.cmark.md)
- [CommonMark\Render »](function.commonmark-render.md)

- [PHP Manual](index.md)
- [Функції CommonMark](ref.cmark.md)
- Розбір

# CommonMark \ Parse

(cmark \>u003d 1.0.0)

CommonMark \ Parse - Розбір

### Опис

**CommonMark\Parse**(string `$content`, int `$options` u003d ?):
[CommonMark\Node](class.commonmark-node.md)

Розбирає `content`

### Список параметрів

`content`
Рядок markdown

`options`
Маска з:

**`CommonMark\Parser\Normal`** (int)

**`CommonMark\Parser\Normalize`** (int)

**`CommonMark\Parser\ValidateUTF8`** (int)

**`CommonMark\Parser\Smart`** (int)

### Значення, що повертаються

Поверне кореневий (root) вузол CommonMark\Node
