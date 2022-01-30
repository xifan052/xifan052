#

## 一、安装 mysql

1.cmd 进入`mysql`目录的`bin`文件夹，初始化数据库：

```bash
mysqld --initialize --console
```

2.执行完成后，会输出 root 用户的初始默认密码，如：

```bash
...
2021-12-07T14:43:28.352281Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: =Uy4TMjw_OP2
...
```

`=Uy4TMjw_OP2` 就是初始密码，后续登录需要用到，你也可以在登陆后修改密码。

3.输入以下命令安装 mysql 服务：

```bash
mysqld install
```

如果报以下错误，可以在开始菜单搜索 cmd，右键选择以管理员身份运行

```bash
Install/Remove of the Service Denied!
```

4.安装完之后输入命令启动`mysql`服务：

```bash
net start mysql
```

5.输入`mysql -uroot -p`命令使用`root`账户进入 mysql 控制台

修改初始密码

```bash
# ALTER USER '用户名user'@'主机host' IDENTIFIED WITH mysql_native_password BY '所设置的登录密码'
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root' \g
```

设置环境变量来全局输入 `mysql` 命令，就不需要 cmd 进入`bin`目录再使用`mysql`命令了

```bash
# 1. 找到系统属性-高级-环境变量
# 2. 双击系统变量框中的Path列
# 3. 把mysql的bin文件夹地址添加进去，例如D:\Program Files\mysql-8.0.27-winx64\bin
```

## 二、定义 mysql 数据库

创建数据库

```sql
create database egg_article
```

切换到所创建的数据库

```sql
use egg_article
```

创建表结构

```sql
  create table article(
    id int(10) not null auto_increment, --id自增
    img text default null comment '缩略图',
    title varchar(80) default null comment '文章标题',
    summary varchar(300) default null comment '文章内容',
    primary key(id)
  ) engine = InnoDB AUTO_INCREMENT = 1 comment '文章表'
```

插入表数据

```sql
insert into article(img, title, summary) value(
    'https://images2018.cnblogs.com/blog/1283788/201803/1283788-20180312210245857-1758917794.png',
    'mysql啦',
    '呵呵呵呵呵呵呵呵'
  )
```

## 三、数据库操作

### mysql 常用命令

| 命令                                      | 描述                                         |
| ----------------------------------------- | -------------------------------------------- |
| create database 数据库名                  | 创建数据库                                   |
| drop database 数据库名                    | 删除数据库                                   |
| use 数据库名                              | 切换数据库                                   |
| show databases                            | 展示 mysql 中所有的数据库                    |
| show tables                               | 查询当前数据库中所有的表                     |
| drop tables 表名                          | 删除表                                       |
| select \* from 表名                       | 查询指定表中所有的数据                       |
| select id,name from 表名                  | 查询指定表中指定字段的所有的数据             |
| select \* from 表名 where id = 1          | 查询当前表中的 id 为 1 的数据                |
| update user set pwd = '123' whiere id = 1 | 修改 user 表中 id 为 1 的数据 pwd 字段为 123 |
| delete from user where id = 2             | 删除 user 表中 id 为 2 的数据                |

```bash
  # -h mysql连接地址
  # -u mysql登录用户名
  # -P mysql连接端口(默认为 3306)
  # -p mysql登录密码(不建议直接在后面写密码[明文])

  mysql -uroot -p # 使用root账号,手动输入密码登录mysql
  mysql -uroot -proot # 使用账号为root，密码为root的账户登录mysql
```

### mysql 数据维护

导入数据库数据

```bash
# mysql -uroot -p 需要导入的数据库名 < 需要导入的数据文件.sql
mysql -uroot -p test < test.sql
```

导出数据库数据

```bash
# mysqldump -u root -p 导出的数据库名 > 设置导出的文件名.sql
mysqldump -u root -p egg_article > egg_article.sql
```

[mysql 导出数据库几种方法](https://www.cnblogs.com/alibai/p/4038954.html)

## 魔法传送门

[mysql 教程](https://www.runoob.com/mysql/mysql-tutorial.html)

[Navicat for MySQL 15 注册激活](https://www.jianshu.com/p/ef48ceccdc2e)
