import Cart from './Cart';

describe('Cart', () => {
  let cart;
  let product;
  let product2;

  beforeEach(() => {
    cart = new Cart();
    product = {
      title: 'Adidas Running - Men',
      price: 35388, // 353.88 | R$ 353,88
    };
    product2 = {
      title: 'Adidas Running - Women',
      price: 41872,
    };
  });

  describe('getTotal()', () => {
    it('should return 0 when getTotal() is executed in a newly created instance ', () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it('should multiply quantity and price and recieve the total amount', () => {
      const item = {
        product,
        quantity: 2, // 70776
      };

      cart.add(item);

      expect(cart.getTotal()).toEqual(70776);
    });

    it('should ensure no more than on product exists at a time', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product,
        quantity: 1,
      });

      expect(cart.getTotal()).toEqual(35388);
    });

    it('should update total when a product gets included and then removed', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal()).toEqual(41872);
    });
  });

  describe('checkout()', () => {
    it('should return an object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.checkout()).toMatchSnapshot();
      expect(cart.checkout()).toMatchInlineSnapshot(`
{
  "items": [
    {
      "product": {
        "price": 35388,
        "title": "Adidas Running - Men",
      },
      "quantity": 2,
    },
    {
      "product": {
        "price": 41872,
        "title": "Adidas Running - Women",
      },
      "quantity": 3,
    },
  ],
  "total": 196392,
}
`);
    });
  });
});
