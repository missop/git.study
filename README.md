### 基本操作复习
git checkout -b b1 => git branch b1&&git checkout b1  创建b1分支并切换到b1
git chekcout -d b1 删除b1分支

git reset master^ 回退到之前一次的提交(^表示前一次) => 旧的commit的指针指向之前的
git revert 撤回之后将记录保留，并生成新的提交

.gitignore忽略文件语法

*.txt
!*.txt

git fetch下载上游仓库时使用

### alias
git dog => git config --global alias.adog "log --all --decorate --oneline --graph"  显示提交分支图

[alias]
co = checkout
ci = commit
st = status
br = branch
sh = stash
sp = stash pop
pu = push
pr = pull -r
rb = rebase
lg = log -p