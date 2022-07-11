- [«EventBuffer::search](eventbuffer.search.md)
- [EventBuffer::substr »](eventbuffer.substr.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Сканує буфер на наявність кінця рядка

# EventBuffer::searchEol

(PECL event \>u003d 1.5.0)

EventBuffer::searchEol — Сканує буфер на наявність кінця рядка

### Опис

public **EventBuffer::searchEol**( int `$start` u003d -1 , int `$eol_style`
u003d **`EventBuffer::EOL_ANY`** ):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Сканує буфер на наявність кінця рядка, вказаного параметром
`eol_style`. Повертає числову позицію рядка або **`false`**, якщо
рядок не було знайдено.

Якщо вказано аргумент `start`, він представляє позицію, з якою повинен
розпочинатися пошук; інакше пошук виконується з початку рядка.
Якщо вказано аргумент `end`, пошук виконується між початковою та кінцевою
позиціями буфера.

### Список параметрів

`start`
Start search position.

`eol_style`
Один з [EventBuffer:EOL\_\*
констант](class.eventbuffer.md#eventbuffer.constants) .

### Значення, що повертаються

Повертає числову позицію першого входження символу кінця рядка в
буфер або **`false`**, якщо не знайдено.

**Увага**

Ця функція може повертати як логічне значення **`false`**, так і
значення не типу boolean, яке наводиться до **`false`**. Більше
Детальну інформацію див. у розділі [Булев
тип](language.types.boolean.md). Використовуйте [оператор
u003du003du003d](language.operators.comparison.md) для перевірки значення,
повертається цією функцією.

### Дивіться також

- [EventBuffer::search()](eventbuffer.search.md) - Сканує буфер
на наявність рядка
