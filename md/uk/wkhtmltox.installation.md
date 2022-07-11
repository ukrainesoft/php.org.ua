- [« Вимоги](wkhtmltox.requirements.md)
- [Налаштування під час виконання »](wkhtmltox.configuration.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](wkhtmltox.setup.md)
- Установка

## Установка

Вихідний код цього модуля та двійкові файли для Windows доступні
[» github](https://github.com/krakjoe/wkhtmltox),

Отримання вихідного коду та складання модуля:

git clone https://github.com/krakjoe/wkhtmltox
cd wkhtmltox
phpize
./configure --with-wkhtmltoxu003d/path/to/wkhtmltox/installation
make
sudo make install

Отримання оновлень та повторне складання модуля:

cd wkhtmltox
phpize --clean
git pull origin master
phpize
./configure --with-wkhtmltoxu003d/path/to/wkhtmltox/installation
make
sudo make install
