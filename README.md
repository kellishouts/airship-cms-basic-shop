## Stripe Connect
You will need a fully enabled Stripe Account (not Test-Mode). To create a Stripe Account, go to Stripe.com. You will need legitimate US business credentials such as an FEIN#, Address, SSN (for personal verification) to set up your account.

At the moment, Airship CMS is not available to connect to the Stripe Test-Mode. If your application requires a custom cart & checkout system, please talk to Customer Support about a Staging Server / Developer Tools.

## Pre-Built eCommerce Modules
The following Cart and Checkout Modules are pre-built. Styles can be customized, though you will not be able to edit the following files.

#### Aerocart Module
`/compartments/assets/scripts/aerocart_button.js`

#### Add to Cart Module
`/compartments/assets/scripts/airshop_add_to_cart_button.js`

#### Cart Module
`/compartments/assets/scripts/aerocart.min.js`

#### Checkout Module
`/compartments/assets/scripts/airshop.checkout.min.js`

## Editable Modules

#### Variation Selection
Extend or modify the behavior of product variation selection.
`/compartments/assets/scripts/variation_selection.js`

#### Airshop Email Templates
Airshop Receipt, Shipment, and Invoice Email Templates can be customized.
`/compartments/layouts/airmail.html`
`/compartments/airmail/receipt.html`
`/compartments/airmail/invoice.html`
`/compartments/airmail/shipment.html`

#### Notes
When setting up the site, get a new version of Foundation and Foundation Settings partials.
