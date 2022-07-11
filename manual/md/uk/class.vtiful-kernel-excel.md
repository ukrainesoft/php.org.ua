- [«Зумовлені константи](xlswriter.constants.md)
- [Vtiful\Kernel\Excel::addSheet »](vtiful-kernel-excel.addSheet.md)

- [PHP Manual](index.md)
- [XLSWriter](book.xlswriter.md)
- Клас Vtiful\Kernel\Excel

# Клас Vtiful\Kernel\Excel

(PECL xlswriter \>u003d 1.2.1)

## Вступ

Створює файли xlsx із заданими осередками

## Огляд класів

class **Vtiful\Kernel\Excel** {

/\* Методи \*/

public [\_\_construct](vtiful-kernel-excel.construct.md)(array
`$config`)

public [addSheet](vtiful-kernel-excel.addSheet.md)(string
`$sheetName`)

public [autoFilter](vtiful-kernel-excel.autoFilter.md)(string
`$scope`)

public [constMemory](vtiful-kernel-excel.constMemory.md)(string
`$fileName`, string `$sheetName` u003d ?)

public [data](vtiful-kernel-excel.data.md)(array `$data`)

public [fileName](vtiful-kernel-excel.filename.md)(string `$fileName`,
string `$sheetName` u003d ?)

public [getHandle](vtiful-kernel-excel.getHandle.md)()

public [header](vtiful-kernel-excel.header.md)(array `$headerData`)

public [insertFormula](vtiful-kernel-excel.insertFormula.md)(int
`$row`, int `$column`, string `$formula`)

public [insertImage](vtiful-kernel-excel.insertImage.md)(int `$row`,
int `$column`, string `$localImagePath`)

public [insertText](vtiful-kernel-excel.insertText.md)(
int `$row`,
int `$column`,
stringintdouble `$data`,
string `$format` u003d ?
)

public [mergeCells](vtiful-kernel-excel.mergeCells.md)(string
`$scope`, string `$data`)

public [output](vtiful-kernel-excel.output.md)()

public [setColumn](vtiful-kernel-excel.setColumn.md)(string `$range`,
float `$width`, resource `$format` u003d ?)

public [setRow](vtiful-kernel-excel.setRow.md)(string `$range`, float
`$height`, resource `$format` u003d ?)

}

## Зміст

- [Vtiful\Kernel\Excel::addSheet](vtiful-kernel-excel.addSheet.md) -
Додати лист
- [Vtiful\Kernel\Excel::autoFilter](vtiful-kernel-excel.autoFilter.md)
- Додати автофільтр
- [Vtiful\Kernel\Excel::constMemory](vtiful-kernel-excel.constMemory.md)
- Кількість пам'яті
- [Vtiful\Kernel\Excel::\_\_construct](vtiful-kernel-excel.construct.md)
- Конструктор
- [Vtiful\Kernel\Excel::data](vtiful-kernel-excel.data.md) -
Записати дані
- [Vtiful\Kernel\Excel::fileName](vtiful-kernel-excel.filename.md) -
Створити назву файлу
- [Vtiful\Kernel\Excel::getHandle](vtiful-kernel-excel.getHandle.md)
- Отримати дескриптор
- [Vtiful\Kernel\Excel::header](vtiful-kernel-excel.header.md) -
Записати заголовок
- [Vtiful\Kernel\Excel::insertFormula](vtiful-kernel-excel.insertFormula.md)
- Вставити формулу розрахунку
- [Vtiful\Kernel\Excel::insertImage](vtiful-kernel-excel.insertImage.md)
— Вставити зображення
- [Vtiful\Kernel\Excel::insertText](vtiful-kernel-excel.insertText.md)
— Вставити текст
- [Vtiful\Kernel\Excel::mergeCells](vtiful-kernel-excel.mergeCells.md)
- Об'єднати комірки
- [Vtiful\Kernel\Excel::output](vtiful-kernel-excel.output.md) -
Висновок
- [Vtiful\Kernel\Excel::setColumn](vtiful-kernel-excel.setColumn.md)
- Встановити стовпець
- [Vtiful\Kernel\Excel::setRow](vtiful-kernel-excel.setRow.md)
Встановити рядок
