CREATE TABLE IF NOT EXISTS public.category
(
    id UUID NOT NULL,
    name VARCHAR NOT NULL,
    CONSTRAINT category_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.person
(
    id UUID NOT NULL,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    role VARCHAR NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.product
(
    id UUID NOT NULL,
    name VARCHAR NOT NULL,
    image VARCHAR,
    category_id UUID NOT NULL,
    unit VARCHAR NOT NULL,
    calories VARCHAR NOT NULL,
    CONSTRAINT product_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.recipe
(
    id UUID NOT NULL,
    name VARCHAR NOT NULL,
    category UUID NOT NULL,
    description VARCHAR,
    author UUID NOT NULL,
    image VARCHAR,
    time VARCHAR,
    CONSTRAINT recipe_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.ingredient
(
    id UUID NOT NULL,
    product_id UUID NOT NULL,
    recipe_id UUID,
    value VARCHAR NOT NULL,
    CONSTRAINT ingredient_pk PRIMARY KEY (id),

    CONSTRAINT fk_product_id
        FOREIGN KEY(product_id)   REFERENCES public.product(id),

    CONSTRAINT fk_recipe_id
        FOREIGN KEY(recipe_id)   REFERENCES public.recipe(id)
);

CREATE TABLE IF NOT EXISTS public.comment
(
    id UUID NOT NULL,
    recipe_id UUID,
    author_id UUID,
    text VARCHAR,
    rating INT,
    CONSTRAINT comment_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.favorite
(
    id UUID NOT NULL,
    recipe_id UUID,
    person_id UUID,
    CONSTRAINT fk_recipe_id
        FOREIGN KEY(recipe_id)   REFERENCES public.recipe(id),
    CONSTRAINT fk_person_id
        FOREIGN KEY(person_id)   REFERENCES public.person(id)
)