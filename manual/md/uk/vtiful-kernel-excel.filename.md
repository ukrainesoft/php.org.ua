- [« Vtiful\Kernel\Excel::data](vtiful-kernel-excel.data.md)
- [Vtiful\Kernel\Excel::getHandle
»](vtiful-kernel-excel.getHandle.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)
- Створити назву файлу

# Vtiful\Kernel\Excel::fileName

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Excel::fileName — Створити назву файлу

### Опис

public **Vtiful\Kernel\Excel::fileName**(string `$fileName`, string
`$sheetName` u003d ?)

Створити новий файл XLSX та лист у ньому.

### Список параметрів

`fileName`
Ім'я файлу XLSX

`sheetName`
Назва листа

### Значення, що повертаються

Примірник [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [ 'path' u003d> '/home/viest'];$fileObject u003d new \Vtiful\Kernel\Excel($config);$file u003d $instance->fileName('tutorial.xlsx'' , 'sheet');?> `
