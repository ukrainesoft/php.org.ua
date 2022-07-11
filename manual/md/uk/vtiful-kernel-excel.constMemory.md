- [«
Vtiful\Kernel\Excel::autoFilter](vtiful-kernel-excel.autoFilter.md)
- [Vtiful\Kernel\Excel::\_\_construct
»](vtiful-kernel-excel.construct.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)
- Кількість пам'яті

# Vtiful\Kernel\Excel::constMemory

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Excel::constMemory — Кількість пам'яті

### Опис

public **Vtiful\Kernel\Excel::constMemory**(string `$fileName`, string
`$sheetName` u003d ?)

Запис великого файлу з використанням пам'яті.

### Список параметрів

`fileName`
Ім'я файлу XLSX

`sheetName`
Назва листа

### Значення, що повертаються

Примірник [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [ 'path' u003d> '/home/viest'];$fileObject u003d new \Vtiful\Kernel\Excel($config);$file u003d $instance->constMemory('tutorial.xlsx'' , 'sheet');?> `
