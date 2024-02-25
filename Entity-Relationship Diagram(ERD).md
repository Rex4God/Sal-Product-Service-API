
For performance and scalability the database will have two tables  as defined below:

Merchants Table: Contains information about each merchant.

- merchantId  (Primary Key): VARCHAR
- name:VARCHAR(255)
- email:VARCHAR(255)

Products Table: Contains information about each product.

- productId (Primary Key): VARCHAR,
- merchantId:(Foreign Key referencing Merchants): VARCHAR
- sku_id:VARCHAR(50) 
- name:VARCHAR(255)
- description(TEXT)
- price (DECIMAL)
- dateAdded: TIMESTAMP