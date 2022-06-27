- [« SplObjectStorage::detach](splobjectstorage.detach.md)
- [SplObjectStorage::getInfo »](splobjectstorage.getinfo.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- обчислює унікальний ідентифікатор для об'єктів контейнера

# SplObjectStorage::getHash

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SplObjectStorage::getHash — Обчислює унікальний ідентифікатор для
об'єктів контейнера

### Опис

public **SplObjectStorage::getHash**(object `$object`): string

Метод обчислює унікальний ідентифікатор для об'єктів, що додаються
контейнер [SplObjectStorage](class.splobjectstorage.md).

Реалізація [SplObjectStorage](class.splobjectstorage.md) повертає щось
ж значення, як і функція
[spl_object_hash()](function.spl-object-hash.md).

В одному контейнері ніколи не з'явиться двох об'єктів з однаковими
ідентифікаторами. Таким чином, за допомогою контейнера можна реалізувати
безліч (колекцію значень, кожне з яких представлене в
єдиному примірнику), в якому унікальність об'єктів буде
визначатись цим ідентифікатором.

### Список параметрів

`object`
Об'єкт, ідентифікатор якого потрібно обчислити.

### Значення, що повертаються

Рядок string з результатом обчислення.

### Помилки

Метод викидає виняток
[RuntimeException](class.runtimeexception.md), коли тип повертається
Значення не є рядком (string).

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::getHash()****

`<?phpclass OneSpecimenPerClassStorage extends SplObjectStorage {    public function getHash($o) {       return get_class($o); }}class A {}$s u003d new OneSpecimenPerClassStorage;$o1 u003d new stdClass;$o2 u003d new stdClass;$o3 u003d new A;$s[$o1] u003d 1;//$  заміщується$s[$o2] u003d 2;$s[$o3] u003d 3;//передбачаємо, наступні об'єкти еквівалентні наведеним вище//таким образом, их можна використовувати для $      u003d new A;echo $s[$p1], "
";echo $s[$p2], "
";?> `

Результатом виконання цього прикладу буде щось подібне:

2
3

### Дивіться також

- [spl_object_hash()](function.spl-object-hash.md) - Повертає
хеш-ідентифікатор для об'єкту
