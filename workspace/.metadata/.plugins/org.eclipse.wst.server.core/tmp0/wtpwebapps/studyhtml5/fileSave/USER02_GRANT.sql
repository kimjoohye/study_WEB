--12c�������� ���� �����ϵ��� ����
ALTER SESSION SET "_oracle_script"=true;

--���� ORCLSTUDY ����
CREATE USER ORCLSTUDY
IDENTIFIED BY ORACLE;

--���� �ο�
--RESOURCE : ����ڰ� ���̺�, �������� ����� ���� ��ü�� ������ �� �ִ� �⺻ �ý��� ������ ���� ���� ��
--CREATE SESSION : ����Ŭ ���� ����
ALTER SESSION SET "_oracle_script"=true;
GRANT RESOURCE, CREATE SESSION, CREATE TABLE, INSERT ANY TABLE TO ORCLSTUDY;

--���� ����
--�� ������ ������ ORCL���� ������ ��
--ORA-01950: ���̺����̽� 'USERS'�� ���� ������ �����ϴ�. <-- �� ������ ��
--GRANT���� INSERT ANY TABLE�� �߰��ؾ� ��
ALTER USER ORCLSTUDY DEFAULT TABLESPACE USERS QUOTA UNLIMITED ON USERS;