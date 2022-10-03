import Stripe from 'stripe';
const stripe = new Stripe(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        //Add Later
        // customer: stripeId,
        shipping_address_collection: {
          allowed_countries: ['US', 'CA', 'PL'],
        },

        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.title,
                images: [
                  item.image.data.attributes.formats.thumbnail.url,
                ],
              },
              unit_amount: item.price * 100,
            },

            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      });
      console.log(session);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  }
}
