# README.md

IMPORTANT: Once you've cloned this to your forked repository, ensure that you continuously update this document as you complete each task to demonstrate your ongoing progress.

Please include your shared repository link here:

Example:
Choiru's shared repository: https://github.com/choiruzain-latrobe/Assignment2.git


Make sure for **your case it is in Private**
## Access Database
1 **Plsql Cheat Sheet:**
You can refer to the PostgreSQL cheat sheet [here](https://www.postgresqltutorial.com/postgresql-cheat-sheet/).

2 **Know the Container ID:**
To find out the container ID, execute the following command:
   ```bash
   docker ps
    9958a3a534c9   testsystem-nginx           "/docker-entrypoint.…"   6 minutes ago   Up 6 minutes   0.0.0.0:80->80/tcp   testsystem-nginx-1
    53121618baa4   testsystem-frontend        "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   3000/tcp             testsystem-frontend-1
    c89e46ac94b0   testsystem-api             "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5000/tcp             testsystem-api-1
    9f4aea7cf538   postgres:15.3-alpine3.18   "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5432/tcp             testsystem-db-1
   ```
3. Running the application

**docker compose command:**
   ```bash
   docker compose up --build
   ```

4 **Access postgreSQL in the container:**
Once you have the container ID, you can execute the container using the following command:
You will see the example of running the PostgreSQL inside the container.
   ```bash
   docker exec -it testsystem-db-1 psql -U postgres
   choiruzain@MacMarichoy TestSystem % docker exec -it testsystem-db-1 psql -U postgres                                       
   psql (15.3)
   Type "help" for help.
   
   postgres=# \dt
             List of relations
    Schema |   Name   | Type  |  Owner   
   --------+----------+-------+----------
    public | contacts | table | postgres
    public | phones   | table | postgres
   (2 rows)
  
    postgres=# select * from contacts;
    id |  name  |         createdAt         |         updatedAt         
   ----+--------+---------------------------+---------------------------
     1 | Helmut | 2024-08-08 11:57:57.88+00 | 2024-08-08 11:57:57.88+00
    (1 row)
    postgres=# select * from phones;
    id | phone_type |   number    | contactId |         createdAt          |         updatedAt          
   ----+------------+-------------+-----------+----------------------------+----------------------------
     1 | Work       | 081431      |         1 | 2024-08-08 11:59:04.386+00 | 2024-08-08 11:59:04.386+00


postgres=# select * from contacts;
   ```
Replace `container_ID` with the actual ID of the container you want to execute.

## Executing API

### Contact API


1. Add contacts API  (POST)
```bash
mallareddyannapureddy@Mallareddys-MacBook-Air ~ % http post http://localhost/api/contacts
• name="malla"
НТТР/1.1 200 0K
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 101
Content-Type: application/json; charset=utf-8
Date: Thu, 17 Oct 2024 06:56:46 GMT
ETag: W/"65-B9zCWDQPpcZ/JF3/nzEjlwyPUm8"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express
{
"createdAt": "2024-10-17T06:56:46.715Z",
"id": 2,
"name": "malla",
"updatedAt": "2024-10-17T06:56:46.715Z"
｝

```
2 Get contacts API  (GET)

```bash
[mallareddyannapureddy@Mallareddys-MacBook-Air ~ % http get http://localhost/api/contacts
TTP/1.1 200 0K
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 104
Content-Type: application/json; charset=utf-8
Date: Thu, 17 Oct 2024 06:59:40 GMT
ETag: W/"68-+horxCNkEgzd45by2mSZ6elwn0g"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express
｛
"createdAt": "2024-10-17T06:46:33.320Z",
"id": 1,
"name": "rajesh",
"updatedAt": "2024-10-17T06:59:36.195"
7
```
3. Show/create the API commmand to delete the contacts (DELETE)

```bash
[mallareddyannapureddy@Mallareddys-MacBook-Air ~ % http DELETE http://localhost/api/contacts/2
НТТР/1.1 200 0K
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 47
Content-Type: application/json; charset=utf-8
Date: Thu, 17 Oct 2024 06:57:58 GMT
ETag: W/"2f-i0D5Q04IGfH+OpTTITmyTnSzFvU"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express
{
"message": "Contact was deleted successfully!"
｝




```

4. Show/create the API command to edit the contacts (PUT)
```
mallareddyannapureddy@Mallareddys-MacBook-Air ~ % http PUT http://localhost/api/contacts/1 name="rajesh"
НТТР/1.1 200 0K
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 47
Content-Type: application/json; charset=utf-8
Date: Thu, 17 Oct 2024 06:59:36 GMT
ETag: W/ "2f-9DEigpdI8FmatdY6qgJYc7CM5hQ"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express
｛
"message": "Contact was updated successfully."<img width="896" alt="Screenshot 2024-10-17 at 6 48 07 PM" src="https://github.com/user-attachments/assets/eb2fbf01-d172-4533-8421-7583b1c21489">
<img width="739" alt="Screenshot 2024-10-17 at 6 41 53 PM" src="https://github.com/user-attachments/assets/abd24d58-59d9-4c0f-b373-473239ea6f73">
<img width="801" alt="Screenshot 2024-10-17 at 6 41 11 PM" src="https://github.com/user-attachments/assets/343b2f98-1fd8-45c2-a20f-165141dc0c7f">
<img width="726" alt="Screenshot 2024-10-17 at 6 38 29 PM" src="https://github.com/user-attachments/assets/d211b091-231a-428f-bd22-b867c653cb38">
<img width="781" alt="Screenshot 2024-10-17 at 6 38 02 PM" src="https://github.com/user-attachments/assets/5bfd06f9-77b3-4ac6-beba-c3968d460356">
<img width="684" alt="Screenshot 2024-10-17 at 6 36 19 PM" src="https://github.com/user-attachments/assets/cb01d422-d65d-4b01-9460-2c0dbce0f00e">
<img width="717" alt="Screenshot 2024-10-17 at 6 35 37 PM" src="https://github.com/user-attachments/assets/7d0be62f-15dc-4d42-944e-307e2cb85d9e">
<img width="630" alt="Screenshot 2024-10-17 at 6 34 21 PM" src="https://github.com/user-attachments/assets/84e13d60-cc2d-48c9-bf93-fd455f1b857d">
<img width="739" alt="Screenshot 2024-10-17 at 8 50 58 PM" src="https://github.com/user-attachments/assets/59fdd28b-73c6-49d7-bf40-1e5f7d1053e8">
<img width="789" alt="Screenshot 2024-10-17 at 8 49 59 PM" src="https://github.com/user-attachments/assets/3730ef1c-7dab-4548-8642-10a55f4758a7">
<img width="1047" alt="Screenshot 2024-10-17 at 8 48 11 PM" src="https://github.com/user-attachments/assets/bdab7b3f-b05c-42ce-958c-e94be58a8ee3">
<img width="645" alt="Screenshot 2024-10-17 at 8 46 19 PM" src="https://github.com/user-attachments/assets/900cea7a-fda6-45bb-8ea0-0015f5d26218">

}
```

