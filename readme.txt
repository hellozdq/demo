git init
git add readme.txt
git commit -m "info"
git log �鿴��¼
git log --pretty=oneline
git reset --hard HEAD^ ���˰汾
git reset --hard 1094a ���˵��汾1094a
cat readme.txt �鿴����
git reflog ��¼ÿһ������
git status �鿴�ݴ���

git checkout -- readme.txt ��readme.txt�ļ��ڹ��������޸�ȫ������
һ����readme.txt���޸ĺ�û�б��ŵ��ݴ��������ڣ������޸ľͻص��Ͱ汾��һģһ����״̬��
һ����readme.txt�Ѿ���ӵ��ݴ������������޸ģ����ڣ������޸ľͻص���ӵ��ݴ������״̬��
��֮������������ļ��ص����һ��git commit��git addʱ��״̬��

git reset HEAD readme.txt
������git reset HEAD <file>���԰��ݴ������޸ĳ�������unstage�������·Żع�����

rm test.txt ɾ���ļ�
��ȷҪɾ��
git rm test.txt
git commit -m "info"
ɾ������
git checkout -- test.txt

Զ�ֿ̲�
git remote add origin git@github.com:michaelliao/learngit.git 
git push --u origin master ��һ��
git push origin master

git checkout -b dev
git checkout�������-b������ʾ�������л����൱�������������
$ git branch dev
$ git checkout dev
git branch �鿴��ǰ��֧
git merge dev �ϲ���֧
git branch -d dev ɾ����֧
-------------
�鿴��֧��git branch
������֧��git branch <name>
�л���֧��git checkout <name>
����+�л���֧��git checkout -b <name>
�ϲ�ĳ��֧����ǰ��֧��git merge <name>
ɾ����֧��git branch -d <name>
-----------

git log --graph ����֧�ϲ�ͼ

׼���ϲ�dev��֧����ע��--no-ff��������ʾ����Fast forward��
git merge --no-ff -m "merge with no-ff" dev
�ϲ���֧ʱ������--no-ff�����Ϳ�������ͨģʽ�ϲ����ϲ������ʷ�з�֧���ܿ��������������ϲ�����fast forward�ϲ��Ϳ����������������ϲ���

git stash    stash���ܣ����԰ѵ�ǰ�����ֳ������ء����������Ժ�ָ��ֳ����������




