# College Vending Hub

SMART VENDING MACHINE — UI + COMPLETE PRODUCT CATALOG

You are working on an existing Smart Vending Machine project.

Upgrade the existing project into a polished, realistic, touch-friendly college smart vending machine application.

IMPORTANT:

Do NOT rebuild the application unnecessarily.

First inspect the existing codebase, understand the existing components, routes, product data, cart state, payment flow, and dispensing flow.

Reuse the existing architecture wherever possible.

==================================================

1. PROJECT CONCEPT

==================================================

This is a Smart Vending Machine, NOT a normal e-commerce website.

The user should feel like they are interacting with a physical vending machine.

Main flow:

USER

↓

Browse Categories

↓

Browse Products

↓

Select Product

↓

Choose Quantity

↓

Add to Trolley

↓

Review Trolley

↓

Proceed to Payment

↓

Stripe Payment

↓

Backend Payment Verification

↓

Dispensing Animation

↓

Collection Tray

↓

Order Completed

==================================================

2. MAIN PRODUCT CATEGORIES

==================================================

The vending machine must contain these categories:

1. CHIPS

2. BISCUITS

3. CHOCOLATES

4. JUICES & DRINKS

5. MILKSHAKES

6. BASIC SNACKS

IMPORTANT:

Each category must contain AT LEAST 15 DIFFERENT PRODUCTS.

Target:

6 categories × 15 products minimum = 90 products minimum.

Do not create duplicate products just to reach 15.

Different flavours/variants can count as separate products ONLY when the actual retail packaging is different.

==================================================

3. STRICT REAL PRODUCT IMAGE REQUIREMENT

==================================================

THIS IS ONE OF THE MOST IMPORTANT REQUIREMENTS.

Every product must use an actual, recognizable product packaging image.

The product image MUST match:

- Brand

- Product name

- Flavour

- Variant

- Package type

Do NOT use:

- Generic product images

- Fake packaging

- CSS-generated packets

- Text-based logos

- Emoji

- AI-generated fake brand packaging

- Random images from another flavour

- Wrong product packaging

- Generic chocolate image for a specific chocolate

- Generic biscuit image for a specific biscuit

- Generic chips image for a specific chips flavour

==================================================

4. EXACT IMAGE MATCHING RULE

==================================================

If product name is:

"KitKat"

Image must be:

REAL KITKAT PACKAGING.

If product name is:

"KitKat Chunky"

Image must be:

REAL KITKAT CHUNKY PACKAGING.

If product name is:

"Lay's Magic Masala"

Image must be:

REAL LAY'S MAGIC MASALA PACKET.

If product name is:

"Lay's American Style Cream & Onion"

Image must be:

REAL LAY'S AMERICAN STYLE CREAM & ONION PACKET.

If product name is:

"Kurkure Masala Munch"

Image must be:

REAL KURKURE MASALA MUNCH PACKET.

If product name is:

"Oreo Original"

Image must be:

REAL OREO ORIGINAL PACKAGING.

If product name is:

"Cadbury Dairy Milk"

Image must be:

REAL CADBURY DAIRY MILK PACKAGING.

Never substitute a visually similar product.

==================================================

5. PRODUCT IMAGE QUALITY

==================================================

Use high-quality product images.

Preferred:

- Transparent background

- Clean white background

- Clean retail product cutout

- Front-facing package

- Complete package visible

- High resolution

- Correct proportions

The image should look like the actual product is physically sitting inside the vending-machine slot.

Use:

object-fit: contain

Do not:

- Crop

- Stretch

- Distort

- Rotate unnecessarily

- Hide the brand

- Hide the flavour

- Cut off the packaging

==================================================

6. PRODUCT IMAGE ASSET STRUCTURE

==================================================

Organize product assets cleanly.

Recommended:

src/

  assets/

    products/

      chips/

      biscuits/

      chocolates/

      drinks/

      milkshakes/

      snacks/

Example:

src/assets/products/chips/lays-magic-masala.png

src/assets/products/chips/lays-classic-salted.png

src/assets/products/chocolates/kitkat.png

src/assets/products/chocolates/dairy-milk.png

src/assets/products/biscuits/oreo-original.png

etc.

Do not put 90+ unrelated files into one directory.

==================================================

7. CHIPS CATEGORY

==================================================

Create AT LEAST 15 products.

Recommended products:

1. Lay's Classic Salted

2. Lay's Magic Masala

3. Lay's American Style Cream & Onion

4. Lay's Chile Limon

5. Lay's Sizzlin' Hot & Sweet

6. Kurkure Masala Munch

7. Kurkure Naughty Tomato

8. Kurkure Chilli Chatka

9. Kurkure Green Chutney

10. Bingo! Tedhe Medhe Masala Tadka

11. Bingo! Mad Angles Achari Masti

12. Uncle Chipps Plain Salted

13. Uncle Chipps Spicy Treat

14. Too Yumm! Karare

15. Too Yumm! Multigrain Chips

Every item must have its correct actual package image.

Example:

Lay's Magic Masala

→ Lay's Magic Masala packet.

Kurkure Masala Munch

→ Kurkure Masala Munch packet.

Do not use one Lay's image for every Lay's flavour.

==================================================

8. BISCUITS CATEGORY

==================================================

Create AT LEAST 15 products.

Recommended:

1. Oreo Original

2. Oreo Chocolate

3. Oreo Vanilla

4. Hide & Seek

5. Hide & Seek Black Bourbon

6. Sunfeast Dark Fantasy Choco Fills

7. Sunfeast Dark Fantasy Bourbon

8. Britannia Good Day Cashew

9. Britannia Good Day Butter

10. Britannia Good Day Chocochip

11. Britannia Marie Gold

12. Parle-G

13. Bourbon

14. 50-50 Sweet & Salt

15. KrackJack

Every product must have the correct package.

For example:

Oreo Original

→ Original Oreo packet.

Hide & Seek

→ Actual Hide & Seek packet.

Dark Fantasy Choco Fills

→ Actual Dark Fantasy Choco Fills packet.

Good Day Cashew

→ Actual Good Day Cashew packet.

Do NOT use one generic biscuit image for all biscuits.

==================================================

9. CHOCOLATES CATEGORY

==================================================

Create AT LEAST 15 products.

Recommended:

1. Cadbury Dairy Milk

2. Cadbury Dairy Milk Silk

3. Cadbury Dairy Milk Silk Oreo

4. Cadbury 5 Star

5. Cadbury 5 Star 3D

6. Cadbury Perk

7. Cadbury Perk Double

8. Nestlé KitKat

9. Nestlé KitKat Chunky

10. Nestlé Munch

11. Nestlé Milkybar

12. Snickers

13. Mars

14. Ferrero Rocher

15. Kinder Joy

Every product must show its actual package.

CRITICAL:

KitKat

→ KitKat image.

Milkybar

→ Milkybar image.

Dairy Milk

→ Dairy Milk image.

5 Star

→ 5 Star image.

Perk

→ Perk image.

Snickers

→ Snickers image.

Do not use a generic chocolate image.

==================================================

10. JUICES & DRINKS CATEGORY

==================================================

Create AT LEAST 15 products.

Recommended:

1. Coca-Cola Can

2. Pepsi Can

3. Sprite Can

4. Fanta Orange Can

5. Thums Up Can

6. Limca

7. Maaza Mango

8. Frooti Mango

9. Appy Fizz

10. Real Fruit Power Orange

11. Real Fruit Power Mango

12. Real Fruit Power Litchi

13. Paper Boat Aamras

14. Paper Boat Coconut Water

15. Bisleri Mineral Water

Use the correct packaging for each.

For cans:

Show actual can.

For bottles:

Show actual bottle.

For juice:

Show actual juice carton/bottle.

For water:

Show actual Bisleri bottle.

Do not use generic beverage images.

==================================================

11. MILKSHAKES CATEGORY

==================================================

Create AT LEAST 15 products.

Use recognizable packaged milkshake/drink products commonly available in India.

Examples:

1. Amul Kool Kesar

2. Amul Kool Badam

3. Amul Kool Rose

4. Amul Kool Elaichi

5. Amul Kool Cafe

6. Cavin's Milkshake Vanilla

7. Cavin's Milkshake Chocolate

8. Cavin's Milkshake Strawberry

9. Cavin's Milkshake Mango

10. Cavin's Milkshake Badam

11. Hershey's Chocolate Milkshake

12. Hershey's Vanilla Milkshake

13. Hershey's Strawberry Milkshake

14. Paper Boat Milkshake / suitable packaged milk beverage

15. Another real packaged milkshake available in the target Indian market

IMPORTANT:

Only use products that actually exist.

If a specific flavour/package is not available, replace it with another real packaged milkshake.

Do NOT invent a product.

==================================================

12. BASIC SNACKS CATEGORY

==================================================

Create AT LEAST 15 products.

Recommended:

1. Haldiram's Aloo Bhujia

2. Haldiram's Bhujia Sev

3. Haldiram's Khatta Meetha

4. Haldiram's Moong Dal

5. Haldiram's Chana

6. Haldiram's Masala Peanuts

7. Balaji Wafers

8. Balaji Masala Wafers

9. Bingo! Tedhe Medhe

10. Banana Chips

11. Roasted Peanuts

12. Masala Peanuts

13. Murukku

14. Sev

15. Mixture

IMPORTANT:

For generic snack products such as "Banana Chips" or "Murukku", use an actual packaged retail product rather than creating fake branded packaging.

If a local/college vending machine uses a specific brand, use that actual brand.

==================================================

13. PRODUCT DATA STRUCTURE

==================================================

Every product should contain:

id

name

brand

category

flavour

price

slot

image

stock

description

isActive

Example:

{

  id: "choc-kitkat",

  name: "KitKat",

  brand: "Nestlé",

  category: "Chocolates",

  flavour: "Milk Chocolate",

  price: 25,

  slot: "C04",

  image: kitkatImage,

  stock: 10,

  isActive: true

}

==================================================

14. PRODUCT SLOT SYSTEM

==================================================

Every product must have a unique vending-machine slot.

Example:

A01

A02

A03

A04

A05

B01

B02

B03

B04

B05

C01

C02

C03

C04

C05

Continue as necessary.

The slot number should be visible subtly on the product card.

==================================================

15. ORANGE BACKGROUND UI

==================================================

The entire application should use a premium orange low-poly visual system inspired by the provided reference screenshot.

Use:

- Orange background

- Abstract polygon shapes

- Subtle gradients

- White/glass cards

- Rounded UI

- Orange accent buttons

- Soft shadows

Do not replace the orange theme.

Do not turn the UI into a generic shopping website.

==================================================

16. PRODUCT CARD

==================================================

Each product card should look like a vending-machine slot.

Structure:

┌──────────────────────────┐

│ A04                  ♥  │

│                          │

│     [PRODUCT IMAGE]      │

│                          │

│      KitKat              │

│      Chocolate           │

│                          │

│      ₹25                 │

│                          │

│      [-] 1 [+]           │

│                          │

│   ADD TO TROLLEY         │

└──────────────────────────┘

Use rounded corners.

Product image must be the main visual focus.

==================================================

17. PRODUCT FRAME

==================================================

Instead of a plain rectangle, use a rounded product frame.

Recommended:

- border-radius: 20–30px

- translucent white

- subtle border

- soft shadow

- subtle inner highlight

The product itself should visually float inside the frame.

==================================================

18. PRODUCT HOVER ANIMATION

==================================================

On hover/touch:

Product:

translateY(-5px)

scale(1.03)

Card:

slightly increase shadow.

Keep animations subtle.

==================================================

19. FILTERS

==================================================

Categories:

All

Chips

Biscuits

Chocolates

Juices & Drinks

Milkshakes

Basic Snacks

Active category:

Orange accent.

Inactive:

White/glass.

==================================================

20. SEARCH

==================================================

Add product search.

Search should work across:

name

brand

flavour

category

Examples:

Search KitKat

Search Lay's

Search Oreo

==================================================

21. PRODUCT DETAILS

==================================================

When a user taps a product:

Show a small product detail panel/modal.

Include:

Large product image

Product name

Brand

Flavour

Price

Stock

Slot

Quantity

Add to Trolley

Keep it simple.

Do not turn it into a large e-commerce product page.

==================================================

22. PRODUCT IMAGE FALLBACK

==================================================

If an image cannot load:

Do not show a broken image.

Show a clean fallback with:

Product name

But this should only happen if the actual image fails.

The primary implementation must always use the correct product image.

==================================================

23. IMAGE VALIDATION

==================================================

Before finalizing the product catalog, verify that:

Product name

Brand

Flavour

Image

all correspond to the same product.

Example:

CORRECT:

Lay's Magic Masala

→ Magic Masala packet

INCORRECT:

Lay's Magic Masala

→ Lay's Classic packet

CORRECT:

KitKat Chunky

→ KitKat Chunky packet

INCORRECT:

KitKat Chunky

→ normal KitKat packet

CORRECT:

Oreo Original

→ Oreo Original packet

INCORRECT:

Oreo Original

→ Oreo Chocolate packet

This rule applies to ALL 90+ products.

==================================================

24. NO FAKE PRODUCTS

==================================================

Do not invent brands or flavours.

If a product variant cannot be verified, replace it with another real product that is commonly available.

The final product list must contain only genuine retail products.

==================================================

25. PRODUCT PRICING

==================================================

Use realistic Indian retail prices.

Small chocolates:

₹5–₹30

Biscuits:

₹10–₹50

Chips:

₹10–₹50

Drinks:

₹20–₹60

Milkshakes:

₹25–₹80

Snacks:

₹10–₹60

Prices can be adjusted based on the actual package size.

==================================================

26. RESPONSIVE TOUCH UI

==================================================

The interface should work on:

- Vending touchscreen

- Desktop

- Laptop

- Tablet

- Mobile

Buttons should be large.

Touch target:

minimum 44px.

Prefer larger controls for the vending machine.

==================================================

27. PERFORMANCE

==================================================

Optimize images.

Prefer:

WebP

PNG

Use appropriate dimensions.

Do not load enormous images unnecessarily.

Lazy-load products when appropriate.

Keep animations smooth.

==================================================

28. ACCESSIBILITY

==================================================

Images:

alt="KitKat chocolate packet"

Buttons must have meaningful labels.

Do not rely only on color for:

SOLD OUT

LOW STOCK

PAYMENT FAILED

==================================================

29. REMOVE OLD PLACEHOLDER PRODUCT SYSTEM

==================================================

If the existing product component currently creates product packages using:

CSS gradients

Text

Pseudo logos

Colored rectangles

remove that visual approach.

Replace it with actual image assets.

Product data should contain:

image

Example:

{

  name: "KitKat",

  image: kitkatImage

}

==================================================

30. DO NOT BREAK EXISTING PROJECT

==================================================

Before coding inspect:

src/components/

src/assets/

src/lib/

src/routes/

src/pages/

package.json

Identify existing:

Product components

Cart state

Payment components

Dispensing components

Product data

API services

Modify existing code instead of unnecessarily creating duplicates.

==================================================

31. FINAL PRODUCT COUNT

==================================================

Minimum:

CHIPS → 15+

BISCUITS → 15+

CHOCOLATES → 15+

JUICES & DRINKS → 15+

MILKSHAKES → 15+

BASIC SNACKS → 15+

TOTAL → 90+ PRODUCTS

Every product must have:

✓ Real product

✓ Correct product name

✓ Correct brand

✓ Correct flavour/variant

✓ Correct image

✓ Correct category

✓ Realistic price

✓ Unique slot

✓ Stock value

==================================================

32. FINAL UI ACCEPTANCE

==================================================

The first stage is complete only when:

1. Orange low-poly background appears.

2. 6 categories exist.

3. Each category contains at least 15 genuine products.

4. Products use correct real packaging images.

5. KitKat displays KitKat packaging.

6. Oreo displays Oreo packaging.

7. Dairy Milk displays Dairy Milk packaging.

8. Lay's flavours display their corresponding flavour packets.

9. Kurkure flavours display their corresponding packets.

10. Biscuit variants display their correct packages.

11. Drinks display correct cans/bottles/cartons.

12. Milkshakes display correct packaged products.

13. Basic snacks display genuine retail products.

14. Product images are the main visual focus.

15. Product cards have rounded premium frames.

16. Product hover animations work.

17. Search works.

18. Category filters work.

19. Product details work.

20. Existing functionality remains intact.

Do not implement the backend or Stripe changes in this stage unless they already exist and are required for the existing application to run.

Focus on completing the UI and product catalog correctly.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/878f07f4-fcd0-402a-ae4f-9381f06371fc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
