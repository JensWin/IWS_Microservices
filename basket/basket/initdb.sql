
-- Table: public."Baskets"

-- DROP TABLE public."Baskets";

CREATE TABLE public."Baskets"
(
    "Id" integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "CustomerId" integer NOT NULL,
    CONSTRAINT "PK_Baskets" PRIMARY KEY ("Id")
)

TABLESPACE pg_default;

ALTER TABLE public."Baskets"
    OWNER to postgres;

-- Table: public."BasketItems"

-- DROP TABLE public."BasketItems";

CREATE TABLE public."BasketItems"
(
    "Id" integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "CustomerBasketId" integer NOT NULL,
    "ProductId" integer NOT NULL,
    "ProductName" text COLLATE pg_catalog."default",
    "ProductPrice" double precision NOT NULL,
    "Count" integer NOT NULL,
    CONSTRAINT "PK_BasketItems" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_BasketItems_Baskets_CustomerBasketId" FOREIGN KEY ("CustomerBasketId")
        REFERENCES public."Baskets" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

TABLESPACE pg_default;

ALTER TABLE public."BasketItems"
    OWNER to postgres;

-- Index: IX_BasketItems_CustomerBasketId

-- DROP INDEX public."IX_BasketItems_CustomerBasketId";

CREATE INDEX "IX_BasketItems_CustomerBasketId"
    ON public."BasketItems" USING btree
    ("CustomerBasketId")
    TABLESPACE pg_default;