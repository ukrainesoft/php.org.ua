- [«
RecursiveCachingIterator::hasChildren](recursivecachingiterator.haschildren.md)
- [RecursiveCallbackFilterIterator::\_\_construct
»](recursivecallbackfilteriterator.construct.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас RecursiveCallbackFilterIterator

# Клас RecursiveCallbackFilterIterator

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

## Вступ

## Огляд класів

class **RecursiveCallbackFilterIterator** extends
[CallbackFilterIterator](class.callbackfilteriterator.md) implements
[RecursiveIterator](class.recursiveiterator.md) {

/\* Методи \*/

public
[\_\_construct](recursivecallbackfilteriterator.construct.md)([RecursiveIterator](class.recursiveiterator.md)
`$iterator`, [callable](language.types.callable.md) `$callback`)

public
[getChildren](recursivecallbackfilteriterator.getchildren.md)():
[RecursiveCallbackFilterIterator](class.recursivecallbackfilteriterator.md)

public
[hasChildren](recursivecallbackfilteriterator.haschildren.md)(): bool

/\* Наслідувані методи \*/

public
[CallbackFilterIterator::accept](callbackfilteriterator.accept.md)():
bool

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
поточний ключ та ітератор, відповідно.

**Приклад #1 Доступні аргументи callback-функції**

` <?php/** * Callback-функция для RecursiveCallbackFilterIterator * * @param $current   Значение текущего элемента * @param $key       Ключ текущего элемента * @param $iterator  Итератор, который фильтруется * @return boolean   TRUE для приёма текущего элемента или FALSE - в іншому випадку. */function my_callback($current, $key, $iterator) {    // Тут ваш код фільтрації}?> `

Фільтрація рекурсивного ітератора зазвичай включає дві умови.
Перше у тому, щоб дозволити рекурсію. Callback-функція
повинна повертати **`true`**, якщо поточний елемент ітератора має
нащадків. Друге – це нормальна умова фільтра, наприклад, перевірка
розмір файлу або розширення, як у прикладі нижче.

**Приклад #2 Простий приклад рекурсивного зворотного виклику**

` <?php$dir u003d new RecursiveDirectoryIterator(__DIR__);// Фильтр больших файлов ( > 100MB)$files u003d new RecursiveCallbackFilterIterator($dir, function ($current, $key, $iterator) {    // Разрешить рекурсию    if ($ iterator->hasChildren()) {        return TRUE;    }    // Проверка больших файлов    if ($current->isFile() && $current->getSize() > 104857600) {        return TRUE;    }    return FALSE;});foreach ( new RecursiveIteratorIterator($files) as $file) {    echo $file->getPathname() . PHP_EOL;}?> `

## Зміст

- [RecursiveCallbackFilterIterator::\_\_construct](recursivecallbackfilteriterator.construct.md)
— Створює об'єкт класу RecursiveCallbackFilterIterator на основі
об'єкта RecursiveIterator
- [RecursiveCallbackFilterIterator::getChildren](recursivecallbackfilteriterator.getchildren.md)
— Повертає дочірні елементи ітератора, що зберігається всередині
RecursiveCallbackFilterIterator
- [RecursiveCallbackFilterIterator::hasChildren](recursivecallbackfilteriterator.haschildren.md)
— Перевіряє, чи містить елемент внутрішнього ітератора.
дочірні елементи
