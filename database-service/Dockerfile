FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD SuperStrongPassWord  
ENV MYSQL_DATABASE employeeDB  
ENV MYSQL_USER user_svc
ENV MYSQL_PASSWORD SuperStrongPassWord

ADD setup.sql /docker-entrypoint-initdb.d
