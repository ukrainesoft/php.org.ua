- [«
RecursiveRegexIterator::hasChildren](recursiveregexiterator.haschildren.md)
- [RecursiveTreeIterator::beginChildren
»](recursivetreeiterator.beginchildren.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас RecursiveTreeIterator

# Клас RecursiveTreeIterator

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Дозволяє виробляти ітерації з
[RecursiveIterator](class.recursiveiterator.md) для створення
графічного дерева в ASCII.

## Огляд класів

class **RecursiveTreeIterator** extends
[RecursiveIteratorIterator](class.recursiveiteratoriterator.md) {

/\* Успадковані константи \*/

const int `RecursiveIteratorIterator::LEAVES_ONLY` u003d 0;

const int `RecursiveIteratorIterator::SELF_FIRST` u003d 1;

const int `RecursiveIteratorIterator::CHILD_FIRST` u003d 2;

const int `RecursiveIteratorIterator::CATCH_GET_CHILD` u003d 16;

/\* Константи \*/

const int `BYPASS_CURRENT` u003d 4;

const int `BYPASS_KEY` u003d 8;

const int `PREFIX_LEFT` u003d 0;

const int `PREFIX_MID_HAS_NEXT` u003d 1;

const int `PREFIX_MID_LAST` u003d 2;

const int `PREFIX_END_HAS_NEXT` u003d 3;

const int `PREFIX_END_LAST` u003d 4;

const int `PREFIX_RIGHT` u003d 5;

/\* Методи \*/

public [\_\_construct](recursivetreeiterator.construct.md)(
[RecursiveIterator](class.recursiveiterator.md)\|[IteratorAggregate](class.iteratoraggregate.md)
`$iterator`,
int `$flags` u003d RecursiveTreeIterator::BYPASS_KEY,
int `$cachingIteratorFlags` u003d CachingIterator::CATCH_GET_CHILD,
int `$mode` u003d RecursiveTreeIterator::SELF_FIRST
)

public [beginChildren](recursivetreeiterator.beginchildren.md)(): void

public [beginIteration](recursivetreeiterator.beginiteration.md)():
[RecursiveIterator](class.recursiveiterator.md)

public [callGetChildren](recursivetreeiterator.callgetchildren.md)():
[RecursiveIterator](class.recursiveiterator.md)

public [callHasChildren](recursivetreeiterator.callhaschildren.md)():
bool

public [current](recursivetreeiterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [endChildren](recursivetreeiterator.endchildren.md)(): void

public [endIteration](recursivetreeiterator.enditeration.md)(): void

public [getEntry](recursivetreeiterator.getentry.md)(): string

public [getPostfix](recursivetreeiterator.getpostfix.md)(): string

public [getPrefix](recursivetreeiterator.getprefix.md)(): string

public [key](recursivetreeiterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [next](recursivetreeiterator.next.md)(): void

public [nextElement](recursivetreeiterator.nextelement.md)(): void

public [rewind](recursivetreeiterator.rewind.md)(): void

public [setPostfix](recursivetreeiterator.setpostfix.md)(string
`$postfix`): void

public [setPrefixPart](recursivetreeiterator.setprefixpart.md)(int
`$part`, string `$value`): void

public [valid](recursivetreeiterator.valid.md)(): bool

/\* Наслідувані методи \*/

public
[RecursiveIteratorIterator::beginChildren](recursiveiteratoriterator.beginchildren.md)():
void

public
[RecursiveIteratorIterator::beginIteration](recursiveiteratoriterator.beginiteration.md)():
void

public
[RecursiveIteratorIterator::callGetChildren](recursiveiteratoriterator.callgetchildren.md)():
?[RecursiveIterator](class.recursiveiterator.md)

public
[RecursiveIteratorIterator::callHasChildren](recursiveiteratoriterator.callhaschildren.md)():
bool

public
[RecursiveIteratorIterator::current](recursiveiteratoriterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[RecursiveIteratorIterator::endChildren](recursiveiteratoriterator.endchildren.md)():
void

public
[RecursiveIteratorIterator::endIteration](recursiveiteratoriterator.enditeration.md)():
void

public
[RecursiveIteratorIterator::getDepth](recursiveiteratoriterator.getdepth.md)():
int

public
[RecursiveIteratorIterator::getInnerIterator](recursiveiteratoriterator.getinneriterator.md)():
[RecursiveIterator](class.recursiveiterator.md)

public
[RecursiveIteratorIterator::getMaxDepth](recursiveiteratoriterator.getmaxdepth.md)():
int\|false

public
[RecursiveIteratorIterator::getSubIterator](recursiveiteratoriterator.getsubiterator.md)(?int
`$level` u003d **`null`**):
?[RecursiveIterator](class.recursiveiterator.md)

public
[RecursiveIteratorIterator::key](recursiveiteratoriterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[RecursiveIteratorIterator::next](recursiveiteratoriterator.next.md)():
void

public
[RecursiveIteratorIterator::nextElement](recursiveiteratoriterator.nextelement.md)():
void

public
[RecursiveIteratorIterator::rewind](recursiveiteratoriterator.rewind.md)():
void

public
[RecursiveIteratorIterator::setMaxDepth](recursiveiteratoriterator.setmaxdepth.md)(int
`$maxDepth` u003d -1): void

public
[RecursiveIteratorIterator::valid](recursiveiteratoriterator.valid.md)():
bool

}

## Зумовлені константи

**`RecursiveTreeIterator::BYPASS_CURRENT`**

**`RecursiveTreeIterator::BYPASS_KEY`**

**`RecursiveTreeIterator::PREFIX_LEFT`**

**`RecursiveTreeIterator::PREFIX_MID_HAS_NEXT`**

**`RecursiveTreeIterator::PREFIX_MID_LAST`**

**`RecursiveTreeIterator::PREFIX_END_HAS_NEXT`**

**`RecursiveTreeIterator::PREFIX_END_LAST`**

**`RecursiveTreeIterator::PREFIX_RIGHT`**

## Зміст

- [RecursiveTreeIterator::beginChildren](recursivetreeiterator.beginchildren.md)
— Початок навігації за нащадками елемента
- [RecursiveTreeIterator::beginIteration](recursivetreeiterator.beginiteration.md)
- Початок навігації
- [RecursiveTreeIterator::callGetChildren](recursivetreeiterator.callgetchildren.md)
— Отримання дочірніх елементів
- [RecursiveTreeIterator::callHasChildren](recursivetreeiterator.callhaschildren.md)
— Перевірка, чи має поточний елемент нащадки
- [RecursiveTreeIterator::\_\_construct](recursivetreeiterator.construct.md)
- Конструктор класу RecursiveTreeIterator
- [RecursiveTreeIterator::current](recursivetreeiterator.current.md)
— Отримання поточного елемента
- [RecursiveTreeIterator::endChildren](recursivetreeiterator.endchildren.md)
— Завершення навігації за нащадками елемента
- [RecursiveTreeIterator::endIteration](recursivetreeiterator.enditeration.md)
- Завершення навігації
- [RecursiveTreeIterator::getEntry](recursivetreeiterator.getentry.md)
— Отримання піддерева, корінням якого є поточний елемент
- [RecursiveTreeIterator::getPostfix](recursivetreeiterator.getpostfix.md)
- Отримання суфікса
- [RecursiveTreeIterator::getPrefix](recursivetreeiterator.getprefix.md)
— Отримання префіксу
- [RecursiveTreeIterator::key](recursivetreeiterator.key.md) -
Отримання ключа поточного елемента
- [RecursiveTreeIterator::next](recursivetreeiterator.next.md)
Перехід до наступного елементу
- [RecursiveTreeIterator::nextElement](recursivetreeiterator.nextelement.md)
- Наступний елемент
- [RecursiveTreeIterator::rewind](recursivetreeiterator.rewind.md)
Переведення ітератора на початок
- [RecursiveTreeIterator::setPostfix](recursivetreeiterator.setpostfix.md)
- Встановлення постфіксу
- [RecursiveTreeIterator::setPrefixPart](recursivetreeiterator.setprefixpart.md)
- Завдання частини префіксу
- [RecursiveTreeIterator::valid](recursivetreeiterator.valid.md) -
Перевірка допустимості елемента
