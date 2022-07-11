- [«CachingIterator::valid](cachingiterator.valid.md)
- [CallbackFilterIterator::accept
»](callbackfilteriterator.accept.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас CallbackFilterIterator

# Клас CallbackFilterIterator

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

## Вступ

## Огляд класів

class **CallbackFilterIterator** extends
[FilterIterator](class.filteriterator.md) {

/\* Методи \*/

public
[\_\_construct](callbackfilteriterator.construct.md)([Iterator](class.iterator.md)
`$iterator`, [callable](language.types.callable.md) `$callback`)

public [accept](callbackfilteriterator.accept.md)(): bool

/\* Наслідувані методи \*/

public [FilterIterator::accept](filteriterator.accept.md)(): bool

public [FilterIterator::current](filteriterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[FilterIterator::getInnerIterator](filteriterator.getinneriterator.md)():
[Iterator](class.iterator.md)

public [FilterIterator::key](filteriterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [FilterIterator::next](filteriterator.next.md)(): void

public [FilterIterator::rewind](filteriterator.rewind.md)(): void

public [FilterIterator::valid](filteriterator.valid.md)(): bool

public [IteratorIterator::current](iteratoriterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[IteratorIterator::getInnerIterator](iteratoriterator.getinneriterator.md)():
?[Iterator](class.iterator.md)

public [IteratorIterator::key](iteratoriterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [IteratorIterator::next](iteratoriterator.next.md)(): void

public [IteratorIterator::rewind](iteratoriterator.rewind.md)(): void

public [IteratorIterator::valid](iteratoriterator.valid.md)(): bool

}

## Приклади

Callback-функція може приймати до трьох аргументів: поточний елемент,
поточний ключ та ітератор відповідно.

**Приклад #1 Доступні аргументи зворотного виклику**

` <?php/** * Callback-функция для CallbackFilterIterator * * @param $current   Значение текущего элемента * @param $key       Ключ текущего элемента * @param $iterator  Фильтруемый итератор * @return boolean   TRUE для принятия текущего элемента, иначе - FALSE */function my_callback($current, $key, $iterator) {    // Код фільтрації}?> `

Будь-яка callback-функція типу [callable](language.types.callable.md)
може бути використана. Наприклад, рядок, що містить ім'я функції,
масив для методу чи анонімна функція.

**Приклад #2 Основні приклади зворотного виклику**

` <?php$dir u003d new FilesystemIterator(__DIR__);// Фільтр великих файлів ( > 100MB)function is_large_file($current) {    return $current->isFile() >8 large_files u003d new CallbackFilterIterator($dir, 'is_large_file');// Фільтр каталогів$files u003d new CallbackFilterIterator($dir, function ($current, $key, $  &$         ¦     ¦         ¦   | ->isDot();});?> `

## Зміст

- [CallbackFilterIterator::accept](callbackfilteriterator.accept.md)
— Викликає callback-функцію та передає їй як аргументи
поточне значення, поточний ключ та внутрішній покажчик
- [CallbackFilterIterator::\_\_construct](callbackfilteriterator.construct.md)
— Створює фільтруючий ітератор на основі іншого ітератора
