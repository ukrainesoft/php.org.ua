- [« LuaSandbox::getVersionInfo](luasandbox.getversioninfo.md)
- [LuaSandbox::loadString »](luasandbox.loadstring.md)

- [PHP Manual](index.md)
- [LuaSandbox](class.luasandbox.md)
- Завантажує попередньо скомпільований двійковий фрагмент у середу
Lua

# LuaSandbox::loadBinary

(PECL luasandbox \>u003d 1.0.0)

LuaSandbox::loadBinary — Завантажує попередньо скомпільований
двійковий фрагмент у середу Lua

### Опис

public **LuaSandbox::loadBinary**(string `$code`, string `$chunkName` u003d
''): [LuaSandboxFunction](class.luasandboxfunction.md)

Завантажує дані, створені
[LuaSandboxFunction::dump()](luasandboxfunction.dump.md).

### Список параметрів

`code`
Дані з [LuaSandboxFunction::dump()](luasandboxfunction.dump.md).

`chunkName`
Ім'я завантаженої функції.

### Значення, що повертаються

Повертає [LuaSandboxFunction](class.luasandboxfunction.md).

### Дивіться також

- [LuaSandbox::loadString()](luasandbox.loadstring.md) - Завантажує
код Lua у середу Lua
