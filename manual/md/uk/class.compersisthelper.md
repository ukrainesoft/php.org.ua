- [« variant::\_\_construct](variant.construct.md)
- [COMPersistHelper::\_\_construct »](compersisthelper.construct.md)

- [PHP Manual](index.md)
- [COM] (book.com.md)
- Клас COMPersistHelper

# Клас COMPersistHelper

(PHP 5, PHP 7, PHP 8)

## Вступ

**COMPersistHelper** покращує сумісність COM та PHP щодо
`php.ini` директиви [open_basedir](ini.core.md#ini.open-basedir) та
потокових ресурсів

## Огляд класів

final class **COMPersistHelper** {

/\* Методи \*/

public
[\_\_construct](compersisthelper.construct.md)(?[variant](class.variant.md)
`$variant` u003d **`null`**)

public [GetCurFileName](compersisthelper.getcurfilename.md)():
string\|false

public [GetMaxStreamSize](compersisthelper.getmaxstreamsize.md)(): int

public [InitNew](compersisthelper.initnew.md)(): bool

public [LoadFromFile](compersisthelper.loadfromfile.md)(string
`$filename`, int `$flags` u003d 0): bool

public [LoadFromStream](compersisthelper.loadfromstream.md)(resource
`$stream`): bool

public [SaveToFile](compersisthelper.savetofile.md)(?string
`$filename`, bool `$remember` u003d **`true`**): bool

public [SaveToStream](compersisthelper.savetostream.md)(resource
`$stream`): bool

}

## Зміст

- [COMPersistHelper::\_\_construct](compersisthelper.construct.md) -
Конструктор класу COMPersistHelper
- [COMPersistHelper::GetCurFileName](compersisthelper.getcurfilename.md)
— Отримати ім'я файлу
- [COMPersistHelper::GetMaxStreamSize](compersisthelper.getmaxstreamsize.md)
— Отримати максимальний розмір потоку
- [COMPersistHelper::InitNew](compersisthelper.initnew.md)
Ініціалізує об'єкт у стан за замовчуванням
- [COMPersistHelper::LoadFromFile](compersisthelper.loadfromfile.md)
— Завантажити об'єкт із файлу
- [COMPersistHelper::LoadFromStream](compersisthelper.loadfromstream.md)
— Завантажує об'єкт із потоку
- [COMPersistHelper::SaveToFile](compersisthelper.savetofile.md)
Зберегти об'єкт у файл
- [COMPersistHelper::SaveToStream](compersisthelper.savetostream.md)
— Зберігає об'єкт у потоці
