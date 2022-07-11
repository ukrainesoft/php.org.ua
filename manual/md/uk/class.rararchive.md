- [«rar_wrapper_cache_stats](function.rar-wrapper-cache-stats.md)
- [RarArchive::close »](rararchive.close.md)

- [PHP Manual](index.md)
- [Rar](book.rar.md)
- Клас RarArchive

# Клас RarArchive

(PECL rar \>u003d 2.0.0)

## Вступ

Цей клас описує RAR архів, який може складатися з кількох
томів (частин) і містити кілька RAR записів (файли,
директорії та інші спеціальні об'єкти, такі як символічні
посилання).

Об'єкти цього класу можуть бути заповнені перебором на основі записів,
що зберігаються у відповідному RAR архіві. Ці записи можуть бути також
отримані за допомогою методів
[RarArchive::getEntry()](rararchive.getentry.md) та
[RarArchive::getEntries()](rararchive.getentries.md).

## Огляд класів

final class **RarArchive** implements
[Traversable](class.traversable.md) {

/\* Методи \*/

public [close](rararchive.close.md)(): bool

public [getComment](rararchive.getcomment.md)(): string

public [getEntries](rararchive.getentries.md)(): array\|false

public [getEntry](rararchive.getentry.md)(string $entryname):
[RarEntry](class.rarentry.md)\|false

public [isBroken](rararchive.isbroken.md)(): bool

public [isSolid](rararchive.issolid.md)(): bool

public static [open](rararchive.open.md)(string `$filename`, string
`$password` u003d NULL, [callable](language.types.callable.md)
`$volume_callback` u003d NULL): [RarArchive](class.rararchive.md)\|false

public [setAllowBroken](rararchive.setallowbroken.md)(bool
`$allow_broken`): bool

public [\_\_toString](rararchive.tostring.md)(): string

}

## Зміст

- [RarArchive::close](rararchive.close.md) - Закриває RAR архів та
звільняє всі ресурси
- [RarArchive::getComment](rararchive.getcomment.md) — Отримати
текст коментаря з архіву RAR
- [RarArchive::getEntries](rararchive.getentries.md) - Повертає
повний список елементів з RAR архіву
- [RarArchive::getEntry](rararchive.getentry.md) — Повертає об'єкт
елемента з RAR архіву
- [RarArchive::isBroken](rararchive.isbroken.md) — Перевіряє, чи не
чи зламаний архів (не завершено)
- [RarArchive::isSolid](rararchive.issolid.md) — Перевірити, чи є
чи архів суцільним
- [RarArchive::open](rararchive.open.md) - Відкриває архів RAR
- [RarArchive::setAllowBroken](rararchive.setallowbroken.md)
Чи відкривати пошкоджені архіви
- [RarArchive::\_\_toString](rararchive.tostring.md) — Отримати
текстове уявлення
