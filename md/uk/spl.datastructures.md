- [«Зумовлені константи](spl.constants.md)
- [SplDoublyLinkedList »](class.spldoublylinkedlist.md)

- [PHP Manual](index.md)
- [SPL](book.spl.md)
- структури даних

# Структури даних

## Зміст

- [SplDoublyLinkedList](class.spldoublylinkedlist.md)
- [SplStack](class.splstack.md)
- [SplQueue](class.splqueue.md)
- [SplHeap](class.splheap.md)
- [SplMaxHeap](class.splmaxheap.md)
- [SplMinHeap](class.splminheap.md)
- [SplPriorityQueue](class.splpriorityqueue.md)
- [SplFixedArray](class.splfixedarray.md)
- [SplObjectStorage](class.splobjectstorage.md)

SPL надає набір стандартних структур даних. Вони згруповані
тут за своєю базовою реалізацією, яка зазвичай визначає їх загальну
галузь застосування.

## Двозв'язні списки

Двозв'язний список (DLL) – це список вузлів, пов'язаних в обох
напрямки один з одним. Операції ітератора, доступ до обох кінців,
додавання або видалення вузлів вартістю O(1), коли основна структура
є DLL. Отже, вони забезпечує хорошу реалізацію для
стеків та черг.

- [SplDoublyLinkedList](class.spldoublylinkedlist.md)
- [SplStack](class.splstack.md)
- [SplQueue](class.splqueue.md)

## Купи

Купи - це деревоподібні структури, які наслідують властивості купи: кожен
вузол більше або дорівнює своїм нащадкам, при цьому для порівняння
використовується впроваджений метод порівняння, який є спільним для всієї
купи.

- [SplHeap](class.splheap.md)
- [SplMaxHeap](class.splmaxheap.md)
- [SplMinHeap](class.splminheap.md)
- [SplPriorityQueue](class.splpriorityqueue.md)

## Масиви

Масиви - структури, які зберігають дані у безперервному вигляді, доступні
через індекси. Не плутайте їх з масивами PHP: останні насправді
реалізовані як упорядкованих хеш-таблиц.

- [SplFixedArray](class.splfixedarray.md)

## Мапа

Карта - це структура даних, що містить пари ключ-значення. Масиви PHP
можна розглядати як карти, що відображають цілі/рядкові дані в них
значення. SPL надає карту, яка відображає об'єкти даних. Ця
карта також може бути використана як багато об'єктів.

- [SplObjectStorage](class.splobjectstorage.md)
