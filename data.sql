CREATE TABLE invoices (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   content JSONB NOT NULL
);




INSERT INTO invoices
  (content)
VALUES
  ('{
    "createdAt": "2021-08-18",
    "paymentDue": "2021-08-19",
    "description": "Re-branding",
    "paymentTerms": 1,
    "clientName": "Jensen Huang",
    "clientEmail": "jensenh@mail.com",
    "status": "paid",
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "106 Kendell Street",
      "city": "Sharrington",
      "postCode": "NR24 5WQ",
      "country": "United Kingdom"
    },
    "items": [
      {
        "name": "Brand Guidelines",
        "quantity": 1,
        "price": 1800.90,
        "total": 1800.90
      }
    ],
    "total": 1800.90
  }'),
  ('{
    "createdAt": "2021-08-21",
    "paymentDue": "2021-09-20",
    "description": "Graphic Design",
    "paymentTerms": 30,
    "clientName": "Alex Grim",
    "clientEmail": "alexgrim@mail.com",
    "status": "pending",
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "84 Church Way",
      "city": "Bradford",
      "postCode": "BD1 9PB",
      "country": "United Kingdom"
    },
    "items": [
      {
        "name": "Banner Design",
        "quantity": 1,
        "price": 156.00,
        "total": 156.00
      },
      {
        "name": "Email Design",
        "quantity": 2,
        "price": 200.00,
        "total": 400.00
      }
    ],
    "total": 556.00
  }'),
  ('{
    "createdAt": "2021-09-24",
    "paymentDue": "2021-10-01",
    "description": "Website Redesign",
    "paymentTerms": 7,
    "clientName": "John Morrison",
    "clientEmail": "jm@myco.com",
    "status": "paid",
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "79 Dover Road",
      "city": "Westhall",
      "postCode": "IP19 3PF",
      "country": "United Kingdom"
    },
    "items": [
      {
        "name": "Website Redesign",
        "quantity": 1,
        "price": 14002.33,
        "total": 14002.33
      }
    ],
    "total": 14002.33
  }'),
  ('{
    "createdAt": "2021-10-11",
    "paymentDue": "2021-10-12",
    "description": "Logo Concept",
    "paymentTerms": 1,
    "clientName": "Alysa Werner",
    "clientEmail": "alysa@email.co.uk",
    "status": "pending",
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "63 Warwick Road",
      "city": "Carlisle",
      "postCode": "CA20 2TG",
      "country": "United Kingdom"
    },
    "items": [
      {
        "name": "Logo Sketches",
        "quantity": 1,
        "price": 102.04,
        "total": 102.04
      }
    ],
    "total": 102.04
  }'),
  ('{
    "createdAt": "2021-10-7",
    "paymentDue": "2021-10-14",
    "description": "Re-branding",
    "paymentTerms": 7,
    "clientName": "Mellisa Clarke",
    "clientEmail": "mellisa.clarke@example.com",
    "status": "pending",
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "46 Abbey Row",
      "city": "Cambridge",
      "postCode": "CB5 6EG",
      "country": "United Kingdom"
    },
    "items": [
      {
        "name": "New Logo",
        "quantity": 1,
        "price": 1532.33,
        "total": 1532.33
      },
      {
        "name": "Brand Guidelines",
        "quantity": 1,
        "price": 2500.00,
        "total": 2500.00
      }
    ],
    "total": 4032.33
  }'),
  ('{
    "createdAt": "2021-10-01",
    "paymentDue": "2021-10-31",
    "description": "Landing Page Design",
    "paymentTerms": 30,
    "clientName": "Thomas Wayne",
    "clientEmail": "thomas@dc.com",
    "status": "pending",
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "3964  Queens Lane",
      "city": "Gotham",
      "postCode": "60457",
      "country": "United States of America"
    },
    "items": [
      {
        "name": "Web Design",
        "quantity": 1,
        "price": 6155.91,
        "total": 6155.91
      }
    ],
    "total": 6155.91
  }'),
  ('{
    "createdAt": "2021-11-05",
    "paymentDue": "2021-11-12",
    "description": "Logo Re-design",
    "paymentTerms": 7,
    "clientName": "Anita Wainwright",
    "clientEmail": "",
    "status": "draft",
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "",
      "city": "",
      "postCode": "",
      "country": ""
    },
    "items": [
      {
        "name": "Logo Re-design",
        "quantity": 1,
        "price": 3102.04,
        "total": 3102.04
      }
    ],
    "total": 3102.04
  }');

SELECT * FROM invoices;
SELECT * FROM invoices WHERE id = $1;
--add auto time stamp 
https://x-team.com/blog/automatic-timestamps-with-postgresql/

CREATE TABLE invoices (
  id TEXT PRIMARY KEY DEFAULT generate_uid(10),
  content JSONB NOT NULL
);

-- //prefix id

CREATE TABLE invoices (
  id TEXT PRIMARY KEY DEFAULT ('VC_' || generate_uid(8)),
  content JSONB NOT NULL
);
-- WITH TIMESTAMPTZ
CREATE TABLE invoices (
  id TEXT PRIMARY KEY DEFAULT ('VC' || generate_uid(8)),
  content JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);


-- read invoices
SELECT * FROM invoices;
--insert into invoices
INSERT INTO invoices (content) VALUES ('{"createdAt": "2021-08-18"}');
--update invoices
update invoices set content['createdAt'] = '"2022-08-18"' where content['name'] = '"jax"' ;

--delete invoices
DELETE FROM invoices WHERE id ='IVDjIBMUYuZvE'

--sort invoices
 select * from invoices where content['status'] = '"paid"';

 --change status to paid
 update invoices set content ['status'] ='"paid"' where invoices.id = 'iv_srGmRLWKwD';
--drop table
DROP TABLE invoices;

-- check if the functions are defined using
select pg_get_functiondef(to_regproc('gen_random_bytes'));
select pg_get_functiondef(to_regproc('gen_random_uuid'));
--if both functions are not defined then you probably had an error with the extension creation - just drop it and recreate
CREATE EXTENSION pgcrypto;

-- CREATE GENERATE FUNC
CREATE OR REPLACE FUNCTION generate_uid(size INT) RETURNS TEXT AS $$
DECLARE
  characters TEXT := 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  bytes BYTEA := gen_random_bytes(size);
  l INT := length(characters);
  i INT := 0;
  output TEXT := '';
BEGIN
  WHILE i < size LOOP
    output := output || substr(characters, get_byte(bytes, i) % l + 1, 1);
    i := i + 1;
  END LOOP;
  RETURN output;
END;
$$ LANGUAGE plpgsql VOLATILE;

