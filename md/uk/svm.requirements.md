- [« Встановлення та налаштування](svm.setup.md)
- [Установка »](svm.installation.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](svm.setup.md)
- Вимоги

## Вимоги

Потрібно, власне, сам Libsvm та його розробницький пакет: для систем
що використовують RPM він називається libsvm-devel, а для систем на базі
Debian – libsvm-dev. Або ж можете завантажити безпосередньо з веб-сайту. Якщо
встановлюєте з [» офіційного
веб-сайту](http://www.csie.ntu.edu.tw/~cjlin/libsvm), треба буде
зробити деякі дії, тому що пакет самостійно не
встановлюється. Наприклад, для встановлення останньої версії (3.1):

wget http://www.csie.ntu.edu.tw/~cjlin/cgi-bin/libsvm.cgi?+http://www.csie.ntu.edu.tw/~cjlin/libsvm+tar.gz
tar xvzf libsvm-3.1.tar.gz
cd libsvm-3.1
make lib
cp libsvm.so.1 /usr/lib
ln -s libsvm.so.1 libsvm.so
ldconfig
ldconfig --print | grep libsvm

На останньому кроці буде виведено розташування встановленого libsvm.
