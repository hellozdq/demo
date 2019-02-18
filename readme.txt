git init
git add readme.txt
git commit -m "info"
git log 查看记录
git log --pretty=oneline
git reset --hard HEAD^ 回退版本
git reset --hard 1094a 回退到版本1094a
cat readme.txt 查看内容
git reflog 记录每一次命令
git status 查看暂存区

git checkout -- readme.txt 把readme.txt文件在工作区的修改全部撤销
一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
总之，就是让这个文件回到最近一次git commit或git add时的状态。

git reset HEAD readme.txt
用命令git reset HEAD <file>可以把暂存区的修改撤销掉（unstage），重新放回工作区

rm test.txt 删除文件
的确要删除
git rm test.txt
git commit -m "info"
删除错了
git checkout -- test.txt

远程仓库
git remote add origin git@github.com:michaelliao/learngit.git 
git push --u origin master 第一次
git push origin master

git checkout -b dev
git checkout命令加上-b参数表示创建并切换，相当于以下两条命令：
$ git branch dev
$ git checkout dev
git branch 查看当前分支
git merge dev 合并分支
git branch -d dev 删除分支
-------------
查看分支：git branch
创建分支：git branch <name>
切换分支：git checkout <name>
创建+切换分支：git checkout -b <name>
合并某分支到当前分支：git merge <name>
删除分支：git branch -d <name>
-----------

git log --graph 看分支合并图

准备合并dev分支，请注意--no-ff参数，表示禁用Fast forward：
git merge --no-ff -m "merge with no-ff" dev
合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。

git stash    stash功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作




